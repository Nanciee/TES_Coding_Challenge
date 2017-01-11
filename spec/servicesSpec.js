describe('Services', function () {
  beforeEach(module('TES.services'));

  describe('Links Factory', function () {
    var services, $httpBackend;

    beforeEach(inject(function (_services_, _$httpBackend_) {
      services = _services_;
      $httpBackend = _$httpBackend_;
    }));

    it('should exist', function () {
      expect(services).to.exist;
    });

    it('should have a method `getAll`', function () {
      expect(services.getUsers).to.be.a('function');
    });

    it('should get all users with `getAll`', function () {
      var mockResponse = 'first_name,last_name,email\nMatthew,Watkins,mwatkins0@google.com.hk\nPhilip,Myers,pmyers1@qq.com\nSandra,Adams,sadams2@barnesandnoble.com\nJustin,Mills,jmills3@prnewswire.com'

      $httpBackend.expect('GET', '../../asset/user-data.csv').respond(mockResponse);

      services.getUsers().then(function (users) {
        expect(users).to.equal(mockResponse);
      });

      $httpBackend.flush();
    });

  });

});


