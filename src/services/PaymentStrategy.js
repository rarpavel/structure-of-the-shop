
export class PaymentStrategy {
    pay() {
      alert("Payment method must implement pay function");
      throw new Error("Payment method must implement pay function");
    }
  }