const { DataTypes } = require('sequelize');

module.exports = function (sequelize) {
  return sequelize.define(
    'PaymentTypes', {
      type: {
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