'use strict';
// create valiarable
process.env.DEBUG = 'actions-on-google:*';

let Assistant = require('actions-on-google').ApiAiApp;
let sprintf = require('sprintf-js').sprintf;
let express = require('express');
let bodyParser = require('body-parser');
let restService = express();
var mongo = require('mongodb');

const SAVE_ACTION = 'save';
// const RETRIEVE_ACTION = 'retrieve';
const WELCOME_ACTION = 'welcome';
// const DELETE_ACTION = 'delete';
// const MODIFY_ACTION = 'modify';
// const SAVE_YES_ACTION = 'save_yes';
// const SAVE_NO_ACTION = 'save_no';
const GREETING_PROMPTS = ['Welcome to Dates Bot!', 'Hi! This is Dates Bot.','Welcome back to Dates Bot.'];
const INVOCATION_PROMPTS = ['I can save, retrieve and update any dates for you. How can I help you today? ', 'How can i help you today'];
const NO_INPUT_PROMPTS = ['I didn\'t hear it. Can you please repeat it', 'If you\'re still there, please tell me how can I help you','We can stop here. Let\'s talk again soon.'];
const CONTINUATION_PROMPTS_SAVE = ['Do you want to save anything else?','is there anything I can help you with?','Do you want to save any other dates'];
// const RE_PROMPT = ['Great!', 'Awesome!', 'Cool!'];
// const SAVE_CONTEXT = 'save';
// const SAVE_YES_NO_CONTEXT = 'save_yes_no';
// const SAVE_RE_INVOCATION_PROMPT = ['What do you want me to save?'];
// const QUIT_PROMPTS = ['Alright, talk to you later then.', 'OK, till next time.','OK, Make sure to ask me if you want any date you saved.','See you later.', 'OK, Make sure to ask me what items you have and how fresh they are next time'];
restService.use(bodyParser.urlencoded({extended: true}));
restService.use(bodyParser.json());
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://aarti:Columbus23@ds139072.mlab.com:39072/heroku_wpdkpvk8";

// Start of transaction function
restService.post('/transaction', function(req, res) {
  const app = new Assistant({request: req, response: res });
  // var body_app = req.body;
  // var result_app = req.body.result;
  var parameters_app = req.body.result && req.body.result.parameters ? req.body.result.parameters : "Seems like some problem. Speak again."

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
  // start welcome function
  function welcome(app){
    console.log('welcome Intent');
    let title = getRandomPrompt(app, GREETING_PROMPTS);
    let prompt = printf(title +  getRandomPrompt(app, INVOCATION_PROMPTS));
    // if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
    //   let basicCard = app.buildBasicCard(IMAGE.INTRO.description)
    //     .setImage(IMAGE.INTRO.url, IMAGE.INTRO.altText);
    //   let richResponse = app.buildRichResponse()
    //     .addSimpleResponse(prompt)
    //     .addBasicCard(basicCard);
    //   ask(app, richResponse);
    // } else {
      ask(app, prompt);
    // }
  }
//start save function
      function save (app){
        var prompt = "Something went wrong. Please try again";
        var transactions = [];
        var items_list = '';
      for (var i = 0; i < parameters_app.Items.length; i++) {
         transactions[i] = {
            transactionId: req.body.id,
            SessionId: req.body.sessionId,
            item: req.body.result.parameters.Items[i],
            type: "Vegetable",
            date: req.body.result.parameters.date,
            expiryDate: "07-31-2017",
            purpose: req.body.result.parameters.purpose
          };
          if (i = 0) {
            items_list = '' + req.body.result.parameters.Items[i];
          // }else if (i = parameters_app.Items.length-1) {
          //   items_list = items_list + " and " + req.body.result.parameters.Items[i];
          }else {
            items_list = items_list + ", " + req.body.result.parameters.Items[i];
          }
        }
        MongoClient.connect(url, function(err, db) {
          if (err) throw err;
            db.collection("transaction").insertMany(transactions, function(err, res) {
              if (err) throw err;
              console.log("1 record inserted");
              db.close();
            });
          });
          let title = "I saved that you " + req.body.result.parameters.purpose + items_list + " on " + req.body.result.parameters.date;
          prompt = printf(title + ' ' + getRandomPrompt(app, CONTINUATION_PROMPTS_SAVE));
        ask(app, prompt);
      } // end save function
  //     // start retrieve function
  //     function retrieve (app) {
  //     MongoClient.connect(url, function(err, db) {
  //       if (err) throw err;
  //       db.collection("transaction").find({$and: [{"type":"Vegetable"},{"item":req.body.result.parameters.items}]}).toArray(function(err, result){
  //       if (err) throw err;
  //       console.log(result[0].date);
  //       db.close();
  //       return res.json({
  //           speech: "Date is " + result[0].date,
  //           displayText: "Date is "+ result[0].date,
  //           source: 'RememberThat'
  //         });
  //       }); // End DB Function
  //   });
  // } // End retrieve function
  // // Start of saveYes function
  // function saveYes (app) {
  //   console.log('saveYes');
  //   ask(app, printf(getRandomPrompt(app, RE_PROMPT) + ' ' +
  //     getRandomPrompt(app, SAVE_RE_INVOCATION_PROMPT)));
  // }// End of saveYes function
  // // Start of saveNo function
  // function saveNo (app) {
  //   console.log('saveNo');
  //   app.setContext(SAVE_CONTEXT, 1);
  //   app.tell(printf(getRandomPrompt(app, QUIT_PROMPTS)));
  // } // End of saveNo function
  //   //Start fallback function
  //     function fallback (app){
  //
  //     } // End of fallback function
      function ask (app, prompt, persist) {
        console.log('ask: ' + prompt);
        doPersist(persist);
        app.ask(prompt, NO_INPUT_PROMPTS);
      }
      function doPersist (persist) {
        if (persist === undefined || persist) {
          app.data.lastPrompt = app.data.printed;
        }
      }
      function printf(prompt) {
        console.log('printf: ' + prompt);
        app.data.printed = prompt;
        return sprintf.apply(this, arguments);
      }
    // Mapping the actions
    let actionMap = new Map();
    actionMap.set(SAVE_ACTION, save);
    // actionMap.set(RETRIEVE_ACTION, retrieve);
    actionMap.set(WELCOME_ACTION, welcome);
    // actionMap.set(SAVE_YES_ACTION, saveYes);
    // actionMap.set(SAVE_NO_ACTION, saveNo);
    app.handleRequest(actionMap);
    }); // End of Transaction function
    // app is listening on the port 8000
    restService.listen((process.env.PORT || 8000), function() {
        console.log("Server up and listening");
    });
