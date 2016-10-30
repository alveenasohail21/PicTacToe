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
        vm.uploadPattern='image/*';

        //method assignment
        vm.submitMedia=submitMedia;
        vm.deleteMedia=deleteMedia;
        vm.getPages=getPages;
        vm.switchPattern=switchPattern;

        // method definitions
        function init() {
            vm.allMediaPages=initPagination(vm.mediaData.allMedia.count);
            vm.stickersPages=initPagination(vm.mediaData.stickers.count);
            vm.fontsPages=initPagination(vm.mediaData.fonts.count);
        }

        function switchPattern() {
            if(vm.newMedia.type=='fonts') {
                vm.newMedia.media=undefined;
                vm.uploadPattern='.ttf,.otf,.woff,.woff2,.eot';
            }
            else if(vm.newMedia.type=='stickers') {
                vm.newMedia.media=undefined;
                vm.uploadPattern='image/*';
            }
        }

        function submitMedia() {
            vm.newMedia.theme='Standard';
            MediaFactory.addMedia(vm.newMedia).then(function (response) {
                vm.newMedia.type='stickers';
                switchPattern();
                vm.newMedia.name='';
                vm.newMedia.theme='Standard';
                vm.newMedia.media=undefined;
            });
        }

        function deleteMedia(id, type) {
            MediaFactory.deleteMedia(id, type || 'none');
        }

        function getPages(from, type) {
            if(type=='stickers') MediaFactory.getMedia(from*10, null, false, type);
            else if (type=='fonts') MediaFactory.getMedia(from*10, null, false, type);
            else if (type=='none') MediaFactory.getMedia(from*10, null, true, type);
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
