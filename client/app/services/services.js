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

  var convertToJSON = function(string) {
    var json = [];
    var temp = string.split('\n');

    for(var i = 0; i < temp.length; i ++){
      var rawInfo = temp[i].split(',');
      var user = {
        first_name: rawInfo[0],
        last_name: rawInfo[1],
        email: rawInfo[2]
      };
      json.push(user);
    }
    return json;
  }

  return {
    getUsers: getUsers,
    convertToJSON: convertToJSON
  };
})