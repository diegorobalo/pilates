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



(lib.FlashAICB = function() {
	this.initialize(img.FlashAICB);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,79,137);


(lib.FlashAICBActivos = function() {
	this.initialize(img.FlashAICBActivos);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,37);


(lib.FlashAICBActivos_1 = function() {
	this.initialize(img.FlashAICBActivos_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,279,77);


(lib.FlashAICBActivos_2 = function() {
	this.initialize(img.FlashAICBActivos_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,133,234);


(lib.Mapadebits5 = function() {
	this.initialize(img.Mapadebits5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1010,424);


(lib.Mapadebits8 = function() {
	this.initialize(img.Mapadebits8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,508,278);// helper functions:

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


(lib.Símbolo1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#52C1E9").s().p("Ag3BHQAGgagJgVQAHgHADgKIAPAOQAOATABAcQgPATgeAFQAFgIADgNgAiMBNIgNgMQAKAAANgEQAZgIANgSQAKACAKgCIgEATQgJAWgYAPQgPgCgQgMgABfAoIgNgDQgVgFgSAEQgOADAAACIAAgCIAMgKQARgJAaAGIAOADIAfAHQAMABALgHIABAEQgOAKgMAAIgCAAQgJAAgVgEgAiuAYQgGgOADgTIAEgRQAFAIAKAKQATARAXACQACAJAHAIQgGAFgMABIgJABQgUAAgUgLgAgHANQgTgSgXgDQgBgGgEgGIgEgFIATgFQAYgDAYAOQAIAWgLAcQgFgIgIgKgABsAHIgRgEQgbgEgVADQgQAEgCADIAAgDIAPgMQAVgKAhAHIARADIAnAIQAPACANgIIABAEQgRAMgPABIgDAAQgLAAgZgGgAiEgTQgPgTgBgcQAPgTAegGQgFAJgDANQgGAZAJAVQgGAHgEAKQgHgDgHgKgABfgcIgNgDQgVgFgSAEQgOADAAACIAAgCIAMgKQARgJAaAGIAOACIAfAIQAMABALgHIABAEQgOAKgMAAIgCAAQgJAAgVgEgAhYghIgGABQgBgIAFgLQAJgWAXgQQAPACAQAMQAIAGAFAGQgKAAgMAEQgZAIgNATQgGgBgIAAg");
	this.shape.setTransform(17.8971,9.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo1, new cjs.Rectangle(0,0,35.8,18.5), null);


(lib.pipas = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.FlashAICBActivos();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,84,37);


(lib.Interpolación14 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#61646E").ss(0.3).p("AFelHQgzAChAAUQiAAqhBBdQgfgGglADIggAEQgCgoAWg5QArhwB5hRQBMAKBRA+QApAfAaAdgAHFCdQgYgtgwgvQhfhehxgRQgIgegTggIgTgbIAZgLQAhgLAlgEQB5gLB+BHQAaBIgSBjQgJAzgPAkgABlHTQAYgsAQhBQAeiDgthpQAVgWARgiQAJgSAEgMIAXAPQAaAWAXAeQBKBgAGCRQgvA8hgAmgAhpnVQgYAtgPBBQgeCDAvBoQgVAXgRAiQgIASgFAMQgjgSglgwQhLhggHiQQAvg9BegnQAwgTAmgHgAlkFJQAzgCBAgUQCAgoBDhdQAvALA0gLIgCAbQgEAigPAjQgsBwh5BQQhMgKhRg/gAnJiLQAaArAxAuQBiBbBxANQAJAeAVAgQALAQAJAKQgiAVg8AIQh4APiBhDQgchHAOhkg");
	this.shape.setTransform(-0.0042,0.189);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7B8C8B").s().p("ACNFnQAeiDgthoQAVgXARgiQAJgRAEgNIAXAQQAaAVAXAeQBKBgAGCRQgvA8hgAmIhVAaQAYgtAQhBgAkiGHIhCg9QAzgBBAgVQCAgoBDhdQAvALA0gKIgCAbQgEAigPAjQgsBwh5BPQhMgKhRg+gAnQB5QgchHAOhlIAVhXQAaAsAxAuQBiBbBxANQAJAdAVAgQALAQAJAKQgiAWg8AHQgXADgXAAQhjAAhog2gAF9BCQhfhehxgQQgIgegTghIgTgbIAZgKQAhgMAlgDQB5gMB+BHQAaBIgSBkQgJAygPAkQgYgsgwgwgAj6hmQhLhfgHiRQAvg8BegnQAwgTAmgIQgYAtgPBCQgeCDAvBoQgVAXgRAiIgNAeQgjgTglgwgAgmkIQArhxB5hQQBMAJBRA+QApAfAaAdQgzAChAAVQiAAphBBeQgfgHglADIggAEQgCgoAWg4g");
	this.shape_1.setTransform(-0.0042,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.4,-47.8,98.8,95.69999999999999);


(lib.Interpolación11 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#E51F22").s().p("AgoArQgSAAgNgNQgMgMAAgSQAAgRAMgMQANgNASAAIBSAAQARAAANANQAMAMAAARQAAASgMAMQgNANgRAAg");
	this.shape.setTransform(0.525,0.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#020303").s().p("AgoArQgSAAgNgMQgMgNAAgSQAAgRAMgMQANgNASAAIBSAAQARAAANANQAMAMAAARQAAASgMANQgNAMgRAAg");
	this.shape_1.setTransform(-0.525,-0.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.9,-4.5,17.9,9.1);


(lib.Interpolación10 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#EC6425").s().p("AgoArQgSAAgNgNQgMgMAAgSQAAgRAMgNQANgMASAAIBSAAQARAAANAMQAMANAAARQAAASgMAMQgNANgRAAg");
	this.shape.setTransform(0.525,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#020303").s().p("AgoArQgSAAgNgNQgMgMAAgSQAAgRAMgNQANgMASAAIBSAAQARAAANAMQAMANAAARQAAASgMAMQgNANgRAAg");
	this.shape_1.setTransform(-0.525,-0.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.9,-4.5,17.9,9.1);


(lib.Interpolación9 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#E8A627").s().p("AgoArQgSAAgNgNQgMgMAAgSQAAgQAMgNQANgNASAAIBSAAQARAAANANQAMANAAAQQAAASgMAMQgNANgRAAg");
	this.shape.setTransform(0.525,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#020303").s().p("AgoArQgSAAgNgNQgMgMAAgSQAAgRAMgMQANgNASAAIBSAAQARAAANANQAMAMAAARQAAASgMAMQgNANgRAAg");
	this.shape_1.setTransform(-0.525,-0.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.9,-4.5,17.9,9.1);


(lib.Interpolación8 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FEDF50").s().p("AgoArQgSAAgNgNQgMgMAAgSQAAgRAMgMQANgNASAAIBSAAQARAAANANQAMAMAAARQAAASgMAMQgNANgRAAg");
	this.shape.setTransform(0.525,0.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#020303").s().p("AgoArQgSAAgNgMQgMgOAAgRQAAgRAMgNQANgMASAAIBSAAQARAAANAMQAMANAAARQAAARgMAOQgNAMgRAAg");
	this.shape_1.setTransform(-0.525,-0.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.9,-4.6,17.9,9.3);


(lib.Interpolación7 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.FlashAICB();
	this.instance.setTransform(-39.5,-68.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.5,-68.5,79,137);


(lib.Path = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#8B9093").s().p("Eg4tAKkIKAtHIgUCMIIcpYMBHRgA0IDGIAITEAAIB4HLIzEAAIBQFoMglgAAAIA8kEIqTAAIigEYg");
	this.shape.setTransform(363,67.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,726,135.2), null);


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

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,27.2,24);


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

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#201A1B").ss(0.8).p("AKEpaICNSiAOLpaIDzSoAFkpaIBZSiAP5pzIEtTUAMipaICnSoAH+paIBzSoADypXIAqS4ARZpzIE/TUAxDpaIlUSoAoDpaIhzTCAtKpaIjATCABkpaIAATIAgspaIgkTMAjCpaIhNTPAlZpaIhkTIAqipaIibTBAu+paIkwSn");
	this.shape.setTransform(-14.1234,46.2031);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#201A1B").ss(0.8).p("ABTpZIAATIAPopzIEuTVAMSpZICnSoAHtpZIB0SoADipWIApS4ARIpzIFhTVAJ0pZICNShAN6pZID0SoAFTpZIBaShAg8pZIgkTLAlqpZIhjTHAqypZIicTBAvPpZIkvSmAxUpZIlUSoAoTpZIh0TBAjTpZIhNTOAtapZIjBTB");
	this.shape_1.setTransform(-6.575,46.1971);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#201A1B").ss(0.8).p("APopzIEuTVAMSpZICnSoAHtpZIB0SoADipWIApS4ARIpzIFhTVAJ0pZICNShAN6pZID0SoAFTpZIBaShAg8pZIgkTLAlqpZIhjTHAqypZIicTBAvPpZIkvSmAxUpZIlUSoABTpZIAATIAoTpZIh0TBAjTpZIhNTOAtapZIjBTB");
	this.shape_2.setTransform(-18.725,46.1971);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#201A1B").ss(0.8).p("ARZpzIE/TUADypXIAqS4AH+paIBzSoAMipaICnSoAP5pzIEtTUAFkpaIBZSiAOLpaIDzSoAKEpaICNSiAu+paIkwSnAqipaIibTBAlZpaIhkTIAjCpaIhNTPAgspaIgkTMABkpaIAATIAtKpaIjATCAoDpaIhzTCAxDpaIlUSo");
	this.shape_3.setTransform(-14.1234,46.2031);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164.6,-17.6,303.9,127.69999999999999);


(lib.ventilador = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#383A40").s().p("AC6B+QAAhNg3g1Qg2g3hNAAQhMAAg2A3Qg3A1AABNIACAWQgVgpAAgyQAAhUA8g8QA8g8BUAAQBVAAA8A8QA8A8AABUQAAAygVApIACgWg");
	this.shape.setTransform(47.85,41.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#565F64").s().p("AiCCDQgugugHg/IgCgWQAAhMA3g2QA2g3BMABQBNgBA2A3QA3A2AABMIgCAWQgHA/guAuQg2A3hNgBQhMABg2g3g");
	this.shape_1.setTransform(47.85,54.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(84));

	// Capa_1
	this.instance = new lib.Interpolación14("synched",0);
	this.instance.setTransform(48.4,46.85);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-1080},83).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,-3.1,99.7,99.8);


(lib.pipas_cinta = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.pipas("synched",0);
	this.instance.setTransform(-396.8,148.15,0.8591,0.8591,-1.7058,0,0,42.4,18.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:42.5,rotation:2.2854,x:105,y:152.25},78).to({rotation:36.9244,x:156,y:159.5},3).to({regX:42.4,regY:18.8,rotation:91.9736,x:174.3,y:261.35},6).to({_off:true},1).wait(22));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-433.7,0,629.5,297.6);


(lib.luces = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Interpolación8("synched",0);
	this.instance.setTransform(8.95,40.5);
	var instanceFilter_1 = new cjs.ColorFilter(0.34,0.34,0.34,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-11,-7,22,13);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},1).to({startPosition:0},9).to({startPosition:0},10).wait(17));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(1).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(9).to(new cjs.ColorFilter(0.34,0.34,0.34,1,0,0,0,0), 10).wait(17));

	// Capa_3
	this.instance_1 = new lib.Interpolación9("synched",0);
	this.instance_1.setTransform(8.95,27.55);
	var instance_1Filter_2 = new cjs.ColorFilter(0.34,0.34,0.34,1,0,0,0,0);
	this.instance_1.filters = [instance_1Filter_2];
	this.instance_1.cache(-11,-6,22,13);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({startPosition:0},6).to({startPosition:0},9).to({startPosition:0},10).wait(12));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 6).wait(9).to(new cjs.ColorFilter(0.34,0.34,0.34,1,0,0,0,0), 10).wait(12));

	// Capa_4
	this.instance_2 = new lib.Interpolación10("synched",0);
	this.instance_2.setTransform(8.95,16.2);
	var instance_2Filter_3 = new cjs.ColorFilter(0.34,0.34,0.34,1,0,0,0,0);
	this.instance_2.filters = [instance_2Filter_3];
	this.instance_2.cache(-11,-6,22,13);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({startPosition:0},11).to({startPosition:0},9).to({startPosition:0},10).wait(7));
	this.timeline.addTween(cjs.Tween.get(instance_2Filter_3).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 11).wait(9).to(new cjs.ColorFilter(0.34,0.34,0.34,1,0,0,0,0), 10).wait(7));

	// Capa_5
	this.instance_3 = new lib.Interpolación11("synched",0);
	this.instance_3.setTransform(8.95,4.55);
	var instance_3Filter_4 = new cjs.ColorFilter(0.34,0.34,0.34,1,0,0,0,0);
	this.instance_3.filters = [instance_3Filter_4];
	this.instance_3.cache(-11,-6,22,13);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({startPosition:0},17).to({startPosition:0},9).to({startPosition:0},10).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_3Filter_4).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 17).wait(9).to(new cjs.ColorFilter(0.34,0.34,0.34,1,0,0,0,0), 10).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:1, endFrame:1, x:-11, y:-7, w:22, h:13});
	this.filterCacheList.push({instance: this.instance, startFrame:0, endFrame:0, x:-11, y:-7, w:22, h:13});
	this.filterCacheList.push({instance: this.instance, startFrame:11, endFrame:20, x:-11, y:-7, w:22, h:13});
	this.filterCacheList.push({instance: this.instance_1, startFrame:1, endFrame:6, x:-11, y:-6, w:22, h:13});
	this.filterCacheList.push({instance: this.instance_1, startFrame:0, endFrame:0, x:-11, y:-6, w:22, h:13});
	this.filterCacheList.push({instance: this.instance_1, startFrame:16, endFrame:25, x:-11, y:-6, w:22, h:13});
	this.filterCacheList.push({instance: this.instance_2, startFrame:1, endFrame:11, x:-11, y:-6, w:22, h:13});
	this.filterCacheList.push({instance: this.instance_2, startFrame:0, endFrame:0, x:-11, y:-6, w:22, h:13});
	this.filterCacheList.push({instance: this.instance_2, startFrame:21, endFrame:30, x:-11, y:-6, w:22, h:13});
	this.filterCacheList.push({instance: this.instance_3, startFrame:1, endFrame:17, x:-11, y:-6, w:22, h:13});
	this.filterCacheList.push({instance: this.instance_3, startFrame:0, endFrame:0, x:-11, y:-6, w:22, h:13});
	this.filterCacheList.push({instance: this.instance_3, startFrame:27, endFrame:36, x:-11, y:-6, w:22, h:13});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,17.9,45.2);


(lib.Interpolación15 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Símbolo1();
	this.instance.setTransform(0,0,1,1,0,0,0,17.9,9.2);
	this.instance.shadow = new cjs.Shadow("rgba(102,255,255,1)",0,0,8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.9,-18.2,56,40);


(lib.fuego = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.luces("synched",0);
	this.instance.setTransform(267.7,103.6,1,1,0,0,0,9,22.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));
	this.instance.addEventListener("tick", AdobeAn.handleFilterCache);

	// Capa_1
	this.instance_1 = new lib.luces("synched",10);
	this.instance_1.setTransform(146.2,103.6,1,1,0,0,0,9,22.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));
	this.instance_1.addEventListener("tick", AdobeAn.handleFilterCache);

	// Capa_1
	this.instance_2 = new lib.Interpolación7("synched",0);
	this.instance_2.setTransform(39.5,68.5);
	this.instance_2.alpha = 0.6602;
	var instance_2Filter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_2.filters = [instance_2Filter_1];
	this.instance_2.cache(-41,-70,83,141);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},8).to({startPosition:0},4,cjs.Ease.get(-1)).to({alpha:0.7891},7,cjs.Ease.get(1)).to({alpha:1},4,cjs.Ease.get(-0.85)).to({alpha:0.6602},6,cjs.Ease.get(1)).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_2Filter_1).wait(8).to(new cjs.ColorFilter(0.62,0.62,0.62,1,41.04,36.48,0,0), 4,cjs.Ease.get(-1)).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 7,cjs.Ease.get(1)).to(new cjs.ColorFilter(0.44,0.44,0.44,1,85.12,53.76,0,0), 4,cjs.Ease.get(-0.85)).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 6,cjs.Ease.get(1)).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance_2, startFrame:9, endFrame:12, x:-41, y:-70, w:83, h:141});
	this.filterCacheList.push({instance: this.instance_2, startFrame:13, endFrame:19, x:-41, y:-70, w:83, h:141});
	this.filterCacheList.push({instance: this.instance_2, startFrame:20, endFrame:23, x:-41, y:-70, w:83, h:141});
	this.filterCacheList.push({instance: this.instance_2, startFrame:24, endFrame:29, x:-41, y:-70, w:83, h:141});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,276.6,137);


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

	// Capa_8 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EAsHAIYIAAAAIAAAAIAAAAgEAmYAIWQlvgDAEgIQBBkkhrhpQghgggwgKIgngDIgCgJIsTAHQg4ACg5AAQuRAJgWgFQABgPgCgnQgDhBgKiKQgNi7AOhmIgBg/IbFgLIORAJIBhQmQi4AAi3gCgA5CC+QgGgVgNgSQgqg5hXAAIwwAAIAAjRIBMi1QBMi2gDAAIQ0AAIAAKuIgFgSg");
	var mask_graphics_39 = new cjs.Graphics().p("EAsHAIYIAAAAIAAAAIAAAAgEAmYAIWQlvgDAEgIQBBkkhrhpQghgggwgKIgngDIgCgJIsTAHQg4ACg5AAQuRAJgWgFQABgPgCgnQgDhBgKiKQgNi7AOhmIgBg/IbFgLIORAJIBhQmQi4AAi3gCgA5CC+QgGgVgNgSQgqg5hXAAIwwAAIAAjRIBMi1QBMi2gDAAIQ0AAIAAKuIgFgSg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:50.55,y:54.0259}).wait(39).to({graphics:mask_graphics_39,x:50.55,y:54.0259}).wait(1).to({graphics:null,x:0,y:0}).wait(34));

	// Capa_11
	this.instance = new lib.pipas_cinta("synched",87);
	this.instance.setTransform(125.55,-85.45,1,1,0,0,0,19.2,37.4);
	var instanceFilter_1 = new cjs.ColorFilter(0.32,0.32,0.32,1,140.76,134.64,106.08,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-436,-2,634,302);

	this.instance_1 = new lib.pipas_cinta("synched",81);
	this.instance_1.setTransform(125.55,-85.45,1,1,0,0,0,19.2,37.4);
	var instance_1Filter_2 = new cjs.ColorFilter(0.32,0.32,0.32,1,140.76,134.64,106.08,0);
	this.instance_1.filters = [instance_1Filter_2];
	this.instance_1.cache(-436,-2,634,302);

	this.instance_2 = new lib.pipas_cinta("synched",68);
	this.instance_2.setTransform(125.55,-85.45,1,1,0,0,0,19.2,37.4);
	var instance_2Filter_3 = new cjs.ColorFilter(0.32,0.32,0.32,1,140.76,134.64,106.08,0);
	this.instance_2.filters = [instance_2Filter_3];
	this.instance_2.cache(-436,-2,634,302);

	this.instance_3 = new lib.pipas_cinta("synched",49);
	this.instance_3.setTransform(125.55,-85.45,1,1,0,0,0,19.2,37.4);
	var instance_3Filter_4 = new cjs.ColorFilter(0.32,0.32,0.32,1,140.76,134.64,106.08,0);
	this.instance_3.filters = [instance_3Filter_4];
	this.instance_3.cache(-436,-2,634,302);

	this.instance_4 = new lib.pipas_cinta("synched",33);
	this.instance_4.setTransform(125.55,-85.45,1,1,0,0,0,19.2,37.4);
	var instance_4Filter_5 = new cjs.ColorFilter(0.32,0.32,0.32,1,140.76,134.64,106.08,0);
	this.instance_4.filters = [instance_4Filter_5];
	this.instance_4.cache(-436,-2,634,302);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4,p:{startPosition:33}},{t:this.instance_3,p:{startPosition:49}},{t:this.instance_2,p:{startPosition:68}},{t:this.instance_1,p:{startPosition:81}},{t:this.instance,p:{startPosition:87}}]}).to({state:[{t:this.instance_4,p:{startPosition:72}},{t:this.instance_3,p:{startPosition:88}},{t:this.instance_2,p:{startPosition:107}},{t:this.instance_1,p:{startPosition:10}},{t:this.instance,p:{startPosition:16}}]},39).to({state:[]},1).wait(34));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(73));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_2).wait(73));
	this.timeline.addTween(cjs.Tween.get(instance_2Filter_3).wait(73));
	this.timeline.addTween(cjs.Tween.get(instance_3Filter_4).wait(73));
	this.timeline.addTween(cjs.Tween.get(instance_4Filter_5).wait(73));

	// Capa_10
	this.instance_5 = new lib.pipas_cinta("synched",16);
	this.instance_5.setTransform(125.55,-85.45,1,1,0,0,0,19.2,37.4);
	var instance_5Filter_6 = new cjs.ColorFilter(0.32,0.32,0.32,1,140.76,134.64,106.08,0);
	this.instance_5.filters = [instance_5Filter_6];
	this.instance_5.cache(-436,-2,634,302);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(39).to({startPosition:55},0).to({_off:true},1).wait(34));
	this.timeline.addTween(cjs.Tween.get(instance_5Filter_6).wait(73));

	// Capa_7
	this.instance_6 = new lib.pipas_cinta("synched",0);
	this.instance_6.setTransform(125.55,-85.45,1,1,0,0,0,19.2,37.4);
	var instance_6Filter_7 = new cjs.ColorFilter(0.32,0.32,0.32,1,140.76,134.64,106.08,0);
	this.instance_6.filters = [instance_6Filter_7];
	this.instance_6.cache(-436,-2,634,302);

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(39).to({startPosition:39},0).to({_off:true},1).wait(34));
	this.timeline.addTween(cjs.Tween.get(instance_6Filter_7).wait(73));

	// Capa_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#61646E").ss(0.3).p("AUNE9IACAJAUNE9QgGgRgQgQQgpgrhUAAMgjcAADQhdAAgwAqQgVATgGASICwpQQANgrAjgbQAkgbAtAAIfPAAQAuAAAlAcQAkAdALAsgA0KFDQgBADgBAD");
	this.shape.setTransform(128.85,37.05,1,1,0,0,0,-0.5,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#61646E").ss(0.3).p("AUSE9QgGgRgQgQQgpgrhUAAMgjcAADQhdAAgwAqQgVATgGASICwpQQANgrAjgbQAkgbAtAAIfPAAQAuAAAlAcQAkAdALAsICVJGIACAJA0FFDQgBADgBAD");
	this.shape_1.setTransform(129.45,35.15,1,1,0,0,0,0.6,-1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},39).to({state:[]},1).wait(34));

	// Capa_5 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("Axbj3QANgrAjgbQAkgbAtAAIfPAAQAuAAAlAcQAkAcALAtICVJGQgGgRgQgRQgpgqhUAAMgjcAADQhdAAgwAqQgVATgGASg");
	var mask_1_graphics_39 = new cjs.Graphics().p("Axbj3QANgrAjgbQAkgbAtAAIfPAAQAuAAAlAcQAkAcALAtICVJGQgGgRgQgRQgpgqhUAAMgjcAADQhdAAgwAqQgVATgGASg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:129.4625,y:34.9}).wait(39).to({graphics:mask_1_graphics_39,x:129.4625,y:34.9}).wait(1).to({graphics:null,x:0,y:0}).wait(34));

	// Capa_3
	this.instance_7 = new lib.banda("synched",0);
	this.instance_7.setTransform(142.3,31,1,1,0,0,0,1,30.6);

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(39).to({startPosition:3},0).to({_off:true},1).wait(34));

	// Capa_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ACB1B4").s().p("Axbj3QANgrAjgbQAkgbAtAAIfPAAQAuAAAlAcQAkAcALAtICVJGQgGgRgQgRQgpgqhUAAMgjcAADQhdAAgwAqQgVATgGASg");
	this.shape_2.setTransform(129.4625,34.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(39).to({_off:true},1).wait(34));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:1, endFrame:39, x:-436, y:-2, w:634, h:302});
	this.filterCacheList.push({instance: this.instance, startFrame:40, endFrame:40, x:-436, y:-2, w:634, h:302});
	this.filterCacheList.push({instance: this.instance, startFrame:40, endFrame:74, x:-436, y:-2, w:634, h:302});
	this.filterCacheList.push({instance: this.instance_1, startFrame:1, endFrame:39, x:-436, y:-2, w:634, h:302});
	this.filterCacheList.push({instance: this.instance_1, startFrame:40, endFrame:40, x:-436, y:-2, w:634, h:302});
	this.filterCacheList.push({instance: this.instance_1, startFrame:40, endFrame:74, x:-436, y:-2, w:634, h:302});
	this.filterCacheList.push({instance: this.instance_2, startFrame:1, endFrame:39, x:-436, y:-2, w:634, h:302});
	this.filterCacheList.push({instance: this.instance_2, startFrame:40, endFrame:40, x:-436, y:-2, w:634, h:302});
	this.filterCacheList.push({instance: this.instance_2, startFrame:40, endFrame:74, x:-436, y:-2, w:634, h:302});
	this.filterCacheList.push({instance: this.instance_3, startFrame:1, endFrame:39, x:-436, y:-2, w:634, h:302});
	this.filterCacheList.push({instance: this.instance_3, startFrame:40, endFrame:40, x:-436, y:-2, w:634, h:302});
	this.filterCacheList.push({instance: this.instance_3, startFrame:40, endFrame:74, x:-436, y:-2, w:634, h:302});
	this.filterCacheList.push({instance: this.instance_4, startFrame:1, endFrame:39, x:-436, y:-2, w:634, h:302});
	this.filterCacheList.push({instance: this.instance_4, startFrame:40, endFrame:40, x:-436, y:-2, w:634, h:302});
	this.filterCacheList.push({instance: this.instance_4, startFrame:40, endFrame:74, x:-436, y:-2, w:634, h:302});
	this.filterCacheList.push({instance: this.instance_5, startFrame:1, endFrame:39, x:-436, y:-2, w:634, h:302});
	this.filterCacheList.push({instance: this.instance_5, startFrame:40, endFrame:40, x:-436, y:-2, w:634, h:302});
	this.filterCacheList.push({instance: this.instance_5, startFrame:40, endFrame:74, x:-436, y:-2, w:634, h:302});
	this.filterCacheList.push({instance: this.instance_6, startFrame:1, endFrame:39, x:-436, y:-2, w:634, h:302});
	this.filterCacheList.push({instance: this.instance_6, startFrame:40, endFrame:40, x:-436, y:-2, w:634, h:302});
	this.filterCacheList.push({instance: this.instance_6, startFrame:40, endFrame:74, x:-436, y:-2, w:634, h:302});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-231.7,-0.6,533.8,108.19999999999999);


