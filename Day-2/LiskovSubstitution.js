// Liskov's substitution Principle - If a child obj replaces a parent obj, it should work

class Item {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}

class Order {
  constructor() {
    this.items = [];
    this.status = "pending";
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(itemId) {
    this.items.pop();
  }

  getTotalPrice() {
    let totalPrice = 0;
    this.items.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });

    return totalPrice;
  }
}

// abstract class
class PaymentProcessor {
  constructor() {
    if (this.constructor === PaymentProcessor) {
      throw new Error("Payment Processor is an abstract class");
    }

    // console.log("inside parent payment processor");
  }

  authorizePayment(otp) {
    throw new Error("Authorize payment method is not implemented");
  }

  pay(order) {
    throw new Error("pay method is not implemented");
  }
}

class CreditPaymentProcessor extends PaymentProcessor {
  constructor(cardNumber) {
    super();
    this.cardNumber = cardNumber;
    this.verified = false;
  }

  authorizePayment(otp) {
    console.log(`Authorizing the credit payment using SMS otp ${otp}`);
    this.verified = true;
  }

  pay(order) {
    if (!this.verified) throw new Error("Not authorized");
    console.log(
      `Processing the credit payment with card number ${this.cardNumber}`
    );
    order.status = "paid";
  }
}

class DebitPaymentProcessor extends PaymentProcessor {
  constructor(cardNumber) {
    super();
    this.cardNumber = cardNumber;
    this.verified = false;
  }

  authorizePayment(otp) {
    console.log(`Authorizing the debit payment using SMS otp ${otp}`);
    this.verified = true;
  }

  pay(order) {
    if (!this.verified) throw new Error("Not authorized");
    console.log(
      `Processing the debit payment with card number ${this.cardNumber}`
    );
    order.status = "paid";
  }
}

class GpayPaymentProcessor extends PaymentProcessor {
  constructor(mobileNumber) {
    super();
    this.mobileNumber = mobileNumber;
  }

  pay(order) {
    console.log(
      `Processing the GPAY payment with mobile number ${this.mobileNumber}`
    );
    order.status = "paid";
  }
}

const tomato = new Item("tomato", 30, 3);
const onion = new Item("onion", 20, 5);

const order = new Order();
order.addItem(tomato);
order.addItem(onion);

console.log(order);
console.log("=".repeat(50));
// const paymentProcessor = new DebitPaymentProcessor("1234 5678 9012 3456");
// const paymentProcessor = new CreditPaymentProcessor("1234 5678 9012 3456");
const paymentProcessor = new GpayPaymentProcessor("9876543210");
// paymentProcessor.authorizePayment("1234");
paymentProcessor.pay(order);

console.log("=".repeat(50));
console.log(order);
//
