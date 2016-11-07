'use strict';

/**
 * @ngdoc overview
 * @name portalSeedApp
 * @description This is the seed application
 * # portalSeedApp
 *
 * Main module of the application.
 */
 var app = angular
  .module('portalSeedApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ngStorage',
    'oc.lazyLoad',
    'pascalprecht.translate'
  ]);


  //============= TRANSLATE SERVICE =================
// Leverages Angular-Translate in order to provide localization
// Uses both translate and translate partial loader

app.config(['$translateProvider', '$translatePartialLoaderProvider', function($translateProvider, $translatePartialLoaderProvider) {
	$translateProvider.useLoader('$translatePartialLoader', {
		urlTemplate: 'translations/{lang}/{part}.json',
		loadFailureHandler: 'LangErrorHandler'
	});
  // Inject ngCookies
	var $cookies;
	angular.injector(['ngCookies']).invoke(['$cookies', function(_$cookies_) {
    	$cookies = _$cookies_;
  	}]);

	// Check for cookie from BSS here, and if en, set default to en-US.
	var bss_cookie = $cookies.get('language');
	if(bss_cookie == undefined)
		$cookies.put('language', 'en');

	switch(bss_cookie) {
		case 'fr':
		case 'fr-FR':
			$translateProvider.preferredLanguage('fr-FR');
			break;
		case 'en':
		case 'en-US':
		default:
			$translateProvider.preferredLanguage('en-US');
			break;

	}
	$translateProvider.useLocalStorage();
	//$translateProvider.useSanitizeValueStrategy('sanitize');
	//$translateProvider.useSanitizeValueStrategy('sanitize');
}]);
app.factory('LangErrorHandler', function ($q, $log) {
  return function (part, lang) {
    $log.error('The "' + lang + '/' + part + '" part was not loaded.');
    return $q.when({});
  };
});

app.controller('translateRelated',translateRelated);
translateRelated.$inject = ['$scope','$sessionStorage','LoginSvc','$state','$rootScope','$translate','$translatePartialLoader']

function translateRelated ($scope,$sessionStorage,LoginSvc,$state,$rootScope,$translate,$translatePartialLoader) {
  $scope.toggleLanguage = function() {
  									var toggle_anchor = document.getElementById('languageToggle');
  									var current_lang = $translate.use();
  									//var bss_cookie = $cookies.get('language');
  									switch(current_lang) {
  										case 'en-US':
  										case 'en':
  										case 'en-UK':
  											$translate.use('fr-FR');
  											//$scope.current_lang_key =
  											//$translate('French').then(function(translation) {
  											//	toggle_anchor.text = translation;
  											$cookies.put('language', 'fr');


  											//})
  											//toggle_anchor.text = $translate.instant('French');
  											break;
  										case 'fr-FR':
  										case 'fr':
  										default:
  											$translate.use('en-US');
  											//$translate('English').then(function(translation) {
  											//	toggle_anchor.text = translation;
  											$cookies.put('language', 'en');

  											//})
  											break;

  									}
  									$scope.current_lang = $translate.use();

  								}
};
