<template>
	<view class="syvideo-container">
		<video :src="video" :controls="true" :enable-play-gesture="true"></video>
	</view>
</template>

<script setup>
	defineProps(['video'])
</script>

<style lang="scss" scoped>
	.syvideo-container {
		width: 600rpx;

		video {
			width: 600rpx;
		}
	}
</style>
