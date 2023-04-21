<template>
	<view class="commodity-container">
		<block v-for="(item,index) in classData" :key="index">
			<HomeItem :item="item"></HomeItem>
		</block>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	import HomeItem from '@/components/index/home-item.vue'
	defineProps(['classData'])
</script>

<style lang="less" scoped>
	.commodity-container {
		width: 100%;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
</style>
