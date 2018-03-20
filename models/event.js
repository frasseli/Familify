var mongoose = require('mongoose');
//mongoose.connect('mongodb://root:toor@ds127101.mlab.com:27101/frasseli');
var Schema = mongoose.Schema;

//Events (birth, death, etc)
var EventsSchema = new Schema({
    person : { type : Schema.ObjectId, ref : 'person' },
    type : Number, // 1-Birth, 2-Adoption, 3-Marriage, 4-Divorce, 5-Death
    date : Date,
    location : { type : Schema.ObjectId, ref : 'location' }
});

module.exports = mongoose.model('event', EventsSchema);