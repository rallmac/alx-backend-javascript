const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with "SUM", 100, and 20', () => {
    // Create a spy for Utils.calculateNumber
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Validate that Utils.calculateNumber was called once with the correct arguments
    expect(calculateNumberSpy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;

    // Restore the original method
    calculateNumberSpy.restore();
  });
});
