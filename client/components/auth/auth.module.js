'use strict';

angular.module('ambermothersday2016App.auth', [
  'ambermothersday2016App.constants',
  'ambermothersday2016App.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
