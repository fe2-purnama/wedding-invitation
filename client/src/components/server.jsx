const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3306;

app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: 'pass',
  database: 'wedding_db'
});

db.connect(err => {
  if (err) {
    throw err;
  }
  console.log('MySQL connected...');
});

// Endpoint to register a user
app.post('/register', (req, res) => {
  const { username, email, password, phone, address } = req.body;
  const sql = 'INSERT INTO users (username, email, password, phone, address) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [username, email, password, phone, address], (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send('User registered');
    }
  });
});

// Endpoint to login a user
app.post('/login', (req, res) => {
  const { usernameOrEmail, password } = req.body;
  const sql = 'SELECT * FROM users WHERE (username = ? OR email = ?) AND password = ?';
  db.query(sql, [usernameOrEmail, usernameOrEmail, password], (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else if (result.length > 0) {
      res.send('Login successful');
    } else {
      res.status(401).send('Invalid credentials');
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
