import { createStore } from "vuex";

export default createStore({
  state: {
    isAuthenticated: localStorage.getItem("token") ? true : false, // Check if token exists in local storage
  },
  mutations: {
    setAuth(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    },
  },
  actions: {
    login({ commit }, token) {
      localStorage.setItem("token", token); // Store token in local storage
      commit("setAuth", true);
    },
    logout({ commit }) {
      localStorage.removeItem("token"); // Remove token from local storage
      commit("setAuth", false);
    },
    checkAuth({ commit }) {
      if (localStorage.getItem("token")) {
        commit("setAuth", true);
      }
    },
  },
  getters: {
    isAuthenticated: (state) => state.isAuthenticated,
  },
});
