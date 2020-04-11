var array = require('./array/index');
var url = require('./url/index');
var fn = require('./fn/index');
var ds = require('./ds/index');
module.exports = {
  ...array,
  ...url,
  ...fn,
  ...ds
};