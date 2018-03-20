const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

mongoose.connect('mongodb://root:toor@ds127101.mlab.com:27101/frasseli');

var personModel   = require('./models/person.js');
var locationModel = require('./models/location.js');
var eventModel    = require('./models/event.js');
var familyModel   = require('./models/family.js');