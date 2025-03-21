const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
    try {
        // Get token from cookies
        const token = req.cookies.token;
        if (!token) return res.status(401).json({ message: "Unauthorized, no token" });

        // Verify token
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;  // Add user data to request object
        next();
    } catch (err) {
        res.status(401).json({ message: "Invalid token" });
    }
};
