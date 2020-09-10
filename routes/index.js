const usersRouter = require('./usersRouter');
const spacesRouter = require('./spacesRouter');
const reservationRouter = require('./reservationRouter');

const router = function (app) {
  app.use('/users', usersRouter);
  app.use('/spaces', spacesRouter)
  app.use('/reservation', reservationRouter);
};
  
module.exports = router;