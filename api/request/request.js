export default {
	common: {
		baseUrl: 'http://localhost:3000',
		data: {},
		header: {
			"Content-type": "application/json",
			"Content-type": "application/x-www-form-urlencoded"
		},
		method: 'GET',
		dataType: 'json'
	},
	// 用于获取用户传递的参数，并转交给request(axios)对象
	request(options = {}) {
		options.url = this.common.baseUrl + options.url;
		options.data = options.data || this.common.data;
		options.header = options.header || this.common.header;
		options.method = options.method || this.common.method;
		options.dataType = options.dataType || this.common.dataType;
		return new Promise((res, rej) => {
			// 请求拦截器
			uni.showLoading({
				title: '加载中...'
			})
			uni.request({
				...options,
				success: (result) => {
					if (result.data.resultCode != 200) {
						setTimeout(function() {
							uni.hideLoading()
						}, 300)
						res({
							resultCode: result.data.resultCode,
							massage: 'error'
						})
						return
					}
					setTimeout(function() {
						uni.hideLoading()
					}, 300)
					// console.log(result)
					let data = result.data.data
					if (data) {
						res(data)
					} else {
						res(result.data)
					}
				}
			})
		})
	}
}
