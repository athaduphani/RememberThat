'use strict';
// create valiarable
process.env.DEBUG = 'actions-on-google:*';

let Assistant = require('actions-on-google').ApiAiApp;
let sprintf = require('sprintf-js').sprintf;
let express = require('express');
let bodyParser = require('body-parser');
let restService = express();
var mongo = require('mongodb');
// const items = {
//   "vegetable"= []
// }
const SAVE_ACTION = 'save';
const RETRIEVE_ACTION = 'retrieve';
const WELCOME_ACTION = 'welcome';
const REMOVE_ACTION = 'remove';
// const MODIFY_ACTION = 'modify';
const REPEAT_YES_ACTION = 'repeat_yes';
const REPEAT_NO_ACTION = 'repeat_no';
const DEFAULT_FALLBACK_ACTION = 'input.unknown';
const FIRST_INTERACTION_EXAMPLES = ['I can save dates for your household items and tell you when u need them. For Example, You can say \"I bought milk today\".', 'I can save, retrieve and update dates for your household items. For Example, You can say \"I bought apples today\".','I can save, retrieve and update dates for your household items. For Example, You can say \"I bought toyota camry today\".']
const GREETING_PROMPTS = ['Welcome to Dates Bot!', 'Hi! This is Dates Bot.','Welcome back to Dates Bot.'];
const INVOCATION_PROMPTS = ['How can i help you today?', 'How may I assist you today?'];
const NO_INPUT_PROMPTS = ['I didn\'t hear it. Can you please repeat it', 'If you\'re still there, please tell me how can I help you','We can stop here. Let\'s talk again soon.'];
const CONTINUATION_PROMPTS = ['Is there anything else I can help you with?'];
const RE_PROMPT = ['Great!', 'Awesome!', 'Cool!'];
const SAVE_CONTEXT = 'save';
const RETRIEVE_CONTEXT = 'retrieve';
// const MODIFY_CONTEXT = 'modify';
const REMOVE_CONTEXT = 'remove';
const REPEAT_YES_NO_CONTEXT = 'repeat_yes_no';
const SAVE_RE_INVOCATION_PROMPT = ['What do you want to save?'];
const RETRIEVE_RE_INVOCATION_PROMPT = ['What do you want to retrieve?'];
const FALLBACK_PROMPT_1 = ['I didn\'t get that. Can you say it again?','I missed what you said. Say it again?','Sorry, could you say that again?','Sorry, can you say that again?','Can you say that again?','Sorry, I didn\'t get that.'];
const FALLBACK_PROMPT_2 = ['Since I\'m still having trouble, I\'ll stop here. Talk to you soon'];
// const MODIFY_RE_INVOCATION_PROMPT = ['What do you want to modify?'];
const REMOVE_RE_INVOCATION_PROMPT = ['What do you want to remove?'];
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
          db.collection("transaction").find({"sessionId":req.body.sessionId}).toArray(function(err, result){
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
            sessionId: req.body.sessionId,
            item: req.body.result.parameters.Items[i],
            quantity: req.body.result.parameters.number,
            type: "Vegetable",
            date: req.body.result.parameters.date,
            expiryDate: "07-31-2017",
            // userId: req.body.originalRequest.data.user.userId,
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
          let title = "I saved that you " + req.body.result.parameters.purpose + items_list + " on " + req.body.result.parameters.date +'.' ;
          prompt = printf(title + ' ' + getRandomPrompt(app, CONTINUATION_PROMPTS));
        ask(app, prompt);
      } // end save function
      // start retrieve function
      function retrieve (app) {
        app.setContext(REPEAT_YES_NO_CONTEXT);
      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        db.collection("transaction").find({$and:[{"sessionId": req.body.sessionId}, {$or:[{"type":{$in: req.body.result.parameters.type}},{"item":{$in: req.body.result.parameters.Items}}]}]}).sort({"item":1}).toArray(function(err, result){
        if (err) throw err;
        db.close();
        let responseForWhat = 'You have ';
        let responseForWhen = '';
        let responseGeneral='You dont have any ';
        let response = '';
        let itemName ='NA';
        if(result.length == 0){
          responseForWhat = '';
          responseGeneral = req.body.sessionId;
          if (req.body.result.parameters.Items.length == 0) {
            for (var i = 0; i < req.body.result.parameters.type.length; i++) {
              responseGeneral = responseGeneral + req.body.result.parameters.type[i] ;
            }
          }else{
          for (var i = 0; i < req.body.result.parameters.Items.length; i++) {
            responseGeneral = responseGeneral + req.body.result.parameters.Items[i] ;
          }
        }
      }else{
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
        // }
          if(req.body.result.parameters.questionTag == "what"){
            responseGeneral='';
            if (itemName != result[i].item){
            responseForWhat = responseForWhat + result[i].item + ', ';
            }
          }else if(req.body.result.parameters.questionTag == "when"){
            responseForWhat = '';responseGeneral='';
            responseForWhen = responseForWhen + 'You Bought ' + result[i].item + ' on '  + result[i].date + '.\n';
          }else if(req.body.result.parameters.questionTag == "how"){
            responseForWhat = '';responseGeneral='';
            responseForWhen = responseForWhen + 'You Bought ' + result[i].item + ' on '  + result[i].date + '.\n';
          }else if(req.body.result.parameters.questionTag == "where"){
            responseForWhat = '';responseGeneral='';
            responseForWhen = responseForWhen + 'You Bought ' + result[i].item + ' on '  + result[i].date + '.\n';
          }else{
            responseForWhat = '';
          }
            itemName = result[i].item;
          }
        }
        response = responseForWhat + responseForWhen + responseGeneral;
        let prompt = printf(response + ' ' + getRandomPrompt(app, CONTINUATION_PROMPTS));
        ask(app, prompt);
        }); // End DB Function
    });
  } // End retrieve function
    //  Start Remove function
  // function remove (app){
  //       app.setContext(REPEAT_YES_NO_CONTEXT);
  //        MongoClient.connect(url, function(err, db) {
  //          if (err) throw err;
  //       //    db.collection("transaction").find({$and:[{"userId": req.body.originalRequest.data.user.userId}, {"item":{$in: req.body.result.parameters.Items}}]}).sort({"item":1}).toArray(function(err, result){
  //       //    if (err) throw err;
  //       //    db.close();
  //       //    if(result.length > 1){
  //       //
  //       //    }else{
  //       //
  //       //    }
  //       //  });
  //             db.collection('transaction').findOneAndDelete({$and:[{ "sessionId" : req.body.result.parameters.sessionId},{"item": req.body.result.parameters.Items[0]}]}, function(err, res) {
  //                if (err) throw err;
  //                console.log("1 record deleted");
  //                db.close();
  //                var response = '';
  //               //  if(Object.keys(res).length == 3){
  //               //    response = 'You don\'t have any ' +  req.body.result.parameters.Items[0] +' '+ Object.values(res)[0];
  //               //  }else{
  //                   response = req.body.result.parameters.Items[0] + ' removed from your items.';
  //               //  }
  //                let prompt = printf(response + ' ' + getRandomPrompt(app, CONTINUATION_PROMPTS));
  //              ask(app, prompt);
  //              });
  //          });
  // } // End Remove Function

  // Start of repeatYes function
  function repeatYes (app) {
    console.log('repeatYes');
    var purpose = parameters_app.purpose;
    if (purpose == '' && parameters_app.purposeDelete != ''){
    purpose = parameters_app.purposeDelete;
  }
    if (purpose == "save"){
      app.setContext(SAVE_CONTEXT);
    ask(app, printf(getRandomPrompt(app, RE_PROMPT) + ' ' + getRandomPrompt(app, SAVE_RE_INVOCATION_PROMPT)));
  }else if (purpose == "retrieve") {
    app.setContext(RETRIEVE_CONTEXT);
    ask(app, printf(getRandomPrompt(app, RE_PROMPT) + ' ' + getRandomPrompt(app, RETRIEVE_RE_INVOCATION_PROMPT)));
  }else if (purpose == "remove") {
    app.setContext(REMOVE_CONTEXT);
    ask(app, printf(getRandomPrompt(app, RE_PROMPT) + ' ' + getRandomPrompt(app, REMOVE_RE_INVOCATION_PROMPT)));
  }else if (req.body.result.resolvedQuery == 'yes') {
    app.setContext(REPEAT_YES_NO_CONTEXT);
      ask(app, printf(getRandomPrompt(app, RE_PROMPT) + ' You can say Save, Retrieve or Remove '));
    }else {
    ask(app, "Sorry I didn\'t understand.You can say Save, Retrieve or Remove");
  }
  }// End of repeatYes function
  // Start of saveNo function
  function repeatNo (app) {
    console.log('repeatNo');
    // app.setContext(SAVE_CONTEXT, 1);
    app.tell(printf(getRandomPrompt(app, QUIT_PROMPTS)));
  } // End of saveNo function
  //   //Start fallback function
  function defaultFallback (app) {
    console.log('defaultFallback: ' + app.data.fallbackCount);
    if (app.data.fallbackCount === undefined) {
      app.data.fallbackCount = 0;
    }
    app.data.fallbackCount++;
    // Provide two prompts before ending game
    if (app.data.fallbackCount < 4) {
      app.setContext(REPEAT_YES_NO_CONTEXT);
      ask(app, printf(getRandomPrompt(app, FALLBACK_PROMPT_1)));
    } else {
      app.tell(printf(getRandomPrompt(app, FALLBACK_PROMPT_2)));
    }
  }
 // End of fallback function
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
    // actionMap.set(REMOVE_ACTION, remove);
    actionMap.set(WELCOME_ACTION, welcome);
    actionMap.set(REPEAT_YES_ACTION, repeatYes);
    actionMap.set(REPEAT_NO_ACTION, repeatNo);
    actionMap.set(DEFAULT_FALLBACK_ACTION, defaultFallback);
    app.handleRequest(actionMap);
    }); // End of Transaction function
    // app is listening on the port 8000
    restService.listen((process.env.PORT || 8000), function() {
        console.log("Server up and listening");
    });
