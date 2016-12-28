import angular from 'angular';

let dataserviceExport = angular
  .module('dataservice', [])
  .factory('dataservice', ($http, $log) => {
    'ngInject';

    return {
      get: get,
      idMaker: idMaker
    };

    function get () {
      return $http.get('http://localhost:8080/customers')
        .then(getComplete)
        .catch(getFailed);

      function getComplete (response) {
        return response.data;
      }

      function getFailed (error) {
        $log.error('XHR Failed for get.' + error.data);
      }
    }

    function* idMaker () {
      let index = 0;
      while (true) {
        yield index++;
      }
    }
  })
  .name;

export default dataserviceExport;
