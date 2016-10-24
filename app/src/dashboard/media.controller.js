/**
 * @ngdoc controller
 * @name app.layouts.controller:Layouts
 * @description < description placeholder >
 */

(function(){

    'use strict';

    angular
        .module('app.dashboard')
        .controller('MediaCtrl', MediaCtrl);

    /* @ngInject */
    function MediaCtrl(MediaFactory, Upload){
        //variable assignment
        var vm = this;
        vm.submit = function() {
            console.log("here");
            // if ($scope.form.file.$valid && $scope.file) {
            //     $scope.upload($scope.file);
            // }
        };

        //method assignment


        // method definitions


    }

}());
