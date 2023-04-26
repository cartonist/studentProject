<template>
	<view class="interview-question">
		<!-- 头部 -->
		<MyHeader title="面试题" :isBack="false"></MyHeader>
		<!-- 内容部分 -->
		<view class="question-content">
			<!-- 搜索区域 -->
			<view class="question-header">
				<input type="text" value="" placeholder="请输入关键字">
				<image src="/static/img/search.png" mode=""></image>
			</view>
			<scroll-view scroll-y="true" :style="'height:'+scrollHeight+'px'">
				<view class="commidty">
					<!-- 面试题板块 -->
					<QuestionCommidty :questionList="questionList"></QuestionCommidty>
				</view>
			</scroll-view>
		</view>
		<MyTabbar :currentIndex="currentIndex"></MyTabbar>
	</view>
</template>

<script setup>
	import MyHeader from '@/components/common/class-header.vue'
	import MyTabbar from '@/components/common/my-tabbar.vue'
	import QuestionCommidty from '@/components/question/question-commidty.vue'
	import {
		onLoad,
		onReady
	} from '@dcloudio/uni-app'
	import {
		getCurrentInstance,
		ref
	} from "vue";
	import {
		getQuestionsTypeList
	} from '../../api/questions';
	const {
		proxy,
	} = getCurrentInstance();
	let currentIndex = 1
	// 滑动组件的高度
	let scrollHeight = ref(0)
	// 用户列表数据
	const questionList = ref([])
	onLoad(() => {
		__init()
	})
	onReady(() => {
		// 获取屏幕的高度
		uni.getSystemInfo({
			success: (res) => {
				// 获取滑动组件的高度
				let info = uni.createSelectorQuery().in(proxy).select('.question-header')
				info.boundingClientRect((data) => {
					scrollHeight.value = res.screenHeight - data.height - (136 + 164 + 60) *
						res
						.windowWidth / 750
				}).exec(function(res) {
					//这个方法必须执行，即使什么也不做，否则不会获取到信息
				})

			}
		})
	})
	const __init = async () => {
		const res = await getQuestionsTypeList()
		console.log(res)
		questionList.value = res
	}
</script>

<style lang="scss" scoped>
	.interview-question {
		width: 100vw;
		height: 100vh;
		background: url("https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/question-bg.png") repeat fixed center;

		.question-content {
			padding: 0 35rpx;
		}

		.question-header {
			width: 680rpx;
			height: 80rpx;
			line-height: 80rpx;
			margin-bottom: 30rpx;
			margin-top: 30rpx;
			background-color: #fff;
			border-radius: 45rpx;
			position: relative;

			input {
				width: 680rpx;
				height: 80rpx;
				line-height: 80rpx;
				text-align: center;
				font-size: 30rpx;
				font-weight: 400;
			}

			image {
				width: 36rpx;
				height: 38rpx;
				position: absolute;
				top: 20rpx;
				right: 30rpx;
			}
		}
	}
</style>
