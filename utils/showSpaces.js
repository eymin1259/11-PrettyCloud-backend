const { Spaces, Categories, Images, Reviews } = require('../models');

const showSpaces = async (classType, offset, limit) => {
  const spaceList = await Spaces.findAll({
    include: [Categories, Images, Reviews],
    where: {
      class_type_id: classType,
    },
    offset: offset,
    limit: limit,
  });

  spaceList.forEach((elem) => {
    elem.dataValues.address = elem.dataValues.address
      .match(/[가-힣]+구(?=\s)/)
      .pop();

    const categoryArr = elem.dataValues.Categories.map(
      (el) => el.dataValues.category
    );
    delete elem.dataValues.Categories;
    elem.dataValues.tags = categoryArr;

    const mainImg = elem.dataValues.Images.pop().dataValues.url;
    delete elem.dataValues.Images;
    elem.dataValues.imgUrl = mainImg;

    const mainReviw = elem.dataValues.Reviews.pop().dataValues.description;
    delete elem.dataValues.Reviews;
    elem.dataValues.review = mainReviw;
  });

  return spaceList;
};

module.exports = showSpaces;
