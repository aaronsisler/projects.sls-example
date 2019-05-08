"use strict";

module.exports.endpoint = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello, I made a change.  The current time is ${new Date().toTimeString()}.`
    })
  };

  callback(null, response);
};
