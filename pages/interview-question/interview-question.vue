<template>
	<view class="interview-question">
		刷面试题
		<MyTabbar :currentIndex="currentIndex"></MyTabbar>
	</view>
</template>

<script setup>
	import MyTabbar from '@/components/common/my-tabbar.vue'
	let currentIndex = 1
</script>

<style>
</style>
