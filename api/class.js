// 班级资质接口的管理
import $http from '@/api/request/request.js'
export const getClassList = () => {
	return $http.request({
		url: '/wechat/class/list',
		method: 'GET',
		header: {
			"Content-Type": "application/json"
		}
	})
}
