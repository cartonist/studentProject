// 面试流程接口的管理
import $http from '@/api/request/request.js'
export const getProcessList = () => {
	return $http.request({
		url: '/wechat/process/list',
		method: 'GET',
		header: {
			"Content-Type": "application/json"
		}
	})
}
