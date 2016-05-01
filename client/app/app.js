'use strict';

angular.module('ambermothersday2016App', [
  'ambermothersday2016App.auth',
  'ambermothersday2016App.admin',
  'ambermothersday2016App.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
