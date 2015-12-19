var db = require('../db');


// packages the database stuff into teh appropriate json object?  hands it off to index.js in Controllers folder
//'SELECT * FROM `books` WHERE `author` = ?'

module.exports = {
  messages: {
    get: function (req) {
      db.connection.query('SELECT * FROM `messages`', function(err, rows){
        if(err) {
          console.log(err);
          throw err;
        }
        else {
          console.log(rows);
          req(rows);
        }
      });
    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};
