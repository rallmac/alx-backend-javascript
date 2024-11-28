const request = require('request');
const { expect } = require('chai');
const app = require('./api'); // Import app for testing

const BASE_URL = 'http://localhost:7865';

describe('API Endpoints', () => {
  let server;

  before((done) => {
    server = app.listen(7865, done); // Start the server before tests
  });

  after((done) => {
    server.close(done); // Close the server after tests
  });

  describe('GET /available_payments', () => {
    it('should return available payment methods', (done) => {
      request.get(`${BASE_URL}/available_payments`, (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(JSON.parse(body)).to.deep.equal({
          payment_methods: {
            credit_cards: true,
            paypal: false,
          },
        });
        done();
      });
    });
  });

  describe('POST /login', () => {
    it('should return Welcome :username when userName is provided', (done) => {
      const options = {
        url: `${BASE_URL}/login`,
        json: true,
        body: { userName: 'Betty' },
      };

      request.post(options, (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Welcome Betty');
        done();
      });
    });

    it('should return 400 and error message when userName is missing', (done) => {
      const options = {
        url: `${BASE_URL}/login`,
        json: true,
        body: {},
      };

      request.post(options, (err, res, body) => {
        expect(res.statusCode).to.equal(400);
        expect(body).to.equal('Missing userName');
        done();
      });
    });
  });
});
