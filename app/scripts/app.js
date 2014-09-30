'use strict';

/**
 * @ngdoc overview
 * @name iditWireframesApp
 * @description
 * # iditWireframesApp
 *
 * Main module of the application.
 */
angular
  .module('iditWireframesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
