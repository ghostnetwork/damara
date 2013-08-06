'use strict';

require('verdoux');
var assert = require('assert');
var util = require('util');
var File = require('../../lib/file');

describe('File', function(){
  var fileToRead = 'package.json';

  it('should be able to be loaded', function(){
    assert(File !== null);
  });

  describe('#readContents', function(){
    it('should receive an event when the contents of a file have finished being read', function(done){
      File.readContents(fileToRead)
        .on('done', function(info) {
          done();
        });
      // Test will timeout if the event handler isn't called
    });

    it('should return an existy() value', function(){
      File.readContents(fileToRead)
        .on('done', function(info) {
          assert(existy(info));
          done();
        });
    });
  });
});
