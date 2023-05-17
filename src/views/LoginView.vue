<template>
  <div>
    <not-logo-header></not-logo-header>
    <login-home></login-home>
  </div>
</template>

<script>
import LoginHome from "@/components/login/LoginHome.vue";
import NotLogoHeader from "@/components/common/NotLogoHeader.vue";
export default {
  name: "LoginView",
  components: { LoginHome, NotLogoHeader },
};
</script>

<style></style>
