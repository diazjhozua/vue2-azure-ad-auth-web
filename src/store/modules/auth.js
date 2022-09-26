import { login, getAccount } from "@/services";

export default {
  namespaced: true,
  state: {
    isAuthenticated: false,
    account: null,
  },
  mutations: {
    setIsAuthenticated(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    },
    setAccount(state, account) {
      state.account = account;
    },
  },
  actions: {
    async loginAction({ commit }) {
      const response = await login();
      if (response) {
        commit("setAccount", getAccount().name);
      }
      commit("setIsAuthenticated", response);
    },
  },
  getters: {},
};
