const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('add 2.1 with 1.5', () => {
    assert.strictEqual(calculateNumber(2.1, 1.5), 4);
  });

  it('add 9.999 with 0.1', () => {
    assert.strictEqual(calculateNumber(9.999, 0.1), 10);
  });

  it('add 1 with 3', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('add 1 with 3.7', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('add 1.2 with 3.7', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('add 1.5 with 3.7', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});