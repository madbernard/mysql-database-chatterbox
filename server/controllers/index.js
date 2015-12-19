var models = require("../models");
var bluebird = require("bluebird");
// http://bluebirdjs.com/docs/working-with-callbacks.html
//var rh = require("./request-handler");

// maybe the request handler?
// takes the modeled data from index.js in the modeler folder and passes it on to routes.js which passes it to the app.js server
//
// var headers = {
//   'access-control-allow-origin': '*',
//   'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
//   'access-control-allow-headers': 'content-type, accept, X-Parse-REST-API-Key, X-Parse-Application-Id',
//   'access-control-max-age': 10, // Seconds.
//   'Content-Type': 'application/json'
// };
//
// var sender = function(statusCode, data) {
//   res.writeHead(statusCode, headers);
//   res.end(JSON.stringify(data));
// };

module.exports = {
  messages: {
    get: function(req, res) {

    }, // a function which handles a get request for all messages

    post: function(req, res) {

      } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function(req, res) {},
    post: function(req, res) {}
  }
};
