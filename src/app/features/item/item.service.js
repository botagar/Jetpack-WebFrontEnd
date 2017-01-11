import angular from 'angular';
import Item from '../../common/item';
import gql from 'graphql-tag';

//
// TODO - this all needs moving
//

import ApolloClient, {createNetworkInterface} from 'apollo-client';

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:8081/graphql',
  opts: {}
});

const client = new ApolloClient({
  networkInterface
});

angular
  .module('apolloClient', [])
  .factory('apolloClient', () => client);

//
//
//

class ItemService {
  constructor (apolloClient) {
    'ngInject';

    this.client = apolloClient;
  }

  getAll () {
    return client
      .query({
        query: gql`query {
                  items {
                    name
                    price
                  }
                }`
      })
      .then(result => result.data.items.map(item => new Item(item.name, item.price)));
  }

}

// eslint-disable-next-line angular/no-service-method
let itemServiceModule = angular
  .module('item.service', ['apolloClient']) // should use ES6 import to get module name
  .service('itemService', ItemService)
  .name;

export default itemServiceModule;
