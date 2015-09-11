'use strict';

libControllers.controller('LibModelBrandModelListCtrl',
	['$scope','$routeParams',
	function($scope,$routeParams){
		$scope.brandName=$routeParams.brandName;
		console.log($routeParams);
		console.log('brand detail');
	}]);
