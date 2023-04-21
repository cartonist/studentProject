const express = require('express');
const connection = require('../db/connection')
const router = express.Router();

// 返回通知列表数据
router.get('/list', function(req, res, next) {
	connection.query('select * from notice', function(err, results) {
		res.send({
			resultCode: 200,
			data: results
		})
	})
})

module.exports = router;
