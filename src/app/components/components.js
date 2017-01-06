import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Item from './item/item';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Item
])

.name;

export default componentModule;
