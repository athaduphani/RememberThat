'use strict';
// create valiarable
process.env.DEBUG = 'actions-on-google:*';

let Assistant = require('actions-on-google').ApiAiApp;
let express = require('express');
let bodyParser = require('body-parser');
let app = express();

const SAVE = 'save';

var mongo = require('mongodb');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://aarti:Columbus23@ds139072.mlab.com:39072/heroku_wpdkpvk8";
// var purpose ="";
// Start of transaction function
app.post('/transaction', function(req, res) {
  const assistant = new Assistant({
  request: req,
  response: res
  });
      // purpose = req.body.result && req.body.result.parameters && req.body.result.parameters.purpose ? req.body.result.parameters.purpose : "Seems like some problem. Speak again."
//start save function
      function save (assistant){
        MongoClient.connect(url, function(err, db) {
          if (err) throw err;
          var myobj = req.body;
          db.collection("transaction").insertOne(myobj, function(err, res) {
            if (err) throw err;
            console.log("1 record inserted");
            db.close();
          });
        });
        return res.json({
            speech: assistant.getArgument('vegetable'),
            displayText: assistant.getArgument('vegetable'),
            source: 'RememberThat'
      } // end save function
      // start retrieve function
      function retrieve (app) {
      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var myobj = req.body.result.parameters;
        db.collection("transaction").insertOne(myobj, function(err, res) {
          if (err) throw err;
          console.log("1 record inserted");
          db.close();
        });
        return res.json({
          speech: "Sorry! Something went wrong. Please try again",
          displayText: "Sorry! Something went wrong. Please try again",
          source: 'RememberThat'
        });
      });
    } // End retrieve function
    //Start fallback function
      function fallback (app){

      } // End of fallback function
// End of Transaction function
    // Mapping the actions
    let actionMap = new Map();
    actionMap.set(SAVE, save);
    assistant.handleRequest(actionMap);
    });
    app.listen((process.env.PORT || 8000), function() {
        console.log("Server up and listening");
    });
