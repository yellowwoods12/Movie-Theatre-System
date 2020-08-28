var express    = require("express");
//var login = require('./routes/loginRoutes');
var connection = require('./connection');
var bodyParser = require('body-parser');
var routes = require('./routes');
var cors = require('cors');

var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, POST, PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,contentType, Content-Type, Accept, Authorization");
  next();
});
//var router = express.Router();// test route
//ro//router.post('/register',login.register);
//router.post('/login',login.login)
//app.use('/api', router);
app.use('/api',routes);
app.listen(5000);
//var login = require('./routes/loginroutes');
