var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../../models/hotel');
var Restaurant = require('../../models/restaurant');
var Activity = require('../../models/activity');

router.get('/hotels', function(req,res,next){
	Hotel.findAll()
	.then((hotels) => {
		 return hotels;
	});
});

router.get('/restaurants', function(req,res,next){
	Restaurant.findAll()
	.then((restaurants) => {
		 return restaurants;
	});
});

router.get('/activities', function(req,res,next){
	Activity.findAll()
	.then((activities) => {
		 return activities;
	});
});

module.exports = router;
