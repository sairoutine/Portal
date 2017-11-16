'use strict';

var base_scene = require('../hakurei').scene.base;
var util = require('../hakurei').util;
var SceneTitle = function(core) {
	base_scene.apply(this, arguments);

};
util.inherit(SceneTitle, base_scene);

SceneTitle.prototype.init = function(){
	base_scene.prototype.init.apply(this, arguments);
};


SceneTitle.prototype.beforeDraw = function(){
	base_scene.prototype.beforeDraw.apply(this, arguments);

};

// 画面更新
SceneTitle.prototype.draw = function(){
	base_scene.prototype.draw.apply(this, arguments);
};

module.exports = SceneTitle;
