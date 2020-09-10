const {
  Spaces,
  Categories,
  Amenities,
  Images,
  Reviews,
  Users,
} = require('../models');

const get = async (req, res, next) => {
  try {
    const spaceId = Number(req.params.spaceId);

    const detailInfo = await Spaces.findAll({
      include: [
        Categories,
        Amenities,
        Images,
        {
          model: Reviews,
          include: [Users],
        },
      ],
      where: {
        id: spaceId,
      },
    });

    detailInfo.forEach((elem) => {
      const categoryArr = elem.dataValues.Categories.map(
        (el) => el.dataValues.category
      );
      delete elem.dataValues.Categories;
      elem.dataValues.tags = categoryArr;

      elem.dataValues.Amenities.forEach(
        (el) => delete el.dataValues.SpaceAmenity
      );

      const imageArr = elem.dataValues.Images.map((el) => el.dataValues.url);
      delete elem.dataValues.Images;
      elem.dataValues.imgUrl = imageArr;

      const reviewArr = elem.dataValues.Reviews.forEach((el) => {
        el.dataValues.user = el.dataValues.User.dataValues.name;
        delete el.dataValues.SpaceId;
        delete el.dataValues.UserId;
        delete el.dataValues.User;
      });
    });

    res.status(201).json({
      detail: detailInfo,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { get };
