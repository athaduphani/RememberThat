var dateFormat = require('dateformat');

var myDate = new Date("07-20-2017");
// console.log(myDate);
myDate.setDate(myDate.getDate() + 5);
var day=dateFormat(myDate, "yyyy-mm-dd");

console.log(day);
