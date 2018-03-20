var express = require('express');
var router = express.Router();


//---------------------------------------------------------------------
// Get the data from the API /family
//---------------------------------------------------------------------

var mongoose = require('mongoose');

var personsModel = mongoose.model('person');

/* GET home page. */
router.get('/', function(req, res, next) {

    var locationsModel = mongoose.model('location');

    personsModel.find(function(err, persons){

        locationsModel.find(function(err, locations){

            var eventsModel = mongoose.model('event');

            eventsModel.find(function(err, events){
                res.render('index', { title: 'Familify', persons : persons, locations : locations, events : events });
            }).populate('person').populate('location');
        });
    });  
});

module.exports = router;
