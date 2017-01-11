import angular from 'angular';
import uiRouter from 'angular-ui-router';
import appComponent from './app.component';
import components from './features/components';
import 'script!tether';
import 'script!jquery';
import 'script!bootstrap';

import dataservice from './dataservice/dataservice';

angular
  .module('app', [
    uiRouter,
    dataservice,
    components
  ])
  .config(($locationProvider) => {
    'ngInject';
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions#how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(false);
  })
  .component('app', appComponent);
