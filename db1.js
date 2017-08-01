// var dataMap = require('./data.js');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://aarti:Columbus23@ds139072.mlab.com:39072/heroku_wpdkpvk8";
var result = [
  {
    "item": "Apple"
  },{
    "item": "Orange"
  }
]
var Items = ['Apple','Orange','Banana']
  let itemsList = [];
  let resultItemsList = []
  for(i=0; i < result.length;i++){
    resultItemsList.push(result[i].item)
  }
  for (var j = 0; j < Items.length; j++) {
    itemsList.push(Items[j])
  }
  var noResultItemsList = itemsList.filter( function( el ) {
    return resultItemsList.indexOf( el ) < 0;
  });
//   if(noResultItemsList.length >0){
//   response = 'You dont have any ' + itemsForType(noResultItemsList,'','.')
// }
console.log(noResultItemsList);
