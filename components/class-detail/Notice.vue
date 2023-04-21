<template>
	<view class="notice-container" style="overflow: hidden;">
		<swiper style="height: 100rpx;" circular autoplay interval="3000" duration="500" vertical
			easing-function="linear">
			<swiper-item v-for="item in noticeList" :key="item.id">
				<view class="notice-item notice-normal">
					<image src="/static/img/notice.png" mode=""></image>
					<view class="notice-text">
						<text>{{item.notice_title}}</text>
					</view>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script setup>
	defineProps(['noticeList'])
</script>

<style lang="scss">
	.notice-container {
		width: 100%;
		height: 60rpx;
		border-radius: 10rpx;
		padding-bottom: 20rpx;
		padding-top: 20rpx;

		.notice-item {
			width: 674rpx;
			height: 60rpx;
			border-radius: 10rpx;
			display: flex;
			align-items: center;
			margin: 0 auto;
			padding: 20rpx 20rpx;
			box-sizing: border-box;

			image {
				width: 39rpx;
				height: 39rpx;
			}

			.notice-text {
				margin-left: 10rpx;
				padding: 0 10rpx;
				font-size: 32rpx;
			}
		}

		.notice-normal {
			background: rgba(53, 140, 248, .12);
			border: 2rpx solid #358cf8;
			border-radius: 32rpx;
			color: #358cf8;
		}

		.notice-warn {
			background: rgba(248, 140, 53, .12);
			border: 2rpx solid #e98f36;
			border-radius: 32rpx;
			color: #e98f36;
		}
	}
</style>
