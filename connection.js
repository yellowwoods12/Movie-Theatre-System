var mysql = require('mysql');
const { promisify } = require('util');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Tripti118169@',
  database : 'movie_theatre'
});



  connection.connect(function(err){
    if(!err) {
        console.log("Database is connected using external file ...");
    } else {
        console.log("Error connecting database using external file...");
    }
    });
    

  module.exports = connection;