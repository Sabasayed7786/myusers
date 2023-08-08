const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

async function signup(req, res) {
  try {
    const { username, email, password } = req.body;

    // Issue a JWT token upon successful signup
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET);
    res.status(201).json({ message: "User registered successfully!", token });
  } catch (err) {
    res.status(500).json({ error: "Failed to register user." });
  }
}

async function login(req, res) {
  try {
    const { username, password } = req.body;

    // Issue a JWT token upon successful login
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: "Failed to login." });
  }
}

module.exports = { signup, login };
