'use strict';

angular.module('myApp.aria', ['ngResource'])

.service('ariaService', ['$log', function($log) {

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