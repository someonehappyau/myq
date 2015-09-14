'use strict';

var libApp=angular.module('libApp',[
	'ng',
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

libApp.config(['$routeProvider','$locationProvider',
	function($routeProvider,$locationProvider){
		$routeProvider.
			when('/',{
				templateUrl:'partials/library.html',
				controller:'LibCtrl',
				resolve:{
					f1:function(){console.log('lib');},
					f2:function(){console.log('lib again')}
				}
			}).
			when('/modelBrand',{
				templateUrl:'partials/modelBrand.html',
				controller:'LibModelBrandCtrl'
			}).
			when('/modelBrand/:brandName',{
				templateUrl:'partials/modelBrandModelList.html',
				controller:'LibModelBrandModelListCtrl',
				resolve:{
					validation: ['$route','$location','$q',function($route,$location,$q){
						var defer=$q.defer();
						var brandName=$route.current.params.brandName;
						if(brandName==='honda' ||
							brandName==='kawasaki' ||
							brandName==='suzuki' ||
							brandName==='yamaha' ||
							brandName==='bmw' ||
							brandName==='ducati'
						  ){
							  defer.resolve();
							  //continue
						}
						else{
							defer.reject('invalid_brand_name');
							$location.path('/modelBrand');
						}
						return defer.promise;
					}]
				}
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
				redirectTo:'/',
				resolve:{
					function(){console.log('otherwise');}
				}
			});

			$locationProvider.html5Mode({
				enabled:true,
				requireBase:true
			});
}]);
