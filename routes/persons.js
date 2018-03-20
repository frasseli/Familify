var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

var personsModel = mongoose.model('person');

router.get('/', function(req, res, next) {
	
	personsModel.find(function(err, persons){
		res.render('newperson', { title: 'Familify - Persons', persons : persons });
	});
});


//Create new person
router.post('/', function(req, res, next){
	//console.log(req.body);

	var newPerson = new personsModel({
		name      : { 
					  first : req.body.name_first, 
		              last  : req.body.name_last 
		          	},
		birthdate : req.body.birthdate,
		telnum    : req.body.telnum,
		email     : req.body.email,
		addr      : req.body.addr,
		father    : req.body.father,
		mother    : req.body.mother,
		spouse    : req.body.spouse,
		flag_main_ancestor : req.body.flag_main_ancestor
	});

	newPerson.save();

	res.redirect('/persons');

});

module.exports = router;
