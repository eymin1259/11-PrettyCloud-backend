const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  return sequelize.define(
    'Reply', {
      description: {
        type: DataTypes.STRING(200),
        allowNull: false
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