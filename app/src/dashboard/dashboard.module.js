/**
 * @ngdoc overview
 * @name app.layouts
 * @description < description placeholder >
 */

(function(){

    'use strict';

    angular
        .module('app.dashboard', [])
        .config(configuration);

    /* @ngInject */
    function configuration($stateProvider){

        //add your state mappings here
        $stateProvider
            .state('Dashboard', {
                    url:'/dashboard',
                    abstract : true
                }
            )
            .state('Dashboard.Analytics', {
                    url:'/home',
                    resolve: {
                        r_earningByCity: function (AnalyticsFactory) {
                            return AnalyticsFactory.earningByCity();
                        },
                        r_annualEarning: function (AnalyticsFactory) {
                            return AnalyticsFactory.annualEarning();
                        },
                        r_adminToday: function (AnalyticsFactory) {
                            return AnalyticsFactory.adminToday();
                        }
                    },

                    views: {
                        '@':{
                            templateUrl:'src/dashboard/analytics.html',
                            controller: 'AnalyticsCtrl as vm'
                        }
                    }
                }
            )
            .state('Dashboard.Users', {
                    url:'/users',
                    resolve: {
                        r_users: function (UsersFactory) {
                            return UsersFactory.getAllusers();
                        }
                    },

                    views: {
                        '@':{
                            templateUrl:'src/dashboard/users.html',
                            controller: 'UsersCtrl as vm'
                        }
                    }
                }
            )
            .state('Dashboard.Orders', {
                    url:'/orders',
                    resolve: {
                        r_orders: function (OrdersFactory) {
                            return OrdersFactory.getAllOrders();
                        },
                        r_orders_status: function (OrdersFactory) {
                            return OrdersFactory.getOrdersStatus();
                        }
                    },
                    views: {
                        '@':{
                            templateUrl:'src/dashboard/orders.html',
                            controller: 'OrdersCtrl as vm'
                        }
                    }
                }
            )
            .state('Dashboard.OrderDetails', {
                    url:'/orders/:id',
                    resolve: {
                        r_details: function ($stateParams, OrdersFactory) {
                            return OrdersFactory.getOrderDetails($stateParams.id);
                        }
                    },
                    views: {
                        '@':{
                            templateUrl:'src/dashboard/order-details.html',
                            controller: 'orderDetailsCtrl as vm'
                        }
                    }
                }
            )
            .state('Dashboard.Media', {
                    url:'/media',
                    views: {
                        '@':{
                            templateUrl:'src/dashboard/media.html',
                            controller: 'MediaCtrl as vm'
                        }
                    }
                }
            )
            .state('Dashboard.Stickers', {
                    url:'/stickers',
                    views: {
                        '@':{
                            templateUrl:'src/dashboard/stickers-media.html',
                            controller: 'MediaCtrl as vm'
                        }
                    },
                    resolve: {
                        r_stickers: function ($stateParams, MediaFactory) {
                            return MediaFactory.getMedia(null, null, false, 'stickers');
                        }
                    }
                }
            )
            .state('Dashboard.Fonts', {
                    url:'/fonts',
                    views: {
                        '@':{
                            templateUrl:'src/dashboard/fonts-media.html',
                            controller: 'MediaCtrl as vm'
                        }
                    },
                    resolve: {
                        r_fonts: function ($stateParams, MediaFactory) {
                            return MediaFactory.getMedia(null, null, false, 'fonts');
                        }
                    }
                }
            )
            .state('Dashboard.AllMedia', {
                    url:'/allmedia',
                    views: {
                        '@':{
                            templateUrl:'src/dashboard/all-media.html',
                            controller: 'MediaCtrl as vm'
                        }
                    },
                    resolve: {
                        r_allMedia: function ($stateParams, MediaFactory) {
                            return MediaFactory.getMedia(null, null, true, 'none');
                        }
                    }
                }
            );
    }

}());
