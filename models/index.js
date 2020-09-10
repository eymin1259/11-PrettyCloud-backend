const sequelize = require('../database');

const sequelizeModels = function ({ sequelize, models }) {
  return models.reduce((sequelized, model) => {
    return {
      ...sequelized,
      [model]: require(`./${model}`)(sequelize),
    };
  }, {});
};

const models = [
  'Amenities',
  'Categories',
  'ClassTypes',
  'Images',
  'PaymentTypes',
  'Reply',
  'Reservations',
  'Reviews',
  'SpaceAmenity',
  'SpaceCategory',
  'Spaces',
  'Users',
  'WishList',
  'Collections',
  'SpaceCollection',
];
const model = sequelizeModels({ sequelize, models });

// 1: 1 association
model.Reviews.hasOne(model.Reply);
model.Reply.belongsTo(model.Reviews);

// 1:n associations
model.PaymentTypes.hasMany(model.Spaces);
model.Spaces.belongsTo(model.PaymentTypes);

model.ClassTypes.hasMany(model.Spaces);
model.Spaces.belongsTo(model.ClassTypes);

model.Spaces.hasMany(model.Images);
model.Images.belongsTo(model.Spaces);

model.Spaces.hasMany(model.Reviews);
model.Reviews.belongsTo(model.Spaces);

model.Users.hasMany(model.Reviews);
model.Reviews.belongsTo(model.Users);

model.Spaces.hasMany(model.Reviews);
model.Reviews.belongsTo(model.Spaces);

model.Users.hasMany(model.Reviews);
model.Reviews.belongsTo(model.Users);

model.Spaces.hasMany(model.WishList);
model.WishList.belongsTo(model.Spaces);

model.Users.hasMany(model.WishList);
model.WishList.belongsTo(model.Users);

model.Spaces.hasMany(model.Reservations);
model.Reservations.belongsTo(model.Spaces);

model.Users.hasMany(model.Reservations);
model.Reservations.belongsTo(model.Users);

// n:m association
model.Spaces.belongsToMany(model.Amenities, {
  through: 'SpaceAmenity',
  foreignKey: 'space_id',
});
model.Amenities.belongsToMany(model.Spaces, {
  through: 'SpaceAmenity',
  foreignKey: 'amenity_id',
});

model.Spaces.belongsToMany(model.Categories, {
  through: 'SpaceCategory',
  foreignKey: 'space_id',
});
model.Categories.belongsToMany(model.Spaces, {
  through: 'SpaceCategory',
  foreignKey: 'category_id',
});

// model.Spaces.belongsToMany(model.Users, {
//   through: 'Reviews',
//   foreignKey: 'space_id',
// });
// model.Users.belongsToMany(model.Spaces, {
//   through: 'Reviews',
//   foreignKey: 'user_id',
// });

// model.Spaces.belongsToMany(model.Users, {
//   through: 'Reservations',
//   foreignKey: 'space_id',
// });
// model.Users.belongsToMany(model.Spaces, {
//   through: 'Reservations',
//   foreignKey: 'user_id',
// });

// model.Spaces.belongsToMany(model.Users, {
//   through: 'WishList',
//   foreignKey: 'space_id',
// });
// model.Users.belongsToMany(model.Spaces, {
//   through: 'WishList',
//   foreignKey: 'user_id',
// });

model.Spaces.belongsToMany(model.Collections, {
  through: 'SpaceCollection',
  foreignKey: 'space_id',
});
model.Collections.belongsToMany(model.Spaces, {
  through: 'SpaceCollection',
  foreignKey: 'collection_id',
});

module.exports = { sequelize, ...model };
