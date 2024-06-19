const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = require('../library/database');

// Login a user
exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Find user by username
        const sql = 'SELECT * FROM users WHERE username = ?';
        pool.query(sql, [username], async (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).send({ error: 'Error logging in' });
            }

            if (results.length === 0) {
                return res.status(404).send({ error: 'User not found' });
            }

            const user = results[0];

            // Compare provided password with hashed password
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(401).send({ error: 'Invalid credentials' });
            }

            // Create JWT token
            const token = jwt.sign({ userId: user.id }, 'secret', { expiresIn: '1h' });
            res.send({ token });
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Error logging in' });
    }
};
