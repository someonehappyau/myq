'use strict';

var request=require('request');

var cfg=require('../../cfg/cfg');

function getModelsByBrandName(req,res){
	if (!req.params.brandName)
		res.redirect('/lib/model/brand');
	else
		request.get({
				baseUrl: cfg.myqws.url,
				uri: '/mc/model/brand/'+req.params.brandName
			},
			function(err,response,body){
				if (err)
					//res.redirect('/lib/model/brand');
					res.status(500).end(JSON.stringify(err));
				else 
					if (response.statusCode===200)
						res.status(200).render('modelBrandModelList',{brandName:req.params.brandName,models:JSON.parse(body).data});
					else
						res.redirect('/lib/model/brand');
						//res.status(response.statusCode).end();
			});
};

function getModelDetailByModelName(req,res){
	if (!req.params.modelName || !req.query.yearStart || !req.query.yearEnd)
		res.redirect('/lib/model/brand');
	else
		request.get({
				baseUrl: cfg.myqws.url,
				uri: '/mc/model/specs/'+req.params.modelName+'?yearStart='+req.query.yearStart+'&yearEnd='+req.query.yearEnd
			},
			function(err,response,body){
				if (err)
					res.status(500).end(JSON.stringify(err));
				else
					if (response.statusCode===200){
						var msg=JSON.parse(body);
						if (!msg.data)
							res.redirect('/lib/model/brand');
						else
							res.status(200).render('modelDetail',msg.data);
					}
					else
						res.redirect('/lib/model/brand');
						//res.status(response.statusCode).end();
			});
};

module.exports={
	getModelsByBrandName:getModelsByBrandName,
	getModelDetailByModelName:getModelDetailByModelName,
};
