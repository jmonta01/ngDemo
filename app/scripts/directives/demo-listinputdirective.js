'use strict';

/**
 * @ngdoc directive
 * @name ap.demo.directive:apDemoListInput
 * @function
 * @description
 * # apDemoListInput
 * Directive in ap.demo.
 */
angular.module('ap.demo')
  .directive('apDemoListInput', [
    function () {
      return {
        restrict: 'E',
        replace: true,
        scope: {
          options: '=',
          selection: '='
        },
        templateUrl: 'templates/listinput.tpl.html'
      };
    }
  ]);
