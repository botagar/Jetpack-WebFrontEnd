import angular from 'angular';
import uiRouter from 'angular-ui-router';
import itemComponent from './item.component';
import itemService from './item.service';

let itemModule = angular
  .module('item', [
    uiRouter,
    itemService
  ])

  .component('item', itemComponent)

  .name;

export default itemModule;
