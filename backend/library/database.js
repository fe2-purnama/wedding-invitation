const mysql = require('mysql');

// Buat pool koneksi ke database MySQL
const pool = mysql.createPool({
  connectionLimit: 10, // jumlah maksimal koneksi dalam pool
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'wedding_db'
});

// Kondisi untuk mengecek koneksi database
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to database:', err);
  } else {
    console.log('Connected to MySQL database successfully!');
    connection.release();
  }
});

module.exports = pool;