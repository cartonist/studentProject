<template>
	<view class="process-container">
		<view class="process-item">
			<view class="item" v-for="item in processList" :key="item.id">
				<view class="item-title">
					<!-- <image src="/static/logo.png" mode=""></image> -->
					<view class="tag"></view>
					<view class="title-content">
						{{item.title}}
					</view>
				</view>
				<view class="item-content">
					<block v-for="child in item.child" :key="child.id">
						<!-- 内容组件 -->
						<ProcessChild :child="child"></ProcessChild>
					</block>
				</view>
				<view class="item-book">
					<image src="/static/img/book.png" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import ProcessChild from '@/components/process/process-child.vue'
	defineProps(['processList'])
</script>

<style lang="scss" scoped>
	.process-container {
		width: 702rpx;
		height: 100%;
		position: relative;
		top: 0;
		left: 17rpx;
		padding-bottom: 40rpx;

		.process-item {
			width: 692rpx;
			height: 100%;
			border-radius: 15rpx;
			background-color: #fff;
			margin-bottom: 60rpx;
			position: relative;
			left: 10rpx;
			border: 2rpx solid #fff;
		}

		.item {
			width: 640rpx;
			border: 6rpx dashed #ccc;
			position: relative;
			margin: 20rpx;

			.item-book {
				position: absolute;
				right: 40rpx;
				top: 10rpx;

				image {
					width: 80rpx;
					height: 80rpx;
				}
			}

			.item-title {
				height: 86rpx;
				position: relative;
				left: -40rpx;
				top: 10rpx;
				display: flex;
				align-items: center;

				.tag {
					width: 40rpx;
					height: 66rpx;
					position: relative;
					background-color: rgb(255, 203, 65);

					&::after {
						content: '';
						display: inline-block;
						position: absolute;
						width: 0;
						height: 0;
						top: 66rpx;
						left: 0;
						border-left: 16rpx solid transparent;
						border-right: 16rpx solid orange;
						border-top: 26rpx solid orange;
						border-bottom: 26rpx solid transparent;
					}
				}

				.title-content {
					padding: 0 40rpx;
					height: 66rpx;
					line-height: 66rpx;
					background-color: rgb(255, 203, 65);
					position: absolute;
					left: 10rpx;
					font-size: 40rpx;
					font-weight: 400;
					color: #2a2929;
				}
			}
		}
	}
</style>