(lib.luz = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Interpolación15();
	this.instance.setTransform(17.9,9.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},2,cjs.Ease.get(1)).to({alpha:0},15,cjs.Ease.get(-1)).wait(13));

	// Capa_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0099CC").s().p("Ag3BHQAGgagJgVQAHgHADgKIAPAOQAOATABAcQgPATgeAFQAFgIADgNgAiMBNIgNgMQAKAAANgEQAZgIANgSQAKACAKgCIgEATQgJAWgYAPQgPgCgQgMgABfAoIgNgDQgVgFgSAEQgOADAAACIAAgCIAMgKQARgJAaAGIAOADIAfAHQAMABALgHIABAEQgOAKgMAAIgCAAQgJAAgVgEgAiuAYQgGgOADgTIAEgRQAFAIAKAKQATARAXACQACAJAHAIQgGAFgMABIgJABQgUAAgUgLgAgHANQgTgSgXgDQgBgGgEgGIgEgFIATgFQAYgDAYAOQAIAWgLAcQgFgIgIgKgABsAHIgRgEQgbgEgVADQgQAEgCADIAAgDIAPgMQAVgKAhAHIARADIAnAIQAPACANgIIABAEQgRAMgPABIgDAAQgLAAgZgGgAiEgTQgPgTgBgcQAPgTAegGQgFAJgDANQgGAZAJAVQgGAHgEAKQgHgDgHgKgABfgcIgNgDQgVgFgSAEQgOADAAACIAAgCIAMgKQARgJAaAGIAOACIAfAIQAMABALgHIABAEQgOAKgMAAIgCAAQgJAAgVgEgAhYghIgGABQgBgIAFgLQAJgWAXgQQAPACAQAMQAIAGAFAGQgKAAgMAEQgZAIgNATQgGgBgIAAg");
	this.shape.setTransform(17.8971,9.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(30));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,-9,57,40);


