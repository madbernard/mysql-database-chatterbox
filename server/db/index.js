//var mysql = require("mysql");
var Sequelize = require('Sequelize');
var chat = new Sequelize('chat', 'root', '');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
// this goes to the db and gets the stuff and passes it to index.js models
// Uncomment if mysql has not been properly promisified yet
// module.exports = mysql.createConnection({
//   host: "127.0.0.1",
//   user: "root",
//   database: "chat",
//   password: ""
// });
// pool.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
//   if (err) throw err;
//   console.log('The solution is: ', rows[0].solution);
// });
var User = chat.define('User', {
  username: Sequelize.STRING
});

var Messages = chat.define('message', {
  message: Sequelize.STRING,
  roomname: Sequelize.STRING
});

User.hasMany(Messages);
Messages.belongsTo(User);

User.sync();
Messages.sync();

exports.User = User;
exports.Messages = Messages;
