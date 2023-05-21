<template>
  <div>redirect..</div>
</template>

<script>
import { postOAuthLogin } from "@/api/authApi.js";
import signUpConstant from "@/store/constants/signUpConstant";
// import axios from "axios";
export default {
  name: "KakaoRedirectView",
  async created() {
    const authCode = this.$route.query.code;
    if (this.$route.query.error) {
      alert("로그인 실패");
      this.$router.push("/login");
      console.log("로그인 실패");
      return;
    }

    console.log("로그인성공!");
    console.log("CODE => " + authCode);
    try {
      const response = await postOAuthLogin(authCode);
      console.log(response.data);
      if (response.data.isNewUser) {
        alert("회원가입이 필요합니다!");
        this.$store.commit(signUpConstant.CALL_MU_OAUTH_INFO, {
          process: 4,
          provider: "KAKAO",
        });
        this.$router.push("/signup/nickname");
      } else {
        alert("로그인 성공!");
        this.$router.push("/");
      }
    } catch (e) {
      console.log(e);
      if (e.response === undefined) {
        alert("로그인 실패");
        this.$router.push("/login");
        return;
      }
      alert(e.response.data.message);
      this.$router.push("/login");
    }
  },
};
</script>

<style></style>
