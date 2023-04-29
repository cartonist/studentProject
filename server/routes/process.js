const express = require('express')
const connection = require('../db/connection')
const router = express.Router()

// 返回面试流程列表数据
router.get('/list', function(req, res, next) {
	// 获取面试列表

	connection.query('select * from process_list', function(err, results) {
		// 获取面试列表子项
		connection.query('SELECT * FROM `process_child`',
			function(e, r) {
				r.forEach(item => {

					if (results[item.list_id - 1].child) {
						results[item.list_id - 1].child.push(item);
					} else {
						results[item.list_id - 1].child = [item];
					}
				})
				res.send({
					resultCode: 200,
					data: results
				})

			})
	})
})
module.exports = router
