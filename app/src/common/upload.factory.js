/**
 * @ngdoc service
 * @name app.common.user
 * @description < description placeholder >
 */

(function(){
  'use strict';
  angular
      .module('app.common')
      .factory('uploadFactory', uploadFactory);

  function uploadFactory(){

    return {
      uploadFile: uploadFile
    };

    /* Define Functions */
    function uploadFile(){

    }



  }
}());
