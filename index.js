var equal = require('deep-equal');
var is = {};

is.undefined = function(flag) {
  flag = (flag === false ? false : true);
  return function(val) { return (val === undefined) === flag; };
};

is.defined = function(flag) { return is.undefined(flag === false ? true : false); };
is.typeof = function(type) { return function (val) { return typeof val === type; }; };
is.instanceof = function(type) { return function (val) { return val instanceof type; }; };

is.includes = function(needle) { return function(haystack) { return haystack.indexOf(needle) !== -1; }; };
is.matches = function(regex) { return function(haystack) { return haystack.search(regex) !== -1; }; };

var Time = function(t) { return +new Date(t); };
is.before = function(comp) { return function (date) { return Time(date) < Time(comp); }; };
is.after = function(comp) { return function (date) { return Time(date) > Time(comp); }; };

is.equal = function(comp) { return function (val) { return comp === val; }; };
is.deepEqual = function(comp, opts) { return function (val) { return equal(comp, val, opts); }; };
is.lt = function(comp) { return function (val) { return comp > val; }; };
is.lte = function(comp) { return function (val) { return comp >= val; }; };
is.gt = function(comp) { return function (val) { return comp < val; }; };
is.gte = function(comp) { return function (val) { return comp <= val; }; };

var isNumber = is.typeof('number');
is.between = function(a, b) {
  var min = is.gte(!isNumber(a) ? Time(a) : a);
  var max = is.lte(!isNumber(b) ? Time(b) : b);
  return function (v) {
    var val = !isNumber(v) ? Time(v) : v;
    return min(val) && max(val);
  };
};

is.longer = function(comp) { return function(val) { return [].slice.apply(val).length > comp; }; };
is.shorter = function(comp) { return function(val) { return [].slice.apply(val).length < comp; }; };

module.exports = is;
