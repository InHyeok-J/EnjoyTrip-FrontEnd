<template>
  <div class="main-container">
    <div class="logo-block">
      <div class="logo-block-text">
        <img src="@/assets/Logo.png" class="logo-image" alt="Logo image" />
        Tripfy
      </div>
    </div>
    <div>
      <login-form></login-form>
    </div>
    <div class="sns-line">sns 로그인</div>
    <div class="oauth-block">
      <div class="oauth-block-icons">
        <img src="@/assets/KakaoIcon.svg" alt="kakao" @click="kakaoLogin" />
        <img src="@/assets/GoogleIcon.svg" alt="google" />
      </div>
    </div>
    <div class="ask-block">
      Tripfy 는 처음이신가요? &nbsp;
      <router-link to="/signup">회원가입</router-link>
    </div>
  </div>
</template>

<script>
import LoginForm from "./LoginForm.vue";
// import axios from "axios";

export default {
  name: "LoginHome",
  components: { LoginForm },
  methods: {
    async kakaoLogin() {
      const kakaoKey = process.env.VUE_APP_KAKAO_OAUTH_KEY;
      console.log(kakaoKey);
      const redirect = "http://localhost:8080/oauth/kakao/callback";
      const kakaoUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoKey}&redirect_uri=${redirect}&response_type=code`;
      window.location.href = kakaoUrl;
    },
  },
};
</script>

<style scoped>
.main-container {
  margin: 0px 35px;
}
.logo-image {
  width: 58px;
  display: inline-block;
  position: relative;
  top: -5px;
  left: 5px;
}
.logo-block-text {
  color: #6f8cf4;
  font-size: 48px;
  position: relative;
  left: -10px;
}
.logo-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
  margin-bottom: 60px;
}
.sns-line {
  display: flex;
  flex-basis: 100%;
  align-items: center;
  color: #949494;
  font-size: 11px;
  margin: 60px 0px 20px 0;
}
.sns-line::before {
  content: "";
  flex-grow: 1;
  background-color: #dadada;
  height: 1px;
  font-size: 0px;
  line-height: 0px;
  margin: 0px 16px 0px 0px;
}
.sns-line::after {
  content: "";
  flex-grow: 1;
  background-color: #dadada;
  height: 1px;
  font-size: 0px;
  line-height: 0px;
  margin: 0px 0px 0px 16px;
}
.oauth-block {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.oauth-block-icons {
  width: 110px;
  display: flex;
  justify-content: space-between;
}
.oauth-block-icons > img {
  height: 49px;
  cursor: pointer;
}
.ask-block {
  margin-top: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color: #282732;
}
.ask-block > a {
  color: #496def;
  font-size: 12px;
}
</style>
