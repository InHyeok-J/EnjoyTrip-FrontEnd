<template>
  <div>
    <not-logo-header title="회원가입" shadow="is-shadow"></not-logo-header>
    <sign-up-form-main></sign-up-form-main>
  </div>
</template>

<script>
import NotLogoHeader from "@/components/common/NotLogoHeader.vue";
import SignUpFormMain from "@/components/signup/SignUpFormMain.vue";
export default {
  name: "SignUpFormView",

  components: { NotLogoHeader, SignUpFormMain },
};
</script>

<style></style>
