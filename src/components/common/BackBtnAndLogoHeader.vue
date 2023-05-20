<template>
  <div class="header">
    <img class="bcak-btn" src="@/assets/LeftArrow.svg" alt="back icon" @click="moveBack" />
    <div class="logo-container">
      <div class="logo">Tripfy</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BackBtnAndLogoHeader",
  methods: {
    moveBack() {
      // const path = this.$route.path;
      // if (path.includes("mypage")) {
      //   this.$router.push("/mypage");
      //   return;
      // }
      // this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.header {
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  border-bottom: 1px solid #e7e7e7;
  box-shadow: 0 6px 6px -6px #e7e7e7;
}
.back-btn{
  margin-right: auto;
}
.logo-container {
  text-align: center;
  flex-grow: 1;
}
.logo {
  color: #6f8cf4;
  font-size: 24px;
  letter-spacing: 0.03em;

  margin-right: 13%;
}
</style>
