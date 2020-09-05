const db = require('../database');

class Reviews {
  constructor({ id, space_id, user_id, description, rating, createdAt }){
    this.id = id;
    this.space_id = space_id;
    this.user_id = user_id;
    this.description = description;
    this.rating = rating;
    this.createdAt = createdAt;
  }
}

module.exports = Reviews;