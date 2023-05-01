const mysql = require('mysql2')
const connection = mysql.createConnection({
	// host: 'localhost',
	host: '192.168.0.107',
	user: 'root',
	password: 'LXL1314520',
	database: 'student_project'
})
const query = (str) => {
	return connection.promise().query(str)
}
module.exports = connection
