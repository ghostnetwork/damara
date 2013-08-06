'use strict';

var os = require('os');

var IPTools = function() {
  var that = {};

  that.myIpAddress = function() {
    // cribbed from: http://goo.gl/enSy7E
    var interfaces = os.networkInterfaces();
    var addresses = [];
    for (var k in interfaces) {
        for (var k2 in interfaces[k]) {
            var address = interfaces[k][k2];
            if (address.family == 'IPv4' && !address.internal) {
                addresses.push(address.address);
            }
        }
    }
    return addresses;
  };

  return that;
};

module.exports = IPTools;
