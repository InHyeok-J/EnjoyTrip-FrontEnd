<template>
  <div class="home">
    <common-header></common-header>
  </div>
</template>

<script>
// @ is an alias to /src
import CommonHeader from "@/components/common/CommonHeader.vue";

export default {
  name: "HomeView",

  components: { CommonHeader },
};
</script>
