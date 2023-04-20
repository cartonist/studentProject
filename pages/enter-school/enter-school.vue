<template>
	<view class="enter-school">
		<MyHeader :title="'填写快速入学信息'"></MyHeader>
		<image class="enter-banner" src="https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/enter-banner.png" mode="">
		</image>
		<form action="">
			<view class="manage-form">
				<!-- 姓名和性别 -->
				<view class="manage-item clear-line">
					<view class="item-title">姓名</view>
					<view class="item-main">
						<input type="text" name='name' placeholder="请输入姓名" value=''>
					</view>
				</view>
				<!-- 性别 -->
				<view class="manage-item">
					<view class="item-title"></view>
					<view class="item-main sex-item">
						<radio-group name="gender" class="item-main sex-item">
							<label>
								<radio value="1" color="#0066ff" /><text>女士</text>
							</label>
							<label>
								<radio value="0" color="#0066ff" /><text>先生</text>
							</label>
						</radio-group>
					</view>
				</view>
				<!-- 入学码 -->
				<view class="manage-item">
					<view class="item-title">入学码</view>
					<view class="item-main">
						<input type="text" name='admissionCode' placeholder="请填写入学码" value=''>
					</view>
				</view>
				<!-- 身份证 -->
				<view class="manage-item">
					<view class="item-title">身份证</view>
					<view class="item-main">
						<input type="idCard" name='admissionCode' placeholder="请填写身份证" value=''>
					</view>
				</view>
				<!-- 手机号码 -->
				<view class="manage-item">
					<view class="item-title">手机号码</view>
					<view class="item-main">
						<input type="number" name='phone' placeholder="请填写手机号码" value=''>
					</view>
				</view>
				<!-- 前端阶段 -->
				<view class="manage-item">
					<view class="item-title">前端阶段</view>
					<view class="item-main">
						<input type="text" name='frontStage' placeholder="请填写前端阶段" value=''>
					</view>
				</view>
				<!-- 家庭住址 -->
				<view class="manage-item address">
					<view class="address-title">
						<view class="item-title">家庭住址</view>
						<Kregion class="item-local" width='400' height='40'></Kregion>
					</view>
					<view class="address-main">
						<input type="text" name='addressInfo' placeholder="详细地址:如道路/门牌号/小区/楼栋号/单元楼等" value="">
					</view>
				</view>
				<!-- 出生日期 -->
				<view class="manage-item">
					<view class="item-title">出生日期</view>
					<view class="item-main">
						<input type="text" name="birthDate" placeholder="填写格式:2000-01-01" value="">
					</view>
				</view>
				<!-- 学历 -->
				<view class="manage-item">
					<view class="item-title">学历</view>
					<view class="item-main">
						<input type="text" name="education" placeholder="请填写学历" value="">
					</view>
				</view>
				<!-- 专业 -->
				<view class="manage-item">
					<view class="item-title">专业</view>
					<view class="item-main">
						<input type="text" name="major" placeholder="请填写专业" value="">
					</view>
				</view>
				<!-- 微信号 -->
				<view class="manage-item">
					<view class="item-title">微信</view>
					<view class="item-main">
						<input type="text" name="WeChat" placeholder="请填写微信" value="">
					</view>
				</view>
			</view>
			<view class="manage-btn">
				<button class="btn-sure" form-type="submit">提交</button>
			</view>
		</form>
	</view>
</template>

<script setup>
	import MyHeader from '@/components/common/class-header.vue'
</script>

<style lang="scss" scoped>
	.enter-school {
		width: 750rpx;
		// height: 100%;
		background: #F3F4F6;

		.enter-banner {
			width: 750rpx;
			height: 273rpx;
		}

		.manage-form {
			background-color: #fff;
			box-sizing: border-box;

			.manage-item {
				width: 100vw;
				border-bottom: 2rpx solid #F3F4F6;
				display: flex;
				align-items: center;
				padding: 32rpx 42rpx;
				box-sizing: border-box;

				.item-title {
					width: 200rpx;
					font-size: 28rpx;
					font-weight: 400;
					color: #333;
					line-height: 16rpx;
				}

				.item-main {
					flex: 1;
					font-size: 28rpx;
					font-weight: 400;
					color: #999;
					padding-left: 20rpx;
					opacity: 0.8;
				}

				.sex-item {
					display: flex;
					justify-content: space-around;
					align-items: center;
				}

			}

			.address {
				display: block;
				height: 200rpx;

				.address-title {
					display: flex;
					align-items: center;
					color: #999;

					.item-local {
						font-size: 28rpx;
					}
				}

				.address-main {
					width: 671rpx;
					padding-top: 40rpx;
					font-size: 28rpx;
					font-weight: 400;
					color: #999;
					line-height: 88rpx;
					opacity: 0.8;
				}
			}

		}

		.clear-line {
			border: none
		}

		.manage-btn {
			width: 750rpx;
			height: 265rpx;
			display: flex;
			justify-content: center;
			align-items: center;

			.btn-sure {
				width: 420rpx;
				height: 80rpx;
				line-height: 80rpx;
				background: #0066ff;
				border-radius: 40rpx;
				text-align: center;
				font-size: 30rpx;
				font-weight: 400;
				color: #fff;
			}
		}
	}
</style>
