// 登录接口信息
import $http from '@/api/request/request.js'

// 验证该小程序用户是否是学员
export const authLogin = (option) => {
	return $http.request({
		url: '/wechat/user/auth/login',
		method: 'POST',
		header: {
			"Content-type": "application/json"
		},
		data: {
			...option
		}
	})
}
