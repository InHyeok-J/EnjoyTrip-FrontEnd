<template>
  <div>
    <common-input placeholder="이메일" type="email"></common-input>
    <common-password></common-password>
    <button class="common-btn">로그인</button>
  </div>
</template>

<script>
import CommonInput from "../common/CommonInput.vue";
import CommonPassword from "../common/CommonPassword.vue";
export default {
  name: "LoginForm",
  components: { CommonInput, CommonPassword },
};
</script>

<style scoped>
.main-container {
  padding: 0 30px;
}
</style>
