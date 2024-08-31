const express = require('express');
const router = express.Router();
const { authController } = require('../controllers/');
const { signupValidator, signinValidator } = require('../validators/auth');
const validate = require('../validators/validate');

router.post("/signup", signupValidator, validate, authController.signup);
router.post("/signin", signinValidator, validate, authController.signin);

module.exports = router;
