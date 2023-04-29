export default {
	state: {
		noticeInfo: null
	},
	getters: {

	},
	mutations: {
		addNoticeInfo(state, option) {
			state.noticeInfo = option
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
