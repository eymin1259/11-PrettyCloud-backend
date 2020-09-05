const db = require('../database');

class Reservations {
  constructor({ id, space_id, user_id, date, start_time, end_time, people, total_fee}){
    this.id = id;
    this.space_id = space_id;
    this.user_id = user_id;
    this.date = date;
    this.start_time = start_time;
    this.end_time = end_time;
    this.people = people;
    this.total_fee = total_fee;
  }
}

module.exports = Reservations;