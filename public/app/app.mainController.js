(function() {
	'use strict';

	angular.module('portal.mainCtrl', ['portal.tokenService', 'portal.userService'])
		.controller('MainController', MainController);

		function MainController($location, $window, tokenService, userService) {
			/* jshint validthis: true */
			var self = this;

			// Interface
			self.logout	= logout;


			activate();

			///////////
			function activate() {
				if(tokenService.getToken()) {
					userService.getUser().then(function(data) {
						self.userData = data.data;
					});

					self.loggedIn = true;
					$location.path("/dashboard");
				}
				else {
					self.loggedIn = false;
					$location.path("/login");
				}
			}

			function logout() {
				tokenService.deleteToken();
				$window.location.href = '/index.html';
			}

		}
})();