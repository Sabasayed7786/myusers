const User = require("../models/user");

async function getUserDetails(req, res) {
  try {
    // Fetch user details from the database using the userId from the JWT payload
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    res.json(userDetails);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch user details." });
  }
}

async function getUserSettings(req, res) {
  try {
    // Fetch user settings from the database using the userId from the JWT payload
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    // Fetch the user's settings
    const userSettings = {
      theme: user.theme,
      language: user.language,
      notifications: user.notifications,
    };

    res.json(userSettings);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch user settings." });
  }
}

module.exports = { getUserDetails, getUserSettings };
