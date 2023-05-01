export default {
	state: {
		noticeInfo: uni.getStorageSync('noticeInfo')
	},
	getters: {

	},
	mutations: {
		addNoticeInfo(state, option) {
			state.noticeInfo = option
			uni.setStorageSync('noticeInfo', option)
		}
	},
	actions: {
		addNoticeInfoActions({
			commit
		}, option) {
			commit('addNoticeInfo', option)
		}
	}
}
