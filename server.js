'use strict';

// Libraries //

require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Local Files //
const notFoundHandler = require('./handlers/404.js');
const errorHandler = require('./handlers/500.js');

// Routes //

app.get('/', (req, res) => {
  res.status(200).send('Hello World');
});
app.get('/data', (req, res) => {
  let outputObject = {
    "time": new Date()
  };
  res.status(200).send(outputObject);
});
app.get('/bad', (req, res, next) => {
  next('It should break');
});
app.use('*', notFoundHandler);
app.use(errorHandler);

// Server Init //

// turning server on
function start(port) {
  app.listen(port, () => console.log(`server is listening on ${port}`));
}

module.exports = {
  app: app,
  start: start
}