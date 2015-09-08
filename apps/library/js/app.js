'use strict';

var libApp=angular.modulee('labApp',[
	'ngRoute',
	'ngCookies',
	'ui.bootstrap',
	'libControllers',
	'libServices',
	'ngSanitize',
	'toaster',
	'ui.sortable'
]);

var libControllers=angular.module('libControllers');
var libServices=angular.module('libServices',['ngResource']);
