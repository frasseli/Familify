var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

var personsModel = mongoose.model('person');

router.get('/', function(req, res, next) {

    var locationsModel = mongoose.model('location');

    personsModel.find(function(err, persons){

        locationsModel.find(function(err, locations){
			
			var eventsModel = mongoose.model('event');

		    eventsModel.find(function(err, events){
		    	var types = [{id: "1", desc: "Birth"}, {id: "2", desc: "Adoption"}, {id: "3", desc: "Marriage"}, {id: "4", desc: "Divorce"}, {id: "5", desc: "Death"}];
		        res.render('newevent', { title: 'Familify - Events', persons : persons, locations : locations, events : events, types : types });
		    }).populate('person').populate('location');

        });
    });  
});


//Create new Event
router.post('/', function(req, res, next){
	//console.log(req.body);

	var eventsModel = mongoose.model('event');

	var newEvent = new eventsModel({
		person   : req.body.person,
		type     : req.body.type,
		date     : req.body.date,
		location : req.body.location
	});

	newEvent.save();

	res.redirect('/events');

});

module.exports = router;
