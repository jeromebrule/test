'use strict';

angular.module('myYoProjectApp')
  .controller('MainCtrl', ['$translate', '$scope', function ($translate,$scope) {
	$scope.friends =  [
	{
		'name': 'Guillaume Charbonneau',
		'ville': 'Chambly',
		'profession' : 'Developpeur web',
		'description': 'Chambly',
		'latitude': 45.4500,
		'longitude': -73.2833
	},
	{
		'name': 'Jérôme Brulé',
		'ville': 'Whistler',
		'profession' : 'Developpeur web',
		'description': 'Whistler',
		'latitude': 50.1208,
		'longitude': -122.9544
	},
	{
		'name': 'Daniel Gagné',
		'ville': 'St-Hubert',
		'profession' : 'UI Artiste',
		'description': 'St-Hubert',
		'latitude': 45.4833,
		'longitude': -73.4333
	},
	{
		'name': 'Gars Cool',
		'ville': 'San Francisco',
		'profession' : 'Travail',
		'description': 'San Francisco',
		'latitude': 37.0000,
		'longitude': -120.0000
	}
	];
	$scope.map = {
	    center: {
	        latitude: 50.1208,
	        longitude: -122.9544
	    },
	    zoom: 3
	};
	$scope.changeLanguage = function (langKey) {
		$translate.use(langKey);
	};
}]);


