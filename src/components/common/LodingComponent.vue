<template>
  <div class="main-container">
    <div class="center">
      <img src="@/assets/Logo.png" alt="비행기" class="big-logo" />
    </div>
    {{ text }}
  </div>
</template>

<script>
export default {
  name: "LodingComponent",
  props: ["text"],
};
</script>

<style scoped>
.main-container {
  margin: 0px 30px;
  display: flex;
  justify-content: center;
  align-content: center;
  height: 100vh;
  flex-direction: column;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
}
.big-logo {
  width: 192px;
  height: 192px;
}
.center {
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>
