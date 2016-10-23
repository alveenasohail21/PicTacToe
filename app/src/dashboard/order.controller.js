/**
 * @ngdoc controller
 * @name app.layouts.controller:Layouts
 * @description < description placeholder >
 */

(function(){

    'use strict';

    angular
        .module('app.dashboard')
        .controller('OrdersCtrl', OrdersCtrl);

    /* @ngInject */
    function OrdersCtrl(r_orders, r_orders_status, OrdersFactory){
        var vm = this;
        vm.orderCount=r_orders.totalcount;
        vm.orders=r_orders.users;
        vm.ordersStatus=r_orders_status;
        vm.getOrderDetails=getOrderDetails;

        function getOrderDetails(id) {
            OrdersFactory.getOrderDetails(id).then(function (response) {
                vm.orderDetails=response;
                console.log(vm.orderDetails);
            })
        }
    }

}());
