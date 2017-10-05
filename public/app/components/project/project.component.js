(function() {
	'use strict';

	angular.module('portal.project')
	.component('project', {
		templateUrl: '/app/components/project/project.template.html',
		controller: projectController,
		controllerAs: 'proj',
		bindings: {

		}
	});

	function projectController(portalDataService, $stateParams, $location, $scope) {
		/* jshint validthis: true */
		var self = this;

			// Interface
			self.addProject		= addProject;
			self.deleteProject	= deleteProject;
			self.deleteImage	= deleteImage;
			self.addDetail		= addDetail;
			self.deleteDetail	= deleteDetail;

			activate();
			/////////////////////////
			function activate(){
				self.colorPickerOptions = {             
					label: "Choose a color*",
					genericPalette: false,
					history: false,
					clickOutsideToClose: false,
				}; 

				if($stateParams.id) {
					portalDataService.getProject($stateParams.id).then(getComplete).catch(requestRejected);
				}
				else {
					self.project = {};
					self.project.comingSoon = false;
					self.project.images = [];
					self.project.details = [];
					self.project.details.push(new Detail("", ""));
				}
			}

			function Detail(fieldName, fieldContent) {
				this.fieldName = fieldName;
				this.fieldContent = fieldContent;
			}

			function addProject(){
				if(self.project.id) {
					portalDataService.updateProject(self.project).then(getComplete).catch(requestRejected);
				}
				else {
					portalDataService.addProject(self.project).then(getComplete).catch(requestRejected);
				}
				$location.path("/dashboard");
			}

			function deleteProject(){
				portalDataService.deleteProject(self.project.id).then(deleteComplete).catch(requestRejected);
				$location.path("/dashboard");
			}

			function deleteImage(fileName){
				var index = self.project.images.indexOf(fileName);
				self.project.images.splice(index, 1);
			}

			function addDetail(){
				self.project.details.push(new Detail("", ""));
			}

			function deleteDetail(index){
				self.project.details.splice(index, 1);
			}

			$scope.$watch(function() {
				return self.project.comingSoon;
			}, function(newValue, oldValue){
				if(oldValue !== newValue){
					var comingSoon = newValue;
					if(comingSoon){
						self.imageWidth = 513;
					}
					else {
						self.imageWidth = 690;
					}
				}
			});


			// Private methods for handling promises
			function getComplete(results){
				self.project = results.data;
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