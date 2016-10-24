/**
 * @ngdoc controller
 * @name app.layouts.controller:Layouts
 * @description < description placeholder >
 */

(function(){

    'use strict';

    angular
        .module('app.dashboard')
        .controller('orderDetailsCtrl', orderDetailsCtrl);

    /* @ngInject */
    function orderDetailsCtrl(OrdersFactory, $stateParams, r_details){
        var vm = this;

        console.log("id: ", r_details);

    }

}());
