const db = require('../database');

class SpaceAmenity {
  constructor({ id, space_id, amenity_id }){
    this.id = id;
    this.space_id = space_id;
    this.amenity_id = amenity_id;
  }
}

module.exports = SpaceAmenity;