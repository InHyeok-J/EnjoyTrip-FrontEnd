<template>
  <div class="main-container">
    <div class="email-check-block">
      <div class="info-text">이메일 인증</div>
      <common-input
        placeholder="이메일 인증 코드 입력"
        type="text"
        :inputvalue="code"
        @onChange="codeOnChange"
      ></common-input>
      <div :class="`message-block ${isAuth ? 'success' : 'fail'}`">
        {{
          isAuth == null
            ? "인증 코드가 발송 됐습니다. 5분 이내에 인증을 완료해주세요"
            : isAuth
            ? "인증 코드가 일치합니다 다음 진행해주세요"
            : "인증 코드가 일치하지 않습니다."
        }}
      </div>
      <div class="message-block fail">
        냠은 시간
        <email-timer class="timer"></email-timer>
      </div>
    </div>
    <div class="code-btn-block">
      <button class="common-btn" @click="checkEmailAuthCode">인증코드확인</button>
    </div>
    <hr />
    <div class="agree-block">
      <div class="agree-text-block">
        <check-box label=""></check-box>
        [필수] 서비스 이용 약관 동의
      </div>
      <div class="agree-text-block">
        <check-box label=""></check-box>
        [필수] 개인정보 수집 및 이용 동의
      </div>
    </div>
    <div class="next-btn-block">
      <button class="common-btn" @click="nextProcess">모두 동의하고 다음으로</button>
    </div>
  </div>
</template>

<script>
import CheckBox from "../common/CheckBox.vue";
import CommonInput from "../common/CommonInput.vue";
import EmailTimer from "../common/EmailTimer.vue";
import { postEmailCheck } from "@/api/authApi";
import signUpConstant from "@/store/constants/signUpConstant";
export default {
  name: "SignUpEmailAuthMain",
  data() {
    return {
      email: null,
      code: null,
      isAuth: null,
    };
  },
  components: { CommonInput, EmailTimer, CheckBox },
  created() {
    const curProcess = this.$store.state.signUpStore.process;
    if (curProcess !== 2) {
      alert("비정상 접근입니다.");
      this.$router.push("/login");
    }
    this.email = this.$store.state.signUpStore.email;
  },
  methods: {
    codeOnChange(inputValue) {
      this.code = inputValue;
    },
    nextProcess() {
      if (!this.isAuth) {
        alert("이메일 인증이 필요합니다!");
        return;
      }
      this.$store.commit(signUpConstant.CALL_MU_PROCESS, { process: 3 });
      this.$router.push("/signup/nickname");
    },
    async checkEmailAuthCode() {
      try {
        await postEmailCheck(this.email, this.code);
        this.isAuth = true;
      } catch (e) {
        if (e.response.data.statusCode === 409) {
          this.isAuth = false;
          return;
        }
        alert("에러 발생!");
      }
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
.message-block {
  font-size: 12px;
  padding: 10px 0px 10px 15px;
}
.code-btn-block {
  margin-top: 50px;
  margin-bottom: 200px;
}
.success {
  color: #496def;
  font-size: 12px;
}
.fail {
  color: #f8746b;
  font-size: 12px;
}
.timer {
  color: #f8746b;
  font-size: 12px;
  font-weight: bold;
}
.agree-block {
}
.agree-text-block {
  color: #282732;
  font-size: 13px;
  margin: 15px 25px;
  display: flex;
  align-content: center;
}
</style>
