<template>
  <div>
    <common-input
      placeholder="검색어를 입력해보세요"
      type="text"
      v-model="keyword"
      @input="keywordOnChange"
      :inputvalue="inputvalue"
      @onChange="onChangeFun"
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
  props: ["placeholder", "inputvalue", "onChangeFun", "saveRecentKeyword"],
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
      if (this.inputvalue == null || this.inputvalue == "") {
        return;
      }
      const response = await search({ title: this.inputvalue });
      console.log(response);
      this.saveRecentKeyword(this.inputvalue); // 최근 검색어 저장

      this.$router.push({
        name: "attraction-result", // 이동할 라우트의 이름
        query: { keyword: this.inputvalue }, // query string으로 데이터 전달
        // params: { keyword: this.inputvalue } // route params로 데이터 전달
      });
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
