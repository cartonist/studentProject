export default {
	state: {
		userList: uni.getStorageSync('userList') || {},
		studentInfo: uni.getStorageSync('studentInfo') || {},
		token: uni.getStorageSync('token') || ""
	},
	getters: {

	},
	mutations: {
		changeUserstatus(state, option) {
			state.userList.status = option.status
			uni.setStorageSync('userList', state.userList)
		},
		changeClassId(state, option) {
			state.userList.classId = option.classId
			uni.setStorageSync('userList', state.userList)
		},
		changeStudent(state, option) {
			state.studentInfo = option
			uni.setStorageSync('studentInfo', option)
		},
		clearStudent(state) {
			state.studentInfo = {}
			uni.removeStorageSync('studentInfo')
		},
		changeUserInfo(state, option) {
			state.userList = option
			uni.setStorageSync('userList', option)
		},
		setToken(state, token) {
			state.token = token
			uni.setStorageSync('token', token)
		},
		clearToken(state) {
			state.token = ""
			uni.removeStorageSync('token')
		},
		clearUserInfo(state) {
			state.userList = {}
			uni.removeStorageSync('userList')
		}
	},
	actions: {
		changeUserstatusAction({
			commit
		}, option) {
			commit('changeUserstatus', option)
		},
		changeClassIdAction({
			commit
		}, option) {
			commit('changeClassId', option)
		},
		changeStudentAction({
			commit
		}, option) {
			commit('changeStudent', option)
		},
		changeUserInfoAction({
			commit
		}, option) {
			commit('changeUserInfo', option)
		}
	}
}
