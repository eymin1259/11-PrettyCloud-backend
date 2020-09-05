const db = require('../database');

class Spaces {
  constructor({ id, title, subTitle, description, opening_hour, closing_hour, closed_day, capacity, fee, precautions, refund_policy, address, like_number, review_number, avg_rating, min_time, payment_type_id, class_type_id }){
    this.id = id;
    this.title = title;
    this.subTitle = subTitle;
    this.description = description;
    this.opening_hour =opening_hour;
    this.closing_hour = closing_hour;
    this.closed_day = closed_day;
    this.capacity = capacity;
    this.fee = fee;
    this.precautions = precautions;
    this.refund_policy = refund_policy;
    this.address = address;
    this.like_number = like_number;
    this.review_number = review_number;
    this.avg_rating = avg_rating;
    this.min_time = min_time;
    this.payment_type_id = payment_type_id;
    this.class_type_id = class_type_id;
  }
}

module.exports = Spaces;