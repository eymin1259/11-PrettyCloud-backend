const showSpace = require('../utils/showSpaces');

const get = async (req, res, next) => {
  try {
    const classType = 3;
    const offset = Number(req.query.offset);
    const limit = Number(req.query.limit);
    const spaceInfos = await showSpace(classType, offset, limit);

    res.status(201).json({
      reviews: spaceInfos,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { get };
