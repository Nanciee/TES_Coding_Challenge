describe('TES', function () {
  var $scope, $rootScope, createController, ManageVm;

  // using angular mocks, we can inject the injector
  // to retrieve our dependencies
  beforeEach(module('TES'));
  beforeEach(inject(function ($injector) {

    // mock out our dependencies
    $rootScope = $injector.get('$rootScope');
    $scope = $rootScope.$new();

    var $controller = $injector.get('$controller');

    ManageVm = $controller('ManageController', { $scope: $scope });

  }));

  it('should have an users property on the ManageVm', function () {
    expect(ManageVm.users).to.be.an('array');
  });

  it('should have an editUser function on the ManageVm', function () {
    expect(ManageVm.editUser).to.be.an('function');
  });

  it('should have a deleteUser function on the ManageVm', function () {
    expect(ManageVm.deleteUser).to.be.an('function');
  });

  it('should remove the user by the index passed into `ManageVm.deleteUser`', function () {
    ManageVm.users = [
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

    var expectedResult = [
      {
        first_name: 'Matthew',
        last_name: 'Watkins',
        email: 'mwatkins0@google.com.hk'
      },
      {
        first_name: 'Sandra',
        last_name: 'Adams',
        email: 'sadams2@barnesandnoble.com'
      }];

    ManageVm.deleteUser(1)
    expect(ManageVm.users).to.deep.equal(expectedResult);
  });

  it('should have a sortUsers function on the ManageVm', function () {
    expect(ManageVm.sortUsers).to.be.an('function');
  });

  it('should sort user in ASC when passing `ASC` into `ManageVm.sortUsers`', function () {
    ManageVm.users = [
      {
        first_name: 'Sandra',
        last_name: 'Adams',
        email: 'sadams2@barnesandnoble.com'
      },
      {
        first_name: 'Matthew',
        last_name: 'Watkins',
        email: 'mwatkins0@google.com.hk'
      },
      {
        first_name: 'Philip',
        last_name: 'Myers',
        email: 'pmyers1@qq.com'
      }];

    var expectedResult = [
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

    ManageVm.sortUsers('first_name', 'ASC')
    expect(ManageVm.users).to.deep.equal(expectedResult);
  });

  it('should sort user in DES when passing `DES` into `ManageVm.sortUsers`', function () {
    ManageVm.users = [
      {
        first_name: 'Sandra',
        last_name: 'Adams',
        email: 'sadams2@barnesandnoble.com'
      },
      {
        first_name: 'Matthew',
        last_name: 'Watkins',
        email: 'mwatkins0@google.com.hk'
      },
      {
        first_name: 'Philip',
        last_name: 'Myers',
        email: 'pmyers1@qq.com'
      }];

    var expectedResult = [
      {
        first_name: 'Sandra',
        last_name: 'Adams',
        email: 'sadams2@barnesandnoble.com'
      },
      {
        first_name: 'Philip',
        last_name: 'Myers',
        email: 'pmyers1@qq.com'
      },
      {
        first_name: 'Matthew',
        last_name: 'Watkins',
        email: 'mwatkins0@google.com.hk'
      }];

    ManageVm.sortUsers('first_name', 'DES')
    expect(ManageVm.users).to.deep.equal(expectedResult);
  });

  it('should have a changeSort function on the ManageVm', function () {
    expect(ManageVm.changeSort).to.be.an('function');
  });
});
