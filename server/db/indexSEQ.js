var Sequelize = require("sequelize");
var sequelize = new Sequelize("chat", "root", "");

var User = sequelize.define('user_id', {
  username: Sequelize.STRING,
  user_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
});

var Message = sequelize.define('message', {
  username: Sequelize.INTEGER,
  message: Sequelize.STRING,
  roomname: Sequelize.STRING
});

module.exports.selectUser = function(query,cb){
  User.sync().success(function(){
    User.findAll({ where: {username: query} }).success(function(usrs) {
      console.log(usrs);
      cb(false,usrs);
    });
  })
}

module.exports.insertUser = function(query){
  User.sync().success(function(){
    var newUser = User.build({username: query});
    newUser.save().success(function() {
      console.log('done');
    });
  })
}

module.exports.selectMessage = function(query,cb){
  Message.sync().success(function(){
    Message.findAll().success(function(msgs){
      console.log(msgs);
      cb(false,msgs);
    })
  })
}

module.exports.insertMessage = function(query){
  Message.sync().success(function(){
    query.username = query.username || 'null';
    var newMessage = Message.build(query);
    newMessage.save().success(function() {
      console.log('done');
    });
  })
}



