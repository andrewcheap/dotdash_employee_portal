(function() {
	'use strict';

	angular.module('portal.dashPicker')
		.component('dashPicker', {
			templateUrl: 'app/shared/dashPicker/dashPicker.template.html',
			controller: dashPickerController,
			controllerAs: 'dashPicker',
			bindings: {
				project: '=',
			}
		});

		function dashPickerController() {
			/* jshint validthis: true */
			var self = this;

			// Interface
			self.getNumber 			= getNumber;
			self.setDashPosition 	= setDashPosition;
			self.setDashColor 		= setDashColor;

			
			/////////////////////////
			function getNumber(num) {
				return new Array(num);   
			}

			function setDashPosition(pos) {
				self.project.position = pos;
			}

			function setDashColor(index){
				if(self.project && index == self.project.position) {
					return { 'background-color': self.project.color};
				}
				else {
					return { 'background-color': 'gray'};
				}
			}


		}

})();