<template>
  <div class="home">
    <common-header></common-header>
    <common-tab></common-tab>
  </div>
</template>

<script>
import CommonHeader from '@/components/common/CommonHeader.vue';
import CommonTab from '@/components/common/CommonTab.vue';

export default {
  name: 'HomeView',

  components: { CommonHeader, CommonTab },
};
</script>
<style scoped>
.home {
  display: flex;
  flex-direction: column;
}
</style>
