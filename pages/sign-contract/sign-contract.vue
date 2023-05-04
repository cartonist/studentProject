<template>
	<my-header title="签订协议"></my-header>
	<view class="sign-in" v-if="!token">
		请先入学
	</view>
	<view class="signed" v-else-if="status == 1">您已经签署了协议</view>
	<view class="my-contract" v-else>
		<!-- 如果未签协议 就 展示 签订协议 -->
		<view>
			<scroll-view scroll-y="true">
				<view class="contract-content">
					<!-- v-if="contractImg" -->
					<view class="contract">
						<image class="contract-img" :src="signData.contractImg" mode="" lazy-load="true"></image>
						<view class="contract-time">{{ signData.contractTime }}</view>
						<view class="company-time">{{ signData.contractTime }}</view>
						<image :src="signData.selectedPath" class="contract-sign" mode=""></image>
						<view class="contract-time1">{{ signData.contractTime }}</view>
						<view class="company-time1">{{ signData.contractTime }}</view>
						<image :src="signData.selectedPath" class="contract-sign1" mode=""></image>
					</view>
					<view class="contract-btn" @tap="goBack">确认签署</view>
				</view>
			</scroll-view>
		</view>

		<!-- tabbar -->
		<my-tabbar :selected="signData.selected"></my-tabbar>

		<!-- 底部model -->
		<view class="pop" v-show="signData.isShow">
			<view class="pop-mask" @tap="hidePop"></view>
			<view class="pop-box" :animation="signData.animationData">
				<view class="pop-content">
					<view class="pop-tips">* 请选择要使用的签名<text class="tips-active">(必选)</text></view>
					<view class="sign-title">签名列表</view>
					<view class="pop-list">
						<view class="pop-item" v-for="(item, index) in signData.pathArr" :key="index"
							@tap="selectedImg(index)">
							<image v-if="item.pathImg" class="sign-item" :src="item.pathImg" mode=""></image>
							<image @tap="goSignin(index)" v-else class="item-img" src="/static/img/add.png" mode="">
							</image>
							<image v-if="item.isChecked" class="check-img" src="/static/img/checked.png" mode="">
							</image>
						</view>
					</view>
					<view class="pop-btn">
						<view class="cancel">取消</view>
						<view class="sign-sure cancel" @tap="signSure">生成协议</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import MyHeader from "@/components/common/class-header.vue";
	import MyTabbar from "@/components/common/my-tabbar.vue";
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
	} from "vuex";
	import {
		signClassProtocol,
		stuCurrent
	} from "../../api/sign";
	const {
		proxy,
	} = getCurrentInstance();
	import {
		getTime
	} from "@/utils/getTime.js";
	const store = useStore()
	const token = computed(() => store.state.user.token)
	const status = computed(() => store.state.user.userList.status)
	const studentInfo = computed(() => store.state.user.studentInfo)

	const signData = ref({
		userName: "",
		idCard: "",
		contractTime: "",
		ctx: "",
		imgHeight: 0,
		selected: 3,
		// 当前协议图片
		contractImg: "",
		// 当前协议的id
		contractId: 0,
		// 控制弹窗是否显示
		isShow: true,
		// 动画列表
		animationData: {},
		// 多张签名的数组
		pathArr: [{
				pathImg: "",
				isChecked: false,
			},
			{
				pathImg: "",
				isChecked: false,
			},
		],
		// 点击了那个图片 去签名
		selectIndex: 0,
		// 选中那个签名作为 最终签名
		pathIndex: 0,
		// 签名的路径
		pathU: "",
		// 选中的签名路径
		selectedPath: "",
		// 协议的id
		protocolId: 0,
		// 班级id
		classId: 0,
	})
	onLoad(() => {
		const time = getTime();
		signData.value.contractTime = `${time.year} 年 ${time.month} 月 ${time.day} 日`;
		signData.value.openId = studentInfo.value.openId
		console.log(signData.value)
		uni.$on("handWriting", (data) => {
			signData.value.pathArr[signData.value.selectIndex].pathImg = data.path;
		});
	})
	// 底部pop弹出动画
	const shopPop = () => {
		let animation = uni.createAnimation({
			duration: 200,
		});
		animation.translateY(600).step();
		signData.value.animationData = animation.export();
		signData.value.isShow = true;
		setTimeout(() => {
			animation.translateY(0).step();
			signData.value.animationData = animation.export();
		}, 200);
	}
	// 底部pop 消失动画
	const hidePop = () => {
		let animation = uni.createAnimation({
			duration: 200,
		});
		animation.translateY(600).step();
		signData.value.animationData = animation.export();
		setTimeout(() => {
			animation.translateY(0).step();
			signData.value.isShow = false;
		}, 200);
	}

	// 去签名
	const goSignin = (index) => {
		signData.value.selectIndex = index;
		uni.navigateTo({
			url: "../sign-canvas/sign-canvas",
		});
	}
	// 选中的图片
	const selectedImg = (index) => {
		if (signData.value.pathArr[index].isChecked) {
			signData.value.pathArr[index].isChecked = false;
			signData.value.pathIndex = 0;
		} else {
			signData.value.pathArr[index].isChecked = true;
			signData.value.pathIndex = index;
		}
	}
	// 生成协议
	const signSure = () => {
		// 选中的图片显示
		uni.showModal({
			title: "提示",
			content: "确认生成协议吗",
			success: (res) => {
				if (res.confirm) {
					signData.value.selectedPath = signData.value.pathArr[signData.value.pathIndex].pathImg;
					signData.value.isShow = false;
				} else if (res.cancel) {
					signData.value.isShow = true;
				}
			},
		});
	}
	const goBack = () => {
		if (signData.value.selectedPath) {
			uni.showModal({
				title: "提示",
				content: "确认签署协议吗",
				success: async (res) => {
					if (res.confirm) {
						const data = await signClassProtocol({
							filePath: signData.value.selectedPath,
							signTime: signData.value.contractTime
						})
						uni.showToast({
							title: data.msg,
							icon: 'success'
						})
						store.dispatch('changeUserstatusAction', {
							status: 1
						})
						const protocal = await stuCurrent()
						store.dispatch('addSignInfoActions', protocal)
						setTimeout(() => {
							uni.switchTab({
								url: '/pages/my-contract/my-contract'
							})
						}, 1000)
					} else if (res.cancel) {
						signData.value.isShow = true;
						signData.value.shopPop();
					}
				},
				fail: (err) => {
					console.log(err);
				},
			});
		} else {
			signData.value.isShow = true;
			signData.value.shopPop();
		}
	}
