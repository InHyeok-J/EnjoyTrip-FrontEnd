<template>
  <div class="home">
    <common-header></common-header>
    <course-by-like></course-by-like>
    <common-tab></common-tab>
  </div>
</template>

<script>
import CommonHeader from '@/components/common/CommonHeader.vue';
import CommonTab from '@/components/common/CommonTab.vue';
import CourseByLike from "@/components/home/CourseByLike.vue";

export default {
  name: 'HomeView',

  components: { CommonHeader, CommonTab, CourseByLike },
};
</script>
<style scoped>
.home {
  display: flex;
  flex-direction: column;
}
</style>
