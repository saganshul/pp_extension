'use strict';

var Arg = require('./arg-1.4.js');

function pp(value) {
  Arg.parse(value)
}

module.exports = {pp: pp}
