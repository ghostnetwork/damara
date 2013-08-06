'use strict';

require('verdoux');
var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();
var simpleTwitter = require('simple-twitter');
var util = require('util');
var Secrets = require('./secrets');

var Twitter = function() {
  var that = {};
  var twitter;

  that.init = function() {
    Secrets().loadSecrets().on('done', function(secrets) {
      var secretsObj = JSON.parse(secrets);
      twitter = new simpleTwitter(
          'wIQkLwkKt3V8Lw6w6kFURw'
        , 'mxaq7i2QMRWWvnGva6sXmvoz2Xn4oivDi5zYUrZub5c'
        , secretsObj.accessToken
        , secretsObj.accessTokenSecret
        , 3600);
    });
  };

  that.tweet = function(message) {
    twitter.post('statuses/update',
      { 'status' : message },
      function(error, data) { emitter.emit('status.update', data); }
    );
    return that;
  };

  // Plumbing
  that.on = function(event, action) { emitter.on(event, action); }

  return that;
};

module.exports = Twitter;
