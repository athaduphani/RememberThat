
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://aarti:Columbus23@ds139072.mlab.com:39072/heroku_wpdkpvk8";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
     db.collection('transaction').findOneAndDelete({$and:[{ "sessionId" : "5376a8a7-5672-442f-8682-d5a84392a39a"},{"item": "Tomato"}]}, function(err, res) {
        if (err) throw err;
        console.log("1 record deleted");
        db.close();
        var response = '';
       //  if(Object.keys(res).length == 3){
       //    response = 'You don\'t have any ' +  req.body.result.parameters.Items[0] +' '+ Object.values(res)[0];
       //  }else{
           response = 'Tomato removed from your items.';
       //  }
        // let prompt = printf(response + ' ' + getRandomPrompt(app, CONTINUATION_PROMPTS));
      // ask(app, prompt);
      console.log(response);
      });
  });
