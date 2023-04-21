<template>
	<Celebrity :celebList="celebList"></Celebrity>
</template>

<script setup>
	import Celebrity from '@/components/class-detail/Celebrity.vue'
	defineProps({
		celebList: {
			type: Array,
			required: true
		}
	})
</script>

<style lang="scss">

</style>
