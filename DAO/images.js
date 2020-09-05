const db = require('../database');

class Images {
  constructor({ id, url }){
    this.id = id;
    this.url = url;
  }
}

module.exports = Images;