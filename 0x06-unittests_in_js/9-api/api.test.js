const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  const baseUrl = 'http://localhost:7865';

  it('should return status code 200 for /', (done) => {
    request.get(`${baseUrl}/`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return "Welcome to the payment system" for /', (done) => {
    request.get(`${baseUrl}/`, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', () => {
  const baseUrl = 'http://localhost:7865/cart';

  it('should return payment methods for a valid cart ID', (done) => {
    request.get(`${baseUrl}/12`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return 400 for an invalid cart ID', (done) => {
    request.get(`${baseUrl}/abc`, (error, response, body) => {
      expect(response.statusCode).to.equal(400);
      expect(body).to.equal('Invalid cart ID');
      done();
    });
  });
});
