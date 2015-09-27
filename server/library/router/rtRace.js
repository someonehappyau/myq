'use strict';

var express=require('express');
var router=express.Router();
var path=require('path');
var request=require('request');

//var ctrlMCModel=require('../controller/ctrlMCModel');

router.get('/race/motogp',function(req,res){
	res.status(200).render('race/motogp');
});

//router.get('/model/brand/:brandName',function(req,res){
//	ctrlMCModel.getModelsByBrandName(req,res);
//});

module.exports=router;
