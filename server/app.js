var express=require('express');
var logger=require('morgan');
var path=require('path');
var bodyParser=require('body-parser');
var cookieParser=require('cookie-parser');

var app=express();

app.use(cookieParser());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(require('express-session')({
	secret: 'cat',
	resave: false,
	saveUninitialized:false,
	cookie:{path:'/',maxAge:900000},
	rolling:true
}));


app.use('/bower',express.static(path.join(__dirname,'../bower_components')));
app.use(express.static(__dirname + '/public'));

app.listen(3010);

process.on('uncaughtException', function (err) {
	  console.log('Caught exception: ' + err);
});


