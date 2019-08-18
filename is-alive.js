"use strict";

module.exports.isAlive = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      isAlive: true,
      message: `Hello, the current time is ${new Date().toTimeString()}.`
    })
  };

  callback(null, response);
};
