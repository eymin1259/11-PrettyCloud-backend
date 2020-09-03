const { DataTypes } = require('sequelize');

module.exports = function (sequelize) {
  return sequelize.define(
    'Images', {
      url: {
        type: DataTypes.STRING(2000),
        allowNull: false,
      }
    }, {
      freezeTableName: true,
      underscored: true,
      timestamps: false
    }
  );
};