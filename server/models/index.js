var db = require('../db');




module.exports = {
  messages: {
    get: function (query,cb) {
      db.selectMessage(query,cb)
    }, // a function which produces all the messages
    post: function (data) {
    // a function which can be used to insert a message into the database
      db.insertMessage(data);
    }
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (data) {
      db.insertUser(data.username);
    }
  }
};

