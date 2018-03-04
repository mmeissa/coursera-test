(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
	var ddo = {
		restrict: 'E',
		templateUrl: 'foundItems.html',
		scope: {
      found: '<',
			onRemove: '&'
			}
	};
	return ddo;
}
NarrowItDownController.$inject = ['MenuSearchService', '$q'];
function NarrowItDownController(MenuSearchService,$q) {
  var narrowlist = this;
  narrowlist.searchTerm='';
  narrowlist.search = function () {
    narrowlist.found=[];
		if (narrowlist.searchTerm !== '') {
			var promise = MenuSearchService.getMatchedMenuItems(narrowlist.searchTerm);
			promise.then(function(result) {
        console.log(result);
        if(result.length>0){
				narrowlist.found = result;
        }
        else {
          console.log("result:"+ result.length);
        }

			})

		}
		else {
		};
	};
  narrowlist.remove = function (itemIndex) {
  		found= MenuSearchService.remove(itemIndex);
  	}
}


MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
  var service = this;
  var foundItems=[];
  service.getMatchedMenuItems = function (searchTerm) {
    return $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
      }).then(function (response) {
      // process result and only keep items that match
      foundItems=[];
      searchTerm=searchTerm.toLowerCase();
      for(var i=0; i<response.data.menu_items.length; i++) {
				if (response.data.menu_items[i].description.toLowerCase().indexOf(searchTerm) !== -1) {
					foundItems.push(response.data.menu_items[i]);
          //  console.log("response.data.menu_items[i]: "+response.data.menu_items[i].description.toLowerCase());
				}
			}
			return foundItems;
    });
  };

  service.remove = function (itemIndex) {
		foundItems.splice(itemIndex, 1);
		return foundItems;
	};
}
})();
