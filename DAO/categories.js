const db = require('../database');

class Categories {
  constructor({ id, category }){
    this.id = id;
    this.category = category;
  }
}

module.exports = Categories;