var express = require('express');
const connection = require('../db/connection');
var router = express.Router();

/* GET users listing. */
router.post('/auth/login', function(req, res, next) {
	const body = req.body
	const openId = body.openId

	connection.query(`select * from student where open_id=${openId}`, function(err, results) {
		// 该小程序用户不是学员，则没有token
		if (!results) {
			res.send({
				resultCode: 200,
				data: {
					...body,
					nickName: '小程序用户',
					isLogin: true
				}
			})
		} else {
			// 引入token包
			let jwt = require('jsonwebtoken')
			// 用户信息
			let payload = {
				openId
			}
			// 口令
			let secret = 'llllxxxxllll'
			// 生成token
			let token = jwt.sign(payload, secret)
			res.send({
				resultCode: 200,
				data: {
					...results[0],
					token,
					isLogin: true
				}
			})
		}
	})

});

module.exports = router;
