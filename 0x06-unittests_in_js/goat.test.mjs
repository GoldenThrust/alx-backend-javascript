import sinon from 'sinon';
import Utils from './utils.js';
import { expect } from 'chai';
import sendPaymentRequestToApi from './3-payment.js';


describe('sendPaymentRequestToApi', () => {
    let spy;

    beforeEach(() => {
        if (!spy) {
            spy = sinon.spy(console, 'log');
        }
    });

    afterEach(() => {
        spy.resetHistory();
    });

    it('sendPaymentRequestToAPI with 100, and 20', () => {
        sendPaymentRequestToApi(100, 20);
        expect(spy.calledWith('The total is: 120')).to.be.true;
        expect(spy.calledOnce).to.be.true;
    });

    it('sendPaymentRequestToAPI with 10, and 10', () => {
        sendPaymentRequestToApi(10, 10);
        expect(spy.calledWith('The total is: 20')).to.be.true;
        expect(spy.calledOnce).to.be.true;
    });
});