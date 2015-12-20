var db = require('../db');


// packages the database stuff into teh appropriate json object?  hands it off to index.js in Controllers folder
//'SELECT * FROM `books` WHERE `author` = ?'

module.exports = {
  messages: {
    get: function (req) {
      db.query('SELECT * from messages', function(err, rows){
      //  console.log(rows);
        req(rows);

      });
    },
    // a function which produces all the messages
    //http://stackoverflow.com/questions/8899802/how-do-i-do-a-bulk-insert-in-mysql-using-node-js
    // var mysql = require('node-mysql');
    // var conn = mysql.createConnection({
    //     ...
    // });

// var sqlCommand = "INSERT INTO messages (name, email, n) VALUES ?";
// var values = [
//     ['demian', 'demian@gmail.com', 1],
//     ['john', 'john@gmail.com', 2],
//     ['mark', 'mark@gmail.com', 3],
//     ['pete', 'pete@gmail.com', 4]
// ];
    // conn.query(sql, [values], function(err) {
    //     if (err) throw err;
    //     conn.end();
    // });

// this is the message that is sent to us
    // {
    //   username: app.username,
    //   text: text,
    //   roomname: app.currentRoom
    // };

// joins here to get username in users from userid in messages
// https://github.com/expressjs/body-parser  express route-specific

// works in mysql directly:
//insert into messages (message, roomID, userID) values ('hello world', '1', '11');

    post: function (req) {
      var sqlCommand = "INSERT INTO messages (message, userID, roomID) VALUES ('" + req.text + "', '3', '33');"; //variable that holds stuff from body;
      //console.log(sqlCommand, "this is the sql Command");
      //console.log(req, "this is req getting to Post is models");
      db.query(sqlCommand, function(err){
        if (err) {
          //console.log(err, "the err in index.js models");
          throw err;
        }
        db.end();
 //        req(message);
      });
    }
    // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
      db.query('SELECT * FROM `users`', function(err, rows){
        if(err) {
          console.log(err);
          throw err;
        }
        else {
          //console.log(rows);
          req(rows);
        }
      });
    },
    post: function () {}
  }
};
