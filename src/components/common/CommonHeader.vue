<template>
  <div class="header">
    <div class="logo">Tripfy</div>
  </div>
</template>

<script>
export default {
  name: 'CommonHeader',
};
</script>

<style scoped>
.header {
  height: 60px;

  display: flex;

  justify-content: center;
  align-items: center;

  margin: 0px 30px;
}
.logo {
  color: #6f8cf4;
  font-size: 24px;
  text-align: center;
  letter-spacing: 0.03em;

  font-family: 'Righteous';
}
</style>
