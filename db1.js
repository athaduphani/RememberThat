// var dataMap = require('./data.js');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://aarti:Columbus23@ds139072.mlab.com:39072/heroku_wpdkpvk8";
// // var typeMap = [
// //   {
// //     "type": "Groceries",
// //     "Map": ["Vegetable", "Fruit","Spices","Nuts","Dairy","Bread","Flour","Juices","Meat"]
// //   }
// // ];
MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
// var type = searchInObject(dataMap.typeMap, "type", "Groceries");
//   db.collection("transaction").find({$and:[{"used": "no"},{"sessionId": "5376a8a7-5672-442f-8682-d5a84392a39a"}, {"type":{$in: type.Map }}]}).sort({"item":1}).toArray(function(err, result){
//   if (err) throw err;
//   db.close();
// console.log(result);
// });
// });
//
// function searchInObject(object, searchKey, searchValue) {
//   for (var i in object) {
//     if (object[i][searchKey].indexOf(searchValue) > -1) {
//       return object[i];
//     }
//   }
// }
db.collection("transaction").distinct('item',{$and:[{"used": "no"},{"sessionId": "ae5d05f4-a102-4569-bef5-d017d66d6ed0"}, {"type":{$in: ["Vegetable"]}}]},function(err, result){
if (err) throw err;

let startStatement = 'You have ';
let endStatement = '.\n ';
let response = startStatement;
var itemName = 'NA';
for (var i = 0; i < result.length; i++) {
  if(itemName != result[i]){
  if (result.length == 1) {
    response = response + result[i] + endStatement;
  }
  else if (i == result.length-1){
    response = response + ' and ' + result[i] +' '+ endStatement ;
  }else if (i == 0){
    response = response + result[i] ;
  }else{
    response = response +', '+ result[i] ;
    itemName = result[i];
}
}
}
console.log(response);
});
});
