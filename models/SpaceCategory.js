const { DataTypes } = require('sequelize');

module.exports = function (sequelize) {
  return sequelize.define(
    'SpaceCategory', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      }
    }, {
      freezeTableName: true,
      underscored: true,
      timestamps: false
    }
  );
};