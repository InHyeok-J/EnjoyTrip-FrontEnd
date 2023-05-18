<template>
  <div>
    <common-input
      placeholder="이메일"
      type="email"
      style="margin-bottom: 10px"
      :inputvalue="email"
      @onChange="emailOnChange"
    ></common-input>
    <common-password
      style="margin-bottom: 30px"
      placeholder="비밀번호"
      :inputvalue="password"
      :onChangeFun="passwordOnChange"
    ></common-password>
    <button class="common-btn" @click="login">로그인</button>
  </div>
</template>

<script>
import CommonInput from "../common/CommonInput.vue";
import CommonPassword from "../common/CommonPassword.vue";
import http from "../../api/axios";

export default {
  name: "LoginForm",
  components: { CommonInput, CommonPassword },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    emailOnChange(inputValue) {
      this.email = inputValue;
    },
    passwordOnChange(inputValue) {
      this.password = inputValue;
    },
    async login() {
      try {
        const data = await http.get("/attractions?sidoCode=38&gugunCode=128&category=12&title=%EC%82%B0&offset=1");
        console.log(data);
      } catch (e) {
        console.log("ERRROR");
        console.log(e);
      }
    },
  },
};
</script>

<style scoped></style>
