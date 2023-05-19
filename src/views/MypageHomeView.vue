<template>
  <div>
    <common-header/>
    <mypage-home/>
    <common-footer/>
  </div>
</template>

<script>
import CommonHeader from "@/components/common/CommonHeader.vue"
import MypageHome from "@/components/mypage/MypageHome.vue"
import CommonFooter from "@/components/common/CommonFooter.vue"
export default {
  components: { CommonHeader, MypageHome, CommonFooter },

}
</script>

<style>

</style>