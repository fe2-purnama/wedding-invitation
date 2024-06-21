const bcrypt = require('bcryptjs');
const pool = require('../library/database');

// Register a new user
exports.register = async (req, res) => {
    const { username, email, password, phone, address } = req.body;

    try {
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert user into database
        const sql = 'INSERT INTO users (username, email, password, phone, address) VALUES (?, ?, ?, ?, ?)';
        pool.query(sql, [username, email, hashedPassword, phone, address], (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).send({ error: 'Registration failed' });
            } else {
                res.status(201).send({ message: 'User registered successfully' });
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Registration failed' });
    }
};
