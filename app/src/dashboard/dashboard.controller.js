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
        dashboardFactory.getOrdersStatus().then(function (response) {
            console.log(response);
        });
    }

}());
