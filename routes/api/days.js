var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../../models/hotel');
var Restaurant = require('../../models/restaurant');
var Activity = require('../../models/activity');
var Day = require('../../models/day');

module.exports = router;

router.get('/', function(req,res,next){
	//get all of our days
	Day.findAll()
	.then((days)=>{
		res.json(days);
	});
});

router.get('/:id', function(req,res,next){
	Day.findById(req.params.id)
	.then(day =>{
		res.json(day);
	});
});

router.delete('/:id', function(req,res,next){
	Day.findOne({where: {number: req.params.id}})
	.then(day =>{
		day.destroy();
		console.log('Day was deleted.')
	});
});

router.post('/:id', function(req,res,next){
	Day.findOrCreate({
		where: {
			number: +req.params.id
		}
	})
	.then( ([day, found]) => {
		console.log('Getting this:', day);
		res.json(day);
	});
});

router.post('/:id/hotel', function(req,res,next){
	console.log('BODY', req.body);
	Day.findById(req.params.id)
	.then( day =>{
		console.log(day);
		// .create row with req.body recieving a day number and reference to restaurant
	});
});

router.delete('/:id/hotel', function(req,res,next){
	console.log('BODY', req.body);
	Day.findById(req.params.id)
	.then( day =>{
		console.log(day);
		// .create row with req.body recieving a day number and reference to restaurant
	});
});

//want to add line to days table
router.post('/:id/restaurants', function(req,res,next){
	console.log('BODY', req.body);
	Day.findOne({where: {
		number: req.body.hotel_id
		}
	})
	.then( day =>{
		console.log(day);
		// .create row with req.body recieving a day number and reference to restaurant
	})
	.catch(next);
});

router.delete('/:id/restaurants', function(req,res,next){
	console.log('BODY', req.body);
	Day.findById(req.params.id)
	.then( day => {
		// console.log(day);
		// .delete row with req.body recieving a day number and reference to restaurant
	});
});

router.post('/:id/activities', function(req,res,next){
	console.log('BODY', req.body);
	Day.findById(req.params.id)
	.then( day =>{
		console.log(day);
		// .create row with req.body recieving a day number and reference to restaurant
	});
});

router.delete('/:id/activities', function(req,res,next){
	console.log('BODY', req.body);
	Day.findById(req.params.id)
	.then( day => {
		console.log(day);
		// .delete row with req.body recieving a day number and reference to restaurant
	});
});


