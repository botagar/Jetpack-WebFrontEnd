
class HomeController {

  constructor (itemService, $scope) {
    'ngInject';

    this.items = [];

    itemService.getAll().then(items => {
      this.items = items;
      $scope.$apply();
    });
  }

}

export default HomeController;
