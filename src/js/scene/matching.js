'use strict';

var Hakurei = require('../hakurei');
var SceneTitle = function(core) {
	Hakurei.Scene.Base.apply(this, arguments);
	this._message = new Hakurei.Object.UI.Text(this, {
		text: "マッチング中...",
		textColor: "white",
		textSize: "32px",
		textAlign: "center",
		x: this.width/2,
		y: this.height - 100,
	});

	this.ui.addSubObjects([
		this._message,
		new Hakurei.Object.UI.Spinner(this, {
			x: this.width/2,
			y: this.height/2 - 50,
			size: 400,
			color: "white",
		})
	]);

	this.setBackgroundColor("black");
};
Hakurei.Util.inherit(SceneTitle, Hakurei.Scene.Base);

SceneTitle.prototype.init = function(){
	Hakurei.Scene.Base.prototype.init.apply(this, arguments);

	this.setFadeIn(60, "black");
	this.setFadeOut(60, "black");

	// TODO: websocket 実装
	var self = this;
	this.core.time_manager.setTimeout(function() {
		self._message.text("マッチング完了");

		self.core.time_manager.setTimeout(function() {
			self.core.changeScene("battle");
		}, 60*1);
	}, 60*3);
};


SceneTitle.prototype.beforeDraw = function(){
	Hakurei.Scene.Base.prototype.beforeDraw.apply(this, arguments);

};

SceneTitle.prototype.draw = function(){
	Hakurei.Scene.Base.prototype.draw.apply(this, arguments);
};

module.exports = SceneTitle;
