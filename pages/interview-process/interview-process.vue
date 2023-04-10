<template>
	<view class="interview-process">
		面试流程
		<MyTabbar :currentIndex="currentIndex"></MyTabbar>
	</view>
</template>

<script setup>
	import MyTabbar from '@/components/common/my-tabbar.vue'
	let currentIndex = 2
</script>

<style>
</style>
