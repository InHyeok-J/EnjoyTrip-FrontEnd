<template>
	<div>
		<common-header />
		<mypage-home />
		<common-tab></common-tab>
	</div>
</template>

<script>
import CommonHeader from '@/components/common/CommonHeader.vue';
import MypageHome from '@/components/mypage/MypageHome.vue';
import CommonTab from '@/components/common/CommonTab.vue'
export default {
	components: { CommonHeader, MypageHome, CommonTab },
};
</script>

<style></style>
