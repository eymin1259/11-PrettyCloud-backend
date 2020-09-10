const { DataTypes } = require('sequelize');

module.exports = function (sequelize) {
  return sequelize.define(
    'Collections', {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      img_url :{
        type: DataTypes.STRING(2000),
        allowNull: false,
      },
      description :{
        type: DataTypes.STRING(500),
        allowNull: false,
      }
    }, {
      freezeTableName: true,
      underscored: true,
      timestamps: false
    }
  );
};