// 通知接口的管理
import $http from '@/api/request/request.js'
export const getNoticeList = () => {
	return $http.request({
		url: '/wechat/notice/list',
		method: 'GET',
		header: {
			"Content-Type": "application/json"
		}
	})
}
