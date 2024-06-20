const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = require('../library/database'); // mengimpor pool koneksi

// Route untuk registrasi pengguna
router.post('/register', async (req, res) => {
  const { username, email, password, phone, address, role } = req.body;
  try {
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Simpan ke database menggunakan pool
    const sql = 'INSERT INTO tbl_users (username, email, password, phone, address, role) VALUES (?, ?, ?, ?, ?, ?)';
    pool.query(sql, [username, email, hashedPassword, phone, address, role], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send({ error: 'Error!! gagal register' });
      } else {
        res.status(201).send({ message: 'User berhasil register' });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Error!! gagal register' });
  }
});

// Route untuk login pengguna
router.post('/login', async (req, res) => {
  const { username, password} = req.body;
  try {
    // Cari pengguna berdasarkan username
    const sql = 'SELECT * FROM tbl_users WHERE username = ? ';
    pool.query(sql, [username], async (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).send({ error: 'Error logging in' });
      }

      if (results.length === 0) {
        return res.status(404).send({ error: 'User not found' });
      }

      // Bandingkan password
      const hashedPassword = results[0].password;
      const isMatch = await bcrypt.compare(password, hashedPassword);

      if (!isMatch) {
        return res.status(401).send({ error: 'Invalid credentials' });
      }

      // Retrieve user role
      const role = results[0].role;

      // Buat token JWT
      const token = jwt.sign({ userId: results[0].id }, 'secret', { expiresIn: '1h' });
      res.send({ username: username, token: token, role: role, message: 'Login Accepted' });
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Error logging in' });
  }
});

module.exports = router;
