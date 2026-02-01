const assert = require('assert');
const ArithmeticOps = require('../arithmetic');

describe('Validating ArithmeticOps class', () => {

  it('square of (3) should return 9', () => {
    assert.equal(ArithmeticOps.square(3), 9);
  });

  it('square of (12) should return 144', () => {
    assert.equal(ArithmeticOps.square(12), 144);
  });

  it('square of (4) should NOT return 8', () => {
    assert.notEqual(ArithmeticOps.square(4), 8);
  });

  it('percentage(20, 100) should return 20', () => {
    assert.equal(ArithmeticOps.percentage(20, 100), 20);
  });

  it('percentage(20, 50) should NOT return 15', () => {
    assert.notEqual(ArithmeticOps.percentage(20, 50), 15);
  });

});
