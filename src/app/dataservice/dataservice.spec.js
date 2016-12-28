import DataService from './dataservice'

describe('DataService', () => {
  let $httpBackend;

  beforeEach(window.module(DataService));

  beforeEach(inject(($injector) => {
    $httpBackend = $injector.get('$httpBackend');
  }));

  describe('Service', () => {
    let dataService;
    beforeEach(inject(function (_dataservice_, _$httpBackend_) {
      dataService = _dataservice_;
      $httpBackend = _$httpBackend_;
    }));

    it('should do somthing', () => {

      $httpBackend.whenGET("http://localhost:8080/customers").respond(["foo", "baz"]);

      let data;

      dataService.get().then((d) => {
        data = d;
      });

      $httpBackend.flush();

      expect(data).to.eql(["foo", "baz"]);

    });
  });


});
