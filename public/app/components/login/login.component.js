(function() {
	'use strict';

	angular.module('portal.login')
		.component('login', {
			templateUrl: 'app/components/login/login.template.html',
			controller: loginController,
			controllerAs: 'login',
			bindings: {

			}
		});

		function loginController(portalDataService, tokenService, $location, $window) {
			/* jshint validthis: true */
			var self = this;

			// Interface
			self.authenticateUser	= authenticateUser;

			activate();

			function activate(){
				self.showError = false;
			}

			//////////////////////
			function authenticateUser(userData) {
				portalDataService.authenticateUser(userData).then(authenticationComplete).catch(requestRejected);
			}


			// Private methods for handling promises
			function authenticationComplete(results){
				console.log(results);
				if(results.token) {
					tokenService.setToken(results.token);

					// Reload index which handles the authentication request
					$window.location.href = '/index.html';
				} else {
					self.showError = true;
				}
			}

			function requestRejected(error){
				console.log("error", error);
			}
			
		}
})();