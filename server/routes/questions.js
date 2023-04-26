var express = require('express')
const {
	connect
} = require('../db/connection')
var router = express.Router()
var connection = require('../db/connection')
// 返回面试题类型列表数据
router.get('/typeList', function(req, res, next) {
	connection.query('select * from question_list', function(err, results) {
		res.send({
			resultCode: 200,
			data: results
		})
	})
})
module.exports = router
// 返回面试题列表数据
router.get('/list', function(req, res, next) {
	const id = req.query.id
	// console.log(id)
	connection.query(
		`SELECT * FROM question_item WHERE question_item.type =  ${id}`,
		function(err, results) {
			res.send({
				resultCode: 200,
				data: results
			})
		})

})
// 查询面试题数量
router.get('/count', function(req, res, next) {
	const id = req.query.id
	console.log(req.query)
	connection.query(`SELECT COUNT(*) total FROM question_item where type = ${id}`, function(err, results) {
		console.log(results)
		res.send({
			resultCode: 200,
			data: results[0]
		})
	})
})
