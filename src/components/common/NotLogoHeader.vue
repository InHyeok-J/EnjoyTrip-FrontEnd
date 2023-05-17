<template>
  <div class="header">
    <img src="@/assets/LeftArrow.png" alt="back icon" @click="moveBack" />
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
</style>
