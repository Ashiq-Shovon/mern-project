var createError = require('http-errors');
var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// var http = require('http');
// app = http.createServer(function(req,res){
//     res.setHeader('Content-Type', 'application/json');
//     res.end(JSON.stringify({ a: 1 }));
// });
var app = express();
app.use(cors(corsOptions))

//connection string: mongodb+srv://mernstack:1234@cluster0.lx2yr.mongodb.net/?retryWrites=true&w=majority
mongoose.connect('mongodb+srv://mernstack:1234@cluster0.lx2yr.mongodb.net/posDb?retryWrites=true&w=majority').
then(()=> console.log("connection successful")).
catch(err => console.log(err));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
app.listen(3001, function() {
  console.log("Server is running on port " + 3001);
});

module.exports = app;