const mysql = require('mysql2')
const connection = mysql.createConnection({
	host: '10.107.161.70',
	user: 'root',
	password: 'LXL1314520',
	database: 'student_project'
})
module.exports = connection
