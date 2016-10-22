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
                    url:'/',
                    views: {
                        '@':{
                            templateUrl:'src/dashboard/dashboard.html',
                            controller: 'DashboardCtrl as vm'
                        }
                    }
                }
            );
    }

}());
