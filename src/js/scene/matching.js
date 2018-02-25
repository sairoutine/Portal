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
		y: 100,
	});

	this.ui.addSubObjects([
		this._message
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

var canvas = document.createElement('canvas');
var context = canvas.getContext('2d');
var start = new Date();
var lines = 16,
	cW = context.canvas.width,
	cH = context.canvas.height;

SceneTitle.prototype.draw = function(){
	Hakurei.Scene.Base.prototype.draw.apply(this, arguments);
	var ctx = this.core.ctx;

    var rotation = parseInt(((new Date() - start) / 1000) * lines) / lines;
    context.save();
    context.clearRect(0, 0, cW, cH);
    context.translate(cW / 2, cH / 2);
    context.rotate(Math.PI * 2 * rotation);
    for (var i = 0; i < lines; i++) {

        context.beginPath();
        context.rotate(Math.PI * 2 / lines);
        context.moveTo(cW / 10, 0);
        context.lineTo(cW / 4, 0);
        context.lineWidth = cW / 30;
        context.strokeStyle = "rgba(255, 255, 255," + i / lines + ")";
        context.stroke();
    }
    context.restore();

	ctx.drawImage(canvas, 0,0);
};

module.exports = SceneTitle;
