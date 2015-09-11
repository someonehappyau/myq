'use strict';

var fs=require('fs');

var cfg=require('../../cfg/cfg');

function getImage(imgType,imgName,res){
	var r;
	if (imgType==='brand'){
		r=fs.createReadStream(cfg.imageLib.model.brand+imgName);
	}
	else{
		r=null;
	}

	if (!r){
		res.status(404).end();
	}
	else{
		r.pipe(res);
	}
};

module.exports={
	getImage:getImage
};
