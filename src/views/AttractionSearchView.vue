<template>
	<div>
		<common-header></common-header>
		<common-tab></common-tab>
	</div>
</template>

<script>
// @ is an alias to /src
import CommonHeader from '@/components/common/CommonHeader.vue';
import CommonTab from '@/components/common/CommonTab.vue';
export default {
	name: 'AttractionSearchView',

	components: { CommonHeader, CommonTab },
};
</script>
