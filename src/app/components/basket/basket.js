import angular from 'angular';
import uiRouter from 'angular-ui-router';
import basketComponent from './basket.component';
import basketService from './basket.service';

let basketModuleName = angular.module('basket', [
  uiRouter
])

  .config(($stateProvider) => {
    'ngInject';

    $stateProvider
      .state('basket', {
        url: '/basket',
        component: 'basket'
      });
  })

  .component('basket', basketComponent)
  .factory('basketService', basketService.factory)
  // .service('basketService', basketService)  // eslint-disable-line angular/no-service-method
  .name;

export default basketModuleName;

