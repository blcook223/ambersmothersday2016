'use strict';

(function() {

class CouponsController {

  constructor($http, Auth) {
    this._$http = $http;

    Auth.getCurrentUser(user => {
      this.user = user;
    });
    this._$http.get('/api/coupons')
      .then(res => {
        this.coupons = res.data;
      });
  }

  markUsed(coupon) {
    coupon.used = true;
    this._$http.put('/api/coupons/' + coupon._id, coupon);
  }
}

angular.module('ambermothersday2016App')
  .component('coupons', {
    templateUrl: 'app/coupons/coupons.html',
    controller: CouponsController,
    controllerAs: 'vm'
  });

})();
