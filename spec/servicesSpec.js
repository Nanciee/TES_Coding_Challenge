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

    it('should have a method `getUsers`', function () {
      expect(services.getUsers).to.be.a('function');
    });

    it('should get all users with `getUsers`', function () {
      var mockResponse = 'first_name,last_name,email\nMatthew,Watkins,mwatkins0@google.com.hk\nPhilip,Myers,pmyers1@qq.com\nSandra,Adams,sadams2@barnesandnoble.com\nJustin,Mills,jmills3@prnewswire.com'

      $httpBackend.expect('GET', '../../asset/user-data.csv').respond(mockResponse);

      services.getUsers().then(function (users) {
        expect(users).to.equal(mockResponse);
      });

      $httpBackend.flush();
    });

    it('should have a method `convertToJSON`', function () {
      expect(services.convertToJSON).to.be.a('function');
    });

    it('should convert a string of users to JSON with `convertToJSON`', function () {
      var stringUser = 'Matthew,Watkins,mwatkins0@google.com.hk\nPhilip,Myers,pmyers1@qq.com\nSandra,Adams,sadams2@barnesandnoble.com';
      var expectedJSON = [
      {
        first_name: 'Matthew',
        last_name: 'Watkins',
        email: 'mwatkins0@google.com.hk'
      },
      {
        first_name: 'Philip',
        last_name: 'Myers',
        email: 'pmyers1@qq.com'
      },
      {
        first_name: 'Sandra',
        last_name: 'Adams',
        email: 'sadams2@barnesandnoble.com'
      }];
      expect(services.convertToJSON(stringUser)).to.deep.equal(expectedJSON);
    });

  });

});


