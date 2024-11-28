const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 when inputs are 1.4 and 4.5', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should return 5 when inputs are 1.2 and 3.7', () => {
      assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
    });

    it('should return -1 when inputs are -1.5 and -0.4', () => {
      assert.strictEqual(calculateNumber('SUM', -1.5, -0.4), -1);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 when inputs are 1.4 and 4.5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should return 2 when inputs are 1.7 and -0.2', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.7, -0.2), 2);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 when inputs are 1.4 and 4.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return "Error" when dividing by 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    it('should return -1 when inputs are -3.2 and 3', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -3.2, 3), -1);
    });
  });

  describe('Invalid type', () => {
    it('should throw an error for invalid type', () => {
      assert.throws(() => calculateNumber('MULTIPLY', 1.4, 4.5), {
        name: 'Error',
        message: 'Invalid type',
      });
    });
  });
});
