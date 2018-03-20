var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();
app.locals.moment = require('moment');

//---------------------------------------------------------------------
// REST API Setup
//---------------------------------------------------------------------
const methodOverride = require('method-override');
const restify = require('express-restify-mongoose');
const mongoose = require('mongoose');
const router = express.Router()

app.use(bodyParser.json());
app.use(methodOverride());

app.use(router);

mongoose.connect('mongodb://root:toor@ds127101.mlab.com:27101/frasseli');
//mongoose.connect('mongodb://root:toor@localhost:27017');

var personModel   = require('./models/person.js');
var locationModel = require('./models/location.js');
var eventModel    = require('./models/event.js');

restify.serve(router, personModel);
restify.serve(router, locationModel);
restify.serve(router, eventModel);

//---------------------------------------------------------------------


var index       = require('./routes/index');
var users       = require('./routes/users');
var persons     = require('./routes/persons');
var locations   = require('./routes/locations');
var events      = require('./routes/events');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/persons', persons);
app.use('/locations', locations);
app.use('/events', events);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
