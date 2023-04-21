<template>
	<view class="class-detail">
		<ClassHeader :title="title" class="header"></ClassHeader>
		<scroll-view scroll-y="true" class="scroll-vertical" :style="{height: scrollHeight+'px'}">
			<view>
				<!-- banner -->
				<view class="banner-bg">
					<view class="sign-btn" @click="goEnterSchool">
						立即填写 >
					</view>
				</view>
				<!-- 按钮 -->
				<view class="school-content">
					<MangaList></MangaList>
				</view>
				<!-- 名人堂 -->
				<view class="famous">
					<view class="title">名人堂</view>
					<scroll-view scroll-x="true">
						<view class="scroll-item">
							<CelebrityList :celebList="celebList"></CelebrityList>
						</view>
					</scroll-view>
				</view>
				<!-- 公告 -->
				<view class="notice">
					<Notice :noticeList="noticeList"></Notice>
				</view>
			</view>
		</scroll-view>
		<view class="pop" v-if="isPop">
			<view class="pop-mask"></view>
			<view class="pop-box">
				<view class="pop-content">
					<view class="close" @click="closePop">
						<image src="/static/img/delete.png" mode=""></image>
					</view>
					<view class="btn" @click="goEnterSchool">快速入学</view>
				</view>
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
	import ClassHeader from '@/components/common/class-header.vue'
	import MangaList from '@/components/class-detail/MangaList.vue'
	import CelebrityList from '@/components/class-detail/CelebrityList.vue'
	import Notice from '@/components/class-detail/Notice.vue'
	import {
		getExcelList
	} from '../../api/excel';
	import {
		getNoticeList
	} from '../../api/notice';
	const {
		proxy,
	} = getCurrentInstance();
	const scrollHeight = ref("")
	const title = ref("")
	const isPop = ref(true)
	const closePop = () => {
		isPop.value = false
	}
	// 名人堂数据列表
	const celebList = ref([])
	// 通知数据列表
	const noticeList = ref([])
	onLoad((option) => {
		// console.log(JSON.parse(option.item))
		const item = JSON.parse(option.item)
		title.value = item.class_name
		__init()
		// 获取屏幕的高度
		uni.getSystemInfo({
			success: (res) => {
				// 获取头部的高度
				let info = uni.createSelectorQuery().in(proxy).select('.header')
				info.boundingClientRect((data) => {
					// data包含元素的高度信息
					// data.height 头部的高度
					// console.log(data)
					scrollHeight.value = res.windowHeight - data.height
				}).exec(function(res) {
					//这个方法必须执行，即使什么也不做，否则不会获取到信息
				})

			}
		})
	})
	const __init = async () => {
		const excelData = await getExcelList()
		celebList.value = excelData
		const noticeData = await getNoticeList()
		noticeList.value = noticeData
	}
	const goEnterSchool = () => {
		uni.navigateTo({
			url: "/pages/enter-school/enter-school"
		})
	}
</script>

<style lang="scss" scoped>
	.class-detail {
		.scroll-vertical {
			height: 1000rpx;
		}

		background-color: #f3f4d6;
		width: 100vw;
		height: 100vh;
		box-sizing: border-box;
		background-color: #f3f4f6;

		.banner-bg {
			position: relative;
			width: 100vw;
			height: 295rpx;
			background: url("https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/banner.png") no-repeat;
			background-size: contain;

			.sign-btn {
				position: absolute;
				top: 195rpx;
				left: 60rpx;
				width: 173rpx;
				height: 44rpx;
				font-size: 28rpx;
				color: #fff;
				padding: 5rpx 10rpx;
				text-align: center;
				line-height: 44rpx;
				border: 1px solid #fff;
				border-radius: 40rpx;
			}
		}

		.school-content {
			padding: 40rpx 37rpx;
		}

		.famous {
			.title {
				width: 102rpx;
				height: 33rpx;
				font-size: 34rpx;
				font-weight: 700;
				color: #252525;
				margin-top: 54rpx;
				// margin-bottom: 36rpx;
				padding-left: 24rpx;
			}

			.scroll-item {
				display: inline-block;
			}
		}

		.pop {
			position: fixed;
			top: 0;
			left: 0;
			z-index: 999;
			width: 100%;
			height: 100%;

			.pop-mask {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background-color: rgba(0, 0, 0, .3);
			}

			.pop-box {
				position: absolute;
				z-index: 999;
				top: 50%;
				left: 50%;
				width: 500rpx;
				height: 700rpx;
				transform: translate(-50%, -50%);

				.pop-content {
					width: 500rpx;
					height: 693rpx;
					background: url('https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/pop-bg.png') no-repeat;
					background-size: contain;

					.close {
						width: 63rpx;
						height: 63rpx;
						position: absolute;
						right: -20rpx;
						top: -20rpx;
						border-radius: 63rpx;
						background-color: #fff;
						display: flex;
						align-items: center;
						justify-content: center;

						image {
							width: 40rpx;
							height: 40rpx;
						}
					}

					.btn {
						width: 420rpx;
						height: 80rpx;
						position: absolute;
						left: 45rpx;
						bottom: 76rpx;
						border-radius: 40rpx;
						text-align: center;
						line-height: 80rpx;
						color: #fff;
						font-size: 34rpx;
						font-weight: 700;
						background-image: linear-gradient(180deg, #FCCF31 10%, #F55555 100%);
						box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
					}
				}
			}
		}
	}
</style>
