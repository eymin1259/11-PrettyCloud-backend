const db = require('../database');

class Users {
  constructor(  email, name, phone, password, profile_url ){
    this.email = email;
    this.name = name;
    this.phone = phone;
    this.password = password;
    this.profile_url = profile_url;
  }
}

module.exports = Users;