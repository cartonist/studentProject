<template>
	<view class="enter-school">
		<MyHeader :title="'填写快速入学信息'"></MyHeader>
		<view class="login" v-if="!isLogin">请先登录</view>
		<view class="sign-in" v-else-if="token && currentClass">您已经入学</view>
		<view class="content" v-else>
			<image class="enter-banner" src="https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/enter-banner.png"
				mode="">
			</image>
			<form action="">
				<view class="manage-form">
					<!-- 姓名和性别 -->
					<view class="manage-item clear-line">
						<view class="item-title">姓名</view>
						<view class="item-main">
							<input type="text" name='name' placeholder="请输入姓名" v-model="userData.real_name">
						</view>
					</view>
					<!-- 性别 -->
					<view class="manage-item">
						<view class="item-title"></view>
						<view class="item-main sex-item">
							<radio-group name="gender" class="item-main sex-item" @change="radioChange">
								<label for="female">
									<radio id="female" name="gender" value="女" color="#0066ff" /><text>女士</text>
								</label>
								<label for="male">
									<radio id="male" name="gender" value="男" color="#0066ff" />
									<text>先生</text>
								</label>
							</radio-group>
						</view>
					</view>
					<!-- 入学码 -->
					<view class=" manage-item">
						<view class="item-title">入学码</view>
						<view class="item-main">
							<input type="text" name='admissionCode' placeholder="请填写入学码" value=''>
						</view>
					</view>
					<!-- 身份证 -->
					<view class="manage-item">
						<view class="item-title">身份证</view>
						<view class="item-main">
							<input type="text" name='idCard' placeholder="请填写身份证" v-model="userData.id_card">
						</view>
					</view>
					<!-- 手机号码 -->
					<view class="manage-item">
						<view class="item-title">手机号码</view>
						<view class="item-main">
							<input type="number" name='phone' placeholder="请填写手机号码" v-model="userData.phone">
						</view>
					</view>
					<!-- 前端阶段 -->
					<view class="manage-item">
						<view class="item-title">前端阶段</view>
						<view class="item-main">
							<input type="text" name='frontStage' placeholder="请填写前端阶段" v-model="userData.stage">
						</view>
					</view>
					<!-- 家庭住址 -->
					<view class="manage-item address">
						<view class="address-title">
							<view class="item-title">家庭住址</view>
							<Kregion class="item-local" width='400' height='40'></Kregion>
						</view>
						<view class="address-main">
							<input type="text" name='addressInfo' placeholder="详细地址:如道路/门牌号/小区/楼栋号/单元楼等"
								v-model="userData.address">
						</view>
					</view>
					<!-- 出生日期 -->
					<view class="manage-item">
						<view class="item-title">出生日期</view>
						<view class="item-main">
							<input type="text" name="birthDate" placeholder="填写格式:2000-01-01" v-model="userData.birth">
						</view>
					</view>
					<!-- 学历 -->
					<view class="manage-item">
						<view class="item-title">学历</view>
						<view class="item-main">
							<input type="text" name="education" placeholder="请填写学历" v-model="userData.education">
						</view>
					</view>
					<!-- 专业 -->
					<view class="manage-item">
						<view class="item-title">专业</view>
						<view class="item-main">
							<input type="text" name="major" placeholder="请填写专业" v-model="userData.major">
						</view>
					</view>
					<!-- 微信号 -->
					<view class="manage-item">
						<view class="item-title">微信</view>
						<view class="item-main">
							<input type="text" name="WeChat" placeholder="请填写微信" v-model="userData.wechat">
						</view>
					</view>
				</view>
				<view class="manage-btn">
					<button class="btn-sure" form-type="submit" @click="submit">提交</button>
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
	import {
		getInSchool
	} from '../../api/class';
	const {
		proxy,
	} = getCurrentInstance();
	const store = useStore()
	const isLogin = computed(() => store.state.user.studentInfo.isLogin)
	const id = ref(0)
	const token = computed(() => store.state.user.token)
	const studentInfo = computed(() => store.state.user.studentInfo)
	const name = ref("")
	const userData = ref({
		real_name: "",
		gender: "",
		class_id: 0,
		open_id: studentInfo.value.openId,
		id_card: "",
		phone: "",
		stage: "",
		address: "",
		birth: "",
		education: "",
		major: "",
		wechat: ""
	})
	// 学员所加入的所有班级
	const classInfo = computed(() => store.state.classes.classInfo)
	// 查询到的当前班级
	const currentClass = computed(() => classInfo.value.find(item => item.class_id == id.value))
	onLoad((option) => {
		id.value = option.id
		userData.value.class_id = option.id
	})
	const submit = async () => {
		const res = await getInSchool({
			...userData.value,
			...studentInfo.value
		})
		if (res.msg) {
			store.commit('clearStudent')
			store.commit('clearToken')
			store.commit('clearUserInfo')
			store.commit('clearSignInfo')
			store.commit('clearClassInfo')
			uni.showModal({
				title: '入学成功',
				content: '是否重新登录以更新数据',
				success: function(res) {
					if (res.confirm) {
						uni.switchTab({
							url: '/pages/my-card/my-card'
						})
					} else if (res.cancel) {
						console.log('用户点击取消');
					}
				}
			})
			// setTimeout(() => {
			// 	uni.switchTab({
			// 		url: '/pages/index/index'
			// 	})
			// }, 1000)
		}
	}
	const radioChange = (e) => {
		userData.value.gender = e.detail.value

	}
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
