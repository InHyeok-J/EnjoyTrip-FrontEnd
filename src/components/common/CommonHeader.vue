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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  /* margin-bottom: 150px; */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff; /* Adjust the background color as desired */
  z-index: 999; /* Adjust the z-index as needed */
}
.logo {
  color: #6f8cf4;
  font-size: 24px;
  text-align: center;
  letter-spacing: 0.03em;

  font-family: "Righteous";
}
</style>
