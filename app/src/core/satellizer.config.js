(function () {

  'use strict';

  angular.module('app.core')
    .config(configuration);

  /* @ngInject */
  function configuration($authProvider, API_URL) {
    $authProvider.httpInterceptor = false;
    $authProvider.withCredentials = false;
    $authProvider.tokenPrefix = 'ptt';
    $authProvider.authToken = 'Bearer';
    $authProvider.storageType = 'localStorage';
    $authProvider.loginUrl = API_URL + '/admin/login';
  }

}());
