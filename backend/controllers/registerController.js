const bcrypt = require('bcryptjs');
const pool = require('../library/database');

// Register a new user
exports.register = async (req, res) => {
    const { username, email, password, phone, address, role } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const sql = 'INSERT INTO tbl_users (username, email, password, phone, address, role) VALUES (?, ?, ?, ?, ?, ?)';
        pool.query(sql, [username, email, hashedPassword, phone, address, role], (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).send({ error: 'Registrasi gagal' });
            } else {
                res.status(201).send({ message: 'User berhasil register' });
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Registrasi gagal' });
    }
};
