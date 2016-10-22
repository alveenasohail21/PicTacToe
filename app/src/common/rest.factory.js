/**
 * @ngdoc service
 * @name app.common.rest
 * @description < description placeholder >
 */

(function(){

  'use strict';

  angular
    .module('app.common')
    .factory('restFactory', restFactory);

  /* @ngInject */
  function restFactory(Restangular, $localStorage){

    /* Rest Objects */
    var Users = Restangular.all('users');
    var Auth = Restangular.all('auth');
    var Photos = Restangular.all('photos');
    var Media = Restangular.all('media');
    var Products = Restangular.all('products');
    var Album= Restangular.all('albums');
    var Project= Restangular.all('projects');
    var Admin= Restangular.all('admin');

    /* Return Functions */
    return {
      admin:{

      },
      users:{
        getAllusers: getAllusers,
        searchUser: searchUser
      },
      orders:{
        getAllOrders: getAllOrders,
        getOrdersStatus: getOrdersStatus,
        getOrderDetails: getOrderDetails
      },
      oneUrl: oneUrl
    };

    /* Define Fuctions */

    function oneUrl(url){
      return Restangular.oneUrl('dummy', url).get({}, {
        'Content-Type': 'application/x-www-form-urlencoded'
      });
    }
    function getAllusers(queryParams){
      return Admin.one('users').get(queryParams);
    }
    function getAllOrders(queryParams){
      return Admin.one('orders').get(queryParams);
    }
    function getOrdersStatus(){
      return Admin.one('orders').one('status').get();
    }
    function searchUser(queryParams, value){
      return Admin.one('users').one('search').post(null, queryParams);
    }
  }
}());
