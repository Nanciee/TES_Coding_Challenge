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

  it('should have a users property on the ManageVm', function () {
    expect(ManageVm.users).to.be.an('array');
  });

  it('should have an editUser function on the ManageVm', function () {
    expect(ManageVm.editUser).to.be.an('function');
  });

  it('should have an deleteUser function on the ManageVm', function () {
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
});
