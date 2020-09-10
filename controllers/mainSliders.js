const { Collections } = require('../models');

const get = async (req, res, next) => {
  try {
    const sliderInfo = await Collections.findAll({
      attributes: ['id', 'title', 'img_url', 'description'],
    });
    res.status(201).json({
      mainSlider: sliderInfo,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { get };