(lib.horno = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.luz("synched",0);
	this.instance.setTransform(1015.4,396.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

	// Capa_1
	this.instance_1 = new lib.ventilador();
	this.instance_1.setTransform(1039.45,184.2,0.9234,0.3676,180,0,0,48.5,47.1);

	this.instance_2 = new lib.ventilador();
	this.instance_2.setTransform(1035.85,313.85,1,1,0,0,0,48.4,46.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(40));

	// Capa_11 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg4hAesMAAAg9XMBxDAAAMAAAA9XgAnGjfQgKALgCAPQgCAQAPAdQANAaAKANQAOAVAQAMQATAOAlAKQBJAVBfADQA7ACBwgFIBRgDQAVgBALgCQASgFAKgKQAGgFAEgIIATgEQAZgGAMgNQAJgKACgPQADgOgEgOQgGgWgXgaQgRgSgTgPIiaAAQjfAAjgADg");
	mask.setTransform(876.275,281.875);

	// Capa_10
	this.instance_3 = new lib.Mapadebits8();
	this.instance_3.setTransform(566,129,1.1355,1.1355);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(40));

	// Capa_3 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AjlU1MAAAgppMA3kAAAMAAAAppgA/ZAyIgggsIAAAAQgQgYgmgMIAAAAQgmgMhEABIAAAAQiJABvAgBIAAAAIgcjUIC1mIISLAAQAIgEAVAIIAAAAQAYAJASATIAAAAQApAqgDBsIAAAAQhzHEgGBbIAAAAQgBgKgOgUg");
	mask_1.setTransform(1145.8498,323.725);

	// Capa_2
	this.instance_4 = new lib.banda("synched",0);
	this.instance_4.setTransform(866.05,280.15,0.898,0.6363,0,26.7844,0,0.8,30.8);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(40));

	// Capa_15
	this.instance_5 = new lib.brillito();
	this.instance_5.setTransform(1292.95,328.5,0.6418,0.6418,0,0,0,12.8,11.2);

	this.instance_6 = new lib.brillito();
	this.instance_6.setTransform(1266.05,328.5,0.6418,0.6418,0,0,0,12.8,11.2);

	this.instance_7 = new lib.brillito();
	this.instance_7.setTransform(1239.65,328.5,0.6418,0.6418,0,0,0,12.8,11.2);

	this.instance_8 = new lib.brillito();
	this.instance_8.setTransform(1212.75,328.5,0.6418,0.6418,0,0,0,12.6,11.2);

	this.instance_9 = new lib.brillito();
	this.instance_9.setTransform(1185.15,328.5,0.6418,0.6418,0,0,0,12.8,11.2);

	this.instance_10 = new lib.brillito();
	this.instance_10.setTransform(1158.35,328.5,0.6418,0.6418,0,0,0,13,11.2);

	this.instance_11 = new lib.brillito();
	this.instance_11.setTransform(1132.25,328.5,0.6418,0.6418,0,0,0,12.8,11.2);

	this.instance_12 = new lib.brillito();
	this.instance_12.setTransform(1105.45,328.5,0.6418,0.6418,0,0,0,12.8,11.2);

	this.instance_13 = new lib.brillito();
	this.instance_13.setTransform(1077.35,332,1.0618,1.0618,0,0,0,12.7,11.1);

	this.instance_14 = new lib.brillito();
	this.instance_14.setTransform(1322.4,332,1.0618,1.0618,0,0,0,12.7,11.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3A3C42").s().p("AgtAaQgSgQgBgWQAKgOARgIQASgIATAAQAUAAARAJQASAJAKAOQgBAWgTAPQgTAQgaAAQgaAAgTgRg");
	this.shape.setTransform(1076.6071,331.721,1.0617,1.0617);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#61646E").s().p("Ag3AwQgXgUAAgcQAAgbAXgUQAXgUAgAAQAhAAAWAUQAYAUAAAbQAAAcgYAUQgWAUghAAQggAAgXgUg");
	this.shape_1.setTransform(1076.2355,334.3752,1.0617,1.0617);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#61646E").ss(0.3).p("AB+AAQAAAuglAgQglAgg0AAQgzAAglggQglggAAguQAAgsAlggQAlghAzAAQA0AAAlAhQAlAgAAAsg");
	this.shape_2.setTransform(1076.846,332.0395,1.0617,1.0617);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#ACB1B4").s().p("AhYBOQglggAAguQAAgsAlggQAlghAzAAQA0AAAlAhQAlAgAAAsQAAAuglAgQglAgg0AAQgzAAglggg");
	this.shape_3.setTransform(1076.846,332.0395,1.0617,1.0617);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#383A40").s().p("AyYBuQgngCgRhPQgRhKATgeQAOgWAbgIIAYgEMAj9AAAQAzAAAZAeQAYAeAFBBQAFA3g3AZQgbAMgcACg");
	this.shape_4.setTransform(1201.7872,331.5799,1.0618,1.0618);

	this.instance_15 = new lib.ClipGroup("synched",0);
	this.instance_15.setTransform(1199.65,290.2,1.0618,1.0618,0,0,0,129.7,35.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#787881").s().p("AR2GvMgkJAAAQg1gGgegbQgkgggGg2IABgvICxpWQANgrAkgbQAkgbAtAAIfQAAQAtAAAlAcQAkAcALAtICYJPIAEAkQgBAsgZAjQgaAlg2AMQgWAFgSAAIgJAAg");
	this.shape_5.setTransform(1199.5673,299.4759,1.0618,1.0618);

	var maskedShapeInstanceList = [this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13,this.instance_14,this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.instance_15,this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.instance_15},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]}).wait(40));
	this.instance_15.addEventListener("tick", AdobeAn.handleFilterCache);

	// Capa_9
	this.instance_16 = new lib.FlashAICBActivos_1();
	this.instance_16.setTransform(695,259,0.9428,1.0089);

	var maskedShapeInstanceList = [this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(40));

	// Capa_5 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AHagEQgSgNgSgGQgKgDgHgBIwegOIgPhXISuAJQCQBnhCBSQgiAqg+AVQgGhdg0gog");
	mask_2.setTransform(881.5847,332.225);

	// Capa_4
	this.instance_17 = new lib.brillito();
	this.instance_17.setTransform(849.6,327.1,0.4886,0.5035,0,-9.244,180,12.3,11.1);

	this.instance_18 = new lib.brillito();
	this.instance_18.setTransform(874.5,327.1,0.4886,0.5035,0,-9.244,180,12.3,11.1);

	this.instance_19 = new lib.brillito();
	this.instance_19.setTransform(899.3,327.1,0.4886,0.5036,0,-9.2437,180,12.5,11.1);

	this.instance_20 = new lib.brillito();
	this.instance_20.setTransform(817.65,332.6,0.9831,1.0132,0,-9.244,180,12.5,11);

	this.instance_21 = new lib.brillito();
	this.instance_21.setTransform(931.6,332.6,0.9831,1.0132,0,-9.244,180,12.5,11);

	var maskedShapeInstanceList = [this.instance_17,this.instance_18,this.instance_19,this.instance_20,this.instance_21];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17}]}).wait(40));

	// Capa_1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#43464E").s().p("AvoNUIgTgFIgMgHIgHgHIgGgGIgDgIIgDgHIAAgGIAAgHIAAgIIADgHIAFgHIAHgGIAGgHIAKgFIAEgDIAPgBIPjgGIAAgGIAAgHIAAgHIAAgHIAAgHIAAgHIAAgHIAAgHIACgHIADgHIADgHIAAgHIAAgHIAAgHIAAgHIAAgGIAAgIIAAgHIAAgGIAAgHIAAgIIAAgHIAAgGIAAgHIAAgIIAAgHIAAgHIAAgGIAAgHIAAgHIAAgHIAAgHIAAgHIAAgHIAAgHIAAgHIAAgHIAAgHIAAgHIAAgHIAAgHIAAgHIAAgHIAAgHIAAgGIAAgHIAAgHIAAgIIAAgHIAAgGIAAgHIAAgIIAAgHIAAgGIAAgHIAAgIIAAgHIAAgGIAAgHIAAgHIAAgHIAAgHIADgHIAFgHIAHgHIAHgHIAJgEIAEgDIAPAAIAAgCIACAAIASAFIAMAHIAHAGIAFAHIACAIIACAGIACAHIAAAHIAAAHIAAAHIAAAHIAAAHIAAAHIAAAHIAAAHIAAAHIAAAHIAAAHIAAAHIAAAGIAAAHIAAAHIAAAIIAAAHIAAAGIAAAHIAAAIIAAAHIAAAGIAAAHIAAAHIAAAIIAAAHIAAAGIAAAHIAAAHIAAAHIADgCIAGgHIAHgHIAIgHIAHgHIAGgHIAHgHIAHgHIAJgHIAIgHIAHgHIAJgHIAMgHIAEgHIAHgGIAHgHIAFgHIACgIIAEgHIADgGIAFgHIAHgIIAEgHIAHgGIAFgHIAEgIIAFgHIADgGIACgHIAFgHIACgHIAEgHIADgHIAEgHIAHgHIAIgHIAHgHIAGgHIAHgHIAHgHIAFgHIAHgGIACgHIAAgIIADgHIAEgGIAHgHIAHgIIAEgHIAHgHIAGgGIACgHIACgIIACgHIAHgGIAFgHIACgHIAFgHIAHgHIAHgHIAJgHIAEgHIAHgHIAGgHIAGgHIABgBIgGgBIgygUQgTgHgZgDIgugCIpAgTQiwgFhYADQiUAFhyAZQgZAGgKABQgTACgQgDQgRgFgLgQQgMgQAFgQQgOAEgPgEQgOgFgKgLQgIgLgCgPQgBgQAHgMIAKgPIAKgNQAHgMgBgOQgBgNgHgLQgbgBgLgdQgNgeATgTQAQgRAqgEQA8gHBNAAQAqABBgADQGjAPGDAAQBDAAAfADQA2AEApANQAyAPAkAdQApAhARArQARAogEBAIAAAEIAEgCIASgDIAAgCIAMAAIATAFIANAEIAYAFIALAHIAIAGIAEAHIADAIIACAHIACAHIAAAGIAAAHIAAAIIgCAHIgCAGIgDAHIgEAHIgGAHIgGAHIgDAHIgEAHIgFAHIgCAHIgCAHIgFAHIgCAHIgFAHIgHAHIgFAHIgCAHIgFAHIgCAHIgEAGIgDAGIAAABIAJAAIADAAIASAGIAMAGIAHAHIAEAHIADAHIACAHIACAHIAAAHIAAAHIAAAHIAAAHIAAAHIAAAHIgCAHIgCAHIgDAGIgCAHIgEAIIgDAHIgEAGIgDAHIgEAIIgDAHIgCAGIgDAHIgCAIIgCAHIgDAHIgEAGIgCAHIgDAHIgCAHIACAHIADAHIACAHIAAAHIAAAHIAAAHIACAHIACAHIADAHIACAHIAAAHIAFAHIACAHIADAGIACAHIAFAHIACAIIAAAHIAAAGIAAAHIAAAIIAAAHIAAAGIAAAHIAAAIIAAAGIAAAHIAAAHIAAAHIgCAHIgDAHIgEAHIgDAHIgHAHIgHAHIgHAHIAHAHIAHAHIACAHIAFAEIAAADIBkACIAOACIAHACIAJADIBrADIASAEIAMAHIAHAHIAFAHIACAHIACAHIACAGIAAAIIgCAHIgCAGIgFAHIgEAIIgJAHIgIAEIgEACIgQADI8kAAgAmSryIgSgEIgMgHIgHgHIgHgHIgCgHIgCgHIAAgHIAAgHIAAgHIACgHIAEgHIAHgHIAHgHIAKgEIAFgDIANAAIAAgCIV8AAIASAFIAMAHIAHAGIAFAHIACAIIACAHIADAHIAAAGIgDAHIgCAHIgFAHIgFAHIgJAHIgHAFIgEACIgQACI16AAg");
	this.shape_6.setTransform(894.9,335.75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.bf(img.Mapadebits5, null, new cjs.Matrix2D(1,0,0,1,-323.2,-212)).s().p("EgygAhIMAAAhCPMBlAAAAMAAABCPg");
	this.shape_7.setTransform(323.25,212);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).wait(40));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1382.7,435.2);


