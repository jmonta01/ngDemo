'use strict';

/**
 * @ngdoc service
 * @name ap.demo.ApDemoService
 * @description
 * # ApDemoService
 * Factory in the ap.demo.
 */
angular.module('ap.demo')
  .factory('ApDemoService', [ '$q', '$http', '$log', 'ApDemoTransform',
    function ($q, $http, $log, ApDemoTransform) {

      var testData1 = [
        { firstName: 'joe',   lastName: 'doe',    fullName: 'joe doe' },
        { firstName: 'todd',  lastName: 'davis',  fullName: 'todd davis' },
        { firstName: 'faye',  lastName: 'raines', fullName: 'faye raines' },
        { firstName: 'karin', lastName: 'reyna',  fullName: 'karin reyna' }
      ];

      var testData2 = [
        { firstName: 'Yvonne',    lastName: 'Stapler',    fullName: 'Yvonne Stapler' },
        { firstName: 'Andrea',    lastName: 'Hall',       fullName: 'Andrea Hall' },
        { firstName: 'William',   lastName: 'McCauley',   fullName: 'William McCauley' },
        { firstName: 'Amy',       lastName: 'Brinson',    fullName: 'Amy Brinson' }
      ];


      var getTest1 = function () {
        return $q(function (resolve, reject) {

          resolve(testData1);

          /*
           var opts = {
           transformResponse: ApDemoTransform
           };

          $http.get('http://localhost/api/demo/test1.json', opts).
            success(function (response) {
              resolve(response);
            }).
            error(function (response) {
              var errorMsg = 'test data couldn\'t be loaded';
              $log.error(errorMsg + response);
              reject(errorMsg);
            });
          */

        });
      };


      var getTest2 = function () {
        return $q(function (resolve, reject) {

          resolve(testData2);

          /*
          var opts = {
              transformResponse: ApDemoTransform
            };

          $http.get('http://localhost/api/demo/test2.json', opts).
            success(function (response) {
              resolve(response);
            }).
            error(function (response) {
              var errorMsg = 'test data couldn\'t be loaded' + response;
              $log.error(errorMsg);
              reject(errorMsg);
            });
            */
        });
      };


      // Public API here
      return {
        getTest1: getTest1,
        getTest2: getTest2
      };
    }
  ]);
