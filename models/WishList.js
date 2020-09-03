const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  return sequelize.define(
    'WishList', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      }
    }, {
      freezeTableName: true,
      paranoid: true,
      underscored: true,
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at',
    }
  )
}