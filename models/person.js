var mongoose = require('mongoose');
//mongoose.connect('mongodb://root:toor@ds127101.mlab.com:27101/frasseli');
var Schema = mongoose.Schema;

var PersonSchema = new Schema({
    name: { first: String, last: String },
    type      : Number, //1-Requirent, 2-NonRequirent
    birthdate : Date,
    telnum    : String,
    email     : String,
    addr      : String,
    gender    : Number, //1-Male, 2-Female
    father    : { type : Schema.ObjectId, ref : 'person' },
    mother    : { type : Schema.ObjectId, ref : 'person' },
    spouse    : { type : Schema.ObjectId, ref : 'person' },
    
    flag_main_ancestor : Boolean, //Indicates if this person is the main ancestor in the process
});


module.exports = mongoose.model('person', PersonSchema);