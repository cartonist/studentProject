<template>
	<view class="celebrity-container">
		<view class="celebrity-item" v-for="item in celebList" :key="item.id">
			<!-- 姓名和奖杯 -->
			<view class="item-header">
				<view class="header-left">
					<view class="name">{{item.name}}</view>
					<view class="student-stars">
						<image src="@/static/img/star-fill.png" mode=""></image>
					</view>
				</view>
				<view class="header-right">
					<image src="@/static/img/przie.png" mode=""></image>
				</view>
			</view>
			<view class="item-content">
				<view class="item">
					就业城市：<text class="item-text">{{item.work_city}}</text>
				</view>
				<view class="item">
					就业薪资：<text class="item-text active-text">{{item.salary}}</text>
				</view>
				<view class="item">
					来自班级：<text class="item-text">{{item.class_name}}</text>
				</view>
			</view>
			<!-- 学历背景 -->
			<view class="footer">
				<view class="foot-item">
					<image src="@/static/img/education.png" mode=""></image>
					<view class="text">{{item.education}}</view>
				</view>
				<view class="foot-item">
					<image src="@/static/img/info.png" mode=""></image>
					<view class="text">{{item.work_way}}</view>
				</view>
				<view class="foot-item">
					<image src="@/static/img/leaf.png" mode=""></image>
					<view class="text">{{item.age}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	defineProps(['celebList'])
</script>

<style lang="scss" scoped>
	.celebrity-container {
		display: flex;
		flex-wrap: nowrap;
		margin-top: 36rpx;

		.celebrity-item {
			width: 289rpx;
			height: 319rpx;
			background-color: #fff;
			border-radius: 20rpx;
			background: url("https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/fame-bg.png") no-repeat;
			background-size: cover;
			padding: 24rpx;

			.item-header {
				padding-top: 10rpx;
				display: flex;
				justify-content: space-around;
				align-items: center;

				.header-left {
					display: flex;
				}

				.header-left image {
					width: 19rpx;
					height: 19rpx;
				}

				.header-right image {
					width: 97rpx;
					height: 91rpx;
				}
			}

			.item-content {
				padding-top: 20rpx;
				padding-left: 20rpx;

				.item {
					height: 25rpx;
					font-size: 25rpx;
					font-weight: 400;
					color: #333;
					line-height: 27rpx;
					padding-bottom: 20rpx;

					.text {
						padding-left: 10rpx;
					}

					.active-text {
						color: #f00;
						font-size: 30rpx;
						font-weight: 700;
					}
				}
			}

			.footer {
				width: 100%;
				height: 60rpx;
				background: #006cff;
				display: flex;
				justify-content: space-around;
				border-radius: 0 0 20rpx 20rpx;

				.foot-item {
					display: flex;
					justify-content: center;
					align-items: center;

					image {
						width: 22rpx;
						height: 20rpx;
					}

					.text {
						font-size: 24rpx;
						font-weight: 400;
						color: #fff;
						line-height: 27rpx;
						padding-left: 10rpx;
					}
				}
			}

		}
	}
</style>
