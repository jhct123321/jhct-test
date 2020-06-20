(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"gg2211_atlas_", frames: [[0,0,744,744],[0,746,336,336],[0,1084,254,267],[256,1084,254,267]]}
];


// symbols:



(lib.CachedTexturedBitmap_60 = function() {
	this.initialize(ss["gg2211_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_61 = function() {
	this.initialize(ss["gg2211_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_62 = function() {
	this.initialize(ss["gg2211_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_91 = function() {
	this.initialize(ss["gg2211_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(1));

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_62();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,-0.5,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_91();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.5,-0.5,0.5,0.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(2).to({y:28},0).wait(1).to({y:56.5},0).wait(1).to({y:85.05},0).wait(1).to({y:113.55},0).wait(1).to({y:142.05},0).wait(1).to({y:170.55},0).wait(1).to({y:199.05},0).wait(1).to({y:227.55},0).wait(1).to({y:256.1},0).wait(1).to({y:284.6},0).wait(1).to({y:313.1},0).wait(1).to({y:341.6},0).wait(1).to({y:370.1},0).wait(1).to({y:398.65},0).wait(1).to({y:427.15},0).wait(1).to({y:455.65},0).wait(1).to({y:484.15},0).wait(1).to({y:512.65},0).wait(1).to({y:541.2},0).wait(1).to({y:569.7},0).wait(1).to({y:598.2},0).wait(1).to({y:626.7},0).wait(1).to({y:655.2},0).wait(1).to({y:683.7},0).wait(1).to({y:712.25},0).wait(1).to({y:740.75},0).wait(1).to({y:769.25},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,127,903.3);


(lib.nullbutton01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//
		///* Stop at This Frame
		//The  timeline will stop/pause at the frame where you insert this code.
		//Can also be used to stop/pause the timeline of movieclips.
		//*/
		//
		this.stop();
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_61();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.nullbutton01, new cjs.Rectangle(0,0,168,168), null);


// stage content:
(lib.gg2211 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.nullbutton01.addEventListener("rollOver", fl_rollOverToGoToAndStopAtFrame_2);
		
		function fl_rollOverToGoToAndStopAtFrame_2()
		{
			
			this.s01.gotoAndPlay(2);
		}
		
		this.nullbutton01.addEventListener("rollOut", fl_rollOutToGoToAndStopAtFrame_2);
		
		function fl_rollOutToGoToAndStopAtFrame_2()
		{
			
			this.s01.gotoAndPlay(1);
		}
		
		
		this.nullbutton01.addEventListener("click", fl_ClickToGoToAndStopAtFrame_2);
		
		function fl_ClickToGoToAndStopAtFrame_2()
		{
			this.s01.gotoAndPlay(3);
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(60));

	// Layer_5
	this.nullbutton01 = new lib.nullbutton01();
	this.nullbutton01.name = "nullbutton01";
	this.nullbutton01.parent = this;
	this.nullbutton01.setTransform(227.95,92,1,1,0,0,0,84,84);
	new cjs.ButtonHelper(this.nullbutton01, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.nullbutton01).wait(60));

	// Layer_2
	this.s01 = new lib.Symbol1();
	this.s01.name = "s01";
	this.s01.parent = this;
	this.s01.setTransform(228.6,81.95,1,1,0,0,0,63.1,66.3);

	this.timeline.addTween(cjs.Tween.get(this.s01).wait(60));

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_60();
	this.instance.parent = this;
	this.instance.setTransform(-423.85,115.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-394.3},0).wait(1).to({x:-364.75},0).wait(1).to({x:-335.2},0).wait(1).to({x:-305.65},0).wait(1).to({x:-276.1},0).wait(1).to({x:-246.55},0).wait(1).to({x:-217},0).wait(1).to({x:-187.45},0).wait(1).to({x:-157.9},0).wait(1).to({x:-128.35},0).wait(1).to({x:-98.8},0).wait(1).to({x:-69.3},0).wait(1).to({x:-39.75},0).wait(1).to({x:-10.15},0).wait(1).to({x:19.4},0).wait(1).to({x:48.9},0).wait(1).to({x:78.45},0).wait(1).to({x:108},0).wait(1).to({x:137.55},0).wait(1).to({x:167.15},0).wait(1).to({x:196.65},0).wait(1).to({x:226.2},0).wait(1).to({x:255.75},0).wait(1).to({x:285.3},0).wait(1).to({x:314.85},0).wait(1).to({x:344.4},0).wait(1).to({x:373.95},0).wait(1).to({x:403.5},0).wait(1).to({x:433.05},0).wait(1).to({x:462.6},0).wait(1).to({x:492.15},0).wait(1).to({x:521.7},0).wait(1).to({x:551.25},0).wait(1).to({x:580.8},0).wait(1).to({x:610.35},0).wait(1).to({x:639.9},0).wait(1).to({x:669.45},0).wait(1).to({x:699},0).wait(1).to({x:728.5},0).wait(1).to({x:758.1},0).wait(1).to({x:787.65},0).wait(1).to({x:817.2},0).wait(1).to({x:846.75},0).wait(1).to({x:876.25},0).wait(1).to({x:905.8},0).wait(1).to({x:935.4},0).wait(1).to({x:964.95},0).wait(1).to({x:994.45},0).wait(1).to({x:1024},0).wait(1).to({x:1053.55},0).wait(1).to({x:1083.1},0).wait(1).to({x:1112.65},0).wait(1).to({x:1142.2},0).wait(1).to({x:1171.75},0).wait(1).to({x:1201.3},0).wait(1).to({x:1230.85},0).wait(1).to({x:1260.4},0).wait(1).to({x:1289.95},0).wait(1).to({x:1319.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(216.2,368,1475.3,119.89999999999998);
// library properties:
lib.properties = {
	id: 'CF175466F3EE4BCAA70A655CE8B46576',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/gg2211_atlas_.png", id:"gg2211_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['CF175466F3EE4BCAA70A655CE8B46576'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;