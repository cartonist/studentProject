<template>
	<view class="archives-contariner">
		<MyHeader title="档案管理" :isBack="true"></MyHeader>
		<view class="isLogin" v-if="!token">
			<image src="@/static/img/empty.png" mode=""></image>
			<view class="text">未入学</view>
		</view>
		<view class="sign-in" v-else-if="!currentClass">
			<image src="@/static/img/empty.png" mode=""></image>
			<view class="text">请先入学</view>
		</view>
		<view class="content" v-else>
			<form action="">
				<view class="manage-form">
					<!-- 姓名和性别 -->
					<view class="manage-item clear-line">
						<view class="item-title">姓名</view>
						<view class="item-main">
							{{currentClass.real_name}}
						</view>
					</view>
					<!-- 性别 -->
					<view class="manage-item">
						<view class="item-title"></view>
						<view class="item-main sex-item">
							<radio-group name="gender" class="item-main sex-item">
								<label>
									<radio color="#0066ff" :disabled="true" :checked="currentClass.gender == '女'" />
									<text>女士</text>
								</label>
								<label>
									<radio color="#0066ff" :disabled="true" :checked="currentClass.gender == '男'" />
									<text>先生</text>
								</label>
							</radio-group>
						</view>
					</view>
					<!-- 身份证 -->
					<view class="manage-item">
						<view class="item-title">身份证</view>
						<view class="item-main">
							{{currentClass.id_card}}
						</view>
					</view>
					<!-- 手机号码 -->
					<view class="manage-item">
						<view class="item-title">手机号码</view>
						<view class="item-main">
							{{currentClass.phone}}
						</view>
					</view>
					<!-- 前端阶段 -->
					<view class="manage-item">
						<view class="item-title">前端阶段</view>
						<view class="item-main">
							{{currentClass.stage}}
						</view>
					</view>
					<!-- 家庭住址 -->
					<view class="manage-item address">
						<view class="address-title">
							<view class="item-title">家庭住址</view>
							<Kregion class="item-local" width='400' height='40'></Kregion>
						</view>
						<view class="address-main">
							{{currentClass.address}}
						</view>
					</view>
					<!-- 出生日期 -->
					<view class="manage-item">
						<view class="item-title">出生日期</view>
						<view class="item-main">
							{{currentClass.birth}}
						</view>
					</view>
					<!-- 学历 -->
					<view class="manage-item">
						<view class="item-title">学历</view>
						<view class="item-main">
							{{currentClass.education}}
						</view>
					</view>
					<!-- 专业 -->
					<view class="manage-item">
						<view class="item-title">专业</view>
						<view class="item-main">
							{{currentClass.major}}
						</view>
					</view>
					<!-- 微信号 -->
					<view class="manage-item">
						<view class="item-title">微信</view>
						<view class="item-main">
							{{currentClass.wechat}}
						</view>
					</view>
				</view>
				<view class="manage-btn">
					<button class="btn-sure" form-type="submit" @click="goBack">我知道了</button>
				</view>
			</form>
		</view>
	</view>
</template>

<script setup>
	import MyHeader from '@/components/common/class-header.vue'
	import {
		onLoad,
		onReady
	} from '@dcloudio/uni-app'
	import {
		computed,
		getCurrentInstance,
		ref
	} from "vue";
	import {
		useStore
	} from 'vuex';
	const {
		proxy,
	} = getCurrentInstance();
	const id = ref(0)
	const store = useStore()
	const token = computed(() => store.state.user.token)
	// 学员所加入的所有班级
	const classInfo = computed(() => store.state.classes.classInfo)
	// 查询到的当前班级
	const currentClass = computed(() => classInfo.value.find(item => item.class_id == id.value))
	onLoad((option) => {
		id.value = option.id
	})
	const goBack = () => {
		uni.navigateBack({
			delta: 1
		})
	}
</script>

<style lang="scss" scoped>
	.archives-contariner {
		height: 100vh;
		width: 100vw;
		background-color: #f3f4f6;

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

		.isLogin,
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
