<template>
	<div class="header" :class="`${shadow}`">
		<img
			class="chevron"
			src="@/assets/chevron.svg"
			alt="back icon"
			@click="moveBack"
		/>
		<div v-if="title" class="title-text">{{ title }}</div>
	</div>
</template>

<script>
export default {
	name: 'NotLogoHeader',
	methods: {
		moveBack() {
			const path = this.$route.path;
			if (path.includes('signup')) {
				this.$router.push('/login');
				return;
			}
			this.$router.push('/');
		},
	},
	props: ['title', 'shadow'],
};
</script>

<style scoped>
.is-shadow {
	border-bottom: 1px solid #e7e7e7;
	box-shadow: 0 6px 6px -6px #e7e7e7;
}
.header {
	height: 54px;
	display: flex;
	align-items: center;
	/* padding: 0 14px; */
}
.chevron {
	position: absolute;
	width: 24px;
	height: 24px;
	left: 26px;
	top: 18px;

	opacity: 0.8;
}
.header > img {
	cursor: pointer;
}
.title-text {
	font-weight: bold;
	font-size: 18px;
}
</style>
