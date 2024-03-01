import sinon from 'sinon';
import Utils from './utils.js';
import { expect } from 'chai';
import sendPaymentRequestToApi from './3-payment.js';


describe('sendPaymentRequestToApi', () => {
  it('send a payment request to the API', () => {
    const spy = sinon.spy(console, 'log');
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);

    sendPaymentRequestToApi(100, 20);
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;
    expect(stub.calledOnce).to.be.true;
    expect(spy.calledWith('The total is: 10')).to.be.true;
    expect(spy.calledOnce).to.be.true;
    spy.restore();
    stub.restore();
  });
});