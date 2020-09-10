const { Spaces, Categories, Images, Reviews } = require('../models');
const { Op } = require('sequelize');
const sequelize = require('sequelize');

const searchSpaces = async (classType, offset, limit, qString) => {
  const spaceList = await Spaces.findAll({
    include: [Categories, Images],
    where: {
      class_type_id: classType,
      [Op.or]: [
        {
          title: {
            [Op.like]: '%' + qString + '%',
          },
        },
        {
          subTitle: {
            [Op.like]: '%' + qString + '%',
          },
        },
        {
          description: {
            [Op.like]: '%' + qString + '%',
          },
        },
        {
          address: {
            [Op.like]: '%' + qString + '%',
          },
        },
      ],
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
  });

  return spaceList;
};

module.exports = searchSpaces;
