<template>
  <div class="home">
    <common-header></common-header>
    <main-page-vue></main-page-vue>
    <common-tab></common-tab>
  </div>
</template>

<script>
import CommonHeader from "@/components/common/CommonHeader.vue";
import CommonTab from "@/components/common/CommonTab.vue";
import MainPageVue from "@/components/home/MainPage.vue";

export default {
  name: "HomeView",

  components: { CommonHeader, CommonTab, MainPageVue },
};
</script>
<style scoped>
.home {
  display: flex;
  flex-direction: column;
}
</style>
