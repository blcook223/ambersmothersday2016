'use strict';

angular.module('ambermothersday2016App')
  .config(function($stateProvider) {
    $stateProvider
      .state('coupons', {
        url: '/coupons',
        template: '<coupons></coupons>',
        authenticate: true
      });
  });
