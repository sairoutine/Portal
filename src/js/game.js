'use strict';
var core = require('./hakurei').core;
var util = require('./hakurei').util;
var SceneTitle = require('./scene/title');
var AssetsConfig = require('./assets_config');

var Game = function(canvas) {
	core.apply(this, arguments);
};
util.inherit(Game, core);

Game.prototype.init = function () {
	core.prototype.init.apply(this, arguments);

	this.addScene("title", new SceneTitle(this));

	this.changeScene("loading", AssetsConfig, "title");
};

module.exports = Game;
