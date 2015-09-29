'use strict';

var express=require('express');
var router=express.Router();
var path=require('path');
var request=require('request');

var ctrlRace=require('../controller/ctrlRace');

router.get('/race/motogp',function(req,res){
	res.status(200).render('race/motogp');
});

router.get('/race/motogp/2015',function(req,res){
	ctrlRace.getMotogp2015(req,res);
	//res.status(200).render('race/motogp_2015');
});

//router.get('/model/brand/:brandName',function(req,res){
//	ctrlMCModel.getModelsByBrandName(req,res);
//});

module.exports=router;
