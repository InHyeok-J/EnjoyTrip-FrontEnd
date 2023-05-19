<template>
  <div>
    <mypage-user-manage/>
    <common-footer/>
  </div>
</template>

<script>
import CommonFooter from "@/components/common/CommonFooter.vue"
import MypageUserManage from "@/components/mypage/MypageUserManage.vue"
export default {
  components: {
    CommonFooter,
    MypageUserManage
  },

}
</script>

<style>

</style>