const sequelize = require('../database');

const sequelizeModels = function ({ sequelize, models }) {
  return models.reduce((sequelized, model) => {
    return {
      ...sequelized,
      [model]: require(`./${model}`)(sequelize),
    };
  }, {});
};

const models = ['Amenities', 'Categories', 'ClassTypes', 'Images', 'PaymentTypes', 'Reply','Reservations', 'Reviews', 'SpaceAmenity', 'SpaceCategory','Spaces','Users','WishList'];
const model = sequelizeModels({ sequelize, models });

console.log(model);

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

// n:m association
model.Spaces.belongsToMany(model.Amenities, { through: 'SpaceAmenity',  foreignKey: 'space_id'});
model.Amenities.belongsToMany(model.Spaces, { through: 'SpaceAmenity',  foreignKey: 'amenity_id'});

model.Spaces.belongsToMany(model.Categories, { through: 'SpaceCategory',  foreignKey: 'space_id'});
model.Categories.belongsToMany(model.Spaces, { through: 'SpaceCategory',  foreignKey: 'category_id'});

model.Spaces.belongsToMany(model.Users, { through: 'Reviews',  foreignKey: 'space_id'});
model.Users.belongsToMany(model.Spaces, { through: 'Reviews',  foreignKey: 'user_id'});

model.Spaces.belongsToMany(model.Users, { through: 'Reservations',  foreignKey: 'space_id'});
model.Users.belongsToMany(model.Spaces, { through: 'Reservations',  foreignKey: 'user_id'});

model.Spaces.belongsToMany(model.Users, { through: 'WishList',  foreignKey: 'space_id'});
model.Users.belongsToMany(model.Spaces, { through: 'WishList',  foreignKey: 'user_id'});

module.exports = { sequelize, model };