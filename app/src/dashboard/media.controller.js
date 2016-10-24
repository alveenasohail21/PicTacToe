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
    function MediaCtrl(MediaFactory){
        //variable assignment
        var vm = this;
        vm.newMedia={};
        vm.newMedia.theme="Standard";
        vm.newMedia.type="Stickers";
        vm.mediaData=MediaFactory._data;

        //method assignment
        vm.submitMedia=submitMedia;
        vm.deleteMedia=deleteMedia;

        // method definitions
        function submitMedia() {
            MediaFactory.addMedia(vm.newMedia);
        }
        function deleteMedia(id, type) {
            MediaFactory.deleteMedia(id, type);
        }

    }

}());
