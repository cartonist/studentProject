export default {
	state: {
		userList: {
			name: 'xxx',
			tel: '0000',
			// 0未签协议，1已签协议
			status: 0,
			selectedPath: '',
			openId: 0,
			avatarUrl: '',
			nickName: '小鹿线',
			classId: null
		},
		student: {}
	},
	getters: {

	},
	mutations: {
		changeUserstatus(state, option) {
			state.userList.status = option.status
		},
		changeOpenId(state, option) {
			state.userList.openId = option.openId
			state.userList.avatarUrl = option.avatarUrl
			state.userList.nickName = option.nickName
		},
		changeClassId(state, option) {
			state.usrList.classId = option.classId
		},
		changeStudent(state, option) {
			state.student = option.student
		}
	},
	actions: {
		changeUserstatusAction({
			commit
		}, option) {
			commit('changeUserstatus', option)
		},
		changeOpenIdAction({
			commit
		}, option) {
			commit('changeOpenId', option)
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
		}
	}
}
