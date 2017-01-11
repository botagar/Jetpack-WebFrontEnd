class BasketService {

  // ugly - dirty, dirty hack - triplicated dependency sequences!
  static factory ($log, $q) {
    'ngInject';
    return new BasketService($log, $q);
  }

  constructor ($log, $q) {
    $log.info('BasketService', 'constructor');

    function getBasket () {
      $log.info('BasketService', 'getBasket');

      let deferred = $q.defer();
      let list = [
        {
          'name': 'Thongs',
          'amount': 12.95
        },
        {
          'name': 'Shoes',
          'amount': 29.95
        }
      ];

      deferred.resolve(list);
      return deferred.promise;
    }

    return {
      name: 'basketService',
      getBasket: getBasket
    };
  }
}

export default BasketService;
