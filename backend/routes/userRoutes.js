const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.use(authMiddleware);
// Route for logging in a user
router.get('/', userController.getUsers);
router.get('/:id', userController.getUserById);
router.delete('/:id', userController.deleteUserById);
router.put('/:id', userController.updateUserById);

module.exports = router;
