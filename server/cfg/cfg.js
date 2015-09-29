'use strict';

var fs=require('fs');
var path=require('path');

var cfgImageLib=require('./cfgImageLib');
var cfgRace=require('./cfgRace');

function getCfgJson(cfgPath){
	return JSON.parse(fs.readFileSync(path.join(__dirname,cfgPath),'utf8'));
};

var setting={
	db:getCfgJson('./cfgDbSetting.json'),
	imageLib:cfgImageLib,
	imageSize:getCfgJson('./cfgGalleryImageSize.json'),
	myqws:getCfgJson('./cfgMyqWS.json'),
	race:cfgRace
};

module.exports=setting;

