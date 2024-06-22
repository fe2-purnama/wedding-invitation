const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).send({ error: 'Token not provided' });
    }

    jwt.verify(token, 'secret', (err, decoded) => {
        if (err) {
            return res.status(401).send({ error: 'Invalid token' });
        }

        req.userId = decoded.userId;
        next();
    });
};

module.exports = authMiddleware;
