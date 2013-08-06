'use strict';

(function() {
  var EventEmitter = require('events').EventEmitter;
  var emitter = new EventEmitter();
  var fs = require('fs');
  
  var File = {
    // Public API
    readContents: function(file) {
      fs.readFile(file, 'utf-8', function(error, data) {
        if (error) throw error;
        emitter.emit('done', data);//{file: file, data: data});
      });
      return this;
    },

    // Plumbing
    on: function(event, action) { emitter.on(event, action); },
  };

  module.exports = File;
}());
