<template>
  <div>
    <not-logo-header title="코스 작성하기" shadow="is-shadow"></not-logo-header>
    <course-register></course-register>
  </div>
</template>

<script>
import NotLogoHeader from "@/components/common/NotLogoHeader.vue";
import CourseRegister from "@/components/course/CourseRegister.vue";
export default {
  name: "CourseRegisterView",
  components: { NotLogoHeader, CourseRegister },
};
</script>

<style scoped></style>
