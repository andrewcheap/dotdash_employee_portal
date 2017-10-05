(function() {
  'use strict';
  /*jshint validthis: true */

  angular.module('portal.interceptorService')
    .factory('httpRequestInterceptor', function (tokenService) {
      return {
        request: function (config) {
          var token = tokenService.getToken();

          if(token) {
            config.headers['x-access-token'] = token;
          }

          return config;
        }
      };
    });
})();