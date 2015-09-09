'use strict';

var libApp=angular.module('libApp',[
	'ngRoute',
	'ngCookies',
	'ui.bootstrap',
	'libControllers',
	'libServices',
	'ngSanitize',
	'toaster',
	'ui.sortable'
]);

var libControllers=angular.module('libControllers',[]);
var libServices=angular.module('libServices',['ngResource']);

libApp.config(['$routeProvider',
	function($routeProvider){
		$routeProvider.
			when('/lib',{
				templateUrl:'partials/library.html',
				controller:'LibCtrl'
			}).
			when('/modelBrand',{
				templateUrl:'partials/modelBrand.html',
				controller:'LibModelBrandCtrl'
			}).
			when('/modelType',{
				templateUrl:'partials/modelType.html',
				controller:'LibModelTypeCtrl'
			}).
			when('/modelSearch',{
				templateUrl:'partials/modelSearch.html',
				controller:'LibModelSearchCtrl'
			}).
			otherwise({
				redirectTo:'/lib'
			});
}]);
