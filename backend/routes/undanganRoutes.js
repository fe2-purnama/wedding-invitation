const express = require('express');
const router = express.Router();
const undanganController = require('../controllers/undanganController');
const authMiddleware = require('../middleware/authMiddleware');

// Middleware untuk memastikan user telah login
router.use(authMiddleware);

//  membuat undangan baru
router.post('/', undanganController.createInvitation);


// melihat semua undangan
router.get('/', undanganController.getAllInvitations);

//  detail undangan berdasarkan ID
router.get('/:id', undanganController.getInvitationById);

//  menghapus undangan berdasarkan ID
router.delete('/:id', undanganController.deleteInvitation);

module.exports = router;
