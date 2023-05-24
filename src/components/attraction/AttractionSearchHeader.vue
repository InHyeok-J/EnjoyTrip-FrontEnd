<template>
  <div class="attraction-search">
    <search-input
      placeholder="관광지를 입력해보세요"
      type="text"
      style="margin-bottom: 10px"
      :inputvalue="keyword"
      v-model="keyword"
      :onChangeFun="keywordOnChange"
      :saveRecentKeyword="saveRecentKeyword"
    ></search-input>
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
</template>
<script>
import SearchInput from "./SearchInput.vue";
import { getGuguns } from "@/api/attractionApi";
export default {
  name: "AttractionSearchHeader",
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
  mounted() {
    // 페이지가 로드될 때 localStorage에서 최근 검색어를 불러옴
    this.loadRecentKeywords();
  },
  methods: {
    keywordOnChange(value) {
      this.keyword = value;
    },
    getPillWidth(recentKeyword) {
      const minWidth = 59;
      const padding = 10;
      const width = minWidth + recentKeyword.length * padding;
      return `min-width: ${width}px`;
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
      const recentKeywords =
        JSON.parse(localStorage.getItem("recentKeywords")) || [];

      // 이미 있는 키워드인지 확인
      if (!recentKeywords.includes(keyword)) {
        // 최대 개수를 초과하면 가장 오래된 키워드를 제거
        if (recentKeywords.length >= 3) {
          recentKeywords.pop();
        }
        const updatedKeywords = [keyword, ...recentKeywords];
        localStorage.setItem("recentKeywords", JSON.stringify(updatedKeywords));
        this.recentKeywords = updatedKeywords;
      }
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

.attraction-search {
  margin: 10px 35px;
  position: relative;
  /* height: 100vh;  */
  padding: 0px 0px 10px 0px;
  overflow: hidden; /* Hide the overflow to prevent scrolling */
}
.custom-dropdown {
  background-color: #ffffff;
  border-radius: 10px;
  padding: 0px 25px 0px 15px;
  width: auto;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
  border: none; /* border 제거 */
}

.dropdown-container {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 8px;

  width: 325px;
}
</style>
