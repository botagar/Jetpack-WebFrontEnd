import angular from 'angular';
import uiRouter from 'angular-ui-router';
import basketComponent from './basket.component';

let basketModuleName = angular.module('basket', [
  uiRouter
])

  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';

    $stateProvider
      .state('basket', {
        url: '/basket',
        component: 'basket'
      });
  })

  .component('basket', basketComponent)

  .name;

export default basketModuleName;
//
