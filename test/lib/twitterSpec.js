'use strict';

var assert = require('assert');
var util = require('util');
var Twitter = require('../../lib/twitter');

describe('Twitter', function(){
  var twitter;

  beforeEach(function() {
    twitter = Twitter();
    twitter.init();
  });

  it('should be able to be created', function(){
    assert(twitter !== null);
  });

  describe('#tweet', function(){
    it('should be able to tweet a message', function(done){
      setTimeout(function() {
        var message = 'greetings from twitterSpec';
        twitter.tweet(message).on('status.update', function(data) {
          done();
        });
      }, 100);
    });
  });
});
