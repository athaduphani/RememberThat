var data = [
  {
    "item": "Artichoke",
    "type": "Vegetable"
  },
  {
    "item": "Arugula",
    "type": "Vegetable"
  }]

var pin = "Artichoke";
var result = searchInObject(data, "item", pin);
console.log(result.type);

function searchInObject(object, searchKey, searchValue) {
  for (var i in object) {
    if (object[i][searchKey].indexOf(searchValue) > -1) {
      return object[i];
    }
  }
}
