<template>
  <div class="main-container">
    <div class="search-block">
      <search-input
        placeholder="관광지를 입력해보세요"
        type="text"
        style="margin-bottom: 10px"
        :inputvalue="keyword"
        v-model="keyword"
        :onChangeFun="keywordOnChange"
        :saveRecentKeyword="saveRecentKeyword"
      ></search-input>
      <div class="warn">검색어를 입력하세요</div>
    </div>
    <div class="recent-block">
      <div class="title keyword">최근 검색어</div>
    </div>
    <div class="condition-block">
      <div class="title filter">검색 조건</div>

      <div class="dropdown-container">
        <b-form-select
          id="category"
          class="custom-dropdown"
          variant="custom"
          v-model="selectedCategory"
          :options="category"
          @change="handleCategoryChange"
        ></b-form-select>
        <b-form-select
          id="sido"
          class="custom-dropdown"
          variant="custom"
          v-model="selectedSido"
          :options="sido"
          @change="handleSidoChange"
        ></b-form-select>
        <b-form-select
          id="gugun"
          class="custom-dropdown"
          variant="custom"
          v-model="selectedGugun"
          :options="gugun"
          @change="handleGugunChange"
        ></b-form-select>
      </div>
    </div>
    <div class="recommend-block">
      <div class="title recommend">취향 저격 관광지</div>
    </div>
    <!-- <div class="search-block"></div> -->
    <!-- <carousel
      class="pills"
      :perPageCustom="[
        [320, 2],
        [480, 3],
        [720, 4],
        [960, 5],
      ]"
    >
      <slide v-for="recentKeyword in recentKeywords" :key="recentKeyword">
        <div class="pill">{{ recentKeyword }}</div>
      </slide>
    </carousel> -->
    <!-- <div class="pills">
      <div class="pill-container">
        <span
          v-for="recentKeyword in recentKeywords"
          :key="recentKeyword"
          class="pill"
          >{{ recentKeyword }}</span
        >
      </div>
    </div> -->
  </div>
</template>

<script>
// import Carousel from "vue-carousel";
import SearchInput from "./SearchInput.vue";
import { getGuguns } from "@/api/attractionApi";
export default {
  name: "AttractionSearch",
  components: { SearchInput },
  data() {
    return {
      keyword: "",
      recentKeywords: [],
      selectedCategory: null,
      selectedSido: null,
      selectedGugun: null,
      category: [
        { value: null, text: "관광지 유형" },
        { value: 12, text: "관광지" },
        { value: 32, text: "숙박시설" },
        { value: 39, text: "식당" },
        { value: 25, text: "코스" },
        { value: 14, text: "여가" },
      ],
      sido: [
        { value: null, text: "시/도" },
        { value: 1, text: "서울" },
        { value: 2, text: "인천" },
        { value: 3, text: "대전" },
        { value: 4, text: "대구" },
        { value: 5, text: "광주" },
        { value: 6, text: "부산" },
        { value: 7, text: "울산" },
        { value: 8, text: "세종시" },
        { value: 31, text: "경기" },
        { value: 32, text: "강원" },
        { value: 33, text: "충북" },
        { value: 34, text: "충남" },
        { value: 35, text: "경북" },
        { value: 36, text: "경남" },
        { value: 37, text: "전북" },
        { value: 38, text: "전남" },
        { value: 39, text: "제주" },
      ],
      gugun: [{ value: null, text: "구/군" }],
    };
  },
  created() {
    // 페이지가 로드될 때 localStorage에서 최근 검색어를 불러옴
    this.loadRecentKeywords();
    this.clearRecentKeywords();
  },
  methods: {
    keywordOnChange(value) {
      this.keyword = value;
      // console.log(value);
    },
    async handleSidoChange(value) {
      console.log("선택된 시/도:", value);
      // 시/도가 선택되었을 때 해당 시/도의 구/군 목록을 가져오기 위해 API 호출
      const response = await getGuguns(value);
      // API 응답으로 받은 구/군 목록을 gugun 데이터에 할당
      this.gugun = [
        { value: null, text: "전체" },
        ...response.data.map((item) => {
          return { value: item.gugunCode, text: item.gugunName };
        }),
      ];
      // 구/군 선택값 초기화
      this.selectedGugun = null;
    },
    handleCategoryChange(value) {
      this.selectedCategory = value;
    },
    handleGugunChange(value) {
      this.selectedGugun = value;
    },
    saveRecentKeyword(keyword) {
      // localStorage에 최근 검색어 저장
      const recentKeywords =
        JSON.parse(localStorage.getItem("recentKeywords")) || [];
      const updatedKeywords = [keyword, ...recentKeywords];
      localStorage.setItem("recentKeywords", JSON.stringify(updatedKeywords));
      this.recentKeywords = updatedKeywords;
    },
    loadRecentKeywords() {
      // localStorage에서 최근 검색어 불러오기
      const recentKeywords =
        JSON.parse(localStorage.getItem("recentKeywords")) || [];
      this.recentKeywords = recentKeywords;
    },
    clearRecentKeywords() {
      // localStorage의 최근 검색어 초기화
      localStorage.removeItem("recentKeywords");
      this.recentKeywords = [];
    },
  },
};
</script>

<style scoped>
.main-container {
  margin: 10px 35px;
}
.search-block {
  height: 100px;
}

.recent-block {
  height: 100px;
}

.condition-block {
  height: 200px;
}
.custom-dropdown {
  background-color: #ffffff;
  border-radius: 10px;
  width: auto;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
  border: none;
}

.custom-dropdown .dropdown-item {
  padding: 8px 12px;
  font-family: "Noto Sans KR";
  font-size: 14px;
  line-height: 20px;
  color: #000000;
}

.custom-dropdown .dropdown-item.active,
.custom-dropdown .dropdown-item:active {
  background-color: #beccfe;
  color: white;
}

.custom-dropdown .dropdown-item:focus,
.custom-dropdown .dropdown-item:hover {
  background-color: #d8e0ff;
  color: #000000;
}
.pills {
  /* position: absolute; */
  top: 215px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 10px;

  width: 325px;
  height: 35px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
}

.pill-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.pill {
  display: inline-block;
  min-width: 59px;
  height: 32px;
  background: #beccfe;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 500;
}

.warn {
  width: 114px;
  height: 17px;
  left: 33px;
  top: 128px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;

  color: #f8746b;
}

.title {
  /* position: absolute; */
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;

  color: #000000;
  width: 217px;
  height: 24px;
}
.keyword {
  top: 175px;
}
.filter {
  top: 274px;
}
.dropdown-container {
  /* position: absolute;
  top: 306px; */
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 4px 3px 10px;
  gap: 8px;

  width: 325px;
  height: 58px;

  flex: none;
  order: 1;
  flex-grow: 0;
}

.recommend {
  top: 416px;
}
</style>
