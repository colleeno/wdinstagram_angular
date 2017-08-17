"use strict";

(function(){
  angular
  .module('wdinstagram', [
  'ui.router',
  'ngResource'
  ])
  .config([
  "$stateProvider",
    RouterFunction
  ])

  function RouterFunction ($stateProvider) {
    $stateProvider
    .state('gramIndex', {
      url: '/grams',
      templateUrl: 'js/ng-views/index.html',
      controller: 'GramIndexController',
      controllerAs: 'vm'
    })
    .state('gramShow', {
      url: '/grams/:id',
      templateUrl: 'js/ng-views/show.html',
      controller: 'GramShowController',
      controllerAs: 'vm'
    })
  }

})();
