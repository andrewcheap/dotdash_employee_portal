(function() {
	'use strict';

	angular.module('portal.dashboard')
		.component('dashboard', {
			templateUrl: 'app/components/dashboard/dashboard.template.html',
			controller: dashboardController,
			controllerAs: 'dashboard',
			bindings: {

			}
		});

		function dashboardController(portalDataService, $location) {
			/* jshint validthis: true */
			var self = this;

			// Interface
			self.goToProject 	= goToProject;
			self.deleteProject	= deleteProject;


			activate();
			/////////////////////////
			function activate(){
				// Get the projects
				portalDataService.getProjects().then(getComplete).catch(requestRejected);
			}

			function goToProject(id) {
				var url = "/project/" + id;
				$location.path(url);
			}

			function deleteProject(projectId){
				_.remove(self.projects, function(obj) {
				  return obj.id == projectId;
				});
				portalDataService.deleteProject(projectId).then(deleteComplete).catch(requestRejected);
			}

			// Private methods for handling promises
			function getComplete(results){
				self.projects = results.data;
				console.log("complete", results);
			}

			function requestRejected(error){
				console.log("error", error);
			}

			function deleteComplete(results){
				console.log("complete", results);
			}
		}
})();