<template>
  <div class="header" :class="`${shadow}`">
    <img src="@/assets/LeftArrow.png" alt="back icon" @click="moveBack" />
    <div v-if="title" class="title-text">{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: "NotLogoHeader",
  methods: {
    moveBack() {
      this.$router.go(-1);
    },
  },
  props: ["title", "shadow"],
};
</script>

<style scoped>
.is-shadow {
  border-bottom: 1px solid #e7e7e7;
  box-shadow: 0 6px 6px -6px #e7e7e7;
}
.header {
  height: 54px;
  display: flex;
  align-items: center;
  padding: 0 30px;
}
.header > img {
  cursor: pointer;
}
.title-text {
  font-weight: bold;
  font-size: 18px;
  margin-left: 20px;
}
</style>
