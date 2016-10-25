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
        vm.getPages=getPages;

        //method definitions
        function init(){
            vm.orderPages=initPagination(vm.orderCount);
        }
        function findOrder(value) {
            OrdersFactory.orderSearch(value).then(function (response) {
                vm.orders=response.orders;
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
            })
        }

        function formatDate(rawDate) {
            return moment(rawDate).format("YYYY-MM-DD")
        }

        function getPages(from) {
            OrdersFactory.getAllOrders(from, null);
        }

        function initPagination(order_count){
            var count=Math.ceil(order_count/10);
            var pages=[];
            for(var i=0;i<count;i++){
                pages[i]=i;
            }
            return pages;
        }
        init();
    }

}());
