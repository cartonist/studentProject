// 面试题接口的管理
import $http from '@/api/request/request.js'
// 获取面试题列表
export const getQuestionsList = () => {
	return $http.request({
		url: '/wechat/questions/list',
		method: 'GET'
	})
}
