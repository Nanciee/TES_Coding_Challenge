describe('TES', function () {
  var $scope, $rootScope, createController;

  // using angular mocks, we can inject the injector
  // to retrieve our dependencies
  beforeEach(module('TES'));
  beforeEach(inject(function ($injector) {

    // mock out our dependencies
    $rootScope = $injector.get('$rootScope');
    $scope = $rootScope.$new();

    var $controller = $injector.get('$controller');

    createController = function () {
      return $controller('ManageController', {
        $scope: $scope,
      });
    };

  }));

  it('should have a users property on the $scope', function () {
    createController();
    expect($scope.users).to.be.an('object');
  });

});
