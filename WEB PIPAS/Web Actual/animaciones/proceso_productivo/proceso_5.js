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



(lib.Bitmap13 = function() {
	this.initialize(img.Bitmap13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,235,227);


(lib.Bitmap15 = function() {
	this.initialize(img.Bitmap15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,243,208);


(lib.Frame = function() {
	this.initialize(img.Frame);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,216,256);


(lib.image29 = function() {
	this.initialize(img.image29);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,471);


(lib.image30 = function() {
	this.initialize(img.image30);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,504,395);


(lib.image31 = function() {
	this.initialize(img.image31);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,459,518);


(lib.image32 = function() {
	this.initialize(img.image32);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,377);


(lib.image33 = function() {
	this.initialize(img.image33);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,236,223);


(lib.image34 = function() {
	this.initialize(img.image34);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,504,395);


(lib.image35 = function() {
	this.initialize(img.image35);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,504,395);


(lib.image44 = function() {
	this.initialize(img.image44);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1209,427);// helper functions:

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

	// Layer_1
	this.instance = new lib.Bitmap15();
	this.instance.setTransform(-61.15,-40.9,0.4804,0.4804,-2.7218);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.1,-46.4,121.30000000000001,105.3);


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

	// Layer_1
	this.instance = new lib.Bitmap13();
	this.instance.setTransform(-70.3,-67.9,0.5983,0.5983);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.3,-67.9,140.6,135.8);


(lib.Interpolación2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgUAAIABgWIAoAXIgBAWg");
	this.shape.setTransform(-14.2581,16.0902,0.5299,0.5299);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTAAIAAgWIAnAXIAAAWg");
	this.shape_1.setTransform(-29.3861,7.2281,0.5299,0.5299);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ED1925").s().p("AgUAXIAChFIAnAYIgCBFg");
	this.shape_2.setTransform(-14.1124,12.8712,0.5299,0.5299);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#ED1925").s().p("AgVAXIADhFIAnAYIgCBFg");
	this.shape_3.setTransform(-29.3066,3.8898,0.5299,0.5299);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4E5152").s().p("AgiBXQghgkgNgzQgNgyAPgkQAOgkAhAAQAhAAAhAkQAhAkANAyQANAzgPAkQgOAkgiAAQggAAghgkg");
	this.shape_4.setTransform(-22.9348,9.1489,0.5299,0.5299);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0F1013").s().p("AAvBZQAHghgKgoQgNgygggkQghgkgiAAQgLAAgLAGIAegUQAUgLAOAAQAgAAAhAkQAhAkANAzQALAogIAhQgIAggWAMIgmAXQAUgNAHgeg");
	this.shape_5.setTransform(-20.9754,8.2944,0.5299,0.5299);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#404D52").s().p("AALApIgVgMQgFgDgEgHQgDgHAAgGIAAglQAAgHADgCQAFgDAEADIAVAMQAFADAEAHQADAGAAAHIAAAkQAAAHgDADIgEACIgFgCg");
	this.shape_6.setTransform(15.7859,-5.6708,0.5299,0.5299);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#404D52").s().p("AgDAGQgGAAgKgEQgMgEAIgEIAJADQAKADAEAAIAIAAQAEAAAGgCQAMgDgEAMIgPABIgOgCg");
	this.shape_7.setTransform(14.0795,-6.2325,0.5299,0.5299);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#66696A").s().p("AgqA4IgOhsIADgGIBuBBIhbAzg");
	this.shape_8.setTransform(-24.1006,-8.1384,0.5299,0.5299);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0F1013").s().p("AimAHIAdjCIEwC1IgdDCg");
	this.shape_9.setTransform(-20.5239,-1.7931,0.5299,0.5299);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#404D52").s().p("AixAHQACgXAIgzIAViFIFEDCIgUCDQgIA0gDAYg");
	this.shape_10.setTransform(-20.4974,-1.8196,0.5299,0.5299);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#66696A").s().p("AiohTIABgaIAAAAIFPDFIAAAPIgJAHg");
	this.shape_11.setTransform(-22.9216,16.4744,0.5299,0.5299);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0F1013").s().p("AjFhGIAAgaIAtgbIFMDHIAQgKIACABIhEA5g");
	this.shape_12.setTransform(-21.3452,15.7591,0.5299,0.5299);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#516E6C").s().p("AAYgtIgGglIAOgIIAGADIASBoIgIAQIgKAFIgMg5Ig4BhIgZANg");
	this.shape_13.setTransform(-2.8128,0.6178,0.5299,0.5299);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0F1013").s().p("AhBBgIgNhtIAHgOIB/hGIAGACIARBpIgIAPIiABJg");
	this.shape_14.setTransform(-4.0712,1.0153,0.5299,0.5299);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0F1013").s().p("AhNAvQgHgtADgJQAFgTAOgMQAFgFAQgIIBjgzIAYBSIiWB6IgJg3g");
	this.shape_15.setTransform(6.4362,-4.6147,0.5299,0.5299);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#404D52").s().p("AhVA1QgIgzADgKQAGgWAPgMQAGgGARgJIBug4IAcBaIinCJg");
	this.shape_16.setTransform(6.4771,-4.5617,0.5299,0.5299);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#79BAAD").s().p("AgRAFIAWgOIAAAOIgXANgAAHgKIAMgHIgBAPIgLAFg");
	this.shape_17.setTransform(3.9299,3.7044,0.5299,0.5299);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#404D52").s().p("AgXAAIAvgaIgCAaIgtAag");
	this.shape_18.setTransform(3.9299,3.7044,0.5299,0.5299);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#489486").s().p("AhoAdIB4hFIA6hPIAfgTIgBCTIgQAdIivBlg");
	this.shape_19.setTransform(7.1887,1.9028,0.5299,0.5299);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#79BAAD").s().p("Ah2hbIDEhsIApB5IgBCUIgQAdIivBlg");
	this.shape_20.setTransform(6.4468,-1.3162,0.5299,0.5299);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#404D52").s().p("AiiCJIBZg1IAfhQQASgpAUgXQAZgdByg+IAQANIAKgGIAFALQgjAVgFgDIgCgFQgCgCgGABQgbANgdARQg8AkgPAaQgJARgoBrIhlA6g");
	this.shape_21.setTransform(22.1842,-1.9918,0.5299,0.5299);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#404D52").s().p("AhKAAQAVgsA2geQAtgZAPADQAJADAQAjIAWA2IgQAIQgJgBgFgTQgHgfgCgGQgUgphNA6QgaATgKAXQgGALgVBHIgQAJQAYhPAJgSg");
	this.shape_22.setTransform(-4.2169,13.101,0.5299,0.5299);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#52A593").s().p("AiiAiIAMgHIADgEIEiiJIAJAxIALgHIABABIlHC6g");
	this.shape_23.setTransform(21.4159,-7.3171,0.5299,0.5299);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#397468").s().p("AmPCVIF5jUIA3hSIAngVIAEgEIEjiKIAJAxIALgHIARAoQgjAUgFgDIgCgEQgCgCgGABQgbAMgdASQg8AjgQAbQgJAQgoBsIlUDCQgJgBgFgVQgHgfgDgFQgTgqhPA7QgZATgLAYQgFALgVBGIg0AeQACh8ACgkg");
	this.shape_24.setTransform(9.5731,2.9493,0.5299,0.5299);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#52A593").s().p("AmMB+IAfjWQFxjWAVAGIAxB/IEliLIAJAxIALgHIARAoQgjAUgFgDIgCgEQgCgCgGABQgbAMgdASQg8AjgQAbQgJAQgoBsIlUDCQgJgBgFgVQgHgfgDgFQgTgqhPA7QgZATgLAYQgFALgVBGIg0AeQACiQAFgng");
	this.shape_25.setTransform(9.5731,2.9493,0.5299,0.5299);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0F1013").s().p("AgFAAQADgIAFAAQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAQABADgBADQgCAJgFAAQgGAAACgJg");
	this.shape_26.setTransform(-6.1791,19.096,0.5299,0.5299);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0F1013").s().p("AgFAAQACgIAFAAQAGAAgCAIQgBADgCADQgDADgBAAQgGAAACgJg");
	this.shape_27.setTransform(-5.5891,17.268,0.5299,0.5299);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0F1013").s().p("AgFAHQgBgDABgEQACgIAFAAQAGAAgCAIQgDAJgFAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAg");
	this.shape_28.setTransform(-4.3758,15.9434,0.5299,0.5299);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0F1013").s().p("AgFAAQABgDADgDQABgCACAAQAGAAgCAIQgBADgCAEQgDACgBAAQgGAAACgJg");
	this.shape_29.setTransform(-3.1183,15.7579,0.5299,0.5299);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0F1013").s().p("AgFAAQABgCADgDQABgDACAAQAGAAgCAIQgCAJgFAAQgGAAACgJg");
	this.shape_30.setTransform(-2.4489,16.8839,0.5299,0.5299);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0F1013").s().p("AgFAHQgBgDABgEQACgIAFAAQAGAAgCAIQgDAJgFAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAg");
	this.shape_31.setTransform(-2.7067,18.6721,0.5299,0.5299);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0F1013").s().p("AgFAAQADgIAFAAQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAQABAEgBACQgCAJgFAAQgGAAACgJg");
	this.shape_32.setTransform(-3.6887,20.3412,0.5299,0.5299);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0F1013").s().p("AgFAGQgBgCABgEQAAgDADgDQACgCACAAQAGAAgCAIQgDAJgFAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBgBAAgBg");
	this.shape_33.setTransform(-4.9595,21.0963,0.5299,0.5299);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0F1013").s().p("AgFAAQADgIAEAAQAGAAgCAIQgDAJgEAAQgGAAACgJg");
	this.shape_34.setTransform(-6.0722,20.6591,0.5299,0.5299);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0F1013").s().p("AgQATQgDgIACgLQADgKAHgIQAHgIAHAAQAHAAADAIQADAIgCAKQgDALgHAIQgIAIgGAAQgHAAgDgIg");
	this.shape_35.setTransform(-4.3369,18.4999,0.5299,0.5299);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#9CABA8").s().p("AgmBNQgLgLgDgTQgDgVAGgXQAJgiAXgYQAVgYAXAAIABAAQARAGAGAWQAGAWgHAdQgJAggWAYQgVAYgWAAQgHAAgHgDg");
	this.shape_36.setTransform(-4.363,18.4205,0.5299,0.5299);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#CCD3D2").s().p("Ag1A7QgKgZAJgiQAJgiAXgYQAWgYAWAAQAWAAAKAYQAKAYgJAiQgJAigWAZQgXAYgVAAQgXAAgKgYg");
	this.shape_37.setTransform(-4.0955,18.5794,0.5299,0.5299);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#4E5152").s().p("AhOBXQgPgkANgzQANgyAhgkQAhgkAhAAQAhAAAPAkQAOAkgNAyQgNAzghAkQghAkghAAQghAAgOgkg");
	this.shape_38.setTransform(-4.2544,18.394,0.5299,0.5299);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#0F1013").s().p("Ag5BtQgWgMgIggQgIghALgoQANgyAhgkQAhgkAgAAQAOAAAUALIAeATQgLgGgLAAQgiAAghAkQggAkgNAyQgKApAHAgQAHAeATAMg");
	this.shape_39.setTransform(-6.2169,17.5462,0.5299,0.5299);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#0F1013").s().p("AgFAGQgBgCABgEQABgDADgDQABgCACAAQAGAAgCAIQgBADgCADQgDADgBAAQgBAAgBAAQAAAAAAgBQgBAAAAAAQgBgBAAgBg");
	this.shape_40.setTransform(24.9176,1.3324,0.5299,0.5299);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#0F1013").s().p("AgFAGQgBgDABgDQABgCACgDQACgDACAAQAGAAgCAIQgDAJgFAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAgBg");
	this.shape_41.setTransform(25.5075,-0.4823,0.5299,0.5299);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#0F1013").s().p("AgFAAQACgIAFAAQAGAAgCAIQgBAEgCADQgDACgBAAQgGAAACgJg");
	this.shape_42.setTransform(26.7059,-1.8335,0.5299,0.5299);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#0F1013").s().p("AgFAGQgBgDABgDQACgIAFAAQAGAAgCAIQgDAJgFAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAgBg");
	this.shape_43.setTransform(27.9722,-2.0057,0.5299,0.5299);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#0F1013").s().p("AgFAAQADgIAFAAQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAQABAEgBACQgCAJgFAAQgGAAACgJg");
	this.shape_44.setTransform(28.6328,-0.8797,0.5299,0.5299);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#0F1013").s().p("AgFAAQACgIAFAAQAGAAgCAIQgBAEgCADQgDACgBAAQgGAAACgJg");
	this.shape_45.setTransform(28.375,0.9218,0.5299,0.5299);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#0F1013").s().p("AgFAAQABgDADgDQABgCACAAQAGAAgCAIQgBAEgCADQgDACgBAAQgGAAACgJg");
	this.shape_46.setTransform(27.4018,2.5909,0.5299,0.5299);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#0F1013").s().p("AgFAAQADgIAFAAQAAAAABAAQAAAAABABQAAAAAAAAQABABAAABQABADgBACQgCAJgFAAQgGAAACgJg");
	this.shape_47.setTransform(26.116,3.3327,0.5299,0.5299);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#0F1013").s().p("AgFAAQADgIAEAAQABAAABAAQAAAAABAAQAAABAAAAQABABAAABQABACgBADQAAAEgDADQgDACgBAAQgGAAACgJg");
	this.shape_48.setTransform(25.0041,2.8955,0.5299,0.5299);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#0F1013").s().p("AgRATQgDgIADgLQADgKAIgIQAGgHAHAAQAHAAADAHQAEAIgEAKQgCALgIAIQgGAIgHAAQgHAAgEgIg");
	this.shape_49.setTransform(26.7527,0.7363,0.5299,0.5299);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#9CABA8").s().p("AgmBNQgLgLgDgTQgDgUAGgYQAJghAXgZQAVgYAXAAIABAAQARAGAGAWQAGAWgHAdQgJAhgWAXQgVAYgWAAQgIAAgGgDg");
	this.shape_50.setTransform(26.7174,0.6436,0.5299,0.5299);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#CCD3D2").s().p("Ag1A7QgKgYAJgjQAJghAWgZQAWgYAWAAQAXAAAKAYQAKAZgJAhQgJAjgXAYQgWAYgWAAQgWAAgKgYg");
	this.shape_51.setTransform(26.9977,0.8026,0.5299,0.5299);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#4E5152").s().p("AhPBXQgOgkANgzQANgyAhgkQAhgkAhAAQAhAAAPAkQAOAkgNAyQgNAzghAkQghAkggAAQgiAAgPgkg");
	this.shape_52.setTransform(26.8322,0.6436,0.5299,0.5299);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#0F1013").s().p("Ag5BtQgWgMgIggQgHghAKgoQANgzAhgkQAhgkAgAAQAOAAAUALIAeAUQgKgGgMAAQgiAAghAkQggAkgNAyQgKAoAHAhQAHAeAVANg");
	this.shape_53.setTransform(24.8684,-0.2042,0.5299,0.5299);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#0F1013").s().p("AgSApIAkglIgEgLIgjAUIgTgUIBRgvIgBAfIgNAIIABARIgvA1g");
	this.shape_54.setTransform(29.6819,-4.0451,0.5299,0.5299);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#0F1013").s().p("AmsEOIBmg8QAVhHAGgKQAKgZAagSQBOg7AUAqQACAFAHAfQAFAVAJAAIFUjAQAphtAJgQQAQgbA7gjQAegSAagMQAGgCACADIACAEQAFADAjgVIgiAtIgDAhIi5CmIAfgEIgFARIgkAAIksCsIhEBHIAAgKIA5g5Ig2AcIicBGIgcASIAkgDIgFAQIgvgFIg8Ajg");
	this.shape_55.setTransform(8.2352,6.6187,0.5299,0.5299);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#4F9484").s().p("AjMgaIAAgBQACiEADgjIGUDxIgWCJIgRALg");
	this.shape_56.setTransform(-20.5901,9.4403,0.5299,0.5299);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#7BB7AA").s().p("AgUAuIgDAAIjRh5ID3hCIDaB9IjZCeg");
	this.shape_57.setTransform(12.0105,-15.2387,0.5299,0.5299);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#90C8BC").s().p("Ao6DGIAAgBQACiOAFgpIAgjVQFxjWAWAGIAAABICMBRIDIheIFyDWIgoBMIm7FkIkdDBg");
	this.shape_58.setTransform(-1.2231,-2.4819,0.5299,0.5299);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.8,-24.7,63.7,49.599999999999994);


(lib.Path_11_0 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#8C856A","#82826A","#687D6B","#47756C"],[0,0.212,0.573,0.929],-2.4,-1.6,0.3,3.1).s().p("AgVgfIArAZIAAANIgrAZg");
	this.shape.setTransform(2.175,3.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_11_0, new cjs.Rectangle(0,0,4.4,6.4), null);


(lib.Path_11 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#8C856A","#82826A","#687D6B","#47756C"],[0,0.212,0.573,0.929],2.5,3.1,-0.2,-1.6).s().p("AgVAHIAAgNIArgZIAAA/g");
	this.shape.setTransform(2.15,3.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_11, new cjs.Rectangle(0,0,4.3,6.4), null);


(lib.Path_10_2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#182B29","#11231F","#0F211D"],[0,0.8,0.929],-0.5,10.5,0.1,-1.1).s().p("AgRgpIAqgZIgHBsIgqAZg");
	this.shape.setTransform(2.5,6.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_10_2, new cjs.Rectangle(0,0,5,13.4), null);


(lib.Path_10_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#182B29","#11231F","#0F211D"],[0,0.8,0.929],0.6,-1.1,0,10.5).s().p("AgRAqIgHhsIAqAZIAHBsg");
	this.shape.setTransform(2.475,6.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_10_1, new cjs.Rectangle(0,0,5,13.4), null);


(lib.Path_10_0 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#182B29","#11231F","#0F211D"],[0,0.8,0.929],-0.5,10.5,0.1,-1.1).s().p("AgRgpIAqgZIgHBsIgqAZg");
	this.shape.setTransform(2.5,6.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_10_0, new cjs.Rectangle(0,0,5,13.4), null);


(lib.Path_10 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#182B29","#11231F","#0F211D"],[0,0.8,0.929],0.7,-1.1,0,10.5).s().p("AgRAqIgHhsIAqAZIAHBsg");
	this.shape.setTransform(2.5,6.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_10, new cjs.Rectangle(0,0,5,13.4), null);


(lib.Path_8 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#918B86").s().p("Ak/A1IH/kKICAEdIg4BzIkvAbg");
	this.shape.setTransform(31.95,21.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8, new cjs.Rectangle(0,0,63.9,42.9), null);


(lib.Path_7 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#C99086").s().p("AhOgtIBQAcIBNgcIgtA2IgZgOIhXAyg");
	this.shape.setTransform(7.875,4.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7, new cjs.Rectangle(0,0,15.8,9.1), null);


(lib.Path_6_5 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#182B29","#11231F","#0F211D"],[0,0.8,0.929],-0.3,7.4,0.1,-0.7).s().p("AgIggIAYgPIgHBQIgYAPg");
	this.shape.setTransform(1.575,4.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_5, new cjs.Rectangle(0,0,3.2,9.5), null);


(lib.Path_6_4 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#C99086").s().p("AhOgtIBQAcIBNgcIgtA2IgZgOIhXAyg");
	this.shape.setTransform(7.875,4.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_4, new cjs.Rectangle(0,0,15.8,9.1), null);


(lib.Path_6_3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#182B29","#11231F","#0F211D"],[0,0.8,0.929],-0.3,7.4,0.1,-0.7).s().p("AgIggIAYgPIgHBQIgYAPg");
	this.shape.setTransform(1.575,4.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_3, new cjs.Rectangle(0,0,3.2,9.5), null);


(lib.Path_6_2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#182B29","#11231F","#0F211D"],[0,0.8,0.929],0.4,-0.7,0,7.4).s().p("AgIAhIgHhQIAYAPIAHBQg");
	this.shape.setTransform(1.575,4.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_2, new cjs.Rectangle(0,0,3.2,9.5), null);


(lib.Path_6_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#182B29","#11231F","#0F211D"],[0,0.8,0.929],0.4,-0.7,0,7.4).s().p("AgIAhIgHhQIAYAPIAGBQg");
	this.shape.setTransform(1.55,4.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_1, new cjs.Rectangle(0,0,3.1,9.5), null);


(lib.Path_6_0 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#182B29","#11231F","#0F211D"],[0,0.8,0.929],0.4,-0.7,0,7.4).s().p("AgIAhIgHhQIAYAPIAHBQg");
	this.shape.setTransform(1.575,4.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_0, new cjs.Rectangle(0,0,3.2,9.5), null);


(lib.Path_6 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#182B29","#11231F","#0F211D"],[0,0.8,0.929],0.4,-0.7,0,7.4).s().p("AgIAhIgHhQIAYAPIAGBQg");
	this.shape.setTransform(1.55,4.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6, new cjs.Rectangle(0,0,3.1,9.5), null);


(lib.Path_5 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#C99086").s().p("AhOgtIBQAcIBNgcIgtA2IgZgOIhXAyg");
	this.shape.setTransform(7.875,4.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0,0,15.8,9.1), null);


(lib.Path_4_8 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#918B86").s().p("AgiACIAzgaIASgBIgIAxIgUACg");
	this.shape.setTransform(3.45,2.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_8, new cjs.Rectangle(0,0,6.9,5.2), null);


(lib.Path_4_7 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#918B86").s().p("AgiACIA0gaIARgBIgIAxIgTACg");
	this.shape.setTransform(3.45,2.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_7, new cjs.Rectangle(0,0,6.9,5.2), null);


(lib.Path_4_6 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#918B86").s().p("AgiACIA0gaIARgBIgIAxIgUACg");
	this.shape.setTransform(3.45,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_6, new cjs.Rectangle(0,0,6.9,5.2), null);


(lib.Path_4_5 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#D1D1D1").s().p("AhVB/ICyhoIjhiCIANgZID7CRIjOB4g");
	this.shape.setTransform(13.25,13.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_5, new cjs.Rectangle(0,0,26.5,26.6), null);


(lib.Path_4_4 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#182B29","#11231F","#0F211D"],[0,0.8,0.929],0.6,-0.9,0,9.3).s().p("AgKAqIgHhlIAdASIAGBkg");
	this.shape.setTransform(1.8,5.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_4, new cjs.Rectangle(0,0,3.6,11.9), null);


(lib.Path_4_3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#182B29","#11231F","#0F211D"],[0,0.8,0.929],0.5,-0.9,0,8.3).s().p("AAAAwIgHhlIAIAGIAHBlg");
	this.shape.setTransform(0.8,5.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_3, new cjs.Rectangle(0,0,1.6,10.8), null);


(lib.Path_4_2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#182B29","#11231F","#0F211D"],[0,0.8,0.929],-0.3,6.7,0.1,-0.7).s().p("AAAglIAIgFIgHBPIgIAGg");
	this.shape.setTransform(0.8,4.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_2, new cjs.Rectangle(0,0,1.6,8.6), null);


(lib.Path_4_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#182B29","#11231F","#0F211D"],[0,0.8,0.929],-0.3,6.7,0.1,-0.7).s().p("AAAglIAIgFIgHBQIgIAFg");
	this.shape.setTransform(0.8,4.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_1, new cjs.Rectangle(0,0,1.6,8.6), null);


(lib.Path_4_0 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#182B29","#11231F","#0F211D"],[0,0.8,0.929],0.6,-0.9,0,9.3).s().p("AgKAqIgHhlIAdASIAGBkg");
	this.shape.setTransform(1.8,5.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_0, new cjs.Rectangle(0,0,3.6,11.9), null);


(lib.Path_4 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#182B29","#11231F","#0F211D"],[0,0.8,0.929],0.5,-0.9,0,8.3).s().p("AAAAwIgHhlIAIAGIAHBlg");
	this.shape.setTransform(0.8,5.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0,0,1.6,10.8), null);


(lib.Path_1_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#273D3D").s().p("AgCgBIACgDIACABIABABIgFAGg");
	this.shape.setTransform(0.3,0.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_1, new cjs.Rectangle(0,0,0.6,0.9), null);


(lib.Path_1_0 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#D1D1D1").s().p("AhOARIBOgtIBPAtIiIAMg");
	this.shape.setTransform(7.875,2.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_0, new cjs.Rectangle(0,0,15.8,5.8), null);


(lib.Path_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#D1D1D1").s().p("AhOARIBOgtIBPAtIiIAMg");
	this.shape.setTransform(7.875,2.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,15.8,5.8), null);


(lib.Path_0 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#273D3D").s().p("AgEADIAHgHIACABIAAAEIgFAEg");
	this.shape.setTransform(0.475,0.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0,0,1,1.1), null);


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
	this.shape.graphics.f("#D1D1D1").s().p("AhCAKIBfgxIAmAsIg5AhIgYACg");
	this.shape.setTransform(6.675,4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,13.4,8), null);


(lib.CompoundPath_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#918B86").s().p("AgfAUIAAACQgCABgFAAIgBAAQgFgEgBgCIAAgBIgBgBIgBAAQgCAAgFgFIABgBQgDAAgEgFIABgBIgFgEIAEgCIgCAAQABgFACgBIABAAIgBgGIADABIAAgBIAAgCQgBgCAEgEIAAABIAHABIACACIABgFIAGAEIABAAQAAgCAGAAIABADIABAAIAAgEIAHAEIABABIABAAIABgEIAEACIABABIACABIABgBIAAgCIAGADIABgBQABgBAFABIAAAEIABAAIADgBIABADIADACIAAAAIACACIADACIAEADIAHADIACAAIAWABIAHgBIABAAIACgBQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAABIAAACIABABQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBgBIgBAAIgCAAIgEAAIgRAAIgEABIgFADIgDACIgBAEQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAgBABIgDACIAAACIgCgBIgBABIABADQgFAAgCgBIgBgBQgBACgDACIgCgDIgBgBIgBACIgDACIgDgEIgBAAIAAABQgBACgEABIgDgEIgBAAIABAEQgGgBgBgCIgBAAIgDAEQgEgDgBgCgAAUAKIgEACIABAAIABAEIACgCIACgDIAAgBIgDgBgAASAIIAJgFIADgBIgLAAIgCAEIgBAAgAANgEIABABIADADIABgBIAGAAIgCgBIgJgDgAAMgIIgBgCIgCgBIAAACIAAAAIADABIAAAAg");
	this.shape.setTransform(6.5083,2.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_1, new cjs.Rectangle(0,0,13,5.1), null);


(lib.CompoundPath_0 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#918B86").s().p("AgfAUIAAACQgBABgGAAIgBAAQgFgEgBgCIAAgBIgBgBIAAAAIgIgFIABgBQgCgBgFgEIABgBIgFgEIAEgCIgCAAQABgFACgBIACAAIgCgGIADABIABgCIgBgBQgBgCAEgEIABABQAFAAABABIACACQAAgCABgDQAFACACACIAAAAQABgCAFAAIABADIABAAIAAgEIAIAEIAAAAIABAAIABgDIAFACIAAAAIABABIABABIABgBIAAgBIAAgCIAHAEIAAgBQABgBAFAAIABAFIADgBIACADIABABIAAAAIABABIABAAIACABIACADIAEADIAHADIACAAIANAAIAJABIAIgBIAAgBIACAAIADABIABACIAAACQAAAAgBAAQAAAAgBAAQAAAAgBgBQgBAAAAAAIgPAAIgJAAIgFABIgFACIgCADIgBAEIgFAFIAAABIgCAAIgCABIACADQgGAAgCgBIgBgBQAAACgEABIgBgBIgBgBIgBgBIgBABIAAABIgDACIgDgEIgBAAIAAABQAAACgFABIgDgEIAAAAIABADQgGAAgCgCIgBAAQAAACgDACIgFgFgAATAJIABABIgEACIABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABIADgCIABgDIAAgCIgBgBIgCABgAASAIIAHgEIACgBIADgCIgLAAQAAAFgCAAIgBAAgAAYgBIgKgEIgBABIABAAIADADIAHAAgAAKgKIgBABIADABIAAAAIAAgCIgDgCg");
	this.shape.setTransform(6.525,2.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_0, new cjs.Rectangle(0,0,13.1,5.1), null);


(lib.CompoundPath = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#918B86").s().p("AgfAUIAAACQgCABgFAAIgBABQgFgFAAgCIAAgBIgKgGIACgBQgDAAgFgFIABgBIgFgEIAEgBIgBgBQAAgFACgBIABAAIAAgBIgBgFIADABIABgCIgBgBQAAgCADgDIABAAQAFAAACABIACACQgBgCACgDIAGAEIAAAAQABgCAFAAIABADIACAAIAAgEIAGAEIABAAIABAAIABgDIAEACIABAAIACABIABAAIAAgBIABgBIAFADIABgBQABgBAFAAIABAFIADgBIACAEIABAAIAAAAIABAAIABABIABABIAEADIADADIAJADIAbAAIAFgBQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAAAIABACIAAACQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBgBgBAAIgBgBIgBAAIgEABIgIAAIgJgBIAAAAIgFACIgFADIgCACIgBAEIgDADIgCACIAAABIgCAAIgCABIACADQgFAAgCgBIgBgBIgFAEIgBgCIAAgBIgCAAIgBABIAAAAIgDACIgDgDIgBAAIAAAAQAAABgFACIgDgEIAAAAIAAAEQgFgBgCgBIgBgBQAAACgDACIgFgFgAAUAJIABAAIgEADIAAAAQAAAAABABQAAAAAAABQAAAAAAABQABAAAAABIACgCQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAIAAgCIgBAAIgBAAgAASAGIgBAAIACACIALgHIgKAAQAAABgBABQAAABAAABQAAAAgBABQAAAAAAAAgAAYgBIgHgDIgDgBIgBACIABAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABAAIAGAAgAAKgJIACABIAAgCIgCgBg");
	this.shape.setTransform(6.5,2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath, new cjs.Rectangle(0,0,13,5), null);


(lib.Path_23 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#EDEDED").s().p("AtBQjQg+gFg5gTIgtgRQkchlj8jEQhOg9hCg/IgzgzQhMhTgGiVQgEhVAZibQAcCiFHDgQCkBwCeBQQB4A8B0gpQA6gVAighIFAkYQghBJgIA+QgEAaADAPQAEAYATAGQARAFAagOQAKgFAbgTQAkgaBCg9QCeiRCNhYQCAhRB9gHQgKAXgkA8QgfAzgKAiQgCAFAGACQBLATBcgfQBAgWBag2QBEgpBTg/ICShvQAqghCqiKQCChpBVg9ICchlQBeg8A1g0QBKhJAShVQABgHgFgBQglgFg4ATQhFAXgXACQAPgjAugoQA/g3AJgLQAXgbAGgfQAGgigUgaQgTgbgwgOQBDgOBEgWQAjgMAUgIQBMgNAeDEQAPBjAABlQADBxhQBdQgZAdgeAYMghpAVgQiNBminAAQgZAAgagCg");
	this.shape.setTransform(181.1586,106.1477);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_23, new cjs.Rectangle(0,0,362.3,212.3), null);


(lib.Path_16 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#C6C6C6").p("AAAoAIAAQB");
	this.shape.setTransform(0.5,51.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_16, new cjs.Rectangle(-0.5,-1,2,104.7), null);


(lib.Path_10_3 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCE6ED").s().p("AgRFrQnJieiUkrIEkluQglBjAFBqQAFBsAxBaQAsBRBVA7QBKA1BjAhQBZAdBlAMQBiALBhgHQCNgLBnhCIjVFDQjHgSjkhPg");
	this.shape_1.setTransform(62.325,46.05);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_10_3, new cjs.Rectangle(0,0,124.7,92.1), null);


(lib.Path_3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#C6C6C6").p("AhnjqQA4AdA0BJQBqCSgLDh");
	this.shape.setTransform(10.5625,23.8622);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(-0.8,-0.6,22.5,49.4), null);


(lib.Path_2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#C6C6C6").p("AiIisQgMAHgGANQgMAaAeAeQBGgBBGAiQCQBEALCt");
	this.shape.setTransform(16.3433,17.7408);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(-0.5,-2.3,33.7,38.9), null);


(lib.Path_1_0_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#C6C6C6").p("AmaEHIM1oN");
	this.shape_1.setTransform(41.35,26.775);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_0_1, new cjs.Rectangle(-0.7,-0.5,84.2,54.6), null);


(lib.Path_1_2 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCE6ED").s().p("AgbivQAdguA3g6QANAvAiAbQArAjBVgHQAngDAygPIAABKIqBGRg");
	this.shape_1.setTransform(32.1,28.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_2, new cjs.Rectangle(0,0,64.2,56.1), null);


(lib.Path_0_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCE6ED").s().p("Ak1CxIAhgOQBvgzBAguQBXg/BaiIQAlg3AXgyQBIAJA6AfQAdAQAPANIprGYg");
	this.shape_1.setTransform(30.975,23.875);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_0_1, new cjs.Rectangle(0,0,62,47.8), null);


(lib.Path_9 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A4A3A3").s().p("AsbQJQg9gFg6gTIgtgRQkbhlkei3QhZg5hPg6Ig9gvQhahHgVgwQgRgnAZgjIA9g+QAngpAGgpQAdCiFICPQCkBICfAnQB4A9B0gpQA6gVAighIJgoSQA8g3ANgfIFKnPIAyhOQA+hUA4ghIBOhCQBhhOBmg8QFGjADzA6QB6AaBvgLQA4gGAfgKIBWEcQA/gqA/AyQAfAZATAiQAvBDhoBgQggAegrAdMgh1AVlQiNBoioAAQgYAAgagDg");
	this.shape_1.setTransform(187.6147,103.5648);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_9, new cjs.Rectangle(0.1,0,375.09999999999997,207.2), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgCAvIgMgBIgQgEIgPgIQgPgLgCgDQgEgDgKgNQgFgKgCgFQgCgFgDgKIgBgVIACAJQADAMAGAMIAJAOIANANIAQAMIAOAGIAPAEIATADIAKAAIAUgBIA1gIIgVAIIgOAFIgSAEQgEABgPABIgLAAg");
	this.shape.setTransform(10.4159,-8.2476,0.1801,0.1801);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AEDDUIhIgSQgTgGg7gVQgYgHg6gaIgpgSIg+ggIgTgMIhxhKQgLgIgWgTIgfgbIg0g1IgWgaIgggtIgeg6IArAwIASARIBmBVIAhAXIBqBDIAmAVIAnAVIAnAVIAnATIAoATQANAHAaALIBKAgIB8AzIAtASIAmARg");
	this.shape_1.setTransform(-6.2314,-9.8548,0.1801,0.1801);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C1A027").s().p("AhMBjQgIgEgNgCQgZgEgYALQgNgKgJgTQgRgkAagkIAPgBQAVgDAZgKQACgXAYgVQAMgLAMgGIAvgYQA3gXAwACIAcAIQAeAOAJAnIAEAQQAEAUgCATQgHA9hFAhQgaAQgjAKQgZAHgVAAQgoAAgcgXg");
	this.shape_2.setTransform(1.4232,2.5118,0.1801,0.1801);

	this.instance = new lib.Path_1_0_1();
	this.instance.setTransform(11.55,5.5,0.1801,0.1801,0,0,0,42.5,26.1);
	this.instance.compositeOperation = "multiply";

	this.instance_1 = new lib.Path_2();
	this.instance_1.setTransform(1.3,6.9,0.1801,0.1801,0,0,0,17.5,16.4);
	this.instance_1.compositeOperation = "multiply";

	this.instance_2 = new lib.Path_3();
	this.instance_2.setTransform(27.3,-8.8,0.1801,0.1801,0,0,0,12.8,22.5);
	this.instance_2.compositeOperation = "multiply";

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DDA533").s().p("AlSDFIAUgQIBJg4QAmgbBFgtIC9hxQAZgPAngUQA4geA7gcIBUgkIAggNIgbAXQggAZgpAeQgyAjg4AlQgfAVgeASIjBBtQg5Aeg5AcQgzAXgiANIgXAKIgJADg");
	this.shape_3.setTransform(10.7761,3.8035,0.1801,0.1801);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DDA533").s().p("ArDG2IBshLIB/hYICQhfICahlIFAjLICdhhICThZICFhPIDJhzIBNgqImEEQIiQBfIiaBlIlADLIidBhIiTBZIiFBPIhxBBIhYAyIg4AfIgVALg");
	this.shape_4.setTransform(13.2655,-2.0173,0.1801,0.1801);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ah9gMIAAiKID7CXIAACWg");
	this.shape_5.setTransform(-25.3699,15.9224,0.1801,0.1801);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EDEDED").s().p("AghBeQgYgJgGgiQgHghAOgmQAOgnAbgVQAZgVAYAIQAXAJAHAiQAHAhgOAmQgOAmgbAWQgSAPgRAAQgHAAgHgCg");
	this.shape_6.setTransform(24.6279,-2.0173,0.1801,0.1801);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C6C6C6").s().p("AgIAKQgEgEAAgGQAAgEADgEQAEgEAFgBQgGAJAHAIQAFAGAHgCQgEAGgHAAIgBAAQgFAAgEgEg");
	this.shape_7.setTransform(23.3535,-3.9498,0.1801,0.1801);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgCAFQgGgFAFgHQADAAAEADQADADAAAEIgBAEIgDABQgDAAgCgDg");
	this.shape_8.setTransform(23.4839,-4.0433,0.1801,0.1801);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#DADADA").s().p("AgJAKQgEgEgBgGQAAgFAEgEQAEgEAGgBQAFAAAFAEQAEAEAAAGQABAFgFAFQgEAEgGAAIAAABQgFAAgEgFg");
	this.shape_9.setTransform(23.3765,-3.9543,0.1801,0.1801);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C6C6C6").s().p("AgIAKQgEgEAAgGQgBgEAEgEQADgEAGgBQgGAKAHAHQAFAGAHgCQgEAGgHAAIgBAAQgFAAgEgEg");
	this.shape_10.setTransform(22.6778,-2.6624,0.1801,0.1801);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgCAGQgHgGAGgHQADAAADADQADADAAAEIAAAEIgDABQgDAAgCgCg");
	this.shape_11.setTransform(22.8012,-2.7509,0.1801,0.1801);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DADADA").s().p("AgJAKQgEgEAAgGQgBgFAFgEQAEgEAFgBQAGAAAEAFQAEAEABAFQAAAGgEAEQgEAEgGAAIgBABQgFAAgEgFg");
	this.shape_12.setTransform(22.7004,-2.6669,0.1801,0.1801);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C6C6C6").s().p("AgIALQgEgEAAgHQgBgEAEgEQADgFAGgBQgGALAHAHQAFAFAHgBQgEAGgIAAQgFAAgEgDg");
	this.shape_13.setTransform(22.3447,-1.236,0.1801,0.1801);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgCAGQgHgGAGgHQADAAAEADQADADAAAEIgBAEIgEABQgCAAgCgCg");
	this.shape_14.setTransform(22.4644,-1.3263,0.1801,0.1801);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#DADADA").s().p("AgJALQgEgEAAgHQgBgFAFgEQAEgEAFAAQAGgBAEAFQAEAEABAFQAAAGgEAEQgFAEgGABQgFAAgEgEg");
	this.shape_15.setTransform(22.3673,-1.2364,0.1801,0.1801);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C6C6C6").s().p("AgIAKQgEgEAAgGQAAgMAMgBQgGAJAHAIQAFAGAHgCQgEAGgHAAIgBAAQgFAAgEgEg");
	this.shape_16.setTransform(22.6063,0.1734,0.1801,0.1801);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgCAGQgDgDAAgDQgBgEADgDQADAAADAEQADADABADIgBAFIgDAAQgDAAgCgCg");
	this.shape_17.setTransform(22.7361,0.078,0.1801,0.1801);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#DADADA").s().p("AgJAKQgEgEgBgGQAAgFAEgEQAEgEAGgBQAFAAAFAEQAEAEAAAGQABAFgFAFQgEAEgGAAIAAABQgFAAgEgFg");
	this.shape_18.setTransform(22.6293,0.1689,0.1801,0.1801);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C6C6C6").s().p("AgIAKQgEgEAAgGQgBgEAEgEQADgEAGgBQgGAKAHAHQAFAGAHgCQgEAGgHAAIgBAAQgFAAgEgEg");
	this.shape_19.setTransform(23.479,0.9927,0.1801,0.1801);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgCAFQgHgFAGgHQAJAAABAKIgBAEIgDABQgDAAgCgDg");
	this.shape_20.setTransform(23.6054,0.9037,0.1801,0.1801);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#DADADA").s().p("AgJAKQgEgEAAgGQgBgFAFgEQAEgEAFgBQAGAAAEAFQAEAEABAFQAAAGgEAEQgEAEgGAAIgBABQgFAAgEgFg");
	this.shape_21.setTransform(23.5016,0.9882,0.1801,0.1801);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C6C6C6").s().p("AgIALQgEgEAAgGQgBgFAEgEQADgFAGgBQgFALAGAHQAFAFAHgBQgEAHgHgBQgFAAgFgDg");
	this.shape_22.setTransform(24.6494,0.8707,0.1801,0.1801);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgCAGQgDgDAAgDQgBgEADgDQAJAAABAKIgBAFIgDAAQgDAAgCgCg");
	this.shape_23.setTransform(24.7797,0.7802,0.1801,0.1801);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#DADADA").s().p("AgJALQgEgEAAgGQgBgFAFgFQAEgEAFAAQAGgBAEAFQAEAEABAFQAAAGgEAEQgEAEgGABQgFAAgFgEg");
	this.shape_24.setTransform(24.672,0.8702,0.1801,0.1801);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#C6C6C6").s().p("AgIAKQgEgDAAgHQgBgEAEgEQADgFAGAAQgFAKAGAHQAFAGAHgCQgEAGgHABQgFAAgFgFg");
	this.shape_25.setTransform(25.7747,-0.0116,0.1801,0.1801);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgCAFQgDgCAAgDQgBgEADgDQADAAADADQADADAAADIAAAFIgEABQgCAAgCgDg");
	this.shape_26.setTransform(25.9021,-0.1001,0.1801,0.1801);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#DADADA").s().p("AgJAKQgEgDAAgHQgBgEAFgFQAEgEAFAAQAGAAAEADQAEAEABAGQAAAGgEAEQgEAEgGABQgFAAgFgFg");
	this.shape_27.setTransform(25.7973,-0.0116,0.1801,0.1801);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#C6C6C6").s().p("AgIAKQgEgEgBgGQAAgEAEgEQAEgEAFgBQgGAJAHAIQAFAGAHgCQgDAGgJAAIgBAAQgEAAgEgEg");
	this.shape_28.setTransform(26.392,-1.213,0.1801,0.1801);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgCAFQgGgFAFgHQADAAAEADQADADAAAEIgBAEIgDABQgDAAgCgDg");
	this.shape_29.setTransform(26.5178,-1.3065,0.1801,0.1801);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#DADADA").s().p("AgJAKQgEgEgBgGQAAgFAFgEQAEgEAFgBQAGAAAEAEQAEAEAAAGQABAFgFAFQgEAEgGAAIAAABQgFAAgEgFg");
	this.shape_30.setTransform(26.4104,-1.2175,0.1801,0.1801);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#C6C6C6").s().p("AgIAKQgEgEAAgGQAAgEADgEQAEgEAFgBQgGAJAHAIQAFAGAHgCQgEAGgHAAIgBAAQgFAAgEgEg");
	this.shape_31.setTransform(26.7476,-2.4644,0.1801,0.1801);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgCAFQgGgFAFgHQADAAAEADQADADAAAEIgBAEIgDABQgDAAgCgDg");
	this.shape_32.setTransform(26.8756,-2.5533,0.1801,0.1801);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#DADADA").s().p("AgJAKQgEgEgBgGQAAgFAFgEQAEgEAFgBQAGAAAEAFQAEAEAAAFQABAGgFAEQgEAEgGAAIAAABQgFAAgEgFg");
	this.shape_33.setTransform(26.7705,-2.4689,0.1801,0.1801);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#C6C6C6").s().p("AgIAKQgEgEAAgGQAAgEADgEQAEgEAFgBQgGAJAHAIQAFAGAHgCQgEAGgHAAIgBAAQgFAAgEgEg");
	this.shape_34.setTransform(26.5675,-3.9858,0.1801,0.1801);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgCAFQgGgFAFgHQADAAAEADQADADAAADIgBAFIgDABQgDAAgCgDg");
	this.shape_35.setTransform(26.6956,-4.0793,0.1801,0.1801);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#DADADA").s().p("AgJAKQgEgEgBgGQAAgFAEgEQAEgEAGgBQAFAAAFAEQAEAEAAAGQABAFgFAFQgEAEgGAAIAAABQgFAAgEgFg");
	this.shape_36.setTransform(26.5905,-3.9903,0.1801,0.1801);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#C6C6C6").s().p("AgIAKQgEgDAAgHQgBgEAEgEQADgFAGAAQgFAKAGAHQAFAGAHgCQgEAGgIABQgFAAgEgFg");
	this.shape_37.setTransform(25.7117,-4.9721,0.1801,0.1801);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgCAFQgHgFAGgHQADAAAEADQADADAAADIgBAFIgDABQgDAAgCgDg");
	this.shape_38.setTransform(25.8314,-5.0606,0.1801,0.1801);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#DADADA").s().p("AgJALQgEgEAAgGQgBgFAFgFQAEgEAFAAQAGgBAEAFQAEAEABAFQAAAGgEAEQgFAEgGABQgFAAgEgEg");
	this.shape_39.setTransform(25.7343,-4.9725,0.1801,0.1801);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#C6C6C6").s().p("AgIAKQgEgEAAgFQAAgFADgEQAEgEAFgCQgFAKAGAIQAFAFAHgBQgEAGgHABQgFgBgFgEg");
	this.shape_40.setTransform(24.4789,-4.846,0.1801,0.1801);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgCAGQgDgDAAgDQgBgEADgDQAJAAABAKIgBAEIgEABQgCAAgCgCg");
	this.shape_41.setTransform(24.6087,-4.9364,0.1801,0.1801);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#DADADA").s().p("AgJALQgEgEAAgGQgBgFAFgFQAEgEAFAAQAGgBAEAFQAEAEABAFQAAAGgEAEQgEAEgGABQgFAAgFgEg");
	this.shape_42.setTransform(24.5009,-4.8465,0.1801,0.1801);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#878787").s().p("AguCCQgigMgJguQgKgvAUg1QAUg2AlgeQAkgeAhAMQAiAMAJAvQAKAvgUA1QgUA2glAeQgZAVgZAAQgKAAgJgEg");
	this.shape_43.setTransform(24.6279,-2.0169,0.1801,0.1801);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#DADADA").s().p("AhGDDQg1gTgRhHQgRhHAehQQAdhQA7gsQA5grA1ATQA1ATARBHQARBHgeBPQgdBRg7AsQgoAegkAAQgRAAgRgGg");
	this.shape_44.setTransform(24.5919,-1.9429,0.1801,0.1801);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#DADADA").s().p("AhGDDQg1gTgRhHQgRhHAehQQAdhQA7gsQA5grA1ATQA1ATARBHQARBHgeBPQgdBRg7AsQgoAegkAAQgRAAgRgGg");
	this.shape_45.setTransform(24.5919,-1.9429,0.1801,0.1801);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#181817").s().p("AhPDcQg8gVgThRQgThQAhhaQAihbBBgxQBBgxA8AVQA8AWATBQQATBQghBaQghBchCAxQguAigpAAQgUAAgSgHg");
	this.shape_46.setTransform(24.4568,-1.5827,0.1801,0.1801);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#3F3E3F").s().p("Ah5EyQhTghgXhxQgXhxAyh+QAyh/BfhCQBdhCBUAhQBTAhAXBxQAXBxgyB+QgyB/hfBCQg+Asg6AAQgdAAgcgLg");
	this.shape_47.setTransform(24.296,-1.5772,0.1801,0.1801);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#181817").s().p("AhpEvQhTghgXhxQgYhxAyh+QAzh/BehCQBdhCBTAhQBPAfAFCSQAECFg2CKQhHC0h7AAQgmAAgrgRg");
	this.shape_48.setTransform(22.8674,-1.5192,0.1801,0.1801);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#181817").s().p("AkPBgQAfjTDGh7IAqgXQA1gWAvABQCVABAeDkIoeFQQgYhRAQhqg");
	this.shape_49.setTransform(23.9489,-3.3201,0.1801,0.1801);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#EDEDED").s().p("AghBeQgYgJgGgiQgHghAOgmQAOgnAbgVQAZgVAYAIQAYAJAGAiQAHAhgOAmQgOAmgbAWQgSAPgRAAQgHAAgHgCg");
	this.shape_50.setTransform(-0.5368,14.189,0.1801,0.1801);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#C6C6C6").s().p("AgIAKQgEgEAAgGQAAgEADgEQAEgEAFgBQgGAJAHAIQAFAGAHgCQgEAGgHAAIgBAAQgFAAgEgEg");
	this.shape_51.setTransform(-1.809,12.255,0.1801,0.1801);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgCAFQgGgFAFgHQADAAAEADQADADAAAEIgBAEIgDABQgDAAgCgDg");
	this.shape_52.setTransform(-1.6786,12.1615,0.1801,0.1801);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#DADADA").s().p("AgJAKQgEgEgBgGQAAgFAEgEQAEgEAGgBQAFAAAFAEQAEAEAAAGQABAFgFAFQgEAEgGAAIAAABQgFAAgEgFg");
	this.shape_53.setTransform(-1.786,12.2505,0.1801,0.1801);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#C6C6C6").s().p("AgIAKQgEgEAAgGQgBgEAEgEQADgEAGgBQgGAKAHAHQAFAGAHgCQgEAGgHAAIgBAAQgFAAgEgEg");
	this.shape_54.setTransform(-2.4847,13.5424,0.1801,0.1801);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgCAFQgHgFAGgHQADAAADADQADADAAAEIAAAEIgDABQgDAAgCgDg");
	this.shape_55.setTransform(-2.3613,13.4534,0.1801,0.1801);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#DADADA").s().p("AgJAKQgEgEAAgGQgBgFAFgEQAEgEAFgBQAGAAAEAFQAEAEABAFQAAAGgEAEQgEAEgGAAIgBABQgFAAgEgFg");
	this.shape_56.setTransform(-2.4621,13.5379,0.1801,0.1801);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#C6C6C6").s().p("AgIALQgEgFAAgGQgBgEAEgEQADgFAGgBQgGALAHAHQAFAFAHgBQgEAGgIAAQgFAAgEgDg");
	this.shape_57.setTransform(-2.8178,14.9689,0.1801,0.1801);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgCAGQgHgGAGgHQADAAAEADQADADAAAEIgBAEIgEABQgCAAgCgCg");
	this.shape_58.setTransform(-2.6981,14.8785,0.1801,0.1801);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#DADADA").s().p("AgJALQgEgFAAgGQgBgFAFgEQAEgEAFAAQAGgBAEAFQAEAEABAFQAAAGgEAEQgFAEgGABQgFAAgEgEg");
	this.shape_59.setTransform(-2.7952,14.9684,0.1801,0.1801);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#C6C6C6").s().p("AgIAKQgEgEAAgGQAAgMAMgBQgGAJAHAIQAFAGAHgCQgEAGgHAAIgBAAQgFAAgEgEg");
	this.shape_60.setTransform(-2.5562,16.3782,0.1801,0.1801);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgCAGQgDgDAAgDQgBgEADgDQADAAADADQADAEABADIgBAFIgDAAQgDAAgCgCg");
	this.shape_61.setTransform(-2.4264,16.2828,0.1801,0.1801);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#DADADA").s().p("AgJAKQgEgEgBgGQAAgFAEgEQAEgEAGgBQAFAAAFAEQAEAEAAAGQABAFgFAFQgEAEgGAAIAAABQgFAAgEgFg");
	this.shape_62.setTransform(-2.5332,16.3737,0.1801,0.1801);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#C6C6C6").s().p("AgIAKQgEgEAAgGQgBgEAEgEQADgEAGgBQgGAKAHAHQAFAGAHgCQgEAGgHAAIgBAAQgFAAgEgEg");
	this.shape_63.setTransform(-1.6835,17.1975,0.1801,0.1801);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgCAFQgHgFAGgHQAJAAABAKIgBAEIgDABQgDAAgCgDg");
	this.shape_64.setTransform(-1.5571,17.1066,0.1801,0.1801);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#DADADA").s().p("AgJAKQgEgEAAgGQgBgFAFgEQAEgEAFgBQAGAAAEAFQAEAEABAFQAAAGgEAEQgEAEgGAAIgBABQgFAAgEgFg");
	this.shape_65.setTransform(-1.6609,17.193,0.1801,0.1801);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#C6C6C6").s().p("AgIALQgEgEAAgGQgBgFAEgEQADgFAGgBQgFALAGAHQAFAFAHgBQgEAHgHgBQgFAAgFgDg");
	this.shape_66.setTransform(-0.5131,17.0755,0.1801,0.1801);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgCAGQgDgDAAgDQgBgEADgDQAJAAABAKIgBAFIgDAAQgDAAgCgCg");
	this.shape_67.setTransform(-0.3828,16.985,0.1801,0.1801);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#DADADA").s().p("AgJALQgEgEAAgGQgBgFAFgFQAEgEAFAAQAGgBAEAFQAEAEABAFQAAAGgEAEQgEAEgGABQgFAAgFgEg");
	this.shape_68.setTransform(-0.4905,17.0751,0.1801,0.1801);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#C6C6C6").s().p("AgIAKQgEgDAAgHQgBgEAEgEQADgFAGAAQgFAKAGAHQAFAGAHgCQgEAGgHABQgFAAgFgFg");
	this.shape_69.setTransform(0.6122,16.1932,0.1801,0.1801);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgCAFQgDgCAAgDQgBgEADgDQADAAADADQADADAAADIAAAFIgEABQgCAAgCgDg");
	this.shape_70.setTransform(0.7396,16.1047,0.1801,0.1801);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#DADADA").s().p("AgJAKQgEgDAAgHQgBgEAFgFQAEgFAFABQAGAAAEADQAEAEABAGQAAAGgEAEQgEAEgGABQgFAAgFgFg");
	this.shape_71.setTransform(0.6348,16.1932,0.1801,0.1801);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#C6C6C6").s().p("AgIAKQgEgEAAgGQgBgEAEgEQADgEAGgBQgGAJAGAIQAGAGAIgCQgFAGgIAAIgBAAQgEAAgEgEg");
	this.shape_72.setTransform(1.2294,14.9918,0.1801,0.1801);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgCAFQgGgFAFgHQADAAAEADQADADAAAEIgBAEIgDABQgDAAgCgDg");
	this.shape_73.setTransform(1.3553,14.8984,0.1801,0.1801);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#DADADA").s().p("AgJAKQgEgEgBgGQAAgFAFgEQAEgEAFgBQAGAAAEAEQAEAEAAAGQABAFgFAFQgEAEgGAAIAAABQgFAAgEgFg");
	this.shape_74.setTransform(1.2479,14.9873,0.1801,0.1801);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#C6C6C6").s().p("AgIAKQgEgEAAgGQAAgEADgEQADgEAGgBQgGAJAGAIQAGAGAIgCQgFAGgHAAIgCAAQgEAAgEgEg");
	this.shape_75.setTransform(1.5896,13.7405,0.1801,0.1801);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgCAFQgGgFAFgHQADAAAEADQADADAAAEIgBAEIgDABQgDAAgCgDg");
	this.shape_76.setTransform(1.7154,13.647,0.1801,0.1801);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#DADADA").s().p("AgJAKQgEgEgBgGQAAgFAFgEQAEgEAFgBQAGAAAEAFQAEAEAAAFQABAGgFAEQgEAEgGAAIAAABQgFAAgEgFg");
	this.shape_77.setTransform(1.608,13.736,0.1801,0.1801);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#C6C6C6").s().p("AgIAKQgEgEAAgGQAAgLAMgDQgFAKAGAIQAFAGAHgCQgEAGgHAAIgBABQgFAAgEgFg");
	this.shape_78.setTransform(1.405,12.2145,0.1801,0.1801);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgCAFQgGgFAFgHQADAAAEADQADADAAADIgBAFIgDABQgDAAgCgDg");
	this.shape_79.setTransform(1.5331,12.1255,0.1801,0.1801);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#DADADA").s().p("AgJAKQgEgEgBgGQAAgFAEgEQAEgEAGgBQAFAAAFAEQAEAEAAAGQABAFgFAFQgEAEgGAAIAAABQgFAAgEgFg");
	this.shape_80.setTransform(1.428,12.2145,0.1801,0.1801);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#C6C6C6").s().p("AgIAKQgEgDAAgHQgBgEAEgFQADgDAGgBQgFAKAGAHQAFAGAHgCQgEAGgHABQgGAAgEgFg");
	this.shape_81.setTransform(0.5492,11.2328,0.1801,0.1801);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgCAFQgHgFAGgHQADAAAEADQADADAAADIgBAFIgDABQgDAAgCgDg");
	this.shape_82.setTransform(0.6689,11.1442,0.1801,0.1801);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#DADADA").s().p("AgJALQgEgEAAgGQgBgFAFgFQAEgEAFAAQAGgBAEAFQAEAEABAFQAAAGgEAEQgFAEgFABQgGAAgEgEg");
	this.shape_83.setTransform(0.5718,11.2323,0.1801,0.1801);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#C6C6C6").s().p("AgIAKQgEgEAAgGQAAgEADgEQAEgEAFgCQgFAKAGAIQAFAGAHgCQgEAGgHABQgFgBgFgEg");
	this.shape_84.setTransform(-0.6836,11.3588,0.1801,0.1801);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgCAGQgDgDAAgDQgBgEADgDQAJAAABAKIgBAEIgEABQgCAAgCgCg");
	this.shape_85.setTransform(-0.5538,11.2684,0.1801,0.1801);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#DADADA").s().p("AgJALQgEgEAAgGQgBgFAFgFQAEgEAFAAQAGgBAEAFQAEAEABAFQAAAGgEAEQgEAEgGABQgFAAgFgEg");
	this.shape_86.setTransform(-0.6616,11.3584,0.1801,0.1801);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#878787").s().p("AguCCQgigMgJguQgKgvAUg1QAUg2AlgeQAkgeAhAMQAiAMAJAvQAKAvgUA1QgUA2glAeQgZAVgZAAQgKAAgJgEg");
	this.shape_87.setTransform(-0.5368,14.1893,0.1801,0.1801);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#DADADA").s().p("AhGDDQg1gTgRhHQgRhHAehQQAdhQA7gsQA5grA1ATQA1ATARBHQARBHgeBPQgdBRg7AsQgoAegkAAQgRAAgRgGg");
	this.shape_88.setTransform(-0.5728,14.2633,0.1801,0.1801);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#DADADA").s().p("AhGDDQg1gTgRhHQgRhHAehQQAdhQA7gsQA5grA1ATQA1ATARBHQARBHgeBPQgdBRg7AsQgoAegkAAQgRAAgRgGg");
	this.shape_89.setTransform(-0.5728,14.2633,0.1801,0.1801);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#181817").s().p("AhPDcQg8gVgThRQgThQAhhaQAihbBBgxQBBgxA8AVQA8AWATBQQATBQghBaQghBchCAxQguAigqAAQgTAAgSgHg");
	this.shape_90.setTransform(-0.7078,14.623,0.1801,0.1801);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#3F3E3F").s().p("Ah5EyQhTghgXhxQgXhxAyh+QAyh/BfhCQBdhCBUAhQBTAhAXBxQAXBxgyB+QgyB/hfBCQg+Asg6AAQgdAAgcgLg");
	this.shape_91.setTransform(-0.8772,14.6345,0.1801,0.1801);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#181817").s().p("AhpEvQhTghgXhxQgYhxAyh+QAzh/BehCQBdhCBTAhQBPAfAFCSQAECFg2CKQhHC0h7AAQgmAAgrgRg");
	this.shape_92.setTransform(-2.3058,14.6925,0.1801,0.1801);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#DDA533").s().p("AwYNzIgSgFIgSgFIgigPQgdgOgjgTQiAhFh0hQQiGhchYhWQg5g5gkg0QgvhEgLg9QAPA9AxBBQAnAzA5A0QAzAuA6ArQA4ApA9AmQBrBFCKBHQAgARAgAOIAfANIAQAEIAQAEQAhAIAigCQAhgBAggJQAfgKAdgRQARgJALgJIIxnlQA1g0AtgyIAvg0IAVgaQAMgQADgIIABgDIEOmMQAXgtAhgvQAggwAigmQAOgQAZgXIALgJIAegZQAqghAsgeQBbg+BbguQBpg0BcgdQBtghBmgFQA1gCA3AIQAbAEAaAGIAwAHQAuAEA2gFQA0gGAxgLQAtgKA1gSQA4gSAogSIAEgCQAVgDAQAIQAPAHAMAPQARAWALAgQAOAsAIBEQAFArACBGQABA1gDA7QgCglgHhKQgGg+gKgxQgLhAgRgpQgMgdgNgPQgJgJgIgDQgHgDgIABIABAAIgDABIACgBQgsAUg1AUQgzATgyAMQgxANg4AHQg6AIgygEIg3gHQgagGgXgDQgygGgyADQhfAFhnAiQhaAchiAzQhWAthZA9QgoAcgqAhIgnAhQgSAQgRASQggAkgdAsQgcAqgXAsIgBACIgBACIiJDGIiFDDQgHANgPAVIgXAcQgUAYgcAeQgoAqg9A8IgJAJIgCABIozHXQgSANgOAHQghATglAKQgiAJgpABQgmAAgkgJg");
	this.shape_93.setTransform(0.2308,-1.3986,0.1801,0.1801);

	this.instance_3 = new lib.Path_10_3();
	this.instance_3.setTransform(-9.95,-5.1,0.1801,0.1801,0,0,0,63.3,45.2);
	this.instance_3.compositeOperation = "multiply";

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#CCE6ED").s().p("AhVG/QnKieiUkrIG2oVIA0A8QBGBKBeBIQEtDmGsB4IlfITQjHgSjjhPg");
	this.shape_94.setTransform(-8.7754,-6.5083,0.1801,0.1801);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#C1A027").s().p("AhqILQgkgIgjgPInvkfQh4hwAwiDQAPgpAegmIGpmkIQIIqIqXHNQg8AshMAAQgfAAgigHg");
	this.shape_95.setTransform(-16.2906,2.8376,0.1801,0.1801);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#8C7422").s().p("Ag9AcQgNhnASh2IAGAZQgLBgAKBXQAmBIBRBSIAAAZQhZhZgohNg");
	this.shape_96.setTransform(-31.1442,6.7853,0.1801,0.1801);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#403F40").s().p("AAzA4QighehVhRIAAgPICUBoQCkBuBNAlIAAASQg/gghRgvg");
	this.shape_97.setTransform(-25.2917,12.8159,0.1801,0.1801);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#403F40").s().p("AAzA4QighehVhRIAAgOICUBnQCkBuBNAmIAAARQg/gghRgvg");
	this.shape_98.setTransform(-25.2917,12.2982,0.1801,0.1801);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#403F40").s().p("AAzA4QighehVhQIAAgQICUBoQCkBvBNAlIAAARQg/gghRgvg");
	this.shape_99.setTransform(-25.2917,11.7805,0.1801,0.1801);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#403F40").s().p("AAzA4QighehVhQIAAgQICUBoQCkBuBNAmIAAARQg/gghRgvg");
	this.shape_100.setTransform(-25.2917,11.2673,0.1801,0.1801);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#403F40").s().p("Ag+ALIB9hSIAAA3Ih9BYg");
	this.shape_101.setTransform(22.7113,-9.6425,0.1801,0.1801);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#403F40").s().p("Ag+AKIB9hRIAAA3Ih9BYg");
	this.shape_102.setTransform(9.9311,-1.5727,0.1801,0.1801);

	this.instance_4 = new lib.Path_16();
	this.instance_4.setTransform(12.85,-4.5,0.1801,0.1801,0,0,0,2.2,50);
	this.instance_4.compositeOperation = "multiply";

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#B2B2B2").s().p("AAMBsQichehKhBIAAivQBJBDCdBgQBUA0B7BEIAACqQh7hEhUgzg");
	this.shape_103.setTransform(-25.1763,11.9731,0.1801,0.1801);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#8C7422").s().p("AjUBqIgKgFIAAgKQCAA+B6gtQA+gXAkgjIAlgbQA+h0gXgyQAVAQgBAkQgBAzgsBRIglAbQgkAjg/AXQgyASg0AAQhKAAhNgmg");
	this.shape_104.setTransform(-15.9937,14.9579,0.1801,0.1801);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AjUBvIgJgFIgBiqIACABQB5A8BzgqQA6gVAighIBFgxIAPADQAQAHAIAPQAZAyg/B3IglAaQglAkg+AXQgzASgzAAQhLAAhNgmg");
	this.shape_105.setTransform(-15.9959,14.8724,0.1801,0.1801);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("Ag9AcQgNhnASh2QARBfBrByIAACyQhZhZgohNg");
	this.shape_106.setTransform(-31.1442,6.7853,0.1801,0.1801);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#C6C6C6").s().p("ACBFlQiKhGichlQk4jKhTidQgMhoASh2QAcCiFHDhQCkBvCdBPQB4A9B0gqQA6gVAighIBGgxIAPAEQAQAGAIAQQAZAyhAB3IglAbQglAjg+AXQgzASg0AAQhLAAhNgng");
	this.shape_107.setTransform(-22.1668,10.4269,0.1801,0.1801);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#DDA533").s().p("AF+EFIgjgDIgmgFIgpgHQgZgEgUgFIgugNQgbgIgVgIIhggoQglgQg5ghIgvgcIgsgeQgYgPgUgQQgSgNgWgRQgmgdgkgiQghgdgegfIgxg2IgkgrIgdgoIAlAgQArAlA5AsIBDAzIBNA4QAiAYAxAfIBaA2QA1AgAlASIAtAWIAuAVIAsASIArAQIAqAOIAnAMQAWAGAwALIBmATIgMABIgkACIg6AAg");
	this.shape_108.setTransform(-23.374,14.5086,0.1801,0.1801);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#DDA533").s().p("AF/EEIgjgCIgmgFIgrgHQgXgEgVgGIgugNQgcgIgTgHQgbgJgVgKIgxgVQghgPg9gjIiGhYIgpgeQgmgegkghQgbgYgkglIgxg1IgkgsIgegnIAmAfQAiAdBBA0IBEA0IBNA4QAzAjAhAUIAsAbIAtAbQA7AiAfAPIAuAXIAtAUIAtASIArAQIApAOIAnAMIBFASIBoATIgyADIg4gBg");
	this.shape_109.setTransform(-23.1039,13.5452,0.1801,0.1801);

	this.instance_5 = new lib.Path_0_1();
	this.instance_5.setTransform(18.95,-10,0.1801,0.1801,0,0,0,33.3,22.8);
	this.instance_5.compositeOperation = "multiply";

	this.instance_6 = new lib.Path_1_2();
	this.instance_6.setTransform(6.35,-2.85,0.1801,0.1801,0,0,0,34.5,26.4);
	this.instance_6.compositeOperation = "multiply";

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#CCE6ED").s().p("Ak1hmQD+imDPAiQBoARA2AyIprGXg");
	this.shape_110.setTransform(18.8387,-9.8844,0.1801,0.1801);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#CCE6ED").s().p("AgEhuQAegoAlgmQB3h8CLhAIAAFgIqBGRg");
	this.shape_111.setTransform(6.2653,-4.4167,0.1801,0.1801);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#3F3E3F").s().p("AlzgrIAegpQAkguAqgrQCEiJCOhCIAtgYQA4gdA4gYQCzhMBzAHQBhAFBUAlQAqATAZATIAbAaIpJGCIt4Iqg");
	this.shape_112.setTransform(12.0012,-5.324,0.1801,0.1801);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#181817").s().p("AkPBgQAfjTDGh7IAqgXQA1gWAvABQCVABAeDkIoeFQQgYhRAQhqg");
	this.shape_113.setTransform(-1.2242,12.8916,0.1801,0.1801);

	this.instance_7 = new lib.Path_23();
	this.instance_7.setTransform(0.35,2.35,0.1801,0.1801,0,0,0,182.1,104.7);
	this.instance_7.compositeOperation = "multiply";

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#D29334").s().p("AtAQjQg+gFg6gTIgtgRQkbhlj8jEQhPg9hCg/IgygzQhNhSgGiWQgDhTAYidQAcCiFHDgQCkBwCeBPQB4A9B1gpQA6gVAighIIlnhQAcgVAegcQA8g3AOggIFJnOIAyhOQA+hUA4ghIBOhCQBhhOBmg8QFGjADzA6QB6AaCwgrQBYgVBAgbQBLgNAeDFQAPBjAABlQADBxhQBdQgZAdgeAYMghoAVfQiOBoinAAQgZAAgZgDg");
	this.shape_114.setTransform(-0.0106,2.2906,0.1801,0.1801);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#C1A027").s().p("AgpHFQh7ggh7gyQmjipjXkYQDdjAEyh1QCYg7BtgUIQfIbQjlgClqDGQhwA+hxBKIhZA+IAAAAQgFAAg1gOg");
	this.shape_115.setTransform(4.5587,-16.091,0.1801,0.1801);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#CCE6ED").s().p("AnZCAQkUjEilhzIgDgCQCIhUB5g4QCmhMCiglQAbgHA8ANQBbATAcADIQUIPQgsALgeABQgdAAgpgJQg+gXiEAcQkIA5lcEDQh0hRlFjog");
	this.shape_116.setTransform(8.1388,-16.5886,0.1801,0.1801);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#C1A027").s().p("AozjLQAmgJBDgZIAkgFQAtgBA1AWIN3GVQhTAcg7Agg");
	this.shape_117.setTransform(21.1937,-20.4642,0.1801,0.1801);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#D29334").s().p("AxcQJQjAhWioh9QlPj6B8jFIIXnrIG2oNIA4g3QBLhDBbg+QEijGFYhDQAfgGBBAIICFARQDBAUCYg3IAjgGQAugBA0AXINoGMQhEAwheArQi6BWh5gbQgSgGgjgCQhIgEhcAWQkmBJmIE4QgZALgjAhQhGBDgyBuIhlDmQg5BxhYBXIpjIHQgzAxhQAbQgxAQgvAAQhpAAhghQg");
	this.shape_118.setTransform(-0.4756,-4.6059,0.1801,0.1801);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#C1A027").s().p("AkeEYQgjhFAiguIJQn5Qi3DalvHPQgYgZgRgkg");
	this.shape_119.setTransform(-26.7254,-0.5685,0.1801,0.1801);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("Ag9AcQgNhnASh2IAGAZQgLBgAKBXQAmBIBRBSIAAAZQhZhZgohNg");
	this.shape_120.setTransform(-31.1442,6.7853,0.1801,0.1801);

	this.instance_8 = new lib.Path_9();
	this.instance_8.setTransform(0.15,6.25,0.1801,0.1801,0,0,0,188.5,103.2);
	this.instance_8.compositeOperation = "multiply";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.instance_7},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.instance_6},{t:this.instance_5},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.instance_4},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.instance_3},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.8,-24.8,67.6,49.8);


(lib.camion_llega = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhZbAklUB8ehI8AAVgAKQAKgFAhgKQAcgPADgoQACgngSgWIgTgNIhUgmIgCh/QAIgMAAgPIALAHQAOAFAQgEQAQgDAHgQQAFgIABgIIgBAIQADAGASgFQASgFAHgSQAEgIgBgIIh8joIgCjCImPiXQgBgRFZkhQCtiRCtiOIMxheMAjPAPZIDRVcMi05BYAg");
	mask.setTransform(749.2,-288.125);

	// _ÎÓÈ_1
	this.instance = new lib.Interpolación2("synched",0);
	this.instance.setTransform(31.85,127.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:937.15,y:-420.35},361,cjs.Ease.get(0.11)).to({x:1053.2,y:-486.95},23,cjs.Ease.get(-1)).to({regX:-0.2,regY:-0.2,scaleX:0.9731,scaleY:1.0214,skewX:20.115,skewY:-151.9063,x:1065.8,y:-501.4},1,cjs.Ease.get(-1)).wait(1).to({regX:0,regY:0,x:1064.1888,y:-504.2501},0).wait(1).to({x:1062.7624,y:-507.2321},0).wait(1).to({x:1061.3207,y:-510.2461},0).wait(1).to({x:1059.8638,y:-513.2919},0).wait(1).to({x:1058.3916,y:-516.3697},0).wait(1).to({x:1056.9041,y:-519.4794},0).wait(1).to({x:1055.4013,y:-522.621},0).wait(1).to({x:1053.8833,y:-525.7945},0).wait(1).to({regX:-0.2,regY:-0.2,x:1052.55,y:-529.1},0).to({regX:-0.4,regY:-0.6,scaleX:1.0241,scaleY:1.0772,skewX:1.6737,skewY:-176.7934,x:1050.35,y:-532.7},1).wait(1).to({regX:0,regY:0,scaleY:1.0773,skewX:1.5493,skewY:-176.8567,x:1045.7042,y:-533.7331},0).wait(1).to({scaleY:1.0774,skewX:1.4241,skewY:-176.9203,x:1041.4341,y:-535.4258},0).wait(1).to({skewX:1.2983,skewY:-176.9844,x:1037.1394,y:-537.1282},0).wait(1).to({scaleX:1.024,scaleY:1.0775,skewX:1.1717,skewY:-177.0487,x:1032.8204,y:-538.8404},0).wait(1).to({skewX:1.0444,skewY:-177.1135,x:1028.4768,y:-540.5622},0).wait(1).to({scaleY:1.0776,skewX:0.9164,skewY:-177.1786,x:1024.1089,y:-542.2937},0).wait(1).to({scaleY:1.0777,skewX:0.7876,skewY:-177.2441,x:1019.7165,y:-544.0349},0).wait(1).to({skewX:0.6582,skewY:-177.3099,x:1015.2997,y:-545.7858},0).wait(1).to({scaleY:1.0778,skewX:0.528,skewY:-177.3761,x:1010.8584,y:-547.5464},0).wait(1).to({scaleY:1.0779,skewX:0.3971,skewY:-177.4426,x:1006.3927,y:-549.3167},0).wait(1).to({skewX:0.2655,skewY:-177.5096,x:1001.9025,y:-551.0966},0).wait(1).to({scaleY:1.078,skewX:0.1332,skewY:-177.5769,x:997.3879,y:-552.8863},0).wait(1).to({scaleX:1.0239,scaleY:1.0781,skewX:0.0002,skewY:-177.6445,x:992.8488,y:-554.6857},0).wait(1).to({skewX:-0.1336,skewY:-177.7125,x:988.2854,y:-556.4947},0).wait(1).to({scaleY:1.0782,skewX:-0.268,skewY:-177.7809,x:983.6974,y:-558.3135},0).wait(1).to({scaleY:1.0783,skewX:-0.4032,skewY:-177.8497,x:979.0851,y:-560.1419},0).wait(1).to({skewX:-0.5391,skewY:-177.9188,x:974.4483,y:-561.98},0).wait(1).to({scaleY:1.0784,skewX:-0.6757,skewY:-177.9883,x:969.787,y:-563.8278},0).wait(1).to({scaleY:1.0785,skewX:-0.8131,skewY:-178.0581,x:965.1013,y:-565.6854},0).wait(1).to({scaleX:1.0238,skewX:-0.9511,skewY:-178.1283,x:960.3912,y:-567.5526},0).wait(1).to({scaleY:1.0786,skewX:-1.0899,skewY:-178.1989,x:955.6566,y:-569.4295},0).wait(1).to({scaleY:1.0787,skewX:-1.2294,skewY:-178.2698,x:950.8976,y:-571.3161},0).wait(1).to({scaleY:1.0788,skewX:-1.3696,skewY:-178.3411,x:946.1141,y:-573.2124},0).wait(1).to({skewX:-1.5105,skewY:-178.4128,x:941.3062,y:-575.1184},0).wait(1).to({scaleY:1.0789,skewX:-1.6521,skewY:-178.4848,x:936.4739,y:-577.034},0).wait(1).to({skewX:-1.7945,skewY:-178.5572,x:931.6171,y:-578.9594},0).wait(1).to({scaleY:1.079,skewX:-1.9375,skewY:-178.63,x:926.7359,y:-580.8945},0).wait(1).to({scaleY:1.0791,skewX:-2.0813,skewY:-178.7031,x:921.8302,y:-582.8392},0).wait(1).to({scaleX:1.0237,scaleY:1.0792,skewX:-2.2258,skewY:-178.7766,x:916.9001,y:-584.7937},0).wait(1).to({regX:-0.4,regY:-0.7,skewX:-2.371,skewY:-178.8504,x:912.3,y:-587.4},0).wait(32));

	// Capa_1
	this.instance_1 = new lib.Tween10("synched",0);
	this.instance_1.setTransform(78.85,68.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:-0.5,regY:6.2,x:78.35,y:74.65},0).wait(1).to({x:78.4,y:74.6},0).wait(1).to({x:78.55,y:74.55},0).wait(1).to({x:78.7,y:74.45},0).wait(1).to({x:78.95,y:74.3},0).wait(1).to({x:79.2,y:74.15},0).wait(1).to({x:79.5,y:73.95},0).wait(1).to({x:79.9,y:73.75},0).wait(1).to({x:80.3,y:73.5},0).wait(1).to({x:80.75,y:73.25},0).wait(1).to({x:81.3,y:72.95},0).wait(1).to({x:81.85,y:72.6},0).wait(1).to({x:82.45,y:72.25},0).wait(1).to({x:83.1,y:71.85},0).wait(1).to({x:83.85,y:71.45},0).wait(1).to({x:84.6,y:71},0).wait(1).to({x:85.4,y:70.55},0).wait(1).to({x:86.25,y:70.05},0).wait(1).to({x:87.15,y:69.5},0).wait(1).to({x:88.1,y:68.95},0).wait(1).to({x:89.1,y:68.35},0).wait(1).to({x:90.2,y:67.75},0).wait(1).to({x:91.3,y:67.1},0).wait(1).to({x:92.45,y:66.45},0).wait(1).to({x:93.65,y:65.75},0).wait(1).to({x:94.9,y:65},0).wait(1).to({x:96.2,y:64.25},0).wait(1).to({x:97.5,y:63.45},0).wait(1).to({x:98.9,y:62.65},0).wait(1).to({x:100.35,y:61.8},0).wait(1).to({x:101.85,y:60.9},0).wait(1).to({x:103.4,y:60},0).wait(1).to({x:105,y:59.1},0).wait(1).to({x:106.65,y:58.1},0).wait(1).to({x:108.3,y:57.15},0).wait(1).to({x:110.05,y:56.1},0).wait(1).to({x:111.85,y:55.05},0).wait(1).to({x:113.7,y:54},0).wait(1).to({x:115.55,y:52.9},0).wait(1).to({x:117.5,y:51.75},0).wait(1).to({x:119.5,y:50.6},0).wait(1).to({x:121.5,y:49.4},0).wait(1).to({x:123.6,y:48.2},0).wait(1).to({x:125.75,y:46.95},0).wait(1).to({x:127.9,y:45.7},0).wait(1).to({x:130.15,y:44.35},0).wait(1).to({x:132.4,y:43.05},0).wait(1).to({x:134.75,y:41.7},0).wait(1).to({x:137.1,y:40.3},0).wait(1).to({x:139.55,y:38.9},0).wait(1).to({x:142,y:37.45},0).wait(1).to({x:144.55,y:35.95},0).wait(1).to({x:147.1,y:34.45},0).wait(1).to({x:149.75,y:32.9},0).wait(1).to({x:152.4,y:31.35},0).wait(1).to({x:155.1,y:29.75},0).wait(1).to({x:157.9,y:28.15},0).wait(1).to({x:160.7,y:26.5},0).wait(1).to({x:163.55,y:24.85},0).wait(1).to({x:166.5,y:23.1},0).wait(1).to({x:169.45,y:21.4},0).wait(1).to({x:172.45,y:19.65},0).wait(1).to({x:175.5,y:17.85},0).wait(1).to({x:178.6,y:16},0).wait(1).to({x:181.8,y:14.15},0).wait(1).to({x:185,y:12.3},0).wait(1).to({x:188.25,y:10.4},0).wait(1).to({x:191.55,y:8.45},0).wait(1).to({x:194.9,y:6.5},0).wait(1).to({x:198.3,y:4.55},0).wait(1).to({x:201.75,y:2.55},0).wait(1).to({x:205.25,y:0.5},0).wait(1).to({x:208.8,y:-1.6},0).wait(1).to({x:212.4,y:-3.7},0).wait(1).to({x:216.05,y:-5.8},0).wait(1).to({x:219.75,y:-8},0).wait(1).to({x:223.5,y:-10.2},0).wait(1).to({x:227.3,y:-12.4},0).wait(1).to({x:231.15,y:-14.65},0).wait(1).to({x:235.05,y:-16.9},0).wait(1).to({x:239,y:-19.25},0).wait(1).to({x:243,y:-21.55},0).wait(1).to({x:247,y:-23.9},0).wait(1).to({x:251.1,y:-26.3},0).wait(1).to({x:255.25,y:-28.75},0).wait(1).to({x:259.45,y:-31.2},0).wait(1).to({x:263.65,y:-33.65},0).wait(1).to({x:267.95,y:-36.15},0).wait(1).to({x:272.3,y:-38.7},0).wait(1).to({x:276.65,y:-41.25},0).wait(1).to({x:281.1,y:-43.85},0).wait(1).to({x:285.6,y:-46.5},0).wait(1).to({x:290.1,y:-49.15},0).wait(1).to({x:294.7,y:-51.8},0).wait(1).to({x:299.3,y:-54.5},0).wait(1).to({x:304,y:-57.25},0).wait(1).to({x:308.7,y:-60},0).wait(1).to({x:313.5,y:-62.8},0).wait(1).to({x:318.3,y:-65.6},0).wait(1).to({x:323.2,y:-68.45},0).wait(1).to({x:328.1,y:-71.35},0).wait(1).to({x:333.1,y:-74.25},0).wait(1).to({x:338.1,y:-77.2},0).wait(1).to({x:343.2,y:-80.15},0).wait(1).to({x:348.3,y:-83.15},0).wait(1).to({x:353.45,y:-86.15},0).wait(1).to({x:358.7,y:-89.2},0).wait(1).to({x:363.95,y:-92.3},0).wait(1).to({x:369.25,y:-95.4},0).wait(1).to({x:374.6,y:-98.55},0).wait(1).to({x:380.05,y:-101.7},0).wait(1).to({x:385.5,y:-104.9},0).wait(1).to({x:391,y:-108.1},0).wait(1).to({x:396.55,y:-111.35},0).wait(1).to({x:402.15,y:-114.65},0).wait(1).to({x:407.8,y:-117.95},0).wait(1).to({x:413.55,y:-121.3},0).wait(1).to({x:419.3,y:-124.65},0).wait(1).to({x:425.1,y:-128.05},0).wait(1).to({x:430.95,y:-131.5},0).wait(1).to({x:436.85,y:-134.95},0).wait(1).to({x:442.8,y:-138.4},0).wait(1).to({x:448.8,y:-141.9},0).wait(1).to({x:454.85,y:-145.45},0).wait(1).to({x:460.95,y:-149},0).wait(1).to({x:467.1,y:-152.6},0).wait(1).to({x:473.25,y:-156.25},0).wait(1).to({x:479.5,y:-159.9},0).wait(1).to({x:485.8,y:-163.55},0).wait(1).to({x:492.15,y:-167.3},0).wait(1).to({x:498.55,y:-171},0).wait(1).to({x:505,y:-174.8},0).wait(1).to({x:511.45,y:-178.55},0).wait(1).to({x:518,y:-182.4},0).wait(1).to({x:524.6,y:-186.25},0).wait(1).to({x:531.25,y:-190.15},0).wait(1).to({x:537.9,y:-194.05},0).wait(1).to({x:544.65,y:-198},0).wait(1).to({x:551.45,y:-201.95},0).wait(1).to({x:558.25,y:-205.95},0).wait(1).to({x:565.15,y:-209.95},0).wait(1).to({x:572.1,y:-214},0).wait(1).to({x:579.05,y:-218.1},0).wait(1).to({x:586.1,y:-222.2},0).wait(1).to({x:593.15,y:-226.35},0).wait(1).to({x:600.3,y:-230.5},0).wait(1).to({x:607.45,y:-234.7},0).wait(1).to({x:614.7,y:-238.95},0).wait(1).to({x:621.95,y:-243.2},0).wait(1).to({x:629.3,y:-247.45},0).wait(1).to({x:636.65,y:-251.8},0).wait(1).to({x:644.05,y:-256.1},0).wait(1).to({x:651.55,y:-260.5},0).wait(1).to({x:659.05,y:-264.9},0).wait(1).to({x:666.6,y:-269.3},0).wait(1).to({x:674.25,y:-273.75},0).wait(1).to({x:681.9,y:-278.25},0).wait(1).to({x:689.6,y:-282.75},0).wait(1).to({x:697.4,y:-287.3},0).wait(1).to({x:705.2,y:-291.85},0).wait(1).to({x:713.05,y:-296.45},0).wait(1).to({x:720.95,y:-301.1},0).wait(1).to({x:728.9,y:-305.75},0).wait(1).to({x:736.95,y:-310.4},0).wait(1).to({x:745,y:-315.15},0).wait(1).to({x:753.1,y:-319.85},0).wait(1).to({x:761.25,y:-324.65},0).wait(1).to({x:769.45,y:-329.45},0).wait(1).to({x:777.7,y:-334.25},0).wait(1).to({x:786,y:-339.1},0).wait(1).to({x:794.35,y:-344},0).wait(1).to({x:802.75,y:-348.9},0).wait(1).to({x:811.2,y:-353.85},0).wait(1).to({x:819.7,y:-358.8},0).wait(1).to({x:828.25,y:-363.8},0).wait(1).to({x:836.85,y:-368.85},0).wait(1).to({x:845.5,y:-373.9},0).wait(1).to({x:854.15,y:-379},0).wait(1).to({x:862.9,y:-384.1},0).wait(1).to({x:871.7,y:-389.25},0).wait(1).to({x:880.55,y:-394.4},0).wait(1).to({x:889.45,y:-399.6},0).wait(1).to({x:898.35,y:-404.8},0).wait(1).to({x:907.35,y:-410.1},0).wait(1).to({x:916.4,y:-415.35},0).wait(1).to({regX:0,regY:0,x:926,y:-426.9},0).to({x:1009.85,y:-475.9},31,cjs.Ease.get(0.55)).to({startPosition:0},115,cjs.Ease.get(-1)).to({x:1541.1,y:-791.45},87,cjs.Ease.get(-1)).to({startPosition:0},2,cjs.Ease.get(1)).to({_off:true},1).wait(35));

	// Capa_2
	this.instance_2 = new lib.Tween8("synched",0);
	this.instance_2.setTransform(1579,-871.85,0.7447,0.7447);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:951.85,y:-515.35},116,cjs.Ease.get(1)).to({startPosition:0},31,cjs.Ease.get(0.49)).to({x:-52.45,y:84.2},272,cjs.Ease.get(-1)).to({startPosition:0},2,cjs.Ease.get(1)).to({_off:true},1).wait(35));

	// Capa_1
	this.instance_3 = new lib.Interpolación1("synched",0);
	this.instance_3.setTransform(1486.35,-808.05);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(49).to({_off:false},0).to({x:1029.5,y:-541.7},160,cjs.Ease.get(1)).to({startPosition:0},4,cjs.Ease.get(-1)).to({x:39.95,y:46.15},206,cjs.Ease.get(-1)).to({x:159,y:-28.3},2,cjs.Ease.get(1)).wait(36));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.7,-922.4,1736.1000000000001,1057.2);


// stage content:
(lib.proceso_5 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.image35();
	this.instance.setTransform(593,911,0.9962,0.9962);

	this.instance_1 = new lib.image29();
	this.instance_1.setTransform(747,836,1.0005,1.0005);

	this.instance_2 = new lib.image34();
	this.instance_2.setTransform(897,765,0.9913,0.9913);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Capa_5
	this.instance_3 = new lib.camion_llega();
	this.instance_3.setTransform(-145.9,1418.65,1,1,0,0,0,78.9,68.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Capa_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#769E28").s().p("AAAAVIAAAAIAAAAIgDgCIgBgBIgBgBIgCAEQgEgFgBgDIgCAAIgCACQgGgEgBgEIAAAAIgBAAQgCABgEgDIgEgCIADgDQAEgDACAAIACABIACgCIgBgEIAIAAIABgCQAAgCAEgCIAEgDIABADIADgGIAGAEIABgCIADADQAEACABADIAAAAIABgCIAEACIADAGIACACIABgBQADgBAHAFQgGAGgDAAIgCAAQgBADgEAGIgEgEIgBABQgBADgDAFIgEgEIAAAFIgGgBg");
	this.shape.setTransform(281.7682,885.7543,3.7442,3.7442);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#638A1C").s().p("AgPApIgBAAIAAgLQgCgBgBgDIgBgEIAEgCIgCgBIgDgDIABgBQAAAAABAAQAAAAAAgBQABAAAAAAQAAAAAAgBIAAgBIgDgBIAEgIIgBgBQAAgCACgFIgFgFIAEgDQgBgCAAgDIgBgBIAAgGIABgFIABABIABgBIABgDIAAgBIADABIACABIACAAIABgEIAFACIAEgFIAAAAIAAgEIAJACIADgCIAAABIAFgBIAAAEQAAAFgCABQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAQADABAFAEQgDAFgDABIAAAAQADACAAAHIgFAAIAAACIAGACQgCAGgDACIgBAAIAAAAIAGADIgEAFIgBACIgBABIABABIACAAIACABIgGAHIACABQACADgBAGIgHAAIACAFQgHABgCgBIgBAAIgCAFIgFgDIAAABQgBADgHADg");
	this.shape_1.setTransform(287.3845,902.7904,3.7442,3.7442);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#567817").s().p("AAHAmIAAgBIgFADIgCgFIgBAAQgCABgHgBIABgFIgGAAQgBgGACgDIABgBIgFgHIAEgBIABgBIgBgBIgBgBIAAAAIAAgBIgEgFIAGgDIAAAAIgBAAQgCgBgCgEIgCgDIAHgCIAAgCIgGAAQABgHACgCIABAAIgGgGIAHgFQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAgFIAAgEIAFABIAAgBIACABIABABIAJgCIAAAEIAEAFIAFgCIABAEIACAAIAFgCIAAABIABADIABABIAAgBIACAFQABADgBADIgBABQAAADgCACIAEADIgEAFIABAHIAAABQACACACAGIgDABIAAABIACACIAAABIgEAEQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAAAAAIACABIgBAEQgBADgBABIAAAEQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAIAAAEIgBAAIgBADQgHgDgBgDg");
	this.shape_2.setTransform(276.1519,902.7904,3.7442,3.7442);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#AA782C").s().p("AABAqIAAgBIgBAAQAAgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBIABgGIAAhDIAAgCIAAgBIAAAAIAAAAIABABIAABFIgBAFIAAADIABABIAAABIABABIAAABg");
	this.shape_3.setTransform(281.6627,924.4525,3.7433,3.7433);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#916626").s().p("AAAAqQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBIAAAAIAAgBIABgBIAAAAIABgFIAAgRIABgdIAAgPIAAgBIAAgCIAAgCIAAgBIAAgCIABgBIAAgDIABgBIAAAAIAAAAIABABIABBFIgCAGIAAACIACABIAAABIABABIAAABIgBAAQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAIgBAAg");
	this.shape_4.setTransform(280.7218,924.7632,3.7429,3.7429);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#AA782C").s().p("AADAGIgCgBIgBgBIAAgBIgBgBIgCgDQgBgCgBgDIACADIAGAIQAAAAABAAQAAABAAAAQABAAAAgBQAAAAAAAAIAAACIgBAAIgBgBg");
	this.shape_5.setTransform(274.1761,915.2628,3.7433,3.7433);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#AA782C").s().p("AAGATIAAgFIgCgFIgEgGIgDgIIAAgCIgBgDIgDgRIABABIAEAUIAGANIACAGIAAAEIACALg");
	this.shape_6.setTransform(278.1066,917.9954,3.7433,3.7433);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#916626").s().p("AAJAOQgCgFgDgDIgDgEIgDgCIgEgCQgFgIAAgDIACADIAHAJQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAIAAgDIAAgCIgDgVIABABIADAUIAHANIACAGIAAAEIACALg");
	this.shape_7.setTransform(276.6093,917.9954,3.7433,3.7433);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#916626").s().p("AgMAPIAAgFIACgFIACgEQAFgGACgFIABgGIABgEIABAAIAAABIgCAFIAAAEQgCAGACABIABgBQACgBADgDIAFgIIAEgJQAAADgBADIgHAMIgFAFIgFACIgDAEQgDADgBAEIgEAOg");
	this.shape_8.setTransform(286.8331,920.7093,3.7433,3.7433);

	this.instance_4 = new lib.CompoundPath_1();
	this.instance_4.setTransform(258.85,939.55,3.7451,3.7451,0,0,0,6.9,2.5);
	this.instance_4.compositeOperation = "multiply";

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF8070").s().p("AgcACIAfgSIAaAPIggASg");
	this.shape_9.setTransform(281.2235,940.0347,3.7455,3.7455);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EFEFEF").s().p("AgpACIAtgZIAmAWIgtAZg");
	this.shape_10.setTransform(281.2235,940.0347,3.7455,3.7455);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8B8B8B").s().p("AgSgHIAAgGIAlAWIAAAEg");
	this.shape_11.setTransform(272.7024,945.9339,3.7455,3.7455);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CACACA").s().p("AgWALIAtgaIAAAFIgtAag");
	this.shape_12.setTransform(288.34,945.0911,3.7455,3.7455);

	this.instance_5 = new lib.Path_4_8();
	this.instance_5.setTransform(271,942.05,3.7455,3.7455,0,0,0,3.8,2.6);
	this.instance_5.compositeOperation = "multiply";

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#769E28").s().p("AABAVIgBAAIgDgCIgBgBIgBAAIgCADIgGgHIgBgBIgCACQgGgEgBgDIAAgBIAAAAIgCABQgCAAgDgCIgEgDIADgDIAGgDIACABIACgBIgBgEIAIgBIAAAAIABgCQAAgCAFgCIADgCIABACIADgGIAGAFIABgDIAEADQADADABACIABgCIAEADQADADAAACIAAABIACABIABAAQADgBAHAEQgGAGgCABIgDgBQgBAEgEAFIgDgDIgCAAIgEAIIgDgEIgBAAIABAFg");
	this.shape_13.setTransform(341.9563,919.4521,3.7442,3.7442);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#638A1C").s().p("AgPApIgBABIAAgEIAAgEIAAgDQgBgBgBgEIgBgEQABAAAAAAQABAAABgBQAAAAAAAAQAAgBAAAAIgCgCIgCgCIAAgBIACgBIAAgCIgDgBQACgGACgCIAAgBQgBgCADgFIgFgFIAEgDQgCgBAAgEIgBgCQgBgBABgEIACgEIAAAAIABAAIABgEIAAgBIAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQABABAAAAIACABIACAAIABgFIAFADQACgEACgBIAAgDIAJABIABAAIACgCIAAABIAFAAIAAAEQAAAEgBABIgDACQADAAAEADQgDAGgDABIABAAQACACABAIIgGAAIAAABIAHACQgDAHgDABIgBAAIAAAAIAGADIgEAFIAAABIgCACIABABIAEACQgDAFgCABIABABQACADgBAHIgGgBIABAFQgHACgCgCIgBAAIgCAGIgFgEIAAABQgBADgHADg");
	this.shape_14.setTransform(347.479,936.5818,3.7442,3.7442);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#567817").s().p("AAHAmIAAgBIgFAEIgCgGIgBAAQgCACgHgCIABgFIgHABQAAgHACgDIACgBIgGgGIACgBIACgBIABgBIgBgBIgCgCIgDgFIAGgDIAAAAIgCAAQgBgBgCgEIgBgDIAGgCIAAgBIgGAAIABgEIACgGIABAAQgCgBgCgDIgCgDIAIgDIgEgCIgBgFIAAgEIAFAAIAAgBIADACIAJgBIAAADIAAAAQACABACAEIAFgDIABAFIACAAIACgBIADgBIAAABIABAEIAAAAIABAAIABAEIABAFIgBACQAAAEgCABIAFADIgGAFQADAFgBACIAAABQACACACAGIgDABIAAACIACABIABAAIAAABIgDACIgCACQAAAAAAABQAAAAAAAAQABABABAAQAAAAABAAIgBAEQAAAEgCABIAAALIgBgBIgBADQgHgDgBgDg");
	this.shape_15.setTransform(336.34,936.5818,3.7442,3.7442);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#AA782C").s().p("AABApIAAAAIgBgBIgBgEIABgGIgBhDIABgEIAAABIABBFIgBAHIAAACIABABIAAAAIAAABIABAAIAAABg");
	this.shape_16.setTransform(341.836,958.3293,3.7433,3.7433);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#916626").s().p("AgDAoIAAAAIAAgBIABgBIAAAAIABgKQABgGgBgGIABgdIAAgCIAAgOIAAgCIAAgEIABgBIAAgCIABgDIABAAIAABGIAAAGIAAACIAAABIABABIAAAAIAAAAIAAACQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBg");
	this.shape_17.setTransform(340.8888,958.5829,3.7429,3.7429);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#AA782C").s().p("AADAGIgCgBIgBgBIAAgBIgDgEQgBgCAAgDIABADIADADQABADACACIACAAIAAABIgBABIgBgBg");
	this.shape_18.setTransform(334.3963,949.1114,3.7433,3.7433);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#916626").s().p("AAJAOIgFgIIgDgEIgEgCIgDgDQgFgFAAgFIACADIACADQACAEACABIADABIAAgDIgBgLQgCgGAAgGIAAABIADAPIABACIAAACIAHAOIACAGIAAAEIACALg");
	this.shape_19.setTransform(336.8762,951.8721,3.7433,3.7433);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#916626").s().p("AgNATIAAgCIAAgFIADgFIABgDIAHgMIACgFIABgEIAAAAIAAAAIgCAJQgCAHACAAIABAAIAFgFIAFgIIAEgIQABACgCADIgHAMIgFAFIgEACIgEAEQgCADgCAFIgDAJIABgEg");
	this.shape_20.setTransform(347.1936,953.6502,3.7433,3.7433);

	this.instance_6 = new lib.CompoundPath_0();
	this.instance_6.setTransform(319.1,973.45,3.7451,3.7451,0,0,0,7,2.5);
	this.instance_6.compositeOperation = "multiply";

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF8070").s().p("AgcACIAggRIAZAOIggARg");
	this.shape_21.setTransform(341.339,973.8379,3.7455,3.7455);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EFEFEF").s().p("AgpACIAtgZIAmAWIgtAZg");
	this.shape_22.setTransform(341.339,973.8379,3.7455,3.7455);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#8B8B8B").s().p("AgSgHIAAgGIAlAVIAAAGg");
	this.shape_23.setTransform(332.8179,979.7371,3.7455,3.7455);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CACACA").s().p("AgWAKIAtgZIAAAFIgtAag");
	this.shape_24.setTransform(348.4555,978.988,3.7455,3.7455);

	this.instance_7 = new lib.Path_4_7();
	this.instance_7.setTransform(331.15,975.95,3.7455,3.7455,0,0,0,3.8,2.6);
	this.instance_7.compositeOperation = "multiply";

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#769E28").s().p("AAAAVIAAgBQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAIgBgBIgDACIgFgHIgBgBIgDAEQgGgFAAgDIAAAAIgBgBIgBABQgCAAgEgDIgEgDIADgCIAGgDIACAAIACgBIgBgDIAIgBIABAAIAAgCQABgDAEgCIADgBIABACIADgHIAGAGIABgCIAEACQADADABACIABgCIAEADIADAFIAAAAIACABIABAAQADAAAHAEQgFAHgEAAIgCAAQAAADgEAFIgFgEIAAAAQgBAEgEAEIgDgCIgBAAIABADg");
	this.shape_25.setTransform(402.1443,953.3371,3.7442,3.7442);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#638A1C").s().p("AgPApIgBAAIAAgKIgCgGIgBgDIACAAQABgBAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIgCgCIgCgDIACgBIAAgBIgDgBIABgEIADgEIAAgBQgCgDADgFIgEgFIAEgCQgCgCAAgEIgBgCQgBgBABgEIACgEIAAAAIABAAIABgEIAAAAIAAAAIADAAIACABIACAAIABgFIAFADQACgEACAAIAAAAIAAgEIAJACIADgCIAAABIAFgBIAAAEQAAAEgCACIgDABQAEAAAEADQgDAGgDABIAAAAQADACAAAHIgFABIAAAAIAHADQgDAGgDABIgBABIAAAAIAGADIgEAFIAAAAIAAABIgBABIgBABIABABIACABIACABIgCACIgDAFIABABQACACgBAHIgGgBIABAFQgHACgCgCIgBAAIgCAGIgFgDIAAABQgBACgHACg");
	this.shape_26.setTransform(407.7606,970.3732,3.7442,3.7442);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#567817").s().p("AAHAnIAAgBIgFADIgCgGIgBAAQgCACgHgCIABgFIgGABQgBgHACgCIABgBIgDgFIgCgCIACgBIACgBIABgBIgBgBIgBgBIAAgBIAAAAIgEgFIAGgDIAAAAIgBgBQgCAAgCgDIgCgEIAHgDIAAAAIgFgBQAAgHADgCIAAAAIgGgHIAIgDIgDgBIgCgGIAAgEIAFABIAAgBIADACIAJgCIAAAEIAAAAQABAAADAEIAFgDIABAFIACAAIACgBIADAAIAAAAIAAAAIABAEIABAAIAAAAIACAEQABAEgBABIgBACQAAAEgCACIAEACIgEAFQADAFgCADIAAABQACABACAHIgDABIAAABIACABIgCADIgCACQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAAAABIACAAQgBAHgCACIAAAKIgBAAIgBACQgHgCgBgCg");
	this.shape_27.setTransform(396.528,970.3732,3.7442,3.7442);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#AA782C").s().p("AABApIgBAAIAAgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAAhJIABgDIAAAAIAAAAIAABOIABABIABABIAAABg");
	this.shape_28.setTransform(402.103,992.206,3.7433,3.7433);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#916626").s().p("AgDAoIAAAAIAAgBIABgBIABgFIAAgRIABgdIAAgTIAAgBIAAgCIABgBIAAgCIABgDIABAAIAAAAIAABOIABABIABABIAAACQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAgBQAAAAAAgBg");
	this.shape_29.setTransform(401.0557,992.4561,3.7429,3.7429);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#AA782C").s().p("AACAGIgCgCIgBgCIgCgDIgCgFIACADIADADIADAFQAAAAABAAQAAABABAAQAAAAAAgBQAAAAABAAIgBABIgBABIgCgBg");
	this.shape_30.setTransform(394.6164,982.8478,3.7433,3.7433);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#AA782C").s().p("AAGATIAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIgDgFIgGgRIgEgQIAAgDIAEAPIACAKIABADIAHAMIAAAHIABAIg");
	this.shape_31.setTransform(398.6404,985.7488,3.7433,3.7433);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#916626").s().p("AAIAOQgBgFgDgDIgDgEIgDgCIgEgDQgFgGAAgFIABADIADAEIAEAFQABABAAAAQABAAAAAAQAAAAABAAQAAAAAAgBIAAgCIgCgLIgBgMIADAPIADAKIACADIAGAMIAAAHIABAIg");
	this.shape_32.setTransform(397.0495,985.7488,3.7433,3.7433);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#916626").s().p("AgNAOIAAgEIADgFIACgDIAGgMIACgGIABgEIAAABIgBAJQgCAGACAAIABAAIAFgEQADgDABgFIAFgIQAAABgCAEQgCAHgEAFIgFAEIgFADIgDADQgDADgBAFIgDAKIgBAEg");
	this.shape_33.setTransform(407.2687,988.3691,3.7433,3.7433);

	this.instance_8 = new lib.CompoundPath();
	this.instance_8.setTransform(379.45,1007.35,3.7451,3.7451,0,0,0,7,2.5);
	this.instance_8.compositeOperation = "multiply";

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF8070").s().p("AgcACIAggSIAZAPIggASg");
	this.shape_34.setTransform(401.6418,1007.7348,3.7455,3.7455);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EFEFEF").s().p("AgpACIAtgZIAmAWIgtAZg");
	this.shape_35.setTransform(401.6418,1007.7348,3.7455,3.7455);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#8B8B8B").s().p("AgSgIIAAgEIAlAUIAAAGg");
	this.shape_36.setTransform(393.1207,1013.5404,3.7455,3.7455);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#CACACA").s().p("AgWAKIAtgZIAAAGIgtAZg");
	this.shape_37.setTransform(408.7582,1012.7913,3.7455,3.7455);

	this.instance_9 = new lib.Path_4_6();
	this.instance_9.setTransform(391.45,1009.65,3.7455,3.7455,0,0,0,3.8,2.6);
	this.instance_9.compositeOperation = "multiply";

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#87B997","#7EAF90","#67947E","#416960","#3E665E"],[0,0.188,0.502,0.906,0.929],-0.1,-0.1,0.1,0.2).s().p("AgEAAIAGgDIADACIgJAFg");
	this.shape_38.setTransform(399.857,739.815,3.7433,3.7433);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#87B997","#7EAF90","#67947E","#416960","#3E665E"],[0,0.188,0.502,0.906,0.929],-0.2,0,0.1,0).s().p("AAAgFIABgCIAAAOIgBABg");
	this.shape_39.setTransform(401.1671,736.6332,3.7433,3.7433);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#E6D9AD","#DCD8AE","#C2D6B3","#97D2BA","#7ED0BF"],[0,0.157,0.42,0.757,0.929],1.3,2.2,-0.3,-0.7).s().p("AgEgDIAJgGIAAAAIAAANIAAAAIAAABIgDABIgGAEg");
	this.shape_40.setTransform(399.9506,737.4754,3.7433,3.7433);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#919191").s().p("AgFgDIALgIIAAAQIgLAHg");
	this.shape_41.setTransform(399.9506,737.4754,3.7433,3.7433);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#87B997","#7EAF90","#67947E","#416960","#3E665E"],[0,0.188,0.502,0.906,0.929],-0.1,-0.1,0.1,0.3).s().p("AgEABIAGgEIADACIgJAEg");
	this.shape_42.setTransform(392.5576,744.0261,3.7433,3.7433);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#87B997","#7EAF90","#67947E","#416960","#3E665E"],[0,0.188,0.502,0.906,0.929],-0.2,0,0.1,0).s().p("AAAgFIABgCIAAANIgBACg");
	this.shape_43.setTransform(393.8677,740.9379,3.7433,3.7433);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#E6D9AD","#DCD8AE","#C2D6B3","#97D2BA","#7ED0BF"],[0,0.157,0.42,0.757,0.929],1.2,2.2,-0.4,-0.7).s().p("AgEgDIAJgGIAAANIgJAGg");
	this.shape_44.setTransform(392.5576,741.6866,3.7433,3.7433);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#919191").s().p("AgFgEIALgGIAAAPIgLAGg");
	this.shape_45.setTransform(392.5576,741.6866,3.7433,3.7433);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FDF2D8").s().p("AgzADIA4ggIAvAbIg3Agg");
	this.shape_46.setTransform(388.1807,728.963,3.7438,3.7438);

	this.instance_10 = new lib.Path_0();
	this.instance_10.setTransform(381.35,746.65,3.7433,3.7433,0,0,0,1.4,0.7);
	this.instance_10.compositeOperation = "screen";

	this.instance_11 = new lib.Path_1_1();
	this.instance_11.setTransform(380.4,745.9,3.7433,3.7433,0,0,0,1.2,0.8);
	this.instance_11.compositeOperation = "screen";

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#A8A7A2").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAABg");
	this.shape_47.setTransform(380.817,753.0891,3.7422,3.7422);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F5F5F5").s().p("AAAAAIAAAAIABAAIgBABg");
	this.shape_48.setTransform(380.951,752.167,3.7432,3.7432);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#D1D1D1").s().p("AAAABIAAgBIAAAAIAAAAIABAAIgBABg");
	this.shape_49.setTransform(381.0446,752.167,3.7432,3.7432);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#A8A7A2").s().p("AAAABIAAgBIAAAAIAAAAIAAAAIABAAIAAABIgBAAg");
	this.shape_50.setTransform(381.0446,752.3542,3.7432,3.7432);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#C7C7C7").s().p("AAAADIAAgBIAAgEIAAAAIABABIAAAEg");
	this.shape_51.setTransform(380.951,753.1028,3.7432,3.7432);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#A8A7A2").s().p("AAAADIAAAAIAAgEIAAgBIAAAAIAAAAIABABIAAAEg");
	this.shape_52.setTransform(380.951,753.0092,3.7432,3.7432);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#A8A7A2").s().p("AAAADIAAAAIAAgBIAAgCIAAgCIAAAAIAAAAIABABIAAADIgBABIAAAAg");
	this.shape_53.setTransform(381.0446,753.0092,3.7432,3.7432);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#3A6A5A","#306255","#164E49","#154D48"],[0,0.341,0.914,0.929],-0.5,0,0.5,0).s().p("AgDAEIgBAAIAAgBIAAgLIAAAAIADACIABABIABABIAEACIAAALg");
	this.shape_54.setTransform(378.8791,745.7997,3.7429,3.7429);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#666666").s().p("AgFAEIAAgOIALAHIAAAOg");
	this.shape_55.setTransform(378.7855,745.7997,3.7429,3.7429);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#E0E0E0").s().p("AgFAAIgCAAIAAgHIAPAJIAAAGg");
	this.shape_56.setTransform(378.7855,758.2448,3.7429,3.7429);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#B6B9B6").s().p("AgFAVIgCAAIAAgyIAPAKIAAAxg");
	this.shape_57.setTransform(378.7855,749.9168,3.7429,3.7429);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#666666").s().p("AgIAVIAAgzIARAKIAAAzg");
	this.shape_58.setTransform(378.7855,749.7297,3.7429,3.7429);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#872918").s().p("AgXASIAAg+IAvAbIAAA+g");
	this.shape_59.setTransform(377.6045,746.9333,3.7438,3.7438);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#D4946D").s().p("AgbgOIA3ghIAAA+Ig3Ahg");
	this.shape_60.setTransform(397.0723,745.9038,3.7438,3.7438);

	this.instance_12 = new lib.Path();
	this.instance_12.setTransform(384.65,749.85,3.7442,3.7442,0,0,0,7.4,4.1);
	this.instance_12.compositeOperation = "multiply";

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#C7C4C3").s().p("AAWAbIgsgaQgLgFAAgOQAAgGAFgDQADgBAFACIAsAaQAJAFABANQAAAHgFACIgCABIgFgBg");
	this.shape_61.setTransform(372.6735,906.9975,3.7446,3.7446);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.lf(["#DBDBDB","#D6D6D6","#CECECE","#E2E2E2","#E2E2E2","#FFFFFF","#FEFEFE"],[0,0.224,0.388,0.396,0.624,0.627,1],2,-0.2,0.1,3.2).s().p("AAaAcIgEgCIgsgaQgEgBgEgMIgCgMIADgCQAEgCAEACIAsAaQAKAFAAAOQAAAGgDADIgFACQABAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAg");
	this.shape_62.setTransform(374.1714,906.4833,3.7446,3.7446);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#DEEF9B").s().p("AhFglIAEgCICHBNIgEACg");
	this.shape_63.setTransform(374.733,897.101,3.7446,3.7446);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#B0C56A").s().p("AgBgXIADgCIAAAxIgDACg");
	this.shape_64.setTransform(400.1027,921.2537,3.7446,3.7446);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#79B857").s().p("AhDgMIAAgzICHBNIAAAyg");
	this.shape_65.setTransform(374.0777,906.9306,3.7446,3.7446);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#CCC6CD").s().p("AgmAWIBNgtIAAADIhNAsg");
	this.shape_66.setTransform(452.8549,837.8142,3.7438,3.7438);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#EFEAF0").s().p("AgnAWIBNgsIACAAIhNAtg");
	this.shape_67.setTransform(452.5742,837.4398,3.7438,3.7438);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#C2C2C2").s().p("AAAgEIABgBIAAAKIgBAAg");
	this.shape_68.setTransform(467.2323,831.6169,3.7432,3.7432);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#989898").s().p("AAAAGIAAgLIAAABIABAKg");
	this.shape_69.setTransform(466.858,831.3362,3.7432,3.7432);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#C2C2C2").s().p("AAAgEIAAAAIAAAJIAAAAg");
	this.shape_70.setTransform(460.0266,835.8281,3.7432,3.7432);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#989898").s().p("AAAAFIAAgKIABABIAAAKg");
	this.shape_71.setTransform(459.5587,835.5473,3.7432,3.7432);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#C2C2C2").s().p("AAAgEIABgBIAAAJIgBABg");
	this.shape_72.setTransform(452.7273,840.0392,3.7432,3.7432);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#C2C2C2").s().p("AAAgEIAAAAIAAAJIAAAAg");
	this.shape_73.setTransform(445.428,844.2503,3.7432,3.7432);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#C2C2C2").s().p("AAAgEIAAAAIAAAJIAAAAg");
	this.shape_74.setTransform(438.3159,848.3679,3.7432,3.7432);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#989898").s().p("AAAAFIAAgKIABABIAAAKg");
	this.shape_75.setTransform(437.848,848.0871,3.7432,3.7432);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#CCC6CD").s().p("AgmAWIBNgsIAAABIhNAsg");
	this.shape_76.setTransform(452.8549,842.3067,3.7438,3.7438);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#EFEAF0").s().p("AgnAWIBNgsIACABIhNAsg");
	this.shape_77.setTransform(452.5742,841.7452,3.7438,3.7438);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#C2C2C2").s().p("AAAgEIABgBIAAAKIgBABg");
	this.shape_78.setTransform(467.2323,836.2024,3.7432,3.7432);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#8F8F8F").s().p("AAAAAIAAAAIABAAIgBABg");
	this.shape_79.setTransform(467.0451,833.9565,3.7432,3.7432);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#989898").s().p("AAAAGIAAgLIAAABIABAKg");
	this.shape_80.setTransform(466.858,836.1088,3.7432,3.7432);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#C2C2C2").s().p("AAAgFIAAAAIAAAKIAAABg");
	this.shape_81.setTransform(460.0266,840.4135,3.7432,3.7432);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#989898").s().p("AAAAFIAAgKIABAAIAAALg");
	this.shape_82.setTransform(459.5587,840.3199,3.7432,3.7432);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#8F8F8F").s().p("AAAAAIAAAAIABAAIgBABg");
	this.shape_83.setTransform(452.5402,842.3787,3.7432,3.7432);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#C2C2C2").s().p("AAAgFIAAAAIAAAKIAAABg");
	this.shape_84.setTransform(445.428,848.8358,3.7432,3.7432);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#8F8F8F").s().p("AAAAAIAAAAIABAAIgBABg");
	this.shape_85.setTransform(445.2409,846.4963,3.7432,3.7432);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#C2C2C2").s().p("AAAgFIAAAAIAAALIAAAAg");
	this.shape_86.setTransform(438.3159,852.9533,3.7432,3.7432);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#989898").s().p("AAAAGIAAgMIABABIAAAMg");
	this.shape_87.setTransform(437.848,852.6726,3.7432,3.7432);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#CCC6CD").s().p("AgmAWIBNgtIAAACIhNAsg");
	this.shape_88.setTransform(452.8549,846.4249,3.7438,3.7438);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#EFEAF0").s().p("AgnAXIBNgtIACAAIhNAtg");
	this.shape_89.setTransform(452.5742,846.0505,3.7438,3.7438);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#C2C2C2").s().p("AAAgEIABAAIAAAJIgBABg");
	this.shape_90.setTransform(467.2323,840.2264,3.7432,3.7432);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#989898").s().p("AAAAFIAAgKIAAAAIABALg");
	this.shape_91.setTransform(466.858,839.9456,3.7432,3.7432);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#C2C2C2").s().p("AAAgEIAAAAIAAAJIAAAAg");
	this.shape_92.setTransform(460.0266,844.4375,3.7432,3.7432);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#989898").s().p("AAAAGIAAgLIABABIAAAKg");
	this.shape_93.setTransform(459.5587,844.0632,3.7432,3.7432);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#C2C2C2").s().p("AAAgEIABAAIAAAJIgBAAg");
	this.shape_94.setTransform(452.7273,848.555,3.7432,3.7432);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#C2C2C2").s().p("AAAgEIAAAAIAAAJIAAAAg");
	this.shape_95.setTransform(438.3159,856.9773,3.7432,3.7432);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#989898").s().p("AAAAGIAAgLIABABIAAAKg");
	this.shape_96.setTransform(437.848,856.6966,3.7432,3.7432);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#CCC6CD").s().p("AgmAWIBNgsIAAABIhNAsg");
	this.shape_97.setTransform(452.8549,850.7303,3.7438,3.7438);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#EFEAF0").s().p("AgnAXIBNgtIACABIhNAsg");
	this.shape_98.setTransform(452.5742,850.3559,3.7438,3.7438);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#C2C2C2").s().p("AAAgEIABgBIAAAKIgBABg");
	this.shape_99.setTransform(467.2323,844.7182,3.7432,3.7432);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#8F8F8F").s().p("AAAAAIAAAAIABAAIgBABg");
	this.shape_100.setTransform(467.0451,842.5659,3.7432,3.7432);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#989898").s().p("AAAAFIAAgKIAAABIABAKg");
	this.shape_101.setTransform(466.858,844.7182,3.7432,3.7432);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#C2C2C2").s().p("AAAgEIAAgBIAAAKIAAABg");
	this.shape_102.setTransform(460.0266,849.0229,3.7432,3.7432);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#8F8F8F").s().p("AAAAAIAAAAIABAAIgBABg");
	this.shape_103.setTransform(459.7459,846.6834,3.7432,3.7432);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#989898").s().p("AAAAFIAAgKIABAAIAAALg");
	this.shape_104.setTransform(459.5587,848.9294,3.7432,3.7432);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#C2C2C2").s().p("AAAgFIABAAIAAAKIgBABg");
	this.shape_105.setTransform(452.7273,853.1405,3.7432,3.7432);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#C2C2C2").s().p("AAAgEIAAgBIAAAKIAAABg");
	this.shape_106.setTransform(445.428,857.3516,3.7432,3.7432);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#8F8F8F").s().p("AAAAAIAAAAIABAAIgBABg");
	this.shape_107.setTransform(445.2409,855.1057,3.7432,3.7432);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#C2C2C2").s().p("AAAgFIAAAAIAAAKIAAABg");
	this.shape_108.setTransform(438.3159,861.5627,3.7432,3.7432);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#989898").s().p("AAAAGIAAgMIABABIAAAMg");
	this.shape_109.setTransform(437.848,861.282,3.7432,3.7432);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#A3A3A3").s().p("AgmgUIAAgDIBNAtIAAACg");
	this.shape_110.setTransform(423.2789,837.8142,3.7438,3.7438);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#F2F2F2").s().p("AgngWIACAAIBNAsIgCABg");
	this.shape_111.setTransform(423.5597,837.4398,3.7438,3.7438);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#9C9C9C").s().p("AAAAFIAAgKIAAABIAAAJg");
	this.shape_112.setTransform(408.7444,831.6169,3.7432,3.7432);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#CFCFCF").s().p("AAAgEIABgBIAAALIgBAAg");
	this.shape_113.setTransform(409.2123,831.3362,3.7432,3.7432);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#9C9C9C").s().p("AAAAFIAAgJIABAAIAAAJg");
	this.shape_114.setTransform(416.0437,835.8281,3.7432,3.7432);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#9C9C9C").s().p("AAAAFIAAgJIAAAAIAAAJg");
	this.shape_115.setTransform(430.6423,844.2503,3.7432,3.7432);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#9C9C9C").s().p("AAAAFIAAgJIAAAAIAAAJg");
	this.shape_116.setTransform(437.7544,848.3679,3.7432,3.7432);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#CFCFCF").s().p("AAAgEIABgBIAAAKIgBABg");
	this.shape_117.setTransform(438.2223,848.0871,3.7432,3.7432);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#A3A3A3").s().p("AgmgVIAAgBIBNAsIAAABg");
	this.shape_118.setTransform(423.2789,842.3067,3.7438,3.7438);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#F2F2F2").s().p("AgngVIACgBIBNAsIgCABg");
	this.shape_119.setTransform(423.5597,841.7452,3.7438,3.7438);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#9C9C9C").s().p("AAAAFIAAgKIAAABIAAAKg");
	this.shape_120.setTransform(408.7444,836.2024,3.7432,3.7432);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#6B6B6B").s().p("AAAAAIAAAAIABAAIgBABg");
	this.shape_121.setTransform(409.0252,833.9565,3.7432,3.7432);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#CFCFCF").s().p("AAAgEIABgBIAAALIgBAAg");
	this.shape_122.setTransform(409.2123,836.1088,3.7432,3.7432);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#9C9C9C").s().p("AAAAFIAAgKIABAAIAAALg");
	this.shape_123.setTransform(416.0437,840.4135,3.7432,3.7432);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#9C9C9C").s().p("AAAAGIAAgLIABABIAAAKg");
	this.shape_124.setTransform(423.343,844.5311,3.7432,3.7432);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#6B6B6B").s().p("AAAAAIAAAAIABAAIgBABg");
	this.shape_125.setTransform(423.5302,842.3787,3.7432,3.7432);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#6B6B6B").s().p("AAAAAIAAAAIABAAIgBABg");
	this.shape_126.setTransform(430.8294,846.4963,3.7432,3.7432);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#9C9C9C").s().p("AAAAGIAAgLIAAAAIAAALg");
	this.shape_127.setTransform(437.7544,852.9533,3.7432,3.7432);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#CFCFCF").s().p("AAAgFIABgBIAAAMIgBABg");
	this.shape_128.setTransform(438.2223,852.6726,3.7432,3.7432);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#A3A3A3").s().p("AgmgVIAAgCIBNAtIAAABg");
	this.shape_129.setTransform(423.2789,846.4249,3.7438,3.7438);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#F2F2F2").s().p("AgngWIACAAIBNAtIgCAAg");
	this.shape_130.setTransform(423.5597,846.0505,3.7438,3.7438);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#CFCFCF").s().p("AAAgFIABAAIAAAKIgBABg");
	this.shape_131.setTransform(409.2123,839.9456,3.7432,3.7432);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#9C9C9C").s().p("AAAAFIAAgJIABAAIAAAJg");
	this.shape_132.setTransform(416.0437,844.4375,3.7432,3.7432);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#9C9C9C").s().p("AAAAFIAAgJIABAAIAAAJg");
	this.shape_133.setTransform(423.343,848.555,3.7432,3.7432);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#9C9C9C").s().p("AAAAFIAAgJIAAAAIAAAJg");
	this.shape_134.setTransform(430.6423,852.7662,3.7432,3.7432);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#9C9C9C").s().p("AAAAFIAAgJIAAAAIAAAJg");
	this.shape_135.setTransform(437.7544,856.9773,3.7432,3.7432);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#CFCFCF").s().p("AAAgEIABgBIAAALIgBAAg");
	this.shape_136.setTransform(438.2223,856.6966,3.7432,3.7432);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#A3A3A3").s().p("AgmgVIAAgBIBNAsIAAABg");
	this.shape_137.setTransform(423.2789,850.7303,3.7438,3.7438);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#F2F2F2").s().p("AgngVIACgBIBNAtIgCAAg");
	this.shape_138.setTransform(423.5597,850.3559,3.7438,3.7438);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#9C9C9C").s().p("AAAAFIAAgKIAAABIAAAKg");
	this.shape_139.setTransform(408.7444,844.7182,3.7432,3.7432);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#6B6B6B").s().p("AAAAAIAAAAIABAAIgBABg");
	this.shape_140.setTransform(409.0252,842.5659,3.7432,3.7432);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#CFCFCF").s().p("AAAgEIABgBIAAAKIgBABg");
	this.shape_141.setTransform(409.2123,844.7182,3.7432,3.7432);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#6B6B6B").s().p("AAAAAIAAAAIABAAIgBABg");
	this.shape_142.setTransform(416.2309,846.6834,3.7432,3.7432);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#9C9C9C").s().p("AAAAFIAAgKIABAAIAAALg");
	this.shape_143.setTransform(423.343,853.1405,3.7432,3.7432);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#9C9C9C").s().p("AAAAFIAAgKIAAABIAAAKg");
	this.shape_144.setTransform(430.6423,857.3516,3.7432,3.7432);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#6B6B6B").s().p("AAAAAIAAAAIABAAIgBABg");
	this.shape_145.setTransform(430.8294,855.1057,3.7432,3.7432);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#9C9C9C").s().p("AAAAFIAAgKIAAAAIAAALg");
	this.shape_146.setTransform(437.7544,861.5627,3.7432,3.7432);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#CFCFCF").s().p("AAAgFIABgBIAAAMIgBABg");
	this.shape_147.setTransform(438.2223,861.282,3.7432,3.7432);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#CCC6CD").s().p("AgmAWIBNgsIAAACIhNAsg");
	this.shape_148.setTransform(452.8549,905.9514,3.7438,3.7438);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#EFEAF0").s().p("AgnAXIBNgtIACABIhNAsg");
	this.shape_149.setTransform(452.5742,905.577,3.7438,3.7438);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#C2C2C2").s().p("AAAgEIABgBIAAAKIgBABg");
	this.shape_150.setTransform(467.2323,899.7436,3.7432,3.7432);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#989898").s().p("AAAAFIAAgKIAAABIABAKg");
	this.shape_151.setTransform(466.858,899.4629,3.7432,3.7432);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#C2C2C2").s().p("AAAgEIAAAAIAAAJIAAAAg");
	this.shape_152.setTransform(460.0266,903.9548,3.7432,3.7432);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#989898").s().p("AAAAFIAAgKIABAAIAAALg");
	this.shape_153.setTransform(459.5587,903.674,3.7432,3.7432);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#C2C2C2").s().p("AAAgEIABgBIAAAJIgBACg");
	this.shape_154.setTransform(452.7273,908.1659,3.7432,3.7432);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#C2C2C2").s().p("AAAgEIAAAAIAAAJIAAAAg");
	this.shape_155.setTransform(445.428,912.377,3.7432,3.7432);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#C2C2C2").s().p("AAAgEIAAAAIAAAJIAAAAg");
	this.shape_156.setTransform(438.3159,916.4946,3.7432,3.7432);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#989898").s().p("AAAAFIAAgKIABAAIAAALg");
	this.shape_157.setTransform(437.848,916.2138,3.7432,3.7432);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#CCC6CD").s().p("AgmAVIBNgsIAAACIhNAsg");
	this.shape_158.setTransform(452.8549,910.444,3.7438,3.7438);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#EFEAF0").s().p("AgnAWIBNgsIACABIhNAsg");
	this.shape_159.setTransform(452.5742,909.8824,3.7438,3.7438);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#C2C2C2").s().p("AAAgEIABgBIAAAKIgBABg");
	this.shape_160.setTransform(467.2323,904.3291,3.7432,3.7432);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#8F8F8F").s().p("AAAAAIAAAAIABAAIgBABg");
	this.shape_161.setTransform(467.0451,902.0832,3.7432,3.7432);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#989898").s().p("AAAAGIAAgLIAAABIABAKg");
	this.shape_162.setTransform(466.858,904.2355,3.7432,3.7432);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#C2C2C2").s().p("AAAgFIAAAAIAAAKIAAABg");
	this.shape_163.setTransform(460.0266,908.5402,3.7432,3.7432);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#989898").s().p("AAAAFIAAgKIABAAIAAALg");
	this.shape_164.setTransform(459.5587,908.4466,3.7432,3.7432);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#8F8F8F").s().p("AAAAAIAAAAIABAAIgBABg");
	this.shape_165.setTransform(452.5402,910.5054,3.7432,3.7432);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#C2C2C2").s().p("AAAgEIAAgBIAAAKIAAABg");
	this.shape_166.setTransform(445.428,916.8689,3.7432,3.7432);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#8F8F8F").s().p("AAAAAIAAAAIABAAIgBABg");
	this.shape_167.setTransform(445.2409,914.623,3.7432,3.7432);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#C2C2C2").s().p("AAAgEIAAgBIAAALIAAAAg");
	this.shape_168.setTransform(438.3159,921.08,3.7432,3.7432);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#989898").s().p("AAAAGIAAgMIABABIAAAMg");
	this.shape_169.setTransform(437.848,920.7993,3.7432,3.7432);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#CCC6CD").s().p("AgmAWIBNgtIAAACIhNAsg");
	this.shape_170.setTransform(452.8549,914.5622,3.7438,3.7438);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#EFEAF0").s().p("AgnAWIBNgsIACAAIhNAtg");
	this.shape_171.setTransform(452.5742,914.1878,3.7438,3.7438);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#C2C2C2").s().p("AAAgEIABAAIAAAIIgBABg");
	this.shape_172.setTransform(467.2323,908.3531,3.7432,3.7432);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#989898").s().p("AAAAFIAAgKIAAAAIABALg");
	this.shape_173.setTransform(466.858,908.0723,3.7432,3.7432);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#989898").s().p("AAAAGIAAgLIABABIAAAKg");
	this.shape_174.setTransform(459.5587,912.1899,3.7432,3.7432);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#C2C2C2").s().p("AAAgEIABAAIAAAJIgBAAg");
	this.shape_175.setTransform(452.7273,916.6817,3.7432,3.7432);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#C2C2C2").s().p("AAAgEIAAgBIAAAKIAAAAg");
	this.shape_176.setTransform(445.428,920.8929,3.7432,3.7432);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#C2C2C2").s().p("AAAgEIAAAAIAAAJIAAAAg");
	this.shape_177.setTransform(438.3159,925.104,3.7432,3.7432);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#989898").s().p("AAAAFIAAgKIABABIAAAKg");
	this.shape_178.setTransform(437.848,924.8232,3.7432,3.7432);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#CCC6CD").s().p("AgmAWIBNgtIAAACIhNAsg");
	this.shape_179.setTransform(452.8549,918.8675,3.7438,3.7438);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#EFEAF0").s().p("AgnAWIBNgsIACAAIhNAtg");
	this.shape_180.setTransform(452.5742,918.4932,3.7438,3.7438);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#C2C2C2").s().p("AAAgEIABgBIAAAKIgBABg");
	this.shape_181.setTransform(467.2323,912.8449,3.7432,3.7432);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#8F8F8F").s().p("AAAAAIAAAAIABAAIgBABg");
	this.shape_182.setTransform(467.0451,910.6926,3.7432,3.7432);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#989898").s().p("AAAAFIAAgKIAAABIABAKg");
	this.shape_183.setTransform(466.858,912.8449,3.7432,3.7432);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#C2C2C2").s().p("AAAgEIAAgBIAAAKIAAABg");
	this.shape_184.setTransform(460.0266,917.0561,3.7432,3.7432);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#8F8F8F").s().p("AAAAAIAAAAIABAAIgBABg");
	this.shape_185.setTransform(459.7459,914.8101,3.7432,3.7432);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#989898").s().p("AAAAGIAAgLIABAAIAAALg");
	this.shape_186.setTransform(459.5587,916.9625,3.7432,3.7432);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#C2C2C2").s().p("AAAgFIABAAIAAAKIgBABg");
	this.shape_187.setTransform(452.7273,921.2672,3.7432,3.7432);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#C2C2C2").s().p("AAAgEIAAgBIAAAKIAAABg");
	this.shape_188.setTransform(445.428,925.4783,3.7432,3.7432);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#8F8F8F").s().p("AAAAAIAAAAIABAAIgBABg");
	this.shape_189.setTransform(445.2409,923.2324,3.7432,3.7432);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#C2C2C2").s().p("AAAgFIAAAAIAAAKIAAABg");
	this.shape_190.setTransform(438.3159,929.6894,3.7432,3.7432);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#989898").s().p("AAAAGIAAgMIABABIAAAMg");
	this.shape_191.setTransform(437.848,929.4087,3.7432,3.7432);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#A3A3A3").s().p("AgmgUIAAgCIBNAsIAAACg");
	this.shape_192.setTransform(423.2789,905.9514,3.7438,3.7438);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#F2F2F2").s().p("AgngVIACgBIBNAtIgCAAg");
	this.shape_193.setTransform(423.5597,905.577,3.7438,3.7438);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#9C9C9C").s().p("AAAAFIAAgKIAAABIAAAKg");
	this.shape_194.setTransform(408.7444,899.7436,3.7432,3.7432);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#CFCFCF").s().p("AAAgEIABgBIAAAKIgBABg");
	this.shape_195.setTransform(409.2123,899.4629,3.7432,3.7432);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#9C9C9C").s().p("AAAAFIAAgJIABAAIAAAJg");
	this.shape_196.setTransform(416.0437,903.9548,3.7432,3.7432);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#9C9C9C").s().p("AAAAFIAAgJIAAAAIAAAJg");
	this.shape_197.setTransform(430.6423,912.377,3.7432,3.7432);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#9C9C9C").s().p("AAAAFIAAgJIAAAAIAAAJg");
	this.shape_198.setTransform(437.7544,916.4946,3.7432,3.7432);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#CFCFCF").s().p("AAAgFIABAAIAAAKIgBABg");
	this.shape_199.setTransform(438.2223,916.2138,3.7432,3.7432);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#A3A3A3").s().p("AgmgVIAAgCIBNAsIAAACg");
	this.shape_200.setTransform(423.2789,910.444,3.7438,3.7438);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#F2F2F2").s().p("AgngVIACgBIBNAsIgCABg");
	this.shape_201.setTransform(423.5597,909.8824,3.7438,3.7438);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#9C9C9C").s().p("AAAAFIAAgKIAAABIAAAKg");
	this.shape_202.setTransform(408.7444,904.3291,3.7432,3.7432);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#6B6B6B").s().p("AAAAAIAAAAIABAAIgBABg");
	this.shape_203.setTransform(409.0252,902.0832,3.7432,3.7432);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#CFCFCF").s().p("AAAgEIABgBIAAALIgBAAg");
	this.shape_204.setTransform(409.2123,904.2355,3.7432,3.7432);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#9C9C9C").s().p("AAAAGIAAgLIABABIAAAKg");
	this.shape_205.setTransform(423.343,912.6578,3.7432,3.7432);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#6B6B6B").s().p("AAAAAIAAAAIABAAIgBABg");
	this.shape_206.setTransform(423.5302,910.5054,3.7432,3.7432);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#9C9C9C").s().p("AAAAFIAAgKIAAABIAAAKg");
	this.shape_207.setTransform(430.6423,916.8689,3.7432,3.7432);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#6B6B6B").s().p("AAAAAIAAAAIABAAIgBABg");
	this.shape_208.setTransform(430.8294,914.623,3.7432,3.7432);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#9C9C9C").s().p("AAAAGIAAgLIAAABIAAAKg");
	this.shape_209.setTransform(437.7544,921.08,3.7432,3.7432);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#CFCFCF").s().p("AAAgFIABgBIAAAMIgBABg");
	this.shape_210.setTransform(438.2223,920.7993,3.7432,3.7432);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#A3A3A3").s().p("AgmgVIAAgCIBNAtIAAABg");
	this.shape_211.setTransform(423.2789,914.5622,3.7438,3.7438);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#F2F2F2").s().p("AgngWIACAAIBNAsIgCABg");
	this.shape_212.setTransform(423.5597,914.1878,3.7438,3.7438);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#CFCFCF").s().p("AAAgFIABAAIAAAKIgBABg");
	this.shape_213.setTransform(409.2123,908.0723,3.7432,3.7432);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#9C9C9C").s().p("AAAAFIAAgKIABABIAAAJg");
	this.shape_214.setTransform(416.0437,912.4706,3.7432,3.7432);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#9C9C9C").s().p("AAAAFIAAgJIABAAIAAAJg");
	this.shape_215.setTransform(423.343,916.6817,3.7432,3.7432);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#9C9C9C").s().p("AAAAFIAAgKIAAABIAAAJg");
	this.shape_216.setTransform(430.6423,920.8929,3.7432,3.7432);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#9C9C9C").s().p("AAAAFIAAgJIAAAAIAAAJg");
	this.shape_217.setTransform(437.7544,925.104,3.7432,3.7432);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#CFCFCF").s().p("AAAgEIABgBIAAAKIgBABg");
	this.shape_218.setTransform(438.2223,924.8232,3.7432,3.7432);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#A3A3A3").s().p("AgmgVIAAgCIBNAtIAAABg");
	this.shape_219.setTransform(423.2789,918.8675,3.7438,3.7438);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#F2F2F2").s().p("AgngWIACAAIBNAsIgCABg");
	this.shape_220.setTransform(423.5597,918.4932,3.7438,3.7438);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#9C9C9C").s().p("AAAAFIAAgKIAAABIAAAKg");
	this.shape_221.setTransform(408.7444,912.8449,3.7432,3.7432);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#6B6B6B").s().p("AAAAAIAAAAIABAAIgBABg");
	this.shape_222.setTransform(409.0252,910.6926,3.7432,3.7432);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#CFCFCF").s().p("AAAgEIABgBIAAAKIgBABg");
	this.shape_223.setTransform(409.2123,912.8449,3.7432,3.7432);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#9C9C9C").s().p("AAAAFIAAgKIABABIAAAKg");
	this.shape_224.setTransform(416.0437,917.0561,3.7432,3.7432);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#6B6B6B").s().p("AAAAAIAAAAIABAAIgBABg");
	this.shape_225.setTransform(416.2309,914.8101,3.7432,3.7432);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#9C9C9C").s().p("AAAAFIAAgKIABAAIAAALg");
	this.shape_226.setTransform(423.343,921.2672,3.7432,3.7432);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#9C9C9C").s().p("AAAAFIAAgKIAAABIAAAKg");
	this.shape_227.setTransform(430.6423,925.4783,3.7432,3.7432);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#6B6B6B").s().p("AAAAAIAAAAIABAAIgBABg");
	this.shape_228.setTransform(430.8294,923.2324,3.7432,3.7432);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#CFCFCF").s().p("AAAgFIABgBIAAAMIgBABg");
	this.shape_229.setTransform(438.2223,929.4087,3.7432,3.7432);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#D4946D").s().p("AhKAOICVhVIAAA6IiVBVg");
	this.shape_230.setTransform(466.1297,858.5507,3.7451,3.7451);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#872918").s().p("Ah/gsIAAg6ID/CTIAAA6g");
	this.shape_231.setTransform(390.1051,847.0347,3.7451,3.7451);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#D4946D").s().p("AhKAOICVhVIAAA6IiVBVg");
	this.shape_232.setTransform(466.1297,926.7107,3.7451,3.7451);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#872918").s().p("Ah/gsIAAg6ID/CTIAAA6g");
	this.shape_233.setTransform(390.1051,915.1947,3.7451,3.7451);

	this.instance_13 = new lib.Path_4_5();
	this.instance_13.setTransform(468.6,757.5,3.7451,3.7451,0,0,0,13.7,13.3);
	this.instance_13.compositeOperation = "multiply";

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#B8B8B8").s().p("AhyA9IDliDIAAAKIjlCEg");
	this.shape_234.setTransform(482.203,789.163,3.7446,3.7446);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#616161").s().p("AiJhJIAAgKIETCdIAAALg");
	this.shape_235.setTransform(387.5583,784.295,3.7446,3.7446);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#CCCCCC").s().p("AhnA4IDOh4IAAASIi+Bvg");
	this.shape_236.setTransform(383.3456,731.8706,3.7446,3.7446);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#A3A3A3").s().p("Ah9g7IAAgSID7CSIgPAJg");
	this.shape_237.setTransform(469.3778,736.7386,3.7446,3.7446);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#BDBDBD").s().p("AjlgMIDPh4ID8CRIjPB4g");
	this.shape_238.setTransform(430.6212,757.4275,3.7446,3.7446);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#EFEFEF").s().p("Aj8gMIDmiFIETCeIjmCFg");
	this.shape_239.setTransform(430.6212,757.5211,3.7446,3.7446);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#9C938D").s().p("AhvA7IDfh/IAAAJIjfCAg");
	this.shape_240.setTransform(480.3307,793.0012,3.7446,3.7446);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#4F4542").s().p("AiEhHIAAgKIEJCYIAAAKg");
	this.shape_241.setTransform(388.8689,788.4141,3.7446,3.7446);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#EFEFEF").s().p("AjzgLIDfiBIEICYIjfCBg");
	this.shape_242.setTransform(430.6212,762.4827,3.7446,3.7446);

	this.instance_14 = new lib.Path_5();
	this.instance_14.setTransform(439.6,818.75,3.7451,3.7451,0,0,0,8.3,4.5);
	this.instance_14.compositeOperation = "multiply";

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#D4946D").s().p("AgDAtIAAhXIAGgCIAABZg");
	this.shape_243.setTransform(416.1109,818.9326,3.7446,3.7446);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#E8C7B2").s().p("AgXALIArgYIAEADIgrAYg");
	this.shape_244.setTransform(424.7234,830.3536,3.7446,3.7446);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#872918").s().p("AgBApIAAhRIADgCIAABWg");
	this.shape_245.setTransform(432.9616,809.7583,3.7446,3.7446);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#686868").s().p("AAAgoIABgBIAABSIgBABg");
	this.shape_246.setTransform(416.0915,819.0139,3.7442,3.7442);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#3D3D3D").s().p("AAAAmIAAhLIABgBIAABNg");
	this.shape_247.setTransform(423.3927,814.5208,3.7442,3.7442);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#686868").s().p("AAAgnIABgCIAABSIgBABg");
	this.shape_248.setTransform(424.1415,814.3336,3.7442,3.7442);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#3D3D3D").s().p("AAAAmIAAhLIABgBIAABNg");
	this.shape_249.setTransform(431.0683,810.1214,3.7442,3.7442);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#686868").s().p("AAAgnIABgBIAABRIgBABg");
	this.shape_250.setTransform(431.8171,809.9342,3.7442,3.7442);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#9C9C9C").s().p("AgTAwIAlgVIAAhMIACgBIAABOIgnAWg");
	this.shape_251.setTransform(423.9543,814.4272,3.7442,3.7442);

	this.instance_15 = new lib.Path_6_5();
	this.instance_15.setTransform(424.95,815,3.7442,3.7442,0,0,0,2.2,4.9);
	this.instance_15.compositeOperation = "screen";

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.lf(["#ACE9C8","#A1E4C5","#7AD1BB","#6BCAB7"],[0,0.129,0.655,0.929],1.8,3.1,-1.5,-2.7).s().p("AgTgaIAngYIAABOIgnAWg");
	this.shape_252.setTransform(423.9543,814.4272,3.7442,3.7442);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#686868").s().p("AgVgcIArgZIAABRIgrAag");
	this.shape_253.setTransform(423.9543,814.5208,3.7442,3.7442);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#D4946D").s().p("AgmgjIBNgtIAAB0IhNAtg");
	this.shape_254.setTransform(423.3192,816.4049,3.7446,3.7446);

	this.instance_16 = new lib.Path_1_0();
	this.instance_16.setTransform(439.75,840.65,3.7446,3.7446,0,0,0,8.4,2.9);
	this.instance_16.compositeOperation = "multiply";

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#EFEFEF").s().p("AhOAAIBOgsIBPAsIhPAug");
	this.shape_255.setTransform(438.1104,846.8298,3.7446,3.7446);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#D1D1D1").s().p("AgUgJIAEgCIAlAVIgFACg");
	this.shape_256.setTransform(447.2392,834.164,3.7438,3.7438);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#D4946D").s().p("AgBg1IADACIAABmIgDADg");
	this.shape_257.setTransform(440.2196,810.2972,3.7438,3.7438);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#686868").s().p("AAAAzIAAhmIABABIAABmg");
	this.shape_258.setTransform(454.6025,818.2368,3.7433,3.7433);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#3D3D3D").s().p("AAAgwIABAAIAABhIgBAAg");
	this.shape_259.setTransform(442.0625,810.6566,3.7433,3.7433);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#686868").s().p("AAAAzIAAhnIABABIAABog");
	this.shape_260.setTransform(441.3139,810.4695,3.7433,3.7433);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#9C9C9C").s().p("AgQAoIAAhiIACABIAABgIAfASIAAACg");
	this.shape_261.setTransform(447.9582,814.3063,3.7433,3.7433);

	this.instance_17 = new lib.Path_4_4();
	this.instance_17.setTransform(453.25,816.3,3.7433,3.7433,0,0,0,2.8,6.2);
	this.instance_17.compositeOperation = "screen";

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.lf(["#567E71","#4C766B","#32615C","#2F5E5A"],[0,0.325,0.878,0.929],-2.2,-3.5,2.1,3.9).s().p("AgQAoIAAhiIAhATIAABig");
	this.shape_262.setTransform(447.9582,814.3063,3.7433,3.7433);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#686868").s().p("AgSApIAAhnIAlAWIAABng");
	this.shape_263.setTransform(447.9582,814.3063,3.7433,3.7433);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#872918").s().p("AgCA3IAAhtIAGACIAABrg");
	this.shape_264.setTransform(464.3671,823.8685,3.7438,3.7438);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#D1D1D1").s().p("AgPgGIAEgDIAbAQIgEADg");
	this.shape_265.setTransform(458.6578,840.9964,3.7438,3.7438);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#872918").s().p("AgBg1IADACIAABnIgDACg");
	this.shape_266.setTransform(453.4165,818.0656,3.7438,3.7438);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#686868").s().p("AAAAzIAAhnIABABIAABog");
	this.shape_267.setTransform(464.3351,823.9453,3.7433,3.7433);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#3D3D3D").s().p("AAAgxIABABIAABhIgBABg");
	this.shape_268.setTransform(455.2576,818.424,3.7433,3.7433);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#686868").s().p("AAAAzIAAhmIABABIAABmg");
	this.shape_269.setTransform(454.6025,818.2368,3.7433,3.7433);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#9C9C9C").s().p("AgLArIAAhjIACABIAABhIAVANIAAACg");
	this.shape_270.setTransform(459.4688,821.0443,3.7433,3.7433);

	this.instance_18 = new lib.Path_4_3();
	this.instance_18.setTransform(462.8,821.55,3.7433,3.7433,0,0,0,1.8,5.5);
	this.instance_18.compositeOperation = "screen";

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.lf(["#567E71","#4C766B","#32615C","#2F5E5A"],[0,0.325,0.878,0.929],-2.2,-3.5,2.1,3.9).s().p("AgLArIAAhjIAXAPIAABig");
	this.shape_271.setTransform(459.4688,821.0443,3.7433,3.7433);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#686868").s().p("AgNArIAAhmIAbAQIAABng");
	this.shape_272.setTransform(459.4688,821.1378,3.7433,3.7433);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#872918").s().p("AgnAkIAAh0IBOAtIAAB0g");
	this.shape_273.setTransform(452.8079,816.4049,3.7446,3.7446);

	this.instance_19 = new lib.Path_6_4();
	this.instance_19.setTransform(439.6,886.2,3.7451,3.7451,0,0,0,8.3,4.7);
	this.instance_19.compositeOperation = "multiply";

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#D4946D").s().p("AgCAsIAAhWIAFgBIAABXg");
	this.shape_274.setTransform(487.7263,812.2859,3.7446,3.7446);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#E8C7B2").s().p("AgPAHIAbgPIAEACIgbAQg");
	this.shape_275.setTransform(493.4368,825.2984,3.7446,3.7446);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#872918").s().p("AgBApIAAhRIADgCIAABVg");
	this.shape_276.setTransform(498.6793,806.4818,3.7446,3.7446);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#686868").s().p("AAAgoIABAAIAABQIgBABg");
	this.shape_277.setTransform(487.6993,812.3679,3.7442,3.7442);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#3D3D3D").s().p("AAAAmIAAhLIABgBIAABNg");
	this.shape_278.setTransform(496.779,806.8452,3.7442,3.7442);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#686868").s().p("AAAgoIABgBIAABRIgBACg");
	this.shape_279.setTransform(497.5278,806.658,3.7442,3.7442);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#9C9C9C").s().p("AgLArIAVgMIAAhLIACgBIAABNIgXAOg");
	this.shape_280.setTransform(492.5668,809.5597,3.7442,3.7442);

	this.instance_20 = new lib.Path_4_2();
	this.instance_20.setTransform(493.9,810.35,3.7442,3.7442,0,0,0,1.5,4.5);
	this.instance_20.compositeOperation = "screen";

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.lf(["#ACE9C8","#A1E4C5","#7AD1BB","#6BCAB7"],[0,0.129,0.655,0.929],1.8,3.1,-1.6,-2.7).s().p("AgLgfIAXgOIAABNIgXAOg");
	this.shape_281.setTransform(492.5668,809.5597,3.7442,3.7442);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#686868").s().p("AgNggIAbgQIAABRIgbAQg");
	this.shape_282.setTransform(492.6604,809.4661,3.7442,3.7442);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#D4946D").s().p("AgCAsIAAhVIAFgDIAABYg");
	this.shape_283.setTransform(487.7263,882.778,3.7446,3.7446);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#E8C7B2").s().p("AgPAHIAbgQIAEADIgbAPg");
	this.shape_284.setTransform(493.4368,895.884,3.7446,3.7446);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#872918").s().p("AgBApIAAhRIADgDIAABWg");
	this.shape_285.setTransform(498.6793,876.9738,3.7446,3.7446);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#686868").s().p("AAAgnIABgCIAABSIgBABg");
	this.shape_286.setTransform(487.6993,882.8525,3.7442,3.7442);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#3D3D3D").s().p("AAAAmIAAhLIABgBIAABNg");
	this.shape_287.setTransform(496.779,877.3298,3.7442,3.7442);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#686868").s().p("AAAgoIABgBIAABRIgBABg");
	this.shape_288.setTransform(497.5278,877.1426,3.7442,3.7442);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#9C9C9C").s().p("AgLAsIAVgNIAAhLIACgBIAABNIgXAOg");
	this.shape_289.setTransform(492.5668,879.9507,3.7442,3.7442);

	this.instance_21 = new lib.Path_4_1();
	this.instance_21.setTransform(493.9,880.55,3.7442,3.7442,0,0,0,1.5,4.4);
	this.instance_21.compositeOperation = "screen";

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.lf(["#ACE9C8","#A1E4C5","#7AD1BB","#6BCAB7"],[0,0.129,0.655,0.929],1.8,3.1,-1.6,-2.7).s().p("AgLgeIAXgPIAABNIgXAOg");
	this.shape_290.setTransform(492.5668,879.9507,3.7442,3.7442);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#686868").s().p("AgNggIAbgQIAABRIgbAQg");
	this.shape_291.setTransform(492.6604,880.0443,3.7442,3.7442);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#D4946D").s().p("AgDAsIAAhWIAGgBIAABXg");
	this.shape_292.setTransform(416.1109,884.7439,3.7446,3.7446);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#E8C7B2").s().p("AgXALIArgYIAEADIgrAYg");
	this.shape_293.setTransform(424.7234,896.0713,3.7446,3.7446);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#872918").s().p("AgBApIAAhRIADgCIAABWg");
	this.shape_294.setTransform(432.9616,875.476,3.7446,3.7446);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#686868").s().p("AAAgoIABAAIAABQIgBABg");
	this.shape_295.setTransform(416.0915,884.8182,3.7442,3.7442);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#3D3D3D").s().p("AAAAmIAAhLIABgBIAABNg");
	this.shape_296.setTransform(423.3927,880.3252,3.7442,3.7442);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#686868").s().p("AAAgoIABAAIAABQIgBABg");
	this.shape_297.setTransform(424.1415,880.1379,3.7442,3.7442);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#3D3D3D").s().p("AAAAmIAAhKIABgCIAABNg");
	this.shape_298.setTransform(431.0683,875.8321,3.7442,3.7442);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#686868").s().p("AAAgnIABgBIAABRIgBABg");
	this.shape_299.setTransform(431.8171,875.6449,3.7442,3.7442);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#9C9C9C").s().p("AgTAxIAlgWIAAhLIACgCIAABOIgnAWg");
	this.shape_300.setTransform(423.9543,880.1379,3.7442,3.7442);

	this.instance_22 = new lib.Path_6_3();
	this.instance_22.setTransform(424.95,880.75,3.7442,3.7442,0,0,0,2.2,4.9);
	this.instance_22.compositeOperation = "screen";

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.lf(["#ACE9C8","#A1E4C5","#7AD1BB","#6BCAB7"],[0,0.129,0.655,0.929],1.8,3.1,-1.5,-2.7).s().p("AgTgaIAngYIAABOIgnAWg");
	this.shape_301.setTransform(423.9543,880.1379,3.7442,3.7442);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#686868").s().p("AgVgbIArgaIAABRIgrAag");
	this.shape_302.setTransform(423.9543,880.2316,3.7442,3.7442);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#D1D1D1").s().p("AgUgJIAEgCIAlAVIgFACg");
	this.shape_303.setTransform(447.2619,902.3223,3.7442,3.7442);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#D4946D").s().p("AgBg1IADACIAABmIgDADg");
	this.shape_304.setTransform(440.2416,878.4531,3.7442,3.7442);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#686868").s().p("AAAA0IAAhoIABACIAABng");
	this.shape_305.setTransform(454.6333,886.2964,3.7438,3.7438);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#3D3D3D").s().p("AAAgxIABABIAABgIgBABg");
	this.shape_306.setTransform(442.0915,878.8088,3.7438,3.7438);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#686868").s().p("AAAAzIAAhmIABABIAABmg");
	this.shape_307.setTransform(441.3427,878.528,3.7438,3.7438);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#9C9C9C").s().p("AgQAoIAAhiIACABIAABgIAfASIAAACg");
	this.shape_308.setTransform(447.988,882.459,3.7438,3.7438);

	this.instance_23 = new lib.Path_4_0();
	this.instance_23.setTransform(452.7,884.3,3.7438,3.7438,0,0,0,2.6,6.1);
	this.instance_23.compositeOperation = "screen";

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.lf(["#567E71","#4C766B","#32615C","#2F5E5A"],[0,0.325,0.878,0.929],-2.2,-3.5,2.1,3.9).s().p("AgQAoIAAhiIAhATIAABig");
	this.shape_309.setTransform(447.988,882.459,3.7438,3.7438);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#686868").s().p("AgSApIAAhnIAlAWIAABng");
	this.shape_310.setTransform(447.988,882.459,3.7438,3.7438);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#872918").s().p("AgCA3IAAhtIAGACIAABrg");
	this.shape_311.setTransform(464.3917,891.9322,3.7442,3.7442);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#D1D1D1").s().p("AgPgGIAEgCIAbAPIgEACg");
	this.shape_312.setTransform(458.6818,909.0619,3.7442,3.7442);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#872918").s().p("AgBg1IADACIAABnIgDACg");
	this.shape_313.setTransform(453.4399,886.2223,3.7442,3.7442);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#686868").s().p("AAAAzIAAhmIABABIAABmg");
	this.shape_314.setTransform(464.3671,892.0057,3.7438,3.7438);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#3D3D3D").s().p("AAAgxIABABIAABhIgBABg");
	this.shape_315.setTransform(455.2884,886.4836,3.7438,3.7438);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#686868").s().p("AAAA0IAAhoIABACIAABng");
	this.shape_316.setTransform(454.6333,886.2964,3.7438,3.7438);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#9C9C9C").s().p("AgLAqIAAhiIACABIAABgIAVAOIAAACg");
	this.shape_317.setTransform(459.5002,889.1979,3.7438,3.7438);

	this.instance_24 = new lib.Path_4();
	this.instance_24.setTransform(462.6,889.75,3.7438,3.7438,0,0,0,1.7,5.5);
	this.instance_24.compositeOperation = "screen";

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.lf(["#567E71","#4C766B","#32615C","#2F5E5A"],[0,0.325,0.878,0.929],-2.2,-3.5,2.1,3.9).s().p("AgLAqIAAhiIAXAOIAABjg");
	this.shape_318.setTransform(459.5002,889.1979,3.7438,3.7438);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#686868").s().p("AgNAsIAAhnIAbAQIAABng");
	this.shape_319.setTransform(459.5002,889.1043,3.7438,3.7438);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#D4946D").s().p("AgmgsIBNgkIAAB0IhNAtg");
	this.shape_320.setTransform(423.3192,884.5566,3.7446,3.7446);

	this.instance_25 = new lib.Path_1();
	this.instance_25.setTransform(439.75,909.25,3.7446,3.7446,0,0,0,8.4,3);
	this.instance_25.compositeOperation = "multiply";

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#EFEFEF").s().p("AhOAAIBOgsIBPAsIhPAug");
	this.shape_321.setTransform(438.1104,914.9815,3.7446,3.7446);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#872918").s().p("AgnAkIAAh0IBOAkIAAB9g");
	this.shape_322.setTransform(452.8079,884.5566,3.7446,3.7446);

	this.instance_26 = new lib.Path_7();
	this.instance_26.setTransform(439.6,953.6,3.7451,3.7451,0,0,0,8.3,4.5);
	this.instance_26.compositeOperation = "multiply";

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#D4946D").s().p("AgCA5IAAhxIAFAAIAABxg");
	this.shape_323.setTransform(415.1747,957.1082,3.7446,3.7446);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#872918").s().p("AgBA3IAAhtIADgCIAABxg");
	this.shape_324.setTransform(438.8593,943.6277,3.7446,3.7446);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#BABABA").s().p("AgBAAIABAAIACAAIgCABg");
	this.shape_325.setTransform(436.8718,929.4678,3.7442,3.7442);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#BABABA").s().p("AAAAAIAAAAIABAAIgBABg");
	this.shape_326.setTransform(425.5456,936.0202,3.7442,3.7442);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#686868").s().p("AgcAQIA5ghIAAADIg5Agg");
	this.shape_327.setTransform(426.4816,936.1138,3.7442,3.7442);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#686868").s().p("AAAg2IABgBIAABuIgBABg");
	this.shape_328.setTransform(415.1554,956.8005,3.7442,3.7442);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#3D3D3D").s().p("AAAA0IAAhnIABgBIAABpg");
	this.shape_329.setTransform(425.6392,950.5289,3.7442,3.7442);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#686868").s().p("AAAg2IABgBIAABuIgBABg");
	this.shape_330.setTransform(426.388,950.2481,3.7442,3.7442);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#3D3D3D").s().p("AAAA0IAAhnIABgBIAABpg");
	this.shape_331.setTransform(437.059,943.9766,3.7442,3.7442);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#686868").s().p("AAAg2IABgBIAABuIgBABg");
	this.shape_332.setTransform(437.7142,943.6958,3.7442,3.7442);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#9C9C9C").s().p("AgcBEIA3ghIAAhnIACgBIAABpIg5Aig");
	this.shape_333.setTransform(426.4816,950.2481,3.7442,3.7442);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#BABABA").s().p("AgcAPIA5ggIAAACIg5Ahg");
	this.shape_334.setTransform(426.4816,935.3649,3.7442,3.7442);

	this.instance_27 = new lib.Path_10_2();
	this.instance_27.setTransform(427.6,951,3.7442,3.7442,0,0,0,3.2,6.8);
	this.instance_27.compositeOperation = "screen";

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.lf(["#ACE9C8","#A1E4C5","#7AD1BB","#6BCAB7"],[0,0.129,0.655,0.929],2.4,4.2,-2.2,-3.7).s().p("AgcgjIA5giIAABpIg5Aig");
	this.shape_335.setTransform(426.4816,950.2481,3.7442,3.7442);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#686868").s().p("AgegkIA9gkIAABtIg9Akg");
	this.shape_336.setTransform(426.388,950.2481,3.7442,3.7442);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#872918").s().p("AgCA5IAAhyIAFAAIAAByg");
	this.shape_337.setTransform(462.6375,958.0444,3.7446,3.7446);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#BABABA").s().p("AAAAAIABAAIAAAAIAAABg");
	this.shape_338.setTransform(440.8968,930.4039,3.7442,3.7442);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#BABABA").s().p("AAAAAIAAAAIABAAIAAABg");
	this.shape_339.setTransform(452.223,936.9562,3.7442,3.7442);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#686868").s().p("AgcgOIAAgDIA5AhIAAACg");
	this.shape_340.setTransform(451.3806,937.0498,3.7442,3.7442);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#686868").s().p("AAAA3IAAhuIABABIAABug");
	this.shape_341.setTransform(462.6132,957.7365,3.7442,3.7442);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#3D3D3D").s().p("AAAg0IABABIAABnIgBABg");
	this.shape_342.setTransform(452.0358,951.465,3.7442,3.7442);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#686868").s().p("AAAA3IAAhuIABABIAABug");
	this.shape_343.setTransform(451.287,951.1842,3.7442,3.7442);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#3D3D3D").s().p("AAAg0IABABIAABnIgBABg");
	this.shape_344.setTransform(440.8032,944.9126,3.7442,3.7442);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#686868").s().p("AAAA3IAAhuIABABIAABug");
	this.shape_345.setTransform(440.0544,944.6318,3.7442,3.7442);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#9C9C9C").s().p("AgcAkIAAhpIACABIAABnIA3AhIAAACg");
	this.shape_346.setTransform(451.3806,951.1842,3.7442,3.7442);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#BABABA").s().p("AgcgPIAAgCIA5AhIAAACg");
	this.shape_347.setTransform(451.3806,936.301,3.7442,3.7442);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#497E1F").s().p("AgcAkIAAhpIA5AiIAABpg");
	this.shape_348.setTransform(451.3806,951.1842,3.7442,3.7442);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#686868").s().p("AgeAlIAAhtIA9AkIAABtg");
	this.shape_349.setTransform(451.287,951.1842,3.7442,3.7442);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#D4946D").s().p("AgmgqIBNgpIAAB1Ig9AkIAEACIgUAMg");
	this.shape_350.setTransform(423.3192,951.6786,3.7446,3.7446);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#872918").s().p("AAXBKIAEgCIhCgmIAAh1IBOApIAAB+g");
	this.shape_351.setTransform(452.8079,951.6786,3.7446,3.7446);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#872918").s().p("AgCA6IAAhyIAGAAIAAByg");
	this.shape_352.setTransform(373.4224,938.0108,3.7446,3.7446);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#E8C7B2").s().p("AgggQIAEgCIA9AjIgEACg");
	this.shape_353.setTransform(361.3461,952.3339,3.7446,3.7446);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#D4946D").s().p("AgBg4IADABIAABuIgDADg");
	this.shape_354.setTransform(349.7379,924.5302,3.7446,3.7446);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#BABABA").s().p("AAAAAIABAAIABAAIgBABg");
	this.shape_355.setTransform(351.6912,910.3724,3.7442,3.7442);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#BABABA").s().p("AAAAAIABAAIAAAAIAAABg");
	this.shape_356.setTransform(363.0174,916.8311,3.7442,3.7442);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#686868").s().p("AgcgPIAAgCIA5AhIAAACg");
	this.shape_357.setTransform(362.0814,917.0183,3.7442,3.7442);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#686868").s().p("AAAA3IAAhuIABABIAABug");
	this.shape_358.setTransform(373.4076,937.705,3.7442,3.7442);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#3D3D3D").s().p("AAAg0IABACIAABmIgBABg");
	this.shape_359.setTransform(362.9238,931.2463,3.7442,3.7442);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#686868").s().p("AAAA3IAAhuIABABIAABug");
	this.shape_360.setTransform(362.175,931.1527,3.7442,3.7442);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#3D3D3D").s().p("AAAg0IABABIAABnIgBABg");
	this.shape_361.setTransform(351.504,924.8812,3.7442,3.7442);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#686868").s().p("AAAA3IAAhuIABABIAABug");
	this.shape_362.setTransform(350.8487,924.6003,3.7442,3.7442);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#9C9C9C").s().p("AgcAkIAAhpIACABIAABnIA3AhIAAACg");
	this.shape_363.setTransform(362.0814,931.1527,3.7442,3.7442);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#BABABA").s().p("AgcgPIAAgCIA5AhIAAACg");
	this.shape_364.setTransform(362.0814,916.2695,3.7442,3.7442);

	this.instance_28 = new lib.Path_10_1();
	this.instance_28.setTransform(364.45,931.9,3.7442,3.7442,0,0,0,3.1,6.8);
	this.instance_28.compositeOperation = "screen";

	this.instance_29 = new lib.Path_11_0();
	this.instance_29.setTransform(361.25,917.7,3.7442,3.7442,0,0,0,2.9,3.4);
	this.instance_29.compositeOperation = "screen";

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.lf(["#567E71","#4C766B","#32615C","#2F5E5A"],[0,0.325,0.878,0.929],-2.4,-3.8,2.2,4.1).s().p("AgcAkIAAhpIA5AiIAABpg");
	this.shape_365.setTransform(362.0814,931.1527,3.7442,3.7442);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#686868").s().p("AgeAlIAAhtIA9AkIAABtg");
	this.shape_366.setTransform(362.175,931.1527,3.7442,3.7442);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#872918").s().p("AgCAsIAAhXIAFABIAABWg");
	this.shape_367.setTransform(374.6394,802.5499,3.7446,3.7446);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#E8C7B2").s().p("AgXgLIAFgCIAqAZIgEACg");
	this.shape_368.setTransform(365.9332,813.6901,3.7446,3.7446);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#D4946D").s().p("AgBgqIADACIAABRIgDACg");
	this.shape_369.setTransform(357.7887,793.1884,3.7446,3.7446);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#686868").s().p("AAAApIAAhSIABACIAABRg");
	this.shape_370.setTransform(374.5308,802.4458,3.7442,3.7442);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#3D3D3D").s().p("AAAgmIABACIAABKIgBABg");
	this.shape_371.setTransform(367.4168,797.9527,3.7442,3.7442);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#686868").s().p("AAAApIAAhRIABABIAABRg");
	this.shape_372.setTransform(366.668,797.7655,3.7442,3.7442);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#3D3D3D").s().p("AAAgmIABABIAABLIgBABg");
	this.shape_373.setTransform(359.7412,793.5533,3.7442,3.7442);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#686868").s().p("AAAAoIAAhRIABABIAABRg");
	this.shape_374.setTransform(358.9924,793.2725,3.7442,3.7442);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#9C9C9C").s().p("AgTAbIAAhNIACABIAABLIAlAWIAAACg");
	this.shape_375.setTransform(366.7616,797.9527,3.7442,3.7442);

	this.instance_30 = new lib.Path_6_2();
	this.instance_30.setTransform(369.15,798.55,3.7442,3.7442,0,0,0,2.2,4.9);
	this.instance_30.compositeOperation = "screen";

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.lf(["#567E71","#4C766B","#32615C","#2F5E5A"],[0,0.325,0.878,0.929],-1.7,-2.7,1.7,3.1).s().p("AgTAbIAAhNIAnAYIAABMg");
	this.shape_376.setTransform(366.7616,797.9527,3.7442,3.7442);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#686868").s().p("AgVAcIAAhRIArAaIAABRg");
	this.shape_377.setTransform(366.7616,797.8591,3.7442,3.7442);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#872918").s().p("AgDAsIAAhXIAGABIAABWg");
	this.shape_378.setTransform(398.8857,816.4049,3.7446,3.7446);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#E8C7B2").s().p("AgXgKIAEgDIArAYIgFADg");
	this.shape_379.setTransform(390.2731,827.7324,3.7446,3.7446);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#D4946D").s().p("AgBgqIADACIAABRIgDACg");
	this.shape_380.setTransform(382.035,807.2307,3.7446,3.7446);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#686868").s().p("AAAAoIAAhRIABABIAABRg");
	this.shape_381.setTransform(398.8681,816.4865,3.7442,3.7442);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#3D3D3D").s().p("AAAgmIABABIAABLIgBABg");
	this.shape_382.setTransform(391.5669,811.9935,3.7442,3.7442);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#686868").s().p("AAAAoIAAhRIABABIAABRg");
	this.shape_383.setTransform(390.8181,811.8063,3.7442,3.7442);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#3D3D3D").s().p("AAAgmIABACIAABKIgBABg");
	this.shape_384.setTransform(383.8913,807.5004,3.7442,3.7442);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#686868").s().p("AAAApIAAhRIABABIAABQg");
	this.shape_385.setTransform(383.1425,807.3132,3.7442,3.7442);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#9C9C9C").s().p("AgTAbIAAhNIACACIAABKIAlAWIAAADg");
	this.shape_386.setTransform(391.0053,811.8999,3.7442,3.7442);

	this.instance_31 = new lib.Path_6_1();
	this.instance_31.setTransform(393.5,812.95,3.7442,3.7442,0,0,0,2.2,5);
	this.instance_31.compositeOperation = "screen";

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.lf(["#567E71","#4C766B","#32615C","#2F5E5A"],[0,0.325,0.878,0.929],-1.7,-2.8,1.6,3).s().p("AgTAbIAAhNIAnAYIAABNg");
	this.shape_387.setTransform(391.0053,811.8999,3.7442,3.7442);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#686868").s().p("AgVAcIAAhRIArAaIAABRg");
	this.shape_388.setTransform(391.0053,811.8999,3.7442,3.7442);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#872918").s().p("AgCAsIAAhXIAFABIAABWg");
	this.shape_389.setTransform(374.6394,868.2676,3.7446,3.7446);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#E8C7B2").s().p("AgXgLIAFgCIAqAYIgEADg");
	this.shape_390.setTransform(365.9332,879.5014,3.7446,3.7446);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#D4946D").s().p("AgBgqIADACIAABRIgDACg");
	this.shape_391.setTransform(357.7887,858.9061,3.7446,3.7446);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#686868").s().p("AAAApIAAhSIABACIAABRg");
	this.shape_392.setTransform(374.5308,868.1565,3.7442,3.7442);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#3D3D3D").s().p("AAAgmIABABIAABLIgBABg");
	this.shape_393.setTransform(367.4168,863.7571,3.7442,3.7442);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#686868").s().p("AAAAoIAAhRIABABIAABSg");
	this.shape_394.setTransform(366.668,863.5699,3.7442,3.7442);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#3D3D3D").s().p("AAAgmIABABIAABLIgBABg");
	this.shape_395.setTransform(359.7412,859.264,3.7442,3.7442);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#686868").s().p("AAAApIAAhSIABABIAABSg");
	this.shape_396.setTransform(358.9924,859.0768,3.7442,3.7442);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#9C9C9C").s().p("AgTAbIAAhNIACABIAABLIAlAWIAAACg");
	this.shape_397.setTransform(366.7616,863.6635,3.7442,3.7442);

	this.instance_32 = new lib.Path_6_0();
	this.instance_32.setTransform(369.15,864.3,3.7442,3.7442,0,0,0,2.2,4.9);
	this.instance_32.compositeOperation = "screen";

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.lf(["#567E71","#4C766B","#32615C","#2F5E5A"],[0,0.325,0.878,0.929],-1.7,-2.7,1.7,3.1).s().p("AgTAbIAAhNIAnAYIAABMg");
	this.shape_398.setTransform(366.7616,863.6635,3.7442,3.7442);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#686868").s().p("AgVAdIAAhSIArAaIAABRg");
	this.shape_399.setTransform(366.7616,863.5699,3.7442,3.7442);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#872918").s().p("AgDAsIAAhXIAGACIAABVg");
	this.shape_400.setTransform(398.8857,882.1226,3.7446,3.7446);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#E8C7B2").s().p("AgXgKIAEgDIArAYIgFADg");
	this.shape_401.setTransform(390.2731,893.4501,3.7446,3.7446);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#D4946D").s().p("AgBgqIADACIAABRIgDACg");
	this.shape_402.setTransform(382.035,872.9484,3.7446,3.7446);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#686868").s().p("AAAAoIAAhRIABABIAABRg");
	this.shape_403.setTransform(398.8681,882.1973,3.7442,3.7442);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#3D3D3D").s().p("AAAgmIABABIAABLIgBABg");
	this.shape_404.setTransform(391.5669,877.7978,3.7442,3.7442);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#686868").s().p("AAAAoIAAhRIABABIAABSg");
	this.shape_405.setTransform(390.8181,877.6106,3.7442,3.7442);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#3D3D3D").s().p("AAAgmIABABIAABLIgBABg");
	this.shape_406.setTransform(383.8913,873.3048,3.7442,3.7442);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#686868").s().p("AAAAoIAAhRIABABIAABSg");
	this.shape_407.setTransform(383.1425,873.1176,3.7442,3.7442);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#9C9C9C").s().p("AgTAbIAAhMIACABIAABKIAlAXIAAABg");
	this.shape_408.setTransform(391.0053,877.7042,3.7442,3.7442);

	this.instance_33 = new lib.Path_6();
	this.instance_33.setTransform(393.5,878.35,3.7442,3.7442,0,0,0,2.2,4.9);
	this.instance_33.compositeOperation = "screen";

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.lf(["#567E71","#4C766B","#32615C","#2F5E5A"],[0,0.325,0.878,0.929],-1.7,-2.7,1.6,3.1).s().p("AgTAbIAAhMIAnAWIAABNg");
	this.shape_409.setTransform(391.0053,877.7042,3.7442,3.7442);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#686868").s().p("AgVAcIAAhRIArAaIAABRg");
	this.shape_410.setTransform(391.0053,877.6106,3.7442,3.7442);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#D4946D").s().p("AgCA6IAAhzIAFAAIAABzg");
	this.shape_411.setTransform(483.0456,948.8701,3.7446,3.7446);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#E8C7B2").s().p("AggARIA9gjIAEACIg9Ajg");
	this.shape_412.setTransform(495.2155,963.1932,3.7446,3.7446);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#872918").s().p("AgBA3IAAhuIADgCIAABzg");
	this.shape_413.setTransform(506.8238,935.3896,3.7446,3.7446);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#BABABA").s().p("AAAAAIAAAAIABAAIgBABg");
	this.shape_414.setTransform(504.7354,921.2306,3.7442,3.7442);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#BABABA").s().p("AAAAAIAAAAIABAAIgBABg");
	this.shape_415.setTransform(493.5028,927.7829,3.7442,3.7442);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#686868").s().p("AgcAQIA5ghIAAACIg5Ahg");
	this.shape_416.setTransform(494.3453,927.8765,3.7442,3.7442);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#686868").s().p("AAAg2IABgBIAABuIgBABg");
	this.shape_417.setTransform(483.1127,948.5632,3.7442,3.7442);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#3D3D3D").s().p("AAAA0IAAhmIABgCIAABpg");
	this.shape_418.setTransform(493.5964,942.1045,3.7442,3.7442);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#686868").s().p("AAAg2IABgBIAABuIgBABg");
	this.shape_419.setTransform(494.3453,942.0109,3.7442,3.7442);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#3D3D3D").s().p("AAAA0IAAhnIABgBIAABpg");
	this.shape_420.setTransform(504.9226,935.7393,3.7442,3.7442);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#686868").s().p("AAAg2IABgBIAABuIgBABg");
	this.shape_421.setTransform(505.5779,935.4585,3.7442,3.7442);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#9C9C9C").s().p("AgcBEIA3ghIAAhnIACgBIAABpIg5Aig");
	this.shape_422.setTransform(494.3453,942.0109,3.7442,3.7442);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#BABABA").s().p("AgcAQIA5ghIAAACIg5Ahg");
	this.shape_423.setTransform(494.3453,927.1277,3.7442,3.7442);

	this.instance_34 = new lib.Path_10_0();
	this.instance_34.setTransform(495.6,942.55,3.7442,3.7442,0,0,0,3.2,6.8);
	this.instance_34.compositeOperation = "screen";

	this.instance_35 = new lib.Path_11();
	this.instance_35.setTransform(493.7,931.75,3.7442,3.7442,0,0,0,2.9,3.4);
	this.instance_35.compositeOperation = "screen";

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.lf(["#ACE9C8","#A1E4C5","#7AD1BB","#6BCAB7"],[0,0.129,0.655,0.929],2.4,4.1,-2.2,-3.8).s().p("AgcgjIA5giIAABpIg5Aig");
	this.shape_424.setTransform(494.3453,942.0109,3.7442,3.7442);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#686868").s().p("AgegkIA9gkIAABtIg9Akg");
	this.shape_425.setTransform(494.3453,942.0109,3.7442,3.7442);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#872918").s().p("AgDA5IAAhxIAGAAIAABxg");
	this.shape_426.setTransform(400.9452,953.7381,3.7446,3.7446);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#E8C7B2").s().p("AgggQIAEgCIA9AjIgEACg");
	this.shape_427.setTransform(388.8689,968.0612,3.7446,3.7446);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#D4946D").s().p("AgBg4IADACIAABtIgDACg");
	this.shape_428.setTransform(377.167,940.2575,3.7446,3.7446);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#BABABA").s().p("AgBAAIABAAIACAAIgBABg");
	this.shape_429.setTransform(379.2111,926.098,3.7442,3.7442);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#BABABA").s().p("AAAAAIABAAIABAAIgBABg");
	this.shape_430.setTransform(390.4437,932.6504,3.7442,3.7442);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#686868").s().p("AgcgPIAAgCIA5AhIAAACg");
	this.shape_431.setTransform(389.6012,932.744,3.7442,3.7442);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#686868").s().p("AAAA3IAAhuIABABIAABug");
	this.shape_432.setTransform(400.9274,953.4307,3.7442,3.7442);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#3D3D3D").s().p("AAAg0IABABIAABnIgBABg");
	this.shape_433.setTransform(390.2565,947.0656,3.7442,3.7442);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#686868").s().p("AAAA3IAAhuIABABIAABug");
	this.shape_434.setTransform(389.6012,946.8783,3.7442,3.7442);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#3D3D3D").s().p("AAAg0IABABIAABnIgBABg");
	this.shape_435.setTransform(379.0239,940.6068,3.7442,3.7442);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#686868").s().p("AAAA3IAAhuIABABIAABug");
	this.shape_436.setTransform(378.275,940.326,3.7442,3.7442);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#9C9C9C").s().p("AgcAkIAAhpIACABIAABnIA3AhIAAACg");
	this.shape_437.setTransform(389.6012,946.8783,3.7442,3.7442);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#BABABA").s().p("AgcgPIAAgCIA5AgIAAADg");
	this.shape_438.setTransform(389.6012,931.9951,3.7442,3.7442);

	this.instance_36 = new lib.Path_10();
	this.instance_36.setTransform(392.2,947.45,3.7442,3.7442,0,0,0,3.2,6.8);
	this.instance_36.compositeOperation = "screen";

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.lf(["#567E71","#4C766B","#32615C","#2F5E5A"],[0,0.325,0.878,0.929],-2.4,-3.8,2.2,4.1).s().p("AgcAkIAAhpIA5AiIAABpg");
	this.shape_439.setTransform(389.6012,946.8783,3.7442,3.7442);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#686868").s().p("AgeAlIAAhtIA9AkIAABtg");
	this.shape_440.setTransform(389.6012,946.8783,3.7442,3.7442);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#D4946D").s().p("AgtEbIAEgCIhCgmIAAmaIDXh9IAAH5IiIBQg");
	this.shape_441.setTransform(478.552,873.4165,3.7446,3.7446);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#872918").s().p("Ah/DKIAAn6ID/CUIAAGaIg+AkIAEACIgVANg");
	this.shape_442.setTransform(390.0859,869.1102,3.7446,3.7446);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#EFEFEF").s().p("AjrgLIDYh9ID/CUIjYB8g");
	this.shape_443.setTransform(430.6212,759.3934,3.7446,3.7446);

	this.instance_37 = new lib.Path_8();
	this.instance_37.setTransform(370.45,912.95,3.7451,3.7451,0,0,0,32.4,21.4);
	this.instance_37.compositeOperation = "multiply";

	this.instance_38 = new lib.image32();
	this.instance_38.setTransform(734,491,0.9957,0.9957);

	this.instance_39 = new lib.image33();
	this.instance_39.setTransform(816,636,0.9924,0.9924);

	this.instance_40 = new lib.image30();
	this.instance_40.setTransform(443,711,0.9954,0.9954);

	this.instance_41 = new lib.Frame();
	this.instance_41.setTransform(666,731,1.0008,1.0008);

	this.instance_42 = new lib.image31();
	this.instance_42.setTransform(864,499,1.0091,1.0091);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.instance_36},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.instance_35},{t:this.instance_34},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.instance_33},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.instance_32},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.instance_31},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.instance_30},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.instance_29},{t:this.instance_28},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.instance_27},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.instance_26},{t:this.shape_322},{t:this.shape_321},{t:this.instance_25},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.instance_24},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.instance_23},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.instance_22},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.instance_21},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.instance_20},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.instance_19},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.instance_18},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.instance_17},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.instance_16},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.instance_15},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.instance_14},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.instance_13},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.instance_12},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.instance_11},{t:this.instance_10},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.instance_9},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.instance_8},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.instance_7},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.instance_6},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.instance_5},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.instance_4},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Modo_de_aislamiento
	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#FFFFFF").s().p("AmZD4QgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAgBIBNguQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAAAABIhOAuIgCAAIgBAAgAj/CcQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABgBIBMguQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAAAABIhOAuIgCAAIgBAAgAhlBAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABgBIBMguQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAAAABIhOAuIgCAAIgBAAgAA0gbQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABgBIBMguQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAAAABIhOAuIgCAAIgBAAgADOh3QgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABgBIBOguQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBABIhOAuIgCAAIgBAAgAFqjTQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAgBIAugbQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAAAABIguAbIgDAAIgBAAg");
	this.shape_444.setTransform(831.75,829.9);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#D9D268").s().p("Eh0RBGLQgEgCgGgHMCjjhhdIAfAMMijdBhaIgBAAQgEgCgIACIgBAAIgHABIgGgBgEh1aBFVMCjOhhOIAfAPMijTBhMIgagNgEA7/gjIMA5OgiDIAOAbMg5CAh7gEA6wgjrMA5+gifIAPAfMg5oAiLg");
	this.shape_445.setTransform(492.4125,1030.8);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#53585C").s().p("EhtCBJ6QhWg8gqguQgGgJgegIQgcgHgEgKQgUglgRgPQgQgPgdgIQgEgCgHgMQgGgLgFgDIgBAAMCjdhhZIgfgNMijjBhdIgDgEIgOgPIgUgMMCjThhMIgfgQMijOBhOIgugWQhBgcgZgQQiPhQjPh4MCl+hhKQAngWgDgsQgDgsgpgQIlSiKIhqoVIPFFlQA7AXA+gDIARgBIAagEQAngIAkgTMA9YgkZICoFSMg5+AifIAlALMA5ogiLIAQAgMg5OAiDIAaATMA5Cgh7IDYGyMhFQApdIgbAOIAAACMigKBf2QglgjhihEgEAx6gcbIhNAuQgBABAAAAQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAAAQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAQAAABABAAQAAAAABAAQAAAAABgBQAAAAABAAIBNguQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAAAgBgBQAAAAAAAAIgCAAIgCAAgEA0Ugd3IhNAuQgBABAAAAQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAQAAABABAAQAAAAABAAQAAAAABgBQAAAAABAAIBNguQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAAAgBgBQAAAAAAAAIgCAAIgCAAgEA2ugfSIhNAtQgBABAAAAQAAAAgBABQAAAAAAABQAAAAAAAAQgBABAAAAQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAABQAAAAABAAQAAAAABAAQAAAAABgBQAAAAABAAIBNguQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAAAgBgBQAAAAAAAAIgCAAIgCABgEA5IgguIhNAuQgBAAAAAAQAAAAgBABQAAAAAAABQAAAAAAAAQgBABAAAAQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAABQAAAAABAAQAAAAABAAQAAAAABgBQAAAAABAAIBNguQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAAAgBgBQAAAAAAAAIgCAAIgCABgEA7jgiLIhOAvQgBAAAAAAQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAABQAAAAABAAQAAAAABAAQAAAAABgBQAAAAABAAIBOguQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAAAgBgBQAAAAgBAAIgBAAIgCAAgEA9fgjUIguAbQgBABAAAAQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAAAQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAQAAABABAAQAAAAABAAQAAAAABgBQAAAAABAAIAugbQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAAAgBgBQAAAAgBAAIgBAAIgCAAg");
	this.shape_446.setTransform(478.925,1031.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_446},{t:this.shape_445},{t:this.shape_444}]}).wait(1));

	// Capa_2
	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.lf(["#C9CE57","#ACDB67"],[0,1],0,277.2,0,-277.4).s().p("EAyIAz4QkLh7nuj2QmujWjbhfQlSiSkuhRQlchcmCgeQqng1wABpQlAAik8AsIj8AmQh0AYjOAcQmaA3nAARQ2YA3zslbMgBAhPsQAkAUBLAcQCWA2DDAjQJwByNIh0QF4g0Nmi9QSMj/G4hVQPkjBMWhTQPjhoMgA0QWqBfVEDwQKiB3GABlMAAABlhQhuAXi3AbQltA1lsARQinAIidAAQuuAApgkXg");
	this.shape_447.setTransform(610.3,1217.4598,1,2.0017);

	this.timeline.addTween(cjs.Tween.get(this.shape_447).wait(1));

	// Modo_de_aislamiento
	this.instance_43 = new lib.image44();
	this.instance_43.setTransform(233,111,1.0017,1.0017);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.lf(["#CCEEFF","rgba(153,223,254,0)"],[0,1],0,350,0,-215.7).s().p("EhdvA2sMAAAhtXMC7fAAAMAAABtXg");
	this.shape_448.setTransform(599.9,350.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_448},{t:this.instance_43}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(292.4,600.1,1114.1999999999998,1337.8000000000002);
// library properties:
lib.properties = {
	id: 'F573A182C9764371B4B6A9CE9DF59781',
	width: 1200,
	height: 1200,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images5/Bitmap13.png?1658167699851", id:"Bitmap13"},
		{src:"images5/Bitmap15.png?1658167699851", id:"Bitmap15"},
		{src:"images5/Frame.png?1658167699851", id:"Frame"},
		{src:"images5/image29.png?1658167699851", id:"image29"},
		{src:"images5/image30.png?1658167699851", id:"image30"},
		{src:"images5/image31.png?1658167699851", id:"image31"},
		{src:"images5/image32.png?1658167699851", id:"image32"},
		{src:"images5/image33.png?1658167699851", id:"image33"},
		{src:"images5/image34.png?1658167699851", id:"image34"},
		{src:"images5/image35.png?1658167699851", id:"image35"},
		{src:"images5/image44.png?1658167699851", id:"image44"}
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
an.compositions['F573A182C9764371B4B6A9CE9DF59781'] = {
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