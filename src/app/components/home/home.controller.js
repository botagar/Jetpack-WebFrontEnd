import Item from '../../common/item';

class HomeController {

  constructor () {
    this.items = [
      new Item('jetpack', 10000),
      new Item('jetpack2', 20000)
    ];
  }
}

export default HomeController;
