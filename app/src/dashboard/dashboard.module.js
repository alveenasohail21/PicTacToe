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
                    views: {
                        '@':{
                            templateUrl:'src/dashboard/dashboard.html',
                            controller: 'DashboardCtrl as vm'
                        }
                    }
                }
            )
            .state('Dashboard.Users', {
                    url:'/users',
                    resolve: {
                        // r_users: function (dashboardFactory) {
                        //     return dashboardFactory.getAllusers();
                        // }
                    },

                    views: {
                        '@':{
                            templateUrl:'src/dashboard/users.html',
                            controller: 'DashboardCtrl as vm'
                        }
                    }
                }
            )
            .state('Dashboard.Orders', {
                    url:'/orders',
                    views: {
                        '@':{
                            templateUrl:'src/dashboard/orders.html',
                            controller: 'DashboardCtrl as vm'
                        }
                    }
                }
            );

    }

}());
