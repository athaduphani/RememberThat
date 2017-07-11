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
const RETRIEVE_ACTION = 'retrieve';
const WELCOME_ACTION = 'welcome';
// const DELETE_ACTION = 'delete';
// const MODIFY_ACTION = 'modify';
const REPEAT_YES_ACTION = 'repeat_yes';
const REPEAT_NO_ACTION = 'repeat_no';
const FIRST_INTERACTION_EXAMPLES = ['I can save, retrieve and update dates for your household items. For Example, You can say \"I bought milk today\".', 'I can save, retrieve and update dates for your household items. For Example, You can say \"I bought apples today\".','I can save, retrieve and update dates for your household items. For Example, You can say \"I bought toyota camry today\".']
const GREETING_PROMPTS = ['Welcome to Dates Bot!', 'Hi! This is Dates Bot.','Welcome back to Dates Bot.'];
const INVOCATION_PROMPTS = ['How can i help you today', 'What do you want to do today?'];
const NO_INPUT_PROMPTS = ['I didn\'t hear it. Can you please repeat it', 'If you\'re still there, please tell me how can I help you','We can stop here. Let\'s talk again soon.'];
const CONTINUATION_PROMPTS = ['is there anything I can help you with?'];
const RE_PROMPT = ['Great!', 'Awesome!', 'Cool!'];
const SAVE_CONTEXT = 'save';
const RETRIEVE_CONTEXT = 'retrieve';
const MODIFY_CONTEXT = 'modify';
const DELETE_CONTEXT = 'delete';
const REPEAT_YES_NO_CONTEXT = 'repeat_yes_no';
const SAVE_RE_INVOCATION_PROMPT = ['What do you want to save?'];
const RETRIEVE_RE_INVOCATION_PROMPT = ['What do you want to retrieve?'];
const MODIFY_RE_INVOCATION_PROMPT = ['What do you want to modify?'];
const DELETE_RE_INVOCATION_PROMPT = ['What do you want to delete?'];
const QUIT_PROMPTS = ['Alright, talk to you later then.', 'OK, till next time.','OK, Make sure to ask me if you want any date you saved.','See you later.', 'OK, Make sure to ask me what items you have and how fresh they are next time'];
restService.use(bodyParser.urlencoded({extended: true}));
restService.use(bodyParser.json());
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://aarti:Columbus23@ds139072.mlab.com:39072/heroku_wpdkpvk8";

// Start of transaction function
restService.post('/transaction', function(req, res) {
  const app = new Assistant({request: req, response: res });
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

    // var firstTimeUser = userExists(SessionId);

        MongoClient.connect(url, function(err, db) {
          let firstTimeUserPrompt = 'asdasd';
          if (err) throw err;
          db.collection("transaction").find({"SessionId":req.body.sessionId}).toArray(function(err, result){
          if (err) throw err;
          if (result.length < 5) {
            firstTimeUserPrompt = getRandomPrompt(app, FIRST_INTERACTION_EXAMPLES);
          }else{
            firstTimeUserPrompt = ' ';
          }
          let prompt = printf(title + firstTimeUserPrompt +  getRandomPrompt(app, INVOCATION_PROMPTS));
          ask(app, prompt);
      }); // End DB Function
      });

    // if (app.hasSurfaceCapability(app.SurfaceCapabilities.SCREEN_OUTPUT)) {
    //   let basicCard = app.buildBasicCard(IMAGE.INTRO.description)
    //     .setImage(IMAGE.INTRO.url, IMAGE.INTRO.altText);
    //   let richResponse = app.buildRichResponse()
    //     .addSimpleResponse(prompt)
    //     .addBasicCard(basicCard);
    //   ask(app, richResponse);
    // } else {
      // ask(app, prompt);
    // }
  } //End Welcome Function
//start save function
      function save (app){
        app.setContext(REPEAT_YES_NO_CONTEXT);
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
          items_list = items_list +'  '+ req.body.result.parameters.Items[i] + ', ';
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
          prompt = printf(title + ' ' + getRandomPrompt(app, CONTINUATION_PROMPTS));
        ask(app, prompt);
      } // end save function
      // start retrieve function
      function retrieve (app) {
        app.setContext(REPEAT_YES_NO_CONTEXT);
      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        db.collection("transaction").find({"item":{$in: req.body.result.parameters.Items}}).sort({"item":1}).toArray(function(err, result){
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
            responseDate = responseDate + 'You Bought' + result[i].item + ' on'  + result[i].date + '\n';
            itemName = result[i].item;
          }
          }
        let prompt = printf(responseDate + ' ' + getRandomPrompt(app, CONTINUATION_PROMPTS));
      ask(app, prompt);
        }); // End DB Function
    });

  } // End retrieve function
  // Start of repeatYes function
  function repeatYes (app) {
    console.log('repeatYes');
    var purpose = parameters_app.purpose;
    if (purpose == "save"){
      app.setContext(SAVE_CONTEXT);
    ask(app, printf(getRandomPrompt(app, RE_PROMPT) + ' ' + getRandomPrompt(app, SAVE_RE_INVOCATION_PROMPT)));
  }else if (purpose == "retrieve") {
    app.setContext(RETRIEVE_CONTEXT);
    ask(app, printf(getRandomPrompt(app, RE_PROMPT) + ' ' + getRandomPrompt(app, RETRIEVE_RE_INVOCATION_PROMPT)));
  }else if (purpose == "modify") {
    app.setContext(MODIFY_CONTEXT);
    ask(app, printf(getRandomPrompt(app, RE_PROMPT) + ' ' + getRandomPrompt(app, MODIFY_RE_INVOCATION_PROMPT)));
  }else if (purpose == "delete") {
    app.setContext(DELETE_CONTEXT);
    ask(app, printf(getRandomPrompt(app, RE_PROMPT) + ' ' + getRandomPrompt(app, DELETE_RE_INVOCATION_PROMPT)));
  }else {
    ask(app, "Sorry I didnt understand.You can say Save, Retrieve, Modify or Delete");
  }
  }// End of repeatYes function
  // Start of saveNo function
  function repeatNo (app) {
    console.log('repeatNo');
    // app.setContext(SAVE_CONTEXT, 1);
    app.tell(printf(getRandomPrompt(app, QUIT_PROMPTS)));
  } // End of saveNo function
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
    actionMap.set(RETRIEVE_ACTION, retrieve);
    actionMap.set(WELCOME_ACTION, welcome);
    actionMap.set(REPEAT_YES_ACTION, repeatYes);
    actionMap.set(REPEAT_NO_ACTION, repeatNo);
    app.handleRequest(actionMap);
    }); // End of Transaction function
    // app is listening on the port 8000
    restService.listen((process.env.PORT || 8000), function() {
        console.log("Server up and listening");
    });
