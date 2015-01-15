'use strict';

/**
 * @ngdoc directive
 * @name ap.demo.directive:apDemoOutput
 * @function
 * @description
 * # apDemoOutput
 * Directive in ap.demo.
 */
angular.module('ap.demo')
  .directive('apDemoOutput', [
    function () {
      return {
        restrict : 'E',
        replace: true,
        scope: {
          value: '='
        },
        templateUrl: 'templates/output.tpl.html'
      };
    }
  ]);
