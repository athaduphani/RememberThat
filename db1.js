

module.exports = {
//   getType: function() {
//   return new Promise(function(resolve, reject) {
//     MongoClient.connect(url, function(err, db) {
//       if (err) {
// console.log("Error1");
//         reject(err); } else { resolve(db); }
//     // }
//   }).then(function(db) {
//     return new Promise(function(resolve, reject) {
//     db.collection("items_data").find({"item": "Onion"}).toArray(function(err, result){
//         if (err) {
//           console.log("Error2");
//           reject(err);
//         } else {
//         console.log("Result");
//           resolve(result);
//         }
//         db.close();
//       });
//     });
//   });
// });
// }
try: function (){
  console.log("Hello");
}
// itemType : function funk1(callback) {
//   MongoClient.connect(url, function (err,db) {
//     if (err) {
//       return console.dir(err);
//     }
//     db.collection("items_data").find({"item": "Onion"}).toArray(function(err, result){
//       return callback(result);
//     });
//   });
// }
}
