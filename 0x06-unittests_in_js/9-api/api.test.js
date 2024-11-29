const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  const url = 'http://localhost:7865/';

  it('should return status code 200 for GET /', (done) => {
    request(url, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return "Welcome to the payment system" for GET /', (done) => {
    request(url, (err, res, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', () => {
  const baseUrl = 'http://localhost:7865/cart/';

  it('should return status code 200 for a valid cart ID', (done) => {
    request(`${baseUrl}12`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return "Payment methods for cart :id" for a valid cart ID', (done) => {
    request(`${baseUrl}12`, (err, res, body) => {
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return status code 404 for an invalid cart ID (non-numeric)', (done) => {
    request(`${baseUrl}hello`, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });

  it('should return "Cannot GET" message for an invalid cart ID', (done) => {
    request(`${baseUrl}hello`, (err, res, body) => {
      expect(body).to.include('Cannot GET /cart/hello');
      done();
    });
  });
});
