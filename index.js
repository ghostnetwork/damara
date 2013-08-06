'use strict';

require('verdoux');
var util = require('util');
var IPTools = require('./lib/iptools');
var Twitter = require('./lib/twitter');

var Damara = function() {
  var that = {};

  that.tweetMyIpAddress = function() {
    var myIpAddress = IPTools().myIpAddress();
    var twitter = Twitter();
    twitter.init();
    setTimeout(function() {
      twitter.tweet('RaspberryPi IP address: ' + myIpAddress);
    }, 100);
  };

  return that;
};

module.exports = Damara;


'use strict';


function Damara(options) {
  this._options = options;
};

Damara.prototype.log = function(message) {
  console.log.message(message);
}

Damara.prototype.create = function(options) {
  return new Damara(options);
};

module.exports = Damara;
