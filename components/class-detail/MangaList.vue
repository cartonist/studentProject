<template>
	<view class="manga-list-container">
		<view class="manga-item" @click="goArchives(id)">
			<image src="/static/img/icon1.png" mode="" class="item-icon"></image>
			<view class="item-text">
				档案管理
			</view>
		</view>
		<view class="manga-item" @click="goMyContract">
			<image src="/static/img/icon2.png" mode="" class="item-icon"></image>
			<view class="item-text">
				我的协议
			</view>
		</view>
		<view class="manga-item" @click="goSign">
			<image src="/static/img/icon3.png" mode="" class="item-icon"></image>
			<view class="item-text">
				签署协议
			</view>
		</view>
		<view class="manga-item" @click="goConsult">
			<image src="/static/img/icon4.png" mode="" class="item-icon"></image>
			<view class="item-text">
				咨询帮助
			</view>
		</view>
	</view>
</template>

<script setup>
	defineProps(['id'])
	const goConsult = () => {
		uni.navigateTo({
			url: '/pages/consult/consult'
		})
	}
	const goArchives = (id) => {
		uni.navigateTo({
			url: '/pages/archives/archives?id=' + id
		})
	}
	const goSign = () => {
		uni.navigateTo({
			url: '/pages/sign-contract/sign-contract'
		})
	}
	const goMyContract = () => {
		uni.switchTab({
			url: '/pages/my-contract/my-contract'
		})
	}
</script>

<style lang="scss" scoped>
	.manga-list-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;

		.item-icon {
			width: 108rpx;
			height: 108rpx;
		}

		.item-text {
			width: 100%;
			text-align: center;
			font-size: 26rpx;
			font-weight: 400;
			color: #222;
			padding-top: 10rpx;
		}
	}
</style>
