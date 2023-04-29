var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var classRouter = require('./routes/class');
var excelRouter = require('./routes/excel');
var noticeRouter = require('./routes/notice')
var consultRouter = require('./routes/consult')
var questionRouter = require('./routes/questions')
var processRouter = require('./routes/process')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
	extended: false
}));
app.use(cookieParser());
// 托管静态资源目录
app.use('/public', express.static('public'));

app.use('/', indexRouter);
app.use('/users', usersRouter);
// 班级路由
app.use('/wechat/class', classRouter);
// 优秀学员路由
app.use('/wechat/excellent', excelRouter);
// 通知路由
app.use('/wechat/notice', noticeRouter);
// 咨询路由
app.use('/wechat/help', consultRouter)
// 面试题路由
app.use('/wechat/questions', questionRouter)
// 面试流程路由
app.use('/wechat/process', processRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
