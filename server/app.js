var express=require('express');
var logger=require('morgan');
var path=require('path');
var bodyParser=require('body-parser');
var cookieParser=require('cookie-parser');

var app=express();

//View engine setup
app.set('views',[__dirname+'/library/views']);
app.set('view engine','jade');

//logger and parser
app.use(cookieParser());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

/*
app.use(require('express-session')({
	secret: 'cat',
	resave: false,
	saveUninitialized:false,
	cookie:{path:'/',maxAge:900000},
	rolling:true
}));
*/

//app.use('/lib',express.static(path.join(__dirname,'../apps/library')));
//********* Routers ****************

app.use('/img',require('./library/router/rtImageLib'));

app.use('/lib',require('./library/router/rtMCModel'));
app.use('/lib',require('./library/router/rtRace'));

//Leave rtMain at last.
app.use('/lib',require('./library/router/rtMain'));


//********* End Routers ************

app.use('/bower',express.static(path.join(__dirname,'../bower_components')));
app.use(express.static(__dirname + '/public'));

app.listen(3010);

process.on('uncaughtException', function (err) {
	  console.log('Caught exception: ' + err);
});


