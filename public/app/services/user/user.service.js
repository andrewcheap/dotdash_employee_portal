(function() {
  'use strict';
  /*jshint validthis: true */

  angular.module('portal.userService')
    .service('userService', ['$http', '$q', 'tokenService', userService]);

    function userService($http, $q, tokenService) {

      var self = this;

      // Interface
      self.getUser      = getUser;

      //////////////////////
      function getUser() {
        if(tokenService.getToken()){ 
          return $http.post('/api/user');
        }
        else {
          $q.reject({message: 'User has no token.'});
        }
      }


      
    }
})();