'use strict';

var Hakurei = require('../hakurei');
var SceneBattle = function(core) {
	Hakurei.Scene.Base.apply(this, arguments);
	this.ui.addSubObjects([
		// 左サイドバー
		new Hakurei.Object.UI.Group(this, {
			x: 0,
			y: 0,
			width: 100,
			height: this.height,
			backgroundColor: "black",
			// TODO:
			children: [],
		}),
		// 上 対戦相手フィールド
		new Hakurei.Object.UI.Group(this, {
			x: 100,
			y: 0,
			width: this.width - 100,
			height: (this.height-100)/2,
			backgroundColor: "black",
			// カード一覧
			children: [],
		}),
		// 中 自分フィールド
		new Hakurei.Object.UI.Group(this, {
			x: 100,
			y: (this.height-100)/2,
			width: this.width - 100,
			height: this.height-100,
			backgroundColor: "black",
			// カード一覧
			children: [
				// カード画像
				new Hakurei.Object.UI.Image(this, {
					x: 100,
					y: (this.height-100)/2,
					image_name: "creature",
				}),
			],
		}),
		// 下 自分 手札
		new Hakurei.Object.UI.Group(this, {
			x: 100,
			y: this.height-100,
			width: this.width - 100,
			height: 100,
			backgroundColor: "black",
			// カード一覧
			children: [],
		})
	]);

	this.setBackgroundColor("white");
};
Hakurei.Util.inherit(SceneBattle, Hakurei.Scene.Base);

SceneBattle.prototype.init = function(){
	Hakurei.Scene.Base.prototype.init.apply(this, arguments);
};


SceneBattle.prototype.beforeDraw = function(){
	Hakurei.Scene.Base.prototype.beforeDraw.apply(this, arguments);

};

SceneBattle.prototype.draw = function(){
	Hakurei.Scene.Base.prototype.draw.apply(this, arguments);
};

module.exports = SceneBattle;
