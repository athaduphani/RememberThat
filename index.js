// 'use strict';

process.env.DEBUG = 'actions-on-google:*';
let ApiAiApp = require('actions-on-google').ApiAiApp;
let sprintf = require('sprintf-js').sprintf;
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
console.log("Hello");
    // Utility function to pick prompts
    function getRandomPrompt (app, array) {
      let lastPrompt = app.data.lastPrompt;
      let prompt;
      if (lastPrompt) {
        for (let index in array) {
          prompt = array[index];
          if (prompt != lastPrompt) {
            break;
          }
        }
      } else {
        prompt = array[Math.floor(Math.random() * (array.length))];
      }
      return prompt;
    }

  exports.rememberThat = function (request, response) {
    console.log('headers: ' + JSON.stringify(request.headers));
    console.log('body: ' + JSON.stringify(request.body));

    const app = new ApiAiApp({request, response});

    function produceSave (app) {
      console.log('produceSave');
      app.data.fallbackCount = 0;
      let title = getRandomPrompt(app, GREETING_PROMPTS);
    const action = app.getArgument(ACTIONS_ARGUMENT);
    const meat = app.getArgument(MEAT_ARGUMENT);

    app.tell('You said Action is' + action + 'and the meat is' + meat);
    }
    // Adding intents to Action Map
    let actionMap = new Map();
    actionMap.set(PRODUCE_SAVE_INTENT, produceSave);
    app.handleRequest(actionMap);
}
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
