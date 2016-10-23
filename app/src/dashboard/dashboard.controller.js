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
    function DashboardCtrl(OrdersFactory, UsersFactory){
        var vm = this;
        // OrdersFactory.orderSearch().then(function (response) {
        //     console.log("Order Search API", response);
        // });
        // UsersFactory.userSearch().then(function (response) {
        //     console.log("User Search API", response);
        // });


        // UsersFactory.userSearchByTime().then(function (response) {
        //     console.log("User Search API", response);
        // });


        // UsersFactory.updateUser('2', 'Active');
    }

}());
