import Vue from "vue";
import Vuex from "vuex";
import signUpStore from "./signUpStore";
import userStore from "./userStore";
import searchStore from "./searchStore";
import courseStore from "./courseStore";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    signUpStore,
    userStore,
    searchStore,
    courseStore,
  },
});
