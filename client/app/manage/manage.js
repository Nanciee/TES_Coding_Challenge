angular.module('TES.manage', [])
.controller('ManageController', function($http, services) {
  var ManageVm = this;
  ManageVm.users = [];

  services.getUsers().then(function(users){
    ManageVm.users = services.convertToJSON(users);
    ManageVm.users.shift();
    ManageVm.users.pop();
  });
});