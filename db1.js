var dataMap = require('./data.js');
// var typeMap = [
//   {
//     "type": "Groceries",
//     "Map": ["Vegetable", "Fruit","Spices","Nuts","Dairy","Bread","Flour","Juices","Meat"]
//   }
// ];
var type = searchInObject(dataMap.typeMap, "type", "Groceries");
console.log(type.Map);

function searchInObject(object, searchKey, searchValue) {
  for (var i in object) {
    if (object[i][searchKey].indexOf(searchValue) > -1) {
      return object[i];
    }
  }
}
