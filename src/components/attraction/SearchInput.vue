<template>
  <div>
    <common-input
      placeholder="검색어를 입력해보세요"
      type="text"
      v-model="keyword"
      @input="keywordOnChange"
      :inputvalue="inputvalue"
      @onChange="onChangeFun"
      :selectedCategory="selectedCategory"
      :selectedSido="selectedSido"
      :selectedGugun="selectedGugun"
    ></common-input>
    <div class="view-block">
      <img
        :src="require(`@/assets/search.svg`)"
        class="pass-view"
        @click="search"
      />
    </div>
  </div>
</template>

<script>
import CommonInput from "../common/CommonInput.vue";
import { search } from "@/api/attractionApi";

export default {
  name: "SearchInput",
  components: { CommonInput },
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    inputvalue: {
      type: String,
      default: "",
    },
    onChangeFun: {
      type: Function,
      default: () => {},
    },
    saveRecentKeyword: {
      type: Function,
      default: () => {},
    },
    selectedCategory: {
      type: Number,
      default: null,
    },
    selectedSido: {
      type: Number,
      default: null,
    },
    selectedGugun: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      keyword: this.inputvalue,
      isViewPassword: false,
    };
  },
  methods: {
    update(e) {
      this.$emit("onChange", e.target.value);
    },
    async search() {
      console.log(this.keyword, this.inputvalue);
      console.log(this.inputvalue, "ihii");
      console.log(this.selectedCategory, "category");
      const response = await search({
        category: this.selectedCategory,
        sidoCode: this.selectedSido,
        gugunCode: this.selectedGugun,
        title: this.inputvalue,
      });
      console.log(response);
      this.saveRecentKeyword(this.inputvalue); // 최근 검색어 저장
    },
    keywordOnChange(value) {
      // this.onChangeFun(value);
      // 이곳에 keyword 변경 로직을 추가하거나 원하는 동작을 수행하세요.
      this.keyword = value;
    },
  },
};
</script>

<style>
.view-block {
  float: right;
}
.pass-view {
  position: relative;
  margin-right: 15px;
  margin-top: -70px;
  z-index: 1;
  cursor: pointer;
}
</style>
