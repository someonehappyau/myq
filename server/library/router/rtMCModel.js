'use strict';

var express=require('express');
var router=express.Router();
var path=require('path');
var request=require('request');

router.get('/model/brand',function(req,res){
	res.status(200).render('modelBrand');
});

router.get('/model/brand/:brandName',function(req,res){
	request.get('http://localhost:3011/mc/model/brand/'+req.params.brandName,function(err,response,body){
		if(!err && response.statusCode===200)
			res.status(200).render('modelBrandModelList',{brandName:req.params.brandName,models:JSON.parse(body)});
		else
			res.status(response.statusCode).end();
	});
});

router.get('/model/:modelName',function(req,res){
	request.get('http://localhost:3011/mc/model/'+req.params.modelName+'?y1='+req.query.y1+'&y2='+req.query.y2,function(err,response,body){
		if(!err && response.statusCode===200)
			res.status(200).render('modelDetail',{model:JSON.parse(body)});
		else
			res.status(response.statusCode).end();
	});
});

module.exports=router;
