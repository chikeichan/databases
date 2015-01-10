var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
var connection = mysql.createConnection(
  {
    user: 'root',
    password: '',
    database: 'chat'
  }
);

module.exports.selectUser = function(query,cb){
  var queryString = 'SELECT * FROM user_id WHERE username = "' + query + '"';
  connection.query(queryString,function(err,results){
    if(err){
      console.log(err);
    } else {
      if(results.length === 0){
        cb(true, query);
      } else {
        cb(false, results)
      }
    }
  });
}



module.exports.insertUser = function(query){
  var insertString = "INSERT INTO user_id ( username ) values ('"+query+"')";
  this.selectUser(query, function(err,data){
    if(err){
      connection.query(insertString,function(err,results){
        if(err){
          console.log(err);
        } else {
          console.log('done');
        }
      });
    }
  })
}
//////

module.exports.selectMessage = function(query,cb){
  var queryString = 'SELECT * FROM messages';
  if(Object.keys(query).length > 0){
    queryString = queryString + ' WHERE username = "' + query + '"';
  }
  connection.query(queryString,function(err,results){
    // console.log(queryString, 'query')
    // console.log(results, 'from DB')
    if(err){
      console.log(err);
    } else {
      if(results.length === 0){
        cb(true, query);
      } else {
        // console.log(results);
        cb(false, JSON.stringify(results));
      }
    }
  });
}

/////

module.exports.insertMessage = function(query){
  var username;
  var ctx = this;
  var roomname = query.roomname;
  this.selectUser(query.username, function(err, d){
    if(!err){
      username = d[0].user_id;
      var message = query.message;
      var insertString = "INSERT INTO messages ( message, username, roomname ) values ('"+message+"','"+username+"','"+roomname+"')";
      connection.query(insertString,function(err,results){
        if(err){
          console.log(err);
        } else {
          console.log('done posting message')
        }
      })
    }
  })
}



