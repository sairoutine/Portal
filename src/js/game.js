'use strict';
var core = require('./hakurei').core;
var util = require('./hakurei').util;
var SceneLoading = require('./hakurei').scene.loading;
var AssetsConfig = require('./assets_config');

var Game = function(canvas) {
	core.apply(this, arguments);
};
util.inherit(Game, core);

Game.prototype.init = function () {
	core.prototype.init.apply(this, arguments);

	this.addScene("loading", new SceneLoading(this));

	this.changeScene("loading", AssetsConfig);
};

module.exports = Game;
