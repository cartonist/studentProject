<template>
	<view class="subject-container">
		<MyHeader title="刷面试题" class="header"></MyHeader>
		<view v-if="total > 0">
			<view class="subject-content">
				<!-- 计数 -->
				<view class="dots">
					{{currentIndex + 1}}/{{total}}
				</view>
				<!-- 左右轮播，上下滚动 -->
				<swiper :current="currentIndex" @change="toChangeTab" :style="'height:'+scrollHeight+'px;'">
					<swiper-item v-for="item in questionList">
						<scroll-view scroll-y="true" :style="'height:'+scrollHeight+'px;'">
							<SubjectItem :item="item"></SubjectItem>
						</scroll-view>
					</swiper-item>
				</swiper>
			</view>
			<!-- 底部，上下题 -->
			<view class="subject-check">
				<view class="last" @click="goBefore">上一题</view>
				<view class="next" @click="goAfter">下一题</view>
			</view>
		</view>
		<view v-else>
			<image src="@/static/img/null.png" mode="" style="width: 100vw"></image>
		</view>
	</view>
</template>

<script setup>
	import MyHeader from '@/components/common/class-header.vue'
	import SubjectItem from '@/components/subject/subject-item.vue'
	import {
		onLoad,
		onReady
	} from '@dcloudio/uni-app'
	import {
		getCurrentInstance,
		nextTick,
		onBeforeMount,
		ref
	} from "vue";
	import {
		getQuestionCount,
		getQuestinsList
	} from '../../api/questions';
	const {
		proxy,
	} = getCurrentInstance();
	const scrollHeight = ref(0)
	// 刷题列表的id
	const type_id = ref(0)
	// 刷题列表
	const questionList = ref({})
	// 总题数
	const total = ref(0)
	// 当前的swiper序号
	const currentIndex = ref(0)


	onLoad((options) => {
		type_id.value = options.id
		__init(type_id.value)
		getTotal(type_id.value)
	})
	const __init = async (id) => {
		const res = await getQuestinsList(id)
		questionList.value = res
	}
	// 获取总题数
	const getTotal = async (id) => {
		const res = await getQuestionCount(id)
		total.value = res.total
		// 动态地切换组件
		nextTick(() => {
			if (total.value > 0) {
				uni.getSystemInfo({
					success: (res) => {
						// 获取头部的高度
						let info = uni.createSelectorQuery().in(proxy).select('.header')
						info.boundingClientRect((data) => {
							// data包含元素的高度信息
							// data.height 头部的高度
							// console.log(data)
							// console.log(res.windowHeight)
							scrollHeight.value = res.windowHeight - data.height
						}).exec(function(res) {
							//这个方法必须执行，即使什么也不做，否则不会获取到信息
						})
						let dots = uni.createSelectorQuery().in(proxy).select('.dots')
						dots.boundingClientRect((data) => {
							scrollHeight.value = scrollHeight.value - data.height
						}).exec(function(res) {})
						let bottom = uni.createSelectorQuery().in(proxy).select(
							'.subject-check')
						bottom.boundingClientRect((data) => {
							scrollHeight.value = scrollHeight.value - data.height
							// console.log(scrollHeight.value)
						}).exec(function(res) {})
					}
				})
			}

		})
	}
	// 监听swiper-item的切换
	const toChangeTab = (e) => {
		currentIndex.value = e.detail.current
		// console.log(e.detail.current)
	}
	// 上一页
	const goBefore = () => {
		if (currentIndex.value == 0) {
			uni.showToast({
				title: '已经是第一页了',
				icon: 'none'
			});
		} else {
			currentIndex.value--;
		}
	}
	// 下一页
	const goAfter = () => {
		if (total.value == 0) {
			return
		}
		if (currentIndex.value == total.value - 1) {
			uni.showToast({
				title: '等待更新',
				icon: 'none'
			});
		} else {
			currentIndex.value++;
		}
	}
</script>

<style lang="scss" scoped>
	.subject-container {
		position: relative;
		width: 100vw;
		background-color: #f0f3f7;
		box-sizing: border-box;

		.subject-content {
			padding: 0 37rpx;
			width: 100%;
			box-sizing: border-box;

			.dots {
				height: 40rpx;
				line-height: 40rpx;
				text-align: center;
				font-size: 32rpx;
				font-weight: 500;
				color: #344356;
				opacity: .6;
			}
		}
	}

	.subject-check {
		position: fixed;
		width: 100%;
		left: 0;
		bottom: 0;
		display: flex;
		justify-content: space-around;
		align-items: center;

		view {
			width: 311rpx;
			height: 80rpx;
			line-height: 80rpx;
			text-align: center;
			border-radius: 40rpx;
			color: #fff;
		}

		.last {
			background-color: rgb(90, 103, 247);
		}

		.next {
			background-color: rgb(90, 139, 245);
		}
	}
</style>
