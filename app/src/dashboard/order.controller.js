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
    function OrdersCtrl(r_orders, r_orders_status){
        var vm = this;
        vm.orderCount=r_orders.totalcount;
        vm.orders=r_orders.users;
        vm.ordersStatus=r_orders_status;
        console.log(vm.orders);
        console.log(vm.ordersStatus);
        vm.getOrderDetails=getOrderDetails;

        function getOrderDetails(id) {
            dashboardFactory.getOrderDetails(id).then(function (response) {
                vm.orderDetails=response;
                console.log(vm.orderDetails);
            })
        }
    }

}());
