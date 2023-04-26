<template>
	<view class="question-item">
		<image :src="item.question_img" mode=""></image>
		<view class="item-text">
			<view class="item-title">{{item.question_title}}</view>
			<view class="item-tips">{{item.question_source}}</view>
		</view>
		<view class="item-start" @click="goSubject(item.id)">开始刷题</view>
	</view>
</template>

<script setup>
	defineProps(['item'])
	const goSubject = (id) => {
		uni.navigateTo({
			url: '/pages/subject/subject?id=' + id
		})
	}
</script>

<style lang="scss" scoped>
	.question-item {
		width: 100%;
		height: 150rpx;
		display: flex;
		margin-bottom: 20rpx;
		align-items: center;
		background-color: #fff;
		border-radius: 10rpx;

		image {
			width: 118rpx;
			height: 118rpx;
			padding: 20rpx;
		}

		.item-text {
			flex: 1;
			padding: 0 40rpx;
			flex-direction: column;
			justify-content: space-around;
			text-align: left;

			.item-title {
				height: 29rpx;
				font-size: 30rpx;
				color: #333;
				padding-bottom: 30rpx;
			}

			.item-tips {
				height: 24rpx;
				font-size: 24rpx;
				font-weight: 400;
				color: #afafaf;
			}
		}

		.item-start {
			width: 120rpx;
			height: 30rpx;
			line-height: 30rpx;
			padding: 20rpx;
			font-size: 30rpx;
			font-weight: 400;
			color: #0054ff;
		}
	}
</style>
