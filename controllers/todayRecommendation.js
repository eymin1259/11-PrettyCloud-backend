const showSpace = require('../utils/showSpaces');

const get = async (req, res, next) => {
  try {
    const classType = 1;
    const offset = 0;
    const limit = 3;
    const recommendationList = await showSpace(classType, offset, limit);
    
    res.status(201).json({
      recommendation: recommendationList,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { get };
