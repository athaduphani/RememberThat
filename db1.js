// var dataMap = require('./data.js');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://aarti:Columbus23@ds139072.mlab.com:39072/heroku_wpdkpvk8";
var x = ["a","b","c","t"];
var y = ["d","a","t","e","g"];

var myArray = y.filter( function( el ) {
  return x.indexOf( el ) < 0;
});

console.log(myArray);
