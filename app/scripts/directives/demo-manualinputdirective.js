'use strict';

/**
 * @ngdoc directive
 * @name ap.demo.directive:apDemoManualInput
 * @function
 * @description
 * # apDemoManualInput
 * Directive in ap.demo.
 */
angular.module('ap.demo')
  .directive('apDemoManualInput', [
    function () {
      return {
        restrict : 'E',
        replace: true,
        scope: {
          value: '='
        },
        templateUrl: 'templates/manualinput.tpl.html',
        link: function (scope) {

          scope.clearInput = function () {
            scope.value = null;
          };

        }
      };
    }
  ]);
