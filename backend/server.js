const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");

dotenv.config();

const app = express();
let mongoConnection;

// Allow frontend domains. Add deployed URLs with FRONTEND_URLS as a comma-separated list.
const allowedOrigins = [
  "http://localhost:3000",
  "http://127.0.0.1:8080",
  "https://starter-petcare.vercel.app"
].concat((process.env.FRONTEND_URLS || "").split(",").map(origin => origin.trim()).filter(Boolean));

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("CORS not allowed"));
    }
  },
  credentials: true
}));

async function connectToDatabase(req, res, next) {
  try {
    if (mongoose.connection.readyState === 1) {
      return next();
    }

    mongoConnection = mongoConnection || mongoose.connect(process.env.MONGO_URI);
    await mongoConnection;
    return next();
  } catch (err) {
    console.log("MongoDB Connection Error: ", err);
    return res.status(500).json({ error: "Database connection error" });
  }
}

// Import Routes
const authRoutes = require("./routes/auth");
app.use("/api", connectToDatabase);
app.use("/api/auth", authRoutes);

// Vercel handles app.listen().
module.exports = app;
