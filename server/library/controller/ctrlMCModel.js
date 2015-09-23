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
				uri: '/mc/model/'+req.params.modelName+'?yearStart='+req.query.yearStart+'&yearEnd='+req.query.yearEnd
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
							res.status(200).render('modelDetail',{model:msg.data,specs:composeModelSpecs(msg.data)});
					}
					else
						res.redirect('/lib/model/brand');
						//res.status(response.statusCode).end();
			});
};

function composeModelSpecs(data){
	var ret=[];

	console.log(data);

	if (data.engine.length>0){
		var eng=data.engine[0];
		var engContent=[];
		engContent.push({
			name:'形式',
			content:eng.engFormatLabel+eng.engCylCount+'缸'
		});
		engContent.push({
			name:'马力',
			content:eng.engMaxPowerKW+'kw ('+eng.engMaxPowerHP+'ps) @ '+eng.engMaxPowerRPM+'RPM'
		});
		ret.push({
			name:'发动机',
			content:engContent
		});		
	}

	if (data.frame.length>0){
		var frame=data.frame[0];
		var frameContent=[];

		frameContent.push({
			name:'形式',
			content:frame.frameMaterialLabel+frame.frameTypeLabel
		});

		pushItem(frameContent,'前倾角',frame.frameRake);
		pushItem(frameContent,'拖曳距',frame.frameTrail);
		
		pushItem(ret,'车架',frameContent);
	}

	console.log(JSON.stringify(ret));

	return ret;
};

function pushItem(arr,name,content){
	arr.push({
		name:name,
		content:content
	});
};

module.exports={
	getModelsByBrandName:getModelsByBrandName,
	getModelDetailByModelName:getModelDetailByModelName,
};
