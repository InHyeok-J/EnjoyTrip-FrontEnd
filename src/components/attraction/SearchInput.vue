<template>
  <div>
    <common-input
      placeholder="검색어를 입력해보세요"
      type="text"
      :inputvalue="inputvalue"
      @onChange="onChangeFun"
    ></common-input>
    <div class="view-block">
      <img
        :src="require(`@/assets/search.svg`)"
        class="pass-view"
        @click="changeViewMode"
      />
    </div>
  </div>
</template>

<script>
import CommonInput from "../common/CommonInput.vue";
export default {
  name: "SearchInput",
  components: { CommonInput },
  props: ["placeholder", "inputvalue", "onChangeFun"],
  data() {
    return {
      keyword: "", // keyword 속성 추가
      isViewPassword: false,
    };
  },
  methods: {
    update(e) {
      this.$emit("onChange", e.target.value);
    },
    changeViewMode() {
      this.isViewPassword = !this.isViewPassword;
    },
    keywordOnChange(value) {
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
