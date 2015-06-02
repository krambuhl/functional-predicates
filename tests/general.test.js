var is = require('../index.js');
var test = require('tape');

test('is.undefined()', function (t) {
  t.plan(2);
  var isUndefined = is.undefined();
  t.equal(isUndefined(undefined), true);
  t.equal(isUndefined(100), false);
});

test('is.undefined(false)', function (t) {
  t.plan(2);
  var isDefined = is.undefined(false);
  t.equal(isDefined(undefined), false);
  t.equal(isDefined(100), true);
});

test('is.defined()', function (t) {
  t.plan(2);
  var isDefined = is.defined();
  t.equal(isDefined(undefined), false);
  t.equal(isDefined(100), true);
});

test('is.defined(false)', function (t) {
  t.plan(2);
  var isUndefined = is.defined(false);
  t.equal(isUndefined(undefined), true);
  t.equal(isUndefined(100), false);
});

test('is.typeof(string)', function (t) {
  t.plan(4);
  t.equal(is.typeof('number')(100), true);
  t.equal(is.typeof('number')('test'), false);
  t.equal(is.typeof('string')(100), false);
  t.equal(is.typeof('string')('test'), true);
});

test('is.instanceof(type)', function (t) {
  t.plan(3);
  t.equal(is.instanceof(Date)(new Date()), true);
  t.equal(is.instanceof(Date)(100), false);
  t.equal(is.instanceof(Array)([]), true);
});

test('is.includes(string)', function (t) {
  t.plan(4);
  t.equal(is.includes('hello')('hello world'), true);
  t.equal(is.includes('hello')('goodbye world'), false);
  t.equal(is.includes(1)([1, 2, 3]), true);
  t.equal(is.includes(1)([6, 7, 8]), false);
});

test('is.matches(regex)', function (t) {
  t.plan(2);
  t.equal(is.matches(/hello/i)('well, hello world'), true);
  t.equal(is.matches(/hello/i)('goodbye world'), false);
});
