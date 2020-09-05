const db = require('../database');

class Amenities {
  constructor({ id, name, img_url, description }){
    this.id = id;
    this.name = name;
    this.img_url = img_url;
    this.description = description;
  }
}

module.exports = Amenities;