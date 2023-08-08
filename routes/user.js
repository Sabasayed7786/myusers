const express = require('express');
const authenticateToken = require('../middleware/authenticateToken');
const userController = require('../controllers/userController');

const router = express.Router();

// Protected user details endpoint
router.get('/details', authenticateToken, userController.getUserDetails);

// Protected route for Fetch user settings
router.get('/settings', authenticateToken, userController.getUserSettings);

module.exports = router;

