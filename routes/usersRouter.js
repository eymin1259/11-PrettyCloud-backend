const express = require('express');
const signupController = require('../controllers/signupController');
const signinController = require('../controllers/signinController');
const reservationController = require('../controllers/reservationController');

const router = express.Router();

router.post('/signup', signupController.postUsers);

router.post('/signin', signinController.getOneUser);

router.post('/insertReservation', reservationController.postReservation);

module.exports = router;