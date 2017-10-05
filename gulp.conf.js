'use strict';

module.exports = {
	'scripts': {
		'uglifyjs': 'uglifyjs -b beautify=false,max-line-len=120000',
	},

	'paths': {
		'dist': 'public/dist',
	},

	'files': {
		'vendor': [
			"node_modules/lodash/lodash.min.js",
			"node_modules/angular/angular.js",
			"node_modules/ng-file-upload/dist/ng-file-upload.min.js",
			"node_modules/angular-ui-router/release/angular-ui-router.min.js",
			"node_modules/tinycolor2/dist/tinycolor-min.js",
			"node_modules/md-color-picker/dist/mdColorPicker.min.js",
			"node_modules/angular-animate/angular-animate.min.js",
			"node_modules/angular-aria/angular-aria.min.js",
			"node_modules/angular-material/angular-material.min.js",
		],
		'app': [
			// API
			"public/app/api/app.api.module.js",
			"public/app/api/app.api.config.js",
			"public/app/api/app.api.service.js",
			"public/app/api/app.api.utils.js",

			// SERVICES
			"public/app/services/token/token.module.js",
			"public/app/services/token/token.service.js",
			"public/app/services/interceptor/interceptor.module.js",
			"public/app/services/interceptor/interceptor.service.js",
			"public/app/services/user/user.module.js",
			"public/app/services/user/user.service.js",

			// SHARED
			"public/app/shared/fileUpload/fileUpload.module.js",
			"public/app/shared/fileUpload/fileUpload.component.js",			
			"public/app/shared/dashPicker/dashPicker.module.js",
			"public/app/shared/dashPicker/dashPicker.component.js",	

			// COMPONENTS

			// register
			"public/app/components/register/register.module.js",
			"public/app/components/register/register.component.js",

			// login
			"public/app/components/login/login.module.js",
			"public/app/components/login/login.component.js",

			// dashboard
			"public/app/components/dashboard/dashboard.module.js",
			"public/app/components/dashboard/dashboard.component.js",

			// project
			"public/app/components/project/project.module.js",
			"public/app/components/project/project.component.js",

			// routes
			"public/app/app.routes.js",
			
			// app
			"public/app/app.mainController.js",
			"public/app/app.module.js",
					],
		'vendorCss': [
			"node_modules/angular-material/angular-material.min.css",
			"node_modules/md-color-picker/dist/mdColorPicker.min.css",
		],
		'css': [
			"public/app/components/**/*.css",
			"public/app/shared/**/*.css",
			"public/assets/css/styles.css",
		],
	}
}