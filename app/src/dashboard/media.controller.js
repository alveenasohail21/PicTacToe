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
        vm.newMedia.type="stickers";
        vm.mediaData=MediaFactory._data;
         var allMediaPages=Math.ceil(vm.mediaData.allMedia.count/10);
        vm.allMediaPages=new Array(allMediaPages);
        console.log(vm.allMediaPages, vm.stickersPages, vm.fontsPages);
        console.log(vm.mediaData);
        //method assignment
        vm.submitMedia=submitMedia;
        vm.deleteMedia=deleteMedia;
        vm.getPages=getPages;

        // method definitions
        function submitMedia() {
            MediaFactory.addMedia(vm.newMedia);
        }
        function deleteMedia(id, type) {
            MediaFactory.deleteMedia(id, type || 'none');
        }
        function getPages(from) {

            MediaFactory.getMedia(from*10, null, true, 'none');
        }
        for(var i=0;i<allMediaPages;i++){
            vm.allMediaPages[i]=i;
        }
    }

}());
