// 面试题接口的管理
import $http from '@/api/request/request.js'
// 获取面试题分类列表
export const getQuestionsTypeList = () => {
	return $http.request({
		url: '/wechat/questions/typeList',
		method: 'GET'
	})
}
// 获取面试题列表
export const getQuestinsList = (id) => {
	return $http.request({
		url: '/wechat/questions/list',
		method: 'GET',
		data: {
			id
		}
	})
}
// 获取面试题数量
export const getQuestionCount = (id) => {
	return $http.request({
		url: '/wechat/questions/count',
		method: 'GET',
		data: {
			id
		}
	})
}
