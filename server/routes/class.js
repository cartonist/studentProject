const express = require('express');
const connection = require('../db/connection')
const router = express.Router();
// 引入token包
let jwt = require('jsonwebtoken')

// 返回课程列表数据
router.get('/list', function(req, res, next) {
	connection.query('select * from class_type', function(err, results) {
		res.send({
			resultCode: 200,
			data: results
		})
	})
})
// 返回学员的所有入学的班级
router.get('/enter-school', function(req, res, next) {
	const token = req.headers.token
	let tokenObj = jwt.decode(token)
	const openId = tokenObj.openId
	console.log(openId)
	connection.query(`select * from enter_school where open_id = "${openId}"`, function(err, results) {
		res.send({
			resultCode: 200,
			data: results
		})
	})
})
// 入学
router.post('/get-in', function(req, res, next) {
	const userInfo = req.body
	const openId = userInfo.openId
	// 如果还没有成为学员，则先祖册为学员
	connection.query(`select * from student where open_id ="${openId}"`, function(err, results) {
		if (results.length == 0) {
			connection.query(
				`INSERT INTO student (open_id, avatarUrl, status) VALUES ('${userInfo.openId}', '${userInfo.avatarUrl}', 0)`
			)
		}
	})
	// 插入班级入学信息
	connection.query(`INSERT INTO enter_school (open_id, id_card, phone, stage, address, birth, education, major, wechat, real_name, gender, class_id) VALUES ('${userInfo.openId}', '${userInfo.id_card}', '${userInfo.phone}', '${userInfo.stage}', '${userInfo.address}', '${userInfo.birth}', '${userInfo.education}', '${userInfo.major}', '${userInfo.wechat}', '${userInfo.real_name}', '${userInfo.gender}', ${userInfo.class_id})
`, function(err, results) {
		res.send({
			resultCode: 200,
			msg: '入学成功'
		})
	})

})
module.exports = router;
