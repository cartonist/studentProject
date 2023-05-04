export default {
	state: {
		signInfo: uni.getStorageSync('signInfo') || {}
	},
	getters: {

	},
	mutations: {
		addSignInfo(state, option) {
			state.signInfo = option
			uni.setStorageSync('signInfo', option)
		},
		clearSignInfo(state) {
			state.signInfo = {}
			uni.removeStorageSync('signInfo')
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
