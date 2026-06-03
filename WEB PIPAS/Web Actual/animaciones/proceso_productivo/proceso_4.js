(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


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



(lib.Bitmap10 = function() {
	this.initialize(img.Bitmap10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1276,896);


(lib.Bitmap11 = function() {
	this.initialize(img.Bitmap11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,540,317);


(lib.Bitmap13 = function() {
	this.initialize(img.Bitmap13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,235,227);


(lib.Bitmap14 = function() {
	this.initialize(img.Bitmap14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,235,227);


(lib.Bitmap15 = function() {
	this.initialize(img.Bitmap15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,243,208);


(lib.Bitmap6 = function() {
	this.initialize(img.Bitmap6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,133);


(lib.Mapadebits14 = function() {
	this.initialize(img.Mapadebits14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,107,130);


(lib.Mapadebits6 = function() {
	this.initialize(img.Mapadebits6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,937,369);


(lib.Vectorpngcopy = function() {
	this.initialize(img.Vectorpngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2321,889);// helper functions:

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


(lib.Tween10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Bitmap15();
	this.instance.setTransform(-78.85,-61.3,0.6247,0.6247,-2.7218);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.8,-68.5,157.7,137);


(lib.Tween9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Bitmap14();
	this.instance.setTransform(-70.3,-67.9,0.5983,0.5983);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.3,-67.9,140.6,135.8);


(lib.Tween8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Bitmap13();
	this.instance.setTransform(-70.3,-67.9,0.5983,0.5983);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.3,-67.9,140.6,135.8);


(lib.Tween7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Bitmap6();
	this.instance.setTransform(-18.3,-18.6,0.2797,0.2797);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.3,-18.6,36.7,37.2);


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

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("EgpDgNtIOOnREghPgJ9IOOnREggigJQIOOnRA/hooIOOnREgiVgKbIOOnREgjbgK+IOOnREgkcgLmIOOnREgm8gMiIOOnREgl2gMEIOOnREgoCgNFIOOnRAl0EqIOOnRAm1ECIOOnRAnnDaIOOnRAotC8IOOnRApzCZIOOnRAq0BxIOOnRAuaASIOOnRAtUA1IOOnRAsOBTIOOnRAvbgWIOOnRAwIhDIOOnRATCRPIOOnRAKhMyIOOnRANuObIOOnRAMoN9IOOnRALiNaIOOnRAPIO5IOOnRAQJPhIOOnRARPQEIOOnRASVQiIOOnRAJgMPIOOnRAA/HyIOOnRAgHHUIOOnRAhNGxIOOnRAiOGJIOOnRAkuFNIOOnRAjoFrIOOnRABsIfIOOnRAE5KIIOOnRADzJqIOOnRACtJHIOOnRAGTKmIOOnRAHULOIOOnRAIaLxIOOnRA38kzIOOnRA27kLIOOnRA0vjKIOOnRA11joIOOnRAzVisIOOnRAyUiEIOOnRAxOhhIOOnRA9VnnIOOnRA+boFIOOnRA77nJIOOnRA66mhIOOnRA50l+IOOnRA4ulgIOOnRAa2U/IOOnRAZwUhIOOnRAYqT+IOOnRAXpTWIOOnRAUDR3IOOnRAVJSaIOOnRAWPS4IOOnR");
	this.shape.setTransform(-217.25,-111);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-481,-246.2,527.6,270.5);


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

	// Layer 1
	this.instance = new lib.Bitmap6();
	this.instance.setTransform(-65.5,-66.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.098)").s().p("AnNC9Ql4i9gJACIG3jEQGji9AAACQM/GnAEAGQACACkaCSQkaCSACAGQADADjBAOQisANgHAEQgRgLlqi2g");
	this.shape.setTransform(-27.1368,31.7244);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111.8,-66.5,177.3,136.5);


(lib.Interpolación1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.098)").s().p("AGUBPIAAidIMfAAIiICdgAmTBPIAAidIMnAAIiTCdgAyyBPIAAidIMfAAIiJCdg");
	this.shape.setTransform(0,-0.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120.3,-8,240.6,15.8);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(0,255,0,0.227)","rgba(0,255,74,0)"],[0,0.58,1],0,1.2,0,0,1.2,29.4).s().p("AjTDRQhXhXAAh6QAAh5BXhXQBYhXB7AAQB8AABXBXQBYBXAAB5QAAB6hYBXQhXBXh8AAQh7AAhYhXg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.8,-29.5,59.7,59.1);


(lib.reflexcopia = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0.349)").ss(3,1,2).p("AAphkQgyANgSAmQgNAaAAA6QAAAMACAYQACAXAAAH");
	this.shape.setTransform(7.5,12.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Capa_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#2A1515","#7C3E3E","#6A0101","#1F0E0E"],[0,0.161,0.51,1],-12.2,0,12.3,0).s().p("Ah5CAIAAidIgBAAQACgvAighQAkgkAyAAQAyAAAkAkQAhAhADAtIABAAIAACfQg9ASg9AAQg9AAg9gSg");
	this.shape_1.setTransform(12.275,14.625);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.reflexcopia, new cjs.Rectangle(0,0,24.6,29.3), null);


(lib.reflex = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0.686)").ss(3,1,2).p("AAxhkIgPAAQgzANgSAmQgNAaAAA6QAAAMADAYQACAXAAAH");
	this.shape.setTransform(8.25,12.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Capa_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#0B9F01","#8AF783","#95FF8E","#008D5D"],[0,0.161,0.51,1],-12.2,0,12.3,0).s().p("Ah5CAIAAidIgBAAQACgvAighQAkgkAyAAQAyAAAkAkQAhAhADAtIABAAIAACfQg9ASg9AAQg9AAg9gSg");
	this.shape_1.setTransform(12.275,14.625);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.reflex, new cjs.Rectangle(0,0,24.6,29.3), null);


(lib.luces_empaque = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0B62AC").s().p("Ag7A8QgYAAgRgRQgQgRAAgYIAAgDQAAgYAQgRQARgRAYAAIB3AAQAYAAARARQAQARAAAYIAAADQAAAYgQARQgRARgYAAg");
	this.shape.setTransform(11.63,39.8965,0.6172,0.6172);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#163A65").s().p("Ag7A8QgYAAgRgRQgQgRAAgYIAAgEQAAgXAQgRQARgRAYAAIB3AAQAYAAARARQAQARAAAXIAAAEQAAAYgQARQgRARgYAAg");
	this.shape_1.setTransform(11.63,38.5387,0.6172,0.6172);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AgkAlQgPAAgKgKQgKgLAAgPIAAgBIAAgGQACgLAIgIQAKgLAPAAIBJAAQAPAAAKALQAIAIACALIAAAGIAAABQAAAPgKALQgKAKgPAAg");
	this.shape_2.setTransform(11.625,39.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#163A65").s().p("AA+ACQgKgJgPAAIhJAAQgPAAgKAJQgIAJgCALIAAgFIAAgEQAAgNAKgLQAKgKAPAAIBJAAQAPAAAKAKQAKALAAANIAAAEIAAAFQgCgLgIgJg");
	this.shape_3.setTransform(11.625,37.0375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{x:11.63,y:38.5387,scaleX:0.6172,scaleY:0.6172}},{t:this.shape,p:{x:11.63,y:39.8965,scaleX:0.6172,scaleY:0.6172}}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},5).to({state:[{t:this.shape_1,p:{x:11.6297,y:38.5377,scaleX:0.6172,scaleY:0.6172}},{t:this.shape,p:{x:11.6297,y:39.8955,scaleX:0.6172,scaleY:0.6172}}]},12).to({state:[{t:this.shape_3},{t:this.shape_2}]},2).to({state:[{t:this.shape_1,p:{x:11.6291,y:38.5358,scaleX:0.6171,scaleY:0.6171}},{t:this.shape,p:{x:11.6291,y:39.8935,scaleX:0.6171,scaleY:0.6171}}]},7).wait(4));

	// Capa_4
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2FAA42").s().p("Ag7A8QgYAAgRgRQgQgRAAgXIAAgEQAAgYAQgRQARgRAYAAIB3AAQAYAAARARQAQARAAAYIAAAEQAAAXgQARQgRARgYAAg");
	this.shape_4.setTransform(11.63,28.6639,0.6172,0.6172);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#047142").s().p("Ag7A8QgYAAgRgRQgQgRAAgYIAAgEQAAgXAQgRQARgRAYAAIB3AAQAYAAARARQAQARAAAXIAAAEQAAAYgQARQgRARgYAAg");
	this.shape_5.setTransform(11.63,27.4913,0.6172,0.6172);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AgkAlQgPAAgKgKQgKgLAAgOIAAgCIAAgFQABgMAJgIQAKgLAPAAIBJAAQAPAAAKALQAJAIABAMIAAAFIAAACQAAAOgKALQgKAKgPAAg");
	this.shape_6.setTransform(11.625,28.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#047142").s().p("AA+ABQgKgJgPAAIhJAAQgPAAgKAJQgJAIgBAMIAAgEIAAgEQAAgNAKgKQAKgLAPAAIBJAAQAPAAAKALQAKAKAAANIAAAEIAAAEQgBgMgJgIg");
	this.shape_7.setTransform(11.625,25.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5,p:{x:11.63,y:27.4913,scaleX:0.6172,scaleY:0.6172}},{t:this.shape_4,p:{x:11.63,y:28.6639,scaleX:0.6172,scaleY:0.6172}}]}).to({state:[{t:this.shape_7},{t:this.shape_6}]},5).to({state:[{t:this.shape_5,p:{x:11.6297,y:27.4906,scaleX:0.6172,scaleY:0.6172}},{t:this.shape_4,p:{x:11.6297,y:28.6632,scaleX:0.6172,scaleY:0.6172}}]},5).to({state:[{t:this.shape_7},{t:this.shape_6}]},9).to({state:[{t:this.shape_5,p:{x:11.6291,y:27.4893,scaleX:0.6171,scaleY:0.6171}},{t:this.shape_4,p:{x:11.6291,y:28.6618,scaleX:0.6171,scaleY:0.6171}}]},7).wait(4));

	// Capa_5
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FEE738").s().p("Ag7A8QgYAAgRgRQgQgRAAgYIAAgEQAAgXAQgRQARgRAYAAIB3AAQAYAAARARQAQARAAAXIAAAEQAAAYgQARQgRARgYAAg");
	this.shape_8.setTransform(11.63,18.9435,0.6172,0.6172);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#716B28").s().p("Ag7A8QgYAAgRgRQgQgRAAgXIAAgEQAAgYAQgRQARgRAYAAIB3AAQAYAAARARQAQARAAAYIAAAEQAAAXgQARQgRARgYAAg");
	this.shape_9.setTransform(11.63,17.74,0.6172,0.6172);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("AgkAlQgPAAgKgKQgKgLAAgPIAAgCIAAgEQABgMAJgJQAKgKAPAAIBJAAQAPAAAKAKQAJAJABAMIAAAEIAAACQAAAPgKALQgKAKgPAAg");
	this.shape_10.setTransform(11.625,18.95);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#716B28").s().p("AA+ABQgKgJgPAAIhJAAQgPAAgKAJQgJAJgBALIAAgEIAAgDQAAgOAKgKQAKgKAPAAIBJAAQAPAAAKAKQAKAKAAAOIAAADIAAAEQgBgLgJgJg");
	this.shape_11.setTransform(11.625,16.1875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9,p:{scaleX:0.6172,scaleY:0.6172,x:11.63,y:17.74}},{t:this.shape_8,p:{scaleX:0.6172,scaleY:0.6172,x:11.63,y:18.9435}}]}).to({state:[{t:this.shape_11},{t:this.shape_10}]},5).to({state:[{t:this.shape_9,p:{scaleX:0.6171,scaleY:0.6171,x:11.6291,y:17.7387}},{t:this.shape_8,p:{scaleX:0.6171,scaleY:0.6171,x:11.6291,y:18.9421}}]},10).to({state:[{t:this.shape_11},{t:this.shape_10}]},11).to({state:[{t:this.shape_11},{t:this.shape_10}]},3).wait(1));

	// Capa_6
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#666666").s().p("AgkAlQgPAAgKgKQgKgLAAgPIAAgBIAAgFQABgMAJgJQAKgKAPAAIBJAAQAPAAAKAKQAJAJABAMIAAAFIAAABQAAAPgKALQgKAKgPAAg");
	this.shape_12.setTransform(11.625,8.95);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#9B1616").s().p("AA+ABQgKgKgPAAIhJAAQgPAAgKAKQgJAJgBAMIAAgFIAAgDQAAgOAKgKQAKgLAPAAIBJAAQAPAAAKALQAKAKAAAOIAAADIAAAFQgBgMgJgJg");
	this.shape_13.setTransform(11.625,6.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E51F22").s().p("Ag7A8QgYAAgRgRQgQgRAAgYIAAgEQAAgXAQgRQARgRAYAAIB3AAQAYAAARARQAQARAAAXIAAAEQAAAYgQARQgRARgYAAg");
	this.shape_14.setTransform(11.6297,8.9451,0.6172,0.6172);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#9B1616").s().p("Ag7A8QgYAAgRgRQgQgRAAgYIAAgDQAAgYAQgRQARgRAYAAIB3AAQAYAAARARQAQARAAAYIAAADQAAAYgQARQgRARgYAAg");
	this.shape_15.setTransform(11.6297,7.7416,0.6172,0.6172);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12}]}).to({state:[{t:this.shape_15,p:{scaleX:0.6172,scaleY:0.6172,x:11.6297,y:7.7416}},{t:this.shape_14,p:{scaleX:0.6172,scaleY:0.6172,x:11.6297,y:8.9451}}]},5).to({state:[{t:this.shape_13},{t:this.shape_12}]},14).to({state:[{t:this.shape_15,p:{scaleX:0.6171,scaleY:0.6171,x:11.6291,y:7.7412}},{t:this.shape_14,p:{scaleX:0.6171,scaleY:0.6171,x:11.6291,y:8.9446}}]},1).wait(10));

	// Capa_2
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#373D40").s().p("Ah8D+IAAn8ID4AAIAAH8g");
	this.shape_16.setTransform(12.4,25.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(30));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24.9,50.9);


(lib.Interpolación6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Mapadebits14();
	this.instance.setTransform(51,-36,0.7314,0.7314);

	this.instance_1 = new lib.Mapadebits14();
	this.instance_1.setTransform(132,-36,0.7314,0.7314);

	this.instance_2 = new lib.Mapadebits14();
	this.instance_2.setTransform(213,-36,0.7314,0.7314);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(51,-36,240.3,95.1);


(lib.Interpolación5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("EA4qAEhIkolYIDqjrQgEAEBbgCIBegCIjqDrIEoFYQgEACguAAIiDgCgEAqwAEhIkolYIDqjrQgFAEBdgCIBdgCIjqDrIEoFYQgEACgtAAIiEgCgAc4EhIkolYIDqjrQgEAEBcgCIBdgCIjqDrIEoFYQgDACgtAAIiFgCgAPCEhIkolYIDqjrQgEAEBbgCIBegCIjqDrIEoFYQgEACguAAIiDgCgABLEhIkolYIDpjrQgDAEBcgCIBcgCIjpDrIEnFYQgDACgtAAIiEgCgAtREhIkolYIDqjrQgEAEBcgCIBegCIjqDrIEnFYQgDACguAAIiEgCgA7HEhIkolYIDqjrQgEAEBcgCIBcgCIjqDrIEpFYQgEACgtAAIiEgCgEgo/AEhIkolYIDqjrQgEAEBcgCIBdgCIjqDrIEoFYQgDACguAAIiEgCgEg21AEhIkolYIDqjrQgFAEBdgCIBdgCIjqDrIEoFYQgEACgtAAIiEgCg");
	this.shape.setTransform(31.25,-1.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-349.4,-30.3,761.3,58.3);


(lib.brillitocopy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhYBOQglggAAguQAAgsAlggQAlghAzAAQA0AAAlAhQAlAgAAAsQAAAuglAgQglAgg0AAQgzAAglgggAg8gZQgXAUAAAbQAAAcAXAUQAXAUAgAAQAgAAAXgUQAXgUAAgcQAAgbgXgUQgXgUggAAQggAAgXAUg");
	mask.setTransform(12.575,10.975);

	// Capa_2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.749)","rgba(255,255,255,0)"],[0,0.51,1],-4.8,0,4.8,0).s().p("AhXBNQgkgfAAguQAAgsAkgfQAlghAyAAQA0AAAkAhQAkAfAAAsQAAAugkAfQgkAgg0AAQgyAAglggg");
	this.shape.setTransform(12.675,10.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.749)","rgba(255,255,255,0)"],[0,0.51,1],-3.2,-1.6,3.2,1.6).s().p("AhXBNQgkgfAAguQAAgsAkgfQAlghAyAAQA0AAAkAhQAkAfAAAsQAAAugkAfQgkAgg0AAQgyAAglggg");
	this.shape_1.setTransform(12.675,10.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.749)","rgba(255,255,255,0)"],[0,0.51,1],-1.6,-3.2,1.6,3.2).s().p("AhXBNQgkgfAAguQAAgsAkgfQAlghAyAAQA0AAAkAhQAkAfAAAsQAAAugkAfQgkAgg0AAQgyAAglggg");
	this.shape_2.setTransform(12.675,10.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.749)","rgba(255,255,255,0)"],[0,0.51,1],0,-4.8,0,4.8).s().p("AhXBNQgkgfAAguQAAgsAkgfQAlghAyAAQA0AAAkAhQAkAfAAAsQAAAugkAfQgkAgg0AAQgyAAglggg");
	this.shape_3.setTransform(12.675,10.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.749)","rgba(255,255,255,0)"],[0,0.51,1],1.6,-3.2,-1.6,3.2).s().p("AhXBNQgkgfAAguQAAgsAkgfQAlghAyAAQA0AAAkAhQAkAfAAAsQAAAugkAfQgkAgg0AAQgyAAglggg");
	this.shape_4.setTransform(12.675,10.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.749)","rgba(255,255,255,0)"],[0,0.51,1],3.2,-1.5,-3.2,1.7).s().p("AhXBNQgkgfAAguQAAgsAkgfQAlghAyAAQA0AAAkAhQAkAfAAAsQAAAugkAfQgkAgg0AAQgyAAglggg");
	this.shape_5.setTransform(12.675,10.975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.749)","rgba(255,255,255,0)"],[0,0.51,1],4.8,0.1,-4.8,0.1).s().p("AhXBNQgkgfAAguQAAgsAkgfQAlghAyAAQA0AAAkAhQAkAfAAAsQAAAugkAfQgkAgg0AAQgyAAglggg");
	this.shape_6.setTransform(12.675,10.975);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).wait(1));

	// Capa_1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3A3C42").s().p("AgtAaQgTgQgBgWQALgOARgIQARgIAUAAQATAAATAJQARAJALAOQgCAWgTAPQgTAQgaAAQgZAAgUgRg");
	this.shape_7.setTransform(12.35,10.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#61646E").s().p("Ag2AwQgYgUAAgcQAAgbAYgUQAWgUAgAAQAhAAAWAUQAYAUAAAbQAAAcgYAUQgWAUghAAQggAAgWgUg");
	this.shape_8.setTransform(12,13.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#61646E").ss(0.3).p("AB+AAQAAAuglAgQglAgg0AAQgzAAglggQglggAAguQAAgsAlggQAlghAzAAQA0AAAlAhQAlAgAAAsg");
	this.shape_9.setTransform(12.575,10.975);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#ACB1B4").s().p("AhYBOQglggAAguQAAgsAlggQAlghAzAAQA0AAAlAhQAlAgAAAsQAAAuglAgQglAgg0AAQgzAAglggg");
	this.shape_10.setTransform(12.575,10.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).wait(7));

	// Layer 2
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ah5gZICOi3QABADBOCJQACAAAYEPIj7AGQAGjrgCABgAAVjQIAAAAIAAAAg");
	this.shape_11.setTransform(12.55,-10.5751);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(7));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-31.4,27.2,54.4);


(lib.brillito = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhYBOQglggAAguQAAgsAlggQAlghAzAAQA0AAAlAhQAlAgAAAsQAAAuglAgQglAgg0AAQgzAAglgggAg8gZQgXAUAAAbQAAAcAXAUQAXAUAgAAQAgAAAXgUQAXgUAAgcQAAgbgXgUQgXgUggAAQggAAgXAUg");
	mask.setTransform(12.575,10.975);

	// Capa_2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.749)","rgba(255,255,255,0)"],[0,0.51,1],-4.8,0,4.8,0).s().p("AhXBNQgkgfAAguQAAgsAkgfQAlghAyAAQA0AAAkAhQAkAfAAAsQAAAugkAfQgkAgg0AAQgyAAglggg");
	this.shape.setTransform(12.675,10.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.749)","rgba(255,255,255,0)"],[0,0.51,1],-3.2,-1.6,3.2,1.6).s().p("AhXBNQgkgfAAguQAAgsAkgfQAlghAyAAQA0AAAkAhQAkAfAAAsQAAAugkAfQgkAgg0AAQgyAAglggg");
	this.shape_1.setTransform(12.675,10.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.749)","rgba(255,255,255,0)"],[0,0.51,1],-1.6,-3.2,1.6,3.2).s().p("AhXBNQgkgfAAguQAAgsAkgfQAlghAyAAQA0AAAkAhQAkAfAAAsQAAAugkAfQgkAgg0AAQgyAAglggg");
	this.shape_2.setTransform(12.675,10.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.749)","rgba(255,255,255,0)"],[0,0.51,1],0,-4.8,0,4.8).s().p("AhXBNQgkgfAAguQAAgsAkgfQAlghAyAAQA0AAAkAhQAkAfAAAsQAAAugkAfQgkAgg0AAQgyAAglggg");
	this.shape_3.setTransform(12.675,10.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.749)","rgba(255,255,255,0)"],[0,0.51,1],1.6,-3.2,-1.6,3.2).s().p("AhXBNQgkgfAAguQAAgsAkgfQAlghAyAAQA0AAAkAhQAkAfAAAsQAAAugkAfQgkAgg0AAQgyAAglggg");
	this.shape_4.setTransform(12.675,10.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.749)","rgba(255,255,255,0)"],[0,0.51,1],3.2,-1.5,-3.2,1.7).s().p("AhXBNQgkgfAAguQAAgsAkgfQAlghAyAAQA0AAAkAhQAkAfAAAsQAAAugkAfQgkAgg0AAQgyAAglggg");
	this.shape_5.setTransform(12.675,10.975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.749)","rgba(255,255,255,0)"],[0,0.51,1],4.8,0.1,-4.8,0.1).s().p("AhXBNQgkgfAAguQAAgsAkgfQAlghAyAAQA0AAAkAhQAkAfAAAsQAAAugkAfQgkAgg0AAQgyAAglggg");
	this.shape_6.setTransform(12.675,10.975);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).wait(1));

	// Capa_1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3A3C42").s().p("AgtAaQgTgQgBgWQALgOARgIQARgIAUAAQATAAATAJQARAJALAOQgCAWgTAPQgTAQgaAAQgZAAgUgRg");
	this.shape_7.setTransform(12.35,10.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#61646E").s().p("Ag2AwQgYgUAAgcQAAgbAYgUQAWgUAgAAQAhAAAWAUQAYAUAAAbQAAAcgYAUQgWAUghAAQggAAgWgUg");
	this.shape_8.setTransform(12,13.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#61646E").ss(0.3).p("AB+AAQAAAuglAgQglAgg0AAQgzAAglggQglggAAguQAAgsAlggQAlghAzAAQA0AAAlAhQAlAgAAAsg");
	this.shape_9.setTransform(12.575,10.975);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#ACB1B4").s().p("AhYBOQglggAAguQAAgsAlggQAlghAzAAQA0AAAlAhQAlAgAAAsQAAAuglAgQglAgg0AAQgzAAglggg");
	this.shape_10.setTransform(12.575,10.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).wait(7));

	// Layer 2
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AjfgtQARgRAdgRQAbgQAUgIQAYgIARgBIE5AJQgCAAiGBqIiHBtQgFgLiriSg");
	this.shape_11.setTransform(25.4525,8.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(7));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-2.9,48.9,25.9);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#61646E").ss(0.3).p("EgwvAFqIDCqOQAOgvAogeQAngdAyAAMBXQAAAQAyAAAoAfQApAfAMAxICkKDQgGgTgSgSQgtgvhdAAMhb4AADQhoAAg0AvQgWAUgIAUQgBADgBAEEAwlAFkIADAK");
	this.shape.setTransform(312.3077,40.089);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgtogERQAPgwAngdQAngeAyAAMBXQAAAQAzAAAoAfQAoAgANAxICkKCQgHgSgSgSQgtgvhdAAMhb4AACQhoAAg0AvQgWAUgHAVg");
	mask.setTransform(311.8,38.225);

	// Capa_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7E8183").s().p("EgtogERQAPgwAngdQAngeAyAAMBXQAAAQAzAAAoAfQAoAgANAxICkKCQgHgSgSgSQgtgvhdAAMhb4AACQhoAAg0AvQgWAUgHAVg");
	this.shape_1.setTransform(311.8,38.225);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(-0.8,-0.8,625.3,78.8), null);


(lib.brillito_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_3 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AhYBOQglggAAguQAAgsAlggQAlghAzAAQA0AAAlAhQAlAgAAAsQAAAuglAgQglAgg0AAQgzAAglgggAg8gZQgXAUAAAbQAAAcAXAUQAXAUAgAAQAgAAAXgUQAXgUAAgcQAAgbgXgUQgXgUggAAQggAAgXAUg");
	mask_1.setTransform(12.575,10.975);

	// Capa_2
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.749)","rgba(255,255,255,0)"],[0,0.51,1],-4.8,0,4.8,0).s().p("AhXBNQgkgfAAguQAAgsAkgfQAlghAyAAQA0AAAkAhQAkAfAAAsQAAAugkAfQgkAgg0AAQgyAAglggg");
	this.shape_12.setTransform(12.675,10.975);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.749)","rgba(255,255,255,0)"],[0,0.51,1],-3.2,-1.6,3.2,1.6).s().p("AhXBNQgkgfAAguQAAgsAkgfQAlghAyAAQA0AAAkAhQAkAfAAAsQAAAugkAfQgkAgg0AAQgyAAglggg");
	this.shape_13.setTransform(12.675,10.975);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.749)","rgba(255,255,255,0)"],[0,0.51,1],-1.6,-3.2,1.6,3.2).s().p("AhXBNQgkgfAAguQAAgsAkgfQAlghAyAAQA0AAAkAhQAkAfAAAsQAAAugkAfQgkAgg0AAQgyAAglggg");
	this.shape_14.setTransform(12.675,10.975);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.749)","rgba(255,255,255,0)"],[0,0.51,1],0,-4.8,0,4.8).s().p("AhXBNQgkgfAAguQAAgsAkgfQAlghAyAAQA0AAAkAhQAkAfAAAsQAAAugkAfQgkAgg0AAQgyAAglggg");
	this.shape_15.setTransform(12.675,10.975);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.749)","rgba(255,255,255,0)"],[0,0.51,1],1.6,-3.2,-1.6,3.2).s().p("AhXBNQgkgfAAguQAAgsAkgfQAlghAyAAQA0AAAkAhQAkAfAAAsQAAAugkAfQgkAgg0AAQgyAAglggg");
	this.shape_16.setTransform(12.675,10.975);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.749)","rgba(255,255,255,0)"],[0,0.51,1],3.2,-1.5,-3.2,1.7).s().p("AhXBNQgkgfAAguQAAgsAkgfQAlghAyAAQA0AAAkAhQAkAfAAAsQAAAugkAfQgkAgg0AAQgyAAglggg");
	this.shape_17.setTransform(12.675,10.975);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.749)","rgba(255,255,255,0)"],[0,0.51,1],4.8,0.1,-4.8,0.1).s().p("AhXBNQgkgfAAguQAAgsAkgfQAlghAyAAQA0AAAkAhQAkAfAAAsQAAAugkAfQgkAgg0AAQgyAAglggg");
	this.shape_18.setTransform(12.675,10.975);

	var maskedShapeInstanceList = [this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12}]}).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).wait(1));

	// Capa_1
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#3A3C42").s().p("AgtAaQgTgQgBgWQALgOARgIQARgIAUAAQATAAATAJQARAJALAOQgCAWgTAPQgTAQgaAAQgZAAgUgRg");
	this.shape_19.setTransform(12.35,10.675);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#61646E").s().p("Ag2AwQgYgUAAgcQAAgbAYgUQAWgUAgAAQAhAAAWAUQAYAUAAAbQAAAcgYAUQgWAUghAAQggAAgWgUg");
	this.shape_20.setTransform(12,13.175);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#61646E").ss(0.3).p("AB+AAQAAAuglAgQglAgg0AAQgzAAglggQglggAAguQAAgsAlggQAlghAzAAQA0AAAlAhQAlAgAAAsg");
	this.shape_21.setTransform(12.575,10.975);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#ACB1B4").s().p("AhYBOQglggAAguQAAgsAlggQAlghAzAAQA0AAAlAhQAlAgAAAsQAAAuglAgQglAgg0AAQgzAAglggg");
	this.shape_22.setTransform(12.575,10.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]}).wait(7));

	// Layer 2
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AjfgtQARgRAdgRQAbgQAUgIQAYgIARgBIE5AJQgCAAiGBqIiHBtQgFgLiriSg");
	this.shape_23.setTransform(25.4525,8.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(7));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-2.9,48.9,25.9);


