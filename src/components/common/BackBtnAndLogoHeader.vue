<template>
  <div class="header">
    <img v-if="isback" class="bcak-btn" src="@/assets/LeftArrow.svg" alt="back icon" @click="moveBack" />

    <div class="logo-container">
    <!-- <div class="back-btn-container"> -->
    <!-- </div> -->
      <div class="logo" :class="`${ isback == null ? '':'logo-left' }`">Tripfy</div>
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
  props:["isback"]
};
</script>

<style scoped>
.header {
  height: 60px;
	display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #e7e7e7;
  box-shadow: 0 6px 6px -6px #e7e7e7;
}
.back-btn-container{
  width: 44px;
  height: 44px;
  margin: 1px 0px 0px 6px;
}
.back-btn{
  position: relative;
  /* left: 14.5px;
  top: 5px; */
}

.logo-container {
  width: 100%;
  display:flex;
  justify-content: center;
  align-content: center;
  margin-top: 1px;
}
.logo {
  color: #6f8cf4;
	font-size: 24px;
	text-align: center;
	letter-spacing: 0.03em;
  font-family: 'Righteous';
  display: inline-block;
  text-align: center;

}
.logo-left{
  position: relative;
  left:-22px;
}
</style>
