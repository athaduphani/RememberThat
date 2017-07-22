var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://aarti:Columbus23@ds139072.mlab.com:39072/heroku_wpdkpvk8";

MongoClient.connect(url, function(err, db) {
db.collection("transaction").find({$and:[{"sessionId": "5376a8a7-5672-442f-8682-d5a84392a39a"}, {"item":{$in: ['Onion']}}]}).sort({"item":1}).toArray(function(err, result){
if (err) throw err;
var response = '';
if(result.length == 0){
  let startStatement = 'You don\'t have any ';
  let endStatement = '].\n ';
  console.log('None');
  // response = responseforOneParam(['Onion'], startStatement, endStatement);
}else if (result.length == 1) {
// app.tell('You have one')
console.log('One');
// db.collection('transaction').findOneAndDelete({$and:[{ "sessionId" : req.body.sessionId},{"item": req.body.result.parameters.Items[0]}]}, function(err, res) {
//    if (err) throw err;
//    console.log("1 record deleted");
//    db.close();
//       response = req.body.result.parameters.Items[0] + ' removed from your items.';
//    let prompt = printf(response + ' ' + getRandomPrompt(app, CONTINUATION_PROMPTS));
//  ask(app, prompt);
//          db.close();
//  });// End DB Function
}else{
let startStatement = 'You bought ';
let middleStatement = ' on ';
let endStatement = '].\n ';
// response = responseforMultiple(result, startStatement, middleStatement, endStatement);
// ask(app, response + ' Which one do you want to delete? ');
console.log('More');
}
});// End DB Function
});
