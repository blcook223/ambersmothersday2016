'use strict';

import mongoose from 'mongoose';

var CouponSchema = new mongoose.Schema({
  title: String,
  description: String,
  used: Boolean
});

export default mongoose.model('Coupon', CouponSchema);
