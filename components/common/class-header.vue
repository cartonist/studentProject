<template>
	<view class="header-container">
		<view class="nav_top">
			<view class="status-bar">

			</view>
			<view class="topContent">
				<view class="goBack" v-if="isBack">
					<slot name="left">
						<image src="/static/img/arrow-left.png" mode="" @click="goBack"></image>
					</slot>
				</view>
				<view class="title">
					<slot name="center">
						<view>{{title}}</view>
					</slot>
				</view>
			</view>
		</view>
		<view class="marginBox"></view>
	</view>
</template>

<script setup>
	defineProps({
		title: {
			type: String,
			required: true
		},
		isBack: {
			type: Boolean,
			default: true
		}
	})
	const goBack = () => {
		uni.navigateBack({
			delta: 1
		})
	}
</script>

<style lang="scss" scoped>
	.marginBox {
		height: 164rpx;
	}

	.nav_top {
		width: 100vw;
		height: 164rpx;
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #fff;
		z-index: 999;

		.status-bar {
			width: 100vw;
			height: 64rpx;
		}

		.topContent {
			width: 100vw;
			height: 100rpx;
			display: flex;
			align-items: center;
			position: relative;

			.goBack {
				width: 90rpx;
				height: 42rpx;
				padding-left: 20rpx;
				box-sizing: border-box;
				position: relative;
				font-size: 24rpx;

				image {
					position: absolute;
					left: 50%;
					top: 50%;
					transform: translate(-50%, -50%);
					width: 40rpx;
					height: 40rpx;
				}
			}

			.title {
				font-size: 32rpx;
				text-align: center;
				color: $scheme-font;
				position: absolute;
				top: 26rpx;
				left: 50%;
				transform: translateX(-50%);
				// margin-left: 240rpx;

			}
		}
	}
</style>
