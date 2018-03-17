(function () {
"use strict";

angular.module('public')
.service('SignUpService', SignUpService);

SignUpService.$inject = ['$http', 'ApiPath'];
function SignUpService($http, ApiPath) {
    var service = this;
    service.userData={};

    service.saveUser = function (userToSave) {
      //console.log('userToSave',userToSave);
      service.userData=userToSave;
      //console.log('saved service.userData',service.userData);
    };


    service.getFaveItem = function (short_name) {
      var url=ApiPath + '/menu_items/'+short_name+'.json';
      //console.log('url',url);
      return $http.get(url).then(function (response) {
        //console.log('FaveItem response.data',response.data);
        return response;
      }
    );
    };

    service.getuserData = function () {
      console.log('service.userData:',service.userData);
    return  service.userData;
    };
  }

})();
