const express = require('express');
const reservationController = require('../controllers/reservationController');

const router = express.Router();

router.post('/insert', reservationController.postReservation);

router.get('/get', reservationController.getReservation);

module.exports = router;