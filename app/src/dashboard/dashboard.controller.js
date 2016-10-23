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
    function DashboardCtrl(OrdersFactory){
        var vm = this;
        OrdersFactory.getOrdersStatus().then(function (response) {
            console.log(response);
        });
    }

}());
