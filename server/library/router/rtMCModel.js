'use strict';

var express=require('express');
var router=express.Router();
var path=require('path');
var request=require('request');

var ctrlMCModel=require('../controller/ctrlMCModel');

router.get('/model/brand',function(req,res){
	res.status(200).render('modelBrand');
});

router.get('/model/brand/:brandName',function(req,res){
	ctrlMCModel.getModelsByBrandName(req,res);
});

router.get('/model/:modelName',function(req,res){
	ctrlMCModel.getModelDetailByModelName(req,res);
});

module.exports=router;
