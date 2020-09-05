const usersRouter = require('./usersRouter');
const spacesRouter = require('./spacesRouter');

const router = function (app) {
    app.use('/users', usersRouter);
    app.use('/spaces', spacesRouter)
};
  
module.exports = router;