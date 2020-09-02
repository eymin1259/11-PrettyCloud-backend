const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  return sequelize.define(
    'Reservations', {
      date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      start_time: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      end_time: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      people: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      total_fee: {
        type: DataTypes.DECIMAL(12, 4),
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
  );
};