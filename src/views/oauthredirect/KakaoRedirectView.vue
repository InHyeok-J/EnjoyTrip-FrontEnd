<template>
  <div>
    <loding-component text="로그인중.."></loding-component>
  </div>
</template>

<script>
import { postOAuthLogin } from "@/api/authApi.js";
import signUpConstant from "@/store/constants/signUpConstant";
import userConstant from "@/store/constants/userConstant";
import LodingComponent from "@/components/common/LodingComponent.vue";
// import axios from "axios";
export default {
  name: "KakaoRedirectView",
  components: { LodingComponent },
  async created() {
    const authCode = this.$route.query.code;
    if (this.$route.query.error) {
      alert("로그인 실패");
      this.$router.push("/login");
      return;
    }

    try {
      const response = await postOAuthLogin(authCode);

      if (response.data.isNewUser) {
        alert("회원가입이 필요합니다!");

        this.$store.commit(signUpConstant.CALL_MU_OAUTH_INFO, {
          process: 4,
          provider: "KAKAO",
        });

        this.$store.commit(signUpConstant.CALL_MU_OAUTH_INFO, {
          process: 4,
          provider: "KAKAO",
        });

        this.$router.push("/signup/nickname");
      } else {
        alert("로그인 성공!");
        this.$store.dispatch(userConstant.CALL_ACTION_USER_INFO);
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
