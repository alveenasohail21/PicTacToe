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
        vm.findUserByTime=findUserByTime;
        vm.updateUser=updateUser;
        vm.getPages=getPages;

        function findUser(value) {
            UsersFactory.userSearch(value).then(function (response) {
                vm.users=response.users;
                console.log("User Search API", response);
            });
        }

        function findUserByTime(from, to) {
            UsersFactory.userSearchByTime(formatDate(from), formatDate(to)).then(function (response) {
                vm.users=response;
            });
        }

        function updateUser(id, value) {
            UsersFactory.updateUser(id.toString(), value);
        }

        function formatDate(rawDate) {
            return moment(rawDate).format("YYYY-MM-DD")
        }

        function init() {
            vm.userPages=initPagination(vm.userCount);
        }

        function getPages(from) {
            UsersFactory.getAllusers(from, null);
        }

        function initPagination(user_count){
            var count=Math.ceil(user_count/10);
            var pages=[];
            for(var i=0;i<count;i++){
                pages[i]=i;
            }
            return pages;
        }
        init();
    }

}());
