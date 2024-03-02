class NotificationObserver {
  // observer pattern
  notify(channelName, videoTitle) {
    console.log(`${this.name}: ${channelName} uploaded a video ${videoTitle}`);
  }

  notifyUpcomingVideo(channelName, videoTitle) {
    console.log(
      `${this.name}: ${channelName} next upcoming video ${videoTitle}`
    );
  }

  notifyComment(user, message) {
    console.log(
      `${this.name}: ${user.name} replied to your comment: ${message}`
    );
  }
}

class User extends NotificationObserver {
  constructor(name) {
    super();
    this.name = name;
  }
}

class YoutubeChannel {
  constructor(channelName, notifier) {
    this.channelName = channelName;
    this.subscribers = [];
    this.notifier = notifier;
  }

  subscribe(user) {
    console.log(`${user.name} subscribed to ${this.channelName}`);
    this.subscribers.push(user);
  }

  unsubscribe(user) {
    console.log(`${user.name} unsubscribed to ${this.channelName}`);
    this.subscribers = this.subscribers.filter(
      (subscriber) => subscriber !== user
    );
  }

  uploadVideo(videoTitle) {
    console.log("=".repeat(50));
    console.log(`New video uploaded by ${this.channelName}: ${videoTitle}`);
    console.log("=".repeat(50));
    this.notifier.notifyUploadedVideo(
      this.channelName,
      this.subscribers,
      videoTitle
    );
  }

  upcomingVideo(videoTitle) {
    console.log("=".repeat(50));
    console.log(`Upcoming video by ${this.channelName}: ${videoTitle}`);
    console.log("=".repeat(50));
    this.notifier.notifyUpcomingVideo(
      this.channelName,
      this.subscribers,
      videoTitle
    );
  }

  comment(user, message, subscriber) {
    this.notifier.notifyComment(user, message, subscriber);
  }
}

class NotificationSystem {
  notifyUploadedVideo(channelName, subscribers, videoTitle) {
    subscribers.forEach((subscriber) =>
      subscriber.notify(channelName, videoTitle)
    );
  }

  notifyUpcomingVideo(channelName, subscribers, videoTitle) {
    subscribers.forEach((subscriber) =>
      subscriber.notifyUpcomingVideo(channelName, videoTitle)
    );
  }

  notifyComment(user, message, subscriber) {
    subscriber.notifyComment(user, message);
  }
}

// Users
const anjani = new User("Anjani");
const raj = new User("Raj");
const akhil = new User("Akhil");

// notificationSystem
const youtubeNotification = new NotificationSystem();

// Channel
const pesto = new YoutubeChannel("Pesto", youtubeNotification);
const vasizebron = new YoutubeChannel("Zebron", youtubeNotification);

pesto.subscribe(anjani);
pesto.subscribe(raj);

pesto.uploadVideo("React class");

pesto.unsubscribe(raj);
pesto.subscribe(akhil);

pesto.uploadVideo("Node class");

vasizebron.subscribe(raj);
vasizebron.uploadVideo("LLD");

vasizebron.upcomingVideo("HLD");

vasizebron.comment(akhil, "thanks for the explanation", raj);

// NotificationObserver -> User
// User -> YoutubeChannel
// YoutubeChannel -> NotificationSystem
// NotificationSystem -> (Subscriber) NotificationObserver -> User
