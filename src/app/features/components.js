import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Item from './item/item';
import Basket from './basket/basket';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Item,
  Basket
])

.name;

export default componentModule;
