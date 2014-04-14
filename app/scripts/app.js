'use strict';

angular
  .module('rubyforceHomeApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'scrollto'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
