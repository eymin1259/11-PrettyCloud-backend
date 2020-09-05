// db의 데이터를 접근할 수 있도록 객체 정의
const Amenities = require('./amenities');
const Categories = require('./categories');
const ClassTypes = require('./classTypes');
const Images = require('./images');
const PaymentTypes = require('./paymentTypes');
const Reply = require('./reply');
const Reservations = require('./reservations');
const Reviews = require('./reviews');
const SpaceAmenity = require('./spaceAmenity');
const SpaceCategory = require('./spaceCategory');
const Spaces = require('./spaces');
const Users = require('./users');
const WishList = require('./wishList');

module.exports = { Amenities, Categories, ClassTypes, Images, PaymentTypes, Reply, Reservations, Reviews, SpaceAmenity, SpaceCategory, Spaces, Users, WishList };