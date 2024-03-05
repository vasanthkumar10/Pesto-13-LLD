// Builder Pattern - Object creation pattern

class Subscription {
  constructor(builder) {
    this.plan = builder.plan;
    this.duration = builder.duration;
    this.autoRenew = builder.autoRenew;
  }

  display() {
    console.log("Plan: ", this.plan);
    console.log("Duration: ", this.duration);
    console.log("Auto renewal: ", this.autoRenew);
  }
}

class SubscriptionBuilder {
  constructor() {
    this.plan = "Basic";
    this.duration = "3 months";
    this.autoRenew = false;
  }

  setPlan(plan) {
    this.plan = plan;
    return this;
  }

  setDuration(duration) {
    this.duration = duration;
    return this;
  }

  enableAutoRenewal() {
    this.autoRenew = true;
    return this;
  }

  disableAutoRenewal() {
    this.autoRenew = false;
    return this;
  }

  build() {
    return new Subscription(this);
  }
}

const basicPlan = new SubscriptionBuilder().build();
// basicPlan.display();

const premiumPlan = new SubscriptionBuilder()
  .setDuration("6 months")
  .setPlan("Premium")
  .enableAutoRenewal()
  .build();

premiumPlan.display();
