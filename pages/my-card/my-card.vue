<template>
	<view class="my-card">
		我的名片
		<MyTabbar :currentIndex="currentIndex"></MyTabbar>
	</view>
</template>

<script setup>
	import MyTabbar from '@/components/common/my-tabbar.vue'
	let currentIndex = 4
</script>

<style>
</style>
