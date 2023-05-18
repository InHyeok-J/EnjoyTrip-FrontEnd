<template>
  <div class="header">
    <div class="logo">Tripfy</div>
  </div>
</template>

<script>
export default {
  name: "CommonHeader",
};
</script>

<style scoped>
.header {
  height: 60px;
  top: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo {
  color: #6f8cf4;
  font-size: 24px;
  text-align: center;
  letter-spacing: 0.03em;
}
</style>
