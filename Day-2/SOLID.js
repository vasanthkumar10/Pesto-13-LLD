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

  pay(paymentType, cardNumber) {
    if (paymentType === "debit") {
      console.log(
        `Processing the debit payment with card number ${cardNumber}`
      );
      this.status = "paid";
    } else if (paymentType === "credit") {
      console.log(
        `Processing the credit payment with card number ${cardNumber}`
      );
      this.status = "paid";
    } else {
      this.status = "failed";
      throw new Error(`Invalid payment gateway type ${paymentType}`);
    }
  }
}

const tomato = new Item("tomato", 30, 3);
const onion = new Item("onion", 20, 5);

const order = new Order();
order.addItem(tomato);
order.addItem(onion);

console.log(order);
console.log("=".repeat(50));
order.pay("credit", "1234 5678 9012 3456");
console.log("=".repeat(50));
console.log(order);
