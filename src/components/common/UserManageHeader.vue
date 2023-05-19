<template>
  <div class="header" :class="`${shadow}`">
    <img class="bcak-btn" src="@/assets/LeftArrow.svg" alt="back icon" @click="moveBack" />
    <div v-if="title" class="title-text">{{ title }}</div>
    <div class="modify">
      <button class="modify-btn" @click="modify">수정 완료</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserManageHeader",
  methods: {
    moveBack() {
      const path = this.$route.path;
      if (path.includes("mypage")) {
        this.$router.push("/mypage");
        return;
      }
      this.$router.push("/login");
    },
    modify() {
      this.$router.push("/mypage");
    }
  },
  props: ["title", "shadow"],
};
</script>

<style scoped>
.is-shadow {
  /* border-bottom: 1px solid #e7e7e7;
  box-shadow: 0 6px 6px -6px #e7e7e7; */
}
.header {
  height: 54px;
  display: flex;
  align-items: center;
}
.header > img {
  cursor: pointer;
}
.back-btn{
  padding : 5px 8px 5px 6px;
}
.title-text {
  font-weight: bold;
  font-size: 18px;
  /* width:40%; */
  height: 24px;
  padding: 4px 40% 0px 0px;
}
.modify-btn{
  color:#496DEF;
  width: 100%;
  font-weight: bold;
  font-size: 18px;
  padding: 4px 5% 0px 0px;
}
</style>
