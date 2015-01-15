'use strict';

/**
 * @ngdoc controller
 * @name ap.demo.controller:NavCtrl
 * @description
 * # NavCtrl
 * NavCtrl of the ap.demo
 */
angular.module('ap.demo')
  .controller('NavCtrl', [
    '$scope', '$location',
    function ($scope, $location) {

      $scope.isActive = function (route) {
        return $location.path() === route;
      };
  }
]);
