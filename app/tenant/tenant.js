'use strict';

angular.module('myApp.tenant', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tenant', {
    templateUrl: 'tenant/tenant.html',
    controller: 'TenantCtrl'
  });
}])

.controller('TenantCtrl', ['$scope', '$log', 'tenantService', function($scope, $log, tenantService) {

	$scope.tenants = tenantService.tenants;
	$scope.name = '';
	$scope.client_no = '';
	$scope.auth_key = '';
	$scope.environment = 'stage_future';

	$scope.$watch('tenants', function() {
		tenantService.tenants = $scope.tenants;
	});

	$scope.submit = function() {
		// Check for blank fields (messages)
		// Check for duplicate tenant names (not allowed)
		// Validate tenant with Aria (maybe give user option for this)

		tenantService.addTenant($scope.name, $scope.client_no, $scope.auth_key, $scope.environment);
		init();
	};

	var init = function() {
		$scope.name = '';
		$scope.client_no = '';
		$scope.auth_key = '';
		$scope.environment = 'stage_future';
	};
}])

.service('tenantService', ['$log', function($log) {

	this.tenants = [];

	this.addTenant = function(name, client_no, auth_key, environment) {
		this.tenants.push({
			"id": this.getNextId(),
			"name": name,
			"client_no": client_no,
			"auth_key": auth_key,
			"environment": environment,
			"created_at": Date()
		});
	};

	this.getTenants = function() {
		return this.tenants;
	};

	this.getTenant = function(id) {
		for (var i = this.tenants.length - 1; i >= 0; i--) {
			if (this.tenants[i].id == id) {
				return this.tenants[i];
			}
		}
		return null;
	};

	this.getNextId = function() {
		var id = 1;
		if (this.tenants.length > 0) {
			id = this.tenants[this.tenants.length - 1].id + 1;
		}
		return id;
	};

}]);