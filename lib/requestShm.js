'use strict';

const axios = require('axios');

module.exports = {
  post: (obj, cb) => {
    axios.post(obj.url, { json: obj.form.json })
      .then(response => {
        cb(null, response, response.data);
      })
      .catch(error => {
        cb(error, error.response, error.response.data);
      });
  }
};
