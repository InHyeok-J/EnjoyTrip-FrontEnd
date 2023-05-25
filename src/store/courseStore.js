import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const initStore = {
  attractions: {
    day1: [],
    day2: null,
    day3: null,
    day4: null,
  },
  description: "",
  startDate: null,
  title: null,
  prevSelect: 1,
  selected: 1,
  isPublic: true,
};

const courseStore = {
  namespaced: true,
  state: initStore,
  getters: {},
  mutations: {
    initStore: (state) => {
      // eslint-disable-next-line no-unused-vars
      state = initStore;
    },
    onChangeTitle: (state, payload) => {
      state.title = payload;
    },
    changeOption: (state, payload) => {
      state.selected = payload;
      if (state.prevSelect === state.selected) return; // 선택한 값이 이전과 같으면 리턴

      if (state.prevSelect < state.selected) {
        // 선택한 값이 이전보다 크면 배열을 추가로 생성
        for (let i = state.prevSelect + 1; i <= state.selected; i++) {
          state.attractions[`day${i}`] = [];
        }
      } else {
        // 선택한 값이 이전보다 작으면 배열을 삭제
        for (let i = state.prevSelect; i > state.selected; i--) {
          state.attractions[`day${i}`] = null;
        }
      }
      state.prevSelect = state.selected;
    },
    onChangeStartDate: (state, payload) => {
      state.startDate = payload;
    },
    onChangeDescription: (state, payload) => {
      state.description = payload;
    },
    addAttraction: (state, { day, data }) => {
      console.log(data);
      state.attractions[`day${day}`].push(data);
    },
    removeAttraction: (state, { day, id }) => {
      const arr = state.attractions[`day${day}`];
      state.attractions[`day${day}`] = arr.filter(
        (atr) => atr.attractionId != id
      );
    },
    init: (state) => {
      console.log("데이터 남기 테스트--------------");
      // eslint-disable-next-line no-unused-vars
      state.attractions = {
        day1: [],
        day2: null,
        day3: null,
        day4: null,
      };
      state.description = "";
      state.startDate = null;
      state.title = null;
      state.prevSelect = 1;
      state.selected = 1;
    },
  },
};

export default courseStore;
