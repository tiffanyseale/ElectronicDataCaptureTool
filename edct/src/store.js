import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store ({
  state:
  {
    loggedIn: false,
    userID: 0,
    projectIDs: [],
    projects: [],
    projectID: 0,
    experimentIDs: [],
    experimentID: 0,
    sampleSetIDs: [],
    sampleSet: 0

  },
  getters: {
    isLoggedIn: state => {
      return state.loggedIn;
    }
  },
  mutations: {
    logIn (state) {
      state.loggedIn = !state.loggedIn;
    },
    setUserID (state, userID) {
      state.userID = userID;
    },
    setProjectIDs (state, projectID) {
      state.projectIDs.push(projectID);
    }
  }
});