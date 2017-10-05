(function() {
	'use strict';

	angular.module('portal.fileUpload')
		.component('fileUpload', {
			templateUrl: 'app/shared/fileUpload/fileUpload.template.html',
			controller: fileUploadController,
			controllerAs: 'upload',
			bindings: {
				project: '=?',
				width: '<',
				height: '<',
			}
		});

		function fileUploadController(Upload, $scope) {
			/* jshint validthis: true */
			var self = this;

			// Interface
			self.upload 	= upload;

			
			/////////////////////////
		    function upload(file) {
		    	if(file) {
			        Upload.upload({
			            url: '/api/upload',
			            data: {file: file}
			        }).then(function (resp) {
			        	self.project.images.push(resp.data.data.location);
			        	console.log("project", self.project);
			            console.log('Success: file uploaded.');
			        }, function (resp) {
			            console.log('Error status: ' + resp.status);
			        }, function (evt) {
			            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
			            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
			        });
		    	}
		    }
		}

})();