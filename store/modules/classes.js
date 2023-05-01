export default {
	state: {
		classInfo: uni.getStorageSync('classInfo') || {}
	},
	getters: {

	},
	mutations: {
		addClassInfo(state, option) {
			state.classInfo = option
			uni.setStorageSync('classInfo', option)
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
