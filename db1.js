// var dataMap = require('./data.js');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://aarti:Columbus23@ds139072.mlab.com:39072/heroku_wpdkpvk8";
var contexts= [
     {
       "name": "_actions_on_google_",
       "parameters": {
         "printed": "Welcome to Dates Bot! How may I assist you today?",
         "lastPrompt": "Welcome to Dates Bot! How may I assist you today?"
       },
       "lifespan": 100
     },
     {
       "name": "welcome",
       "parameters": {},
       "lifespan": 5
     }
   ];
var contexts1 = searchInObject(contexts, "name", "_actions_on_google_");
console.log(contexts1);
// if(typeof contexts.parameters != "undefined" && contexts.parameters.resultQuery) {
//   console.log('we have obj! and val is : ' + obj.key)
// }
if(contexts1.parameters.hasOwnProperty('printed')){
  console.log("true");
}else {
  console.log("false");
}
function searchInObject(object, searchKey, searchValue) {
  for (var i in object) {
    if (object[i][searchKey].indexOf(searchValue) > -1) {
      return object[i];
    }
  }
}
