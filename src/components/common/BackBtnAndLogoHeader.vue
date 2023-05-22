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
      const path = this.$route.path;
      if (path.includes("mypage")) {
        this.$router.push("/mypage");
        return;
      } else if (path.includes("courses")) {
        this.$router.push("/courses");
        return;
      }
      
    },
  },
};
</script>

<style scoped>
.header {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 30px;
  border-bottom: 1px solid #e7e7e7;
  box-shadow: 0 6px 6px -6px #e7e7e7;
}
.back-btn{
}
.logo-container {
  position: sticky;
  left: 50%;
  transform: translateX(-200%);
}
.logo {
  color: #6f8cf4;
  font-size: 24px;
  letter-spacing: 0.03em;

  text-align: center;
}
</style>
