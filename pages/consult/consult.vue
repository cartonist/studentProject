<template>
	<view class="consult-container">
		<MyHeader :title="'咨询帮助'"></MyHeader>
		<view class="help-content" v-if="consultList.length">
			<view class="help-item" v-for="item in consultList" :key="item.id">
				<image src="/static/img/consult.png" mode=""></image>
				<view class="item-main">
					<view class="main-title">{{item.name}}</view>
					<view class="main-phone">{{item.phone}}</view>
				</view>
				<image src="/static/img/phone.png" mode=""></image>
			</view>
		</view>
		<view v-else class="help-content">暂无数据...</view>
		<view class="help-sure">确认</view>
	</view>
</template>

<script setup>
	import MyHeader from '@/components/common/class-header.vue'
	import {
		onLoad,
		onReady
	} from '@dcloudio/uni-app'
	import {
		getCurrentInstance,
		ref
	} from "vue";
	import {
		getConsultList
	} from '../../api/consult';
	const consultList = ref([])
	const __init = async () => {
		const res = await getConsultList()
		consultList.value = res
	}
	onLoad(() => {
		__init()
	})
</script>

<style lang="scss" scoped>
	.consult-container {
		width: 100%;
		height: 100%;

		.help-content {
			background-color: #fff;
		}

		.help-item {
			display: flex;
			align-items: center;
			padding: 40rpx;
			border-bottom: 2rpx solid #F3F4F6;
			box-sizing: border-box;

			image {
				width: 33rpx;
				height: 36rpx;
			}

			.item-main {
				flex: 1;
				padding: 0 20rpx;

				.item-title {
					font-size: 28rpx;
					color: #333;
					padding-bottom: 20rpx;
				}

				.main-phone {
					font-size: 24rpx;
					font-weight: 400;
					color: #999;
					padding: 20rpx 0;
					opacity: 0.8;
				}
			}
		}

		.help-sure {
			width: 420rpx;
			height: 80rpx;
			background: #0066FF;
			color: #fff;
			text-align: center;
			line-height: 80rpx;
			border-radius: 40rpx;
			font-size: 32rpx;
			font-weight: 400;
			position: absolute;
			left: 50%;
			bottom: 100rpx;
			transform: translateX(-50%);
		}
	}
</style>
