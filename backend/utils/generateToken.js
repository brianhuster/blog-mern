const jwt = require('jsonwebtoken');
const { JWT_SCERET } = require('../config/keys');

const generateToken = (user) => {
    const token = jwt.sign(
        {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role
        },
        JWT_SCERET,
        { expiresIn: '1h' }
    );
    return token;
}

module.exports = generateToken;
