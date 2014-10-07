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
      .when('/:page', {
        templateUrl: function(urlattr) {
          return 'views/' + urlattr.page + '.html'
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
