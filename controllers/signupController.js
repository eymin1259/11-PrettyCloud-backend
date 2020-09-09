const { QueryTypes } = require('sequelize');
const { sequelize } = require('../models/index');
const bcrypt = require('bcrypt');

const postUsers = async function(req, res, next) {
  try {
    const { email, name, password, profile_url } = req.body;

    if(!email || !name || !password){
      const error = new Error('EMPTY_VALUE');
      error.statusCode = 400;
      throw error;
    }

    await sequelize.query(`SELECT * FROM users WHERE email="${email}"`, { 
      type: QueryTypes.SELECT 
    }).then(queryData => {
      if(queryData[0]){
        const error = new Error('ALREADY_EXIST_EMAIL');
        error.statusCode = 400;
        throw error;
      }
    });

    const hashPw = await bcrypt.hash(password, Number(process.env.BCRYPT_SECRET_KEY));

    await sequelize.query(`INSERT INTO users VALUES(DEFAULT, "${email}", "${name}", "", "${hashPw}", "${profile_url}", current_timestamp, current_timestamp, current_timestamp)`, { 
      type: QueryTypes.INSERT 
    });

    res.status(201).json({
      message: 'SUCCESS'
    });
  } catch(err) {
    next(err);
  }
};

module.exports = { postUsers };