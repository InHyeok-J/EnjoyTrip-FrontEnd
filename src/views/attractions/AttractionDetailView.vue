<template>
  <div>
    <common-header></common-header>
    <attraction-detail></attraction-detail>
    <common-tab></common-tab>
  </div>
</template>

<script>
// @ is an alias to /src
import CommonHeader from "@/components/common/CommonHeader.vue";
import CommonTab from "@/components/common/CommonTab.vue";
import AttractionDetail from "@/components/attraction/AttractionDetail.vue";
export default {
  name: "AttractionDetailView",
  components: { CommonHeader, CommonTab, AttractionDetail },
};
</script>
