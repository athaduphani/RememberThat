'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const restService = express();

restService.use(bodyParser.urlencoded({
    extended: true
}));
restService.use(bodyParser.json());

restService.post('/transaction', function(req, res) {
      var purpose = req.body.result && req.body.result.parameters && req.body.result.parameters.purpose ? req.body.result.parameters.purpose : "Seems like some problem. Speak again."
      var vegetable = req.body.result && req.body.result.parameters && req.body.result.parameters.Vegetable ? req.body.result.parameters.Vegetable : "Seems like some problem. Speak again."
      var date = req.body.result && req.body.result.parameters && req.body.result.parameters.date ? req.body.result.parameters.date : "Seems like some problem. Speak again."
      if (purpose = "save"){

      }else if (purpose = "delete") {

      }else{
        return res.json({
            speech: "Sorry! Something went wrong. Please try again",
            displayText: "Sorry! Something went wrong. Please try again",
            source: 'RememberThat'
      });
    }
    });
    restService.listen((process.env.PORT || 8000), function() {
        console.log("Server up and listening");
    });
