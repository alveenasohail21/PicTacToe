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
    function DashboardCtrl(OrdersFactory, UsersFactory, AnalyticsFactory, MediaFactory){
        var vm = this;
        AnalyticsFactory.adminToday().then(function (response) {
            //problem in this api
            console.log("Admin Today: ", response);
        });
        AnalyticsFactory.annualEarning().then(function (response) {
            //problem in this api
            console.log("Annual Earning: ", response);
        });
        AnalyticsFactory.earningByCity().then(function (response) {
            //problem in this api
            console.log("Earning by City: ", response);
        });





        // UsersFactory.updateUser('1', 'Active');
        // OrdersFactory.updateUser('1', 'Shipped');
    }

}());
