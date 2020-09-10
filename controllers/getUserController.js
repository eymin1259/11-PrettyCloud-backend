const { sequelize, Users } = require('../models');
const verifyToken = require('../middlewares/verifyToken');

const getUsers = async function(req, res, next) {
  try {
    const result = await verifyToken(req);

    const user = await Users.findOne({
      where: result.dbId
    });

    res.status(201).json({
      message: 'SUCCESS',
      userName: user.name
    });
  } catch(err) {
    next(err);
  }
};

module.exports = { getUsers };