const request = require('request');
const { expect } = require('chai');

describe('API test', () => {
  const BASE_URL = 'http://localhost:7865';

  it('GET / returns correct response', (done) => {
    request.get(`${BASE_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('GET /cart/:id returns correct response when :id is a number', (done) => {
    request.get(`${BASE_URL}/cart/47`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 47');
      done();
    });
  });

  it('GET /cart/:id returns 404 response when :id is NOT a number', (done) => {
    request.get(`${BASE_URL}/cart/HELLO_WORLD`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
});