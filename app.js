const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const logger = require('morgan')('dev');

const router = require('./routes');

const app = express();
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
app.use(cors());
app.use(logger);

router(app);

app.use((error, req, res, next) => {
    const {statusCode, message} = error;
    const status = statusCode || 500;
    error.statusCode = statusCode || 500;
    console.log(error);
    res.status(status).json({message});
});

module.exports = app;