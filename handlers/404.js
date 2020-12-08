'use strict';

function notFoundHandler(req, res) {
  res.status(404).send('File Not Found');
}

module.exports = notFoundHandler;