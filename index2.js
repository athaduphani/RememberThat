// Copyright 2016, Google, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// [START app]
'use strict';

process.env.DEBUG = 'actions-on-google:*';
let ApiAiApp = require('actions-on-google').ApiAiApp;
let sprintf = require('sprintf-js').sprintf;

const PURPOSE = 'save';

// HTTP Cloud Function handler
exports.transaction = function (req, res) {
  console.log('headers: ' + JSON.stringify(request.headers));
  console.log('body: ' + JSON.stringify(request.body));

  const app = new ApiAiApp({req, res});

  function save (app) {
    console.log('save');
    var purpose = req.body.result && req.body.result.parameters && req.body.result.parameters.purpose ? req.body.result.parameters.purpose : "Seems like some problem. Speak again."
    var vegetable = req.body.result && req.body.result.parameters && req.body.result.parameters.Vegetable ? req.body.result.parameters.Vegetable : "Seems like some problem. Speak again."
    var date = req.body.result && req.body.result.parameters && req.body.result.parameters.date ? req.body.result.parameters.date : "Seems like some problem. Speak again."
    return res.json({
        speech: "Purpose is" + purpose + ", vegetable is " + Vegetable + ", date is "+ date,
        displayText: "Purpose is" + purpose + ", vegetable is " + Vegetable + ", date is "+ date,
        source: 'RememberThat'
  });
  }
  let actionMap = new Map();
  actionMap.set(PURPOSE, save);
  app.handleRequest(actionMap);
};
