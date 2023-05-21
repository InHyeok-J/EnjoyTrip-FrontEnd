<template>
	<div>
		<not-logo-header title="회원가입" shadow="is-shadow"></not-logo-header>
		<sign-up-email-auth-main></sign-up-email-auth-main>
	</div>
</template>

<script>
import NotLogoHeader from '@/components/common/NotLogoHeader.vue';
import SignUpEmailAuthMain from '@/components/signup/SignUpEmailAuthMain.vue';
export default {
	name: 'SignUpEmailAuthView',
	components: { NotLogoHeader, SignUpEmailAuthMain },
};
</script>

<style></style>
