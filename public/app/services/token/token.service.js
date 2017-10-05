(function() {
  'use strict';
  /*jshint validthis: true */

  angular.module('portal.tokenService')
    .service('tokenService', ['$window', '$location', tokenService]);

    function tokenService($window, $location) {

      var self = this;

      // Interface
      self.setToken		 = setToken;
      self.getToken		 = getToken;
      self.deleteToken	= deleteToken;

      //////////////////////
      function setToken(token) {
        // set the time so we can expire the token
        var expires = new Date();

        // convert time to milliseconds
        expires = expires.setTime(expires.getTime() + (60 * 12 * 60 * 1000));

        var tokenObj = {token: token, expires: expires};
      	$window.localStorage.setItem('authToken', JSON.stringify(tokenObj));
      }

      function getToken() {
        var tokenObj = JSON.parse($window.localStorage.getItem('authToken'));

        if(tokenObj) {
            var expireTime = tokenObj.expires;
            var now = new Date();

            // convert time to milliseconds
            now = now.setTime(now.getTime());

            // Check if expired and delete token if true
            if(now > expireTime){
              self.deleteToken();
              $window.location.href = '/index.html';
              
              return null;
            }

            return tokenObj.token;
        }

      }

      function deleteToken() {
      	$window.localStorage.removeItem('authToken');
      }

    }
})();