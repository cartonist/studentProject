const express = require('express');
const connection = require('../db/connection')
const router = express.Router();
// 引入token包
let jwt = require('jsonwebtoken')

// 返回学员的协议内容
router.get('/current', function(req, res, next) {
	const token = req.headers.token
	let tokenObj = jwt.decode(token)
	const openId = tokenObj.openId
	connection.query(`select * from sign where open_id="${openId}"`, function(err, results) {
		res.send({
			resultCode: 200,
			data: results[0]
		})
	})
})
router.post('/signClassProtocol', function(req, res, next) {
	const token = req.headers.token
	let tokenObj = jwt.decode(token)
	const openId = tokenObj.openId
	const {
		filePath,
		signTime
	} = req.body
	console.log(filePath, signTime)
	connection.query(
		`INSERT INTO sign (sign_time, open_id, sign_img) VALUES ('${signTime}', '${openId}', '${filePath}')`,
		function(err,
			results) {
			connection.query(`UPDATE student SET status = 1 WHERE open_id = '${openId}'
			`, function(err, results) {
				res.send({
					resultCode: 200,
					msg: "更新成功"
				})
			})
		})
})

module.exports = router;
