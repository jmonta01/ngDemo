'use strict';

/**
 * @ngdoc service
 * @name ap.demo.ApDemoTransform
 * @description
 * # ApDemoTransform
 * Data transform for ApDemoService in the ap.demo.
 */

angular.module('ap.demo')
  .factory("ApDemoTransform",
  function () {
    return function (data) {
      var users = [];

      angular.forEach(JSON.parse(data).users, function (user) {
        var _user = user.user;
        _user.fullName = _user.first + ' ' + _user.last;
        users.push(_user);
      });

      return users;
    }
  }
);
