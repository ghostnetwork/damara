'use strict';

var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();
var util = require('util');
var File = require('./file');

var Secrets = function() {
  var that = {
    secrets: {
      accessToken: undefined,
      accessTokenSecret: undefined
    }
  };

  that.loadSecrets = function() {
    File.readContents('.twitter-api-secrets.json').on('done', function(info) {
      emitter.emit('done', info);
    });
    return that;
  },

  // Plumbing
  that.on = function(event, action) { emitter.on(event, action); }

  return that;
};

module.exports = Secrets;
