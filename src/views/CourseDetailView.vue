<template>
  <div class="course-detail">
    <back-btn-and-logo-header/>
    <course-detail/>
    <common-footer/>
  </div>
</template>

<script>
import BackBtnAndLogoHeader from "@/components/common/BackBtnAndLogoHeader.vue"
import CommonFooter from "@/components/common/CommonFooter.vue"
import CourseDetail from "@/components/course/CourseDetail.vue"
export default {
  components: { BackBtnAndLogoHeader, CommonFooter, CourseDetail },

}
</script>

<style>

</style>