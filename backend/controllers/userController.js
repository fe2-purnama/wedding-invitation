const pool = require('../library/database'); // mengimpor pool koneksi

// Fetch all users
exports.getUsers = async (req, res) => {
  try {
    const sql = 'SELECT * FROM users';
    pool.query(sql, (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send({ error: 'Error!! gagal fetch users' });
      } else {
        res.status(200).json(result);
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Error!! gagal fetch users' });
  }
};

// Fetch a user by ID
exports.getUserById = async (req, res) => {
  const id = req.params.id; // Extract id from request parameters

  try {
    const sql = 'SELECT * FROM users WHERE id = ?';
    pool.query(sql, [id], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send({ error: 'Error fetching user' });
      } else {
        if (result.length > 0) {
          res.status(200).json(result[0]); // Send the first user found (assuming ID is unique)
        } else {
          res.status(404).send({ error: 'User not found' });
        }
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Error fetching user' });
  }
};

// Delete a user by ID
exports.deleteUserById = async (req, res) => {
  const id = req.params.id; // Extract id from request parameters

  try {
    const sql = 'DELETE FROM users WHERE id = ?';
    pool.query(sql, [id], (err, result) => {
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
};

// Update a user by ID
exports.updateUserById = async (req, res) => {
  const id = req.params.id; // Extract id from request parameters
  const { username, email, password, phone, address } = req.body;

  try {
    const sql = 'UPDATE tbl_users SET username = ?, email = ?, password = ?, phone = ?, address = ? WHERE id_users = ?';
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
};
