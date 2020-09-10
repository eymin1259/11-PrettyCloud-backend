const { QueryTypes } = require('sequelize');
const { sequelize } = require('../models/index');
const bcrypt = require('bcrypt');

const postReservation = async function(req, res, next) {
  try {
    const { date, start_time, end_time, people, total_fee, space_id, user_id } = req.body;

    await sequelize.query(`INSERT INTO users VALUES(DEFAULT, "${date}", "${start_time}", "${end_time}", "${people}", "${total_fee}", current_timestamp, current_timestamp, current_timestamp, ${space_id}, ${user_id})`, { 
      type: QueryTypes.INSERT 
    });

    res.status(201).json({
      message: 'SUCCESS'
    });
  } catch(err) {
    next(err);
  }
};

module.exports = { postReservation };