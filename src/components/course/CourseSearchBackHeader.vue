<template>
  <div class="header">
    <img
      class="chevron"
      src="@/assets/chevron.svg"
      alt="back icon"
      @click="moveBack"
    />
    <div v-if="title" class="title-text">{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: "CourseSearchBackHeader",
  methods: {
    moveBack() {
      this.$router.push("/courses/regist/form");
    },
  },
  props: ["title"],
};
</script>

<style scoped>
.is-shadow {
  border-bottom: 1px solid #e7e7e7;
  box-shadow: 0 6px 6px -6px #e7e7e7;
}
.header {
  width: 100%;
  height: 54px;
  display: flex;
  align-items: center;
  /* padding: 0 14px; */
  position: fixed;
  background-color: #ffffff;
}
.chevron {
  padding: 0px 20px;
}
.header > img {
  cursor: pointer;
}
.title-text {
  font-weight: bold;
  font-size: 18px;
}
</style>
