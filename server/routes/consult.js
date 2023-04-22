var express = require('express')
var router = express.Router()
var connection = require('../db/connection')
// 返回咨询列表
router.get('/list', function(req, res, next) {
	connection.query('select * from consult', function(err, results) {
		res.send({
			resultCode: 200,
			data: results
		})
	})
})
module.exports = router
