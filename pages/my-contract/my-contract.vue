<template>
	<view class="my-contract">
		我的协议
		<MyTabbar :currentIndex="currentIndex"></MyTabbar>
	</view>
</template>

<script setup>
	import MyTabbar from '@/components/common/my-tabbar.vue'
	let currentIndex = 3
</script>

<style>
</style>
