'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const restService = express();
var mongo = require('mongodb');
restService.use(bodyParser.urlencoded({
    extended: true
}));
restService.use(bodyParser.json());
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://aarti:Columbus23@ds139072.mlab.com:39072/heroku_wpdkpvk8";

restService.post('/transaction', function(req, res) {
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  // db.createCollection("users1", function(err, res) {
  //   if (err) throw err;
  //   console.log("Table created!");
  //   // db.close();
  // });
  // var myobj = req.body.result.parameters;
  var myobj = {
      purpose: purpose,
      vegetable: vegetable,
      date: date
};
  db.collection("users").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 record inserted");
    db.close();
  });
});
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var myobj = { name: "Company Inc1", address: "Highway 371" };
//   db.collection("users").insertOne(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("1 record inserted");
//     db.close();
//   });
// });
      var purpose = req.body.result && req.body.result.parameters && req.body.result.parameters.purpose ? req.body.result.parameters.purpose : "Seems like some problem. Speak again."
      var vegetable = req.body.result && req.body.result.parameters && req.body.result.parameters.Vegetable ? req.body.result.parameters.Vegetable : "Seems like some problem. Speak again."
      var date = req.body.result && req.body.result.parameters && req.body.result.parameters.date ? req.body.result.parameters.date : "Seems like some problem. Speak again."
      if (purpose = "save"){
        return res.json({
            purpose: purpose,
            vegetable: vegetable,
            date: date
      });
      }else if (purpose = "delete") {

      }else{
        return res.json({
            speech: "Sorry! Something went wrong. Please try again",
            displayText: "Sorry! Something went wrong. Please try again",
            source: 'RememberThat'
      });
    }
    });
    restService.listen((process.env.PORT || 8000), function() {
        console.log("Server up and listening");
    });