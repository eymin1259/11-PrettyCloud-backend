const { QueryTypes } = require('sequelize');
const { sequelize, Users } = require('../models');
const bcrypt = require('bcrypt');

const postUsers = async function(req, res, next) {
  try {
    const { email, name, password, profile_url } = req.body;

    if(!email || !name || !password){
      const error = new Error('EMPTY_VALUE');
      error.statusCode = 400;
      throw error;
    }

    await Users.findOne({
      where: {
        email: email
      }
    }).then(userData => {
      if(userData){
        const error = new Error('ALREADY_EXIST_EMAIL');
        error.statusCode = 400;
        throw error;
      }
    })

    const hashPw = await bcrypt.hash(password, Number(process.env.BCRYPT_SECRET_KEY));

    await Users.create({
      email: email,
      name: name,
      phone: '',
      password: hashPw,
      profile_url: profile_url
    });

    res.status(201).json({
      message: 'SUCCESS'
    });
  } catch(err) {
    next(err);
  }
};

module.exports = { postUsers };