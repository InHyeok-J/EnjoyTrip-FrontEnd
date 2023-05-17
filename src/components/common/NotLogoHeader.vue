<template>
  <div class="header">
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
  props: ["title"],
};
</script>

<style scoped>
.header {
  height: 44px;
  display: flex;
  align-items: center;
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
