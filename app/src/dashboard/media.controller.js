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
            Upload.upload({
                url : 'http://localhost:8000/admin/media',
                headers: {
                    token :   'Bearer' + '{'+$localStorage["token"]+'}'
                },
                data :  vm.newMedia
            }).then(function(resp){
                console.log("response :: ",resp);
                if(resp.data.code == 0){
                    alert("Done");
                }else {
                    alert(resp.data.text);
                }
            });
        };

        //method assignment


        // method definitions

    }

}());
