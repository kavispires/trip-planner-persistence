var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../../models/hotel');
var Restaurant = require('../../models/restaurant');
var Activity = require('../../models/activity');
var Day = require('../../models/day');

module.exports = router;

router.get('/days', function(req,res,next){
	//get all of our days
	Day.findAll()
	.then((days)=>{
		res.json(days);
	});
});

router.get('/days/:id', function(req,res,next){
	Day.findById(req.params.id)
	.then(day =>{
		res.json(day);
	});
});

router.delete('/days/:id', function(req,res,next){
	Day.findById(req.params.id)
	.then(day =>{
		day.destroy();
		console.log('Day was deleted.')
	});
});

router.post('/days/:id', function(req,res,next){
	Day.findOrCreate({
		where: {
			id: req.params.id
		}
	})
	.then(day =>{
		console.log('Getting this:', day);
		res.json(day);
	});
});

router.post('/days/:id/hotel', function(req,res,next){
	console.log('BODY', req.body);
	Day.findById(req.params.id)
	.then( day =>{
		console.log(day);
		// .create row with req.body recieving a day number and reference to restaurant
	});
});

router.delete('/days/:id/hotel', function(req,res,next){
	console.log('BODY', req.body);
	Day.findById(req.params.id)
	.then( day =>{
		console.log(day);
		// .create row with req.body recieving a day number and reference to restaurant
	});
});

//want to add line to days table
router.post('/days/:id/restaurants', function(req,res,next){
	console.log('BODY', req.body);
	Day.findById(req.params.id)
	.then( day =>{
		console.log(day);
		// .create row with req.body recieving a day number and reference to restaurant
	});
});

router.delete('/days/:id/restaurants', function(req,res,next){
	console.log('BODY', req.body);
	Day.findById(req.params.id)
	.then( day => {
		console.log(day);
		// .delete row with req.body recieving a day number and reference to restaurant
	});
});

router.post('/days/:id/activities', function(req,res,next){
	console.log('BODY', req.body);
	Day.findById(req.params.id)
	.then( day =>{
		console.log(day);
		// .create row with req.body recieving a day number and reference to restaurant
	});
});

router.delete('/days/:id/activities', function(req,res,next){
	console.log('BODY', req.body);
	Day.findById(req.params.id)
	.then( day => {
		console.log(day);
		// .delete row with req.body recieving a day number and reference to restaurant
	});
});


