'use strict';

require('verdoux');
var assert = require('assert');
var IPTools = require('../../lib/iptools');

describe('IPTools', function(){
  var ipTools;

  beforeEach(function() {
    ipTools = IPTools();
  });

  it('should be able to be created', function(){
    assert(existy(ipTools));
  });

  describe('#myIpAddress', function(){
    it('should return an existy() value', function(){
      var result = ipTools.myIpAddress();
      assert(existy(result));
    });

    it('should return an array with at least one element in it', function(){
      var ipAddresses = ipTools.myIpAddress();
      assert(Array.isArray(ipAddresses));
      assert(ipAddresses.length > 0);
    });
  });
});
