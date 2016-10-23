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
    function UsersCtrl(r_users, $scope, UsersFactory){
        //variable assignment
        var vm = this;
        vm.userCount=r_users.totalcount;
        vm.users=r_users.users;
        //method assignment
        vm.findUser=findUser;
        vm.updateUser=updateUser;

        function findUser(value) {
            UsersFactory.userSearch(value).then(function (response) {
                vm.users=response.users;
                console.log("User Search API", response);
            });
        }
        function updateUser(id, value) {
            UsersFactory.updateUser(id.toString(), value);
        }
        function init() {

        }
        init();
    }

}());
