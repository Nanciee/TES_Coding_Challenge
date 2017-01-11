angular.module('TES.manage', [])
.controller('ManageController', function(services) {
  var ManageVm = this;
  ManageVm.users = [];
  ManageVm.clickedUser = {};
  ManageVm.sortType = ['first_name', 'ASC']

  ManageVm.editUser = function(user) {
    ManageVm.clickedUser.clicked = false;
    user.clicked = true;
    ManageVm.clickedUser = user;
  };

  ManageVm.deleteUser = function(index) {
    ManageVm.users.splice(index, 1);
  };

  ManageVm.sortUsers = function(title, order){
    ManageVm.users = ManageVm.users.sort(function(a, b){
      if(order === 'ASC'){
        return a[title] > b[title] ? 1 : -1
      } else if (order === 'DES'){
        return a[title] > b[title] ? -1 : 1
      }
    });
  };

  ManageVm.changeSort = function(event){
    var className = event.target.className
    if(className === ManageVm.sortType[0]){
      ManageVm.sortType[1] = ManageVm.sortType[1] === 'ASC' ? 'DES' : 'ASC';
    } else {
      ManageVm.sortType = [className, 'ASC'];
    }

    ManageVm.sortUsers(ManageVm.sortType[0], ManageVm.sortType[1]);
  };

  services.getUsers().then(function(users){
    ManageVm.users = services.convertToJSON(users);
    ManageVm.users.shift();
    ManageVm.users.pop();
    ManageVm.sortUsers('first_name', 'ASC');
  });
});