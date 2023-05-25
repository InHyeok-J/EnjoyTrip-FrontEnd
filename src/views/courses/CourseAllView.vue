<template>
  <div class="courseAll">
    <common-header/>
    <course-all/>
    <common-tab/>
  </div>
</template>

<script>
import CommonHeader from "@/components/common/CommonHeader.vue"
import CourseAll from "@/components/course/CourseAll.vue"
import CommonTab from '@/components/common/CommonTab.vue'
export default {
  components: { CommonHeader, CommonTab, CourseAll },

}
</script>

<style>

</style>