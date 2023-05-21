<template>
	<div>
		<not-logo-header title="회원가입" shadow="is-shadow"></not-logo-header>
		<sign-up-nickname-main></sign-up-nickname-main>
	</div>
</template>

<script>
import NotLogoHeader from '@/components/common/NotLogoHeader.vue';
import SignUpNicknameMain from '@/components/signup/SignUpNicknameMain.vue';
export default {
	name: 'SignUpNicknameView',
	components: { NotLogoHeader, SignUpNicknameMain },
};
</script>

<style></style>
