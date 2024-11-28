const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 when inputs are 1.4 and 4.5', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should return 5 when inputs are 1.2 and 3.7', () => {
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    });

    it('should return -1 when inputs are -1.5 and -0.4', () => {
      expect(calculateNumber('SUM', -1.5, -0.4)).to.equal(-1);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 when inputs are 1.4 and 4.5', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should return 2 when inputs are 1.7 and -0.2', () => {
      expect(calculateNumber('SUBTRACT', 1.7, -0.2)).to.equal(2);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 when inputs are 1.4 and 4.5', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return "Error" when dividing by 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('should return -1 when inputs are -3.2 and 3', () => {
      expect(calculateNumber('DIVIDE', -3.2, 3)).to.equal(-1);
    });
  });

  describe('Invalid type', () => {
    it('should throw an error for invalid type', () => {
      expect(() => calculateNumber('MULTIPLY', 1.4, 4.5)).to.throw('Invalid type');
    });
  });
});

