/**
 * @ngdoc controller
 * @name app.layouts.controller:Layouts
 * @description < description placeholder >
 */

(function(){

    'use strict';

    angular
        .module('app.dashboard')
        .controller('DashboardCtrl', DashboardCtrl);

    /* @ngInject */
    function DashboardCtrl(dashboardFactory){
        var vm = this;
        // dashboardFactory.getAllOrders().then(function (response) {
        //     console.log(response);
        // });
        dashboardFactory.getOrderDetails('1').then(function (response) {
            console.log(response);
        });
    }

}());
