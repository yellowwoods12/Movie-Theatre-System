var express    = require("express");
const cron = require("node-cron");
const fs = require("fs");
//var login = require('./routes/loginRoutes');
var connection = require('./connection');
var bodyParser = require('body-parser');
var routes = require('./routes');
var cors = require('cors');
const {deleteExpiredTicketsController} = require('./controllers/deleteExpiredTicketsController');

var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, POST, PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,contentType, Content-Type, Accept, Authorization");
  next();
});

//cron job to check and delete the expired tickets after every 8 hours
cron.schedule("0 */8 * * *", function() {
     console.log("checking for expired records after every 8 hours");
     output =  deleteExpiredTicketsController();
     console.log("expired records deleted successfully");
});

app.use('/api',routes);
app.listen(5000);
//var login = require('./routes/loginroutes');
