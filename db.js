var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://aarti:Columbus23@ds139072.mlab.com:39072/heroku_wpdkpvk8";
// var transactions=[];
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
// db.collection("transaction").find({$and: [{"type":"Vegetable"},{"item":"Onion"}]}).toArray(function(err, result){
// if (err) throw err;
// console.log(result[0].date);
// db.close();
// });
//
// });
    var firstTimeUserPrompt = '';
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      db.collection("transaction").find({$or:[{"type":"Vegetable"},{"item":{$in: []}}]}).sort({"item":1}).toArray(function(err, result){
      if (err) throw err;
      db.close();
      let responseDate = '';
      let itemName ='NA';
      for (var i = 0; i < result.length; i++) {

        // if(result[i].item == itemName){
        //   responseDate = responseDate + ',' + result[i].date;
        // }
        // else{
        //   if(i == 0){
        //     responseDate = responseDate + 'You Bought' + result[i].item + ' on ['  + result[i].date;
        //   }else {
        //     responseDate = responseDate + ']. You Bought' + result[i].item + ' on ['  +result[i].date;
        //   }
          responseDate = responseDate + 'You Bought ' + result[i].item + ' on '  + result[i].date + '.\n';
          itemName = result[i].item;
        // }
        }
        console.log(responseDate);
  // firstTimeUserPrompt = 'result length ' + result.length;
  // if (result.length = 0) {
  //   return true;
  // }else{
  //   return false;
  // }
}); // End DB Function
});
// transactions[0] = {
//    transactionId: 213123,
//    SessionId: 123123,
//    item: 'banana',
//    type: "Vegetable",
//    date: '07-31-2017',
//    expiryDate: "07-31-2017",
//    purpose: 'bought'
//  };
//  transactions[1] = {
//     transactionId: 213124,
//     SessionId: 123123,
//     item: 'orange',
//     type: "Vegetable",
//     date: '07-31-2017',
//     expiryDate: "07-31-2017",
//     purpose: 'bought'
//   };
//
//  MongoClient.connect(url, function(err, db) {
//    if (err) throw err;
//      db.collection("transaction").insertMany(transactions, function(err, res) {
//        if (err) throw err;
//        console.log("1 record inserted");
//        db.close();
//      });
//    });
