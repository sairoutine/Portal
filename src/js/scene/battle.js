'use strict';

var base_scene = require('../hakurei').scene.base;
var util = require('../hakurei').util;
var SceneBattle = function(core) {
	base_scene.apply(this, arguments);

};
util.inherit(SceneBattle, base_scene);

SceneBattle.prototype.init = function(){
	base_scene.prototype.init.apply(this, arguments);
};


SceneBattle.prototype.beforeDraw = function(){
	base_scene.prototype.beforeDraw.apply(this, arguments);

};

// 画面更新
SceneBattle.prototype.draw = function(){
	base_scene.prototype.draw.apply(this, arguments);
};

module.exports = SceneBattle;
