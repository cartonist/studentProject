<template>
	<view class="child-container">
		<view class="plain-list" v-if="child.type != 2">
			<view class="list-plain">
				<image src="/static/img/gift.png" mode=""></image>
				<view class="list-title">{{child.title}}</view>
			</view>
			<view class="list-info" @click="goToLink(child)">{{child.remark}}</view>
		</view>
		<view class="plain-video" v-else>
			<view class="list-plain">
				<image src="/static/img/gift.png" mode=""></image>
				<view class="list-title">{{child.title}}</view>
			</view>
			<view class="video-content">
				<!-- 内容播放组件 -->
				<SyVideo :video="child.video"></SyVideo>
			</view>
		</view>
	</view>

</template>

<script setup>
	import SyVideo from '@/components/process/SyVideo.vue'
	defineProps(['child'])
	const goToLink = (child) => {

		if (child.type == '1') {
			uni.navigateTo({
				url: '/pages/subject/subject?id=' + child.question_list
			})
		} else {
			copy(child.link)
		}
	}
	const copy = (link) => {
		// 复制提示框
		uni.showModal({
			content: link, //模板中提示的内容
			confirmText: '复制',
			success: (res) => {
				if (res.confirm) { //用户点击确定
					uni.setClipboardData({
						data: link,
						success: () => {
							uni.showToast({
								title: '复制成功，请打开百度网盘APP',
								duration: 2000,
								icon: 'none'
							})
						},
						fail: () => {
							uni.showToast({
								title: '复制失败',
								duration: 2000,
								icon: 'none'
							})
						}
					})
				}
			}
		})
	}
</script>

<style lang="scss" scoped>
	.plain-list {
		display: flex;
		align-items: center;
		padding-bottom: 40rpx;
		padding-left: 30rpx;

		&:nth-child(1) {
			margin-top: 20rpx;
		}
	}

	.list-plain {
		display: flex;
		align-items: center;

		image {
			width: 37rpx;
			height: 34rpx;
			padding-right: -15rpx;
		}
	}


	.list-title {
		font-size: 30rpx;
		padding-right: 40rpx;
	}

	.list-info {
		font-size: 20rpx;
		color: #0072ff;
	}

	.plain-video {
		box-sizing: border-box;
		padding-left: 20rpx;
		// padding-bottom: 20rpx;
		margin-bottom: 20rpx;

		.video-content {
			padding-top: 20rpx;
		}
	}
</style>
