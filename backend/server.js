const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");

dotenv.config();

const app = express();

// Allow frontend domains
const allowedOrigins = [
  "http://localhost:3000",
  "http://127.0.0.1:8080",
  "https://yourfrontend.vercel.app" // ✅ Add your frontend Vercel URL here
];

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

// Import Routes
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Connection Error: ", err));

// ✅ Vercel doesn't require `app.listen()`, so export `app`
module.exports = app;
