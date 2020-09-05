const db = require('../database');

class Reply {
  constructor({ id, description }){
    this.id = id;
    this.description = description;
  }
}

module.exports = Reply;