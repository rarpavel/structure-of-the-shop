import { PaymentStrategy } from "./PaymentStrategy";

export class PaypalPaymentStrategy extends PaymentStrategy {
    pay(amount) {
      alert(`Paying ${amount} using PayPal`);
      console.log(`Paying ${amount} using PayPal`);
    }
  }