<template>
  <div>
    <common-header />
    <mypage-home />
  </div>
</template>

<script>
import CommonHeader from '@/components/common/CommonHeader.vue';
import MypageHome from '@/components/mypage/MypageHome.vue';
export default {
  components: { CommonHeader, MypageHome },
};
</script>

<style></style>
