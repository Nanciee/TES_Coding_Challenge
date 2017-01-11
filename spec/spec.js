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
    expect(ManageVm.users).to.be.an('object');
  });

});
