const { QueryTypes } = require('sequelize');
const { sequelize } = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const getOneUser = async function(req, res, next) {
  try{
    const { email, password } = req.body;

    let dbUser = {}; 
    
    await sequelize.query(`SELECT * FROM users WHERE email="${email}"`, { 
      type: QueryTypes.SELECT 
    }).then(queryData => dbUser = queryData[0]);

    if(!dbUser){
      const error = new Error('NOT_EXIST_USER');
      error.statusCode = 400;
      throw error;
    }

    const dbPw = dbUser.password;
    const dbId = dbUser.id;

    const result = await bcrypt.compare(password, dbPw);
    
    if(!result){
      const error = new Error('WRONG_PW');
      error.statusCode = 400;
      throw error;
    }

    const token = jwt.sign({
      dbId,
      email
    }, process.env.JWT_SECRET, {
      expiresIn: '1h',
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