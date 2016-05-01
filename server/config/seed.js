/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Coupon from '../api/coupon/coupon.model';
import User from '../api/user/user.model';

Coupon.find({}).remove()
  .then(() => {
    Coupon.create({
      title: 'Mom\'s Night Out',
      description: 'I\'ll watch the kid(s) while you go out and enjoy a guilt-free afternoon and/or evening of fun in Charleston.',
      used: false
    }, {
      title: 'Mom\'s Night In',
      description: 'I\'ll take the kid(s) out for an afternoon and evening while you enjoy a house to yourself. When it\'s time for bed, I\'ll do bedtime, then clear out again.',
      used: false
    }, {
      title: 'Massage',
      description: 'I\'ll give you a relaxing, full-body massage (including feet).',
      used: false
    }, {
      title: 'New Purchase for House',
      description: 'Let\'s go out a pick out a new item for our home, such as a rug, furniture, or decoration.',
      used: false
    }, {
      title: 'Date Night Out',
      description: 'I\'ll find us a babysitter and plan a night out on the town in Charleston.',
      used: false
    }, {
      title: 'Date Night In',
      description: 'I\'ll plan an evening of post bed-time movies, games, eating, and drinking.',
      used: false
    }, {
      title: 'Dessert',
      description: 'After bedtime, I\'ll run to Dairy Queen, Sonic, the Cheesecake Factory or somewhere else to pick us up a dessert.',
      used: false
    }, {
      title: 'Trip to the Beach',
      description: 'We\'ll pack up and spend an afternoon at the beach of your choice.',
      used: false
    }, {
      title: 'Explore our New Neighborhood',
      description: 'Let\'s go on a walk or drive and find something fun to do in our new neighborhood.',
      used: false
    });
  });

User.find({}).remove()
  .then(() => {
    User.create({
      provider: 'local',
      name: 'Amber',
      email: 'amber.caroline.cook@gmail.com',
      password: 'BukaHead1'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Ben',
      email: 'benjamin.l.cook@gmail.com',
      password: 'BukaHead1'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });
