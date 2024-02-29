const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('type SUM', () => {
    it('Sum 2.1 with 2.2', () => {
      assert.strictEqual(calculateNumber('SUM', 2.1, 2.2), 4);
    });

    it('add 9.999 with 0.1', () => {
      assert.strictEqual(calculateNumber('SUM', 9.999, 0.1), 10);
    });
  });

  describe('type SUBTRACT', () => {
    it('substract 1.0 from 1.0', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.0, 1.0), 0);
    });

    it('substract 1.4 from 3.3', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 3.3, 1.4), 2);
    });
  });

  describe('type DIVIDE', () => {
    it('divide 3.0 by 2.0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 3.0, 2.0), 1.5);
    });


    it('Test Error', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, 0.0), 'Error');
    });
  });
});