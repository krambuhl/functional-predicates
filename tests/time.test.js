var is = require('../index.js');
var test = require('tape');

test('is.before(date)', function (t) {
  t.plan(2);
  var isBeforeDec = is.before('Dec 31, 2015')
  t.equal(isBeforeDec('August 22, 2015'), true);
  t.equal(isBeforeDec('August 22, 2016'), false);
});

test('is.after(date)', function (t) {
  t.plan(2);
  var isAfterJul = is.after('July 1, 2015')
  t.equal(isAfterJul('August 22, 2015'), true);
  t.equal(isAfterJul('August 22, 2014'), false);
});

test('is.between(date, date)', function (t) {
  t.plan(2);
  var isBetweenJulAndDec = is.between('July 1, 2015', 'Dec 31, 2015')
  t.equal(isBetweenJulAndDec('August 22, 2015'), true);
  t.equal(isBetweenJulAndDec('August 22, 2016'), false);
});
