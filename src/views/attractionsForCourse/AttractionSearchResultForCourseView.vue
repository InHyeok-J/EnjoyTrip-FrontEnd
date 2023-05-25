<template>
  <div>
    <common-header></common-header>
    <AttractionSearchHeaderVue></AttractionSearchHeaderVue>
    <AttractionSearchResult></AttractionSearchResult>
    <common-tab></common-tab>
  </div>
</template>

<script>
// @ is an alias to /src
import CommonHeader from "@/components/common/CommonHeader.vue";
import CommonTab from "@/components/common/CommonTab.vue";
import AttractionSearchHeaderVue from "@/components/attractionForCourse/AttractionSearchHeader.vue";
import AttractionSearchResult from "@/components/attractionForCourse/AttractionSearchResult.vue";
export default {
  name: "AttractionSearchResultView",

  components: {
    CommonHeader,
    CommonTab,
    AttractionSearchResult,
    AttractionSearchHeaderVue,
  },
};
</script>
