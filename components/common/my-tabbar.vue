<template>
	<view class="my-tabbar">
		<view class="tabbar-list">
			<view class="tabbar-list-ul">
				<view class="tabbar-list-li" v-for="(item, index) in tabbarList" :key="index" @click="tapBar(index)">
					<view class="tabbar-list-li-icon">
						<image :src="currentIndex == index?item.selectedPath:item.iconPath" mode=""></image>
					</view>
					<view class="tabbar-list-li-name" :class="currentIndex == index?'text-blue':''">{{item.text}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from "vue"
	defineProps(['currentIndex'])
	let tabbarList = ref([{
		pagePath: '/pages/index/index', //开头要添加上 '/'
		iconPath: '/static/img/home.png',
		selectedPath: '/static/img/home_blue.png',
		text: '首页'
	}, {
		pagePath: '/pages/interview-question/interview-question',
		iconPath: '/static/img/question.png',
		selectedPath: '/static/img/question_blue.png',
		text: '刷面试题'
	}, {
		pagePath: '/pages/interview-process/interview-process',
		iconPath: '/static/img/process.png',
		selectedPath: '/static/img/process_blue.png',
		text: '面试流程'
	}, {
		pagePath: '/pages/my-contract/my-contract',
		iconPath: '/static/img/contract.png',
		selectedPath: '/static/img/contract_blue.png',
		text: '我的协议'
	}, {
		pagePath: '/pages/my-card/my-card',
		iconPath: '/static/img/card.png',
		selectedPath: '/static/img/card_blue.png',
		text: '我的名片'
	}])
	// let currentIndex = ref(0)
	let tapBar = (index) => {
		// currentIndex.value = index
		uni.switchTab({
			url: tabbarList.value[index].pagePath
		})
	}
</script>

<style lang="less" scoped>
	.my-tabbar {
		width: 100%;
		position: fixed;
		left: 0;
		bottom: 0;
		position: fixed;
		box-sizing: border-box;

		.tabbar-list {
			// width: 100%;
			// position: fixed;
			// left: 0;
			// bottom: 0;
			color: #344356;
			background-color: #fff;
			box-shadow: 0px -12px 37px 0px rgba(230, 235, 243, 0.9);
			border-top-left-radius: 30rpx;
			border-top-right-radius: 30rpx;
			box-sizing: border-box;

			.tabbar-list-ul {
				width: 100%;
				height: 100%;
				display: flex;
				justify-content: space-around;
				align-items: center;
				box-sizing: border-box;
			}

			.tabbar-list-li-icon {
				width: 56rpx;
				height: 56rpx;
				margin: 0 auto;
				padding: 20rpx 0;

				image {
					width: 100%;
					height: 100%;
				}
			}

			.tabbar-list-li-name {
				width: 100%;
				height: 40rpx;
				text-align: center;
				line-height: 40rpx;
				font-size: 28rpx;
				font-family: Microsoft YaHei;
			}
		}
	}

	.text-blue {
		color: #1296db;
	}
</style>
