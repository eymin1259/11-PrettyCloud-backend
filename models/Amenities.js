const { DataTypes } = require('sequelize');

module.exports = function (sequelize) {
  return sequelize.define(
    'Amenities', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      img_url: {
        type: DataTypes.STRING(2000),
        allowNull: true,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, {
      freezeTableName: true,
      underscored: true,
      timestamps: false
    }
  );
};