(lib.back = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EAyEBnsQkLh6ntj3IAAAAQmujWjcheIAAAAQlSiTkthQIAAAAQldhdmBgeIAAAAQqog0wABpIAAAAQk/Ahk8AtIAAAAIj8AmQh1AYjNAcIAAAAQmbA3m/ARIAAAAQ2YA3zslcIAAAAMgA0hBFMC+jAAAMAAABTgQhvAXi2AbIAAAAQltA1ltARIAAAAQimAIieAAIAAAAQutAAphkYgEhfOAWkMgAGiCnMC+pAAAMAAACCng");
	mask.setTransform(607.55,296.3652);

	// Capa_1
	this.instance = new lib.Bitmap10();

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.back, new cjs.Rectangle(0,0,1217.6,896), null);


(lib.translada = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EguIgEUQAPgxAogdQAngeAyAAMBYOAAAQAzAAAoAfQApAgANAxICmKLQgHgUgSgRQgugwhdAAMhc5AADQhpAAg1AvQgXAUgHAVg");
	mask.setTransform(496.125,37.1);

	// Capa_1
	this.instance = new lib.Interpolación5("synched",0);
	this.instance.setTransform(795.75,33.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:440.1},26).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(181.3,2.9,629.7,58.300000000000004);


(lib.sirena_roja = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("Ah4AWQgOAAgKgIQgLgHAAgKIAAAAQAAgLALgHQAKgIAOAAQB0AQB8gQQAPAAALAIQAKAHAAALIAAAAQAAAKgKAHQgLAIgPAAQg8AIg8AAQg7AAg9gIg");
	this.shape.setTransform(12.35,28.4625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Capa_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0.686)").ss(3,1,2).p("AgQBwIAAjOQAAgHAFgFQAFgFAGAAIAAAAQAHAAAFAFQAFAFAAAHIAADO");
	this.shape_1.setTransform(11.825,38.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AAAB4QgGAAgFgFQgFgFAAgGIAAjOQAAgHAFgGQAFgEAGAAIAAAAQAHAAAFAEQAFAGAAAHIAADOQAAAGgFAFQgFAFgHAAg");
	this.shape_2.setTransform(11.825,39.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Capa_1
	this.instance = new lib.reflexcopia();
	this.instance.setTransform(12.2,14.6,1,1,0,0,0,12.2,14.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.2,0,31.2,51.7);


(lib.reflejo_verde = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("Ah4AWQgOAAgKgIQgLgHAAgKIAAAAQAAgLALgHQAKgIAOAAQB0AQB8gQQAPAAALAIQAKAHAAALIAAAAQAAAKgKAHQgLAIgPAAQg8AIg8AAQg7AAg9gIg");
	this.shape.setTransform(12.35,28.4625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(32));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0.686)").ss(3,1,2).p("AgQBwIAAjOQAAgHAFgFQAFgFAGAAIAAAAQAHAAAFAFQAFAFAAAHIAADO");
	this.shape_1.setTransform(11.825,38.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AAAB4QgGAAgFgFQgFgFAAgGIAAjOQAAgHAFgGQAFgEAGAAIAAAAQAHAAAFAEQAFAGAAAHIAADOQAAAGgFAFQgFAFgHAAg");
	this.shape_2.setTransform(11.825,39.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(32));

	// Layer 4
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(11.85,14.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},14).to({startPosition:0},3).to({alpha:0},14).wait(1));

	// Layer 3
	this.instance_1 = new lib.reflex();
	this.instance_1.setTransform(12.2,14.6,1,1,0,0,0,12.2,14.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(32));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,-14.9,59.8,66.60000000000001);


(lib.empaque = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Mapadebits6();
	this.instance.setTransform(0,-4,0.7481,0.7481);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgmyAB5IgTgDQgXgFgUgKQg9ggAAhEQAAhAArghQAhgaAvAAMBOYAAAQAKgBANAFQAZAJAOAYQATAhgRBSQgRBYglABg");
	mask.setTransform(30.0332,257.2725);

	// Capa_3
	this.instance_1 = new lib.brillitocopy();
	this.instance_1.setTransform(62.7,254.1,0.6819,0.684,0,0,180,12.7,11.2);

	this.instance_2 = new lib.brillitocopy();
	this.instance_2.setTransform(17.4,254.1,0.6819,0.684,0,0,180,12.7,11.2);

	this.instance_3 = new lib.brillitocopy();
	this.instance_3.setTransform(-171.75,254.1,0.6819,0.684,0,0,180,12.7,11.2);

	this.instance_4 = new lib.brillitocopy();
	this.instance_4.setTransform(-123.6,254.1,0.6819,0.684,0,0,180,12.7,11.2);

	this.instance_5 = new lib.brillitocopy();
	this.instance_5.setTransform(-75.4,254.1,0.6819,0.684,0,0,180,12.7,11.2);

	this.instance_6 = new lib.brillito();
	this.instance_6.setTransform(104.5,257.9,0.5828,0.5846,0,0,180,12.7,11.1);

	this.instance_7 = new lib.brillito();
	this.instance_7.setTransform(153.4,257.9,1.0585,1.0618,0,0,180,12.7,11.1);

	this.instance_8 = new lib.brillitocopy();
	this.instance_8.setTransform(-30.7,257.75,0.9955,0.9986,0,0,180,12.8,11.2);

	this.instance_9 = new lib.brillitocopy();
	this.instance_9.setTransform(-216.3,257.25,0.9594,0.9623,0,0,180,12.7,11.2);

	this.instance_10 = new lib.brillito();
	this.instance_10.setTransform(765.7,257.9,0.5828,0.5846,0,0,180,12.7,11.1);

	this.instance_11 = new lib.brillito();
	this.instance_11.setTransform(806.85,257.9,0.5828,0.5846,0,0,180,12.7,11.1);

	this.instance_12 = new lib.brillito();
	this.instance_12.setTransform(848.05,257.9,0.5828,0.5846,0,0,180,12.7,11.1);

	this.instance_13 = new lib.brillito();
	this.instance_13.setTransform(949.65,257.9,0.5828,0.5846,0,0,180,12.7,11.1);

	this.instance_14 = new lib.brillito();
	this.instance_14.setTransform(990.85,257.9,0.5828,0.5846,0,0,180,12.7,11.1);

	this.instance_15 = new lib.brillito();
	this.instance_15.setTransform(1032,257.9,0.5828,0.5846,0,0,180,12.7,11.1);

	this.instance_16 = new lib.brillito();
	this.instance_16.setTransform(1080.9,257.9,1.0585,1.0618,0,0,180,12.7,11.1);

	this.instance_17 = new lib.brillito();
	this.instance_17.setTransform(897.7,257.9,1.0585,1.0618,0,0,180,12.7,11.1);

	this.instance_18 = new lib.brillito();
	this.instance_18.setTransform(718.75,257.9,1.0585,1.0618,0,0,180,12.7,11.1);

	var maskedShapeInstanceList = [this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13,this.instance_14,this.instance_15,this.instance_16,this.instance_17,this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("A76jAMA4DAAAIgBF5ImZgBIhZhBQhZhAgCAAUgqjgACAAAAACIgCgCIkeCLIAAABQgEgBASmAg");
	this.shape.setTransform(-52.7864,251.5005);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Modo_de_aislamiento
	this.instance_19 = new lib.translada();
	this.instance_19.setTransform(680.5,210.3,1,1,0,0,0,393.7,33.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1));

	// Capa_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#383A40").s().p("EgmyAB5IgTgDQgXgFgUgKQg9ggAAhEQAAhAArghQAhgaAvAAMBOYAAAQAKgBANAFQAZAJAOAYQATAhgRBSQgRBYglABg");
	this.shape_1.setTransform(30.1332,257.3225);

	this.instance_20 = new lib.ClipGroup();
	this.instance_20.setTransform(79.75,213.8,1,1,0,0,0,311.8,38.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#92939E").s().p("EgpdAHbQg7gGgigeQgngjgGg8IABg1IDEqUQAMgoIwglQHAgdCfAAMA8xAAAQAzAAAoAfQAoAfANAxICnKMIAHAtQACA0gfAiQgfAkg8ANIg1AHMhRkAAAQgLABgNAAIgcgBg");
	this.shape_2.setTransform(46.6785,223.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#383A40").s().p("EgtgAB5QgrgBgUhYQgThSAWghQAPgYAegJQAPgFALABMBZxAAAQA2AAAmAaQAwAhAABAQABBEhHAgQgWAKgaAFIgWADg");
	this.shape_3.setTransform(797.3545,257.3225);

	this.instance_21 = new lib.ClipGroup();
	this.instance_21.setTransform(785.25,214.7,1,1,0,0,0,311.8,38.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#92939E").s().p("EgpdAHbQg7gGgigeQgngjgGg8IABg1IDEqUQAMgoIwglQHAgdCfAAMA8xAAAQAzAAAoAfQAoAfANAxICnKMIAHAtQACA0gfAiQgfAkg8ANIg1AHMhRkAAAQgLABgNAAIgcgBg");
	this.shape_4.setTransform(818.3285,223.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.instance_21},{t:this.shape_3},{t:this.shape_2},{t:this.instance_20},{t:this.shape_1}]}).wait(1));

	// Capa_2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.098)").s().p("AndOfIjNkrMgnbAAAQiwAAhAh6QgVgmgGguIgCgmIBwqiIAAjzMA2cAE/MA0agLIIAAc9g");
	this.shape_5.setTransform(132.95,245.625);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.empaque, new cjs.Rectangle(-232.5,-4,1727,342.4), null);


