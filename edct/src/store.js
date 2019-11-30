export const store = {
    state: {
      loggedIn: false
    },
    PassUserAuth(passed) {
      this.state.loggedIn = passed;
    }
  };