(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController )
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;

  toBuy.items = ShoppingListCheckOffService.getToBuyItems() ;


  toBuy.moveToBought = function(itemIndex) {
    ShoppingListCheckOffService.moveToBought(itemIndex);
  }
};


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBought = this;

  alreadyBought.items = ShoppingListCheckOffService.getBoughtItems();

};


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuyItems = [
    { name: "cookies", quantity: 10 },
    { name: "soft drinks", quantity: 5 },
    { name: "bread", quantity: 3 },
    { name: "big chips bags", quantity: 6 },
    { name: "chocolate", quantity: 7 },
    { name: "salad", quantity: 1 }
  ];
  var boughtItems = [];

  service.moveToBought = function (itemIndex) {
    var item = toBuyItems[itemIndex];
    boughtItems.push(item);
    toBuyItems.splice(itemIndex, 1);
  };

  service.getToBuyItems = function () {
    return toBuyItems;

  };service.getBoughtItems = function () {
    return boughtItems;
  };
};

})();
// by Mohamed Mahhmoud Eissa
