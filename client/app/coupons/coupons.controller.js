'use strict';

(function() {

class CouponsController {

  constructor($http) {
    this._$http = $http;

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
