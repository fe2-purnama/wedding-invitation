const express = require('express');
const router = express.Router();
const undanganController = require('../controllers/undanganController');
const authMiddleware = require('../middleware/authMiddleware');

// Middleware untuk memastikan user telah login
router.use(authMiddleware);

// Endpoint untuk membuat undangan baru
router.post('/', undanganController.createInvitation);

// Endpoint untuk mendapatkan semua undangan
router.get('/', undanganController.getAllInvitations);

// Endpoint untuk mendapatkan detail undangan berdasarkan ID
router.get('/:id', undanganController.getInvitationById);

// Endpoint untuk menghapus undangan berdasarkan ID
router.delete('/:id', undanganController.deleteInvitation);

module.exports = router;
