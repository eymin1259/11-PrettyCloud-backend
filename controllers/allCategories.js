const { Categories } = require('../models');

const get = async (req, res, next) => {
  try {
    const allCategories = await Categories.findAll({
      attributes: ['category'],
    });
    res.status(201).json({
      categories: allCategories.map(elem => elem.dataValues.category),
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { get };
