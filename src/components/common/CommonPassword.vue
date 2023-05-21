<template>
	<div>
		<common-input
			:placeholder="placeholder"
			:inputvalue="inputvalue"
			:type="`${isViewPassword ? 'text' : 'password'}`"
			@onChange="onChangeFun"
		></common-input>
		<div class="view-block">
			<img
				:src="
					require(`@/assets/${isViewPassword ? 'ViewOn.png' : 'ViewOff.png'}`)
				"
				class="pass-view"
				@click="changeViewMode"
			/>
		</div>
	</div>
</template>

<script>
import CommonInput from './CommonInput.vue';
export default {
	name: 'CommonPassword',
	components: { CommonInput },
	props: ['placeholder', 'inputvalue', 'onChangeFun'],
	data() {
		return {
			isViewPassword: false,
		};
	},
	methods: {
		changeViewMode() {
			this.isViewPassword = !this.isViewPassword;
		},
	},
};
</script>

<style>
.view-block {
	float: right;
}
.pass-view {
	position: relative;
	margin-right: 15px;
	margin-top: -70px;
	z-index: 1;
	cursor: pointer;
}
</style>
