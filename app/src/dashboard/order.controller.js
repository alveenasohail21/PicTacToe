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
        //variable assignment
        var vm = this;
        vm.orderCount=r_orders.totalcount;
        vm.orders=r_orders.users;
        vm.ordersStatus=r_orders_status;

        //method assignment
        vm.getOrderDetails=getOrderDetails;
        vm.findOrder=findOrder;
        vm.findOrderByTime=findOrderByTime;
        vm.updateOrder=updateOrder;

        //method definitions
        function findOrder(value) {
            OrdersFactory.orderSearch(value).then(function (response) {
                vm.orders=response.orders;
                console.log("Orders Search API", response);
            });
        }

        function findOrderByTime(from, to) {
            OrdersFactory.orderSearchByTime(formatDate(from), formatDate(to)).then(function (response) {
                vm.orders=response;
            });
        }

        function updateOrder(id, value) {
            OrdersFactory.updateOrder(id.toString(), value);
        }

        function getOrderDetails(id) {
            OrdersFactory.getOrderDetails(id).then(function (response) {
                vm.orderDetails=response;
                console.log(vm.orderDetails);
            })
        }

        function formatDate(rawDate) {
            return moment(rawDate).format("YYYY-MM-DD")
        }
    }

}());
