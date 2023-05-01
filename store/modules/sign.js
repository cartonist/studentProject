export default {
	state: {
		signInfo: uni.getStorageSync('sigInfo') || {}
	},
	getters: {

	},
	mutations: {
		addSignInfo(state, option) {
			state.signInfo = option
			uni.setStorageSync('signInfo', option)
		}
	},
	actions: {
		addSignInfoActions({
			commit
		}, option) {
			commit('addSignInfo', option)
		}
	}
}
