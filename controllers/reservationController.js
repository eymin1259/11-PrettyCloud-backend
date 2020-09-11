const { QueryTypes } = require('sequelize');
const { sequelize, Users } = require('../models');
const bcrypt = require('bcrypt');

const postReservation = async function(req, res, next) {
  try {
    const result = verifyToken(req);

    const { date, start_time, end_time, people, total_fee, space_id } = req.body;

    await Users.create({
      date,
      start_time,
      end_time,
      people,
      total_fee
    });

    await sequelize.query(`update reservations set space_id=${space_id}, user_id=${result.dbId} where id in (select * from (select id from reservations order by id desc limit 1) as t)`);

    res.status(201).json({
      message: 'SUCCESS'
    });
  } catch(err) {
    next(err);
  }
};

const getReservation = async function(req, res, next) {
  try {
    const result = await verifyToken(req);

    await sequelize.query(`select s.title, r.start_time, r.end_time, r.people, r.total_fee from (select * from reservations where user_id=${result.dbId}) r, spaces s where s.id = r.space_id`)
    .then(reservations => {
      res.status(201).json({
      message: 'SUCCESS',
      data: reservations
      })
    }) 
  } catch(err) {
    next(err);
  }
}

module.exports = { postReservation, getReservation };