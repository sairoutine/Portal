'use strict';

var base_scene = require('../hakurei').scene.base;
var util = require('../hakurei').util;
var SceneMatching = function(core) {
	base_scene.apply(this, arguments);

};
util.inherit(SceneMatching, base_scene);

SceneMatching.prototype.init = function(){
	base_scene.prototype.init.apply(this, arguments);
};


SceneMatching.prototype.beforeDraw = function(){
	base_scene.prototype.beforeDraw.apply(this, arguments);

};

// 画面更新
SceneMatching.prototype.draw = function(){
	base_scene.prototype.draw.apply(this, arguments);
};

module.exports = SceneMatching;
