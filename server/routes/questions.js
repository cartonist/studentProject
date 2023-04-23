var express = require('express')
var router = express.Router()
var connection = require('../db/connection')
// 返回面试题列表数据
router.get('/list', function(req, res, next) {
	connection.query('select * from question_list', function(err, results) {
		res.send({
			resultCode: 200,
			data: results
		})
	})
})
module.exports = router
