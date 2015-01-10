var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    get: function (req, res) {
    // a function which handles a get request for all messages
      url = req.url.slice(1,req.url.length-1);
      // console.log(url)
      models[url].get(req.body, function(err, data){
        // console.log(data[0].user_ids[0].dataValues)
        console.log(data)
        if(data.length === 0){
          res.end();
        } else {
          res.end(JSON.stringify(data));
        }
      });
    },
    post: function (req, res) {
    // a function which handles posting a message to the database
      url = req.url.slice(1,req.url.length-1);
      // console.log(req.body)
      models[url].post(req.body);
      res.end();
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {

    },
    post: function (req, res) {
      url = req.url.slice(1,req.url.length-1);

      models[url].post(req.body);
      res.end();
    }
  }
};

