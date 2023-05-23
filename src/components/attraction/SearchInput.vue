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
        @click="reloadWithData"
      />
    </div>
  </div>
</template>

<script>
import CommonInput from "../common/CommonInput.vue";
// import { NavigationDuplicated } from "vue-router";

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
      try {
        const searchOption = {
          category: this.selectedCategory,
          sidoCode: this.selectedSido,
          gugunCode: this.selectedGugun,
          title: this.inputvalue,
        };
        this.saveRecentKeyword(this.inputvalue); // 최근 검색어 저장

        this.$store.commit("searchStore/SET_RESULT", searchOption);
        this.$router.push({
          name: "attraction-result",
          params: { result: searchOption },
        });
      } catch (err) {
        console.error(err);
      }
    },
    reloadWithData() {
      // 현재 경로를 다른 데이터로 대체합니다.
      const searchOption = {
        category: this.selectedCategory,
        sidoCode: this.selectedSido,
        gugunCode: this.selectedGugun,
        title: this.inputvalue,
      };
      this.saveRecentKeyword(this.inputvalue); // 최근 검색어 저장

      console.log("commit", searchOption);
      this.$store.commit("searchStore/SET_RESULT", searchOption); // store에 현재 검색조건 저장
      this.$router
        .push({
          name: "attraction-result",
          params: searchOption,
        })
        .catch(() => {});
    },
    keywordOnChange(value) {
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
