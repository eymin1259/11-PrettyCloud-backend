const db = require('../database');

class SpaceCategory {
  constructor({ id, space_id, category_id }){
    this.id = id;
    this.space_id = space_id;
    this.category_id = category_id;
  }
}

module.exports = SpaceCategory;