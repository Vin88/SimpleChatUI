'use strict';

/**
 * @ngdoc function
 * @name portalSeedApp.factory:LoginSVC
 * @description
 * # LoginSvc
 * Factory of the portalSeedApp
 */
 angular.module('portalSeedApp').factory('LoginSvc',LoginSvc);
 LoginSvc.$inject = ['$http'];
function LoginSvc($http) {
   var service = {
     login:login
   }
   return service;

   /**
* @ngdoc method
* @name login
* @methodOf portalSeedApp.factory:LoginSVC
* @description
*This method will make an api call for geting authentication.
*
* @param {null} Description of parameter
* @returns {promise} The returned item...
*/

   function login(){
     var url = "data/info.json";
     return $http.get(url).then(function(response){
       return response.data;
     },function(error){
       return eroor.data;
     })

   }
  };
