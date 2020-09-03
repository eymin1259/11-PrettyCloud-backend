const { DataTypes } = require('sequelize');

module.exports = function (sequelize) {
  return sequelize.define(
    'Spaces', {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subTitle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING(1000),
        allowNull: false,
        defaultValue: ''
      },
      opening_hour: { // 오픈시간
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      closing_hour: { // 마감시간
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      closed_day: {     // 휴무일
        type: DataTypes.STRING,
        allowNull: false,
      },
      capacity: {       // 수용인원
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      fee: {            // 시간당요금
        type: DataTypes.DECIMAL(12, 4),
        allowNull: false,
      },
      precautions: {    // 주의사항
        type: DataTypes.STRING(1000),
        allowNull: false,
      },
      refund_policy: {  // 환불규정
        type: DataTypes.STRING(1000),
        allowNull: false,
      },
      address: {        // 주소
        type: DataTypes.STRING,
        allowNull: false,
      },
      like_number: {    // 좋아요 갯수
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      review_number: {  // 리뷰갯수
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      avg_rating: {     // 평균평점
        type: DataTypes.DECIMAL(2,1),
        allowNull: false,
        defaultValue: 0
      },
      min_time: {       // 최소예약시간
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    }, {
      freezeTableName: true,
      underscored: true,
      timestamps: false
    }
  );
};