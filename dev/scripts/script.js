const bikeApp = {};
bikeApp.cityBikesUrl = 'http://api.citybik.es/v2/networks';
bikeApp.cityBikesToronto = 'https://tor.publicbikesystem.net/ube/gbfs/v1/';

bikeApp.init = function() {
	bikeApp.getCityBikes();
	bikeApp.map();
};

bikeApp.getCityBikes = function() {
	$.ajax({
		url: bikeApp.cityBikesToronto,
		method: 'GET',
		dataType: 'json'
	})
	.then(function(res) {
		console.log(res.data.en.feeds) // returns an array of objects need url
		// system information, station information url, system pricing plans
	});
};

bikeApp.map = function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 43.70011, lng: -79.4163},
    zoom: 11
  });
}

bikeApp.getDirections = function(){
	$.ajax({
		method 'GET',
		url: 'http://maps.googleapis.com/maps/api/directions/outputFormat?parameters'
		dataType: 'jsonp'
	}).then(doneCallbacks, failCallbacks);
};

// next ajax request
// get system information, station information url, system pricing plans
// next ajax request
// using station information url - get station data locations


$(function() {
	bikeApp.init();
});
