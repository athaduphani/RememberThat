var pluralize = require('pluralize')
var isSingular = require('is-singular')
console.log(pluralize("i bought tomato"));
// var try = isSingular("tomato")
console.log(isSingular("tomatoes"));
app1();
var var1 = 1;
function app1(){
  console.log("Hello");
}
function app2(){
  if(var1 ==1){
    app1();
  }
}
