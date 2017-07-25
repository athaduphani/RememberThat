'use strict';
// create variable
process.env.DEBUG = 'actions-on-google:*';

let Assistant = require('actions-on-google').ApiAiApp;
let sprintf = require('sprintf-js').sprintf;
let express = require('express');
let bodyParser = require('body-parser');
let restService = express();
var mongo = require('mongodb');
var dateFormat = require('dateformat');
var dataMap = require('./data.js');
var pluralize = require('pluralize')

const SAVE_ACTION = 'save';
const RETRIEVE_ACTION = 'retrieve';
const WELCOME_ACTION = 'welcome';
const REMOVE_ACTION = 'remove';
const REMOVE_OPTION_ACTION = 'remove_option';
// const MODIFY_ACTION = 'modify';
const REPEAT_YES_ACTION = 'repeat_yes';
const REPEAT_NO_ACTION = 'repeat_no';
const DEFAULT_FALLBACK_ACTION = 'input.unknown';
const FIRST_INTERACTION_EXAMPLES = ['I can save dates for your household items and tell you when u need them. For Example, You can say \"I bought milk today\".', 'I can save, retrieve and update dates for your household items. For Example, You can say \"I bought apples today\".','I can save, retrieve and update dates for your household items. For Example, You can say \"I bought chicken today\".']
const GREETING_PROMPTS = ['Welcome to Dates Bot!', 'Hi! This is Dates Bot.','Welcome back to Dates Bot.'];
const INVOCATION_PROMPTS = ['How can i help you today?', 'How may I assist you today?'];
const NO_INPUT_PROMPTS = ['I didn\'t hear it. Can you please repeat it', 'If you\'re still there, please tell me how can I help you','We can stop here. Let\'s talk again soon.'];
const CONTINUATION_PROMPTS = ['what else can I help you with?'];
const RE_PROMPT = ['Great!', 'Awesome!', 'Cool!'];
const SAVE_CONTEXT = 'save';
const RETRIEVE_CONTEXT = 'retrieve';
// const MODIFY_CONTEXT = 'modify';
const REMOVE_CONTEXT = 'remove';
const REMOVE_OPTION_CONTEXT = 'remove_option';
const REPEAT_YES_NO_CONTEXT = 'repeat_yes_no';
const SAVE_RE_INVOCATION_PROMPT = ['What do you want to save?'];
const RETRIEVE_RE_INVOCATION_PROMPT = ['What do you want to retrieve?'];
const FALLBACK_PROMPT_1 = ['I didn\'t get that. Can you please say it again?','I missed what you said. Say it again?','Sorry, could you say that again?','Sorry, can you say that again?','Can you say that again?','Sorry, I didn\'t get that.'];
const FALLBACK_PROMPT_2 = ['I still didn\'t get that. You can say something like \"I bought milk today\". or when are my tomatoes expiring etc.','I still didn\'t understand. You can say something like \"I bought eggs today\". or when did i buy oranges? etc.'];
const FALLBACK_PROMPT_3 = ['Since I\'m still having trouble, I\'ll stop here. Talk to you soon'];
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
  // var authenticationKey = req.body.originalRequest.data.user.userId;
  var authenticationKey = req.body.sessionId;
  var authenticationId = "sessionId";
  function searchInObject(object, searchKey, searchValue) {
    for (var i in object) {
      if (object[i][searchKey].indexOf(searchValue) > -1) {
        return object[i];
      }
    }
  }
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
        MongoClient.connect(url, function(err, db) {
          let firstTimeUserPrompt = 'asdasd';
          if (err) throw err;
          db.collection("transaction").find({"sessionId":authenticationKey}).toArray(function(err, result){
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
        var itemType = '';
        if(parameters_app.Items.length == 0 || parameters_app.purpose == ''){
          ask(app, printf('save ' + getRandomPrompt(app, FALLBACK_PROMPT_1)));
        }
        else{
      for (var i = 0; i < parameters_app.Items.length; i++) {
          var result = searchInObject(dataMap.itemTypeMap, "item", req.body.result.parameters.Items[i]);
        //  itemType = itemType + req.body.result.parameters.Items[i] + getType (req.body.result.parameters.Items[i]);
        var expiryDateStart = new Date(req.body.result.parameters.date);
        var expiryDateEnd = new Date(req.body.result.parameters.date);
        expiryDateStart.setDate(expiryDateStart.getDate() + 5);
        expiryDateEnd.setDate(expiryDateEnd.getDate() + 10);
        var expiryDateStart1=dateFormat(expiryDateStart, "yyyy-mm-dd");
        var expiryDateEnd1=dateFormat(expiryDateEnd, "yyyy-mm-dd");
         transactions[i] = {
            transactionId: req.body.id,
            sessionId: req.body.sessionId,
            item: req.body.result.parameters.Items[i],
            quantity: req.body.result.parameters.number,
            type: result.type,
            date: req.body.result.parameters.date,
            expiryDateStart: expiryDateStart1,
            expiryDateEnd: expiryDateEnd1,
            used: 'no',
            // userId: req.body.originalRequest.data.user.userId,
            purpose: req.body.result.parameters.purpose
          };
          items_list = items_list +'  '+ req.body.result.parameters.Items[i] + ', ';
        }
        MongoClient.connect(url, function(err, db) {
          if (err) throw err;
            db.collection("transaction").insertMany(transactions, function(err, res) {
              if (err) throw err;
              // console.log("1 record inserted");
              db.close();
            });
          });
          let title = "I saved that you " + req.body.result.parameters.purpose + items_list + " on " + req.body.result.parameters.date +'.' ;
          // let title = itemType;
          prompt = printf(title + ' ' + getRandomPrompt(app, CONTINUATION_PROMPTS));
        ask(app, prompt);
      }
      } // end save function
      function responseforOneParam(parameter, startStatement, endStatement){
        let response = startStatement;
        for (var i = 0; i < parameter.length; i++) {
          if (parameter.length == 1) {
            response = response + parameter[i] +'.';
          }
          else if (i == parameter.length-1){
            response = response + 'and ' + parameter[i] +' '+ endStatement ;
          }else{
            response = response + parameter[i]+ ' ' ;
        }
        }
        return response;
      }
// Start of responseforMultipleExpire function
      // function responseforMultipleExpire(result, startStatement, middleStatement1, middleStatement2, endStatement){
      //   let response = '';
      //   let itemName = 'NA';
      //   for (var i = 0; i < result.length; i++) {
      //     var expiryDateStart = result[i].expiryDateStart;
      //     var expiryDateEnd = result[i].expiryDateEnd;
      //     if(result[i].item == itemName){
      //       if( i != result.length-1){
      //        if(result[i].item == result[i+1].item){
      //         response = response + ', ' + expiryDateStart + middleStatement2 + expiryDateEnd;
      //        }else{
      //         response = response + ' and ' + expiryDateStart + middleStatement2 + expiryDateEnd;
      //        }
      //      }else{
      //       response = response + ' and ' + expiryDateStart + middleStatement2 + expiryDateEnd+ endStatement;
      //       }
      //     }else{
      //       if(result.length == 1){
      //         response = response + startStatement + result[i].item + middleStatement1  + expiryDateStart + middleStatement2 + expiryDateEnd +'.\n';
      //       }else if(i == 0){
      //         response = response + startStatement + result[i].item + middleStatement1 +'['  + expiryDateStart + middleStatement2 + expiryDateEnd;
      //       }else if(i == result.length-1) {
      //         response = response + endStatement +startStatement + result[i].item + middleStatement1  + expiryDateStart + middleStatement2 + expiryDateEnd+'.\n';
      //       }else {
      //         response = response + endStatement +startStatement + result[i].item + middleStatement1 +'['  + expiryDateStart + middleStatement2 + expiryDateEnd;
      //       }
      //       itemName = result[i].item;
      //   }
      // }
      //   return response;
      // } // End of responseforMultipleExpire function
      // Start RetrieveForType
      function retrieveType(app){
        MongoClient.connect(url, function(err, db) {
          if (err) throw err;
          db.collection("transaction").find({$and:[{"used": "no"},{"sessionId": authenticationKey}, {"type":{$in: req.body.result.parameters.type}}]}).sort({"item":1}).toArray(function(err, result){
          if (err) throw err;
          db.close();
          let response = '';
          if(result.length == 0){
            let startStatement = 'You don\'t have any ';
            let endStatement = '].\n ';
            response = responseforOneParam(req.body.result.parameters.type, startStatement, endStatement);
        }else{
          let startStatement = 'You have ';
          let middleStatement = ' which are bought on ';
          let endStatement = '].\n ';
          response = responseforMultiple(result, startStatement, middleStatement, endStatement);
        }
          let prompt = printf(response + ' ' + getRandomPrompt(app, CONTINUATION_PROMPTS));
          ask(app, prompt);
          }); // End DB Function
      });
    } //end RetrieveType function
    function responseforMultiple(result, startStatement, middleStatement, endStatement){
      let response = '';
      let itemName = 'NA';
      for (var i = 0; i < result.length; i++) {
        if(result[i].item == itemName){
          if( i != result.length-1){
          if(result[i].item == result[i+1].item){
            response = response + ', ' + result[i].date;
          }else{
            response = response + ' and ' + result[i].date;
          }
        }else{
          response = response + ' and ' + result[i].date+ endStatement;
        }
        }
        else{
          if(result.length == 1){
            response = response + startStatement + result[i].item + middleStatement  + result[i].date+'.\n';
          }
          else if(i == 0){
            response = response + startStatement + result[i].item + middleStatement +'['  + result[i].date;
          }else if (i == result.length-1) {
            response = response + endStatement +startStatement + result[i].item + middleStatement  +result[i].date+'.\n';
          }else {
            response = response + endStatement +startStatement + result[i].item + middleStatement+'['  +result[i].date;
          }
          itemName = result[i].item;
      }
    }
      return response;
    }
    //Start Retrieve Items
    function retrieveItems(app){
      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        db.collection("transaction").find({$and:[{"used": "no"},{"sessionId": authenticationKey}, {"item":{$in: req.body.result.parameters.Items}}]}).sort({"item":1}).toArray(function(err, result){
        if (err) throw err;
        db.close();
        let response = '';
        if(result.length == 0){
          let startStatement = 'You don\'t have any ';
          let endStatement = '].\n ';
          response = responseforOneParam(req.body.result.parameters.Items, startStatement, endStatement);
      }else{
        let startStatement = 'You bought ';
        let middleStatement = ' on ';
        let endStatement = '].\n ';
        response = responseforMultiple(result, startStatement, middleStatement, endStatement);
      }
        let prompt = printf(response + ' ' + getRandomPrompt(app, CONTINUATION_PROMPTS));
        ask(app, prompt);
        }); // End DB Function
    });
  } // End Retrieve Items Function
  // Start Retrieve Items Expiry
  function retrieveItemsExpiry(app){
  app.setContext(REPEAT_YES_NO_CONTEXT);
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      db.collection("transaction").find({$and:[{used: "no"},{"sessionId": authenticationKey}, {"item":{$in: req.body.result.parameters.Items}}]}).sort({"item":1}).toArray(function(err, result){
      if (err) throw err;
      db.close();
      var response = '';
      if(result.length == 0){
        let startStatement = 'You don\'t have any ';
        let endStatement = '].\n ';
        response = responseforOneParam(req.body.result.parameters.Items, startStatement, endStatement);
    }else{
      var startStatement = ' The ';
      var middleStatement = ' you bought on ';
      var middleStatement1 = ' expire between ';
      var middleStatement2 = ' and ';
      var endStatement = '].\n ';
      // response = response + result[0].date + ' - ' + result[0].expiryDateStart + ' , ' + result[0].expiryDateEnd + ';';
      // response =  response + result[1].date + ' - ' + result[1].expiryDateStart + ' , ' + result[1].expiryDateEnd + ';';
      // response = responseforMultipleExpire(result, startStatement, middleStatement1, middleStatement2, endStatement);
      for (var i=0; i < result.length; i++){
        var date = result[i].date;
        var expiryDateStart = result[i].expiryDateStart;
        var expiryDateEnd = result[i].expiryDateEnd;
      response = response + startStatement + result[i].item + middleStatement + date + middleStatement1  + expiryDateStart + middleStatement2 + expiryDateEnd +'.\n';
    }
    }
      let prompt = printf(response + ' ' + getRandomPrompt(app, CONTINUATION_PROMPTS));
      ask(app, prompt);
      }); // End DB Function
  });
} // End Retrieve Items Expiry Function
      // start retrieve function
      function retrieve(app){
        if(parameters_app.Items.length == 0 || parameters_app.purpose == ''){
          ask(app, printf('Retrieve ' + getRandomPrompt(app, FALLBACK_PROMPT_1)));
        }
        else{
        app.setContext(REPEAT_YES_NO_CONTEXT);
        if (req.body.result.parameters.retrieveType == 1){
            retrieveType(app);
        }else if (req.body.result.parameters.retrieveType == 2) {
          if (req.body.result.parameters.purpose == 'expire') {
            retrieveItemsExpiry(app);
          }else {
            retrieveItems(app);
          }

        }else {
            let prompt = printf(getRandomPrompt(app, CONTINUATION_PROMPTS));
            ask(app, prompt);
        }
      }
      } // End Retrieve
  //  Start Remove function
  function remove (app){
        app.setContext(REPEAT_YES_NO_CONTEXT);
      if(parameters_app.Items.length != 0 || parameters_app.purposeDelete == ''){
        MongoClient.connect(url, function(err, db) {
        db.collection("transaction").find({$and:[{"used": "no"},{"sessionId": authenticationKey}, {"item":{$in: req.body.result.parameters.Items}}]}).sort({"item":1}).toArray(function(err, result){
        if (err) throw err;
        var response = '';
        if(result.length == 0){
          let startStatement = 'You don\'t have any ';
          let endStatement = '].\n ';
          response = responseforOneParam(req.body.result.parameters.Items, startStatement, endStatement);
          let prompt = printf(response + ' ' + getRandomPrompt(app, CONTINUATION_PROMPTS));
        ask(app, prompt);
      }else if (result.length == 1) {
        db.collection('transaction').findOneAndUpdate({$and:[{"used": "no"},{"sessionId" : authenticationKey},{"item": req.body.result.parameters.Items[0]}]},{$set: {"used": "yes"}}, function(err, res) {
           if (err) throw err;
           console.log("1 record Updated");
           db.close();
              response = req.body.result.parameters.Items[0] + ' removed from your items.';
           let prompt = printf(response + ' ' + getRandomPrompt(app, CONTINUATION_PROMPTS));
         ask(app, prompt);
         });// End DB Function
      }else{
        app.setContext(REMOVE_OPTION_CONTEXT);
        let startStatement = 'You bought ';
        let middleStatement = ' on ';
        let endStatement = '].\n ';
        app.data.item = req.body.result.parameters.Items[0];
        app.data.queryResult = result;
        response = responseforMultiple(result, startStatement, middleStatement, endStatement);
        ask(app, response + ' Which one do you want to delete? ');
        }
      db.close();
      });// End DB Function
    });
  }else{
          ask(app, printf('Remove ' + getRandomPrompt(app, FALLBACK_PROMPT_1)));
  }
  } // End Remove Function
  //  Start RemoveOption function
  function removeOption (app){
    var contexts = searchInObject(req.body.result.contexts, "name", "_actions_on_google_");
    var item = contexts.parameters.item;
    var queryResult = contexts.parameters.queryResult;
    var date = queryResult[req.body.result.parameters.ordinal-1].date;
    if(req.body.result.parameters.ordinal != undefined){
        if(req.body.result.parameters.ordinal == ""){
          app.setContext(REMOVE_OPTION_CONTEXT);
        ask(app, "Please tell a number more than zero");
      // }else if (req.body.result.parameters.ordinal > queryResult.length) {
      //   var length = queryResult.length + 1;
      //   app.setContext(REMOVE_OPTION_CONTEXT);
      // ask(app, "Please tell a number more than zero and less than " + length);
      }else {
        app.setContext(REPEAT_YES_NO_CONTEXT);
        MongoClient.connect(url, function(err, db) {
        db.collection('transaction').findOneAndUpdate({$and:[{"used": "no"},{ "sessionId" : authenticationKey},{"item": item},{"date": date}]},{$set: {"used": "yes"}}, function(err, res) {
           if (err) throw err;
           console.log("1 record Updated");
           db.close();
           let response = item + ' removed from your items.';
           let prompt = printf(response + ' ' + getRandomPrompt(app, CONTINUATION_PROMPTS));
         ask(app, prompt);
         });// End DB Function
       });
      }
    // }else if (req.body.result.parameters.indications == "all") {
    //   MongoClient.connect(url, function(err, db) {
    //   db.collection('transaction').findOneAndUpdate({$and:[{"used": "no"},{ "sessionId" : authenticationKey},{"item": item},]},{$set: {"used": "yes"}}, function(err, res) {
    //      if (err) throw err;
    //      console.log("1 record Updated");
    //      db.close();
    //      let response = 'All the ' + item + ' removed from your items.';
    //      let prompt = printf(response + ' ' + getRandomPrompt(app, CONTINUATION_PROMPTS));
    //    ask(app, prompt);
    //    });// End DB Function
    //  });
    }else{
        app.tell('Not developed Yet. Lol');
      }
  } // End RemoveOption Function
  // Start of repeatYes function
  function repeatYes (app) {
    console.log('repeatYes');
    var purpose = parameters_app.purpose;
    if (purpose == '' && parameters_app.purposeDelete != ''){
    purpose = parameters_app.purposeDelete;
  }
  //   if (purpose == "save"){
  //     app.setContext(SAVE_CONTEXT);
  //   ask(app, printf(getRandomPrompt(app, RE_PROMPT) + ' ' + getRandomPrompt(app, SAVE_RE_INVOCATION_PROMPT)));
  // }else if (purpose == "retrieve") {
  //   app.setContext(RETRIEVE_CONTEXT);
  //   ask(app, printf(getRandomPrompt(app, RE_PROMPT) + ' ' + getRandomPrompt(app, RETRIEVE_RE_INVOCATION_PROMPT)));
  // }else if (purpose == "remove") {
  //   app.setContext(REMOVE_CONTEXT);
  //   ask(app, printf(getRandomPrompt(app, RE_PROMPT) + ' ' + getRandomPrompt(app, REMOVE_RE_INVOCATION_PROMPT)));
  // }else if (req.body.result.resolvedQuery == 'yes') {
    app.setContext(REPEAT_YES_NO_CONTEXT);
      // ask(app, printf(getRandomPrompt(app, RE_PROMPT) + ' What else can I help you with? '));
      ask(app, printf(getRandomPrompt(app, FALLBACK_PROMPT_1)));
  //   }else {
  //   ask(app, "Sorry I didn\'t understand.You can say Save, Retrieve or Remove");
  // }
  }// End of repeatYes function
  // Start of saveNo function
  function repeatNo (app) {
    console.log('repeatNo');
    // app.setContext(SAVE_CONTEXT, 1);
    app.tell(printf(getRandomPrompt(app, QUIT_PROMPTS)));
  } // End of saveNo function
  //   //Start fallback function
  function defaultFallback (app) {
    app.setContext(REPEAT_YES_NO_CONTEXT);
    console.log('defaultFallback: ' + app.data.fallbackCount);
    if (app.data.fallbackCount === undefined) {
      app.data.fallbackCount = 0;
    }
    app.data.fallbackCount++;
    // Provide 3 prompts before ending the bot
    if (app.data.fallbackCount < 2) {
      ask(app, printf(getRandomPrompt(app, FALLBACK_PROMPT_1)));
    }else if (app.data.fallbackCount < 5) {
      app.setContext(REPEAT_YES_NO_CONTEXT);
      ask(app, printf(getRandomPrompt(app, FALLBACK_PROMPT_2)));
    } else {
      app.tell(printf(getRandomPrompt(app, FALLBACK_PROMPT_3)));
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
    actionMap.set(REMOVE_ACTION, remove);
    actionMap.set(REMOVE_OPTION_ACTION, removeOption);
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
