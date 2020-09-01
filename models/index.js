const sequelize = require("../database");

const sequelizeModels = function ({ sequelize, models }) {
  return models.reduce((sequelized, model) => {
    return {
      ...sequelized,
      [model]: require(`./${model}`)(sequelize),
    };
  }, {});
};

const models = [];
const model = sequelizeModels({ sequelize, models });

console.log(model);

// Associations

module.exports = { sequelize, model };