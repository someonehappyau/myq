'use strict';

var fs=require('fs');
var request=require('request');

var cfg=require('../../cfg/cfg');

function getImage(imgType,imgName,res){
	request.get('http://localhost:3011/img/'+imgType+'/'+imgName,{encoding:null},function(err,response,body){
			if (!err && response.statusCode===200)
				res.status(200).end(body);
			else
				res.status(response.statusCode).end();
		});
};

module.exports={
	getImage:getImage
};
