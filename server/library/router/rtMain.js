'use strict';

var express=require('express');
var router=express.Router();
var path=require('path');

router.use(express.static(path.join(__dirname,'../../../apps/library')));

router.use(function(req,res){
	res.redirect('/lib/');
});

module.exports=router;
