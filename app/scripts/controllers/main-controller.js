'use strict';

/**
 * @ngdoc controller
 * @name ap.demo.controller:ApDemoCtrl
 * @description
 * # ApDemoCtrl
 * Controller of the ap.demo
 */
angular.module('ap.demo')
  .controller('ApDemoCtrl', [
    '$scope', '$log', 'ApDemoService',
    function ($scope, $log, ApDemoService) {

      var demoScope = this;

      demoScope.message = 'Demo Module';

      ApDemoService.getTest1().then(
        function (data) {
          demoScope.options1 = data;
          demoScope.nameSelection1 = demoScope.options1[0];
        },
        function (error) {
          $log.log(error);
        }
      );


      ApDemoService.getTest2().then(
        function (data) {
          demoScope.options2 = data;
        },
        function (error) {
          $log.log(error);
        }
      );

      demoScope.nameSelection2 = null;


      demoScope.nameInput = 'World';
  }
]);
