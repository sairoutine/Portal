'use strict';

var Hakurei = require('../hakurei');
var SceneTitle = function(core) {
	Hakurei.Scene.Base.apply(this, arguments);

	this.ui.addSubObjects([
		new Hakurei.Object.UI.Text(this, {
			text: "Portal",
			textColor: "white",
			textSize: "100px",
			textAlign: "center",
			x: this.width/2,
			y: 100,
		}),
		new Hakurei.Object.UI.Text(this, {
			text: "Click to Match Battle",
			textColor: "white",
			textSize: "48px",
			textAlign: "center",
			x: this.width/2,
			y: 350,
		})
		.on("beforedraw", function () {
			if (this.frame_count % 60 === 0) {
				if (this.isShow()) {
					this.hide();
				}
				else {
					this.show();
				}
			}
		})
	]);

	this.setBackgroundColor("black");
};
Hakurei.Util.inherit(SceneTitle, Hakurei.Scene.Base);

SceneTitle.prototype.init = function(){
	Hakurei.Scene.Base.prototype.init.apply(this, arguments);

	this.setFadeOut(60, "black");
};


SceneTitle.prototype.beforeDraw = function(){
	Hakurei.Scene.Base.prototype.beforeDraw.apply(this, arguments);

	if (this.core.input_manager.isLeftClickPush()) {
		this.core.changeScene("matching");
	}
};

SceneTitle.prototype.draw = function(){
	Hakurei.Scene.Base.prototype.draw.apply(this, arguments);
};

module.exports = SceneTitle;
