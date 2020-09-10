const usersRouter = require('./usersRouter');
const reservationRouter = require('./reservationRouter');

const router = function (app) {
  app.use('/users', usersRouter);
  app.use('/reservation', reservationRouter);
};
  
module.exports = router;