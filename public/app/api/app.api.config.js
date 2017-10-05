(function() {
	'use strict';

	var api_endpoints = {
		'PROJECTS': 		_.template('/api/projects'),
		'PROJECT': 			_.template('/api/project/${id}'),
		'ADD_PROJECT': 		_.template('/api/project/add'),
		'REGISTER_USER': 	_.template('api/register'),
		'AUTHENTICATE': 	_.template('api/authenticate'),
		'DELETE_IMAGE': 	_.template('api/upload/${fileName}'),
	};

	angular.module('portal.api')
		.constant('PORTAL_ENDPOINTS', api_endpoints);
})();