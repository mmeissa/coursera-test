(function () {
"use strict";

angular.module('public')
.component('myInfo', {
  templateUrl: 'src/public/my-info/my-info.component.html',
  bindings: {
    userdata: '<'
  },
  controller: UserDataComponentController
});


UserDataComponentController.$inject = ['ApiPath'];
function UserDataComponentController(ApiPath) {
  var $ctrl = this;
  this.$onInit=function(){
    $ctrl.userdata=$ctrl.userdata;
  }
  $ctrl.basePath = ApiPath;
}

})();
