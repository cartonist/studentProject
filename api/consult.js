import $http from '@/api/request/request.js'
export const getConsultList = () => {
	return $http.request({
		url: '/wechat/help/list',
		method: 'GET'
	})
}
