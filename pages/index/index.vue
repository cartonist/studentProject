<template>
	<view class="index">
		<view class="">
			首页
		</view>
		<MyTabbar :currentIndex="currentIndex"></MyTabbar>
	</view>
</template>

<script setup>
	import MyTabbar from '@/components/common/my-tabbar.vue'
	import {
		onLoad
	} from '@dcloudio/uni-app'
	let currentIndex = 0
	onLoad(() => {})
</script>

<style>

</style>
