'use strict';

var assert = require('assert');
var Damara = require('..');

var damara;

damara = new Damara();

describe('Damara', function(){

  it('should not fail', function(){
    var clone = damara.create();
    assert(clone !== null);
  });
});
