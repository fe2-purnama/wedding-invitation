const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = require('../library/database');

// Login user
exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const sql = 'SELECT * FROM tbl_users WHERE username = ?';
        pool.query(sql, [username], async (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).send({ error: 'Error logging in' });
            }

            if (results.length === 0) {
                return res.status(404).send({ error: 'User tidak ada' });
            }

            const user = results[0];
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(401).send({ error: 'password salah' });
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
