import { PaymentStrategy } from "./PaymentStrategy";

export class StripePaymentStrategy extends PaymentStrategy {
    pay(amount) {
      alert(`Paying ${amount} using Stripe`);
      console.log(`Paying ${amount} using Stripe`);
    }
  }