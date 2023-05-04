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
export const getEnterSchool = () => {
	return $http.request({
		url: '/wechat/class/enter-school',
		method: 'GET',
		header: {
			token: uni.getStorageSync('token')
		}
	})
}
export const getInSchool = (options) => {
	console.log(options)
	return $http.request({
		url: '/wechat/class/get-in',
		method: 'POST',
		data: {
			...options
		}
	})
}
