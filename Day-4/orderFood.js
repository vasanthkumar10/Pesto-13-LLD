class FoodOrder {
  constructor(menuItems, deliveryAddress, msg, phoneNo, cutlery = false) {
    this.menuItems = menuItems;
    this.deliveryAddress = deliveryAddress;
    this.phoneNo = phoneNo;
    this.msg = msg;
    this.cutlery = cutlery;
  }

  display() {
    console.log("Menu Items:", this.menuItems);
    console.log("Delivery Address:", this.deliveryAddress);
    console.log("Message:", this.msg);
    console.log("Phone Number:", this.phoneNo);
    console.log("Cutlery:", this.cutlery);
  }
}

// order
const order = new FoodOrder(
  ["briyani", "curd rice"],
  "chennai",
  "",
  "1234567890",
  true
);
console.log(order);
