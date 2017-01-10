import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import itemComponent from '../item/item';

let homeModule = angular.module('home', [
  uiRouter,
  itemComponent
])

.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      component: 'home'
    });
})

.component('home', homeComponent)

.name;

export default homeModule;
