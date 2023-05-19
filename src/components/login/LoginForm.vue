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
    <br />
    <br />
    <button class="common-btn nomal" @click="login">비밀번호 찾기</button>
  </div>
</template>

<script>
import CommonInput from "../common/CommonInput.vue";
import CommonPassword from "../common/CommonPassword.vue";
import { postLogin } from "@/api/authApi";
import { emailValidator, passwordValidator } from "@/utils/inputValidator";

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
      if (this.isInputValidate()) {
        alert("값을 정확히 입력해주세요!");
        return;
      }

      try {
        await postLogin(this.email, this.password);
        alert("로그인 성공!");
        this.$router.push("/");
      } catch (e) {
        console.log(e);
        alert(e.response.data.message);
      }
    },
    isInputValidate() {
      return !emailValidator(this.email) || !passwordValidator(this.password);
    },
  },
};
</script>

<style scoped>
.nomal {
  background-color: #e7e7e7;
  font-weight: 700;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.5);
}
</style>
