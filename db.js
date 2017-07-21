// var mongo = require('mongodb');
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://aarti:Columbus23@ds139072.mlab.com:39072/heroku_wpdkpvk8";
var db = require('./db1.js');
console.log(db.variableName);
// var itemType = db.itemType(function(result) {
//   // console.info('The promise was fulfilled with items!', result[0].type);
//   itemType = result[0].type;
//   // return result[0].type;
//  }, function(err) {
//    console.error('The promise was rejected', err, err.stack);
//  });
// console.log(itemType);
//     var firstTimeUserPrompt = '';
//       MongoClient.connect(url, function(err, db) {
//         if (err) throw err;
//       //   db.collection("items_data").aggregate([
//       //     {$unwind: "Banana"},
//       //     {$lookup: {from: "items_data", localField: "item", foreignField: "type", as: "transaction"}},
//       //     {$unwind: "$transaction"},
//       //     {$group: {type: "$type", item: { $push: "$item"}, items_data: {$push: "$items_data" }}}
//       //   ]).toArray(function(err, result){
//       //   if (err) throw err;
//       //   db.close();
//       //   var type = 'Result Length ' + result.length;
//       //   if(result.length == 0){
//       //       console.log(" Type is not found for the item");
//       //       type = 'Default';
//       // }else{
//       //   type = result[0].type;
//       // }
//       //   console.log(type);
//       //   }); // End DB Function
//       // db.users.find().forEach(
//       // function (object) {
//           // var commonInBoth=db.collection("items_data").findOne({ "item": "Banana"} );
//           // if (commonInBoth != null) {
//           //     console.log(commonInBoth) ;
//           //     // printjson(object) ;
//           // }else {
//           //     // did not match so we don't care in this case
//           // }
//       // });
// var vals = db.collection("items_data").find({"item": "Banana"}).map(function(object){return collection("items_data").item;
// })
// console.log(vals);
//     });
// db.try();
