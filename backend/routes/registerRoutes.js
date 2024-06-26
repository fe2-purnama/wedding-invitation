const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');

// Route for registering a user
router.post('/register', registerController.register);

module.exports = router;

