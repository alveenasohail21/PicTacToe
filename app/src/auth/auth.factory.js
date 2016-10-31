/**
 * @ngdoc service
 * @name app.auth.auth
 * @description < description placeholder >
 */

(function(){
  'use strict';
  angular
      .module('app.auth')
      .factory('authFactory', authFactory);

  function authFactory($q, alertFactory, $auth, userFactory, $localStorage, $state, $timeout, Restangular, restFactory, $rootScope){
    var socialLoader=[];
    /* Return Functions */
    return {
      login: login,
      logout: logout,
    };

    /* Define Fuctions */
    function login(user){
      console.log('auth factory login', user);
      var defer = $q.defer();
      $auth.login(user)
          .then(function(resp){
            if(resp.data.success){
              // remove the token saved by $auth, as its throwing 'Uncaught Syntax error'
              $auth.removeToken();
              $localStorage.token = resp.data.token;
              Restangular.setDefaultHeaders({'token': 'Bearer {'+ $localStorage.token +'}'});
              userFactory.createUserInLocal(resp.data.data);
              alertFactory.success(null,resp.data.message);
              $timeout(function(){
                globalLoader.hide();
                $state.go('Dashboard.Analytics');
              },1500);
            }
            else{
              globalLoader.hide();
              alertFactory.error(null,resp.data.message);
            }
            defer.resolve(resp);
          }, function(err){
            alertFactory.error(null,"Incorrect Credentials");
            globalLoader.hide();
            defer.reject(err);
          });
      return defer.promise;
    }

    function logout(){
      globalLoader.hide();
      $auth.removeToken();
      $rootScope.$emit('logout');
      $state.go('Landing',{}, {reload: true});
    }
  }

}());
