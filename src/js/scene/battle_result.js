'use strict';

var base_scene = require('../hakurei').scene.base;
var util = require('../hakurei').util;
var SceneBattleResult = function(core) {
	base_scene.apply(this, arguments);

};
util.inherit(SceneBattleResult, base_scene);

SceneBattleResult.prototype.init = function(){
	base_scene.prototype.init.apply(this, arguments);
};


SceneBattleResult.prototype.beforeDraw = function(){
	base_scene.prototype.beforeDraw.apply(this, arguments);

};

// 画面更新
SceneBattleResult.prototype.draw = function(){
	base_scene.prototype.draw.apply(this, arguments);
};

module.exports = SceneBattleResult;
