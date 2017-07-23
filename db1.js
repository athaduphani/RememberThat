var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://aarti:Columbus23@ds139072.mlab.com:39072/heroku_wpdkpvk8";
var authenticationKey = "5376a8a7-5672-442f-8682-d5a84392a39a";
var authenticationId = "sessionId";
var queryResult = [
  {
    "_id": "5974a8d7aefe1f0004949e0f",
    "transactionId": "47e09f2b-b815-48d8-a541-fffa3bd6bc2f",
    "sessionId": "5376a8a7-5672-442f-8682-d5a84392a39a",
    "item": "Clementine",
    "quantity": "1",
    "type": "Fruit",
    "date": "2017-07-23",
    "expiryDateStart": "2017-07-28",
    "expiryDateEnd": "2017-08-02",
    "used": "no",
    "purpose": "bought"
  },
  {
    "_id": "5974a9e4aefe1f0004949e10",
    "transactionId": "9c8e3663-c735-4241-998c-3d092c3e27ec",
    "sessionId": "5376a8a7-5672-442f-8682-d5a84392a39a",
    "item": "Clementine",
    "quantity": "1",
    "type": "Fruit",
    "date": "2017-07-21",
    "expiryDateStart": "2017-07-26",
    "expiryDateEnd": "2017-07-31",
    "used": "no",
    "purpose": "bought"
  }
]
console.log(queryResult.length + 1);
