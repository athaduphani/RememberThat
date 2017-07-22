var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://aarti:Columbus23@ds139072.mlab.com:39072/heroku_wpdkpvk8";
var body = {
  "id": "c5a8b45a-6f9d-4b08-bd97-1cd279927407",
  "timestamp": "2017-07-22T14:55:23.596Z",
  "lang": "en",
  "result": {
    "source": "agent",
    "resolvedQuery": "first one",
    "action": "remove_option",
    "actionIncomplete": false,
    "parameters": {
      "date": "",
      "ordinal": "1",
      "purpose": ""
    },
    "contexts": [
      {
        "name": "_actions_on_google_",
        "parameters": {
          "date": "",
          "item": "Plum",
          "purpose": "",
          "ordinal.original": "first",
          "date.original": "",
          "purpose.original": "",
          "purposeOriginal": "",
          "Items.original": "plums",
          "printed": "Welcome to Dates Bot! How can i help you today?",
          "ordinalOriginal": "first",
          "purposeDeleteOriginal": "remove",
          "itemsOriginal": "plums",
          "purposeDelete.original": "remove",
          "lastPrompt": "Welcome to Dates Bot! How can i help you today?",
          "purposeDelete": "remove",
          "Items": [
            "Plum"
          ],
          "items": [
            "Plum"
          ],
          "ordinal": "1",
          "dateOriginal": ""
        },
        "lifespan": 99
      },
      {
        "name": "remove_option",
        "parameters": {
          "date": "",
          "purpose": "",
          "ordinal.original": "first",
          "date.original": "",
          "purposeDelete.original": "remove",
          "purposeDelete": "remove",
          "Items": [
            "Plum"
          ],
          "purpose.original": "",
          "Items.original": "plums",
          "ordinal": "1"
        },
        "lifespan": 5
      },
      {
        "name": "welcome",
        "parameters": {
          "date": "",
          "purpose": "",
          "ordinal.original": "first",
          "date.original": "",
          "purposeDelete.original": "remove",
          "purposeDelete": "remove",
          "Items": [
            "Plum"
          ],
          "purpose.original": "",
          "ordinal": "1",
          "Items.original": "plums"
        },
        "lifespan": 3
      }
    ],
    "metadata": {
      "intentId": "eac419c6-bf4d-453f-86e7-432bdcb2203b",
      "webhookUsed": "true",
      "webhookForSlotFillingUsed": "false",
      "intentName": "remove-option"
    },
    "fulfillment": {
      "speech": "",
      "messages": [
        {
          "type": 0,
          "speech": ""
        }
      ]
    },
    "score": 1
  },
  "status": {
    "code": 206,
    "errorType": "partial_content",
    "errorDetails": "Webhook call failed. Error: 500 Internal Server Error"
  },
  "sessionId": "5376a8a7-5672-442f-8682-d5a84392a39a"
}
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var contexts = searchInObject(body.result.contexts, "name", "_actions_on_google_");
  var item = contexts.parameters.item
  console.log(item);
db.collection('transaction').findOneAndUpdate({$and:[{"used": "no"},{ "sessionId" : "5376a8a7-5672-442f-8682-d5a84392a39a"},{"item": contexts.parameters.item}]},{$set: {"used": "yes"}}, function(err, res) {
   if (err) throw err;
   console.log("1 record Updated");
   db.close();
 });// End DB Function
});
function searchInObject(object, searchKey, searchValue) {
  for (var i in object) {
    if (object[i][searchKey].indexOf(searchValue) > -1) {
      return object[i];
    }
  }
}
