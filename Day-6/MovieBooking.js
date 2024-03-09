class Seat {
  constructor(name) {
    this.name = name;
    this.isBooked = false;
    this.price = 100;
  }

  book() {
    this.isBooked = true;
  }

  unbook() {
    this.isBooked = false;
  }
}

class Screen {
  constructor(screenNumber, rows, cols) {
    this.screenNumber = screenNumber;
    this.seats = this.generateSeats(rows, cols);
  }

  generateSeats(rows, cols) {
    const seats = [];
    for (let i = 1; i <= rows; i++) {
      for (let j = 1; j <= cols; j++) {
        const seat = new Seat(`${String.fromCharCode(64 + i)}${j}`);
        seats.push(seat);
      }
    }
    return seats;
  }

  getOverlappingSeats(seatNames) {
    const overLappingSeats = [];
    for (let seatName of seatNames) {
      const seat = this.seats.find((seat) => seat.name === seatName);
      if (seat && seat.isBooked) overLappingSeats.push(seat);
    }

    return overLappingSeats;
  }

  getAvailableSeats() {
    return this.seats.filter((seat) => !seat.isBooked);
  }

  bookSeats(seatNames) {
    for (let seatName of seatNames) {
      const seat = this.seats.find((seat) => seat.name === seatName);
      if (seat) seat.book();
      else {
        console.log(`Selected seat - ${seatName} is not available`);
      }
    }
  }

  releaseSeats(blockedSeatNames) {
    for (let seatName of blockedSeatNames) {
      const seat = this.seats.find((seat) => seat.name === seatName);
      if (seat) seat.unbook();
      else {
        console.log(`Selected seat - ${seatName} is not available`);
      }
    }
  }
}

class Show {
  constructor(movie, startTime, duration, screen) {
    this.movie = movie;
    this.startTime = startTime;
    this.duration = duration;
    this.screen = screen;
  }
}

class Theatre {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.shows = [];
    this.screens = [];
  }

  addScreen(screen) {
    this.screens.push(screen);
  }

  addShow(show) {
    this.shows.push(show);
  }

  getAvailableShows() {
    const currentTime = new Date();
    const availableShows = this.shows.filter(
      (show) => new Date(show.startTime) > currentTime
    );
    return availableShows;
  }
}

class UserSession {
  constructor(user, screen) {
    this.user = user;
    this.screen = screen;
    this.selectedSeats = [];
    this.paymentAttempt = 0;
    this.MAX_PAYMENT_ATTEMPT = 3;
    this.active = true;
  }

  selectSeats(seatNames) {
    if (this.active) {
      const overLappingSeats = this.screen.getOverlappingSeats(seatNames);
      //   console.log("overLapping seats", overLappingSeats);

      if (overLappingSeats.length) {
        const overLappingSeatNames = overLappingSeats.map((seat) => seat.name);
        console.log(
          `Hi ${this.user}, some of your seats are already booked. Conflicting seats: ${overLappingSeatNames}`
        );
        return;
      }

      this.selectedSeats = seatNames;
      this.screen.bookSeats(seatNames);
    }
  }

  makePayment() {
    if (!this.active) {
      console.log("Session closed");
      return;
    }

    if (!this.selectedSeats.length) {
      console.log(`${this.user}: No seats selected`);
      return;
    }
    // assuming
    const paymentSuccess = true;
    if (paymentSuccess) {
      console.log(
        `Payment succeeded for ${this.user}. Selected seats: ${this.selectedSeats}`
      );
      this.active = false;
    } else {
      this.paymentAttempt++;
      console.log(
        `Payment failed for ${this.user}. Remaining attempts: ${
          this.MAX_PAYMENT_ATTEMPT - this.paymentAttempt
        }`
      );

      if (this.paymentAttempt >= this.MAX_PAYMENT_ATTEMPT) {
        console.log(
          `Maximum payment retries completed. Releasing the seats: ${this.selectedSeats}`
        );
        this.screen.releaseSeats(this.selectedSeats);
        this.active = false;
      }
    }
  }
}

// theatre
const pvr = new Theatre("PVR cinemas", "Chennai");

// screens
const screen1 = new Screen(1, 2, 2);
const screen2 = new Screen(2, 2, 2);

pvr.addScreen(screen1);
pvr.addScreen(screen2);

// shows
const morningShow = new Show(
  "Leo",
  new Date("2024-03-09T10:00"),
  180,
  pvr.screens[0]
);

const afternoonShow = new Show(
  "Leo",
  new Date("2024-03-09T13:00"),
  180,
  pvr.screens[1]
);

const nightShow = new Show(
  "Leo",
  new Date("2024-03-09T22:00"),
  180,
  pvr.screens[0]
);

pvr.addShow(morningShow);
pvr.addShow(afternoonShow);
pvr.addShow(nightShow);

// console.log(pvr.getAvailableShows());

// const mithun = new UserSession("Mithun", pvr.shows[1].screen);
// mithun.selectSeats(["A1", "A2"]);

// mithun.makePayment();
// mithun.makePayment();
// mithun.makePayment();
// // console.log(mithun);
// console.log(pvr.shows[1].screen.getAvailableSeats());

// 2 users logging in and booking different seats
// const sanika = new UserSession("Sanika", pvr.shows[1].screen);
// const nikhil = new UserSession("Nikhil", pvr.shows[1].screen);

// sanika.selectSeats(["A1", "A2"]);
// console.log(`Seats selected by ${sanika.user}: ${sanika.selectedSeats}`);

// nikhil.selectSeats(["B1"]);
// console.log(`Seats selected by ${nikhil.user}: ${nikhil.selectedSeats}`);
// // console.log(pvr.shows[1].screen.getAvailableSeats());

// sanika.makePayment();
// nikhil.makePayment();

// 2 users logging in and booking same seats
const sanika = new UserSession("Sanika", pvr.shows[1].screen);
const nikhil = new UserSession("Nikhil", pvr.shows[1].screen);

sanika.selectSeats(["A1", "A2"]);
console.log(`Seats selected by ${sanika.user}: ${sanika.selectedSeats}`);

nikhil.selectSeats(["A1"]);
console.log(`Seats selected by ${nikhil.user}: ${nikhil.selectedSeats}`);
// console.log(pvr.shows[1].screen.getAvailableSeats());

sanika.makePayment();
nikhil.makePayment();
