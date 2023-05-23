import attractionApi from "@/api/attractionApi";

export default {
  namespaced: true,
  state: {
    result: null,
  },
  getters: {},
  actions: {
    async SET_RESULT({ commit, params }) {
      try {
        const response = await attractionApi.search(params);
        commit("SET_RESULT", response.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
  mutations: {
    SET_RESULT(state, payload) {
      state.result = payload;
    },
  },
};
