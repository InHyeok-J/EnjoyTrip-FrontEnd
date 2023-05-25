<template>
  <div>
    <not-logo-header title="후기 작성하기" shadow="is-shadow"></not-logo-header>
    <attraction-review></attraction-review>
    <common-tab></common-tab>
  </div>
</template>
<script>
import NotLogoHeader from "@/components/common/NotLogoHeader.vue";
import CommonTab from "@/components/common/CommonTab.vue";
import AttractionReview from "@/components/attraction/AttractionReview.vue";
export default {
  name: "ReviewPostView",

  components: { NotLogoHeader, CommonTab, AttractionReview },
};
</script>
