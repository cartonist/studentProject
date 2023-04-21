const mysql = require('mysql2')
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'LXL1314520',
	database: 'student_project'
})
module.exports = connection
