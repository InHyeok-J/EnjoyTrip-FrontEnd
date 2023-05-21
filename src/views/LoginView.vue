<template>
	<div>
		<not-logo-header></not-logo-header>
		<login-home></login-home>
		<common-tab></common-tab>
	</div>
</template>

<script>
import LoginHome from '@/components/login/LoginHome.vue';
import NotLogoHeader from '@/components/common/NotLogoHeader.vue';
import CommonTab from '@/components/common/CommonTab.vue';
export default {
	name: 'LoginView',
	components: { LoginHome, NotLogoHeader, CommonTab },
};
</script>

<style></style>
