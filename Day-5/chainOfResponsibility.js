// class PurchaseRequest {
//   constructor(amount) {
//     this.amount = amount;
//     this.details = "OIL COMPANY DEAL";
//   }
// }

// class Manager {
//   constructor() {
//     this.approvalLimit = 5000;
//   }

//   processRequest(request) {
//     if (request.amount <= this.approvalLimit) {
//       console.log(
//         `${this.constructor.name} approved the purchase request - ${request.amount}`
//       );
//     } else {
//       console.log(
//         `${this.constructor.name} doesn't have permission to approve - ${request.amount}`
//       );
//     }
//   }
// }

// class Director {
//   constructor() {
//     this.approvalLimit = 50000;
//   }

//   processRequest(request) {
//     if (request.amount <= this.approvalLimit) {
//       console.log(
//         `${this.constructor.name} approved the purchase request - ${request.amount}`
//       );
//     } else {
//       console.log(
//         `${this.constructor.name} doesn't have permission to approve - ${request.amount}`
//       );
//     }
//   }
// }

// class CEO {
//   constructor() {
//     this.approvalLimit = 500000;
//   }

//   processRequest(request) {
//     if (request.amount <= this.approvalLimit) {
//       console.log(
//         `${this.constructor.name} approved the purchase request - ${request.amount}`
//       );
//     } else {
//       console.log(
//         `${this.constructor.name} doesn't have permission to approve - ${request.amount}`
//       );
//     }
//   }
// }

// class BoardDirector {
//   processRequest(request) {
//     console.log(
//       `${this.constructor.name} approved the purchase request - ${request.amount}`
//     );
//   }
// }

// const request = new PurchaseRequest(6000000000);

// // people
// const manager = new Manager();
// const director = new Director();
// const ceo = new CEO();
// const owner = new BoardDirector();

// // employee
// manager.processRequest(request);
// director.processRequest(request);
// ceo.processRequest(request);
// owner.processRequest(request);

// CHAIN OF RESPONSIBILITY
class PurchaseRequest {
  constructor(amount) {
    this.amount = amount;
    this.details = "OIL COMPANY DEAL";
  }
}

class Approver {
  constructor(approvalLimit) {
    this.approvalLimit = approvalLimit;
    this.boss = null;
    this.availability = true;
  }

  setBoss(boss) {
    this.boss = boss;
  }

  setAvailability(isAvailable) {
    if (this.constructor.name === "CEO") return;
    this.availability = isAvailable;
  }

  processRequest(request) {
    if (this.constructor.name === "BoardDirector") {
      console.log(
        `${this.constructor.name} approved the purchase request - ${request.amount}`
      );
      return;
    }

    if (!this.availability && this.boss) {
      this.boss.processRequest(request);
      return;
    }

    if (request.amount <= this.approvalLimit) {
      console.log(
        `${this.constructor.name} approved the purchase request - ${request.amount}`
      );
    } else if (this.boss) {
      this.boss.processRequest(request);
    } else {
      console.log(
        `${this.constructor.name} doesn't have permission to approve - ${request.amount}`
      );
    }
  }
}

class Manager extends Approver {
  constructor() {
    super(5000); // approval limit
  }
}

class Director extends Approver {
  constructor() {
    super(50000); // approval limit
  }
}

class CEO extends Approver {
  constructor() {
    super(500000); // approval limit
  }
}

class BoardDirector extends Approver {
  constructor() {
    super(Number.MAX_SAFE_INTEGER); // approval limit
  }
}

const request = new PurchaseRequest(6000);

// people
const manager = new Manager();
const director = new Director();
const ceo = new CEO();
const owner = new BoardDirector();

// set org structure
manager.setBoss(director);
director.setBoss(ceo);
ceo.setBoss(owner);

director.setAvailability(false);
ceo.setAvailability(false);

manager.processRequest(request);
