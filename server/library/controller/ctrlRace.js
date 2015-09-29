'use strict';

//var request=require('request');
//var path=require('path');
var fs=require('fs');

var cfg=require('../../cfg/cfg');

function getMotogp2015(req,res){
	var data;

	data=JSON.parse(fs.readFileSync(cfg.race.data.motogp.Y2015));
	res.status(200).render('race/motogp_2015',{riderStanding:data.riderStanding});
};

module.exports={
	getMotogp2015:getMotogp2015,
};