// stage content:
(lib.proceso_2b = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_9
	this.instance = new lib.fuego();
	this.instance.setTransform(-302.6,450.35,0.8822,0.8822,0,0,0,39.6,68.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(66));
	this.instance.addEventListener("tick", AdobeAn.handleFilterCache);

	// Capa_11
	this.instance_1 = new lib.luces("synched",0);
	this.instance_1.setTransform(56.6,491.9,1,1,0,0,0,9,22.6);

	this.instance_2 = new lib.luces("synched",10);
	this.instance_2.setTransform(258.1,487.2,1,1,0,0,0,9,22.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(66));
	this.instance_1.addEventListener("tick", AdobeAn.handleFilterCache);
	this.instance_2.addEventListener("tick", AdobeAn.handleFilterCache);

	// Capa_8
	this.instance_3 = new lib.horno();
	this.instance_3.setTransform(44.65,388.55,0.8822,0.8822,0,0,0,505.1,212.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(66));

	// Capa_13
	this.instance_4 = new lib.FlashAICBActivos_2();
	this.instance_4.setTransform(742,440);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(66));

	// Layer_1
	this.instance_5 = new lib.Path();
	this.instance_5.setTransform(397.65,542,1,1,0,0,0,363,67.5);
	this.instance_5.alpha = 0.2383;
	this.instance_5.compositeOperation = "multiply";

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(66));

	// Modo_de_aislamiento
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CACDCD").s().p("Egt1ATuQ1JhowTi+QwTi9o9j2QpQj/AAkWQAAkWJQj+QI9j1QTi+QQTi9VJhpQV4hrX9AAQX+AAV4BrQVJBpQTC9QQTC+I9D1QJQD+AAEWQAAEWpQD/Qo9D2wTC9QwTC+1JBoQ14Br3+AAQ39AA14hrg");
	this.shape.setTransform(402.25,495.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(66));

	// Capa_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FCDED3","#FCE5BF"],[0,1],-3.8,-575.1,5,576.8).s().p("EhoDBXgQwliUxakLQupjhyFliMABLiY3QCQimFjiKQFeiIHvhUQH8hYJBgSQJkgUJfA8QOOBbN4FnQFUCJGlDRILaF3QG4DiEzCJQGmC8GGB7QOxEsQhAIQM7AGNShIQJTgzMyhwQQHiNDIgXQKIhJHlADQKEAFFMAQQKSAeJ3BaQa5D0c0LUMgSjB42QjFhVlVhPQmDhZnNg1QyLiHynCGQnUA1tGC5QwYDxpqCGQxRDvu0CWQzdDEzIBVQv4BHvEAAQ6IAA3rjVg");
	this.shape_1.setTransform(662.9257,338.1486,0.645,0.5365);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(66));

	// stageBackground
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("EhfTg0VMC+nAAAMAAABorMi+nAAAg");
	this.shape_2.setTransform(600,325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("EhfTA0WMAAAhorMC+nAAAMAAABorg");
	this.shape_3.setTransform(600,325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(66));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(199.1,351.3,1168.8000000000002,322.7);
// library properties:
lib.properties = {
	id: '97992DCE3C9541969BF303602D31A923',
	width: 1200,
	height: 650,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"http://sd-1271777-h00087.ferozo.net/animaciones/proceso_productivo/images2b/FlashAICB.png?1658162102626", id:"FlashAICB"},
		{src:"http://sd-1271777-h00087.ferozo.net/animaciones/proceso_productivo/images2b/FlashAICBActivos.png?1658162102626", id:"FlashAICBActivos"},
		{src:"http://sd-1271777-h00087.ferozo.net/animaciones/proceso_productivo/images2b/FlashAICBActivos_1.png?1658162102626", id:"FlashAICBActivos_1"},
		{src:"http://sd-1271777-h00087.ferozo.net/animaciones/proceso_productivo/images2b/FlashAICBActivos_2.png?1658162102626", id:"FlashAICBActivos_2"},
		{src:"http://sd-1271777-h00087.ferozo.net/animaciones/proceso_productivo/images2b/Mapadebits5.png?1658162102626", id:"Mapadebits5"},
		{src:"http://sd-1271777-h00087.ferozo.net/animaciones/proceso_productivo/images2b/Mapadebits8.png?1658162102626", id:"Mapadebits8"}
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
an.compositions['97992DCE3C9541969BF303602D31A923'] = {
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