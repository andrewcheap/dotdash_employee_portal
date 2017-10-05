(function() {
	'use strict';

	angular.module('portal.register')
		.component('register', {
			templateUrl: 'app/components/register/register.template.html',
			controller: registerController,
			controllerAs: 'register',
			bindings: {

			}
		});

		function registerController(portalDataService, $location, $window) {
			/* jshint validthis: true */
			var self = this;

			// Interface
			self.regUser 	= regUser;

			//////////////////////
			function regUser(regData) {
				portalDataService.registerUser(regData).then(registerComplete).catch(requestRejected);
			}


			// Private methods for handling promises
			function registerComplete(results){
				// Reload index which handles the authentication request
				$window.location.href = '/index.html';
			}

			function requestRejected(error){
				console.log("error", error);
			}
			
		}
})();