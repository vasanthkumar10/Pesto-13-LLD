// define the states of transaction

const states = {
  INITIALIZED: "initialized",
  PENDING: "pending",
  PROCESSING: "processing",
  COMPLETED: "completed",
  FAILED: "failed",
  REVERSED: "reversed",
};

// allowed transitions for each state
const transitions = {
  [states.INITIALIZED]: {
    initiate: states.PENDING,
  },
  [states.PENDING]: {
    process: states.PROCESSING,
    fail: states.FAILED,
  },
  [states.PROCESSING]: {
    complete: states.COMPLETED,
    fail: states.FAILED,
    reverse: states.REVERSED,
  },
  [states.COMPLETED]: {
    refund: states.PROCESSING,
  },
  [states.FAILED]: {
    retry_customer: states.PENDING,
    retry_bank: states.PROCESSING,
  },
};

// console.log("transitions", transitions);

// Initial State
let currentState = states.INITIALIZED;

// fn to handle the transitions
function transition(event) {
  const nextState = transitions[currentState][event];
  //   console.log("next state", nextState);
  if (nextState) {
    console.log(`Transitioning from ${currentState} to ${nextState}`);
    currentState = nextState;
  } else {
    console.log(`Invalid transition from ${currentState} to ${event}`);
  }
}

// simulate the payment
function simulatePayment() {
  transition("initiate");
  transition("process");
  //   //   transition("fail");
  transition("initiate");
}

simulatePayment();
