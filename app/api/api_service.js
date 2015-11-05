// 'use strict';

// angular.module('myApp.api', [])

// .service('apiService', ['$log', function($log) {

// 	this.apis = [];

// 	this.addApi = function(name, type) {
// 		this.apis.push({
// 			"id": this.getNextId(),
// 			"name": name,
// 			"type": type,
// 			"created_at": Date()
// 		});
// 	};

// 	this.getApis = function() {
// 		return this.apis;
// 	};

// 	this.getApi = function(id) {
// 		for (var i = this.apis.length - 1; i >= 0; i--) {
// 			if (this.apis[i].id == id) {
// 				return this.apis[i];
// 			}
// 		}
// 		return null;
// 	};

// 	this.getNextId = function() {
// 		var id = 1;
// 		if (this.apis.length > 0) {
// 			id = this.apis[this.apis.last - 1].id + 1;
// 		}
// 		return id;
// 	};

// }]);