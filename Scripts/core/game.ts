/// <reference path="../typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="../typings/easeljs/easeljs.d.ts" />
/// <reference path="../typings/es6-promise/es6-promise.d.ts" />
/// <reference path="../typings/preloadjs/preloadjs.d.ts" />
/// <reference path="../typings/soundjs/soundjs.d.ts" />
/// <reference path="../typings/tweenjs/tweenjs.d.ts" />
/// <reference path="../typings/webaudioapi/waa.d.ts" />
/// <reference path="../typings/webrtc/mediastream.d.ts" />
/// <reference path="../typings/webrtc/rtcpeerconnection.d.ts" />
/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// global game framework variables
var canvas: HTMLElement;
var stage: createjs.Stage;

// game variables
var helloLabel: createjs.Text;

function init():void {
	canvas = document.getElementById("canvas"); // reference to the canvas element
	stage = new createjs.Stage(canvas); // associate the canvas element with the stage
	createjs.Ticker.setFPS(60); // set the framerate to 60fps
	createjs.Ticker.on("tick", gameLoop, this);
	
	main();
}

function gameLoop(event:createjs.Event):void {
	helloLabel.rotation += 5;
	helloLabel.x += 2;
	if(helloLabel.x >= (640 + helloLabel.getBounds().width * 0.5)) {
		helloLabel.x = -helloLabel.getBounds().width * 0.5;
	}
	stage.update();
	
}

function main():void {
	console.log("We made it to the game");
	helloLabel = new createjs.Text("Hello World!", "40px Consolas", "#000000");
	helloLabel.regX = helloLabel.getBounds().width * 0.5;
	helloLabel.regY = helloLabel.getBounds().height * 0.5;
	helloLabel.x = 320;
	helloLabel.y = 245;
	stage.addChild(helloLabel);
}