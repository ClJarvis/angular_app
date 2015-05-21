(function(){
	'use strict';

	angular.module('demo', [])
	.controller('MainController', ['$scope', function($scope){
		$scope.name="Chris";
		$scope.instructors = [
		{name:'steve', allergies:'sunshine'},
		{name:'joe', allergies:'eveything'},
		{name:'Zoe', allergies:'students'}
		];
	}]);
})();
