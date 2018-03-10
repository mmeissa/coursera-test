(function () {
    'use strict';

    angular.module('data')
    .service('MenuDataService', MenuDataService)
    .constant('BasePath', "https://davids-restaurant.herokuapp.com");


    MenuDataService.$inject = ['$http', 'BasePath'];
    function MenuDataService($http, BasePath) {
      var service = this;

      service.getAllCategories = function(){
        var response = $http({
            method: "GET",
            url: (BasePath + '/categories.json')
            })
        .then(function (response){
            return response.data;
        })

        return response;
        };

      service.getItemsForCategory = function(categoryShortName){
        var response = $http({
          method: "GET",
          url: (BasePath + "/menu_items.json"),
          params: {category: categoryShortName}
        })
        .then(function (response){
            return response.data.menu_items;
        })

        return response;
        };
    }

    })();
