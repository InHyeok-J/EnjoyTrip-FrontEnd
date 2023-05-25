// import attractionApi from "@/api/attractionApi";

export default {
  namespaced: true,
  state: {
    searchOption: null,
  },
  getters: {},
  mutations: {
    SET_RESULT: (state, payload) => {
      state.searchOption = payload;
    },
  },
};
