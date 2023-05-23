<template>
  <div>
    <common-header></common-header>
    <attraction-search></attraction-search>
    <common-tab></common-tab>
  </div>
</template>

<script>
// @ is an alias to /src
import CommonHeader from '@/components/common/CommonHeader.vue';
import CommonTab from '@/components/common/CommonTab.vue';
import AttractionSearch from '@/components/attraction/AttractionSearch.vue';
export default {
  name: 'AttractionSearchView',

  components: { CommonHeader, CommonTab, AttractionSearch },
};
</script>
