export default {
	state: {
		classInfo: uni.getStorageSync('classInfo') || []
	},
	getters: {

	},
	mutations: {
		addClassInfo(state, option) {
			state.classInfo = option
			uni.setStorageSync('classInfo', option)
		},
		clearClassInfo(state) {
			state.classInfo = []
			uni.removeStorageSync('classInfo')
		}
	},
	actions: {
		addClassInfoActions({
			commit
		}, option) {
			commit('addClassInfo', option)
		}
	}
}
