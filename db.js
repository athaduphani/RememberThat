var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://aarti:Columbus23@ds139072.mlab.com:39072/heroku_wpdkpvk8";
MongoClient.connect(url, function(err, db) {
if (err) throw err;
db.createCollection("users_access", function(err, res) {
  if (err) throw err;
  console.log("Table created!");
  db.close();
});
});
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var myobj = { name: "Company Inc1", address: "Highway 371" };
//   db.collection("customers").insertOne(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("1 record inserted");
//     db.close();
//   });
// });
