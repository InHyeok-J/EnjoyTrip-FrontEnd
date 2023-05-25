<template>
  <div>
    <course-search-back-header title="여행지 선택"></course-search-back-header>
    <AttractionSearchHeaderVue></AttractionSearchHeaderVue>
    <course-search-main></course-search-main>
  </div>
</template>

<script>
import CourseSearchBackHeader from "@/components/course/CourseSearchBackHeader.vue";
import CourseSearchMain from "@/components/course/CourseSearchMain.vue";

import AttractionSearchHeaderVue from "@/components/attractionForCourse/AttractionSearchHeader.vue";
export default {
  name: "CourseRegisterSearchView",
  components: {
    CourseSearchBackHeader,
    CourseSearchMain,
    AttractionSearchHeaderVue,
  },
};
</script>

<style></style>
