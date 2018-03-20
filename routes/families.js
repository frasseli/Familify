var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

var personsModel = mongoose.model('person');

router.get('/', function(req, res, next) {

    var locationsModel = mongoose.model('location');

    personsModel.find(function(err, persons){

        locationsModel.find(function(err, locations){
			
			var familiesModel = mongoose.model('family');

		    eventsModel.find(function(err, events){
		        res.render('newevent', { title: 'Familify - Families', persons : persons, locations : locations, families : families });
		    }).populate('person').populate('location');

        });
    });  
});


//Create new Family
router.post('/', function(req, res, next){
	//console.log(req.body);

	var familiesModel = mongoose.model('family');

	var newFamily = new familiesModel({
		name     : req.body.name,
		location : req.body.location,
		members  : req.body.members
	});

	newFamily.save();

	res.redirect('/families');

});

module.exports = router;
