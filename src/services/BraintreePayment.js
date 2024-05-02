import { PaymentStrategy } from "./PaymentStrategy";

export class BraintreePaymentStrategy extends PaymentStrategy {
    pay(amount) {
      alert(`Paying ${amount} using Braintree`);
      console.log(`Paying ${amount} using Braintree`);
    }
  }