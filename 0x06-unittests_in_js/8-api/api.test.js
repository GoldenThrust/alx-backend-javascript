const request = require('request');
const { expect } = require('chai');

describe('API test', () => {
  const BASE_URL = 'http://localhost:7865';

  it('GET / returns correct response', (done) => {
    request.get(`${BASE_URL}/`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});