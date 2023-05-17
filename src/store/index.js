import Vue from "vue";
import Vuex from "vuex";
import signUpStore from "./signUpStore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    signUpStore,
  },
});
