'use strict';
var core = require('./hakurei').core;
var util = require('./hakurei').util;
var SceneTitle        = require('./scene/title');
var SceneMatching     = require('./scene/matching');
var SceneBattle       = require('./scene/battle');
var SceneBattleResult = require('./scene/battle_result');
var AssetsConfig = require('./assets_config');
var CONSTANT = require('./constant');

var Game = function(canvas) {
	core.apply(this, arguments);
};
util.inherit(Game, core);

Game.prototype.init = function () {
	core.prototype.init.apply(this, arguments);

	this.addScene("title",         new SceneTitle(this));
	this.addScene("matching",      new SceneMatching(this));
	this.addScene("battle",        new SceneBattle(this));
	this.addScene("battle_result", new SceneBattleResult(this));

	if (CONSTANT.DEBUG.START_SCENE) {
		// デバッグ用
		this.changeScene.apply(this, ["loading", AssetsConfig].concat(CONSTANT.DEBUG.START_SCENE));
	}
	else {
		// 本番
		this.changeScene("loading", AssetsConfig, "title");
	}
};

module.exports = Game;
