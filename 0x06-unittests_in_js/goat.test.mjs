import sinon from 'sinon';
import Utils from './utils.js';
import { expect } from 'chai';
import sendPaymentRequestToApi from './3-payment.js';

describe('sendPaymentRequestToApi', () => {
    it('should send a payment request to the API', () => {
        const spy = sinon.spy(Utils)
    
        sendPaymentRequestToApi(100, 20);
        expect(spy.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
        expect(spy.calculateNumber.calledOnce).to.be.true;
        spy.calculateNumber.restore();
    });
})