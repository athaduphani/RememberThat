var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://aarti:Columbus23@ds139072.mlab.com:39072/heroku_wpdkpvk8";
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
db.collection("transaction").find({$and: [{"type":"Vegetable"},{"item":"Onion"}]}).toArray(function(err, result){
if (err) throw err;
console.log(result[0].date);
db.close();
});
// db.collection("transaction").find({"type":'Vegetable'}).toArray(function(err, result){
// if (err) throw err;
// console.log(result);
// db.close();
// });
});
