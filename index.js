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
