class Builder {
  constructor() {
    this.menuItems = [];
    this.deliveryAddress = null;
    this.phoneNo = null;
    this.cutlery = false;
  }

  addMenuItem(item) {
    this.menuItems.push(item);
    return this;
  }

  addDeliveryAddress(address) {
    this.deliveryAddress = address;
    return this;
  }

  addMsg(msg) {
    this.msg = msg;
    return this;
  }

  addPhoneNo(mobileNo) {
    this.phoneNo = mobileNo;
    return this;
  }

  addCutlery(isRequired) {
    this.cutlery = isRequired;
    return this;
  }

  build() {
    return new FoodOrder(this);
  }
}

class FoodOrder {
  constructor(builderObj) {
    this.menuItems = builderObj.menuItems;
    this.deliveryAddress = builderObj.deliveryAddress;
    this.phoneNo = builderObj.phoneNo;
    this.msg = builderObj.msg;
    this.cutlery = builderObj.cutlery;
  }

  display() {
    console.log("Menu Items:", this.menuItems);
    console.log("Delivery Address:", this.deliveryAddress);
    console.log("Message:", this.msg);
    console.log("Phone Number:", this.phoneNo);
    console.log("Cutlery:", this.cutlery);
  }
}

// const builderObj = new Builder()
//   .addMenuItem("Briyani")
//   .addMenuItem("Pizza")
//   .addDeliveryAddress("chennai")
//   .addCutlery(true)
//   .addMsg("be quicker");

// builderObj.addMenuItem("briyani");
// builderObj.addMenuItem("panneer");
// builderObj.addDeliveryAddress("chennai");
// builderObj.addPhoneNo("1234567890");
// builderObj.addMsg("give tender chicken piece");

const order = new Builder()
  .addMenuItem("Briyani")
  .addMenuItem("Pizza")
  .addDeliveryAddress("chennai")
  .addCutlery(true)
  .addMsg("be quicker");
//   .build();
console.log(order);
