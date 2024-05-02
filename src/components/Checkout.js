import React, { useState } from 'react';
import { StripePaymentStrategy, BraintreePaymentStrategy, PaypalPaymentStrategy } from '../services';
import {paymentStrategies} from '../constants';

const Checkout = () => {
    const [amount, setAmount] = useState(0);
    const [paymentStrategy, setPaymentStrategy] = useState(new StripePaymentStrategy());

  const handlePayment = () => {
    paymentStrategy.pay(amount);
  };


const handleStrategyChange = (strategy) => {
    switch (strategy) {
        case paymentStrategies.STRIPE:
        setPaymentStrategy(new StripePaymentStrategy());
        break;
        case paymentStrategies.PAYPAL:
        setPaymentStrategy(new PaypalPaymentStrategy());
        break;
        case paymentStrategies.BRAINTREE:
        setPaymentStrategy(new BraintreePaymentStrategy());
        break;
        default:
        throw new Error("Unsupported payment strategy");
    }
    };
  return (
    <div>
    <h2>Choose your payment method:</h2>
    <select onChange={(e) => handleStrategyChange(e.target.value)}>
      <option value={paymentStrategies.STRIPE}>Stripe</option>
      <option value={paymentStrategies.PAYPAL}>PayPal</option>
      <option value={paymentStrategies.BRAINTREE}>Braintree</option>
    </select>
    <input
      type="number"
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
      placeholder="Amount to pay"
    />
    <button onClick={handlePayment}>Pay</button>
  </div>
  );
};

export default Checkout;
