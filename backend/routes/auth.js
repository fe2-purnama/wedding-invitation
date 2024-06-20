const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = require('../library/database');

// Function to generate a random ID
const generateRandomId = () => {
  return Math.floor(Math.random() * 1000000); // Generates a random number between 0 and 999999
};

// Route untuk registrasi user
router.post('/auth/registerUser', async (req, res) => {
  const { username, email, password, phone, address, role } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const id_users = generateRandomId();
    const sql = 'INSERT INTO tbl_users (id_users, username, email, password, phone, address, role) VALUES (?, ?, ?, ?, ?, ?, ?)';
    pool.query(sql, [id_users, username, email, hashedPassword, phone, address, role], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send({ error: 'Error, User is not registered' });
      } else {
        res.status(201).send({ message: 'Registration successfull' });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Error, User is not registered' });
  }
});

// Route untuk login user
router.post('/auth/loginUser', async (req, res) => {
  const { username, password } = req.body;
  try {
    // Cari pengguna berdasarkan username
    const sql = 'SELECT * FROM tbl_users WHERE username = ?';
    pool.query(sql, [username], async (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).send({ error: 'Error logging in' });
      }
      if (results.length === 0) {
        return res.status(404).send({ error: 'User not found' });
      }
      const hashedPassword = results[0].password;
      const isMatch = await bcrypt.compare(password, hashedPassword);
      if (!isMatch) {
        return res.status(401).send({ error: 'Invalid credentials' });
      }
      const user = results[0];
      const token = jwt.sign({ userId: results[0].id }, 'secret', { expiresIn: '1h' });
      res.status(200).send({
        data: {
          id: user.id,
          username: user.username,
          email: user.email,
          phone: user.phone,
          address: user.address
        },
        token,
        message: 'Login Accepted',
      });
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Error logging in' });
  }
});

// Route untuk registrasi Admin
router.post('/auth/registerAdmin', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const id_admin = generateRandomId();
    const sql = 'INSERT INTO tbl_admins (id_admin, username, email, password) VALUES (?, ?, ?, ?)';
    pool.query(sql, [id_admin, username, email, hashedPassword], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send({ error: 'Error, Admin is not registered' });
      } else {
        res.status(201).send({ message: 'Registration successful' });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Error, Admin is not registered' });
  }
});

// Route untuk login Admin
router.post('/auth/loginAdmin', async (req, res) => {
  const { username, password } = req.body;
  try {
    const sql = 'SELECT * FROM tbl_admins WHERE username = ?';
    pool.query(sql, [username], async (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).send({ error: 'Error logging in' });
      }
      if (results.length === 0) {
        return res.status(404).send({ error: 'Admin not found' });
      }
      const hashedPassword = results[0].password;
      const isMatch = await bcrypt.compare(password, hashedPassword);
      if (!isMatch) {
        return res.status(401).send({ error: 'Invalid credentials' });
      }
      const user = results[0];
      const token = jwt.sign({ userId: results[0].id }, 'secret', { expiresIn: '1h' });
      res.status(200).send({
        data: {
          id: user.id,
          username: user.username,
          email: user.email,
          phone: user.phone,
          address: user.address
        },
        token,
        message: 'Login Accepted',
      });
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Error logging in' });
  }
});

module.exports = router;
