'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const restService = express();

restService.use(bodyParser.urlencoded({
    extended: true
}));

restService.use(bodyParser.json());
// Tareekh is the product name


  const PROCUSE_SAVE_INTENT = 'Produce_SaveIntent'
  const DATE_TO_BE_SAVED = 'date'
  const ACTIONS_ARGUMENT = 'Actions'
  const BUTTER_ARGUMENT = 'Butter'
  const BUTTER_ARGUMENT1 = 'Butter1'
  const BUTTER_ARGUMENT2 = 'Butter2'
  const BUTTER_ARGUMENT3 = 'Butter3'
  const BUTTER_ARGUMENT4 = 'Butter4'
  const BUTTER_ARGUMENT5 = 'Butter5'
  const VEGETABLE_ARGUMENT = 'Vegetable'
  const VEGETABLE_ARGUMENT1 = 'Vegetable1'
  const VEGETABLE_ARGUMENT2 = 'Vegetable2'
  const VEGETABLE_ARGUMENT3 = 'Vegetable3'
  const VEGETABLE_ARGUMENT4 = 'Vegetable4'
  const VEGETABLE_ARGUMENT5 = 'Vegetable5'
  const FRUIT_ARGUMENT = 'Fruit'
  const FRUIT_ARGUMENT1 = 'Fruit1'
  const FRUIT_ARGUMENT2 = 'Fruit2'
  const FRUIT_ARGUMENT3 = 'Fruit3'
  const FRUIT_ARGUMENT4 = 'Fruit4'
  const FRUIT_ARGUMENT5 = 'Fruit5'
  const MEAT_ARGUMENT = 'Meat'
  const MEAT_ARGUMENT1 = 'Meat1'
  const MEAT_ARGUMENT2 = 'Meat2'
  const MEAT_ARGUMENT3 = 'Meat3'
  const MEAT_ARGUMENT4 = 'Meat4'
  const MEAT_ARGUMENT5 = 'Meat5'

// prompts
const GREETING_PROMPTS = ['Hello!Let\'s save some dates today' , 'Welcome to Tareekh!', 'Hi! This is Tareekh',
    'Welcome back to Tareekh.'];

    restService.post('/Rememberthat', function(req, res) {
      var mainaction = req.body.result.action
      var action = req.body.result && req.body.result.parameters && req.body.result.parameters.Actions ? req.body.result.parameters.Actions : "Seems like some problem. Speak again."
      var vegetable = req.body.result && req.body.result.parameters && req.body.result.parameters.Vegetable ? req.body.result.parameters.Vegetable : "Seems like some problem. Speak again."
      var date = req.body.result && req.body.result.parameters && req.body.result.parameters.date ? req.body.result.parameters.date : "Seems like some problem. Speak again."

      // if (mainaction = "save.produce"){
      //
      // }else if (mainaction = "remove.produce") {
      //
      // }else if (mainaction = "remind.expiry") {
      //
      // }else if (mainaction = "retrieve.expiry") {
      //
      // }else{
        // return res.json({
        //     speech: "Sorry! I don't know how to help with that yet",
        //     displayText: "Sorry! I don't know how to help with that yet ",
        //     source: 'RememberThat'
      // }

        return res.json({
            speech: "Action is " + action +" Vegetable is "+ vegetable + " Date is " + date,
            displayText: "Action is " + action +" Vegetable is "+ vegetable + " Date is " + date,
            source: 'RememberThat'
        });
    });
    restService.listen((process.env.PORT || 8000), function() {
        console.log("Server up and listening");
    });

// var pg = require('pg');

// app.get('/db', function (request, response) {
//   pg.connect(process.env.postgresql-corrugated-68396, function(err, client, done) {
//     client.query('SELECT * FROM test_table', function(err, result) {
//       done();
//       if (err)
//        { console.error(err); response.send("Error " + err); }
//       else
//        { response.render('pages/db', {results: result.rows} ); }
//     });
//   });
// });
