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
    function UsersCtrl(UsersFactory){

        //variable assignment
        var vm = this;
        vm.userData=UsersFactory._data;
        //method assignment
        vm.findUser=findUser;
        vm.findUserByTime=findUserByTime;
        vm.updateUser=updateUser;
        vm.getPages=getPages;

        function findUser(value) {
            vm.toField="";
            vm.fromField="";
            UsersFactory.userSearch(value).then(function (response) {
                vm.userPages=initPagination();
            });
        }

        function findUserByTime(from, to) {
            vm.userField="";
            UsersFactory.userSearchByTime(formatDate(from), formatDate(to)).then(function (response) {
                vm.userPages=initPagination();
            });
        }

        function updateUser(id, value) {
            UsersFactory.updateUser(id.toString(), value)
        }

        function formatDate(rawDate) {
            return moment(rawDate).format("YYYY-MM-DD")
        }

        function init() {
            vm.userPages=initPagination();
        }

        function getPages(from) {
            if(vm.userField){
                UsersFactory.userSearch(vm.userField, from+1);
            }
            else{
                UsersFactory.getAllusers(from+1, null);
            }
        }

        function initPagination(){
            console.log(vm.userData.users);
            var count=Math.ceil(vm.userData.users.count/10);
            var pages=[];
            for(var i=0;i<count;i++){
                pages[i]=i;
            }
            return pages;
        }
        init();
    }

}());
