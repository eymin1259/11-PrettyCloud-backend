const db = require('../database');

class WishList{
  constructor({ id, space_id, user_id }){
    this.id = id;
    this.space_id = space_id;
    this.user_id = user_id;
  }
}

module.exports = WishList;