const {check} = require('express-validator');

const signupValidator = [
    check('name').notEmpty().withMessage('Name is required'),
    check('email').notEmpty().withMessage('Email is required').isEmail().withMessage('Email is invalid'),
    check('password').notEmpty().withMessage('Password is required').isLength({min: 6}).withMessage('Password must be at least 6 characters')
];

const signinValidator = [
    check('email').notEmpty().withMessage('Email is required').isEmail().withMessage('Email is invalid'),
    check('password').notEmpty().withMessage('Password is required').isLength({min: 6}).withMessage('Password must be at least 6 characters')
];

module.exports = { signupValidator, signinValidator };
