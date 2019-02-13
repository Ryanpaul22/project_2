<<<<<<< HEAD
//Setup mySql connection
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3000,
  user: "root",
  password: "root",
  database: "liftingbuddies_db"
});

// Make connection.
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  // Export connection for our ORM to use.
  module.exports = connection;
=======
>>>>>>> ccdb945e3f4904127ff6e2341a563f928740fdd9
