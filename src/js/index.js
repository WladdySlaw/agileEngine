'use strict';

require('angular');
require('angular-ui-router');

/**
 *  Vendors
 */
require('./vendor/angular-slick');
require('./vendor/angular-modal-service.min.js');
require('./vendor/angular-sanitize.min.js');
require('./vendor/angular-bootstrap-ui');
require('./vendor/ng-infinite-scroll.min');
require('./vendor/angular-clipboard');
require('./vendor/angular-google-plus.min');
/**
 *  Modules
 */

angular.module('agileEngine',
    ['ui.router',
     'ui.bootstrap' ,
     'slick' ,
     'angularModalService',
     'infinite-scroll',
     'angular-clipboard',
     'googleplus'])
    .config(function($locationProvider, $urlRouterProvider) {
        /**
         * Using html5Mode(true) for removing # from the path
         */
        $locationProvider.html5Mode(true);
        /**
         * RouteProvider rule for handle trailing slash in url (e.g. course/1 and course/1/)
         */
        $urlRouterProvider.rule(function ($injector, $location) {
            var path = $location.url();
            if (path[path.length - 1] === '/' || path.indexOf('/?') > -1) {
                return;
            }
            if (path.indexOf('?') > -1) {
                return path.replace('?', '/?');
            }
            return path + '/';
        });
    })
    .config(function($stateProvider) {
        $stateProvider
            .state('main', {
                url: '/',
                template: '<main></main>'
            })
            .state('cart', {
                url: '/cart/',
                template: '<cart></cart>'
            })
            .state('history', {
                url: '/history/',
                template: '<history></history>'
            })
    });


/**
 * Components
 */

require('./app/main-controller');

/**
 * Controllers
 */

require('./app/cart/cart.component');
require('./app/history/history.component');
require('./app/main/main.component');

/**
 * Services
 */

require('./services/core.service');
