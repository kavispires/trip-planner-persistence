var Sequelize = require('sequelize');
var db = require('./_db');
var Hotel = require('./hotel');
var Restaurant = require('./restaurant');
var Activity = require('./activity');

var Day = db.define('day', {
	number: Sequelize.INTEGER
});

Day.belongsTo(Hotel);
Day.belongsToMany(Activity, {through: 'day_activity'});
Day.belongsToMany(Restaurant, {through: 'day_restaurant'});

Day.hook('afterDestroy', function(day, options){
	Day.findAll({where: {
		number: {
			$gt: day.number
		}
	}})
	.then(days =>{
		days.forEach( day =>{
			console.log("this is a day to decrement its number: ", day);
			day.update({number: day.dataValues.number-1})
		})
	})
});

module.exports = Day;
