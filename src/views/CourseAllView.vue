<template>
  <div class="courseAll">
    <common-header/>
    <course-all/>
    <common-footer/>
  </div>
</template>

<script>
import CommonHeader from "@/components/common/CommonHeader.vue"
import CourseAll from "@/components/course/CourseAll.vue"
import CommonFooter from "@/components/common/CommonFooter.vue"
export default {
  components: { CommonHeader, CommonFooter, CourseAll },

}
</script>

<style>

</style>