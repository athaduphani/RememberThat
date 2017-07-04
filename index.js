'use strict';
// create valiarable
process.env.DEBUG = 'actions-on-google:*';

let Assistant = require('actions-on-google').ApiAiApp;
let express = require('express');
let bodyParser = require('body-parser');
let restService = express();

const SAVE = 'save';

var mongo = require('mongodb');
restService.use(bodyParser.urlencoded({extended: true}));
restService.use(bodyParser.json());
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://aarti:Columbus23@ds139072.mlab.com:39072/heroku_wpdkpvk8";
// var purpose ="";
// Start of transaction function
restService.post('/transaction', function(req, res) {
  const app = new Assistant({request: req, response: res });
// Utility function to pick prompts
  function getRandomPrompt (app, array) {
    let lastPrompt = app.data.lastPrompt;
    let prompt;
    if (lastPrompt) {
      for (let index in array) {
        prompt = array[index];
        if (prompt != lastPrompt) {
          break;
        }
      }
    } else {
      prompt = array[Math.floor(Math.random() * (array.length))];
    }
    return prompt;
  }
//start save function
      function save (app){
        MongoClient.connect(url, function(err, db) {
          if (err) throw err;
          var myobj = {
            date: app.getArgument('date'),
            vegetable:app.getContexts('result'),
            id: app.getArgument('id')
          };
          db.collection("transaction").insertOne(myobj, function(err, res) {
            if (err) throw err;
            console.log("1 record inserted");
            db.close();
          });
        });
        return res.json({
            speech: app.getArgument('vegetable'),
            displayText: app.getArgument('vegetable'),
            source: 'RememberThat'
          });
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
    app.handleRequest(actionMap);
    });
    // app is listening on the port 8000
    restService.listen((process.env.PORT || 8000), function() {
        console.log("Server up and listening");
    });
