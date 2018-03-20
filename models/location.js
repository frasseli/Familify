var mongoose = require('mongoose');
//mongoose.connect('mongodb://root:toor@ds127101.mlab.com:27101/frasseli');
var Schema = mongoose.Schema;

//Locations for events
var LocationSchema = new Schema({
    country : String,
    region : String,
    city : String,
    county : String,
    coord : String
});

module.exports = mongoose.model('location', LocationSchema);