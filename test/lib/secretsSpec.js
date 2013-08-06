'use strict';

require('verdoux');
var assert = require('assert');
var util = require('util');
var Secrets = require('../../lib/secrets');

describe('Secrets', function(){
  var secrets;

  beforeEach(function() {
    secrets = Secrets();
  });

  it('should be able to be created', function(){
    assert(secrets !== null);
  });

  describe('#loadSecrets', function(){
    it('should return an existy value', function(done){
      secrets.loadSecrets().on('done', function(secrets) {
        assert(existy(secrets));
        done();
      });
    });
  });
});
