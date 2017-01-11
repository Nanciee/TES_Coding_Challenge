angular.module('TES', [
  'TES.manage',
  'TES.user',
  'TES.services',
  'ui.router'
])
.controller('TESController', function() {
})

.config(function($stateProvider, $urlRouterProvider) {

  var manageState = {
    name: 'manage',
    url: '/manage',
    templateUrl: 'app/manage/manage.html',
    controller: 'ManageController',
    controllerAs: 'ManageVm',
  };

  var userState = {
    name: 'user',
    url: '/user/:id',
    templateUrl: 'app/user/user.html',
    controller: 'UserController',
    controllerAs: 'UserVm',
  };

  $stateProvider.state(manageState);
  $stateProvider.state(userState);

  $urlRouterProvider.otherwise('/manage');

});