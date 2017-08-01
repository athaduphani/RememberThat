// var dataMap = require('./data.js');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://aarti:Columbus23@ds139072.mlab.com:39072/heroku_wpdkpvk8";
let startStatement = 'You have ';
let middleStatement = ' which are bought on ';
let endStatement = '].\n ';
result = ['Apples', 'Oranges']

// function responseforMultiple(result, startStatement, middleStatement, endStatement){
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
  // return response;
  console.log(response);
// }
