const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'coba'
});

db.connect(err => {
  if (err) {
    throw err;
  }
  console.log('MySQL connected...');
});

// Register endpoint
app.post('/register', (req, res) => {
  const { username, email, password, phone, address } = req.body;
  const sql = 'INSERT INTO users (username, email, password, phone, address) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [username, email, password, phone, address], (err, result) => {
    if (err) throw err;
    res.send({ msg: 'User registered' });
  });
});

// Login endpoint
app.post('/login', (req, res) => {
  const { emailOrUsername, password } = req.body;
  const sql = 'SELECT * FROM users WHERE (email = ? OR username = ?) AND password = ?';
  db.query(sql, [emailOrUsername, emailOrUsername, password], (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      res.send({ msg: 'Login successful' });
    } else {
      res.status(401).send({ msg: 'Invalid credentials' });
    }
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
