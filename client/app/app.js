angular.module('TES', [
  'TES.manage',
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

  $stateProvider.state(manageState);

  $urlRouterProvider.otherwise('/manage');
  
});