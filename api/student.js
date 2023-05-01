// 学员入学信息
import $http from '@/api/request/request.js'

// 根据班级查询协议
export const stuInfo = () => {
	return $http.request({
		url: '/wechat/student/info',
		method: 'GET',
		header: {
			'token': uni.getStorageSync('token')
		}
	})
}
