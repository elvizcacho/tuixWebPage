(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1280,
	height: 630,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"/assets/img1_animation.png", id:"img1_animation"},
		{src:"/assets/img2_animation.png", id:"img2_animation"}
	]
};

// stage content:
(lib.anima_logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_44 = function() {
		this.stop();
		$('#part1').hide("slow",function(){
			$('#menu').fadeIn(300);
		});

	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(1));

	// Layer 3
	this.instance = new lib.Symbol2();
	this.instance.setTransform(1513,293.5,1,1,0,0,0,163,173.5);

	this.instance_1 = new lib.Symbol3();
	this.instance_1.setTransform(1153.9,293.6,0.999,0.999,-14.8,0,0,162.8,173.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-15,x:1486.3},0).wait(1).to({rotation:-30,x:1459.7},0).wait(1).to({rotation:-45,x:1433},0).wait(1).to({rotation:-60,x:1406.3},0).wait(1).to({rotation:-74.9,x:1379.7},0).wait(1).to({rotation:-89.9,x:1353},0).wait(1).to({rotation:-104.9,x:1326.3},0).wait(1).to({rotation:-119.9,x:1299.7},0).wait(1).to({rotation:-135,x:1273},0).wait(1).to({rotation:-149.9,x:1246.3},0).wait(1).to({rotation:-164.9,x:1219.7},0).wait(1).to({rotation:-179.9,x:1193},0).to({_off:true},1).wait(12).to({_off:false,rotation:0,x:934.2},0).wait(1).to({rotation:-15,x:916.1},0).wait(1).to({rotation:-30,x:898.1},0).wait(1).to({rotation:-45,x:880.2},0).wait(1).to({regX:163.4,regY:173.6,scaleX:1,scaleY:1,rotation:-44.9,y:293.6},0).wait(1).to({regX:163,regY:173.5,scaleX:1,scaleY:1,rotation:-40.9,x:886.5,y:293.7},0).wait(1).to({rotation:-36.8,x:893.1},0).wait(1).to({rotation:-32.7,x:899.7},0).wait(1).to({rotation:-28.6,x:906.3},0).wait(1).to({rotation:-24.5,x:912.9,y:293.6},0).wait(1).to({rotation:-20.5,x:919.6},0).wait(1).to({rotation:-16.4,x:926.2},0).wait(1).to({rotation:-12.3,x:932.8},0).wait(1).to({rotation:-8.2,x:939.5,y:293.5},0).wait(1).to({rotation:-4.1,x:946.2},0).wait(1).to({rotation:0,x:952.8},0).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({_off:false},0).wait(1).to({regX:163,scaleX:1,scaleY:1,rotation:-30,x:1134.1,y:293.4},0).wait(1).to({rotation:-45,x:1114.2},0).wait(1).to({rotation:-60,x:1094.2,y:293.3},0).wait(1).to({rotation:-74.9,x:1074.2},0).wait(1).to({rotation:-89.9,x:1054.1,y:293.2},0).wait(1).to({rotation:-104.9,x:1034.2},0).wait(1).to({rotation:-119.9,x:1014.2,y:293.3},0).wait(1).to({rotation:-135,x:994.2},0).wait(1).to({rotation:-149.9,x:974.1},0).wait(1).to({rotation:-164.9,x:954.2,y:293.4},0).wait(1).to({rotation:-179.9,x:934.2},0).to({_off:true},1).wait(20));

	// Layer 1
	this.instance_2 = new lib.Symbol1();
	this.instance_2.setTransform(481.9,-186.5,1,1,0,0,0,282,173.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({y:-142.8},0).wait(1).to({y:-99.2},0).wait(1).to({y:-55.6},0).wait(1).to({y:-11.9},0).wait(1).to({y:31.7},0).wait(1).to({y:75.3},0).wait(1).to({y:119},0).wait(1).to({y:162.6},0).wait(1).to({y:206.2},0).wait(1).to({y:249.9},0).wait(1).to({y:293.5},0).wait(1).to({y:273.5},0).wait(1).to({y:253.5},0).wait(1).to({y:233.5},0).wait(1).to({y:253.5},0).wait(1).to({y:273.5},0).wait(1).to({y:293.5},0).wait(1).to({y:278.5},0).wait(1).to({y:263.5},0).wait(1).to({y:278.5},0).wait(1).to({y:293.5},0).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(839.9,-45,1488.3,891.1);


// symbols:
(lib.img1_animation = function() {
	this.initialize(img.img1_animation);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,564,347);


(lib.img2_animation = function() {
	this.initialize(img.img2_animation);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,326,347);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.img2_animation();
	this.instance.setTransform(326,347,1,1,180);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,326,347);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.img2_animation();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,326,347);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.img1_animation();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,564,347);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;