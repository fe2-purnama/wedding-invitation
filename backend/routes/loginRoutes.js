const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

// Route for logging in a user
router.post('/login', loginController.login);

module.exports = router;
