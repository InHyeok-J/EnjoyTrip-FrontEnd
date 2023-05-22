<template>
  <div>
    <common-input
      placeholder="검색어를 입력해보세요"
      type="keyword"
      :inputvalue="keyword"
      @onChange="keywordOnChange"
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
import CommonInput from '../common/CommonInput.vue';
export default {
  name: 'SearchInput',
  components: { CommonInput },
  props: ['placeholder', 'inputvalue', 'onChangeFun'],
  data() {
    return {
      isViewPassword: false,
    };
  },
  methods: {
    update(e) {
      this.$emit('onChange', e.target.value);
    },
    changeViewMode() {
      this.isViewPassword = !this.isViewPassword;
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