(lib.cajas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EglzAb8MAAAg4bMA1mAB2IPwaXQBfBkAxAcQAxAcBaAYIAWH6IjXLCIE3HCg");
	mask.setTransform(-258.8,57.85);

	// Capa_2
	this.instance = new lib.Interpolación1("synched",0);
	this.instance.setTransform(98.8,203.25);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-198.35},98,cjs.Ease.get(1)).wait(31));

	// Capa_1
	this.instance_1 = new lib.Interpolación6("synched",0);
	this.instance_1.setTransform(-72.45,50.65);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-371.5},98,cjs.Ease.get(1)).to({startPosition:0},11).to({x:-373.5,alpha:0},7).wait(13));

	// Layer 5 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("A2+kUQAPgxAogdQAngeAyAAMAqzAAAQA3BbDHBPIAAH+MgxJAABQhpgBg1AwQgXAUgHAVg");
	mask_1.setTransform(-197.3,96.15);

	// Layer 6
	this.instance_2 = new lib.Interpolación5("synched",0);
	this.instance_2.setTransform(25.55,91.2);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-272.25},98,cjs.Ease.get(1)).to({startPosition:0},18).to({x:-330.25},12,cjs.Ease.get(1)).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-364,14.7,347.2,196.3);


(lib.camioncito = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EAW8AzUQqNjgoyAAQlzAAkoAIQjvAKgvAAIAAAAQ2HCjvgBkQqCBAo1ghQkagQiageMgiTgAoUAqwgATgLTgE9UgMtgFlAqRgFBQqRAG4EACIDVhFIABgBINSkSUBD5ADGhf5g11QAFADOrpTQOrpTnSp3QnRp3N+GtQN+GtH2EDQH3EDAPgPIHQDYIHQDYQAFADgNG1QgNG1AFADQAFADEriJQEsiJEUjxIMtHtQiTQ/TmEqQTnEsAOCYUAAPACYAgbgVaUAgbgVbAAFAADQAFADglRFQglREAFADUAAFAADgmLAYuUgmLAYuAAFAADQjThulHhwgEhO6AiiIAbAAIgBABIgagBgEhOfAiiIAAAAg");
	mask.setTransform(285.2298,221.8438);

	// Layer 3
	this.instance = new lib.Tween10("synched",0);
	this.instance.setTransform(548.25,438.1);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(123).to({_off:false},0).to({x:588.25,y:410.9},7,cjs.Ease.get(0.1)).to({scaleX:0.9189,scaleY:0.9189,x:1065.05,y:123.5},78,cjs.Ease.get(0.13)).to({startPosition:0},2,cjs.Ease.get(-1)).wait(95));

	// Layer 2
	this.instance_1 = new lib.Tween9("synched",0);
	this.instance_1.setTransform(-47.3,146.3);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(52).to({_off:false},0).to({x:339.9,y:378.3},60).to({regX:0.1,regY:0.1,scaleX:0.9957,scaleY:1.0044,skewX:-5.3844,skewY:-4.5893,x:461,y:432.05},11,cjs.Ease.get(-1)).to({_off:true},1).wait(181));

	// Layer 1
	this.instance_2 = new lib.Tween8("synched",0);
	this.instance_2.setTransform(274.2,-61.4);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-56.85,y:120.95},51,cjs.Ease.get(1)).to({_off:true},1).wait(253));

	// Layer 10
	this.instance_3 = new lib.Tween9("synched",0);
	this.instance_3.setTransform(125.3,259.3,0.6558,0.9582,0,-2.7895,-10.6398,0.9,1.3);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(112).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,skewX:0,skewY:0,x:155.9,y:267.9},1).to({x:322.3,y:367.1},60,cjs.Ease.get(-0.47)).to({_off:true},1).wait(131));

	// Layer 5
	this.instance_4 = new lib.Tween8("synched",0);
	this.instance_4.setTransform(393.5,88.7);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(56).to({_off:false},0).to({x:193.5,y:194.3},48,cjs.Ease.get(1)).to({startPosition:0},2,cjs.Ease.get(-1)).to({x:153.5,y:221.5},6).to({_off:true},1).wait(85).to({_off:false,regX:0.2,regY:0.2,scaleX:1.0776,scaleY:1.001,skewX:-5.1436,skewY:-13.2101,x:377.5,y:424.85},0).to({regX:0,regY:0,scaleX:1,scaleY:1,skewX:0,skewY:0,x:367.9,y:442.3},1,cjs.Ease.get(0.7)).to({x:-56.7,y:703},81,cjs.Ease.get(0.48)).wait(25));

	// Layer 6
	this.instance_5 = new lib.Tween9("synched",0);
	this.instance_5.setTransform(150.9,238.5,0.6558,0.9582,0,-2.7895,-10.6398,0.9,1.3);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(112).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,skewX:0,skewY:0,x:152.7,y:264.7},1).to({x:322.3,y:363.9},60,cjs.Ease.get(-0.47)).to({x:346.3,y:379.9},25,cjs.Ease.get(0.71)).to({_off:true},1).wait(106));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.1,-128.7,1107,701.2);


