'use strict';

/**
 * @ngdoc overview
 * @name ngDemoApp
 * @description
 * # ngDemoApp
 *
 * Main module of the application.
 */
angular
  .module('ap.demo', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/main.html'
      })
      .when('/about', {
        templateUrl: 'views/about.html'
      })
      .otherwise({
        redirectTo: '/home'
      });
  });
