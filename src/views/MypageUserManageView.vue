<template>
  <div>
    <user-manage-header title="정보 수정" shadow="is-shadow"/>
    <mypage-user-manage/>
    <common-footer/>
  </div>
</template>

<script>
import CommonFooter from "@/components/common/CommonFooter.vue"
import UserManageHeader from "@/components/common/UserManageHeader.vue"
import MypageUserManage from "@/components/mypage/MypageUserManage.vue"
export default {
  components: { CommonFooter, UserManageHeader, MypageUserManage },

}
</script>

<style>

</style>