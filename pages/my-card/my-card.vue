<template>
	<view class="my-card" v-if="isLogin">
		<view class="my-header">
			<MyHeader :isBack="false" title="我的名片"></MyHeader>
			<view class="header-main">
				<view class="main-content">
					<image :src="avatar" mode=""></image>
					<view class="main">
						<view class="login header-name" style="position: relative; z-index: 999;">
							{{nickName}}
						</view>
						<!-- <view class="header-name" v-else></view> -->
					</view>
				</view>
			</view>
		</view>
		<view class="card-content">
			<view class="card-item" @click="goCard">
				<image src="@/static/img/IDCard.png" mode=""></image>
				<view class="item-card">名片</view>
			</view>
			<view class="card-item" @click="goMess">
				<image src="@/static/img/mes.png" mode=""></image>
				<view class="item-card">消息</view>
			</view>
			<view class="card-item" @click="goHelp">
				<image src="@/static/img/ser.png" mode=""></image>
				<view class="item-card">客服即帮助</view>
			</view>
		</view>
		<MyTabbar :currentIndex="currentIndex"></MyTabbar>
	</view>
	<view class="login-container" v-else>
		<MyHeader :isBack="false" title="授权登录"></MyHeader>
		<view class="wx-img">
			<image src="@/static/img/WeChat.png" mode=""></image>
		</view>
		<view class="message">
			<view class="right">
				申请获取以下权限
			</view>
			<view class="detail">
				获得你的公开信息（昵称、头像等）
			</view>
			<!-- <view class="login-btn" @click="login">授权登录</view> -->
			<button type="primary" class="login-btn" open-type="chooseAvatar"
				@chooseavatar="onChooseAvatar">一键登录</button>
		</view>
	</view>

</template>

<script setup>
	import MyHeader from '@/components/common/class-header.vue'
	import MyTabbar from '@/components/common/my-tabbar.vue'
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
		getClassList
	} from '../../api/class';
	import {
		authLogin
	} from '../../api/login';
	import {
		stuCurrent
	} from '../../api/sign';
	import {
		stuInfo
	} from '../../api/student';
	const {
		proxy,
	} = getCurrentInstance();
	const store = useStore()
	let currentIndex = 4
	const isLogin = computed(() => store.state.user.studentInfo.isLogin)
	const userList = computed(() => store.state.user.userList)
	const params = {}
	const avatar = computed(() => store.state.user.studentInfo.avatarUrl)
	const nickName = computed(() => store.state.user.studentInfo.nickName)
	const appId = "wxb7598c8f7daa146f"
	const secret = "384ec922f905bff47cc281001c5257fa"
	// 小程序用户的唯一标识
	let openId = computed(() => store.state.user.studentInfo.openId)
	// 登录
	const onChooseAvatar = (e) => {
		// 获取小程序用户的头像
		// avatarUrl.value = e.detail.avatarUrl
		const avatarUrl = e.detail.avatarUrl
		// 获取用户的code码
		wx.login({
			provider: 'weixin',
			onlyAuthorize: true,
			success: res => {
				let code = res.code
				// 发送请求使用appid、secret、code换取openId
				wx.request({
					url: `https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${secret}&js_code=${code}&grant_type=authorization_code`,
					success: (res) => {
						openId = res.data.openid
						Login({
							openId,
							avatarUrl
						})
					}
				})
			}
		})
	}
	// 登录请求
	const Login = async (option) => {
		const res = await authLogin(option)
		// 有token，则说明是内部学员，因此可以请求有权限的接口
		if (res.token) {
			// 保存token
			const token = res.token
			store.commit('setToken', token)
			// 获取学生信息
			const stuInfo = await stuInfo()
			store.dispatch('changeUserInfoAction', stuInfo)

			// 获取学生协议
			const stuCurrent = await stuCurrent()
			store.dispatch('addSignInfoActions', stuCurrent)
		}
		// 没有token,不是内部学员
		store.dispatch('changeStudentAction', res)
	}
	// 已失效
	const login = () => {
		// if (wx.getUserProfile) {
		// 	wx.getUserProfile({
		// 		desc: '用于获取名片展示用户头像和昵称',
		// 		lang: 'zh_CN',
		// 		success: userData => {
		// 			console.log(userData)
		// 		},
		// 		fail: err => {

		// 		}
		// 	})
		// }
		// isLogin.value = true
		// wx.getUserInfo({
		// 	success: res => {
		// 		console.log(res)
		// 	}
		// })
	}
	const goCard = () => {
		if (userList.value == {}) {
			uni.navigateTo({
				url: ''
			})
		} else {
			uni.showToast({
				title: '请先入学',
				icon: 'none'
			})
		}
	}
	const goMess = () => {
		uni.showToast({
			title: '此功能暂未开放',
			icon: 'none'
		})
	}
	const goHelp = () => {
		uni.navigateTo({
			url: '/pages/consult/consult'
		})
	}
</script>

<style lang="scss" scoped>
	.my-card {
		width: 100vw;
		height: 100vh;
		background-color: $uni-container-bg;

		.my-header {
			background: url("https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/header-bg.png") no-repeat;
			background-size: cover;
		}

		.main-content {
			height: 300rpx;
			padding: 0 0 100rpx 40rpx;
			display: flex;
			align-items: center;


			image {
				width: 180rpx;
				height: 180rpx;
				border: 2rpx solid #fff;
				border-radius: 50%;
			}

			.main {
				font-size: 40rpx;
				padding-left: 20rpx;
				color: #fff;
			}

		}
	}

	.card-content {
		position: fixed;
		width: 100%;
		box-sizing: border-box;
		z-index: 999;
		top: 500rpx;
		left: 0;
		padding: 0 40rpx;

		.card-item {
			// margin: 0 40rpx;
			background-color: #fff;
			height: 120rpx;
			display: flex;
			align-items: center;
			box-sizing: border-box;
			padding: 0 40rpx;
			border-radius: 10rpx;
			margin-bottom: 20rpx;

			image {
				width: 30rpx;
				height: 30rpx;
			}

			.item-card {
				padding-left: 10rpx;
			}
		}
	}

	.login-container {
		width: 100vw;
		height: 100vh;
		box-sizing: border-box;
		padding: 0 40rpx;

		.wx-img {
			height: 360rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			padding-top: 40rpx;
			border-bottom: 2rpx solid #afafaf;

			image {
				width: 200rpx;
				height: 200rpx;
			}
		}

		.message {
			margin-top: 80rpx;

			.right {
				font-size: 40rpx;
				height: 60rpx;
				line-height: 60rpx;
			}

			.detail {
				color: #afafaf;
				font-size: 24rpx;
				margin: 30rpx 0 80rpx 0;
			}

			.login-btn {
				height: 80rpx;
				background-color: #13ae12;
				color: #fff;
				font-size: 40rpx;
				line-height: 80rpx;
				border-radius: 50rpx;
				text-align: center;
			}
		}
	}
</style>
