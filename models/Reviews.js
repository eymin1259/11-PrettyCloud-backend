const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  return sequelize.define(
    'Reviews', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      description: {
        type: DataTypes.STRING(2000),
        allowNull: false
      },
      rating: {
        type: DataTypes.DECIMAL(5, 1),
        allowNull: false,
        defaultValue: 0
      }
    }, {
      freezeTableName: true,
      paranoid: true,
      underscored: true,
      timestamps: false
    }
  )
}