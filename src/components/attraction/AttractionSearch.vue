<template>
  <div class="main-container">
    <search-input
      placeholder="관광지를 입력해보세요"
      type="text"
      style="margin-bottom: 10px"
      :inputvalue="keyword"
      :onChangeFun="keywordOnChange"
    ></search-input>
    <div class="warn">검색어를 입력하세요</div>
    <div class="title keyword">최근 검색어</div>
    <div class="pills"></div>
    <div class="title filter">검색 조건</div>

    <div class="dropdown-container">
      <b-form-select
        id="category"
        class="custom-dropdown"
        variant="custom"
        v-model="selectedCategory"
        :options="category"
        @change="handleDropdownChange"
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
        @change="handleDropdownChange"
      ></b-form-select>
    </div>
    <div class="title recommend">취향 저격 관광지</div>
  </div>
</template>

<script>
import SearchInput from "./SearchInput.vue";
import { getGuguns } from "@/api/attractionApi";
export default {
  name: "AttractionSearch",
  components: { SearchInput },
  data() {
    return {
      keyword: "",
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
      gugun: [{ value: null, text: "구/군  " }],
    };
  },
  methods: {
    keywordOnChange(value) {
      this.keyword = value;
      console.log(value);
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
    handleDropdownChange(value) {
      console.log("선택된 항목:", value);
    },
    handleDropdownClick() {
      console.log("Dropdown clicked");
    },
  },
};
</script>

<style scoped>
.main-container {
  margin: 10px 35px;
}
.custom-dropdown {
  background-color: #ffffff;
  border-radius: 10px;
  padding: 0px 25px 0px 15px;
  width: auto;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
  border: none; /* border 제거 */
}

.custom-dropdown .dropdown-menu {
  border-radius: 10px;
}
.custom-dropdown .dropdown-item {
  background-color: #ffffff;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
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
  position: absolute;
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
  position: absolute;
  top: 306px;
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
