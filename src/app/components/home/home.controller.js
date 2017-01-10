import Item from '../../common/item';

class HomeController {

  constructor (itemService, $scope) {
    'ngInject';

    this.items = [
      new Item('jetpack', 10000),
      new Item('jetpack2', 20000)
    ];

    itemService.getAll().then(items => {
      this.items = items;
      $scope.$apply();
    });
  }

}

export default HomeController;
