<template>
	<view class="show-contract-container">
		<view class="contract-header">
			<image src="https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/title.png" mode=""></image>
		</view>
		<scroll-view scroll-y="true" class="contract" :style="'height:'+scrollHeight+'px'">
			<!-- 表示每一个班型 -->
			<view class="sign-item">
				<view class="item-title">
					<text>实训营</text>
				</view>
				<view class="item-context">
					<view class="context-text">
						<rich-text>学习周期一个月</rich-text>
						<rich-text>学习周期一个月</rich-text>
						<rich-text>学习周期一个月</rich-text>
						<rich-text>学习周期一个月</rich-text>

					</view>
				</view>
				<view class="sign-footer">
					<rich-text>结尾</rich-text>
				</view>
			</view>
			<view class="sign-item">
				<view class="item-title">
					<text>实训营</text>
				</view>
				<view class="item-context">
					<view class="context-text">
						<rich-text>学习周期一个月</rich-text>
						<rich-text>学习周期一个月</rich-text>
						<rich-text>学习周期一个月</rich-text>
						<rich-text>学习周期一个月</rich-text>
						<rich-text>学习周期一个月</rich-text>
						<rich-text>学习周期一个月</rich-text>
						<rich-text>学习周期一个月</rich-text>
						<rich-text>学习周期一个月</rich-text>
					</view>
				</view>
				<view class="sign-footer">
					<rich-text>结尾</rich-text>
				</view>
			</view>
			<view class="sign-item">
				<view class="item-title">
					<text>实训营</text>
				</view>
				<view class="item-context">
					<view class="context-text">
						<rich-text>学习周期一个月</rich-text>
						<rich-text>学习周期一个月</rich-text>
						<rich-text>学习周期一个月</rich-text>
						<rich-text>学习周期一个月</rich-text>
					</view>
				</view>
				<view class="sign-footer">
					<rich-text>结尾</rich-text>
				</view>
			</view>
		</scroll-view>
		<view class="footer">
			<view class="contract-know" @tap="goBack">
				我知道了
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		onLoad,
		onReady
	} from '@dcloudio/uni-app'
	import {
		getCurrentInstance,
		ref
	} from "vue";
	let scrollHeight = ref(0)
	const {
		proxy,
	} = getCurrentInstance();
	const goBack = () => {
		uni.navigateBack({
			delta: 1
		})
	}
	onReady(() => {
		// 获取屏幕的高度
		uni.getSystemInfo({
			success: (res) => {
				// 获取头部的高度
				let head = uni.createSelectorQuery().in(proxy).select('.contract-header')
				head.boundingClientRect((data) => {
					// data包含元素的高度信息
					// data.height 头部的高度
					// console.log(res.windowHeight)
					scrollHeight.value = res.windowHeight - data.height
				}).exec(function(res) {
					//这个方法必须执行，即使什么也不做，否则不会获取到信息
				})
				// 获取footer的高度
				let footer = uni.createSelectorQuery().in(proxy).select('.footer')
				footer.boundingClientRect((data) => {
					scrollHeight.value = scrollHeight.value - data.height
					// console.log(scrollHeight.value)
				}).exec(function(res) {})

			}
		})
	})
</script>

<style lang="less" scoped>
	.show-contract-container {
		width: 100vw;
		height: 100vh;
		background: url(https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/sign-bg.png) no-repeat;
		background-size: cover;
		padding-bottom: 200rpx;
		box-sizing: border-box;

		.contract-header {
			width: 100%;
			height: 300rpx;
			position: relative;

			image {
				width: 622rpx;
				height: 93rpx;
				position: absolute;
				left: 50%;
				top: 150rpx;
				transform: translateX(-50%);
			}
		}

		.contract {
			width: 702rpx;
			margin: 0 auto;
			height: 702rpx;

			.sign-item {
				width: 100%;
				// display: flex;
				// flex-direction: column;
			}

			.item-title {
				width: 100%;
				height: 100rpx;
				position: relative;
				background: url('https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/sign-bg-title.png') no-repeat;
				background-size: 100% 100%;

				text {
					position: absolute;
					top: 10rpx;
					left: 50%;
					transform: translateX(-50%);
					font-size: 48rpx;
					font-weight: 400;
					color: #5d6fe5;
					line-height: 60rpx;
				}
			}

			.item-context {
				width: 100%;
				background: url('https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/item-bg.png') no-repeat;
				background-size: 100% 100%;

				.context-text {
					padding: 20rpx 40rpx;
					font-size: 30rpx;
					font-family: Microsoft YaHei;
					font-weight: 400;
					color: #7a8bff;
				}
			}

			.sign-footer {
				width: 100%;
				background: url('https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/sign-bg-footer.png') no-repeat;
				background-size: 100% 100%;
				margin-bottom: 20rpx;
			}
		}

		.footer {
			width: 100vw;
			height: 200rpx;
			position: relative;

			.contract-know {
				width: 520rpx;
				height: 80rpx;
				font-size: 30rpx;
				font-family: Microsoft Yahei;
				font-weight: normal;
				color: #5d6fe5;
				text-align: center;
				line-height: 80rpx;
				background-color: #fff;
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%);
				border-radius: 20rpx;
			}
		}
	}
</style>
