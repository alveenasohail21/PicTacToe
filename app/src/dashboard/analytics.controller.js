/**
 * @ngdoc controller
 * @name app.layouts.controller:Layouts
 * @description < description placeholder >
 */

(function(){

    'use strict';

    angular
        .module('app.dashboard')
        .controller('AnalyticsCtrl', AnalyticsCtrl);

    /* @ngInject */
    function AnalyticsCtrl(AnalyticsFactory, r_earningByCity, r_annualEarning, r_adminToday){
        //variable assignment
        var vm = this;
        vm.adminToday=r_adminToday;

        vm.annualEarning=AnalyticsFactory.formatDataForChart("annualEarning", "month");
        vm.earningByCity=AnalyticsFactory.formatDataForChart("earningByCity", "city");

        //method assignment


        // method definitions


    }

}());
