(function() {
	'use strict';

	angular.module('portal.api')
		.service('portalDataService', ['PORTAL_ENDPOINTS', 'utilityService', portalDataService]);

	function portalDataService(PORTAL_ENDPOINTS, utilityService) {

		/* jshint validthis: true*/
		var self = this;

		// Interface
		self.registerUser		= registerUser;
		self.authenticateUser	= authenticateUser;
		self.getProjects		= getProjects;
		self.getProject 		= getProject;
		self.updateProject		= updateProject;
		self.deleteProject		= deleteProject;
		self.addProject			= addProject;
		self.deleteImage		= deleteImage;

		////////////
		function registerUser(newUser) {
			var url_params = {
			};

			var url = PORTAL_ENDPOINTS.REGISTER_USER(url_params);
			var title = "Register User";
			return utilityService.postPromise(title, url, newUser);
		}

		function authenticateUser(user) {
			var url_params = {
			};

			var url = PORTAL_ENDPOINTS.AUTHENTICATE(url_params);
			var title = "Authenticate";
			return utilityService.postPromise(title, url, user);
		}

		function getProject(id) {
			var url_params = {
				"id": id
			};

			var url = PORTAL_ENDPOINTS.PROJECT(url_params);
			var title = "Get Project";
			return utilityService.getPromise(title, url);
		}

		function getProjects() {
			var url_params = {
			};

			var url = PORTAL_ENDPOINTS.PROJECTS(url_params);
			var title = "Get Projects";
			return utilityService.getPromise(title, url);
		}

		function updateProject(project) {
			var url_params = {
				"id": project.id
			};

			var url = PORTAL_ENDPOINTS.PROJECT(url_params);
			var title = "Update Project";
			return utilityService.putPromise(title, url, project);
		}

		function deleteProject(id) {
			var url_params = {
				"id": id
			};

			var url = PORTAL_ENDPOINTS.PROJECT(url_params);
			var title = "Delete Project";
			return utilityService.deletePromise(title, url);
		}

		function addProject(project) {
			var url_params = {
			};

			var url = PORTAL_ENDPOINTS.ADD_PROJECT(url_params);
			var title = "Add Project";
			return utilityService.postPromise(title, url, project);
		}

		function deleteImage(fileName) {
			var url_params = {
				"fileName": fileName
			};

			var url = PORTAL_ENDPOINTS.DELETE_IMAGE(url_params);
			var title = "Delete Image";
			return utilityService.deletePromise(title, url);
		}

	}
})();