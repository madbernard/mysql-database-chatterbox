var mysql = require("mysql");

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

// this goes to the db and gets the stuff and passes it to index.js models

// Uncomment if mysql has not been properly promisified yet
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "chat",
  password: ""
});

connection.connect();

module.export = connection;

// pool.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
//   if (err) throw err;

//   console.log('The solution is: ', rows[0].solution);
// });
