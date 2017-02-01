var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../../models/hotel');
var Restaurant = require('../../models/restaurant');
var Activity = require('../../models/activity');

router.get('/hotels', function(req,res,next){
	Hotel.findAll()
	.then((hotels) => {
		 res.json(hotels);
	});
});

router.get('/restaurants', function(req,res,next){
	Restaurant.findAll()
	.then((restaurants) => {
		 res.json(restaurants);
	});
});

router.get('/activities', function(req,res,next){
	Activity.findAll()
	.then((activities) => {
		 res.json(activities);
	});
});

module.exports = router;
