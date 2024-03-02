// Facade - structural design pattern
// Provides a simplified interface instead of complex classes, library, framework

class BaseAuthSystem {
  authenticate(username) {
    throw new Error("Authenticate method is not implemented");
  }
}

class GoogleAuthProvider extends BaseAuthSystem {
  authenticate(username) {
    console.log(`Authenticating user - ${username} using google`);
  }
}

class GithubAuthProvider extends BaseAuthSystem {
  authenticate(username) {
    console.log(`Authenticating user - ${username} using github`);
  }
}

class FacebookAuthProvider extends BaseAuthSystem {
  authenticate(username) {
    console.log(`Authenticating user - ${username} using facebook`);
  }
}

// facade layer
class Auth {
  constructor() {
    this.googleAuth = new GoogleAuthProvider();
    this.githubAuth = new GithubAuthProvider();
    this.fbAuth = new FacebookAuthProvider();
  }

  google(username) {
    this.googleAuth.authenticate(username);
  }

  github(username) {
    this.githubAuth.authenticate(username);
  }

  facebook(username) {
    this.fbAuth.authenticate(username);
  }
}

const auth = new Auth(); // only once -> using singleton

// auth.github("vasanth");
// auth.google("vasanth");
auth.facebook("vasanth");
