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
    function OrdersCtrl(r_orders_status, OrdersFactory){
        //variable assignment
        var vm = this;
        vm.orderData=OrdersFactory._data;
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
        function findOrder() {
            vm.toField="";
            vm.fromField="";
            OrdersFactory.orderSearch(vm.orderField).then(function (response) {
                vm.orderPages=initPagination();
            });

        }

        function findOrderByTime(from, to) {
            vm.orderField="";
            OrdersFactory.orderSearchByTime(formatDate(from), formatDate(to)).then(function (response) {
                vm.orderPages=initPagination();
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
            if(vm.orderField){
                OrdersFactory.orderSearch(vm.orderField, from+1);
            }
            else{
                OrdersFactory.getAllOrders(from+1, null);
            }
        }

        function initPagination(){
            var count=Math.ceil(OrdersFactory._data.orders.count/10);
            var pages=[];
            for(var i=0;i<count;i++){
                pages[i]=i;
            }
            return pages;
        }
        init();
    }

}());
