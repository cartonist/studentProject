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
	let classData = ref([{
		classPath: 'https://illlustrations.co/static/d847add7d6be3573939abc8f94dfa96d/ee604/day46-experiment-lab.png',
		className: 'P4'
	}, {
		classPath: 'https://illlustrations.co/static/29c661828aec7a1f8dea646e2827a27e/ee604/day48-medical-lab.png',
		className: 'P5'
	}, {
		classPath: 'https://illlustrations.co/static/a39ef9e5a20cfa054569321381c5ab51/ee604/day47-chemistry-lab.png',
		className: 'P6'
	}, {
		classPath: 'https://illlustrations.co/static/b5f0bcbc2c3208355eec39b3f27e8510/ee604/103-gym-time.png',
		className: '实训班'
	}, {
		classPath: 'https://illlustrations.co/static/d847add7d6be3573939abc8f94dfa96d/ee604/day46-experiment-lab.png',
		className: '全日制'
	}, {
		classPath: 'https://illlustrations.co/static/c91b38b0696ee92de685b539144ecdad/ee604/day72-designer-tool-war.png',
		className: '小白训练营'
	}, {
		classPath: 'https://illlustrations.co/static/4b353d2aa0cef62ed72279cc5ee0ecee/ee604/day94-ui-ux.png',
		className: '小白训练营'
	}, {
		classPath: 'https://illlustrations.co/static/e6b84e6be05378ec8aa056315aba888d/ee604/day71-designer-tool-essential.png',
		className: '明星速成班'
	}])
</script>

<style lang="less" scoped>
	.commodity-container {
		width: 100%;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
</style>
