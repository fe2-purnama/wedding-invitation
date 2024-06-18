const express = require('express');
const router = express.Router();
const pool = require('../library/database'); // mengimpor pool koneksi

router.get('/forgotpw', async (req, res) => {
  const { email } = req.body;
  try {
    // Check if user exists
    const existingUser = await pool.query('SELECT * FROM tbl_users WHERE email = ?', [email]);
    if (existingUser.length === 0) {
      res.status(404).send({ error: 'User not found' });
    } else {
      const RandomNumberGenerator = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
      res.status(200).send({ message: `Your password reset code is: ${RandomNumberGenerator}` });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Error!! gagal reset password' });
  }
});

router.put('/updatepw', async (req, res) => {
  const id_users = req.params.id;
  const {password} = req.body;

  try {
    const sql = 'UPDATE tbl_users SET password = ? WHERE id_users = ?';
    pool.query(sql, [password, id_users], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send({ error: 'Error updating user' });
      } else {
        res.status(200).json({ message: 'User updated successfully', affectedRows: result.affectedRows });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Error updating user' });
  }
});

router.get('/users', async (req, res) => {
  const { username, email, password, phone, address, role } = req.body;
  try {
    const sql = 'SELECT * FROM tbl_users';
    pool.query(sql, [username, email, password, phone, address, role], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send({ error: 'Error!! gagal register' });
      } else {
        res.status(200).json(result);
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Error!! gagal register' });
  }
});

router.get('/user/:id', async (req, res) => {
  const id_users = req.params.id; // Extract id from request parameters

  try {
    const sql = 'SELECT * FROM tbl_users WHERE id_users = ?';
    pool.query(sql, [id_users], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send({ error: 'Error fetching user' });
      } else {
        if (result.length > 0) {
          res.status(200).json(result); // Send the first user found (assuming ID is unique)
        } else {
          res.status(404).send({ error: 'User not found' });
        }
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Error fetching user' });
  }
});

router.delete('/user/:id', async (req, res) => {
  const id_users = req.params.id; // Extract id from request parameters

  try {
    const sql = 'DELETE FROM tbl_users WHERE id_users = ?';
    pool.query(sql, [id_users], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send({ error: 'Error Failed to Delete Data' });
      } else {
        res.status(200).json({ message: 'User deleted successfully', affectedRows: result.affectedRows });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Error deleting user' });
  }
});

router.put('/user/:id', async (req, res) => {
  const id_users = req.params.id; // Extract id from request parameters
  const { username, email, password, phone, address} = req.body;

  try {
    const sql = 'UPDATE tbl_users SET username = ?, email = ?, password = ?, phone = ?, address = ?, WHERE id_users = ?';
    pool.query(sql, [username, email, password, phone, address, id_users], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send({ error: 'Error updating user' });
      } else {
        res.status(200).json({ message: 'User updated successfully', affectedRows: result.affectedRows });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Error updating user' });
  }
});

module.exports = router;