(lib.cajas_sevan = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Bitmap 6
	this.instance = new lib.Tween7("synched",0);
	this.instance.setTransform(18.3,-2.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:25.95,y:33.25},3).to({x:32.7,y:31.8},4).to({x:41.55,y:39.25},5).to({x:211.5,y:130.4},68).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-20.8,229.9,169.8);


(lib.cajacopy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 3
	this.instance = new lib.Tween2("synched",0);
	this.instance.setTransform(23.5,180.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44).to({_off:false},0).to({alpha:1},6).to({startPosition:0},97).to({alpha:0},5).wait(4));

	// Layer 4
	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.setTransform(135.5,100.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).to({alpha:1},5).to({startPosition:0},105).to({alpha:0},6).wait(11));

	// Layer 5
	this.instance_2 = new lib.Tween2("synched",0);
	this.instance_2.setTransform(-12.55,32.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({alpha:1},4).to({startPosition:0},115).to({alpha:0},5).wait(18));

	// Layer 2
	this.instance_3 = new lib.Tween2("synched",0);
	this.instance_3.setTransform(-10.55,104.5);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},4).to({startPosition:0},138).to({alpha:0},5).wait(9));

	// Layer 1
	this.instance_4 = new lib.Tween2("synched",0);
	this.instance_4.setTransform(65.5,66.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(24).to({_off:false},0).to({alpha:1},4).to({startPosition:0},122).to({alpha:0},5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124.4,-34,325.4,284.5);


(lib.caja = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 3
	this.instance = new lib.Tween2("synched",0);
	this.instance.setTransform(23.5,180.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(48).to({_off:false},0).to({alpha:1},6).to({startPosition:0},73).to({alpha:0},5).wait(24));

	// Layer 4
	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.setTransform(135.5,100.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(31).to({_off:false},0).to({alpha:1},5).to({startPosition:0},53).to({alpha:0},10).wait(57));

	// Layer 5
	this.instance_2 = new lib.Tween2("synched",0);
	this.instance_2.setTransform(-12.55,32.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(17).to({_off:false},0).to({alpha:1},4).to({startPosition:0},93).to({alpha:0},5).wait(37));

	// Layer 2
	this.instance_3 = new lib.Tween2("synched",0);
	this.instance_3.setTransform(-10.55,104.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(12).to({_off:false},0).to({alpha:1},4).to({startPosition:0},115).to({alpha:0},5).wait(20));

	// Layer 1
	this.instance_4 = new lib.Tween2("synched",0);
	this.instance_4.setTransform(65.5,66.5);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:1},4).to({startPosition:0},78).to({alpha:0},5).wait(69));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124.4,-34,325.4,284.5);


