(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['SignUpService'];
function SignUpController(SignUpService) {
  var regCtrl = this;
  regCtrl.user={};
  regCtrl.SignUpService=SignUpService;
  regCtrl.saved=false;
  regCtrl.itemNotFound=false;

    regCtrl.save=function () {
      regCtrl.SignUpService.getFaveItem(regCtrl.userData.short_name)
        .then(function (response) {
          //console.log('httpData',response.data);
          regCtrl.userData.favdish = response.data;
          regCtrl.SignUpService.saveUser(regCtrl.userData);
          regCtrl.saved=true;
          regCtrl.itemNotFound=false;
        },function(httpData) {
          //console.log('albums retrieval failed.');
          //regCtrl.SignUpService.saveUser(regCtrl.user);
          regCtrl.saved=false;
          regCtrl.itemNotFound=true;
          //console.log(regCtrl.SignUpService.user.hasOwnProperty('favdish'));
        });
      }

  }

})();
