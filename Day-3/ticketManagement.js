// Strategy -> behavioural pattern
// It helps to select the alogirithms in runtime using common interface

const { generateId } = require("./utils");
const { FIFO, LIFO, RANDOM } = require("./Strategy");

class SupportTicket {
  constructor(customer, issue) {
    this.id = generateId();
    this.customer = customer;
    this.issue = issue;
  }
}

class CustomerSupport {
  constructor() {
    this.tickets = [];
  }

  create(customer, issue) {
    const ticket = new SupportTicket(customer, issue);
    this.tickets.push(ticket);
  }

  process(ticket) {
    console.log(
      `Processing the ticket ${ticket.id} from ${ticket.customer} about an issue ${ticket.issue}`
    );
  }

  ticketProcessor(strategy) {
    const tickets = strategy.orderTickets(this.tickets);
    tickets.forEach((ticket) => this.process(ticket));

    // if (strategy === "FIFO") {
    //   this.tickets.forEach((ticket) => this.process(ticket));
    // } else if (strategy === "LIFO") {
    //   this.tickets.reverse().forEach((ticket) => this.process(ticket));
    // } else if (strategy === "RANDOM") {
    //   const shuffledTickets = this.tickets.sort(() => Math.random() - 0.5);
    //   shuffledTickets.forEach((ticket) => this.process(ticket));
    // }
  }
}

const crm = new CustomerSupport();

crm.create("vasi", "food quality is not good");
crm.create("suraj", "order button not working");
crm.create("nikhil", "zomato is the worst app");

crm.ticketProcessor(FIFO);
console.log("-".repeat(100));
crm.ticketProcessor(LIFO);
console.log("-".repeat(100));
crm.ticketProcessor(RANDOM);
