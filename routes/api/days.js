var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../../models/hotel');
var Restaurant = require('../../models/restaurant');
var Activity = require('../../models/activity');
var Day = require('../../models/day')

router.get('/days', function(req,res,next){
	//get all of our days
	Day.findAll()
	.then((days)=>{
		res.json(days);
	});
})

router.get('/days/:id', function(req,res,next){
	Day.findById(req.params.id)
	.then(day =>{
		res.json(day);
	})
});

router.delete('/days/:id', function(req,res,next){
	Day.findById(req.params.id)
	.then(day =>{
		day.destroy();
	})
});

router.post('/days/:id', function(req,res,next){
	Day.findOrCreate({
		where: {
			id: req.params.id
		}
	})
	.then(day =>{
		res.json(day);
	})
});

//want to add line to days table
router.post('days/:id/restaurants', function(req,res,next){
	Day.findById(req.params.id)
	.then( day =>{
		console.log(day);
	})
});

router.delete('days/:id/restaurants', function(req,res,next){
	const resId = req.params.id;
	Day.update()

});


router.post('days/:id/hotel', function(req,res,next){});
router.delete('days/:id/hotel', function(req,res,next){});

router.post('days/:id/restaurants', function(req,res,next){});
router.delete('days/:id/restaurants', function(req,res,next){});
