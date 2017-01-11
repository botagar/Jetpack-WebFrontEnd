import template from './item.html';
import controller from './item.controller';
import './item.scss';

let itemComponent = {
  restrict: 'E',
  bindings: {
    price: '<',
    itemName: '<'
  },
  template,
  controller
};

export default itemComponent;
