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
    function DashboardCtrl(dashboardFactory){
        var vm = this;
        // vm.users=r_users;
        dashboardFactory.getAllusers().then(function (response) {
            console.log(response);
        })
    }

}());
