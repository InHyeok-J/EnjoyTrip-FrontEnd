<template>
  <div>
    <mypage-user-manage/>
    <common-tab/>
  </div>
</template>

<script>
import MypageUserManage from "@/components/mypage/MypageUserManage.vue"
import CommonTab from '@/components/common/CommonTab.vue'
export default {
  components: {
    MypageUserManage,
    CommonTab
  },

}
</script>

<style>

</style>