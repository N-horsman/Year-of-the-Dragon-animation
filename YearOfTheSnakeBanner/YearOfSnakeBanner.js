(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"YearOfSnakeBanner_atlas_1", frames: [[1732,1498,118,239],[1732,1739,118,239],[378,0,486,867],[866,0,355,975],[1223,0,355,722],[0,1124,376,828],[378,869,486,576],[1580,0,355,681],[1243,724,355,427],[866,977,375,533],[756,1512,486,409],[1244,1153,355,409],[1600,683,355,425],[378,1447,376,533],[1244,1564,486,280],[1601,1110,238,386],[1244,1846,347,133],[0,0,376,1122],[756,1923,222,103],[1841,1110,188,247],[1593,1846,115,138]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_21 = function() {
	this.initialize(ss["YearOfSnakeBanner_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_20 = function() {
	this.initialize(ss["YearOfSnakeBanner_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_19 = function() {
	this.initialize(ss["YearOfSnakeBanner_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_18 = function() {
	this.initialize(ss["YearOfSnakeBanner_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["YearOfSnakeBanner_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["YearOfSnakeBanner_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["YearOfSnakeBanner_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["YearOfSnakeBanner_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["YearOfSnakeBanner_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["YearOfSnakeBanner_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["YearOfSnakeBanner_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["YearOfSnakeBanner_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["YearOfSnakeBanner_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["YearOfSnakeBanner_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["YearOfSnakeBanner_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["YearOfSnakeBanner_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["YearOfSnakeBanner_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["YearOfSnakeBanner_atlas_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["YearOfSnakeBanner_atlas_1"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["YearOfSnakeBanner_atlas_1"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["YearOfSnakeBanner_atlas_1"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.snakeStart = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_21();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.snakeStart, new cjs.Rectangle(0,0,59,119.5), null);


(lib.snakeOff = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_20();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.snakeOff, new cjs.Rectangle(0,0,59,119.5), null);


(lib.snake15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_19();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.snake15, new cjs.Rectangle(0,0,243,433.5), null);


(lib.snake14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_18();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.snake14, new cjs.Rectangle(0,0,177.5,487.5), null);


(lib.snake13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_17();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.snake13, new cjs.Rectangle(0,0,177.5,361), null);


(lib.snake12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_16();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.snake12, new cjs.Rectangle(0,0,188,414), null);


(lib.snake11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_15();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.snake11, new cjs.Rectangle(0,0,243,288), null);


(lib.snake10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_14();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.snake10, new cjs.Rectangle(0,0,177.5,340.5), null);


(lib.snake9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_13();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.snake9, new cjs.Rectangle(0,0,177.5,213.5), null);


(lib.snake8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_12();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.snake8, new cjs.Rectangle(0,0,187.5,266.5), null);


(lib.snake7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_11();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.snake7, new cjs.Rectangle(0,0,243,204.5), null);


(lib.snake6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_10();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.snake6, new cjs.Rectangle(0,0,177.5,204.5), null);


(lib.snake4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_9();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.snake4, new cjs.Rectangle(0,0,177.5,212.5), null);


(lib.snake3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.snake3, new cjs.Rectangle(0,0,188,266.5), null);


(lib.snake2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.snake2, new cjs.Rectangle(0,0,243,140), null);


(lib.snake1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.snake1, new cjs.Rectangle(0,0,119,193), null);


(lib.snake0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.snake0, new cjs.Rectangle(0,0,173.5,66.5), null);


(lib.snake = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.snake, new cjs.Rectangle(0,0,188,561), null);


(lib.orangeLeaf = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F48245").s().p("AiOCXIAAiXQAAg+AqgsQAqgsA6AAICPAAIAACWQAAA+gqAtQgqAsg7AAg");
	this.shape.setTransform(14.275,15.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.orangeLeaf, new cjs.Rectangle(0,0,28.6,30.3), null);


(lib.mintLeaf = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ACD2CF").s().p("AAAB2QgtAAghgjQgggiAAgxIAAh1IBuAAQAuAAAhAjQAgAiAAAwIAAB2g");
	this.shape.setTransform(11.125,11.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mintLeaf, new cjs.Rectangle(0,0,22.3,23.6), null);


(lib.LunarNewYear = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LunarNewYear, new cjs.Rectangle(0,0,111,51.5), null);


(lib.flower = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDD3A2").s().p("AhjECQgrgtABg+Qg7AAgqgsQgqgtAAg+QAAg9AqgtQAqgsA7AAQAAg+AqgtQApgsA6AAQA7AAAqAsQAqAtAAA+QA7AAAqAsQApAsAAA+QAAA+gpAtQgqAsg7AAQAAA+gqAtQgqAsg7AAQg6AAgpgsgAgpgrQgpArg6AAQA6AAApAsQApAsAAA9QABg9ApgsQApgsA6AAQg6AAgpgrQgpgsgBg9QAAA9gpAsg");
	this.shape.setTransform(28.5,30.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.flower, new cjs.Rectangle(0,0,57,60.4), null);


(lib.coin = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDD3A2").s().p("AiMCWQg7g+AAhYQAAhXA7g+QA6g+BSAAQBTAAA6A+QA7A+AABXQAABYg7A+Qg6A+hTAAQhSAAg6g+gAg5A9IBzAAIAAh5IhzAAg");
	this.shape.setTransform(20,21.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.coin, new cjs.Rectangle(0,0,40,42.4), null);


(lib._2025 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(0,0,0.3542,0.3542);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._2025, new cjs.Rectangle(0,0,66.6,87.5), null);


(lib.Tween4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.orangeLeaf();
	this.instance.setTransform(-3.8,57.35,1,1,0,0,0,14.2,15.1);

	this.instance_1 = new lib.mintLeaf();
	this.instance_1.setTransform(6.85,-60.65,1,1,0,0,0,11.1,11.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,-72.4,36,144.9);


(lib.Tween3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.orangeLeaf();
	this.instance.setTransform(18.8,87.5,1,1,0,0,0,14.2,15.1);

	this.instance_1 = new lib.mintLeaf();
	this.instance_1.setTransform(-22.05,-90.85,1,1,0,0,0,11.1,11.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.1,-102.6,66.30000000000001,205.3);


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.orangeLeaf();
	this.instance.setTransform(-2.3,107,1,1,0,0,0,14.2,15.1);

	this.instance_1 = new lib.mintLeaf();
	this.instance_1.setTransform(5.35,-110.35,1,1,0,0,0,11.1,11.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.5,-122.1,33,244.3);


(lib.coinGrow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.coin();
	this.instance.setTransform(20,21.2,1,1,0,0,0,20,21.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.coinGrow, new cjs.Rectangle(0,0,40,42.4), null);


// stage content:
(lib.YearOfSnake = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// kanji
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(197.4,37.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(419));

	// _025
	this.instance_1 = new lib._2025();
	this.instance_1.setTransform(50.45,527.3,0.0229,0.0229,0,0,0,32.8,43.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(163).to({_off:false},0).to({regX:33.3,scaleX:1,scaleY:1,y:527.35},3).to({regX:33.4,scaleX:1.4114,scaleY:1.4114,x:50.6,y:527.4},5).to({regX:33.3,scaleX:1,scaleY:1,x:50.45,y:527.35},9).wait(239));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_318 = new cjs.Graphics().p("AoqECIAAoCIRVAAIAAICg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(318).to({graphics:mask_graphics_318,x:227.6,y:136.95}).wait(101));

	// Lunar_New_Year
	this.instance_2 = new lib.LunarNewYear();
	this.instance_2.setTransform(227.65,187,1,1,0,0,0,55.6,25.8);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(360).to({_off:false},0).wait(29).to({y:137},1,cjs.Ease.quintInOut).wait(29));

	// coin2
	this.instance_3 = new lib.coinGrow();
	this.instance_3.setTransform(264.05,351.55,0.0284,0.0284,0,0,0,19.4,21.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(304).to({_off:false},0).to({regX:20,scaleX:1,scaleY:1},2).to({regX:20.1,scaleX:1.3002,scaleY:1.3002,x:264.2,y:351.6},4).to({regX:20,scaleX:1,scaleY:1,x:264.05,y:351.55},8).wait(101));

	// coin
	this.instance_4 = new lib.coinGrow();
	this.instance_4.setTransform(243.95,268.55,0.0189,0.0189,0,180,0,21.2,21.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(285).to({_off:false},0).to({regX:20,scaleX:1,scaleY:1,skewX:0,x:243.9,y:268.65},2).to({scaleX:1.3,scaleY:1.2128},4).to({scaleX:1,scaleY:1},8).wait(120));

	// leaves
	this.instance_5 = new lib.Tween2("synched",0);
	this.instance_5.setTransform(-24.95,369.6);
	this.instance_5._off = true;

	this.instance_6 = new lib.Tween3("synched",0);
	this.instance_6.setTransform(2.45,350.1);
	this.instance_6._off = true;

	this.instance_7 = new lib.Tween4("synched",0);
	this.instance_7.setTransform(25.55,379.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},336).to({state:[{t:this.instance_6}]},5).to({state:[{t:this.instance_7}]},8).wait(70));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(336).to({_off:false},0).to({_off:true,x:2.45,y:350.1},5).wait(78));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(336).to({_off:false},5).to({_off:true,x:25.55,y:379.25},8).wait(70));

	// flower
	this.instance_8 = new lib.flower();
	this.instance_8.setTransform(64.1,381.2,0.0216,0.0216,0,0,0,27.9,30.2);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(320).to({_off:false},0).to({regX:28.5,scaleX:1,scaleY:1,y:381.25},3).to({scaleX:1.4113,scaleY:1.4113,y:381.3},4).to({scaleX:1,scaleY:1,y:381.25},7).wait(85));

	// snake
	this.instance_9 = new lib.snakeOff();
	this.instance_9.setTransform(252.1,659.4,1,1,0,0,0,29.4,59.7);

	this.instance_10 = new lib.snakeStart();
	this.instance_10.setTransform(253.3,541,1,1,0,0,0,29.4,59.7);

	this.instance_11 = new lib.snake0();
	this.instance_11.setTransform(184.8,567.5,1,1,0,0,0,86.8,33.1);

	this.instance_12 = new lib.snake1();
	this.instance_12.setTransform(212.2,504.25,1,1,0,0,0,59.4,96.4);

	this.instance_13 = new lib.snake2();
	this.instance_13.setTransform(150.2,530.8,1,1,0,0,0,121.4,70);

	this.instance_14 = new lib.snake3();
	this.instance_14.setTransform(177.75,467.35,1,1,0,0,0,94,133.3);

	this.instance_15 = new lib.snake4();
	this.instance_15.setTransform(182.95,494.4,1,1,0,0,0,88.7,106.4);

	this.instance_16 = new lib.snake6();
	this.instance_16.setTransform(182.95,498.45,1,1,0,0,0,88.7,102.2);

	this.instance_17 = new lib.snake7();
	this.instance_17.setTransform(215.65,498.45,1,1,0,0,0,121.4,102.2);

	this.instance_18 = new lib.snake8();
	this.instance_18.setTransform(188.05,467.35,1,1,0,0,0,93.8,133.3);

	this.instance_19 = new lib.snake9();
	this.instance_19.setTransform(182.95,493.95,1,1,0,0,0,88.7,106.8);

	this.instance_20 = new lib.snake10();
	this.instance_20.setTransform(182.95,430.6,1,1,0,0,0,88.7,170.2);

	this.instance_21 = new lib.snake11();
	this.instance_21.setTransform(150.2,456.6,1,1,0,0,0,121.4,144.1);

	this.instance_22 = new lib.snake12();
	this.instance_22.setTransform(177.75,393.75,1,1,0,0,0,94,207);

	this.instance_23 = new lib.snake13();
	this.instance_23.setTransform(182.95,420.25,1,1,0,0,0,88.7,180.4);

	this.instance_24 = new lib.snake14();
	this.instance_24.setTransform(182.95,356.9,1,1,0,0,0,88.7,243.8);

	this.instance_25 = new lib.snake15();
	this.instance_25.setTransform(150.2,383.95,1,1,0,0,0,121.4,216.8);

	this.instance_26 = new lib.snake();
	this.instance_26.setTransform(177.7,320.3,1,1,0,0,0,93.9,280.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9}]}).to({state:[{t:this.instance_10}]},44).to({state:[{t:this.instance_11}]},15).to({state:[{t:this.instance_12}]},14).to({state:[{t:this.instance_13}]},16).to({state:[{t:this.instance_14}]},15).to({state:[{t:this.instance_15}]},14).to({state:[{t:this.instance_16}]},15).to({state:[{t:this.instance_16}]},15).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_17}]},13).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},16).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},14).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},13).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},13).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_22}]},15).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},13).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},15).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_25}]},15).to({state:[{t:this.instance_26}]},1).wait(134));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C52026").s().p("EgXfAu8MAAAhd3MAu/AAAMAAABd3g");
	this.shape.setTransform(149.625,299.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(419));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(108.6,299.6,228.70000000000002,419.6);
// library properties:
lib.properties = {
	id: '4B19B7DC8F932342B0654ED386F765FE',
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/YearOfSnakeBanner_atlas_1.png", id:"YearOfSnakeBanner_atlas_1"}
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
an.compositions['4B19B7DC8F932342B0654ED386F765FE'] = {
	getStage: function() { return exportRoot.stage; },
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
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;