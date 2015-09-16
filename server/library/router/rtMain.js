'use strict';

var express=require('express');
var router=express.Router();
var path=require('path');

router.get('/', function(req,res){
	res.status(200).render('index');
});

router.use(function(req,res){
	res.redirect('/lib/');
});

module.exports=router;
