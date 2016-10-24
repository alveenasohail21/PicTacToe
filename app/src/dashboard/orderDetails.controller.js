/**
 * @ngdoc controller
 * @name app.layouts.controller:Layouts
 * @description < description placeholder >
 */

(function(){

    'use strict';

    angular
        .module('app.dashboard')
        .controller('orderDetailsCtrl', orderDetailsCtrl);

    /* @ngInject */
    function orderDetailsCtrl(OrdersFactory, $stateParams, r_details){
        var vm = this;
        vm.orderItems=r_details.orderDetails;
        vm.orders=r_details.orders[0];
        console.log("id: ", vm.orders);
        console.log("id: ", vm.orderItems);
    }

}());
