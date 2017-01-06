import ItemModule from './item'

describe('Item', () => {
  let $rootScope, $state, $location, $componentController, $compile;

  beforeEach(window.module(ItemModule));

  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    $componentController = $injector.get('$componentController');
    $state = $injector.get('$state');
    $location = $injector.get('$location');
    $compile = $injector.get('$compile');
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    let controller;
    beforeEach(() => {
      controller = $componentController('item', {
        $scope: $rootScope.$new()
      });
    });
  });

  describe('View', () => {
    // view layer specs.
    let scope, template;

    beforeEach(() => {
      scope = $rootScope.$new();
      const item = { name: "a", price: 1000 };
      scope.item = item;
      template = $compile('<item item-name="item.name" price="item.price"></item>')(scope);
      scope.$apply();
    });

    it('has price and name in template', () => {
      var elements = template.find('p');

      expect(elements.eq(0).text()).to.eq('a');
      expect(elements.eq(1).text()).to.eq('$1000');

    });
  });
});
