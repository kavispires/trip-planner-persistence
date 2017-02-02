'use strict';
/* global $ attractionModule hotels restaurants activities */

/**
 * This module holds collection of enhanced attraction objects which can be
 * easily looked up by type and id. It is primarily used when someone clicks
 * to add an attraction in the `options` module.
 */

var attractionsModule = (function () {

  // application state

  var enhanced = {
    hotels: getHotels(),
    restaurants: getRestaurants(),
    activities: getActivities()
  };

  // private helper methods (only available inside the module)

  function findById (array, id) {
    return array.find(function (el) {
      return +el.id === +id;
    });


  }

  // globally accessible module methods (available to other modules)

  var publicAPI = {

    getByTypeAndId: function (type, id) {
      if (type === 'hotel') return findById(enhanced.hotels, id);
      else if (type === 'restaurant') return findById(enhanced.restaurants, id);
      else if (type === 'activity') return findById(enhanced.activities, id);
      else throw Error('Unknown attraction type');
    },

    getEnhanced: function (databaseAttraction) {
      console.log("Calling getEnhanced");
      var type = databaseAttraction.type;
      var id = databaseAttraction.id;
      var found = publicAPI.getByTypeAndId(type, id);
      if (found) return found;
      throw Error('enhanced version not found', databaseAttraction);
    }

  };

  function getHotels(){
    $.get('/api/hotels')
    .then( data => enhanced.hotels = data.map(attractionModule.create))
    .catch(console.error.bind(console));
  }

  function getRestaurants(){
    $.get('/api/restaurants')
    .then( data => enhanced.restaurants = data.map(attractionModule.create))
    .catch(console.error.bind(console));
  }

  function getActivities(){
    $.get('/api/activities')
    .then( data => enhanced.activities = data.map(attractionModule.create))
    .catch(console.error.bind(console));
  }



  return publicAPI;

}());
