angular.module('TES.services', [])

.factory('services', function ($http) {
  var getUsers = function () {
    return $http({
      method: 'GET',
      url: '../../asset/user-data.csv'
    })
    .then(function (resp) {
      return resp.data;
    });
  };

  return {
    getUsers: getUsers
  };
})