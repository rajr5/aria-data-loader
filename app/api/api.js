'use strict';

angular.module('myApp.api', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/api', {
    templateUrl: 'api/api.html',
    controller: 'ApiCtrl'
  });
}])

.controller('ApiCtrl', ['$scope', '$log', 'apiService', function($scope, $log, apiService) {

	$scope.apis = apiService.apis;
	$scope.name = '';
	$scope.type = 'core';

	$scope.$watch('apis', function() {
		apiService.apis = $scope.apis;
	});

	$scope.submit = function() {
		apiService.addApi($scope.name, $scope.type);
		init();
	};

	var init = function() {
		$scope.name = '';
		$scope.type = 'core';
	};
}])

.service('apiService', ['$log', function($log) {

	this.apis = [];

	this.addApi = function(name, type) {
		this.apis.push({
			"id": this.getNextId(),
			"name": name,
			"type": type,
			"created_at": Date()
		});
	};

	this.getApis = function() {
		return this.apis;
	};

	this.getApi = function(id) {
		for (var i = this.apis.length - 1; i >= 0; i--) {
			if (this.apis[i].id == id) {
				return this.apis[i];
			}
		}
		return null;
	};

	this.getNextId = function() {
		$log.info(this.apis);
		var id = 1;
		if (this.apis.length > 0) {
			id = this.apis[this.apis.length - 1].id + 1;
		}
		return id;
	};

}]);