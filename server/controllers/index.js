var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    get: function (req, res) {
    // a function which handles a get request for all messages
      models[req.url.slice(1)].get(req.body, function(err, data){
        res.end(data);
      });
    },
    post: function (req, res) {
    // a function which handles posting a message to the database
      models[req.url.slice(1)].post(req.body);
      res.end();
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {

    },
    post: function (req, res) {
      models[req.url.slice(1)].post(req.body);
      res.end();
    }
  }
};

