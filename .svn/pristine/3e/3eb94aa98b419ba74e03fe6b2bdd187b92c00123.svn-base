'use strict';

/**
 * @ngdoc function
 * @name portalSeedApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the portalSeedApp
 */
angular.module('portalSeedApp').controller('loginCtrl',loginCtrl);
loginCtrl.$inject = ['$scope','$sessionStorage','LoginSvc','$state','$rootScope','$translate','$translatePartialLoader']

function loginCtrl ($scope,$sessionStorage,LoginSvc,$state,$rootScope,$translate,$translatePartialLoader) {
    $scope.message = "login page";
    $rootScope.showHeader = false;

    $translatePartialLoader.addPart('master');
								$translate.refresh();


    /**
 * @ngdoc method
 * @name login
 * @methodOf portalSeedApp.controller:LoginCtrl
 * @description
 *This method will be called when user click on Submit button.and this will call a method from LoginSvc.

 * @returns {promise} The returned item...
 */

    $scope.login = function(){
      console.log($scope.emailId + "" + $scope.password);
      var promise  = LoginSvc.login();
      promise.then(function(response){
        console.log(response);
        if(response.isAuthenticate){
          $sessionStorage.isAuthenticate = true;
          $sessionStorage.userName = $scope.emailId;
          $state.go('main',{
            userId:$scope.emailId
          });
        }
        else{
          $scope.errorMessage = "not Authorise";
        }
      },function(error){
        console.log(error)
      })

    }
  };
