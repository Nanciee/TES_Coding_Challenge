angular.module('TES.user', [])
.controller('UserController', function(services, $stateParams) {
  var UserVm = this;
  UserVm.users = [];
  UserVm.userInfo = {};
  
  services.getUsers().then(function(users){
    UserVm.users = services.convertToJSON(users);
    UserVm.users.shift();
    UserVm.users.pop();
    UserVm.userInfo = UserVm.users[$stateParams.id];
  });
});