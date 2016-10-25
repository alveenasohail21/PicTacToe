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

        //method assignment
        vm.submitMedia=submitMedia;
        vm.deleteMedia=deleteMedia;
        vm.getPages=getPages;

        // method definitions
        function init() {
            vm.allMediaPages=initPagination(vm.mediaData.allMedia.count);
            vm.stickersPages=initPagination(vm.mediaData.stickers.count);
            vm.fontsPages=initPagination(vm.mediaData.fonts.count);
            console.log(vm.mediaData)
        }

        function submitMedia() {
            MediaFactory.addMedia(vm.newMedia);
        }
        function deleteMedia(id, type) {
            MediaFactory.deleteMedia(id, type || 'none');
        }
        function getPages(from) {
            MediaFactory.getMedia(from*10, null, true, 'none');
        }
        function initPagination(mediaCount){
            var count=Math.ceil(mediaCount/10);
            var pages=[];
            for(var i=0;i<count;i++){
                pages[i]=i;
            }
            return pages;
        }
        init()
    }

}());
