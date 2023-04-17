<template>
	<view class="home-container">
		<view class="section">
			<view class="header">
				<view class="home-title">
					小鹿线前端学院
				</view>
				<view class="home-school">
					入学信息入口
				</view>
				<view class="home-show">
					<text class="show-text" @click="goShowContract">查看班级权益</text>
					<image class="home-img" src="/static/img/icon-search.png" mode=""></image>
				</view>
			</view>
			<scroll-view scroll-y="true" :style="'height:'+scrollHeight+'px'">
				<Commodity></Commodity>
			</scroll-view>
		</view>
		<MyTabbar :currentIndex="currentIndex"></MyTabbar>
	</view>
</template>

<script setup>
	import MyTabbar from '@/components/common/my-tabbar.vue'
	import Commodity from '@/components/index/commodity.vue'
	import {
		onLoad,
		onReady
	} from '@dcloudio/uni-app'
	import {
		getCurrentInstance,
		ref
	} from "vue";
	const {
		proxy,
	} = getCurrentInstance();
	let currentIndex = 0
	let scrollHeight = ref(0)

	onLoad(() => {})
	onReady(() => {
		// 获取屏幕的高度
		uni.getSystemInfo({
			success: (res) => {
				// 获取头部的高度
				let info = uni.createSelectorQuery().in(proxy).select('.header')
				info.boundingClientRect((data) => {
					// data包含元素的高度信息
					// data.height 头部的高度
					console.log(res)
					// console.log(data)
					scrollHeight.value = res.screenHeight - data.height - res.windowWidth *
						136 / 750

				}).exec(function(res) {
					//这个方法必须执行，即使什么也不做，否则不会获取到信息
				})

			}
		})
	})
	const goShowContract = () => {
		uni.navigateTo({
			url: '/pages/show-contract/show-contract'
		})
	}
</script>

<style lang="less" scoped>
	.home-container {
		// url:本地资源图片无法通过 WXSS 获取，可以使用网络图片
		background: url("https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/bg.png") no-repeat;
		background-size: cover;
		width: 100vw;
		height: 100%;
		marign-right: 7rpx;
		box-sizing: border-box;

		.header {
			padding: 131rpx 37rpx 0 37rpx;
		}

		.home-title {
			width: 420rpx;
			height: 59rpx;
			font-size: 60rpx;
			font-family: Microsoft YaHei;
			font-weight: 400;
			color: #000CFF;
			line-height: 80rpx;
		}

		.home-school {
			width: 236rpx;
			height: 40rpx;
			font-size: 38rpx;
			font-family: Microsoft YaHei;
			font-weight: 400;
			color: #344356;
			opacity: .8;
			padding: 30rpx 0;
		}

		.home-show {
			width: 290rpx;
			height: 59rpx;
			display: flex;
			align-items: center;
			background-color: #5468ff;
			border-radius: 10rpx;
			padding-left: 30rpx;
			box-sizing: border-box;

			.show-text {
				font-size: 28rpx;
				font-family: Microsoft YaHei;
				font-weight: 400;
				color: #fff;

				&::after {
					content: '';
					// display: block;
					width: 1rpx;
					height: 31rpx;
					margin: 0 20rpx;
					border-left: 4rpx solid #fff;
				}
			}

			.home-img {
				width: 28rpx;
				height: 28rpx;
			}
		}
	}
</style>
