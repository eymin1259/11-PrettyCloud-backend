const express = require('express');
const signupController = require('../controllers/signupController');
const signinController = require('../controllers/signinController');

const router = express.Router();

router.post('/signup', signupController.postUsers);

router.post('/signin', signinController.getOneUser);

module.exports = router;