var is = require('../index.js');
var test = require('tape');

test('is.equal(val)', function (t) {
  t.plan(2);
  var is10 = is.equal(10);
  t.equal(is10(10), true);
  t.equal(is10(15), false);
});

test('is.deepEqual(val)', function (t) {
  t.plan(2);
  var isHelloWorld = is.deepEqual({ hello: 'world' });
  t.equal(isHelloWorld({ hello: 'world' }), true);
  t.equal(isHelloWorld({ hello: 'town' }), false);
});

test('is.lt(num)', function (t) {
  t.plan(2);
  var isLt10 = is.lt(10);
  t.equal(isLt10(9), true);
  t.equal(isLt10(10), false);
});

test('is.lte(num)', function (t) {
  t.plan(2);
  var isLte17 = is.lte(17);
  t.equal(isLte17(17), true);
  t.equal(isLte17(18), false);
});

test('is.gt(num)', function (t) {
  t.plan(2);
  var isGt20 = is.gt(20);
  t.equal(isGt20(21), true);
  t.equal(isGt20(20), false);
});

test('is.gte(num)', function (t) {
  t.plan(2);
  var isGte21 = is.gte(20);
  t.equal(isGte21(20), true);
  t.equal(isGte21(19), false);
});

test('is.longer(length)', function (t) {
  t.plan(2);
  var isLongerThan10 = is.longer(10);
  t.equal(isLongerThan10('123456789012'), true);
  t.equal(isLongerThan10('123456789'), false);
});

test('is.shorter(length)', function (t) {
  t.plan(2);
  var isShorterThan10 = is.shorter(10);
  t.equal(isShorterThan10('123456789'), true);
  t.equal(isShorterThan10('123456789012'), false);
});

test('is.between(number, number)', function (t) {
  t.plan(2);
  var isBetween0And10 = is.between(0, 10);
  t.equal(isBetween0And10(5), true);
  t.equal(isBetween0And10(15), false);
});
