/**
 * @ngdoc controller
 * @name app.layouts.controller:Layouts
 * @description < description placeholder >
 */

(function(){

    'use strict';

    angular
        .module('app.dashboard')
        .controller('UsersCtrl', UsersCtrl);

    /* @ngInject */
    function UsersCtrl(dashboardFactory, r_users){
        var vm = this;
        vm.userCount=r_users.totalcount;
        vm.users=r_users.users;
        function init() {

        }
        init();
    }

}());
