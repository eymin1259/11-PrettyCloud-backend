const express = require('express');
const signupController = require('../controllers/signupController');
const signinController = require('../controllers/signinController');
const getUserController = require('../controllers/getUserController');

const router = express.Router();

router.post('/signup', signupController.postUsers);

router.post('/signin', signinController.getOneUser);

router.post('/getUser', getUserController.getUsers);

module.exports = router;