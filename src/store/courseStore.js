import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        dummy: [
            {
              attractionId: 1,
              name: "우도 땅콩 빵집",
              address: "제주도 제주시 정자일로 80",
            },
            {
              attractionId: 2,
              name: "만장굴",
              address: "제주도 제주시 봉선중앙로 93",
            },
            {
              attractionId: 3,
              name: "성산일출봉",
              address: "제주도 제주시 남구 93",
            },
            {
              attractionId: 4,
              name: "오륙도 (부산 국가지질공원)",
              address: "경상북도 포항시 북구 송라면 동해대로3218번길",
            },
          ],
        title: null, // 코스 제목
        startDate: null, // 시작 날짜
        preSelecte : null,
        selected: null,
        isPublic: true,
        options: null,
        attractions: {
            day1: [],
            day2: [],
            day3: [],
            day4: []
        }
  },
    mutations: {
      installData(){
            this.attractions.day1 = [...this.dumy];
      }
  },
    actions: {
      //back에 정보요청
        
  },
  modules: {
  },
});

