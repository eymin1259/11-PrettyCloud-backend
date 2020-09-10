const searchSpaces = require('../utils/searchSpaces');

const get = async (req, res, next) => {
  try {
    const classType = 2;
    const offset = 0;
    const limit = 3;
    const { search } = req.query;
    const spaceInfos = await searchSpaces(classType, offset, limit, search);

    res.status(201).json({
      plusClass: spaceInfos,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { get };
