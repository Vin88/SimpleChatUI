'use strict';

/**
 * @ngdoc function
 * @name portalSeedApp.controller:MainCtrl
 * @description This is the controller for main state.
 * # MainCtrl
 * Controller of the portalSeedApp
 */

 angular.module('portalSeedApp').controller('MainCtrl',MainCtrl);
 MainCtrl.$inject = ['$scope','$state','$sessionStorage','$rootScope','$translate','$translatePartialLoader']
 function MainCtrl($scope,$state,$sessionStorage,$rootScope,$translate,$translatePartialLoader) {

   $translatePartialLoader.addPart('master');
   $translate.refresh();
    var isAuthenticate = $sessionStorage.isAuthenticate;
    $scope.userName = $sessionStorage.userName;
    if(!isAuthenticate){
      $state.go('login');
    }

    // just for the test purpose
    $scope.name = "saurabh";

    /**
 * @ngdoc method
 * @name checkPalindron
 * @methodOf portalSeedApp.controller:MainCtrl
 * @description
 *This method is used to check for palindrome  string.It accept a string parameter and return true or false on the bases of palindrome.
 *
 * @param {string} String This is the String that need to check whether it is string or not.
 * @returns {Boolean} True if given string is plindrome false otherwise.
 */

  //  $rootScope.showHeader = false;
    // this method is for the purpose of writing test cases
    $scope.checkPalindron = function(str){

    var len = str.length;
    for ( var i = 0; i < Math.floor(len/2); i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;

    }



  };
