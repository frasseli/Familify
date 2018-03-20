var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

var locationsModel = mongoose.model('location');

router.get('/', function(req, res, next) {
	
	locationsModel.find(function(err, locations){
		res.render('newlocation', { title: 'Familify - Locations', locations : locations });
	});
});


//Create new person
router.post('/', function(req, res, next){
	//console.log(req.body);

	var newLocation = new locationsModel({
		county  : req.body.county,
		city    : req.body.city,
		region  : req.body.region,
		country : req.body.country,
		coord   : req.body.coord
	});

	newLocation.save();

	res.redirect('/locations');

});

module.exports = router;
