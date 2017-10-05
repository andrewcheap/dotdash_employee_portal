(function() {
	'use strict';

	angular.module('portal.app', [
		// External dependencies
		'ui.router',
		'ngMaterial',
		
		// Internal dependencies
		'portal.mainCtrl',
		'portal.register',
		'portal.login',
		'portal.dashboard',
		'portal.project',
		'portal.routes',
		'portal.api',
		'portal.interceptorService',

		])
		.config(['$locationProvider', '$httpProvider',
			function($locationProvider, $httpProvider) {
				$locationProvider.html5Mode({
				  enabled: true,
				  requireBase: false
				});

				$httpProvider.interceptors.push('httpRequestInterceptor');
			}]);

	angular.bootstrap(document, ['portal.app']);

})();