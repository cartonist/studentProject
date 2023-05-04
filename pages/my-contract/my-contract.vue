<template>
	<view class="my-contract">
		<MyHeader title="我的协议" :isBack="false"></MyHeader>
		<view class="get-in" v-if="!token">
			<image src="@/static/img/empty.png" mode=""></image>
			<view class="text">请先入学</view>
		</view>
		<view class="sign-in" v-else-if="JSON.stringify(signInfo) == '{}'">
			<image src="@/static/img/empty.png" mode=""></image>
			<view class="text">请先签署协议</view>
		</view>
		<view class="protocal-container" v-else>
			<view class="contract-time">{{signInfo.sign_time}}</view>
			<image :src="signInfo.sign_img" mode=""></image>
		</view>
		<MyTabbar :currentIndex="currentIndex"></MyTabbar>
	</view>
</template>

<script setup>
	import MyTabbar from '@/components/common/my-tabbar.vue'
	import MyHeader from '@/components/common/class-header.vue'
	import {
		computed
	} from "vue";
	import {
		useStore
	} from 'vuex';
	let currentIndex = 3
	const store = useStore()
	const token = computed(() => store.state.user.token)
	const signInfo = computed(() => store.state.sign.signInfo)
</script>

<style lang="scss" scoped>
	.my-contract {
		height: 100vh;
		width: 100vw;
		background-color: #f3f4f6;

		.get-in,
		.sign-in {
			display: flex;
			align-items: center;
			flex-direction: column;
			justify-content: center;
			height: 500rpx;

			image {
				width: 400rpx;
				height: 300rpx;
			}

			.text {
				font-size: 36rpx;
				padding: 10rpx 40rpx;
				background-color: #0054ff;
				color: #fff;
				border-radius: 35rpx;
			}
		}
	}
</style>
