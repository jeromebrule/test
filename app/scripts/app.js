'use strict';

angular.module('myYoProjectApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
	'google-maps',
	'pascalprecht.translate'
])
.config(function ($routeProvider,$translateProvider) {
	// register french translation table
	$translateProvider.translations('fr_FR', {
		'menu_accueil': 'Accueil',
		'menu_about': 'À propos',
		'menu_contact': 'Contact',
		'GREETING': 'Ubisoft le test!',
		'NAME': 'Nom',
		'PRO': 'Profession',
		'CITY': 'Ville',
		'SEARCH': 'Rechercher',
		'BUTTON_LANG_FR': 'francais',
		'BUTTON_LANG_EN': 'english'
	});
	// register english translation table
	$translateProvider.translations('en_EN', {
		'menu_accueil': 'Home',
		'menu_about': 'About',
		'menu_contact': 'Contact',
		'GREETING': 'Ubisoft the test',
		'NAME': 'Name',
		'PRO': 'Profession',
		'CITY': 'City',
		'SEARCH': 'Search',
		'BUTTON_LANG_FR': 'francais',
		'BUTTON_LANG_EN': 'english'
	});
	$translateProvider.preferredLanguage('en_EN');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }); 



