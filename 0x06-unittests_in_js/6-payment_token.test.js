const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
    it('getPaymentTokenFromAPI(true)', (done) => {
        getPaymentTokenFromAPI(true)
            .then((res) => {
                expect(res.data).to.deep.equal('Successful response from the API');
                done();
            });
    });
});