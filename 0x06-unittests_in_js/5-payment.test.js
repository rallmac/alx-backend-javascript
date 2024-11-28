const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleLogSpy;

  beforeEach(() => {
    // Spy on console.log before each test
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore console.log after each test
    consoleLogSpy.restore();
  });

  it('should log "The total is: 120" when called with 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);

    // Verify console.log was called with the correct string
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 120')).to.be.true;

    // Verify console.log was called exactly once
    expect(consoleLogSpy.calledOnce).to.be.true;
  });

  it('should log "The total is: 20" when called with 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);

    // Verify console.log was called with the correct string
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 20')).to.be.true;

    // Verify console.log was called exactly once
    expect(consoleLogSpy.calledOnce).to.be.true;
  });
});
