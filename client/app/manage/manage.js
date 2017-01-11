angular.module('TES.manage', [])
.controller('ManageController', function($http, services) {
  var ManageVm = this;
  ManageVm.users = [];
  ManageVm.clickedUser = {};

  services.getUsers().then(function(users){
    ManageVm.users = services.convertToJSON(users);
    ManageVm.users.shift();
    ManageVm.users.pop();
  });

  ManageVm.editUser = function(user) {
    user.clicked = true;
    ManageVm.clickedUser.clicked = false;
    ManageVm.clickedUser = user;
  }

  ManageVm.deleteUser = function(index) {
    ManageVm.users.splice(index, 1);
  }
});