(function() {
	'use strict';

	angular.module('portal.api')
		.service('utilityService', ['$http', '$q', utilityService]);

	function utilityService($http, $q) {

		/* jshint validthis: true */
		var self = this;

		self.getPromise 	= getPromise;
		self.postPromise 	= postPromise;
		self.putPromise		= putPromise;
		self.deletePromise	= deletePromise;

		////////////////////////
		function getPromise(title, url) {
			return $http.get(url)
				.then(
					function promiseFulfilled(results) {
						return results.data;
					},
					function promiseRejected(error) {
						console.log(title + ' - rejected: ', error);
						return $q.reject('Failed to retrieve ' + title + ': ' + error);
					}
				);
		}

		function postPromise(title, url, data) {
			return $http.post(url, data)
				.then(
					function promiseFulfilled(results) {
						return results.data;
					},
					function promiseRejected(error) {
						console.log(title + ' - rejected: ', error);
						return $q.reject(error);
					}
				);
		}

		function putPromise(title, url, data) {
			return $http.put(url, data)
				.then(
					function promiseFulfilled(results) {
						return results.data;
					},
					function promiseRejected(error) {
						console.log(title + ' - rejected: ', error);
						return $q.reject(error);
					}
				);
		}

		function deletePromise(title, url) {
			return $http.delete(url)
				.then(
					function promiseFulfilled(results) {
						return results.data;
					},
					function promiseRejected(error) {
						console.log(title + ' - rejected: ', error);
						return $q.reject(error);
					}
				);
		}

	}
})();