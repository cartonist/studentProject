<template>
	<view class="interview-process">
		面试流程
		<MyHeader :isBack="false" title="面试流程"></MyHeader>
		<view class="process">
			<view class="process-content">
				<!-- 面试流程组件 -->
				<ProcessItem :processList="processList"></ProcessItem>
			</view>
		</view>
		<MyTabbar :currentIndex="currentIndex"></MyTabbar>
	</view>
</template>

<script setup>
	import MyTabbar from '@/components/common/my-tabbar.vue'
	import MyHeader from '@/components/common/class-header.vue'
	import ProcessItem from '@/components/process/process-item.vue'
	import {
		getProcessList
	} from '../../api/process';
	let currentIndex = 2
	import {
		onLoad,
		onReady
	} from '@dcloudio/uni-app'
	import {
		getCurrentInstance,
		ref
	} from "vue";
	const processList = ref([])
	onLoad(() => {
		__init()
	})
	const __init = async () => {
		const res = await getProcessList()
		processList.value = res
		console.log(res)
	}
</script>

<style lang="scss" scoped>
	.process {
		width: 750rpx;
		padding-top: 20rpx;
		padding-bottom: 80rpx;
		background: url("https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/process-bg.png") no-repeat;
		background-size: cover;
		box-sizing: border-box;
		position: relative;

		.process-content {
			width: 750rpx;
			height: 100%;
			// position: absolute;
			top: 0;
			left: 10rpx;
			padding-bottom: 4rpx;
		}
	}
</style>
