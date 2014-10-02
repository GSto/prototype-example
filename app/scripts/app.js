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
      .when('/parts', {
        templateUrl: 'views/parts.html'
      })
      .when('/about', {
        templateUrl: 'views/about.html'
      })
      .when('/terms-of-service', {
        templateUrl: 'views/terms-of-service.html'
      })
      .when('/privacy-policy', {
        templateUrl: 'views/privacy-policy.html'
      })
      .when('/contact',  {
        templateUrl: 'views/contact.html'
      })
      .when('/poster-login', {
        templateUrl: 'views/poster-login.html'
      })
      .when('/expert-login', {
        templateUrl: 'views/expert-login.html'
      })
      .when('/poster-signup', {
        templateUrl: 'views/poster-signup.html'
      })
      .when('/expert-signup', {
        templateUrl: 'views/expert-signup.html'
      })
      .when('/forgot-password', {
        templateUrl: 'views/forgot-password.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
