'use strict';

var fs=require('fs');
var request=require('request');

var cfg=require('../../cfg/cfg');

function getImage(req,res){
	request.get({
		baseUrl: cfg.myqws.url,
		uri: '/img/'+req.params.imgType+'/'+req.params.imgName+req.params[0],
		//encoding: null
	})
	.on('error',function(err){
		res.status(404).end();
	})
	.pipe(res);
};

module.exports={
	getImage:getImage
};
