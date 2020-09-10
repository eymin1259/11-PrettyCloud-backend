const searchSpaces = require('../utils/searchSpaces');

const get = async (req, res, next) => {
  try {
    const classType = 3;
    const offset = Number(req.query.offset);
    const limit = Number(req.query.limit);
    const { search } = req.query;
    const spaceInfos = await searchSpaces(classType, offset, limit, search);

    res.status(201).json({
      normalClass: spaceInfos,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { get };
