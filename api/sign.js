// 学员协议
import $http from '@/api/request/request.js'

// 根据班级查询协议
export const stuCurrent = () => {
	return $http.request({
		url: '/wechat/protocol/current',
		method: 'GET',
		header: {
			'token': uni.getStorageSync('token')
		}
	})
}


export const protocolInfo = ({
	classId
}) => {
	return $http.request({
		url: '/wechat/protocol/info/' + classId,
		method: 'GET',
		header: {
			"token": uni.getStorageSync('token')
		}
	})
}

// 签署班级协议
// /wechat/stuProtocol/signClassProtocol
export const signClassProtocol = (options) => {
	console.log(options)
	return $http.request({
		url: '/wechat/protocol/signClassProtocol',
		method: 'POST',
		header: {
			"token": uni.getStorageSync('token')
		},
		data: {
			...options
		}
	})
}
