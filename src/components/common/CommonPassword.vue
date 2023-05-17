<template>
  <div>
    <!-- <input placeholder="비밀번호" :type="`${isViewPassword ? 'text' : 'password'}`" class="common-input" /> -->
    <common-input placeholder="비밀번호" :type="`${isViewPassword ? 'text' : 'password'}`"></common-input>
    <div class="view-block">
      <img
        :src="require(`@/assets/${isViewPassword ? 'ViewOn.png' : 'ViewOff.png'}`)"
        class="pass-view"
        @click="changeViewMode"
      />
    </div>
  </div>
</template>

<script>
import CommonInput from "./CommonInput.vue";
export default {
  name: "CommonPassword",
  components: { CommonInput },
  data() {
    return {
      isViewPassword: false,
    };
  },
  methods: {
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
  margin-top: -85px;
  z-index: 1;
  cursor: pointer;
}
</style>
