const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('type SUM', () => {
    it('Sum 2.1 with 2.2', () => {
      expect(calculateNumber('SUM', 2.1, 2.2)).to.equal(4);
    });

    it('add 9.999 with 0.1', () => {
      expect(calculateNumber('SUM', 9.999, 0.1)).to.equal(10);
    });
  });

  describe('type SUBTRACT', () => {
    it('substract 1.0 from 1.0', () => {
      expect(calculateNumber('SUBTRACT', 1.0, 1.0)).to.equal(0);
    });

    it('substract 1.4 from 3.3', () => {
      expect(calculateNumber('SUBTRACT', 3.3, 1.4)).to.equal(2);
    });
  });

  describe('type DIVIDE', () => {
    it('divide 3.0 by 2.0', () => {
      expect(calculateNumber('DIVIDE', 3.0, 2.0)).to.equal(1.5);
    });


    it('Test Error', () => {
      expect(calculateNumber('DIVIDE', 0.0, 0.0)).to.equal('Error');
    });
  });
});