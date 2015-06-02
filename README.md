# Functional Predicates

Library for creating common predicates.

## Useage

```js
var is = require('functional-predicates');

var isString = is.typeof('string')
  // isString('hello') === true

var isObject = is.instanceof(Object)
  // isObject(new Object()) === true

var isHello = is.equal('hello')
  // isHello('hello') === true

var isLt7 = is.lt(7)
  // isLt7(3) === true

var isGt12 = is.gt(12)
  // isGt12(7) === false

var isAfterJul = is.before('July 1, 2015')
  // isAfterJul('August 22, 2015') === true

var isBeforeDec = is.before('Dec 31, 2015')
  // isBeforeDec('August 22, 2015') === true

var isBetween20And45 = is.between(20, 45)
  // isBetween20And45(30) === true

var isBetweenJulAndDec = is.between('July 1, 2015', 'Dec 31, 2015')
  // isBetweenJulAndDec('August 22, 2015') === true

var isLongerThan10 = is.longer(10)
  // isLongerThan10('hello') === false

var isShorterThan12 = is.shorter(12)
  // isShorterThan12([1,2]) === true

var hasHello = is.includes('hello')
  // hasHello('hello world') === true

var has7 = is.includes(7)
  // has7([6,7,8]) === true

var hasNumbers = is.matches()
  // hasNumbers('123abc') === true
```

## Library

- typeof(type);
- instanceof(object);
- equal(value)
- lt(num);
- gt(num);
- between(num, num);
- before(date); // .before('month', 10)
- after(date); // .after({ hours: 10, minutes: 45 })
- longer(length);
- shorter(length);
- includes(substr);
- matches(regex);
