// Import the required modules
const express = require("express");
const router = express.Router();

// Import the required controllers and middleware functions
const { login, signup } = require("../controller/Auth");

// Routes for Login, Signup, and Authentication

// ********************************************************************************************************
//                                      Authentication routes
// ********************************************************************************************************

// Route for user login
router.post("/login", login);

// Route for user signup
router.post("/signup", signup);

module.exports = router;
