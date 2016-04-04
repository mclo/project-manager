(function() {
  'use strict';

  angular
    .module('projectManager')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('home.project.view', {
        url: '/:id',
        templateUrl: 'app/project/view/view.html',
        controller: 'ViewController',
        controllerAs: 'view'
      }).state('home.project.edit', {
        url: '/edit/:id',
        templateUrl: 'app/project/edit/edit.html',
        controller: 'EditController',
        controllerAs: 'edit'
      });
  }

})();
