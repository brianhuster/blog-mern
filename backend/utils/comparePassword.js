const bcrypt = require('bcryptjs');

const comparePassword = (password, hash) => {
    return bcrypt.compare(password, hash);
}

module.exports = comparePassword;