(lib.banda = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 4
	this.instance = new lib.brillito_1();
	this.instance.setTransform(165.85,119.1,0.4727,0.5842,0,0,25.9694,13,11.2);

	this.instance_1 = new lib.brillito_1();
	this.instance_1.setTransform(141.35,106.6,0.4727,0.5842,0,0,25.9694,13,11.2);

	this.instance_2 = new lib.brillito_1();
	this.instance_2.setTransform(74.3,72.3,0.4727,0.5842,0,0,25.9694,13,11.2);

	this.instance_3 = new lib.brillito_1();
	this.instance_3.setTransform(49.8,59.8,0.4727,0.5842,0,0,25.9694,13,11.2);

	this.instance_4 = new lib.brillito_1();
	this.instance_4.setTransform(103,95.55,0.9587,1.185,0,0,25.97,12.9,11.2);

	this.instance_5 = new lib.brillito_1();
	this.instance_5.setTransform(195,142.4,0.9587,1.185,0,0,25.97,12.9,11.2);

	this.instance_6 = new lib.brillito_1();
	this.instance_6.setTransform(17.45,51.55,0.9587,1.185,0,0,25.97,12.9,11.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(82));

	// Layer 7
	this.instance_7 = new lib.cajas_sevan("synched",43);
	this.instance_7.setTransform(70.3,7.5,1.2564,1.2564,0,0,0,38.3,31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(82));

	// Layer 6
	this.instance_8 = new lib.cajas_sevan("synched",28);
	this.instance_8.setTransform(70.3,7.5,1.2564,1.2564,0,0,0,38.3,31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(82));

	// Layer 5
	this.instance_9 = new lib.cajas_sevan("synched",0);
	this.instance_9.setTransform(70.3,7.5,1.2564,1.2564,0,0,0,38.3,31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(82));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AK8LEQAmh2h9h8I8wunQgXgJgegHQgggHgUACQA+geDVhtQEqiXACABIASgGQAWgIAUgDQBFgKA+AqQA+AqNtG4QG4DdGuDUQAHADASAUQAZAcARAiQAzBpg/BzIlPCrQkqCagdASQAtghATg6g");
	mask.setTransform(140.7533,80.2163);

	// Layer 2
	this.instance_10 = new lib.Tween3("synched",0);
	this.instance_10.setTransform(254.05,134.55);

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({x:472.6,y:238},81).wait(1));

	// Layer 1
	this.instance_11 = new lib.Bitmap11();
	this.instance_11.setTransform(0,0,0.5072,0.5072);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(82));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-58.2,311,225.2);


