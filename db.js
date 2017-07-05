var mongo = require('mongodb');
var fs= require('fs');
var csv = require('fast-csv');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://aarti:Columbus23@ds139072.mlab.com:39072/heroku_wpdkpvk8";
var data;
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
// db.collection("transaction").find({$and: [{"type":"Vegetable"},{"item":"Onion"}]}).toArray(function(err, result){
// if (err) throw err;
// console.log(result[0].date);
// db.close();
// });
//
// });




MongoClient.connect(url, function (err, db) {
    if (err) {
      console.log('Unable to connect to the mongoDB server. Error:', err);
    } else {
      console.log('Connection established to', url);
      var collection = db.collection('iters_data');
      readData=fs.createReadStream('x.csv').pipe(csv())
                   .on('data',function(data){
                      collection.insert({'data': data});
                   })
                   .on('end',function(data){
                      console.log('Read finished');
                   })

    }
  });
