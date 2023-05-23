<template>
  <div class="course-detail">
    <back-btn-and-logo-header isback="isback"/>
    <course-detail />
    <common-tab/>
  </div>
</template>

<script>
import BackBtnAndLogoHeader from "@/components/common/BackBtnAndLogoHeader.vue"
import CommonTab from '@/components/common/CommonTab.vue'
import CourseDetail from "@/components/course/CourseDetail.vue"
export default {
  components: { BackBtnAndLogoHeader, CommonTab, CourseDetail },

}
</script>

<style>

</style>