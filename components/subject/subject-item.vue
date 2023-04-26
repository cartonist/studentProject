<template>
	<view class="swiper-item">
		<view class="item-title">
			<text style="padding:10rpx 0;">{{item.question_title}}</text>
			<!-- <rich-text :nodes="item.question_content"></rich-text> -->
			<view class="">
				{{item.question_content}}
			</view>
			<view>
			</view>
		</view>
		<view class="item-content">
			<view class="item-result">
				<image class="item-img" src="@/static/img/result.png" mode=""></image>
				<view class="result">结果:</view>
			</view>
			<view>
				<!-- <MDParserHeightlight class="answer"></MDParserHeightlight> -->
				<!-- <rich-text :nodes="item.result"></rich-text> -->
				<view class="">
					{{item.result}}
				</view>
			</view>
			<view class="item-result">
				<image class="item-img" src="@/static/img/explain.png" mode=""></image>
				<view class="result">解释:</view>
			</view>
			<view class="parsing">
				<!-- <rich-text :nodes="item.explain"></rich-text> -->
				{{item.explain}}
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		onLoad,
		onReady
	} from '@dcloudio/uni-app'
	import {
		getCurrentInstance,
		ref
	} from "vue";
	defineProps(['item'])
	const nodes = `<pre><code class="language-js">var a = 5;</code></pre>`
	// console.log(item)
</script>

<style scoped>
	.swiper-item {
		/* margin-top: 60rpx; */
		/* margin-bottom: 100rpx; */
	}

	.item-title {
		width: 100%;
		height: 100%;
		font-size: 30rpx;
		padding: 0 20rpx 20rpx 20rpx;
		font-weight: normal;
		color: #000;
		box-sizing: border-box;
	}

	.item-content {
		display: flex;
		flex-direction: column;
		padding: 0 20rpx;
		box-sizing: border-box;
	}

	.item-result {
		display: flex;
		padding: 10rpx 0;
	}

	.item-img {
		width: 45rpx;
		height: 44rpx;
	}

	.result {
		width: 576rpx;
		font-size: 32rpx;
		font-weight: 400;
		color: #333333;
		padding-left: 10rpx;
	}

	.answer {
		box-sizing: border-box;
		border: 2rpx solid transparent;
	}

	.parsing {
		box-sizing: border-box;
	}
</style>
