const usersRouter = require('./usersRouter');

const router = function (app) {
  app.use('/users', usersRouter);
};
  
module.exports = router;