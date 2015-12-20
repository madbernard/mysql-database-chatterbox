var models = require("../models");
var bluebird = require("bluebird");
var db = require("../db");
// var dbServer = require("../orm-resources");
// http://bluebirdjs.com/docs/working-with-callbacks.html
//var rh = require("./request-handler");

// maybe the request handler?
// takes the modeled data from index.js in the modeler folder and passes it on to routes.js which passes it to the app.js server
var userFields = ["username"];

module.exports = {
  messages: {
    get: function(req, res) {
      db.Messages.findAll( { include: [ db.User ] } ).then(function(err, result){
        res.json(result);
      });
    }, // a function which handles a get request for all messages

    post: function(req, res) {
      db.Messages.findOrCreate( { where: [ db.User ] } ).then(function(err, result){
        var params = {
          text: req.body.text,
          username: user.id,
          roomname: req.body.roomname
        };
        console.log(params);
        Message.create(params);
        req.sendStatus(201);
      });
      } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function(req, res) {
      db.User.findAll().then(function(err, result){
        res.json(result);
      });
    },
    post: function(req, res) {
      db.User.findOrCreate().then(function(err, result){
        res.json(result);
      });
      res.json(result);
    }
  }
};
