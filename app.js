const express = require('express');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const searchRouter = require('./routes/search');

const app = express();

app.use(logger('dev'));

app.use('/', indexRouter);
app.use('/search', searchRouter);

module.exports = app;
