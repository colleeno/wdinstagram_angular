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
    .state('entryIndex', {
      url: '/entries',
      templateUrl: 'js/ng-views/index.html',
      controller: 'EntryIndexController',
      controllerAs: 'vm'
    })
    .state('entryNew', {
      url: '/entries/new',
      templateUrl: 'js/ng-views/new.html',
      controller: 'EntryNewController',
      controllerAs: 'vm'
    })
    .state('entryShow', {
      url: '/entries/:id',
      templateUrl: 'js/ng-views/show.html',
      controller: 'EntryShowController',
      controllerAs: 'vm'
    })
    .state ('entryEdit', {
      url: 'entries/:id/edit',
      templateUrl: 'js/ng-views/edit.html',
      controller: 'EntryEditController',
      controllerAs: 'vm'
    })
  }

})();
