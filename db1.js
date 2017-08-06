// var dataMap = require('./data.js');
// var botFunctions = require('./functions.js');
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://aarti:Columbus23@ds139072.mlab.com:39072/heroku_wpdkpvk8";
// var dataMap = require('./data.js');
// // var resultTypeList1 = resultTypeList.filter( function( el ) {
// //   return dataMap.typeOfTypes.indexOf( el ) < 0;
// // });
// console.log(dataMap.typeOfTypes[0]);
var dateFormat = require('dateformat');
var currentTime = new Date()
var currentYear = currentTime.getFullYear()

var givenDate = new Date("06-20-2018");
var year = givenDate.getFullYear()
var modifiedDate=dateFormat(givenDate, "mm-dd");
console.log(year);
