var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://aarti:Columbus23@ds139072.mlab.com:39072/heroku_wpdkpvk8";
let startStatement = 'You don\'t have any ';
let endStatement = '].\n ';
let response = startStatement;
var parameter = ['Onion','Tomato'];
for (var i = 0; i < parameter.length; i++) {
  if (parameter.length == 1) {
    response = response + parameter[i] +' '+ endStatement;
  }
  else if (i == parameter.length-1){
    response = response + 'and ' + parameter[i] +' '+ endStatement ;
  }else{
    response = response + parameter[i]+ ' ' ;
}
}
console.log(response);
