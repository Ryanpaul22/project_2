var mysql = require("mysql");

var connection;

// Sets up db to connect locally or on JAWSDB if deployed
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "LiftBuddy_db"
  });
}

connection.connect(function (err) {
    if(err) throw err;

    console.log("Connected on threadId: ", connection.threadId);
})