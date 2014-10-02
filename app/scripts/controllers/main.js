'use strict';

/**
 * @ngdoc function
 * @name iditWireframesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the iditWireframesApp
 */
angular.module('iditWireframesApp')
  .controller('mainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.range = function(n) {
      return new Array(n);
    }
  });
