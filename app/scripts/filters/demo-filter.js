'use strict';

/**
 * @ngdoc filter
 * @name ap.demo.filter:apDemoFilter
 * @function
 * @description
 * # apDemoFilter
 * Filter in the ap.demo.
 */
angular.module('ap.demo')
  .filter('apDemoFilter', function () {
    return function (input) {
      return (angular.isObject(input)) ? input.fullName : input;
    };
  });
