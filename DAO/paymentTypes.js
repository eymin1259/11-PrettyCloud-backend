const db = require('../database');

class PaymentTypes {
  constructor({ id, type}){
    this.id = id;
    this.type = type;
  }
}

module.exports = PaymentTypes;