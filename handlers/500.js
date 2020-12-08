'use strict';

module.exports = (error, request, result, next) => {
  result.status(500).send({
    error: 500,
    route: request.path,
    message: `The server has encountered an error: ${error.message}
    When accessing: ${error.route}`
  });
};
