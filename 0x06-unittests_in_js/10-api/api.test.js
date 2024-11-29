const request = require('request');
const { expect } = require('chai');

const baseUrl = 'http://localhost:7865';

describe('Index page', () => {
  it('should return status code 200 for GET /', (done) => {
    request(`${baseUrl}/`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return "Welcome to the payment system" for GET /', (done) => {
    request(`${baseUrl}/`, (err, res, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', () => {
  it('should return status code 200 for a valid cart ID', (done) => {
    request(`${baseUrl}/cart/12`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return "Payment methods for cart :id" for a valid cart ID', (done) => {
    request(`${baseUrl}/cart/12`, (err, res, body) => {
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return status code 404 for an invalid cart ID', (done) => {
    request(`${baseUrl}/cart/hello`, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});

describe('Available payments page', () => {
  it('should return status code 200 for GET /available_payments', (done) => {
    request(`${baseUrl}/available_payments`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct payment methods object', (done) => {
    request(`${baseUrl}/available_payments`, { json: true }, (err, res, body) => {
      expect(body).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      });
      done();
    });
  });
});

describe('Login page', () => {
  it('should return status code 200 and welcome message for POST /login with userName', (done) => {
    request.post(
      `${baseUrl}/login`,
      {
        json: { userName: 'Betty' },
      },
      (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Welcome Betty');
        done();
      }
    );
  });

  it('should return status code 400 if userName is missing', (done) => {
    request.post(
      `${baseUrl}/login`,
      {
        json: {},
      },
      (err, res, body) => {
        expect(res.statusCode).to.equal(400);
        expect(body).to.equal('Missing userName');
        done();
      }
    );
  });
});
