<template>
  <div class="main-container">
    <div class="nickname-block">
      <div class="info-text">닉네임</div>
      <common-input
        placeholder="닉네임 입력"
        type="text"
        :inputvalue="nickname"
        @onChange="nicknameOnChange"
      ></common-input>
    </div>
    <div class="message-block nomal">닉네임은 한글 2~7자만 가능합니다</div>
    <div class="signup-btn-block">
      <button class="common-btn" @click="signUp">회원가입</button>
    </div>
  </div>
</template>

<script>
import CommonInput from "../common/CommonInput.vue";
import { postSignUp } from "@/api/userApi.js";
import signUpConstant from "@/store/constants/signUpConstant";
import { nicknameValidator } from "@/utils/inputValidator";
export default {
  name: "SignUpNicknameMain",

  components: { CommonInput },
  data() {
    return {
      nickname: null,
    };
  },
  created() {
    const curProcess = this.$store.state.signUpStore.process;
    if (curProcess !== 3) {
      alert("비정상 접근입니다.");
      this.$router.push("/login");
    }
  },
  destroyed() {
    this.$store.commit(signUpConstant.CALL_INIT_SIGNUP_STORE);
  },
  methods: {
    nicknameOnChange(inputValue) {
      this.nickname = inputValue;
    },

    async signUp() {
      if (!nicknameValidator(this.nickname)) {
        alert("닉네임을 정확히 입력해주세요");
        return;
      }
      const data = {
        email: this.$store.state.signUpStore.email,
        password: this.$store.state.signUpStore.password,
        nickname: this.nickname,
      };
      try {
        await postSignUp(data);
        alert("회원가입 성공!");
        this.$router.push("/login");
      } catch (e) {
        alert("회원가입 실패");
      }
    },
  },
};
</script>

<style>
.main-container {
  margin: 0 30px;
  margin-top: 60px;
}
.nickname-block {
  margin-bottom: 10px;
}
.info-text {
  color: #696969;
  font-size: 16px;
  padding-left: 5px;
  margin-bottom: 12px;
}
.message-block {
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
</style>
