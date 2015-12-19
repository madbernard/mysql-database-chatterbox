var db = require('../db');


// packages the database stuff into teh appropriate json object?  hands it off to index.js in Controllers folder

module.exports = {
  messages: {
    get: function (req, res) {

    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};