// stage content:
(lib.proceso_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.luces_empaque();
	this.instance.setTransform(879.7,559.3,1,1,0,0,0,12.4,25.4);

	this.instance_1 = new lib.sirena_roja("synched",0);
	this.instance_1.setTransform(851.6,464.3,1,1,0,0,0,12.3,25.8);

	this.instance_2 = new lib.luces_empaque();
	this.instance_2.setTransform(1161.7,559.3,1,1,0,0,0,12.4,25.4);

	this.instance_3 = new lib.cajas();
	this.instance_3.setTransform(856.9,554.3);

	this.instance_4 = new lib.empaque();
	this.instance_4.setTransform(1114.85,567.45,1.0691,1.0691,0,0,0,350.6,138.1);

	this.instance_5 = new lib.sirena_roja("synched",0);
	this.instance_5.setTransform(1171.8,507.2,0.85,0.85,0,0,0,12.3,14.7);

	this.instance_6 = new lib.reflejo_verde();
	this.instance_6.setTransform(856.9,386.5,0.7159,0.7159);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 12
	this.instance_7 = new lib.camioncito();
	this.instance_7.setTransform(383.3,1130.75,1,1,0,0,0,70.3,67.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Layer 8
	this.instance_8 = new lib.back();
	this.instance_8.setTransform(631,1182.85,1,1,0,0,0,638,448);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Layer 10
	this.instance_9 = new lib.banda();
	this.instance_9.setTransform(144,908.25,1,1,0,0,0,137,80.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// Layer 7
	this.instance_10 = new lib.cajacopy();
	this.instance_10.setTransform(180.7,665.75,0.711,0.711,0,0,0,65.5,66.5);

	this.instance_11 = new lib.caja();
	this.instance_11.setTransform(402.5,539.7,0.711,0.711,0,0,0,65.5,66.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10}]}).wait(1));

	// Capa_2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#B4B4B4","#8C8C8C"],[0,1],-11.7,-236.8,295.6,467.3).s().p("EBXDA+oQ8sie13jGUgiVgE5gZCgHQQ6Bniv/qFQhohChhhDQhcg/hXhBQg2gqg0gpQx/ubAUyzQEAz+aDsgQBMgkBPgjIAugVQThond8kfIBkgPQD2gjD+gfQC7gXC/gVQX5ijbfgFQPdgCKLAnMAFWB9KIjGgQg");
	this.shape.setTransform(666.9086,598.8425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 9
	this.instance_12 = new lib.Vectorpngcopy();
	this.instance_12.setTransform(-137.95,955.85,0.5283,0.529,0,6.1048,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#C9CE57","#ACDB67"],[0,1],0,263.5,0,-263.7).s().p("EAyIAxUQkLh1nujqQmujLjbhaQlTiLkthNQlchYmCgcQqngywABkQlAAfk8ArIj8AkQh0AXjNAaQmcA1m/AQQ2YA0zslKMgBAhLvQAkATBLAaQCWAzDDAiQJwBsNIhuQF5gyNli0QSNjxG3hRQPki4MXhPQPihjMgAyQWqBaVEDkQKiByGABgMAAABgfQhuAWi3AZQltAzlsAQQinAHieAAQutAApgkJg");
	this.shape_1.setTransform(599.2,341.126,1,0.8649);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D4F8FF").s().p("EhfHAxQMAAAhifMC+PAAAMAAABifg");
	this.shape_2.setTransform(600.8,-50.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#C9CE57","#ACDB67"],[0,1],0,277.4,0,-277.3).s().p("EAyIAz4QkLh7nuj2QmujWjbhfQlTiSkthRQlchcmCgeQqng1wABpQlAAik8AsIj8AmQh0AYjNAcQmcA3m/ARQ2YA3zslbMgBAhPsQAkAUBLAcQCWA2DDAjQJwByNIh0QF5g0Nli9QSNj/G3hVQPkjBMXhTQPihoMgA0QWqBfVEDwQKiB3GABlMAAABlhQhuAXi3AbQltA1lsARQinAIidAAQuuAApgkXg");
	this.shape_3.setTransform(599.2,1362.8514);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(380.5,514.5,1957.1999999999998,1208.3);
// library properties:
lib.properties = {
	id: 'E8C07B343CAD4BA78FEA7B2CC48ADEAA',
	width: 1200,
	height: 1761,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"http://sd-1271777-h00087.ferozo.net/animaciones/proceso_productivo/images4/Bitmap10.png?1658167364549", id:"Bitmap10"},
		{src:"http://sd-1271777-h00087.ferozo.net/animaciones/proceso_productivo/images4/Bitmap11.png?1658167364549", id:"Bitmap11"},
		{src:"http://sd-1271777-h00087.ferozo.net/animaciones/proceso_productivo/images4/Bitmap13.png?1658167364549", id:"Bitmap13"},
		{src:"http://sd-1271777-h00087.ferozo.net/animaciones/proceso_productivo/images4/Bitmap14.png?1658167364549", id:"Bitmap14"},
		{src:"http://sd-1271777-h00087.ferozo.net/animaciones/proceso_productivo/images4/Bitmap15.png?1658167364549", id:"Bitmap15"},
		{src:"http://sd-1271777-h00087.ferozo.net/animaciones/proceso_productivo/images4/Bitmap6.png?1658167364549", id:"Bitmap6"},
		{src:"http://sd-1271777-h00087.ferozo.net/animaciones/proceso_productivo/images4/Mapadebits14.png?1658167364549", id:"Mapadebits14"},
		{src:"http://sd-1271777-h00087.ferozo.net/animaciones/proceso_productivo/images4/Mapadebits6.png?1658167364549", id:"Mapadebits6"},
		{src:"http://sd-1271777-h00087.ferozo.net/animaciones/proceso_productivo/images4/Vectorpngcopy.png?1658167364549", id:"Vectorpngcopy"}
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
an.compositions['E8C07B343CAD4BA78FEA7B2CC48ADEAA'] = {
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