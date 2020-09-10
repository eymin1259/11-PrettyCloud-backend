const { QueryTypes } = require('sequelize');
const { sequelize, Users } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const getOneUser = async function(req, res, next) {
  try{
    const { email, password } = req.body;

    const dbUser = await Users.findOne({
      where: {
        email: email
      }
    }); 

    if(!dbUser){
      const error = new Error('LOGIN_FAIL');
      error.statusCode = 400;
      throw error;
    }

    const dbPw = dbUser.dataValues.password;
    const dbId = dbUser.dataValues.id;

    const result = await bcrypt.compare(password, dbPw);
    
    if(!result){
      const error = new Error('LOGIN_FAIL');
      error.statusCode = 400;
      throw error;
    }

    const token = jwt.sign({
      dbId
    }, process.env.JWT_SECRET, {
      expiresIn: '10h',
      issuer: 'host'
    })

    res.status(200).json({
      token,
      message: 'SUCCESS'
    });
  } catch(err) {
    next(err);
  }
}

module.exports = { getOneUser };