var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://aarti:Columbus23@ds139072.mlab.com:39072/heroku_wpdkpvk8";
var authenticationKey = "5376a8a7-5672-442f-8682-d5a84392a39a";
var authenticationId = "sessionId";
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.collection("transaction").find({$and:[{"used": "no"},{ "sessionId" : authenticationKey}, {"item":{$in: ['Orange']}}]}).sort({"item":1}).toArray(function(err, result){
  if (err) throw err;
  console.log(result.length);
  db.close();
});
});
