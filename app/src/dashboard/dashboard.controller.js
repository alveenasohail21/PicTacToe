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
    function DashboardCtrl(OrdersFactory, UsersFactory, AnalyticsFactory){
        var vm = this;

        // UsersFactory.userSearchByTime().then(function (response) {
        //     console.log("User Search API", response);
        // });
    }

}());
