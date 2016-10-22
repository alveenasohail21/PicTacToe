/**
 * @ngdoc controller
 * @name app.auth.controller:Auth
 * @description < description placeholder >
 */

(function(){

  'use strict';

  angular
      .module('app.auth')
      .controller('authCtrl', authCtrl);

  /* @ngInject */
  function authCtrl(authFactory){
    var vm = this;

    vm.forget = {
      email: null
    };

    vm.init = init;
    vm.login = login;
    vm.logout= logout;
    function init(){
      //
    }
    function login(user){
      authFactory.login(user);
    }
    function logout(){
      console.log("logout");
      authFactory.logout();
    }
  }

}());
