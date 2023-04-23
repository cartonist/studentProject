<template>
	<view class="question-commidty">
		<block v-for="item in questionList" :key="item.id">
			<QuestionItem :item="item"></QuestionItem>
		</block>
	</view>
</template>

<script setup>
	import QuestionItem from '@/components/question/question-item.vue'
	defineProps({
		questionList: {
			type: Array,
			default: []
		}
	})
</script>

<style lang="scss" scoped>
	.question-commidty {
		padding-bottom: 40rpx;
		box-sizing: border-box;
	}
</style>
