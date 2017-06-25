'use strict';

const express = require('express');
const bodyParser = require('body-parser');
// var pg = require('pg');
// pg.defaults.ssl = true;
const restService = express();

restService.use(bodyParser.urlencoded({
    extended: true
}));

restService.use(bodyParser.json());

// prompts
const GREETING_PROMPTS = ['Hello!Let\'s save some dates today' , 'Welcome to Tareekh!', 'Hi! This is Tareekh',
    'Welcome back to Tareekh.'];

    restService.post('/save.produce', function(req, res) {
      var purpose = req.body.result && req.body.result.parameters && req.body.result.parameters.purpose ? req.body.result.parameters.purpose : "Seems like some problem. Speak again."
      var vegetable = req.body.result && req.body.result.parameters && req.body.result.parameters.Vegetable ? req.body.result.parameters.Vegetable : "Seems like some problem. Speak again."
      var date = req.body.result && req.body.result.parameters && req.body.result.parameters.date ? req.body.result.parameters.date : "Seems like some problem. Speak again."
        // if (purpose = "save") {
          // pg.connect(process.env.postgresql-corrugated-68396, function(err, client, done) {
          //   client.query('SELECT * FROM test_table', function(err, result) {
          //     done();
          //     if (err)
          //      { console.error(err); response.send("Error " + err); }
          //     else
          //      { response.render('pages/db', {results: result.rows} ); }
          //   });
          // });
          return res.json({
              speech: "Action is " + action +" Vegetable is "+ vegetable + " Date is " + date,
              displayText: "Action is " + action +" Vegetable is "+ vegetable + " Date is " + date,
              source: 'RememberThat'
        });
      // }else if (true) {
      //
      // }
    });

    restService.listen((process.env.PORT || 8000), function() {
        console.log("Server up and listening");
    });
