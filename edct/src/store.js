import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store ({
  state:
  {
    loggedIn: false,
    userID: 0,
    userName: '',
    projectIDs: [],
    projects: [],
    chosenProject: {},
    experimentIDs: [],
    experiments: [],
    chosenExperiment: {},
    sampleSetIDs: []
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
    setUser (state, userID, userName) {
      state.userID = userID;
      state.userName = userName;
    },
    setProjectIDs (state, projectID) {
      state.projectIDs.push(projectID);
    },
    setProjectID (state, project) {
      state.chosenProject = project;
    },
    setExperimentIDs (state, experimentID) {
      state.experimentIDs.push(experimentID);
    },
    setExperimentID (state, experiment) {
      state.chosenExperiment = experiment;
    }
  }
});