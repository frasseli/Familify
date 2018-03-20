var mongoose = require('mongoose');
//mongoose.connect('mongodb://root:toor@ds127101.mlab.com:27101/frasseli');
var Schema = mongoose.Schema;

var FamilySchema = new Schema({
    name : String,
    location : { type : Schema.ObjectId, ref : 'location' },
    members : [{ type : Schema.ObjectId, ref : 'person' }]
});

module.exports = mongoose.model('family', FamilySchema);