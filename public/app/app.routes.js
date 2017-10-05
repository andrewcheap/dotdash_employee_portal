(function() {
	'use strict';

	angular.module('portal.routes', [])
		.config(['$stateProvider', '$urlRouterProvider', configRoutes]);

	function configRoutes($stateProvider, $urlRouterProvider) {

		// routes
		$stateProvider
			.state("login", {
				data: {
					pageTitle: "Dot Dash Portal | Login"
				},
				url:'/login',
				template: '<login></login>'
			})
			.state("register", {
				data: {
					pageTitle: "Dot Dash Portal | Register"
				},
				url:'/register',
				template: '<register></register>'
			})
			.state("dashboard", {
				data: {
					pageTitle: "Dot Dash Portal | Dashboard"
				},
				url:'/dashboard',
				template: '<dashboard></dashboard>'
			})
			.state("editProject", {
				data: {
					pageTitle: "Dot Dash Portal | Edit Project"
				},
				url:'/project/:id',
				template: '<project></project>'
			})
			.state("addProject", {
				data: {
					pageTitle: "Dot Dash Portal | Add Project"
				},
				url:'/project',
				template: '<project></project>'
			});
	}
})();