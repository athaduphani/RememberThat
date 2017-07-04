'use strict';
// create valiarable
process.env.DEBUG = 'actions-on-google:*';

let Assistant = require('actions-on-google').ApiAiApp;
let express = require('express');
let bodyParser = require('body-parser');
let restService = express();

const SAVE = 'save';
const RETRIEVE = 'retrieve';

var mongo = require('mongodb');
restService.use(bodyParser.urlencoded({extended: true}));
restService.use(bodyParser.json());
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://aarti:Columbus23@ds139072.mlab.com:39072/heroku_wpdkpvk8";
// var purpose ="";
// Start of transaction function
restService.post('/transaction', function(req, res) {
  const app = new Assistant({request: req, response: res });
  // var body_app = req.body;
  // var result_app = req.body.result;
  var parameters_app = req.body.result && req.body.result.parameters ? req.body.result.parameters : "Seems like some problem. Speak again."
  // var parameters_vegetables = req.body.result.parameters.Vegetable;
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
        // var allTransactions = {
    var transactions = [];
// };
      for (var i = 0; i < 2; i++) {
         transactions[i] = {
            transactionId: req.body.id,
            SessionId: req.body.sessionId,
            item: req.body.result.parameters.Vegetable[i],
            type: "Vegetable",
            date: req.body.result.parameters.date,
            expiryDate: "07-31-2017"
          };
        }
        MongoClient.connect(url, function(err, db) {
          if (err) throw err;
            db.collection("transaction").insertMany(transactions, function(err, res) {
              if (err) throw err;
              console.log("1 record inserted");
              db.close();
            });
          });
        return res.json({
            speech: req.body.result.parameters.Vegetable[1],
            displayText: req.body.result.parameters.Vegetable[1],
            source: 'RememberThat'
          });
      } // end save function
      // start retrieve function
      function retrieve (app) {
      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
var retrievedObj = db.transaction.find(
  {     $and: [
    {"sessionId":req.body.sessionId},{"item":req.body.result.parameters.Vegetable}
]
});
      });
      return res.json({
          speech: retrieveObj.date,
          displayText: retrieveObj.date,
          source: 'RememberThat'
        });
    } // End retrieve function
    //Start fallback function
      function fallback (app){

      } // End of fallback function
// End of Transaction function
    // Mapping the actions
    let actionMap = new Map();
    actionMap.set(SAVE, save);
    actionMap.set(RETRIEVE, retrieve);
    app.handleRequest(actionMap);
    });
    // app is listening on the port 8000
    restService.listen((process.env.PORT || 8000), function() {
        console.log("Server up and listening");
    });
