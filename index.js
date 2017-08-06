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
// var botFunctions = require('./functions.js');
var pluralize = require('pluralize')

const SAVE_ACTION = 'save';
const RETRIEVE_ACTION = 'retrieve';
const WELCOME_ACTION = 'welcome';
const REMOVE_ITEMS_ACTION = 'remove_items';
const REMOVE_TYPE_ACTION = 'remove_type';
const REMOVE_ITEMS_OPTION_ACTION = 'remove_items_option';
const REMOVE_TYPE_OPTION_ACTION = 'remove_type_option';
// const MODIFY_ACTION = 'modify';
const REPEAT_YES_ACTION = 'repeat_yes';
const REPEAT_NO_ACTION = 'repeat_no';
const DEFAULT_FALLBACK_ACTION = 'input.unknown';
const FIRST_INTERACTION_EXAMPLES = ['I can save dates for your household items and tell you when u need them. For Example, You can say \"I bought milk today\".', 'I can save, retrieve and delete dates for your household items. For Example, You can say \"I bought apples today\".','I can save, retrieve and update dates for your household items. For Example, You can say \"I bought chicken today\".'];
const GREETING_PROMPTS = ['Welcome to Dates Bot!', 'Hi! This is Dates Bot.','Welcome back to Dates Bot.'];
const INVOCATION_PROMPTS = ['How can i help you?', 'How may I assist you?'];
const NO_INPUT_PROMPTS = ['I didn\'t hear it. Could you please repeat it', 'If you\'re still there, please tell me how can I help you','We can stop here. Let\'s talk again soon.'];
const CONTINUATION_PROMPTS = ['what else can I help you with?'];
const RE_PROMPT = ['Great!', 'Awesome!', 'Cool!'];
const SAVE_CONTEXT = 'save';
const RETRIEVE_CONTEXT = 'retrieve';
// const MODIFY_CONTEXT = 'modify';
const REMOVE_CONTEXT = 'remove';
const REMOVE_ITEMS_OPTION_CONTEXT = 'remove_items_option';
const REMOVE_TYPE_OPTION_CONTEXT = 'remove_type_option';
const REPEAT_YES_NO_CONTEXT = 'repeat_yes_no';
const SAVE_RE_INVOCATION_PROMPT = ['What do you want to save?'];
const RETRIEVE_RE_INVOCATION_PROMPT = ['What do you want to retrieve?'];
const FALLBACK_PROMPT_1 = ['I didn\'t get that. Could you please say it again?','I missed what you said. Say it again?','Sorry, could you say that again?','Sorry, I didn\'t get that.'];
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
        if(parameters_app.purpose === ''){
          // Didn't understand the purpose
          defaultFallback(app);
        }else if (parameters_app.type.length == 0 && parameters_app.Items.length == 0) {
          // Don't have any items or types
          defaultFallback(app);
        }else if (parameters_app.date === '') {
          // Didn't understand the date?
          defaultFallback(app);
        }else if (parameters_app.type.length != 0 && parameters_app.Items.length == 0) {
          // Which vegetables do u want to save?
          var response = '';
          let startStatement = '';
          let endStatement = ' do you want to save?\n ';
          response = 'Sure. Which ' + responseforOneParam(req.body.result.parameters.type, startStatement, endStatement);
          var prompt = printf(response);
          ask(app, prompt);
        }else {
          app.data.fallbackCount = 0;
          app.setContext(REPEAT_YES_NO_CONTEXT);
          var prompt = "Something went wrong. Please try again";
          var transactions = [];
          var items_list = [];
          var itemType = '';
      for (var i = 0; i < parameters_app.Items.length; i++) {
          var result = searchInObject(dataMap.itemTypeMap, "item", req.body.result.parameters.Items[i]);
        //  itemType = itemType + req.body.result.parameters.Items[i] + getType (req.body.result.parameters.Items[i]);
        var expiryDateStart = new Date(req.body.result.parameters.date);
        var expiryDateEnd = new Date(req.body.result.parameters.date);
        expiryDateStart.setDate(expiryDateStart.getDate() + result.expiry_start);
        expiryDateEnd.setDate(expiryDateEnd.getDate() + result.expiry_end);
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
          items_list.push(req.body.result.parameters.Items[i]);
        }
        MongoClient.connect(url, function(err, db) {
          if (err) throw err;
            db.collection("transaction").insertMany(transactions, function(err, res) {
              if (err) throw err;
              // console.log("1 record inserted");
              db.close();
            });
          });
          let startStatement = '';
          let endStatement = '';
          let response = itemsForType(items_list, startStatement, endStatement);
          let title = "I saved that you " + req.body.result.parameters.purpose +' '+ response + " on " + req.body.result.parameters.date +'.' ;
          prompt = printf(title + ' ' + getRandomPrompt(app, CONTINUATION_PROMPTS));
        ask(app, prompt);
      }
      } // end save function
      // Start responseforOneParam function
      function responseforOneParam(parameter, startStatement, endStatement){
        let response = startStatement;
        for (var i = 0; i < parameter.length; i++) {
          if (parameter.length == 1) {
            response = response + parameter[i] + endStatement;
          }
          else if (i == parameter.length-1){
            response = response + 'and ' + parameter[i] +' '+ endStatement ;
          }else{
            response = response + parameter[i]+ ' ' ;
        }
        }
        return response;
      } // End responseforOneParam function
      // Start itemsForType function
      function itemsForType(result, startStatement, endStatement){
        let response = startStatement;
        var itemName = 'NA';
        for (var i = 0; i < result.length; i++) {
          if(itemName != result[i]){
          if (result.length == 1) {
            response = response + result[i] + endStatement;
          }
          else if (i == result.length-1){
            response = response + ' and ' + result[i] +' '+ endStatement ;
          }else if (i == 0){
            response = response + result[i] ;
            itemName = result[i];
          }else{
            response = response +', '+ result[i] ;
            itemName = result[i];
        }
      }else{
      }
        }
        return response;
      } // End itemsForType function
      // Start RetrieveForType
      function retrieveType(app){
        MongoClient.connect(url, function(err, db) {
          if (err) throw err;
          var type = '';
          var map = [];
          for (var i = 0; i < req.body.result.parameters.type.length; i++) {
            type = searchInObject(dataMap.typeMap, "type", req.body.result.parameters.type[i]);
            map = map.concat(type.Map);
          }
          db.collection("transaction").find({$and:[{"used": "no"},{"sessionId": authenticationKey}, {"type":{$in: map }}]}).sort({"item":1}).toArray(function(err, result){
          if (err) throw err;
          db.close();
          let response = '';
          if(result.length == 0){
            let startStatement = 'You don\'t have any ';
            let endStatement = '.\n ';
            response = responseforOneParam(req.body.result.parameters.type, startStatement, endStatement);
        }else{
          var typeList = []; // Contains the types provided by user
          var resultTypeList = []; // Contains the types from database
           for(var i = 0; i < result.length; i++){
             if(resultTypeList.indexOf(result[i].type) > -1){
               //Item already exists in the list
             }else{
             resultTypeList.push(result[i].type)
           }
           }
           var type = req.body.result.parameters.type;
           for (var j = 0; j < type.length; j++) {
             typeList.push(type[j])
           }
           typeList = typeList.filter( function( el ) {
             return dataMap.typeOfTypes.indexOf( el ) < 0;
           });
           var noResultTypeList = typeList.filter( function( el ) {
             return resultTypeList.indexOf( el ) < 0;
           });

           if(noResultTypeList.length >0){ // these type dont have any transactions
           response = 'You dont have ' + itemsForType(noResultTypeList,'','. ')
         }
          let startStatement = 'You have ';
          let middleStatement = ' which are bought on ';
          let endStatement = '.\n ';
          // let endStatement = '.\n ';
          response = response + itemsForResult (result, startStatement, endStatement);
          // response = response + responseforMultiple(result, startStatement, middleStatement, endStatement);
          // response = response + itemsForType(resultTypeList, startStatement, endStatement);
        }
          let prompt = printf(response + ' ' + getRandomPrompt(app, CONTINUATION_PROMPTS));
          ask(app, prompt);
          }); // End DB Function
      });
      function itemsForResult(result, startStatement, endStatement){
          let response = startStatement;
          var itemName = 'NA';
          for (var i = 0; i < result.length; i++) {
            if(itemName != result[i].item){
            if (result.length == 1) {
              response = response + result[i].item + endStatement;
            }else if (i == result.length-1){
              response = response + ' and ' + result[i].item + endStatement ;
            }else if (i == 0){
              response = response + result[i].item ;
              itemName = result[i].item;
            }else{
              response = response +', '+ result[i].item ;
              itemName = result[i].item;
          }
        }else{
        }
          }
          return response;
        } // End itemsForResult function
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
            response = response + startStatement + result[i].item + middleStatement  + result[i].date;
          }else if (i == result.length-1) {
            response = response + endStatement +startStatement + result[i].item + middleStatement  +result[i].date+'.\n';
          }else {
            response = response + endStatement +startStatement + result[i].item + middleStatement+result[i].date;
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
          let endStatement = '.\n ';
          response = responseforOneParam(req.body.result.parameters.Items, startStatement, endStatement);
      }else{
        let startStatement = 'You bought ';
        let middleStatement = ' on ';
        let endStatement = '.\n ';
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
        let endStatement = '.\n ';
        response = responseforOneParam(req.body.result.parameters.Items, startStatement, endStatement);
    }else{
      var startStatement = ' The ';
      var middleStatement = ' you bought on ';
      var middleStatement1 = ' expire between ';
      var middleStatement2 = ' and ';
      var endStatement = '.\n ';
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
// Start Retrieve Type Expiry
function retrieveTypeExpiry(app){
app.setContext(REPEAT_YES_NO_CONTEXT);
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    db.collection("transaction").find({$and:[{used: "no"},{"sessionId": authenticationKey}, {"type":{$in: req.body.result.parameters.type}}]}).sort({"item":1}).toArray(function(err, result){
    if (err) throw err;
    db.close();
    var response = '';
    if(result.length == 0){
      let startStatement = 'You don\'t have any ';
      let endStatement = '.\n ';
      response = responseforOneParam(req.body.result.parameters.type, startStatement, endStatement);
  }else{
    var startStatement = ' The ';
    var middleStatement = ' you bought on ';
    var middleStatement1 = ' expire between ';
    var middleStatement2 = ' and ';
    var endStatement = '].\n ';
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
} // End Retrieve Type Expiry Function
      // start retrieve function
      function retrieve(app){
        if(parameters_app.purpose === ''){
          // ask(app, printf('Retrieve ' + getRandomPrompt(app, FALLBACK_PROMPT_1)));
          defaultFallback(app);
        }
        else{
        app.data.fallbackCount = 0;
        app.setContext(REPEAT_YES_NO_CONTEXT);
        if (req.body.result.parameters.retrieveType == 1){
          if (req.body.result.parameters.purpose == 'expire') {
            retrieveTypeExpiry(app);
          }else {
            retrieveType(app);
          }
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
      // Start removeType function
      function removeType (app){
        parameters_app = req.body.result && req.body.result.parameters ? req.body.result.parameters : "Seems like some problem. Speak again."
        if(parameters_app.purposeDelete === ''){
          defaultFallback(app);
        }else if (parameters_app.type.length == 0) { // Don't have any type
          defaultFallback(app);
        }else { // Which vegetables do u want to delete?
          var type = '';
          var map = [];
          for (var i = 0; i < req.body.result.parameters.type.length; i++) {
            type = searchInObject(dataMap.typeMap, "type", req.body.result.parameters.type[i]);
            map = map.concat(type.Map);
          }
          MongoClient.connect(url, function(err, db) {
          db.collection("transaction").find({$and:[{"used": "no"},{"sessionId": authenticationKey}, {"type":{$in: map}}]}).sort({"item":1}).toArray(function(err, result){
          if (err) throw err;
          var response = '';
          if (result.length == 0) {
            let startStatement = 'You don\'t have any ';
            let endStatement = '.\n ';
            response = responseforOneParam(req.body.result.parameters.type, startStatement, endStatement);
            let prompt = printf(response + ' ' + getRandomPrompt(app, CONTINUATION_PROMPTS));
          ask(app, prompt);
        }else if (result.length == 1 && req.body.result.parameters.type.length == 1) { // only one vegetable bought only once
            db.collection('transaction').findOneAndUpdate({$and:[{"used": "no"},{"sessionId" : authenticationKey},{"type":{$in: req.body.result.parameters.type}}]},{$set: {"used": "yes"}}, function(err, res) {
               if (err) throw err;
               console.log("1 record Updated");
              //  db.close();
              response = 'You have '+ result[0].item +' and I removed it from your items.';
               let prompt = printf(response + ' ' + getRandomPrompt(app, CONTINUATION_PROMPTS));
             ask(app, prompt);
             });// End DB Function
          }else if (result.length == 1 && req.body.result.parameters.type.length > 1) { // only one vegetable bought only once
              db.collection('transaction').findOneAndUpdate({$and:[{"used": "no"},{"sessionId" : authenticationKey},{"type":{$in: req.body.result.parameters.type}}]},{$set: {"used": "yes"}}, function(err, res) {
                 if (err) throw err;
                 var typeList = [];
                 var resultTypeList = [];
                //  for(var i = 0; i < result.length; i++){
                   resultTypeList.push(result[0].type)
                //  }
                 var type = req.body.result.parameters.type;
                 for (var j = 0; j < type.length; j++) {
                   typeList.push(type[j])
                 }
                 typeList = typeList.filter( function( el ) {
                   return dataMap.typeOfTypes.indexOf( el ) < 0;
                 });
                 var noResultTypeList = typeList.filter( function( el ) {
                   return resultTypeList.indexOf( el ) < 0;
                 });
                 if(noResultTypeList.length >0){ // these type dont have any transactions
                 response = 'You dont have ' + itemsForType(noResultTypeList,'','. ')
               }
                 console.log("1 record Updated");
                //  db.close();
                response = response + 'You have '+ result[0].item +' and I removed it from your items.';
                 let prompt = printf(response + ' ' + getRandomPrompt(app, CONTINUATION_PROMPTS));
               ask(app, prompt);
               });// End DB Function
            }else{ //many transactions
            app.data.type = req.body.result.parameters.type;
            app.data.item = [];
            db.collection("transaction").distinct('item',{$and:[{"used": "no"},{"sessionId": authenticationKey}, {"type":{$in: req.body.result.parameters.type}}]},function(err, res){
            if (err) throw err;
            app.data.queryResult = res;
            let startStatement = '';
            let middleStatement = '';
            let endStatement = '';
            if(res.length == 1){ //One vegetable bought multiple times
              app.setContext(REMOVE_ITEMS_OPTION_CONTEXT);
              var typeList = [];
              var resultTypeList = [];
              let response = '';
              for(var i = 0; i < result.length; i++){
                if(resultTypeList.indexOf(result[i].type) > -1){
                  //Item already exists in the list
                }else{
                resultTypeList.push(result[i].type)
              }
              }
              var type = req.body.result.parameters.type;
              for (var j = 0; j < type.length; j++) {
                typeList.push(type[j])
              }
              var noResultTypeList = typeList.filter( function( el ) {
                return resultTypeList.indexOf( el ) < 0;
              });
              if(noResultTypeList.length >0){ // these type dont have any transactions
              response = 'You dont have ' + itemsForType(noResultTypeList,'','. ')
            }
              startStatement = 'You bought ';
              middleStatement = ' on ';
              endStatement = '.\n ';
              let item = [];
              item.push(res[0]);
              app.data.item = item;
              app.data.type = [];
              db.collection("transaction").find({$and:[{"used": "no"},{"sessionId": authenticationKey}, {"item":{$in: res}}]}).sort({"item":1}).toArray(function(err, result){
              if (err) throw err;
              app.data.queryResult = result;
              response = response + responseforMultiple(result, startStatement, middleStatement, endStatement);
              ask(app, response + ' Which one do you want to delete? ');
            });
            }else{ // More than one vegetable bought multiple times
              app.setContext(REMOVE_TYPE_OPTION_CONTEXT);
              db.collection("transaction").distinct('item',{$and:[{"used": "no"},{"sessionId": authenticationKey}, {"type":{$in: req.body.result.parameters.type}}]},function(err, res){
              if (err) throw err;
              var typeList = [];
              var resultTypeList = [];
               for(var i = 0; i < result.length; i++){
                 if(resultTypeList.indexOf(result[i].type) > -1){
                   //Item already exists in the list
                 }else{
                 resultTypeList.push(result[i].type)
               }
               }
               var type = req.body.result.parameters.type;
               for (var j = 0; j < type.length; j++) {
                 typeList.push(type[j])
               }
               var noResultTypeList = typeList.filter( function( el ) {
                 return resultTypeList.indexOf( el ) < 0;
               });
               if(noResultTypeList.length >0){ // these type dont have any transactions
               response = 'You dont have ' + itemsForType(noResultTypeList,'','. ')
             }
              startStatement = 'You have ';
              endStatement = '.\n ';
              response = response + itemsForType(res, startStatement, endStatement) + ' Which ones do you want to remove?';
            //   // startStatement = '';
            //   // endStatement = ' do you want to remove?\n ';
            //   // response = response + ' Which ' + responseforOneParam(resultTypeList, startStatement, endStatement);
            //   // response = response + ' Which one do you want to remove?';
              var prompt = printf(response);
              ask(app, prompt);
            });
            }
          });
            }
          });
        });
      }
      } // End removeType function
  //  Start RemoveItems function
  function removeItems (app){
    var contexts = searchInObject(req.body.result.contexts, "name", "_actions_on_google_");
    var item = [];
    if (req.body.result.parameters.Items.length !=0) {
        item = req.body.result.parameters.Items;
    }else if(contexts.parameters.hasOwnProperty('item') ){
      if(contexts.parameters.queryResult.length !=0){
        item.push(contexts.parameters.queryResult[req.body.result.parameters.ordinal-1]);
      }else{
        // Item length is empty
      }
    }else{
      // Items not available from both result and Google Actions context
    }
    parameters_app = req.body.result && req.body.result.parameters ? req.body.result.parameters : "Seems like some problem. Speak again."
    if(parameters_app.purposeDelete === ''){
      defaultFallback(app);
    }else if (item.length == 0) { // Don't have any items
      defaultFallback(app);
    }else{  // we have items to delete
        app.data.fallbackCount = 0;
        app.setContext(REPEAT_YES_NO_CONTEXT);
        MongoClient.connect(url, function(err, db) {
        db.collection("transaction").find({$and:[{"used": "no"},{"sessionId": authenticationKey}, {"item":{$in: item}}]}).sort({"item":1}).toArray(function(err, result){
        if (err) throw err;
        var response = '';
        if(result.length == 0){
          let startStatement = 'You don\'t have any ';
          let endStatement = '.\n ';
          response = responseforOneParam(item, startStatement, endStatement);
          let prompt = printf(response + ' ' + getRandomPrompt(app, CONTINUATION_PROMPTS));
        ask(app, prompt);
      }else if (result.length == 1 && item.length == 1) { // just one item
        db.collection('transaction').findOneAndUpdate({$and:[{"used": "no"},{"sessionId" : authenticationKey},{"item": item[0]}]},{$set: {"used": "yes"}}, function(err, res) {
           if (err) throw err;
           console.log("1 record Updated");
           db.close();
              response = item[0] + ' removed from your items.';
           let prompt = printf(response + ' ' + getRandomPrompt(app, CONTINUATION_PROMPTS));
         ask(app, prompt);
         });// End DB Function
       }else if (result.length == 1 && item.length > 1){ //Many Items. Only one time has one result
         db.collection('transaction').findOneAndUpdate({$and:[{"used": "no"},{"sessionId" : authenticationKey},{"item": item[0]}]},{$set: {"used": "yes"}}, function(err, res) {
            if (err) throw err;
            console.log("1 record Updated");
            db.close();
            var itemsList = [];
            var resultItemsList = [];
            for(var i = 0; i < result.length; i++){
              resultItemsList.push(result[i].item)
            }
            for (var j = 0; j < item.length; j++) {
              itemsList.push(item[j])
            }
            var noResultItemsList = itemsList.filter( function( el ) {
              return resultItemsList.indexOf( el ) < 0;
            });
            if(noResultItemsList.length >0){ // these items dont have any transactions
            response = 'You dont have ' + itemsForType(noResultItemsList,'','. ')
          }
          response = response + item[0] + ' removed from your items.';
            let prompt = printf(response + ' ' + getRandomPrompt(app, CONTINUATION_PROMPTS));
          ask(app, prompt);
          });// End DB Function
      }else{ //Many transactions for an item
        app.setContext(REMOVE_ITEMS_OPTION_CONTEXT);
        var itemsList = [];
        var resultItemsList = [];
        for(var i = 0; i < result.length; i++){
          if(resultItemsList.indexOf(result[i].item) > -1){
            //Item already exists in the list
          }else{
            resultItemsList.push(result[i].item)
          }
        }
        for (var j = 0; j < item.length; j++) {
          itemsList.push(item[j])
        }
        var noResultItemsList = itemsList.filter( function( el ) {
          return resultItemsList.indexOf( el ) < 0;
        });
        if(noResultItemsList.length >0){ // these items dont have any transactions
        response = 'You dont have ' + itemsForType(noResultItemsList,'','.')
      }

        let startStatement = 'You bought ';
        let middleStatement = ' on ';
        let endStatement = '].\n ';
        app.data.item = resultItemsList;
        app.data.type = [];
        app.data.queryResult = result;
        response =response + responseforMultiple(result, startStatement, middleStatement, endStatement);
        // response = resultItemsList[0];
        ask(app, response + ' Which one do you want to delete? ');
      }
      db.close();
      });// End DB Function
    });
}
  } // End RemoveItems Function
  //  Start removeTypeOption function
  function removeTypeOption (app){
    var contexts = searchInObject(req.body.result.contexts, "name", "_actions_on_google_");
    var queryResult = contexts.parameters.queryResult;
    var option = '';
    var item = [];
    if (req.body.result.parameters.ordinal != '') { // response is a number
        if(req.body.result.parameters.ordinal < 1){
          app.setContext(REMOVE_TYPE_OPTION_CONTEXT);
          ask(app, "Please tell a number greater than zero");
        }else if (req.body.result.parameters.ordinal > queryResult.length) {
          var length = queryResult.length + 1;
          app.setContext(REMOVE_TYPE_OPTION_CONTEXT);
          let response = ' Please tell a number less than ' + length;
          let prompt = printf(response);
          ask(app, prompt);
        }else{ // number is within the expected limits
          app.setContext(REPEAT_YES_NO_CONTEXT);
          item.push(queryResult[req.body.result.parameters.ordinal-1]);
          app.data.item = item;
          removeItems(app);
       }
    }else if (req.body.result.parameters.indications != '') { // response is all
      app.setContext(REPEAT_YES_NO_CONTEXT);
      var item = contexts.parameters.queryResult;
      MongoClient.connect(url, function(err, db) {
      db.collection('transaction').updateMany({$and:[{"used": "no"},{ "sessionId" : authenticationKey},{"item":{$in: item}}]},{$set: {"used": "yes"}}, function(err, res) {
         if (err) throw err;
         console.log("1 record Updated");
         db.close();
         let itemsList = itemsForType(item,'','')
         let response = itemsList + ' removed from your items.';
         let prompt = printf(response + ' ' + getRandomPrompt(app, CONTINUATION_PROMPTS));
         ask(app, prompt);
         });// End DB Function
     });
   }else if (req.body.result.parameters.Items.length != 0) {
     removeItems(app);
   }else {
      app.setContext(REMOVE_TYPE_OPTION_CONTEXT);
          ask(app, printf(getRandomPrompt(app, FALLBACK_PROMPT_1)));
    }
  } // End removeTypeOption Function
  //  Start removeItemsOption function
  function removeItemsOption (app){
    var contexts = searchInObject(req.body.result.contexts, "name", "_actions_on_google_");
    var queryResult = contexts.parameters.queryResult;
    var option = '';
    if (req.body.result.parameters.ordinal != '') { // response is a number
        if(req.body.result.parameters.ordinal < 1){
          app.setContext(REMOVE_ITEMS_OPTION_CONTEXT);
          ask(app, "Please tell a number greater than zero");
        }else if (req.body.result.parameters.ordinal > queryResult.length) {
          var length = queryResult.length + 1;
          app.setContext(REMOVE_ITEMS_OPTION_CONTEXT);
          let response = ' Please tell a number less than ' + length;
          let prompt = printf(response);
          ask(app, prompt);
        }else{ // number is within the expected limits
          app.setContext(REPEAT_YES_NO_CONTEXT);
          var date = queryResult[req.body.result.parameters.ordinal-1].date;
          var item = contexts.parameters.item;
          MongoClient.connect(url, function(err, db) {
          db.collection('transaction').findOneAndUpdate({$and:[{"used": "no"},{ "sessionId" : authenticationKey},{"item":{$in: item}},{"date": date}]},{$set: {"used": "yes"}}, function(err, res) {
             if (err) throw err;
             console.log("1 record Updated");
             db.close();
             let response = item[req.body.result.parameters.ordinal-1] + ' removed from your items.';
             let prompt = printf(response + ' ' + getRandomPrompt(app, CONTINUATION_PROMPTS));
           ask(app, prompt);
           });// End DB Function
         });
       }
    }else if (req.body.result.parameters.date != '') { // response is a date
      app.setContext(REPEAT_YES_NO_CONTEXT);
      var date = req.body.result.parameters.date;
      var item = contexts.parameters.item;
      MongoClient.connect(url, function(err, db) {
      db.collection('transaction').updateMany({$and:[{"used": "no"},{ "sessionId" : authenticationKey},{"item":{$in: item}},{"date":{$in: date}}]},{$set: {"used": "yes"}}, function(err, res) {
         if (err) throw err;
         console.log("1 record Updated");
         db.close();
         let itemsList = itemsForType(item,'','')
         let response = itemsList + ' removed from your items.';
         let prompt = printf(response + ' ' + getRandomPrompt(app, CONTINUATION_PROMPTS));
       ask(app, prompt);
       });// End DB Function
     });
   }else if (req.body.result.parameters.indications != '') { // response is all
      app.setContext(REPEAT_YES_NO_CONTEXT);
      var item = contexts.parameters.item;
      MongoClient.connect(url, function(err, db) {
      db.collection('transaction').updateMany({$and:[{"used": "no"},{ "sessionId" : authenticationKey},{"item":{$in: item}}]},{$set: {"used": "yes"}}, function(err, res) {
         if (err) throw err;
         console.log("1 record Updated");
         db.close();
         let response = item + ' removed from your items.';
         let prompt = printf(response + ' ' + getRandomPrompt(app, CONTINUATION_PROMPTS));
         ask(app, prompt);
         });// End DB Function
     });
   }else if (req.body.result.parameters.Items.length != 0) {
     removeItems(app);
   }else {
      app.setContext(REMOVE_ITEMS_OPTION_CONTEXT);
          ask(app, printf(getRandomPrompt(app, FALLBACK_PROMPT_1)));
    }
  } // End removeItemsOption Function
  // Start of repeatYes function
  function repeatYes (app) {
    console.log('repeatYes');
    var purpose = parameters_app.purpose;
    if (purpose == '' && parameters_app.purposeDelete != ''){
    purpose = parameters_app.purposeDelete;
  }
    app.setContext(REPEAT_YES_NO_CONTEXT);
    ask(app, printf(getRandomPrompt(app, FALLBACK_PROMPT_1)));

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
    actionMap.set(REMOVE_ITEMS_ACTION, removeItems);
    actionMap.set(REMOVE_TYPE_ACTION, removeType);
    actionMap.set(REMOVE_ITEMS_OPTION_ACTION, removeItemsOption);
    actionMap.set(REMOVE_TYPE_OPTION_ACTION, removeTypeOption);
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
