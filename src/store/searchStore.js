// import attractionApi from "@/api/attractionApi";

const initStore = {
  category: null,
  sidoCode: null,
  gugunCode: null,
  title: null,
};
export default {
  namespaced: true,
  state: {
    searchOption: initStore,
  },
  getters: {},
  mutations: {
    SET_RESULT: (state, payload) => {
      state.searchOption = payload;
    },
  },
};
