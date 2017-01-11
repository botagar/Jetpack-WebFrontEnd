
class BasketController {
  constructor ($log, basketService) {
    'ngInject';

    $log.info('BasketController', 'constructor');
    $log.info('BasketController', 'basketService', basketService);

    this.name = 'BasketController';

    basketService.getBasket().then((items) => {
      $log.info('BasketController', 'getBasket().then');
      this.items = items;
    });
  }
}

export default BasketController;
