var komposit = require('komposit');
var equal = require('deep-equal');

var is = {};

is.undefined = function(flag) { return function(val) { return (val === undefined) === (flag === false ? false : true); }; };
is.defined = function(flag) { return is.undefined(flag === false ? true : false); };
is.typeof = function(type) { return function (val) { return typeof(val) === type; }; };
is.instanceof = function(type) { return function (val) { return val instanceof type; }; };

is.includes = function(needle) { return function(haystack) { return haystack.indexOf(needle); }; };
is.matches = function(regex) { return function(haystack) { return haystack.search(regex); }; };

var Time = function(t) { return +new Date(t); };
is.before = function(comp) { return function (date) { return Time(comp) < Time(date); }; };
is.after = function(comp) { return function (date) { return Time(comp) > Time(date); }; };

is.equal = function(comp) { return function (val) { return comp === val; }; };
is.deepEqual = function(comp, opts) { return function (val) { return equal(comp, val, opts); }; };
is.lt = function(comp) { return function (val) { return comp < val; }; };
is.lte = function(comp) { return function (val) { return comp <= val; }; };
is.gt = function(comp) { return function (val) { return comp > val; }; };
is.gte = function(comp) { return function (val) { return comp >= val; }; };

var isNumber = is.typeof('number');
is.between = function(a, b) {
  if (!isNumber(a)) a = Time(a);
  if (!isNumber(b)) b = Time(b);
  return komposit.and(is.gte(a), is.lte(b));
};

is.longer = function(comp) { return function(val) { return [].slice.apply(val).length > comp; }; };
is.shorter = function(comp) { return function(val) { return [].slice.apply(val).length < comp; }; };

module.exports = is;