</script>

<style scoped>
	scroll-view ::-webkit-scrollbar {
		display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
		color: transparent;
	}

	.my-contract {
		width: 100vw;
		height: 7000rpx;
		background-color: #f0f3f7;
	}

	.contract-content {
		padding: 20rpx 35rpx;
		height: 6500rpx;
		height: 100%;
		box-sizing: border-box;
	}

	scroll-view {
		height: 100%;
		height: 6500rpx;
	}

	.contract {
		width: 682rpx;
		height: 6000rpx;
		border: 2rpx dashed #000;
		position: relative;
	}

	.canvasImg {
		width: 682rpx;
		border: 2rpx dashed #000;
	}

	.username {
		position: absolute;
		left: 150rpx;
		top: 220rpx;
	}

	.idCard {
		font-size: 20rpx;
		position: absolute;
		right: 20rpx;
		bottom: 2320rpx;
	}

	.idCard1 {
		font-size: 20rpx;
		position: absolute;
		right: 20rpx;
		bottom: 180rpx;
	}

	.contract-time {
		font-size: 20rpx;
		position: absolute;
		right: 60rpx;
		bottom: 2280rpx;
	}

	.company-time {
		font-size: 20rpx;
		position: absolute;
		left: 150rpx;
		bottom: 2280rpx;
	}

	.contract-time1 {
		font-size: 20rpx;
		position: absolute;
		right: 50rpx;
		bottom: 140rpx;
	}

	.company-time1 {
		font-size: 20rpx;
		position: absolute;
		left: 150rpx;
		bottom: 140rpx;
	}

	.contract-img {
		width: 682rpx;
		/* height: 100%; */
		height: 6000rpx;
	}

	/* 签名的图片显示的位置 */
	.contract-sign {
		width: 200rpx;
		height: 150rpx;
		position: absolute;
		right: 100rpx;
		bottom: 2300rpx;
		transform: rotate(-90deg);
	}

	.contract-sign1 {
		width: 200rpx;
		height: 150rpx;
		position: absolute;
		right: 100rpx;
		bottom: 170rpx;
		transform: rotate(-90deg);
	}

	.contract-btn {
		width: 680rpx;
		height: 80rpx;
		line-height: 80rpx;
		background: #358cf8;
		text-align: center;
		border-radius: 20rpx;
		margin-top: 100rpx;
		color: #fff;
	}

	/* model */
	.pop {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 9999;
	}

	.pop-mask {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.3);
	}

	.pop-box {
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100vw;
		height: 600rpx;
		background-color: #fff;
	}

	.pop-content {
		padding: 37rpx;
	}

	.pop-title {
		width: 506rpx;
		height: 31rpx;
		font-size: 30rpx;
		font-family: Microsoft YaHei;
		font-weight: 400;
		color: #333333;
		line-height: 20rpx;
	}

	.tips-active {
		color: #0060ff;
	}

	.sign-title {
		width: 113rpx;
		height: 28rpx;
		font-size: 28rpx;
		font-family: Microsoft YaHei;
		font-weight: 400;
		color: #333333;
		line-height: 20rpx;
		padding: 60rpx 0;
	}

	.pop-list {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}

	.pop-item {
		width: 325rpx;
		height: 211rpx;
		border: 2rpx solid #8b8b8b;
		border-radius: 10rpx;
		position: relative;
	}

	.item-img {
		width: 150rpx;
		height: 150rpx;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	.sign-item {
		width: 200rpx;
		height: 200rpx;
		transform: rotate(-90deg);
		padding: 50rpx 0;
		position: absolute;
		top: -50rpx;
		left: 60rpx;
	}

	.check-img {
		width: 100rpx;
		height: 100rpx;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	.pop-btn {
		display: flex;
		justify-content: space-around;
		padding-top: 50rpx;
	}

	.cancel {
		width: 310rpx;
		height: 80rpx;
		line-height: 80rpx;
		background: #5468ff;
		border-radius: 20rpx;
		text-align: center;
		color: #ffffff;
	}

	.sign-sure {
		background: #0060ff;
	}
</style>
