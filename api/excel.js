import $http from '@/api/request/request.js'
export const getExcelList = () => {
	return $http.request({
		url: '/wechat/excellent/list',
		method: 'GET'
	})
}
