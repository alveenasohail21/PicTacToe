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
    function MediaCtrl(MediaFactory, Upload, $localStorage){
        //variable assignment
        var vm = this;

        vm.newMedia={};
        vm.newMedia.theme="Standard";
        vm.newMedia.type="Stickers";



        vm.submitMedia = function() {
            MediaFactory.addMedia(vm.newMedia);
        };

        //method assignment


        // method definitions

    }

}());
