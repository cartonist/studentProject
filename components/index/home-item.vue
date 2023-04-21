<template>
	<view class="home-item-container" @tap="goDetail(item)">
		<view class="item-bg" :style="'background: url('+item.class_path+') no-repeat; background-size: cover;'">
			<view class="item-content">
				<img src="/static/img/left.png" alt="">
				<text>{{item.class_name}}</text>
				<img src="/static/img/right.png" alt="">
			</view>
		</view>
	</view>

</template>

<script setup>
	defineProps(['item'])
	const goDetail = (item) => {
		uni.navigateTo({
			url: '/pages/class-detail/class-detail?item=' + JSON.stringify(item)
		})
	}
</script>

<style lang="less" scoped>
	.home-item-container {
		position: relative;
		width: 350rpx;
		height: 350rpx;
		background-color: #fff;
		border-radius: 20rpx;
		margin: 10rpx;

		.item-bg {
			position: absolute;
			width: 320rpx;
			height: 320rpx;
			top: 15rpx;
			left: 15rpx;



			.item-content {
				padding-top: 260rpx;
				height: 60rpx;
				line-height: 60rpx;
				text-align: center;


				image {
					width: 32rpx;
					height: 32rpx;
					vertical-align: middle;
				}

				text {
					font-size: 32rpx;
					padding: 0 20rpx;
					color: #fff;
					vertical-align: middle;
				}
			}
		}
	}
</style>
