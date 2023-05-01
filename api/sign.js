// 学员协议
import $http from '@/api/request/request.js'

// 根据班级查询协议
export const stuCurrent = () => {
	return $http.request({
		url: '/wechat/stuProtocol/current',
		method: 'GET',
		header: {
			'token': uni.getStorageSync('token')
		}
	})
}
