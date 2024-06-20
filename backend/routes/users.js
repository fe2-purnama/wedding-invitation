const express = require('express');
const router = express.Router();
const pool = require('../library/database');
const bcrypt = require('bcryptjs');

router.get('/users', async (req, res) => {
  //getall
  const { username, email, password, phone, address, role } = req.body;
  try {
    const sql = 'SELECT * FROM tbl_users';
    pool.query(sql, [username, email, password, phone, address, role], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send({ error: 'Error, failed to fetch data' });
      } else {
        res.status(200).json({ data: result, message: 'Data fetched' });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Error, failed to fetch data' });
  }
});

router.get('/user/:id', async (req, res) => {
  //getbyid
  const id_users = req.params.id;
  try {
    const sql = 'SELECT * FROM tbl_users WHERE id_users = ?';
    pool.query(sql, [id_users], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send({ error: 'Error fetching user' });
      } else {
        if (result.length > 0) {
          res.status(200).json({ data: result, message: 'Data fetched' });
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
  //del
  const id_users = req.params.id; // Extract id from request parameters

  try {
    const sql = 'DELETE FROM tbl_users WHERE id_users = ?';
    pool.query(sql, [id_users], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send({ error: 'Error, failed to delete data' });
      } else {
        res.status(200).json({ message: 'Data deleted successfully', affectedRows: result.affectedRows });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Error, failed to delete data' });
  }
});

router.put('/user/:id', async (req, res) => {
  //put
  const { username, email, password, phone, address, role, id_users } = req.body;
  try {
    const sql = `UPDATE tbl_users SET username = ?, email = ?, password = ?, phone = ?, address = ?, role = ? WHERE id_users = ?`;
    // const hashedPassword = await bcrypt.hash(password, 10);
    pool.query(sql, [username, email, password, phone, address, role, id_users], (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send({ error: 'Error, failed to update data' });
      } else {
        res.status(200).json({ message: 'Data updated successfully', affectedRows: result.affectedRows });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Something Error' });
  }
});

module.exports = router;
