<template>
  <div class="main-container">
    <div class="email-block">
      <div class="info-text">기본정보</div>
      <common-input placeholder="이메일" type="email" :inputvalue="email" @onChange="emailOnChange"></common-input>
      <div :class="`message-area ${isEmailOk ? 'success' : 'fail'}`">
        {{ isEmailOk == null ? "" : isEmailOk ? "이메일 형식이 일치합니다" : "이메일 형식이 일치하지 않습니다." }}
      </div>
    </div>
    <div class="password-block">
      <common-password placeholder="비밀번호" :inputvalue="password" :onChangeFun="passwordOnChange"></common-password>
      <div
        :class="`password-constraint ${
          isPasswordOk == null || password.length == 0 ? 'nomal' : isPasswordOk ? 'success' : 'fail'
        }`"
      >
        {{
          isPasswordOk == null || password.length == 0
            ? "8~16자의 영어 숫자만 가능합니다"
            : isPasswordOk
            ? "패스워드 형식이 일치합니다"
            : "패스워스 형식이 일치하지 않습니다."
        }}
      </div>
      <common-password
        placeholder="비밀번호 확인"
        :inputvalue="passwordCheck"
        :onChangeFun="passwordCheckOnChange"
      ></common-password>
      <div :class="`message-area ${isPasswordEqual ? 'success' : 'fail'}`">
        {{
          isPasswordEqual == null ? "" : isPasswordEqual ? "패스워드가 일치합니다." : "패스워드가 일치하지 않습니다."
        }}
      </div>
    </div>
    <div class="next-btn-block">
      <button :class="`common-btn ${isAllPass ? '' : 'btn-fail'}`" @click="nextProcess">다음</button>
    </div>
  </div>
</template>

<script>
import CommonInput from "../common/CommonInput.vue";
import CommonPassword from "../common/CommonPassword.vue";
import { emailValidator, passwordValidator } from "../../utils/inputValidator";
import signUpConstant from "@/store/constants/signUpConstant";

const signUpStore = "signUpStore/";
export default {
  name: "SignUpFormMain",
  components: { CommonInput, CommonPassword },
  data() {
    return {
      email: null,
      password: null,
      passwordCheck: null,
      isEmailOk: null,
      isPasswordOk: null,
      isPasswordEqual: null,
      isAllPass: false,
    };
  },
  watch: {},
  methods: {
    emailOnChange(inputValue) {
      this.email = inputValue;
      this.emailValidte();
    },
    passwordOnChange(inputValue) {
      this.password = inputValue;
      this.passwordValidate();
    },
    passwordCheckOnChange(inputValue) {
      this.passwordCheck = inputValue;
      this.passwordCheckEqualValidate();
    },

    emailValidte() {
      this.isEmailOk = emailValidator(this.email);
      this.checkAllPass();
    },
    passwordValidate() {
      this.isPasswordOk = passwordValidator(this.password);
      this.checkAllPass();
    },
    passwordCheckEqualValidate() {
      this.isPasswordEqual = this.password === this.passwordCheck;
      this.checkAllPass();
    },
    checkAllPass() {
      this.isAllPass = this.isEmailOk && this.isPasswordOk && this.isPasswordEqual;
    },
    nextProcess() {
      let data = {
        process: 2,
        email: this.email,
        password: this.password,
      };
      this.$store.commit(signUpStore + signUpConstant.MU_EMAIL_PASSWORD, data);
      this.$router.push("/signup/email");
    },
  },
};
</script>

<style scoped>
.main-container {
  margin: 0 30px;
  margin-top: 60px;
}
.email-block {
  margin-bottom: 50px;
}
.info-text {
  color: #696969;
  font-size: 16px;
  padding-left: 5px;
  margin-bottom: 12px;
}
.password-block {
  margin-top: 20px;
}
.password-constraint {
  padding: 5px 0px 5px 15px;
  color: #696969;
  font-size: 12px;
}
.message-area {
  font-size: 12px;
  padding: 10px 0px 10px 15px;
}
.nomal {
  color: #696969;
  font-size: 12px;
}
.success {
  color: #496def;
  font-size: 12px;
}
.fail {
  color: #f8746b;
  font-size: 12px;
}
.btn-fail {
  background-color: #e7e7e7;
  pointer-events: none;
}
.next-btn-block {
  margin-top: 100px;
}
</style>
