(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.Mapadebits1 = function() {
	this.initialize(img.Mapadebits1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,720);


(lib.Mapadebits11 = function() {
	this.initialize(img.Mapadebits11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,158,38);


(lib.Mapadebits12 = function() {
	this.initialize(img.Mapadebits12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,95);


(lib.Mapadebits13 = function() {
	this.initialize(img.Mapadebits13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,181,206);


(lib.Mapadebits14 = function() {
	this.initialize(img.Mapadebits14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,342,432);


(lib.Mapadebits2 = function() {
	this.initialize(img.Mapadebits2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,119,341);


(lib.Mapadebits4 = function() {
	this.initialize(img.Mapadebits4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,387,336);


(lib.Mapadebits5 = function() {
	this.initialize(img.Mapadebits5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,210,53);


(lib.Mapadebits6 = function() {
	this.initialize(img.Mapadebits6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,133,649);


(lib.Mapadebits7 = function() {
	this.initialize(img.Mapadebits7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,63,84);


(lib.Mapadebits9 = function() {
	this.initialize(img.Mapadebits9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,55,76);// helper functions:

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


(lib.Símbolo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.Mapadebits14();
	this.instance.parent = this;
	this.instance.setTransform(102.8,83.6,0.622,0.259,0,113.3,-10.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo1, new cjs.Rectangle(0,0,311.8,83.6), null);


(lib.pipas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E9DEBB").s().p("AgJAXQgDgBgBgHQAAgPABgDQAEgKAGgGQAGgFAEACQAFACABAIQAAAIgEAJQgBAEgEAEIgHAFIgEAEIgCACIgBgBg");
	this.shape.setTransform(45.4,8.4);
	this.shape._off = true;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(233,222,187,0.667)").s().p("AgJAXQgDgBgBgHQAAgPABgDQAEgKAGgGQAGgFAEACQAFACABAIQAAAIgEAJQgBAEgEAEIgHAFIgEAEIgCACIgBgBg");
	this.shape_1.setTransform(14.3,52.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(233,222,187,0.333)").s().p("AgJAXQgDgBgBgHQAAgPABgDQAEgKAGgGQAGgFAEACQAFACABAIQAAAIgEAJQgBAEgEAEIgHAFIgEAEIgCACIgBgBg");
	this.shape_2.setTransform(13.9,53.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(233,222,187,0)").s().p("AgJAXQgDgBgBgHQAAgPABgDQAEgKAGgGQAGgFAEACQAFACABAIQAAAIgEAJQgBAEgEAEIgHAFIgEAEIgCACIgBgBg");
	this.shape_3.setTransform(13.4,54);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},16).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(16).to({_off:false},0).wait(1).to({x:40.5,y:15.4},0).wait(1).to({x:36,y:21.8},0).wait(1).to({x:32,y:27.5},0).wait(1).to({x:28.4,y:32.7},0).wait(1).to({x:25.2,y:37.3},0).wait(1).to({x:22.4,y:41.2},0).wait(1).to({x:20.1,y:44.6},0).wait(1).to({x:18.1,y:47.3},0).wait(1).to({x:16.6,y:49.4},0).wait(1).to({x:15.6,y:51},0).wait(1).to({x:14.9,y:51.9},0).wait(1).to({x:14.7,y:52.2},0).to({_off:true},1).wait(3));

	// Capa_4
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E9DEBB").s().p("AgJAXQgDgBgBgHQAAgPABgDQAEgKAGgGQAGgFAEACQAFACABAIQAAAIgEAJQgBAEgEAEIgHAFIgEAEIgCACIgBgBg");
	this.shape_4.setTransform(17.4,14);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(5).to({_off:false},0).wait(1).to({x:16.5,y:20.8},0).wait(1).to({x:15.7,y:26.8},0).wait(1).to({x:15,y:31.8},0).wait(1).to({x:14.4,y:35.9},0).wait(1).to({x:14,y:39.1},0).wait(1).to({x:13.7,y:41.4},0).wait(1).to({x:13.5,y:42.7},0).wait(1).to({x:13.4,y:43.2},0).wait(19));

	// Capa_3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E9DEBB").s().p("AgJAXQgDgBgBgHQAAgPABgDQAEgKAGgGQAGgFAEACQAFACABAIQAAAIgEAJQgBAEgEAEIgHAFIgEAEIgCACIgBgBg");
	this.shape_5.setTransform(35.4,0);
	this.shape_5._off = true;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(233,222,187,0.749)").s().p("AgJAXQgDgBgBgHQAAgPABgDQAEgKAGgGQAGgFAEACQAFACABAIQAAAIgEAJQgBAEgEAEIgHAFIgEAEIgCACIgBgBg");
	this.shape_6.setTransform(17,56.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(233,222,187,0.502)").s().p("AgJAXQgDgBgBgHQAAgPABgDQAEgKAGgGQAGgFAEACQAFACABAIQAAAIgEAJQgBAEgEAEIgHAFIgEAEIgCACIgBgBg");
	this.shape_7.setTransform(16.3,58.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(233,222,187,0.251)").s().p("AgJAXQgDgBgBgHQAAgPABgDQAEgKAGgGQAGgFAEACQAFACABAIQAAAIgEAJQgBAEgEAEIgHAFIgEAEIgCACIgBgBg");
	this.shape_8.setTransform(15.5,59.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(233,222,187,0)").s().p("AgJAXQgDgBgBgHQAAgPABgDQAEgKAGgGQAGgFAEACQAFACABAIQAAAIgEAJQgBAEgEAEIgHAFIgEAEIgCACIgBgBg");
	this.shape_9.setTransform(14.7,61.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5}]},11).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(11).to({_off:false},0).wait(1).to({x:33.3,y:6.6},0).wait(1).to({x:31.3,y:12.7},0).wait(1).to({x:29.4,y:18.5},0).wait(1).to({x:27.7,y:23.8},0).wait(1).to({x:26.1,y:28.7},0).wait(1).to({x:24.7,y:33.1},0).wait(1).to({x:23.4,y:37.2},0).wait(1).to({x:22.2,y:40.8},0).wait(1).to({x:21.2,y:44},0).wait(1).to({x:20.3,y:46.7},0).wait(1).to({x:19.5,y:49.1},0).wait(1).to({x:18.9,y:51},0).wait(1).to({x:18.4,y:52.5},0).wait(1).to({x:18.1,y:53.5},0).wait(1).to({x:17.9,y:54.2},0).wait(1).to({x:17.8,y:54.4},0).to({_off:true},1).wait(4));

	// Capa_2
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E9DEBB").s().p("AgJAXQgDgBgBgHQAAgPABgDQAEgKAGgGQAGgFAEACQAFACABAIQAAAIgEAJQgBAEgEAEIgHAFIgEAEIgCACIgBgBg");
	this.shape_10.setTransform(1.4,2.4);
	this.shape_10._off = true;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(233,222,187,0.831)").s().p("AgJAXQgDgBgBgHQAAgPABgDQAEgKAGgGQAGgFAEACQAFACABAIQAAAIgEAJQgBAEgEAEIgHAFIgEAEIgCACIgBgBg");
	this.shape_11.setTransform(-12.2,52.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(233,222,187,0.667)").s().p("AgJAXQgDgBgBgHQAAgPABgDQAEgKAGgGQAGgFAEACQAFACABAIQAAAIgEAJQgBAEgEAEIgHAFIgEAEIgCACIgBgBg");
	this.shape_12.setTransform(-12.3,52.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(233,222,187,0.502)").s().p("AgJAXQgDgBgBgHQAAgPABgDQAEgKAGgGQAGgFAEACQAFACABAIQAAAIgEAJQgBAEgEAEIgHAFIgEAEIgCACIgBgBg");
	this.shape_13.setTransform(-12.4,53.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(233,222,187,0.333)").s().p("AgJAXQgDgBgBgHQAAgPABgDQAEgKAGgGQAGgFAEACQAFACABAIQAAAIgEAJQgBAEgEAEIgHAFIgEAEIgCACIgBgBg");
	this.shape_14.setTransform(-12.4,53.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(233,222,187,0.169)").s().p("AgJAXQgDgBgBgHQAAgPABgDQAEgKAGgGQAGgFAEACQAFACABAIQAAAIgEAJQgBAEgEAEIgHAFIgEAEIgCACIgBgBg");
	this.shape_15.setTransform(-12.5,53.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(233,222,187,0)").s().p("AgJAXQgDgBgBgHQAAgPABgDQAEgKAGgGQAGgFAEACQAFACABAIQAAAIgEAJQgBAEgEAEIgHAFIgEAEIgCACIgBgBg");
	this.shape_16.setTransform(-12.6,54);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_10}]},8).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(8).to({_off:false},0).wait(1).to({x:-0.1,y:8.1},0).wait(1).to({x:-1.6,y:13.5},0).wait(1).to({x:-3,y:18.5},0).wait(1).to({x:-4.2,y:23.2},0).wait(1).to({x:-5.4,y:27.5},0).wait(1).to({x:-6.5,y:31.5},0).wait(1).to({x:-7.5,y:35.1},0).wait(1).to({x:-8.4,y:38.4},0).wait(1).to({x:-9.2,y:41.3},0).wait(1).to({x:-9.9,y:43.9},0).wait(1).to({x:-10.5,y:46.2},0).wait(1).to({x:-11,y:48.1},0).wait(1).to({x:-11.4,y:49.7},0).wait(1).to({x:-11.8,y:50.9},0).wait(1).to({x:-12,y:51.7},0).wait(1).to({x:-12.1,y:52.3},0).wait(1).to({x:-12.2,y:52.4},0).to({_off:true},1).wait(6));

	// Capa_1
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E9DEBB").s().p("AgJAXQgDgBgBgHQAAgPABgDQAEgKAGgGQAGgFAEACQAFACABAIQAAAIgEAJQgBAEgEAEIgHAFIgEAEIgCACIgBgBg");
	this.shape_17.setTransform(1.4,2.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(233,222,187,0.749)").s().p("AgJAXQgDgBgBgHQAAgPABgDQAEgKAGgGQAGgFAEACQAFACABAIQAAAIgEAJQgBAEgEAEIgHAFIgEAEIgCACIgBgBg");
	this.shape_18.setTransform(-12.3,52.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(233,222,187,0.502)").s().p("AgJAXQgDgBgBgHQAAgPABgDQAEgKAGgGQAGgFAEACQAFACABAIQAAAIgEAJQgBAEgEAEIgHAFIgEAEIgCACIgBgBg");
	this.shape_19.setTransform(-12.4,53.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(233,222,187,0.251)").s().p("AgJAXQgDgBgBgHQAAgPABgDQAEgKAGgGQAGgFAEACQAFACABAIQAAAIgEAJQgBAEgEAEIgHAFIgEAEIgCACIgBgBg");
	this.shape_20.setTransform(-12.5,53.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(233,222,187,0)").s().p("AgJAXQgDgBgBgHQAAgPABgDQAEgKAGgGQAGgFAEACQAFACABAIQAAAIgEAJQgBAEgEAEIgHAFIgEAEIgCACIgBgBg");
	this.shape_21.setTransform(-12.6,54);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17}]}).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[]},1).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(1).to({x:0,y:7.8},0).wait(1).to({x:-1.4,y:12.9},0).wait(1).to({x:-2.7,y:17.7},0).wait(1).to({x:-3.9,y:22.1},0).wait(1).to({x:-5.1,y:26.3},0).wait(1).to({x:-6.1,y:30.2},0).wait(1).to({x:-7.1,y:33.7},0).wait(1).to({x:-8,y:37},0).wait(1).to({x:-8.8,y:39.9},0).wait(1).to({x:-9.5,y:42.5},0).wait(1).to({x:-10.1,y:44.9},0).wait(1).to({x:-10.7,y:46.9},0).wait(1).to({x:-11.1,y:48.6},0).wait(1).to({x:-11.5,y:50},0).wait(1).to({x:-11.8,y:51},0).wait(1).to({x:-12,y:51.8},0).wait(1).to({x:-12.1,y:52.3},0).wait(1).to({x:-12.2,y:52.4},0).to({_off:true},1).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2.8,4.8);


(lib.Interpolación5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.Mapadebits12();
	this.instance.parent = this;
	this.instance.setTransform(-93,-47.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93,-47.5,186,95);


(lib.Interpolación4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.Mapadebits6();
	this.instance.parent = this;
	this.instance.setTransform(-66.5,-324.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.5,-324.5,133,649);


(lib.Interpolación3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E28833").s().p("AAFBVQgSgEgNgHIgWgRIgWgRQgOgOgFgTQgCgLACgJIAAgBQAAgPALgLQALgMASAAQAHAAAKADQAAgGADgHQAFgLAKgHQAJgGAMAAIAHAAQAHgBAHACQALADAIAJIAIALIAKAKQAMANAGAPIAFAPIAAAHQAEANgBAOQgBAXgOARQgPATgWADIgLAAQgKAAgNgCg");
	this.shape.setTransform(19.4,42.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Capa_1
	this.instance = new lib.Mapadebits7();
	this.instance.parent = this;
	this.instance.setTransform(-24.1,-46.6,1,1,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38,-46.6,76,97.9);


(lib.Interpolación2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.Mapadebits9();
	this.instance.parent = this;
	this.instance.setTransform(-27.5,-38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.5,-38,55,76);


(lib.Interpolación1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.Mapadebits11();
	this.instance.parent = this;
	this.instance.setTransform(-79,-19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79,-19,158,38);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("A3BCNI6HtSIabC0IAOklMBHUgEeIAUDlIjOAgIgdejg");
	this.shape.setTransform(314.5,110.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,628.9,221.7), null);


(lib.mujer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_10 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AMQMMQiOgChxgLQhQgHgugOIgqgNIgqgOQgigKg+gIQg7gGiqgIQiQgGhVgPQhWgPiDgqQhagcidg2QhTgdgqgTQgigPg2geQhBglgVgLQhbguhpgfQgagGgFgOQgFgMAOgXIELmpQBChqAmg0QA+hVA+g3QBShJB7g7QBLgkCZg5QBCgZAngHQAYgEAigCIA7gCQArgCD4gfQCxgVBxAQQBHAKBUAcQA0ASBiAnQBSAiAoAVQBCAjApArQAcAcAlA5QApBAAWAuQAfA+AKA4QAHAlACBVQACB+gFBAIgIBHIgHBGQgDA0AFCoQAECIgPBRQgNBCgfAaQgUASgiAGQgWAEgoABIiVAAIhrAAg");
	var mask_graphics_1 = new cjs.Graphics().p("AMQMRQiOgDhxgKQhQgIgugOIgqgOIgqgOQgigKg+gHQg7gHiqgIQiQgHhVgPQhWgQiDgqQhagcidg3QhTgdgqgTQgigQg2geIhWgwQhbgvhpgfQgagHgFgNQgFgNAOgWIELmsQBChrAmgzQA+hWA+g3QBShJB7g7QBLgkCZg5QBCgZAngHQAYgFAigBIA7gDQArgCD4geQCxgVBxAQQBHALBUAcQA0ASBiAoQBSAiAoAWQBCAjApArQAcAdAlA5QApBAAWAuQAfA/AKA5QAHAlACBVQACB/gFBAIgIBIIgHBHQgDAzAFCpQAECJgPBSQgNBCgfAbQgUARgiAHQgWAEgoAAIh7ABIiFgBg");
	var mask_graphics_2 = new cjs.Graphics().p("AMQMWQiOgChxgMQhQgHgugPIgqgNQgcgLgOgEQgigKg+gIQg7gHiqgIQiQgHhVgQQhWgPiDgrQhagdidg3QhTgegqgTQgigQg2geQhBgmgVgLQhbgvhpggQgagGgFgOQgFgNAOgXIELmtQBChrAmg0QA+hWA+g4QBShJB7g7QBLgkCZg6QBCgZAngGQAYgFAigBIA7gDQArgBD4geQCxgVBxAQQBHALBUAdQA0ASBiApQBSAiAoAWQBCAjApAsQAcAdAlA5QApBBAWAuQAfA/AKA6QAHAlACBWQACCAgFBAIgIBIIgHBHQgDA0AFCrQAECJgPBTQgNBCgfAbQgUARgiAHQgWAEgoAAIhBAAQh6AAhFgBg");
	var mask_graphics_3 = new cjs.Graphics().p("AMQMbQiOgDhxgLQhQgIgugPIgqgOQgcgKgOgEQgigKg+gIQg7gIiqgIQiQgIhVgQQhWgQiDgrQhagdidg4QhTgegqgTQgigQg2gfQhBgmgVgLQhbgwhpggQgagHgFgOQgFgMAOgXIELmwQBChsAmg0QA+hWA+g4QBShKB7g7QBLgkCZg5QBCgZAngHQAYgFAigBIA7gCQArgCD4gdQCxgVBxARQBHALBUAdQA0ATBiApQBSAiAoAWQBCAkApAsQAcAdAlA6QApBBAWAvQAfA/AKA6QAHAmACBWQACCBgFBBIgIBIIgHBIQgDA0AFCrQAECLgPBTQgNBCgfAbQgUASgiAGQgWAEgoABQiqAAhWgCg");
	var mask_graphics_4 = new cjs.Graphics().p("AMQMgQiOgDhxgMQhQgIgugPIgqgOIgqgPQgigKg+gIQg7gHiqgKQiQgHhVgRQhWgQiDgrQhagfidg4QhTgegqgUQgigQg2gfQhBgngVgLQhbgwhpggQgagHgFgOQgFgNAOgXIELmxQBChtAmg1QA+hWA+g4QBShKB7g7QBLglCZg5QBCgZAngHQAYgEAigBIA7gCQArgCD4gdQCxgVBxASQBHALBUAdQA0ATBiApQBSAjAoAWQBCAlApAsQAcAdAlA7QApBBAWAwQAfBAAKA6QAHAlACBXQACCCgFBBIgIBJIgHBIQgDA1AFCsQAECLgPBUQgNBDgfAbQgUASgiAGQgWAEgoAAIg3AAQiCAAhHgCg");
	var mask_graphics_5 = new cjs.Graphics().p("AMQMlQiOgDhxgMQhQgJgugOQgOgEgcgLIgqgPQgigKg+gIQg7gIiqgKQiQgHhVgRQhWgRiDgsQhageidg6QhTgegqgUQgigQg2ggIhWgyQhbgxhpggQgagHgFgOQgFgNAOgXIELm0QBChtAmg1QA+hWA+g5QBShKB7g7QBLglCZg5QBCgZAngHQAYgEAigBIA7gCQArgCD4gdQCxgUBxASQBHALBUAeQA0ATBiAqQBSAjAoAWQBCAlApAsQAcAeAlA8QApBBAWAwQAfBAAKA7QAHAlACBYQACCCgFBCIgIBJIgHBJQgDA1AFCtQAECMgPBUQgNBEgfAbQgUASgiAGQgWAEgoAAQiqAAhWgDg");
	var mask_graphics_6 = new cjs.Graphics().p("AMQMqQiOgDhxgNQhQgIgugQIgqgOIgqgPQgigLg+gIQg7gIiqgKQiQgIhVgRQhWgRiDgsQhaggidg5QhTgfgqgUQgigRg2gfQhBgogVgLQhbgxhpghQgagHgFgOQgFgOAOgXIELm1QBChuAmg1QA+hXA+g5QBShLB7g7QBLgkCZg6QBCgZAngGQAYgFAigBIA7gCQArgBD4gdQCxgUBxASQBHAMBUAeQA0ATBiArQBSAjAoAXQBCAlApAtQAcAeAlA7QApBCAWAwQAfBBAKA7QAHAmACBYQACCDgFBDIgIBJIgHBJQgDA1AFCvQAECNgPBUQgNBEgfAbQgUASgiAHQgWADgoAAQiqAAhWgDg");
	var mask_graphics_7 = new cjs.Graphics().p("AMQMvQiOgEhxgNQhQgIgugQQgOgEgcgKIgqgQQgigKg+gJQg7gIiqgKQiQgJhVgRQhWgRiDgtQhaggidg6QhTgfgqgUQgigRg2ggQhBgogVgLQhbgyhpgiQgagGgFgPQgFgNAOgYIELm3QBChuAmg2QA+hXA+g5QBShLB7g7QBLglCZg5QBCgZAngHQAYgFAiAAIA7gCQArgCD4gcQCxgUBxATQBHAMBUAeQA0AUBiArQBSAjAoAXQBCAmApAtQAcAeAlA8QApBDAWAwQAfBBAKA8QAHAmACBYQACCEgFBDIgIBKIgHBJQgDA2AFCvQAECOgPBVQgNBEgfAcQgUASgiAGQgWAEgoAAQiqgBhWgDg");
	var mask_graphics_8 = new cjs.Graphics().p("AQQMyQiqgDhWgEQiOgGhxgOQhQgJgugQIgqgPQgcgMgOgEQgigLg+gJQg7gJiqgNQiQgKhVgTQhWgSiDguQhaggidg9QhTgfgqgVQgigRg2ghQhBgogVgLQhbgzhpgjQgagHgFgOQgFgOAOgXIELmxQBChtAmg0QA+hWA+g4QBShKB7g5QBLgjCZg3QBCgYAngGQAYgFAiAAIA7gBQArgBD4gZQCxgRBxAUQBHAMBUAgQA0AUBiAsQBSAkAoAYQBCAmApAtQAcAfAlA8QApBCAWAwQAfBCAKA7QAHAmACBYQACCDgFBCIgIBKIgHBIQgDA1AFCvQAECNgPBUQgNBEgfAbQgUARgiAGQgRADgcAAIgRAAg");
	var mask_graphics_9 = new cjs.Graphics().p("AQQMxQiqgGhWgFQiOgHhxgQQhQgKgugRQgOgEgcgLQgcgMgOgEQgigMg+gKQg7gJiqgPQiQgMhVgTQhWgTiDgwQhagiidg9QhTghgqgVQgigSg2ghIhWg0Qhbg0hpgkQgagHgFgOQgFgOAOgWIELmrQBChrAmg0QA+hVA+g3QBShIB7g3QBLgiCZg1QBCgXAngFQAYgEAiAAIA7AAQArgBD4gVQCxgPBxAVQBHAOBUAgQA0AVBiAsQBSAmAoAXQBCAnApAuQAcAeAlA9QApBCAWAwQAfBCAKA7QAHAlACBYQACCCgFBCIgIBJIgHBIQgDA1AFCtQAECMgPBUQgNBDgfAaQgUARgiAGQgRACgaAAIgTAAg");
	var mask_graphics_10 = new cjs.Graphics().p("AQQMwQiqgIhWgGQiOgJhxgRQhQgLgugRQgOgFgcgLQgcgMgOgFQgigMg+gKQg7gKiqgRQiQgOhVgVQhWgUiDgxQhagiidhAQhTghgqgWQgigSg2ghIhWg1Qhbg1hpglQgagHgFgPQgFgNAOgXIELmkQBChqAmgzQA+hTA+g2QBShGB7g1QBLghCZgzQBCgVAngFQAYgEAiABIA7AAQArAAD4gSQCxgNBxAXQBHAOBUAhQA0AWBiAuQBSAmAoAYQBCAnApAuQAcAfAlA8QApBDAWAwQAfBBAKA7QAHAlACBXQACCCgFBBIgIBJIgHBHQgDA0AFCtQAECLgPBTQgNBCgfAaQgUARgiAFQgNACgUAAIgdgBg");
	var mask_graphics_11 = new cjs.Graphics().p("AQQMvQiqgKhWgHQiOgLhxgSQhQgNgugRQgOgFgcgLIgqgSQgigMg+gLQg7gLiqgTQiQgQhVgVQhWgViDgzQhagjidhBQhTgjgqgVQgigSg2giIhWg3Qhbg1hpgmQgagIgFgOQgFgOAOgWIELmeQBChoAmgyQA+hSA+g0QBShFB7g0QBLgfCZgwQBCgVAngFQAYgDAiABIA7ABQArABD4gPQCxgKBxAYQBHAPBUAiQA0AWBiAvQBSAnAoAYQBCAoApAuQAcAfAlA8QApBDAWAwQAfBCAKA6QAHAmACBWQACCBgFBBIgIBHIgHBHQgDA0AFCrQAECLgPBSQgNBCgfAZQgUAQgiAFQgMABgSAAIgggBg");
	var mask_graphics_12 = new cjs.Graphics().p("AQQMuQiqgMhWgIQiOgMhxgUQhQgOgugSQgOgEgcgNIgqgRQgigNg+gMQg7gLiqgVQiQgShVgWQhWgWiDg0QhaglidhCQhTgkgqgWQgigSg2gjIhWg3Qhbg2hpgnQgagIgFgPQgFgNAOgWIELmYQBChmAmgyQA+hQA+gzQBShEB7gxQBLgfCZgtQBCgUAngEQAYgDAiABIA7ACQArABD4gLQCxgIBxAaQBHAQBUAjQA0AWBiAwQBSAoAoAYQBCApApAuQAcAfAlA9QApBDAWAwQAfBBAKA7QAHAlACBWQACB/gFBBIgIBHIgHBGQgDA0AFCqQAECKgPBRQgNBBgfAZQgUAQgiAEIgYABIgmgCg");
	var mask_graphics_13 = new cjs.Graphics().p("AQQMuQiqgPhWgJQiOgOhxgWQhQgOgugSQgOgFgcgNIgqgSQgigNg+gMQg7gNiqgXQiQgThVgYQhWgXiDg1QhaglidhFQhTgkgqgWQgigTg2gjQhBgrgVgNQhbg3hpgoQgagJgFgOQgFgOAOgVIELmSQBChlAmgwQA+hPA+gyQBShCB7gwQBLgdCZgrQBCgTAngDQAYgDAiACIA7ACQArACD4gIQCxgFBxAbQBHAQBUAkQA0AXBiAxQBSApAoAZQBCApApAuQAcAgAlA8QApBDAWAwQAfBCAKA6QAHAlACBVQACB/gFBAIgIBHIgHBFQgDA0AFCpQAECJgPBQQgNBBgfAYQgUAPgiAEIgVABQgRAAgYgCg");
	var mask_graphics_14 = new cjs.Graphics().p("AQQMuQiqgQhWgLQiOgQhxgXQhQgPgugTQgOgFgcgNIgqgSQgigNg+gOQg7gNiqgaQiQgVhVgYQhWgYiDg3QhagmidhGQhTglgqgXQgigTg2gkIhWg4Qhbg4hpgqQgagIgFgOQgFgOAOgVIELmMQBChjAmgvQA+hPA+gwQBShBB7gtQBLgcCZgpQBCgSAngDQAYgCAiACIA7AEQArACD4gEQCxgDBxAbQBHASBUAlQA0AXBiAyQBSApAoAaQBCAqApAuQAcAgAlA9QApBDAWAwQAfBBAKA6QAHAlACBVQACB+gFA/IgIBGIgHBGQgDAyAFCoQAECIgPBQQgNBAgfAXQgUAQgiADIgOABQgTAAgdgDg");
	var mask_graphics_15 = new cjs.Graphics().p("AQQMxQiqgThWgMQiOgShxgYQhQgQgugTIgqgSQgcgOgOgFQgigOg+gOQg7gOiqgcQiQgXhVgZQhWgZiDg4QhagnidhIQhTgmgqgXQgigUg2gkIhWg5Qhbg5hpgqQgagJgFgOQgFgOAOgVIELmFQBChiAmguQA+hNA+gwQBSg/B7grQBLgbCZgnQBCgQAngDQAYgCAiADIA7AEQArADD4gBQCxAABxAdQBHASBUAmQA0AYBiAzQBSAqAoAaQBCAqApAvQAcAgAlA9QApBDAWAwQAfBBAKA6QAHAkACBVQACB9gFA/IgIBFIgHBFQgDAzAFCmQAECIgPBPQgNA/gfAXQgUAPgiADIgKAAQgUAAgggDg");
	var mask_graphics_16 = new cjs.Graphics().p("AQQMzQiqgVhWgNQiOgThxgaQhQgRgugUQgOgFgcgOQgcgNgOgGQgigOg+gPQg7gOiqgeQiQgZhVgaQhWgaiDg6QhagoidhJQhTgngqgYQgigUg2gkQhBgtgVgNQhbg6hpgrQgagJgFgPQgFgNAOgVIELl/QBChgAmguQA+hLA+gvQBSg9B7gpQBLgaCZglQBCgPAngCQAYgCAiAEIA7AEQArAED4ACQCxACBxAfQBHATBUAmQA0AZBiA0QBSArAoAaQBCArApAvQAcAgAlA9QApBEAWAvQAfBBAKA6QAHAkACBUQACB8gFA/IgIBFIgHBEQgDAyAFCmQAECHgPBOQgNA+gfAXQgUAOgiADIgIAAQgVAAghgEg");
	var mask_graphics_17 = new cjs.Graphics().p("AQQM1QiqgXhWgOQiOgVhxgbQhQgTgugUQgOgFgcgOIgqgUQgigOg+gQQg7gPiqggQiQgahVgbQhWgciDg7QhagpidhKQhTgogqgYQgigUg2glIhWg7Qhbg7hpgtQgagJgFgOQgFgOAOgTIELl6QBCheAmgtQA+hKA+gtQBSg8B7goQBLgYCZgiQBCgPAngBQAYgCAiAEIA7AGQArAED4AFQCxAFBxAgQBHAUBUAnQA0AZBiA1QBSAsAoAaQBCAsApAvQAcAhAlA8QApBEAWAwQAfBBAKA5QAHAlACBTQACB7gFA/IgIBEIgHBDQgDAyAFClQAECFgPBOQgNA+gfAWQgUAOgiACIgEAAQgWAAgkgFg");
	var mask_graphics_18 = new cjs.Graphics().p("AQQM3QiqgZhWgPQiOgXhxgcQhQgUgugUIgqgUIgqgUQgigPg+gQQg7gQiqgiQiQgdhVgcQhWgciDg8QhagqidhNQhTgogqgZQgigUg2gmQhBgugVgNQhbg8hpguQgagJgFgOQgFgNAOgUIELl0QBChdAmgsQA+hJA+grQBSg7B7glQBLgYCZgfQBCgOAngBQAYgBAiAEIA7AHQArAED4AKQCxAGBxAhQBHAVBUApQA0AZBiA2QBSAtAoAbQBCAsApAvQAcAhAlA9QApBEAWAvQAfBBAKA6QAHAkACBTQACB6gFA+IgIBDIgHBEQgDAxAFCjQAECFgPBNQgNA9gfAVQgUAOgiACIgEAAQgVAAglgGg");
	var mask_graphics_19 = new cjs.Graphics().p("AQQM6QiqgchWgQQiOgZhxgeQhQgUgugVQgOgGgcgOIgqgVQgigPg+gRQg7gQiqglQiQgehVgdQhWgdiDg+QhagridhOQhTgqgqgZQgigUg2gmIhWg9Qhbg8hpguQgagKgFgOQgFgOAOgTIELltQBChcAmgrQA+hIA+gqQBSg5B7gkQBLgWCZgdQBCgNAnAAQAYgBAiAFIA7AHQArAFD4ANQCxAJBxAiQBHAWBUApQA0AbBiA2QBSAuAoAbQBCAtApAwQAcAgAlA9QApBEAWAwQAfBBAKA5QAHAkACBSQACB6gFA9IgIBDIgHBDQgDAxAFCiQAECEgPBMQgNA9gfAUQgUAOgiABQgWAAgogGg");
	var mask_graphics_20 = new cjs.Graphics().p("AQQM8QiqgdhWgRQiOgbhxgfQhQgWgugVIgqgVIgqgVQgigPg+gSQg7gRiqgnQiQgghVgeQhWgeiDg/QhagsidhQQhTgqgqgaQgigVg2gmIhWg9Qhbg+hpgvQgagKgFgOQgFgOAOgTIELlnQBChaAmgqQA+hGA+gqQBSg3B7giQBLgVCZgbQBCgLAnAAQAYAAAiAFIA7AIQArAFD4AQQCxAMBxAkQBHAWBUAqQA0AbBiA4QBSAuAoAcQBCAtApAwQAcAhAlA9QApBEAWAwQAfBBAKA5QAHAjACBRQACB6gFA9IgIBCIgHBCQgDAxAFChQAECDgPBMQgNA8gfAUQgUANgiAAQgWAAgogHg");
	var mask_graphics_21 = new cjs.Graphics().p("AQQM6QiqgchWgQQiOgZhxgeQhQgVgugVIgqgUIgqgVQgigPg+gRQg7gRiqgkQiQgfhVgdQhWgeiDg+QhagridhOQhTgqgqgZQgigVg2gmIhWg8Qhbg9hpguQgagKgFgOQgFgOAOgTIELlsQBChcAmgrQA+hHA+gqQBSg5B7gjQBLgWCZgdQBCgMAnAAQAYgBAiAFIA7AHQArAFD4ANQCxAKBxAjQBHAWBUApQA0AaBiA3QBSAuAoAbQBCAtApAwQAcAhAlA9QApBEAWAvQAfBBAKA5QAHAkACBRQACB7gFA9IgIBDIgHBCQgDAxAFCjQAECDgPBMQgNA9gfAUQgUAOgiAAIgEAAQgVAAglgGg");
	var mask_graphics_22 = new cjs.Graphics().p("AQQM4QiqgahWgPQiOgYhxgdQhQgUgugVQgOgFgcgOIgqgVQgigPg+gQQg7gQiqgjQiQgdhVgdQhWgdiDg8QhagridhNQhTgpgqgYQgigVg2gmQhBgugVgNQhbg8hpgvQgagJgFgOQgFgNAOgUIELlxQBChcAmgsQA+hJA+grQBSg6B7glQBLgXCZgeQBCgOAnAAQAYgBAiAEIA7AHQArAFD4AKQCxAIBxAiQBHAVBUAoQA0AaBiA2QBSAtAoAbQBCAtApAwQAcAgAlA9QApBEAWAvQAfBCAKA5QAHAkACBSQACB6gFA+IgIBEIgHBCQgDAyAFCjQAECEgPBNQgNA9gfAVQgUANgiACIgEAAQgVAAglgGg");
	var mask_graphics_23 = new cjs.Graphics().p("AQQM2QiqgYhWgOQiOgXhxgbQhQgTgugVQgOgFgcgOIgqgUQgigPg+gQQg7gPiqghQiQgchVgcQhWgciDg7QhagqidhMQhTgogqgYQgigVg2glIhWg7Qhbg7hpguQgagJgFgOQgFgNAOgUIELl2QBCheAmgsQA+hKA+gsQBSg7B7gnQBLgXCZghQBCgOAngBQAYgBAiAEIA7AGQArAED4AIQCxAFBxAhQBHAVBUAnQA0AaBiA1QBSAtAoAaQBCAsApAwQAcAgAlA9QApBEAWAvQAfBBAKA6QAHAkACBTQACB7gFA+IgIBEIgHBDQgDAxAFClQAECFgPBNQgNA9gfAWQgUAOgiABIgHAAQgVAAgigFg");
	var mask_graphics_24 = new cjs.Graphics().p("AQQM0QiqgWhWgOQiOgVhxgaQhQgSgugUQgOgGgcgNIgqgUQgigOg+gQQg7gPiqgfQiQgahVgbQhWgbiDg7QhagpidhKQhTgogqgYQgigUg2glIhWg6Qhbg7hpgsQgagJgFgPQgFgNAOgTIELl8QBChfAmgtQA+hKA+guQBSg8B7goQBLgZCZgiQBCgPAngCQAYgBAiADIA7AGQArAED4AFQCxADBxAgQBHAUBUAnQA0AZBiA0QBSAsAoAbQBCArApAvQAcAhAlA8QApBEAWAwQAfBBAKA5QAHAlACBTQACB8gFA+IgIBEIgHBEQgDAyAFClQAECGgPBOQgNA+gfAVQgUAPgiACIgHAAQgVAAgigFg");
	var mask_graphics_25 = new cjs.Graphics().p("AQQMzQiqgVhWgNQiOgThxgaQhQgRgugUIgqgSIgqgUQgigOg+gPQg7gOiqgdQiQgZhVgaQhWgbiDg5QhagoidhJQhTgngqgYQgigTg2glIhWg6Qhbg6hpgrQgagJgFgOQgFgOAOgUIELmAQBChgAmguQA+hMA+guQBSg9B7gqQBLgaCZgkQBCgQAngCQAYgCAiAEIA7AFQArADD4ACQCxACBxAeQBHAUBUAmQA0AZBiAzQBSArAoAaQBCArApAvQAcAhAlA8QApBEAWAvQAfBCAKA5QAHAlACBUQACB8gFA/IgIBFIgHBEQgDAyAFCmQAECGgPBPQgNA+gfAWQgUAPgiACIgJAAQgUAAghgDg");
	var mask_graphics_26 = new cjs.Graphics().p("AQQMxQiqgThWgMQiOgShxgYQhQgRgugTIgqgTIgqgTQgigNg+gPQg7gNiqgcQiQgXhVgaQhWgZiDg4QhagoidhHQhTgngqgXQgigTg2glIhWg5Qhbg5hpgrQgagIgFgPQgFgNAOgVIELmEQBChiAmgvQA+hMA+gvQBSg/B7grQBLgbCZgnQBCgQAngCQAYgCAiACIA7AFQArADD4gBQCxAABxAdQBHATBUAlQA0AZBiAyQBSArAoAaQBCAqApAvQAcAgAlA9QApBDAWAwQAfBBAKA6QAHAkACBVQACB9gFA/IgIBFIgHBFQgDAyAFCnQAECHgPBPQgNA/gfAXQgUAPgiADIgKAAQgUAAgggDg");
	var mask_graphics_27 = new cjs.Graphics().p("AQQMvQiqgRhWgLQiOgRhxgXQhQgQgugTQgOgFgcgMIgqgTQgigNg+gOQg7gNiqgaQiQgWhVgZQhWgYiDg3QhagnidhGQhTgmgqgXQgigTg2gkIhWg4Qhbg5hpgqQgagIgFgOQgFgOAOgVIELmKQBChiAmgwQA+hNA+gxQBShAB7gsQBLgcCZgoQBCgSAngCQAYgDAiADIA7ADQArADD4gDQCxgDBxAdQBHASBUAkQA0AYBiAyQBSAqAoAZQBCAqApAvQAcAgAlA9QApBDAWAwQAfBBAKA6QAHAlACBUQACB+gFBAIgIBFIgHBFQgDAzAFCoQAECIgPBPQgNBAgfAXQgUAPgiADIgOABQgTAAgdgDg");
	var mask_graphics_28 = new cjs.Graphics().p("AQQMtQiqgPhWgKQiOgPhxgWQhQgPgugTQgOgFgcgMIgqgSQgigNg+gOQg7gMiqgZQiQgUhVgYQhWgXiDg2QhagmidhFQhTglgqgXQgigTg2gjQhBgrgVgNQhbg4hpgoQgagJgFgOQgFgOAOgVIELmPQBChkAmgwQA+hOA+gyQBShBB7guQBLgdCZgqQBCgSAngDQAYgDAiACIA7ADQArACD4gGQCxgEBxAbQBHARBUAlQA0AXBiAxQBSApAoAZQBCAqApAuQAcAgAlA9QApBDAWAwQAfBBAKA6QAHAlACBVQACB+gFBAIgIBHIgHBFQgDAzAFCpQAECIgPBQQgNBAgfAYQgUAQgiADIgPABQgTAAgcgDg");
	var mask_graphics_29 = new cjs.Graphics().p("AQQMuQiqgOhWgJQiOgOhxgVQhQgOgugSQgOgFgcgMQgcgNgOgFQgigNg+gMQg7gMiqgXQiQgThVgXQhWgXiDg1QhagkidhEQhTgkgqgXQgigSg2gjIhWg4Qhbg3hpgnQgagIgFgPQgFgNAOgWIELmUQBChlAmgxQA+hQA+gyQBShCB7gwQBLgeCZgsQBCgTAngEQAYgDAiACIA7ADQArABD4gJQCxgGBxAaQBHARBUAkQA0AWBiAxQBSAoAoAZQBCApApAuQAcAgAlA8QApBEAWAvQAfBCAKA6QAHAlACBWQACB/gFBAIgIBHIgHBGQgDAzAFCpQAECJgPBRQgNBBgfAYQgUAQgiAEIgVABQgRAAgYgCg");
	var mask_graphics_30 = new cjs.Graphics().p("AQQMvQiqgMhWgIQiOgNhxgTQhQgOgugSQgOgEgcgMQgcgNgOgFQgigMg+gMQg7gMiqgVQiQgRhVgWQhWgWiDg0QhagkidhDQhTgjgqgWQgigSg2gjIhWg3Qhbg2hpgnQgagIgFgOQgFgOAOgWIELmYQBChnAmgxQA+hRA+gzQBShEB7gyQBLgeCZguQBCgUAngEQAYgDAiABIA7ACQArABD4gMQCxgIBxAZQBHAQBUAjQA0AWBiAwQBSAoAoAYQBCApApAuQAcAfAlA9QApBDAWAwQAfBBAKA7QAHAlACBWQACB/gFBBIgIBHIgHBHQgDAzAFCrQAECJgPBSQgNBBgfAZQgUAQgiAEIgbABIgjgBg");
	var mask_graphics_31 = new cjs.Graphics().p("AQQMvQiqgKhWgHQiOgLhxgTQhQgMgugSQgOgEgcgMIgqgRQgigMg+gMQg7gLiqgTQiQgQhVgVQhWgViDgzQhagjidhCQhTgigqgWQgigSg2giIhWg2Qhbg2hpgmQgagHgFgPQgFgNAOgXIELmeQBChnAmgyQA+hSA+g1QBShFB7gzQBLgfCZgwQBCgVAngEQAYgEAiABIA7ABQArABD4gOQCxgKBxAYQBHAPBUAiQA0AWBiAvQBSAnAoAYQBCAoApAuQAcAfAlA9QApBDAWAwQAfBBAKA7QAHAlACBWQACCBgFBBIgIBHIgHBHQgDA0AFCrQAECLgPBSQgNBBgfAaQgUAQgiAFIgbABIgjgBg");
	var mask_graphics_32 = new cjs.Graphics().p("AQQMwQiqgIhWgHQiOgJhxgSQhQgLgugRQgOgFgcgLIgqgRQgigMg+gLQg7gKiqgSQiQgOhVgVQhWgUiDgyQhagiidhAQhTgigqgVQgigSg2giQhBgpgVgMQhbg1hpglQgagIgFgOQgFgOAOgWIELmjQBChpAmgzQA+hTA+g1QBShGB7g1QBLghCZgxQBCgWAngFQAYgEAiABIA7ABQArAAD4gRQCxgMBxAXQBHAOBUAiQA0AVBiAuQBSAmAoAZQBCAnApAuQAcAfAlA8QApBDAWAwQAfBBAKA7QAHAmACBWQACCCgFBBIgIBIIgHBHQgDA1AFCsQAECLgPBTQgNBCgfAZQgUARgiAFQgNABgUAAIgdAAg");
	var mask_graphics_33 = new cjs.Graphics().p("AQQMxQiqgHhWgFQiOgIhxgRQhQgLgugQIgqgQIgqgQQgigMg+gKQg7gKiqgPQiQgNhVgUQhWgUiDgwQhagiidg+QhTgigqgVQgigRg2giIhWg0Qhbg1hpgkQgagHgFgOQgFgOAOgXIELmoQBChqAmg0QA+hUA+g2QBShHB7g2QBLgiCZg0QBCgWAngFQAYgFAiABIA7AAQArAAD4gUQCxgOBxAWQBHAOBUAgQA0AVBiAtQBSAmAoAYQBCAnApAtQAcAfAlA9QApBCAWAwQAfBCAKA7QAHAlACBXQACCCgFBCIgIBJIgHBHQgDA1AFCtQAECMgPBTQgNBDgfAaQgUARgiAFQgQACgZAAIgVAAg");
	var mask_graphics_34 = new cjs.Graphics().p("AQQMxQiqgFhWgEQiOgHhxgPQhQgKgugQIgqgQQgcgLgOgFQgigLg+gKQg7gJiqgOQiQgLhVgTQhWgTiDgvQhaghidg9QhTghgqgUQgigSg2ghIhWg0QhbgzhpgkQgagHgFgOQgFgOAOgXIELmtQBChrAmg1QA+hVA+g3QBShJB7g3QBLgjCZg2QBCgXAngGQAYgEAiAAIA7gBQArAAD4gXQCxgQBxAVQBHANBUAgQA0AVBiAsQBSAlAoAYQBCAmApAuQAcAeAlA8QApBDAWAwQAfBCAKA7QAHAlACBYQACCDgFBCIgIBJIgHBIQgDA1AFCuQAECMgPBUQgNBDgfAbQgUARgiAGQgTADggAAIgLgBg");
	var mask_graphics_35 = new cjs.Graphics().p("AQQMyQiqgChWgEQiOgFhxgOQhQgKgugQQgOgEgcgKQgcgMgOgEQgigLg+gJQg7gJiqgMQiQgKhVgSQhWgSiDguQhaggidg8QhTgggqgUQgigSg2ggIhWg0QhbgyhpgjQgagGgFgPQgFgNAOgYIELmyQBChtAmg1QA+hWA+g4QBShKB7g5QBLgkCZg3QBCgZAngGQAYgEAigBIA7gBQArgBD4gZQCxgSBxATQBHANBUAfQA0AUBiAsQBSAkAoAXQBCAmApAuQAcAeAlA8QApBDAWAwQAfBBAKA8QAHAmACBYQACCDgFBDIgIBJIgHBJQgDA1AFCuQAECOgPBUQgNBEgfAbQgUARgiAHQgTACggAAIgLAAg");
	var mask_graphics_36 = new cjs.Graphics().p("AMQMvQiOgEhxgNQhQgIgugQQgOgEgcgKIgqgQQgigKg+gJQg7gIiqgKQiQgJhVgRQhWgRiDgtQhaggidg6QhTgfgqgUQgigRg2ggQhBgogVgLQhbgyhpgiQgagGgFgPQgFgNAOgYIELm3QBChuAmg2QA+hXA+g5QBShLB7g7QBLglCZg5QBCgZAngHQAYgFAiAAIA7gCQArgCD4gcQCxgUBxATQBHAMBUAeQA0AUBiArQBSAjAoAXQBCAmApAtQAcAeAlA8QApBDAWAwQAfBBAKA8QAHAmACBYQACCEgFBDIgIBKIgHBJQgDA2AFCvQAECOgPBVQgNBEgfAcQgUASgiAGQgWAEgoAAQiqgBhWgDg");
	var mask_graphics_37 = new cjs.Graphics().p("AMQMvQiOgEhxgNQhQgIgugQQgOgEgcgKIgqgQQgigKg+gJQg7gIiqgKQiQgJhVgRQhWgRiDgtQhaggidg6QhTgfgqgUQgigRg2ggQhBgogVgLQhbgyhpgiQgagGgFgPQgFgNAOgYIELm3QBChuAmg2QA+hXA+g5QBShLB7g7QBLglCZg5QBCgZAngHQAYgFAiAAIA7gCQArgCD4gcQCxgUBxATQBHAMBUAeQA0AUBiArQBSAjAoAXQBCAmApAtQAcAeAlA8QApBDAWAwQAfBBAKA8QAHAmACBYQACCEgFBDIgIBKIgHBJQgDA2AFCvQAECOgPBVQgNBEgfAcQgUASgiAGQgWAEgoAAQiqgBhWgDg");
	var mask_graphics_38 = new cjs.Graphics().p("AMQMvQiOgEhxgNQhQgIgugQQgOgEgcgKIgqgQQgigKg+gJQg7gIiqgKQiQgJhVgRQhWgRiDgtQhaggidg6QhTgfgqgUQgigRg2ggQhBgogVgLQhbgyhpgiQgagGgFgPQgFgNAOgYIELm3QBChuAmg2QA+hXA+g5QBShLB7g7QBLglCZg5QBCgZAngHQAYgFAiAAIA7gCQArgCD4gcQCxgUBxATQBHAMBUAeQA0AUBiArQBSAjAoAXQBCAmApAtQAcAeAlA8QApBDAWAwQAfBBAKA8QAHAmACBYQACCEgFBDIgIBKIgHBJQgDA2AFCvQAECOgPBVQgNBEgfAcQgUASgiAGQgWAEgoAAQiqgBhWgDg");
	var mask_graphics_39 = new cjs.Graphics().p("AMQMvQiOgEhxgNQhQgIgugQQgOgEgcgKIgqgQQgigKg+gJQg7gIiqgKQiQgJhVgRQhWgRiDgtQhaggidg6QhTgfgqgUQgigRg2ggQhBgogVgLQhbgyhpgiQgagGgFgPQgFgNAOgYIELm3QBChuAmg2QA+hXA+g5QBShLB7g7QBLglCZg5QBCgZAngHQAYgFAiAAIA7gCQArgCD4gcQCxgUBxATQBHAMBUAeQA0AUBiArQBSAjAoAXQBCAmApAtQAcAeAlA8QApBDAWAwQAfBBAKA8QAHAmACBYQACCEgFBDIgIBKIgHBJQgDA2AFCvQAECOgPBVQgNBEgfAcQgUASgiAGQgWAEgoAAQiqgBhWgDg");
	var mask_graphics_40 = new cjs.Graphics().p("AMQMvQiOgEhxgNQhQgIgugQQgOgEgcgKIgqgQQgigKg+gJQg7gIiqgKQiQgJhVgRQhWgRiDgtQhaggidg6QhTgfgqgUQgigRg2ggQhBgogVgLQhbgyhpgiQgagGgFgPQgFgNAOgYIELm3QBChuAmg2QA+hXA+g5QBShLB7g7QBLglCZg5QBCgZAngHQAYgFAiAAIA7gCQArgCD4gcQCxgUBxATQBHAMBUAeQA0AUBiArQBSAjAoAXQBCAmApAtQAcAeAlA8QApBDAWAwQAfBBAKA8QAHAmACBYQACCEgFBDIgIBKIgHBJQgDA2AFCvQAECOgPBVQgNBEgfAcQgUASgiAGQgWAEgoAAQiqgBhWgDg");
	var mask_graphics_41 = new cjs.Graphics().p("AMQMvQiOgEhxgNQhQgIgugQQgOgEgcgKIgqgQQgigKg+gJQg7gIiqgKQiQgJhVgRQhWgRiDgtQhaggidg6QhTgfgqgUQgigRg2ggQhBgogVgLQhbgyhpgiQgagGgFgPQgFgNAOgYIELm3QBChuAmg2QA+hXA+g5QBShLB7g7QBLglCZg5QBCgZAngHQAYgFAiAAIA7gCQArgCD4gcQCxgUBxATQBHAMBUAeQA0AUBiArQBSAjAoAXQBCAmApAtQAcAeAlA8QApBDAWAwQAfBBAKA8QAHAmACBYQACCEgFBDIgIBKIgHBJQgDA2AFCvQAECOgPBVQgNBEgfAcQgUASgiAGQgWAEgoAAQiqgBhWgDg");
	var mask_graphics_42 = new cjs.Graphics().p("AMQMvQiOgEhxgNQhQgIgugQQgOgEgcgKIgqgQQgigKg+gJQg7gIiqgKQiQgJhVgRQhWgRiDgtQhaggidg6QhTgfgqgUQgigRg2ggQhBgogVgLQhbgyhpgiQgagGgFgPQgFgNAOgYIELm3QBChuAmg2QA+hXA+g5QBShLB7g7QBLglCZg5QBCgZAngHQAYgFAiAAIA7gCQArgCD4gcQCxgUBxATQBHAMBUAeQA0AUBiArQBSAjAoAXQBCAmApAtQAcAeAlA8QApBDAWAwQAfBBAKA8QAHAmACBYQACCEgFBDIgIBKIgHBJQgDA2AFCvQAECOgPBVQgNBEgfAcQgUASgiAGQgWAEgoAAQiqgBhWgDg");
	var mask_graphics_43 = new cjs.Graphics().p("AMQMvQiOgEhxgNQhQgIgugQQgOgEgcgKIgqgQQgigKg+gJQg7gIiqgKQiQgJhVgRQhWgRiDgtQhaggidg6QhTgfgqgUQgigRg2ggQhBgogVgLQhbgyhpgiQgagGgFgPQgFgNAOgYIELm3QBChuAmg2QA+hXA+g5QBShLB7g7QBLglCZg5QBCgZAngHQAYgFAiAAIA7gCQArgCD4gcQCxgUBxATQBHAMBUAeQA0AUBiArQBSAjAoAXQBCAmApAtQAcAeAlA8QApBDAWAwQAfBBAKA8QAHAmACBYQACCEgFBDIgIBKIgHBJQgDA2AFCvQAECOgPBVQgNBEgfAcQgUASgiAGQgWAEgoAAQiqgBhWgDg");
	var mask_graphics_44 = new cjs.Graphics().p("AMQMvQiOgEhxgNQhQgIgugQQgOgEgcgKIgqgQQgigKg+gJQg7gIiqgKQiQgJhVgRQhWgRiDgtQhaggidg6QhTgfgqgUQgigRg2ggQhBgogVgLQhbgyhpgiQgagGgFgPQgFgNAOgYIELm3QBChuAmg2QA+hXA+g5QBShLB7g7QBLglCZg5QBCgZAngHQAYgFAiAAIA7gCQArgCD4gcQCxgUBxATQBHAMBUAeQA0AUBiArQBSAjAoAXQBCAmApAtQAcAeAlA8QApBDAWAwQAfBBAKA8QAHAmACBYQACCEgFBDIgIBKIgHBJQgDA2AFCvQAECOgPBVQgNBEgfAcQgUASgiAGQgWAEgoAAQiqgBhWgDg");
	var mask_graphics_45 = new cjs.Graphics().p("AMQMvQiOgEhxgNQhQgIgugQQgOgEgcgKIgqgQQgigKg+gJQg7gIiqgKQiQgJhVgRQhWgRiDgtQhaggidg6QhTgfgqgUQgigRg2ggQhBgogVgLQhbgyhpgiQgagGgFgPQgFgNAOgYIELm3QBChuAmg2QA+hXA+g5QBShLB7g7QBLglCZg5QBCgZAngHQAYgFAiAAIA7gCQArgCD4gcQCxgUBxATQBHAMBUAeQA0AUBiArQBSAjAoAXQBCAmApAtQAcAeAlA8QApBDAWAwQAfBBAKA8QAHAmACBYQACCEgFBDIgIBKIgHBJQgDA2AFCvQAECOgPBVQgNBEgfAcQgUASgiAGQgWAEgoAAQiqgBhWgDg");
	var mask_graphics_46 = new cjs.Graphics().p("AMQMvQiOgEhxgNQhQgIgugQQgOgEgcgKIgqgQQgigKg+gJQg7gIiqgKQiQgJhVgRQhWgRiDgtQhaggidg6QhTgfgqgUQgigRg2ggQhBgogVgLQhbgyhpgiQgagGgFgPQgFgNAOgYIELm3QBChuAmg2QA+hXA+g5QBShLB7g7QBLglCZg5QBCgZAngHQAYgFAiAAIA7gCQArgCD4gcQCxgUBxATQBHAMBUAeQA0AUBiArQBSAjAoAXQBCAmApAtQAcAeAlA8QApBDAWAwQAfBBAKA8QAHAmACBYQACCEgFBDIgIBKIgHBJQgDA2AFCvQAECOgPBVQgNBEgfAcQgUASgiAGQgWAEgoAAQiqgBhWgDg");
	var mask_graphics_47 = new cjs.Graphics().p("AMQMvQiOgEhxgNQhQgIgugQQgOgEgcgKIgqgQQgigKg+gJQg7gIiqgKQiQgJhVgRQhWgRiDgtQhaggidg6QhTgfgqgUQgigRg2ggQhBgogVgLQhbgyhpgiQgagGgFgPQgFgNAOgYIELm3QBChuAmg2QA+hXA+g5QBShLB7g7QBLglCZg5QBCgZAngHQAYgFAiAAIA7gCQArgCD4gcQCxgUBxATQBHAMBUAeQA0AUBiArQBSAjAoAXQBCAmApAtQAcAeAlA8QApBDAWAwQAfBBAKA8QAHAmACBYQACCEgFBDIgIBKIgHBJQgDA2AFCvQAECOgPBVQgNBEgfAcQgUASgiAGQgWAEgoAAQiqgBhWgDg");
	var mask_graphics_48 = new cjs.Graphics().p("AMQMsQiOgDhxgNQhQgIgugQQgOgEgcgKIgqgQQgigKg+gIQg7gIiqgLQiQgIhVgRQhWgRiDgtQhagfidg6QhTgfgqgUQgigRg2ggQhBgngVgLQhbgyhpghQgagHgFgOQgFgOAOgXIELm3QBChtAmg2QA+hXA+g5QBShLB7g7QBLgkCZg6QBCgZAngGQAYgFAigBIA7gCQArgBD4gcQCxgVBxATQBHAMBUAeQA0ATBiArQBSAjAoAXQBCAmApAsQAcAfAlA7QApBDAWAwQAfBBAKA7QAHAmACBYQACCEgFBCIgIBKIgHBJQgDA1AFCvQAECOgPBVQgNBDgfAcQgUASgiAGQgWAEgoAAQiqgBhWgDg");
	var mask_graphics_49 = new cjs.Graphics().p("AMQMqQiOgEhxgMQhQgJgugPQgOgEgcgKQgcgLgOgEQgigLg+gIQg7gIiqgKQiQgIhVgRQhWgRiDgsQhaggidg5QhTgfgqgUQgigRg2gfIhWgzQhbgxhpghQgagHgFgOQgFgNAOgYIELm1QBChtAmg2QA+hXA+g5QBShKB7g7QBLglCZg5QBCgZAngHQAYgFAiAAIA7gCQArgCD4gcQCxgUBxASQBHALBUAfQA0ATBiAqQBSAjAoAXQBCAlApAtQAcAeAlA8QApBCAWAvQAfBBAKA7QAHAmACBYQACCDgFBDIgIBJIgHBJQgDA1AFCuQAECNgPBVQgNBEgfAbQgUASgiAGQgWAEgoAAQiqgBhWgCg");
	var mask_graphics_50 = new cjs.Graphics().p("AMQMnQiOgEhxgMQhQgIgugPQgOgEgcgLIgqgPQgigKg+gIQg7gIiqgKQiQgIhVgRQhWgQiDgtQhageidg6QhTgegqgUQgigRg2gfQhBgngVgLQhbgyhpggQgagHgFgOQgFgNAOgYIELm0QBChtAmg1QA+hXA+g5QBShKB7g7QBLglCZg5QBCgZAngHQAYgEAigBIA7gCQArgCD4gcQCxgVBxASQBHAMBUAeQA0ATBiAqQBSAjAoAXQBCAlApAsQAcAeAlA7QApBCAWAwQAfBAAKA7QAHAmACBYQACCCgFBCIgIBKIgHBIQgDA1AFCuQAECNgPBUQgNBDgfAbQgUASgiAHQgWADgoABQiqgBhWgCg");
	var mask_graphics_51 = new cjs.Graphics().p("AMQMkQiOgDhxgMQhQgJgugOQgOgEgcgLIgqgPQgigKg+gIQg7gIiqgJQiQgIhVgRQhWgQiDgsQhagfidg5QhTgegqgUQgigQg2ggIhWgyQhbgxhpggQgagHgFgOQgFgNAOgXIELmzQBChtAmg1QA+hXA+g4QBShLB7g7QBLgkCZg5QBCgZAngHQAYgFAigBIA7gCQArgBD4gdQCxgVBxASQBHAMBUAdQA0ATBiAqQBSAjAoAXQBCAkApAtQAcAdAlA8QApBBAWAvQAfBBAKA6QAHAmACBXQACCDgFBCIgIBJIgHBIQgDA1AFCtQAECMgPBUQgNBDgfAcQgUARgiAHQgWAEgoAAQiqgBhWgCg");
	var mask_graphics_52 = new cjs.Graphics().p("AMQMhQiOgDhxgMQhQgIgugOQgOgEgcgLQgcgKgOgEQgigLg+gIQg7gHiqgKQiQgHhVgRQhWgQiDgsQhageidg5QhTgegqgUQgigQg2gfQhBgngVgLQhbgxhpggQgagGgFgPQgFgNAOgXIELmyQBChsAmg1QA+hXA+g4QBShKB7g7QBLgkCZg6QBCgZAngGQAYgFAigBIA7gCQArgCD4gdQCxgUBxARQBHALBUAeQA0ATBiApQBSAjAoAXQBCAkApAsQAcAeAlA7QApBBAWAvQAfBAAKA7QAHAlACBXQACCCgFBCIgIBJIgHBIQgDA1AFCsQAECMgPBTQgNBEgfAbQgUARgiAHQgWAEgoAAQiqAAhWgDg");
	var mask_graphics_53 = new cjs.Graphics().p("AMQMfQiOgDhxgMQhQgIgugOQgOgEgcgLQgcgKgOgEQgigLg+gIQg7gHiqgJQiQgIhVgQQhWgQiDgrQhagfidg4QhTgegqgTQgigRg2gfQhBgmgVgLQhbgxhpggQgagGgFgOQgFgNAOgXIELmxQBChsAmg1QA+hWA+g5QBShKB7g7QBLgkCZg5QBCgZAngHQAYgFAigBIA7gCQArgBD4geQCxgUBxARQBHALBUAeQA0ASBiAqQBSAiAoAXQBCAkApAsQAcAdAlA7QApBBAWAvQAfBAAKA6QAHAmACBWQACCCgFBBIgIBJIgHBIQgDA0AFCsQAECLgPBUQgNBDgfAbQgUARgiAHQgWAEgoAAIg3AAQiCAAhHgCg");
	var mask_graphics_54 = new cjs.Graphics().p("AMQMcQiOgChxgMQhQgIgugPIgqgNIgqgPQgigKg+gIQg7gIiqgIQiQgIhVgQQhWgQiDgrQhageidg4QhTgegqgTQgigQg2gfQhBgmgVgLQhbgwhpggQgagHgFgOQgFgNAOgXIELmvQBChtAmg0QA+hWA+g4QBShKB7g7QBLgkCZg5QBCgZAngHQAYgFAigBIA7gCQArgCD4gdQCxgVBxARQBHALBUAdQA0ATBiApQBSAiAoAWQBCAlApArQAcAeAlA6QApBBAWAvQAfBAAKA5QAHAmACBWQACCBgFBBIgIBJIgHBHQgDA1AFCrQAECLgPBTQgNBDgfAbQgUASgiAGQgWAEgoAAQiqAAhWgCg");
	var mask_graphics_55 = new cjs.Graphics().p("AMQMZQiOgChxgLQhQgIgugPIgqgNIgqgPQgigKg+gIQg7gHiqgJQiQgIhVgPQhWgQiDgrQhagdidg4QhTgegqgTQgigQg2gfQhBgmgVgLQhbgvhpggQgagHgFgNQgFgOAOgWIELmvQBChsAmg0QA+hWA+g4QBShKB7g6QBLglCZg5QBCgZAngHQAYgEAigBIA7gDQArgCD4gdQCxgVBxARQBHALBUAdQA0ASBiApQBSAiAoAWQBCAkApAsQAcAdAlA6QApBBAWAvQAfA/AKA5QAHAmACBWQACCAgFBCIgIBIIgHBHQgDA0AFCrQAECLgPBTQgNBCgfAaQgUATgiAGQgWAEgoAAIhBAAQh7AAhEgCg");
	var mask_graphics_56 = new cjs.Graphics().p("AMQMXQiOgDhxgLQhQgIgugOIgqgOQgcgKgOgEQgigLg+gHQg7gHiqgJQiQgHhVgQQhWgPiDgrQhagdidg4QhTgdgqgTQgigQg2gfQhBgmgVgKQhbgwhpgfQgagHgFgOQgFgMAOgXIELmuQBChrAmg0QA+hWA+g4QBShJB7g7QBLglCZg5QBCgZAngHQAYgEAigBIA7gDQArgCD4gdQCxgVBxAQQBHALBUAdQA0ASBiApQBSAiAoAWQBCAkApArQAcAdAlA6QApBAAWAvQAfA/AKA6QAHAlACBWQACCAgFBAIgIBIIgHBIQgDA0AFCqQAECKgPBSQgNBDgfAaQgUASgiAHQgWADgoABIhoAAQhfAAg5gBg");
	var mask_graphics_57 = new cjs.Graphics().p("AMQMUQiOgChxgLQhQgIgugOIgqgOQgcgKgOgEQgigKg+gIQg7gHiqgIQiQgHhVgQQhWgPiDgqQhageidg3QhTgdgqgTQgigQg2geIhWgxQhbgvhpgfQgagHgFgNQgFgNAOgXIELmsQBChrAmg0QA+hWA+g4QBShJB7g7QBLgkCZg5QBCgZAngHQAYgFAigBIA7gCQArgCD4geQCxgVBxAQQBHALBUAdQA0ASBiAoQBSAiAoAWQBCAjApAsQAcAcAlA6QApBAAWAvQAfA/AKA5QAHAlACBVQACCAgFBBIgIBHIgHBHQgDA0AFCqQAECJgPBTQgNBCgfAbQgUARgiAHQgWAEgoAAIhoAAQhfAAg5gBg");
	var mask_graphics_58 = new cjs.Graphics().p("AMQMRQiOgChxgLQhQgIgugOIgqgNIgqgPQgigKg+gHQg7gHiqgIQiQgHhVgPQhWgPiDgrQhagcidg3QhTgdgqgTQgigQg2geQhBgmgVgKQhbgvhpgfQgagHgFgNQgFgNAOgXIELmrQBChrAmg0QA+hVA+g4QBShJB7g7QBLgkCZg5QBCgZAngHQAYgEAigCIA7gCQArgCD4geQCxgWBxARQBHALBUAcQA0ASBiAoQBSAiAoAVQBCAkApArQAcAcAlA6QApBAAWAuQAfA/AKA5QAHAlACBVQACB/gFBAIgIBIIgHBHQgDAzAFCqQAECJgPBSQgNBBgfAbQgUASgiAGQgWAEgoABIhoAAQhfAAg5gBg");
	var mask_graphics_59 = new cjs.Graphics().p("AMQMOQiOgChxgKQhQgIgugOIgqgNIgqgOQgigKg+gIQg7gHiqgHQiQgHhVgPQhWgPiDgqQhagdidg2QhTgdgqgTQgigQg2geIhWgwQhbguhpgfQgagHgFgNQgFgNAOgWIELmqQBChrAmg0QA+hVA+g4QBShIB7g7QBLgkCZg5QBCgZAngHQAYgFAigBIA7gDQArgCD4geQCxgVBxAQQBHAKBUAdQA0ARBiAoQBSAiAoAVQBCAjApArQAcAdAlA5QApBAAWAuQAfA+AKA5QAHAlACBVQACB/gFBAIgIBHIgHBGQgDA0AFCpQAECIgPBSQgNBCgfAaQgUASgiAGQgWAEgoABIh7AAIiFgBg");
	var mask_graphics_60 = new cjs.Graphics().p("AMQMMQiOgChxgLQhQgHgugOIgqgNIgqgOQgigKg+gIQg7gGiqgIQiQgGhVgPQhWgPiDgqQhagcidg2QhTgdgqgTQgigPg2geQhBglgVgLQhbguhpgfQgagGgFgOQgFgMAOgXIELmpQBChqAmg0QA+hVA+g3QBShJB7g7QBLgkCZg5QBCgZAngHQAYgEAigCIA7gCQArgCD4gfQCxgVBxAQQBHAKBUAcQA0ASBiAnQBSAiAoAVQBCAjApArQAcAcAlA5QApBAAWAuQAfA+AKA4QAHAlACBVQACB+gFBAIgIBHIgHBGQgDA0AFCoQAECIgPBRQgNBCgfAaQgUASgiAGQgWAEgoABIiVAAIhrAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:176.9,y:282.3}).wait(1).to({graphics:mask_graphics_1,x:176.9,y:282.2}).wait(1).to({graphics:mask_graphics_2,x:176.9,y:282}).wait(1).to({graphics:mask_graphics_3,x:176.9,y:281.9}).wait(1).to({graphics:mask_graphics_4,x:176.9,y:281.8}).wait(1).to({graphics:mask_graphics_5,x:176.9,y:281.7}).wait(1).to({graphics:mask_graphics_6,x:176.9,y:281.6}).wait(1).to({graphics:mask_graphics_7,x:176.9,y:281.5}).wait(1).to({graphics:mask_graphics_8,x:176.9,y:282.7}).wait(1).to({graphics:mask_graphics_9,x:176.9,y:283.9}).wait(1).to({graphics:mask_graphics_10,x:176.9,y:285.1}).wait(1).to({graphics:mask_graphics_11,x:176.9,y:286.3}).wait(1).to({graphics:mask_graphics_12,x:176.9,y:287.5}).wait(1).to({graphics:mask_graphics_13,x:176.9,y:288.7}).wait(1).to({graphics:mask_graphics_14,x:176.9,y:289.8}).wait(1).to({graphics:mask_graphics_15,x:176.9,y:290.7}).wait(1).to({graphics:mask_graphics_16,x:176.9,y:291.6}).wait(1).to({graphics:mask_graphics_17,x:176.9,y:292.5}).wait(1).to({graphics:mask_graphics_18,x:176.9,y:293.4}).wait(1).to({graphics:mask_graphics_19,x:176.9,y:294.3}).wait(1).to({graphics:mask_graphics_20,x:176.9,y:295.1}).wait(1).to({graphics:mask_graphics_21,x:176.9,y:294.4}).wait(1).to({graphics:mask_graphics_22,x:176.9,y:293.7}).wait(1).to({graphics:mask_graphics_23,x:176.9,y:293}).wait(1).to({graphics:mask_graphics_24,x:176.9,y:292.3}).wait(1).to({graphics:mask_graphics_25,x:176.9,y:291.5}).wait(1).to({graphics:mask_graphics_26,x:176.9,y:290.8}).wait(1).to({graphics:mask_graphics_27,x:176.9,y:290.1}).wait(1).to({graphics:mask_graphics_28,x:176.9,y:289.3}).wait(1).to({graphics:mask_graphics_29,x:176.9,y:288.4}).wait(1).to({graphics:mask_graphics_30,x:176.9,y:287.4}).wait(1).to({graphics:mask_graphics_31,x:176.9,y:286.4}).wait(1).to({graphics:mask_graphics_32,x:176.9,y:285.4}).wait(1).to({graphics:mask_graphics_33,x:176.9,y:284.4}).wait(1).to({graphics:mask_graphics_34,x:176.9,y:283.5}).wait(1).to({graphics:mask_graphics_35,x:176.9,y:282.4}).wait(1).to({graphics:mask_graphics_36,x:176.9,y:281.5}).wait(1).to({graphics:mask_graphics_37,x:176.9,y:281.5}).wait(1).to({graphics:mask_graphics_38,x:176.9,y:281.5}).wait(1).to({graphics:mask_graphics_39,x:176.9,y:281.5}).wait(1).to({graphics:mask_graphics_40,x:176.9,y:281.5}).wait(1).to({graphics:mask_graphics_41,x:176.9,y:281.5}).wait(1).to({graphics:mask_graphics_42,x:176.9,y:281.5}).wait(1).to({graphics:mask_graphics_43,x:176.9,y:281.5}).wait(1).to({graphics:mask_graphics_44,x:176.9,y:281.5}).wait(1).to({graphics:mask_graphics_45,x:176.9,y:281.5}).wait(1).to({graphics:mask_graphics_46,x:176.9,y:281.5}).wait(1).to({graphics:mask_graphics_47,x:176.9,y:281.5}).wait(1).to({graphics:mask_graphics_48,x:176.9,y:281.5}).wait(1).to({graphics:mask_graphics_49,x:176.9,y:281.6}).wait(1).to({graphics:mask_graphics_50,x:176.9,y:281.7}).wait(1).to({graphics:mask_graphics_51,x:176.9,y:281.7}).wait(1).to({graphics:mask_graphics_52,x:176.9,y:281.8}).wait(1).to({graphics:mask_graphics_53,x:176.9,y:281.8}).wait(1).to({graphics:mask_graphics_54,x:176.9,y:281.9}).wait(1).to({graphics:mask_graphics_55,x:176.9,y:281.9}).wait(1).to({graphics:mask_graphics_56,x:176.9,y:282}).wait(1).to({graphics:mask_graphics_57,x:176.9,y:282.1}).wait(1).to({graphics:mask_graphics_58,x:176.9,y:282.2}).wait(1).to({graphics:mask_graphics_59,x:176.9,y:282.2}).wait(1).to({graphics:mask_graphics_60,x:176.9,y:282.3}).wait(1));

	// Capa_9
	this.instance = new lib.pipas("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(242.9,215.8,0.249,0.706,0,31.2,-140.5,0.5,2.8);

	this.instance_1 = new lib.pipas("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(244.6,219.5,0.273,0.646,0,27.4,18,2.8,2.8);

	this.instance_2 = new lib.pipas("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(237.5,226.9,0.262,0.699,0,33.4,-128.2,-0.5,2.6);

	this.instance_3 = new lib.pipas("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(238.1,222.1,0.273,0.646,0,27.4,18,2.2,2.6);

	this.instance_4 = new lib.pipas("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(236.3,215.9,0.395,0.886,0,27.4,-161.9,0.8,2.8);

	this.instance_5 = new lib.pipas("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(240.2,219.7,0.464,0.793,0,22.6,2.4,1.9,2.8);

	this.instance_6 = new lib.pipas("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(230.9,229.9,0.388,0.891,0,30.3,-151.5,0.7,2.6);

	this.instance_7 = new lib.pipas("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(230.2,224.4,0.464,0.793,0,22.6,2.4,1.6,2.7);

	this.instance_8 = new lib.pipas("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(240.3,202.9,0.282,0.691,0,23.7,-2.4,2.2,2.8);

	this.instance_9 = new lib.pipas("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(235.7,204.9,0.276,0.648,0,27.5,-163.5,0.9,2.8);

	this.instance_10 = new lib.pipas("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(238.4,217.3,0.302,0.673,0,20.8,-11.9,1.8,3.1);

	this.instance_11 = new lib.pipas("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(247.3,213.5,0.186,0.606,0,18.4,-155.1,0.5,2.8);

	this.instance_12 = new lib.pipas("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(248.9,210,0.391,0.885,0,26.9,16.7,1.6,2.8);

	this.instance_13 = new lib.pipas("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(242.9,210.6,0.418,0.815,0,31.6,-145.8,0.7,2.6);

	this.instance_14 = new lib.pipas("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(240.6,223.1,0.407,0.874,0,24.1,6.9,2,2.7);

	this.instance_15 = new lib.pipas("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(245.8,219.3,0.418,0.815,0,31.6,-145.8,0.7,2.5);

	this.instance_16 = new lib.pipas("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(233.3,224.2,0.341,0.717,0,6.4,-4,2.6,3);

	this.instance_17 = new lib.pipas("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(228.6,226.4,0.363,0.661,0,11.3,-167.8,0.1,2.6);

	this.instance_18 = new lib.pipas("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(230.4,236.5,0.354,0.708,0,3.3,-13.1,2.2,3.1);

	this.instance_19 = new lib.pipas("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(233.7,232.2,0.363,0.661,0,11.3,-167.8,0.3,2.6);

	this.instance_20 = new lib.pipas("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(240.6,227.9,0.525,0.907,0,11.3,12.1,2,2.6);

	this.instance_21 = new lib.pipas("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(233.2,228.9,0.583,0.824,0,17.6,-154.9,0.7,2.5);

	this.instance_22 = new lib.pipas("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(235.3,242.9,0.527,0.906,0,7.5,4.2,2,2.8);

	this.instance_23 = new lib.pipas("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(240.4,238.5,0.583,0.824,0,17.6,-154.9,0.6,2.5);

	this.instance_24 = new lib.pipas("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(239.2,215.4,0.339,0.714,0,16.9,-150.6,0.1,2.6);

	this.instance_25 = new lib.pipas("synched",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(242.6,219.5,0.358,0.661,0,11.9,13.1,2.6,2.7);

	this.instance_26 = new lib.pipas("synched",0);
	this.instance_26.parent = this;
	this.instance_26.setTransform(236.9,227.9,0.354,0.704,0,19.9,-141.6,0.3,2.6);

	this.instance_27 = new lib.pipas("synched",0);
	this.instance_27.parent = this;
	this.instance_27.setTransform(235.9,222.6,0.358,0.661,0,11.9,13.1,2.4,2.6);

	this.instance_28 = new lib.pipas("synched",0);
	this.instance_28.parent = this;
	this.instance_28.setTransform(231.2,215.8,0.517,0.907,0,12,-166.8,0.6,2.6);

	this.instance_29 = new lib.pipas("synched",0);
	this.instance_29.parent = this;
	this.instance_29.setTransform(237.5,219.8,0.57,0.827,0,5.8,0,2,2.6);

	this.instance_30 = new lib.pipas("synched",0);
	this.instance_30.parent = this;
	this.instance_30.setTransform(230,231.5,0.522,0.903,0,15.7,-158.8,0.7,2.5);

	this.instance_31 = new lib.pipas("synched",0);
	this.instance_31.parent = this;
	this.instance_31.setTransform(227.3,225.6,0.57,0.827,0,5.8,0,1.9,2.8);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13,this.instance_14,this.instance_15,this.instance_16,this.instance_17,this.instance_18,this.instance_19,this.instance_20,this.instance_21,this.instance_22,this.instance_23,this.instance_24,this.instance_25,this.instance_26,this.instance_27,this.instance_28,this.instance_29,this.instance_30,this.instance_31];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},27).wait(34));

	// Capa_8
	this.instance_32 = new lib.pipas("synched",0);
	this.instance_32.parent = this;
	this.instance_32.setTransform(249.8,197.1,0.174,0.492,0,31.2,-140.5,0,2.8);

	this.instance_33 = new lib.pipas("synched",0);
	this.instance_33.parent = this;
	this.instance_33.setTransform(250.9,199.6,0.19,0.45,0,27.4,18,2.9,2.7);

	this.instance_34 = new lib.pipas("synched",0);
	this.instance_34.parent = this;
	this.instance_34.setTransform(245.9,204.8,0.183,0.487,0,33.4,-128.2,-0.4,2.6);

	this.instance_35 = new lib.pipas("synched",0);
	this.instance_35.parent = this;
	this.instance_35.setTransform(246.4,201.4,0.19,0.45,0,27.4,18,2.5,2.6);

	this.instance_36 = new lib.pipas("synched",0);
	this.instance_36.parent = this;
	this.instance_36.setTransform(245.2,197.1,0.275,0.618,0,27.4,-161.9,0.5,2.7);

	this.instance_37 = new lib.pipas("synched",0);
	this.instance_37.parent = this;
	this.instance_37.setTransform(247.8,199.8,0.323,0.553,0,22.6,2.4,2,2.8);

	this.instance_38 = new lib.pipas("synched",0);
	this.instance_38.parent = this;
	this.instance_38.setTransform(241.3,206.9,0.271,0.621,0,30.3,-151.5,0.5,2.6);

	this.instance_39 = new lib.pipas("synched",0);
	this.instance_39.parent = this;
	this.instance_39.setTransform(240.9,203,0.323,0.553,0,22.6,2.4,1.8,2.7);

	this.instance_40 = new lib.pipas("synched",0);
	this.instance_40.parent = this;
	this.instance_40.setTransform(247.9,188.1,0.197,0.482,0,23.7,-2.4,2.3,2.9);

	this.instance_41 = new lib.pipas("synched",0);
	this.instance_41.parent = this;
	this.instance_41.setTransform(244.7,189.4,0.192,0.452,0,27.5,-163.5,1,2.8);

	this.instance_42 = new lib.pipas("synched",0);
	this.instance_42.parent = this;
	this.instance_42.setTransform(246.6,198.1,0.211,0.469,0,20.8,-11.9,1.9,3.1);

	this.instance_43 = new lib.pipas("synched",0);
	this.instance_43.parent = this;
	this.instance_43.setTransform(252.9,195.5,0.13,0.422,0,18.4,-155.1,0.2,2.8);

	this.instance_44 = new lib.pipas("synched",0);
	this.instance_44.parent = this;
	this.instance_44.setTransform(253.8,192.9,0.272,0.617,0,26.9,16.7,1.4,2.7);

	this.instance_45 = new lib.pipas("synched",0);
	this.instance_45.parent = this;
	this.instance_45.setTransform(249.7,193.5,0.291,0.568,0,31.5,-145.8,0.6,2.7);

	this.instance_46 = new lib.pipas("synched",0);
	this.instance_46.parent = this;
	this.instance_46.setTransform(248.1,202.1,0.284,0.609,0,24.1,6.9,2,2.8);

	this.instance_47 = new lib.pipas("synched",0);
	this.instance_47.parent = this;
	this.instance_47.setTransform(251.8,199.5,0.291,0.568,0,31.5,-145.8,0.5,2.5);

	this.instance_48 = new lib.pipas("synched",0);
	this.instance_48.parent = this;
	this.instance_48.setTransform(243,202.8,0.237,0.5,0,6.4,-3.9,2.6,2.9);

	this.instance_49 = new lib.pipas("synched",0);
	this.instance_49.parent = this;
	this.instance_49.setTransform(239.7,204.4,0.253,0.461,0,11.3,-167.8,0.2,2.7);

	this.instance_50 = new lib.pipas("synched",0);
	this.instance_50.parent = this;
	this.instance_50.setTransform(241,211.6,0.247,0.493,0,3.3,-13.1,2.2,3.2);

	this.instance_51 = new lib.pipas("synched",0);
	this.instance_51.parent = this;
	this.instance_51.setTransform(243.3,208.5,0.253,0.461,0,11.3,-167.8,0.2,2.7);

	this.instance_52 = new lib.pipas("synched",0);
	this.instance_52.parent = this;
	this.instance_52.setTransform(248.1,205.5,0.366,0.632,0,11.3,12.1,2,2.6);

	this.instance_53 = new lib.pipas("synched",0);
	this.instance_53.parent = this;
	this.instance_53.setTransform(242.9,206.2,0.406,0.575,0,17.6,-154.9,0.7,2.6);

	this.instance_54 = new lib.pipas("synched",0);
	this.instance_54.parent = this;
	this.instance_54.setTransform(244.4,215.9,0.367,0.632,0,7.5,4.2,1.9,2.6);

	this.instance_55 = new lib.pipas("synched",0);
	this.instance_55.parent = this;
	this.instance_55.setTransform(247.9,212.9,0.406,0.575,0,17.6,-154.9,0.5,2.5);

	this.instance_56 = new lib.pipas("synched",0);
	this.instance_56.parent = this;
	this.instance_56.setTransform(247.2,196.7,0.236,0.498,0,16.9,-150.6,-0.1,2.5);

	this.instance_57 = new lib.pipas("synched",0);
	this.instance_57.parent = this;
	this.instance_57.setTransform(249.5,199.5,0.249,0.461,0,11.9,13.1,2.7,2.6);

	this.instance_58 = new lib.pipas("synched",0);
	this.instance_58.parent = this;
	this.instance_58.setTransform(245.5,205.5,0.247,0.49,0,19.9,-141.6,0.1,2.6);

	this.instance_59 = new lib.pipas("synched",0);
	this.instance_59.parent = this;
	this.instance_59.setTransform(244.8,201.8,0.249,0.461,0,11.9,13.1,2.3,2.7);

	this.instance_60 = new lib.pipas("synched",0);
	this.instance_60.parent = this;
	this.instance_60.setTransform(241.6,197,0.361,0.632,0,12,-166.8,0.6,2.6);

	this.instance_61 = new lib.pipas("synched",0);
	this.instance_61.parent = this;
	this.instance_61.setTransform(245.9,199.8,0.397,0.576,0,5.8,0,2.1,2.7);

	this.instance_62 = new lib.pipas("synched",0);
	this.instance_62.parent = this;
	this.instance_62.setTransform(240.7,208.1,0.364,0.63,0,15.7,-158.8,0.6,2.6);

	this.instance_63 = new lib.pipas("synched",0);
	this.instance_63.parent = this;
	this.instance_63.setTransform(238.8,203.8,0.397,0.576,0,5.8,0,2,2.7);

	var maskedShapeInstanceList = [this.instance_32,this.instance_33,this.instance_34,this.instance_35,this.instance_36,this.instance_37,this.instance_38,this.instance_39,this.instance_40,this.instance_41,this.instance_42,this.instance_43,this.instance_44,this.instance_45,this.instance_46,this.instance_47,this.instance_48,this.instance_49,this.instance_50,this.instance_51,this.instance_52,this.instance_53,this.instance_54,this.instance_55,this.instance_56,this.instance_57,this.instance_58,this.instance_59,this.instance_60,this.instance_61,this.instance_62,this.instance_63];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32}]}).wait(61));

	// Mapa_de_bits_11
	this.instance_64 = new lib.Interpolación1("synched",0);
	this.instance_64.parent = this;
	this.instance_64.setTransform(71,224,1,1,0,0,0,-69,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance_64).to({regX:-68.9,regY:-1.9,scaleX:0.81,rotation:-9,x:41,y:227.4},14).to({regX:-68.8,scaleX:0.83,rotation:1.3,x:54.9,y:226.4},15).to({regX:-68.7,regY:-1.7,scaleX:0.9,rotation:4.3,x:83,y:223.5},17).to({regX:-69,regY:-2,scaleX:1,rotation:0,x:71,y:224},14).wait(1));

	// Mapa_de_bits_9
	this.instance_65 = new lib.Interpolación2("synched",0);
	this.instance_65.parent = this;
	this.instance_65.setTransform(31.5,156,1,1,0,0,0,-17,-43);

	this.timeline.addTween(cjs.Tween.get(this.instance_65).to({regX:-16.8,scaleX:1.02,scaleY:0.89,rotation:30.5,x:38.6,y:156.1},14).to({rotation:19.7,x:39.5},15).to({regX:-16.7,regY:-42.8,scaleX:1.16,scaleY:0.96,rotation:1,x:39.2,y:155.9},17).to({regX:-17,regY:-43,scaleX:1,scaleY:1,rotation:0,x:31.5,y:156},14).wait(1));

	// Mapa_de_bits_7
	this.instance_66 = new lib.Interpolación3("synched",0);
	this.instance_66.parent = this;
	this.instance_66.setTransform(181.4,214,1,1,-14.4,0,0,-9.9,-14.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_66).to({regY:-14.8,rotation:-6.2,x:130.4,y:205.1},14).to({regX:-9.8,regY:-15,rotation:19.4,x:156.8,y:218.8},15).to({regY:-14.8,rotation:9.8,x:186.6,y:219.5},17).to({regX:-9.9,regY:-14.9,rotation:-14.5,x:181.4,y:214},14).wait(1));

	// Mapa_de_bits_6
	this.instance_67 = new lib.Interpolación4("synched",0);
	this.instance_67.parent = this;
	this.instance_67.setTransform(74.5,324.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_67).to({startPosition:0},14).to({startPosition:0},15).to({startPosition:0},17).to({startPosition:0},14).wait(1));

	// Mapa_de_bits_12
	this.instance_68 = new lib.Interpolación5("synched",0);
	this.instance_68.parent = this;
	this.instance_68.setTransform(118,161.5,1,1,0,0,0,-79,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance_68).to({rotation:-1.7,x:116.2,y:161.1},7).to({regX:-78.8,scaleY:1,rotation:0,skewX:9.8,skewY:5,x:118.1,y:164.9},13).to({regX:-79,scaleY:1,rotation:-1.7,skewX:0,skewY:0,x:116.2,y:161.1},16).to({regX:-78.9,regY:-13.9,rotation:0,skewX:-2.8,skewY:-1.8,x:115.1,y:161.3},10).to({regX:-79,regY:-14,scaleX:1,skewX:-3.6,x:114.2,y:161.2},7).to({scaleX:1,skewX:0,skewY:0,x:118,y:161.5},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8,0,282,649);


// stage content:
(lib.cocina = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3399").s().p("AgPCfQgFgHAAgJIACgKIAFgLIAHgJQAEgDAEAAQANAAAFAIQAFAIAAAMQAAANgIAHQgJAIgKAAQgIAAgFgHgAgHBJIgIgCQgEgBgBgFIgBgYQAAgVADgUQAEgUAIgUIAGgOIAHgOIAGgPIADgQQAAgGgEgFQgDgGgIAAQgGABgFAHIgIAQIgFAQQgEAHgEAAIgCAAIgagLIgFgFIgBgHQAAgaAOgTQAIgKAJgGQAJgHALgDIAIgBIAIgBQANAAALAEQAMAEAJAHQAJAIAFAMQAFAMAAAPQAAAQgDAKIgKAUIgMAUQgGALgEAPIgFAlIgCAlQgCAGgEACIgIACg");
	this.shape.setTransform(132.5,486.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF3399").s().p("AgOCfIgUgFQgKgEgHgGQgHgIgDgKIgGggIgDgoIgCgrIAAgpIACgtQABgXAHgTQAIgSAPgNQAHgFAKgDQALgDAMAAQAMAAAMADQAMAEAKAIQAKAIAGALQAHAKABAOIABAkIABAkIgBAsIgBAwIAAACIgDAmQgCARgHANQgHANgNAHQgNAHgXAAgAgLhrIgHAGIgCAJIgBAMIAAAFIAAA+IAAAtIABAjIABAeQAAAGAHAFQAHAEAGAAQAGAAAFgDQAGgEACgJIABgnIABgqIABgpIAAgnIAAgYQgBgLgEgEQgFgGgNAAQgHAAgEADg");
	this.shape_1.setTransform(117.9,486.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3399").s().p("AhICZQgIgCAAgHIAAiXIAAh8IACgRQACgHAIAAIAmAAQAGAAADADIAEAHIARA5IANAsIALAiIAJAaIABhAIgBgoIAAgpIACgOQACgHAHAAIAdABIAGACIACAFIAAArIAAArIAAAyIAAAvIgBAyIAAA1QgBAIgJAAIghAAIgHgDIgGgGIgDgIIgCgIIgyifIgBAqIAAAqIAABZIgBAKQgBACgGACIgGAAIgKABg");
	this.shape_2.setTransform(101.7,486.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF3399").s().p("AgZCiQgLgDgJgIQgKgIgFgMQgFgLAAgQQAAgQAEgKIAJgUIALgUQAHgKAEgQIAFgkIACglQACgHAEgBIAJgCIARAAIAIABQAEABAAAFIABAYQAAAqgPAnIgGAOIgHAPIgGAOIgDAQQAAAHADAFQAEAFAIAAQAGAAAFgIIAIgQIAGgQQADgHAEAAIADAAIAaALIAEAFIABAHQAAANgDAMQgEALgHAKQgIAJgIAGQgKAHgKADIgJABIgIABQgMAAgMgEgAgSh1QgGgIAAgMQAAgMAIgIQAJgIAKAAQAIAAAFAHQAFAHAAAJIgCAKIgFALIgHAJQgEADgEAAQgMAAgFgIg");
	this.shape_3.setTransform(84.9,490.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgJAKQgDgEAAgGQAAgFADgEQAEgEAFABQAGgBADAEQAFAEAAAFQAAAGgFAEQgDAEgGAAQgFAAgEgEg");
	this.shape_4.setTransform(255.3,437.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgZAzQgMgEgHgFIAIgQQAHAFAKAEQAKACAJAAIAMgBIAHgCQAGgEAAgHQAAgEgCgDQgDgDgFgBIgWgFQgRgEgGgDQgFgDgDgFQgDgGAAgHQAAgHAEgGQADgGAFgEQAGgEAIgDQAJgCAJAAQAKAAALACQAKADAHAEIgIAQQgHgEgIgDQgHgBgJgBIgKABIgHADQgHAFAAAGQAAAEADADQADADAFACIAWAFIAMADIALADQAFAEADAFQADAGAAAHQAAAHgEAGQgDAFgGAEQgGAFgIACQgJACgJAAQgSgBgHgCg");
	this.shape_5.setTransform(248,433.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgWA0QgHgCgFgFQgGgDgCgHQgDgFAAgHQAAgHACgFQACgGAFgEQAFgDAJgCQAIgDALAAIAeAAIAAgEQAAgGgCgEQgCgGgDgCQgDgEgGgCQgFgBgHgBQgJAAgJADQgJAEgGAFIgIgOQAIgHAMgDQALgEAMAAQALAAAIACQAJAEAFAEQAGAGADAIQADAIAAALIAAA/IgSAAIAAgOQgFAIgJADQgMAEgIAAQgIAAgIgCgAgNAHIgIADQgFAFAAAHQAAAEACADQABAEADACQADACAEABQAFACAFAAQAFAAAEgCQAGgBADgCQAFgDACgEQAEgDABgFIAAgOIgdAAIgLABg");
	this.shape_6.setTransform(236.7,433.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("Ag2BJIAAiQIASAAIAAARQADgFAFgDQAEgEAFgBQAEgDAGgBIAKgBQAMAAAKAEQAKAEAHAHQAHAHAEAKQAEAOAAAIQgBAQgDAFQgEAKgHAIQgHAGgKAFQgKADgMAAIgKgBIgKgDIgIgGQgEgDgEgEIAAA3gAgNg1QgHADgFAFQgFAFgCAGQgDAIAAAIQAAAIADAIQACAFAFAFQAFAFAHADQAGACAHAAQAHAAAHgCQAHgDAEgFQAFgFADgFQADgIgBgIQABgIgDgIQgDgGgFgFQgEgFgHgDQgHgCgHAAQgHAAgGACg");
	this.shape_7.setTransform(224.8,435);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgJBMIAAhpIATAAIAABpgAgIg1QgEgEAAgFQAAgFAEgEQAEgEAEAAQAGAAADAEQAEADAAAGQAAAFgEAEQgDADgGAAQgEAAgEgDg");
	this.shape_8.setTransform(214.8,430.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("Ag4BGIAAiLIA3AAQAMAAALAEQALADAIAGQAHAHAEAJQAFAJAAALQAAALgFAJQgEAIgHAHQgIAGgLADQgLADgMAAIgiAAIAAArgAgjAKIAhAAQAJAAAHgCQAIgCAFgEQAFgDACgGQADgGAAgHQAAgHgDgHQgCgFgFgFQgFgDgIgCQgHgDgJAAIghAAg");
	this.shape_9.setTransform(205.3,431.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgcA2IAAhpIATAAIAAASQACgFAEgEQADgEAFgCIALgDIANgBIAAASIgFAAQgHAAgGACQgHADgEAEQgDAFgDAGQgCAHAAAIIAAA1g");
	this.shape_10.setTransform(188.7,433);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgSAyQgLgDgHgIQgIgIgEgJQgCgHgCgPQAAgHAEgNQAEgKAHgIQAIgHAJgEQAKgEAKAAQAMAAAJAEQAKAEAHAHQAHAIAEAKQAEAOAAAGIgBAHIhVAAQABAGADAGQAEAGAFAEQAFAEAGACQAHACAHAAQAJAAAIgCQAIgEAFgGIALAMIgIAHIgKAGIgLADIgNABQgPgBgHgDgAAigHQAAgGgDgFQgDgGgEgEQgFgFgGgCQgGgCgHAAQgFAAgGACQgGADgFAEQgEADgDAGQgDAGgBAGIBDAAIAAAAg");
	this.shape_11.setTransform(177.9,433.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("ABFA2IAAg7QAAgHgCgGQgCgFgDgFQgDgEgGgBQgFgCgHAAQgHAAgFACQgHACgDAFQgFAEgCAHQgCAGAAAJIAAA2IgSAAIAAg7QAAgHgDgGQgBgFgDgFQgEgEgFgBQgFgCgHAAQgHAAgGACQgGACgEAFQgEAEgDAHQgCAGAAAJIAAA2IgTAAIAAhpIASAAIAAAQIAIgIQADgDAFgCQAFgDAFAAIALgBIAMABIAKADQAFADADAEQADADADAFIAHgIIAJgGQAGgDAGgBQAGgBAHAAQAJAAAJACQAHADAGAGQAGAFADAJQADAJAAAMIAAA8g");
	this.shape_12.setTransform(161.3,433);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgVAyQgKgDgIgIQgHgIgEgJIgDgLIgBgLQAAgHAEgOQAEgJAHgIQAIgHAKgEQAHgCAOgCQAIAAAOAEQAKAEAIAHQAHAIAEAJQAEAOAAAHIgBALIgDALQgEAJgHAIQgIAIgKADQgOAEgIAAQgOgBgHgDgAgNgiQgGADgFAFQgGAFgCAGQgDAIAAAHQAAAIADAIQACAGAGAFQAFAFAGADQAGACAHAAQAHAAAHgCQAHgDAEgFQAFgFADgGQACgIAAgIQAAgHgCgIQgDgGgFgFQgEgFgHgDQgHgCgHAAQgHAAgGACg");
	this.shape_13.setTransform(144.4,433.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgPAyQgKgDgIgIQgHgIgEgJIgEgLIgBgLQAAgHAFgOQAEgJAHgIQAIgHAKgEQAHgCAOgCQAIAAAGABIAMAFQAFADAFAEQAEAEADAGIgOAJQgFgHgIgFQgHgDgJAAQgHAAgGACQgHADgFAFQgFAFgCAGQgDAIAAAHQAAAIADAIQACAGAFAFQAFAFAHADQAGACAHAAQAJAAAHgDQAIgEAFgIIAOAKQgDAFgEAEQgFAFgFADIgMADQgGACgIAAQgOgBgHgDg");
	this.shape_14.setTransform(132.4,433.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AgWA0QgHgCgGgFQgEgDgDgHQgDgFAAgHQAAgHACgFQADgGAEgEQAFgDAJgCQAIgDAMAAIAdAAIAAgEQAAgGgCgEQgCgGgDgCQgDgEgGgCQgGgBgGgBQgJAAgJADQgJAEgGAFIgIgOQAIgHAMgDQALgEAMAAQALAAAIACQAJAEAFAEQAGAGADAIQADAIAAALIAAA/IgSAAIAAgOQgFAIgIADQgNAEgIAAQgIAAgIgCgAgNAHIgIADQgFAFAAAHQAAAEABADQACAEAEACQACACAFABQAEACAGAAQAEAAAFgCQAFgBAEgCQADgDADgEQADgDACgFIAAgOIgcAAIgMABg");
	this.shape_15.setTransform(114.9,433.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AgcA2IAAhpIATAAIAAASQADgFADgEQADgEAFgCIALgDIANgBIAAASIgFAAQgHAAgGACQgHADgEAEQgDAFgDAGQgCAHAAAIIAAA1g");
	this.shape_16.setTransform(105.8,433);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AgWA0QgHgCgGgFQgFgDgCgHQgDgFAAgHQAAgHACgFQADgGAEgEQAGgDAIgCQAIgDAMAAIAdAAIAAgEQAAgGgCgEQgCgGgDgCQgEgEgFgCQgFgBgHgBQgJAAgJADQgJAEgGAFIgIgOQAIgHAMgDQALgEAMAAQALAAAIACQAJAEAFAEQAGAGADAIQADAIAAALIAAA/IgSAAIAAgOQgFAIgIADQgNAEgIAAQgJAAgHgCgAgNAHIgIADQgFAFAAAHQAAAEABADQACAEADACQADACAFABQAEACAGAAQAEAAAFgCQAEgBAEgCQAEgDADgEQADgDACgFIAAgOIgdAAIgLABg");
	this.shape_17.setTransform(94.8,433.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("Ag2BJIAAiQIASAAIAAARQADgFAFgDQAEgEAFgBQAFgDAFgBIAKgBQAMAAAKAEQAJAEAIAHQAHAHAEAKQAEAOAAAIQgCAQgCAFQgEAKgHAIQgIAGgJAFQgKADgMAAIgJgBIgKgDIgJgGQgFgDgDgEIAAA3gAgOg1QgGADgFAFQgEAFgDAGQgDAIAAAIQAAAIADAIQADAFAEAFQAFAFAGADQAHACAHAAQAIAAAGgCQAHgDAFgFQAEgFADgFQACgIABgIQgBgIgCgIQgDgGgEgFQgFgFgHgDQgGgCgIAAQgHAAgHACg");
	this.shape_18.setTransform(82.9,435);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AgVAyQgKgDgHgIQgIgIgEgJIgDgLIgBgLQAAgHAEgOQAEgKAIgHQAHgHAKgEQAGgCAPgCQAIAAAOAEQAKAEAHAHQAIAHAEAKQAEAOAAAHIgBALIgDALQgEAJgIAIQgHAIgKADQgOAEgIAAQgPgBgGgDgAgNgiQgGADgGAFQgEAFgDAGQgCAIgBAHQABAIACAIQADAGAEAFQAGAFAGACQAGADAHAAQAIAAAGgDQAHgCAFgFQAEgFADgGQACgIAAgIQAAgHgCgIQgDgGgEgFQgFgFgHgDQgGgCgIAAQgHAAgGACg");
	this.shape_19.setTransform(229.1,408.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AAAA/QgFgCgEgFQgFgEgCgGQgCgGAAgIIAAg5IgSAAIAAgQIASAAIAAgXIASAAIAAAXIAeAAIAAAQIgeAAIAAA4QAAAJAEAFQAEAEAJAAQAIAAAGgFIAHAOQgFADgGADQgGABgHAAQgIAAgGgCg");
	this.shape_20.setTransform(218.6,407.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AAfA2IAAg7QAAgHgCgGQgCgFgEgFQgDgEgGgBQgEgCgIAAQgGAAgGACQgHACgEAFQgEAEgDAHQgCAGAAAJIAAA2IgUAAIAAhpIATAAIAAAQIAHgHQAEgEAFgCQAFgDAFAAIAMgBQAJAAAIACQAIADAGAGQAGAFADAJQADAJAAAMIAAA8g");
	this.shape_21.setTransform(207.8,408.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AgSAyQgLgDgHgIQgIgIgEgJQgCgHgCgPQAAgHAEgNQAEgKAHgIQAIgHAJgEQAKgEAKAAQAMAAAJAEQAKAEAHAHQAHAIAEAKQAEAOAAAGIgBAHIhVAAQABAGADAGQAEAGAFAEQAFAEAGACQAHACAHAAQAJAAAIgDQAIgDAFgGIALAMIgIAHIgKAGIgLADIgNABQgPgBgHgDgAAigHQAAgGgDgGQgDgFgEgEQgFgFgGgCQgGgCgHAAQgFAAgGACQgGADgFAEQgEADgDAGQgDAGgBAGIBDAAIAAAAg");
	this.shape_22.setTransform(194.8,408.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("ABFA2IAAg7QAAgHgCgGQgCgFgDgFQgEgEgFgBQgFgCgHAAQgGAAgGACQgHACgDAFQgEAEgDAHQgCAGAAAJIAAA2IgTAAIAAg7QAAgHgCgGQgBgFgDgFQgEgEgFgBQgFgCgHAAQgHAAgGACQgFACgFAFQgEAEgDAHQgBAGAAAJIAAA2IgUAAIAAhpIATAAIAAAQIAHgIQADgDAFgCQAEgDAGAAIALgBIAMABIAKADQAFADADAEQAEADACAFIAHgIIAKgGQAFgDAGgBQAGgBAHAAQAKAAAHACQAJADAFAGQAGAFADAJQADAJAAAMIAAA8g");
	this.shape_23.setTransform(178.2,408.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("AgVAyQgKgDgHgIQgIgIgEgJIgDgLIgBgLQAAgHAEgOQAEgKAIgHQAHgHAKgEQAHgCAOgCQAIAAAOAEQAKAEAIAHQAHAHAEAKQAEAOAAAHIgBALIgDALQgEAJgHAIQgIAIgKADQgOAEgIAAQgOgBgHgDgAgNgiQgGADgGAFQgFAFgCAGQgCAIgBAHQABAIACAIQACAGAFAFQAGAFAGACQAHADAGAAQAIAAAGgDQAHgCAFgFQAEgFADgGQADgIgBgIQABgHgDgIQgDgGgEgFQgFgFgHgDQgGgCgIAAQgGAAgHACg");
	this.shape_24.setTransform(161.3,408.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("ABFA2IAAg7QAAgHgCgGQgBgFgEgFQgDgEgGgBQgFgCgGAAQgHAAgHACQgFACgEAFQgEAEgDAHQgCAGAAAJIAAA2IgSAAIAAg7QAAgHgCgGQgCgFgEgFQgDgEgFgBQgFgCgHAAQgHAAgGACQgGACgEAFQgEAEgCAHQgDAGAAAJIAAA2IgTAAIAAhpIASAAIAAAQIAHgIQAEgDAFgCQAFgDAFAAIALgBIAMABIAKADQAFADAEAEQADADACAFIAHgIIAJgGQAGgDAGgBQAGgBAHAAQAJAAAJACQAHADAGAGQAGAFADAJQADAJAAAMIAAA8g");
	this.shape_25.setTransform(144.4,408.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AAfA2IAAg7QAAgHgCgGQgBgFgFgFQgDgEgGgBQgEgCgIAAQgGAAgHACQgGACgEAFQgFAEgCAHQgCAGAAAJIAAA2IgUAAIAAhpIATAAIAAAQIAHgHQAEgEAFgCQAFgDAFAAIALgBQAKAAAIACQAIADAGAGQAGAFADAJQAEAJgBAMIAAA8g");
	this.shape_26.setTransform(121.7,408.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333333").s().p("AgSAyQgLgDgHgIQgIgIgEgJQgCgHgCgPQAAgHAEgNQAEgKAHgIQAIgHAJgEQAKgEAKAAQAMAAAJAEQAKAEAHAHQAHAIAEAKQAEAOAAAGIgBAHIhVAAQABAGADAGQAEAGAFAEQAFAEAGACQAHACAHAAQAJAAAIgDQAIgDAFgGIALAMIgIAHIgKAGIgLADIgNABQgPgBgHgDgAAigHQAAgGgDgGQgDgFgEgEQgFgFgGgCQgGgCgHAAQgFAAgGACQgGADgFAEQgEADgDAGQgDAGgBAGIBDAAIAAAAg");
	this.shape_27.setTransform(108.8,408.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AgWAzQgIgDgHgGQgFgFgEgJQgDgJAAgLIAAg8IATAAIAAA5QAAAIACAGQACAGAEAEQAEADAFADQAFACAHAAQAGgBAHgCQAFgCAFgEQAFgFACgGQACgIAAgHIAAg2IATAAIAABpIgSAAIAAgQIgHAHIgJAFQgEACgGACIgJABQgKAAgJgDg");
	this.shape_28.setTransform(95.9,408.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("AgJBKQgFgBgFgDQgFgCgEgDQgFgEgDgEIAAARIgSAAIAAiUIATAAIAAA7IAIgIIAJgFQAGgDANgBQAMAAAKAEQAJADAIAIQAHAHAEAKQAEANAAAIQgCAPgCAHQgEAKgHAHQgIAHgJAEQgKAEgMAAgAgOgNQgGADgFAFQgEAFgDAFQgDAHAAAJQAAAIADAHQADAHAEAFQAFAFAGACQAHADAHAAQAIAAAGgDQAHgCAFgFQAEgFADgHQACgHABgIQgBgJgCgHQgDgFgEgFQgFgFgHgDQgGgCgIAAQgHAAgHACg");
	this.shape_29.setTransform(82.9,406.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("AAfA1IAAg5QAAgIgCgGQgBgGgEgEQgEgDgFgDQgGgCgHAAQgGABgGACQgGACgFAEQgEAFgDAGQgCAIAAAIIAAA1IgTAAIAAhpIASAAIAAAQIAHgHQAEgDAFgCQAEgDAHgBIALgBQAJAAAIAEQAIACAGAGQAGAGADAIQADAJABALIAAA8g");
	this.shape_30.setTransform(211.7,386.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("AgWAzQgIgDgHgGQgFgFgEgJQgDgJAAgMIAAg8IATAAIAAA6QAAAIACAGQACAGAEAEQAEAEAFABQAFACAHAAQAGAAAHgCQAFgCAFgFQAFgEACgHQACgGAAgIIAAg3IATAAIAABpIgSAAIAAgQIgHAIIgJAFQgEADgGAAIgJABQgKAAgJgCg");
	this.shape_31.setTransform(198,386.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#333333").s().p("AgZAyQgMgDgHgFIAIgPQAHAEAKAEQAKACAJAAIAMAAIAHgDQAGgEAAgHQAAgEgCgDQgDgCgFgCIgWgEQgRgFgGgDQgFgDgDgFQgDgGAAgHQAAgHAEgGQADgGAFgEQAGgFAIgCQAJgCAJAAQAKAAALACQAKADAHAFIgIAPQgHgEgIgDQgHgBgJAAIgKABIgHACQgHAEAAAHQAAAEADADQADADAFACIAWAFIAMADIALADQAFAEADAFQADAFAAAIQAAAHgEAGQgDAGgGAEQgGAEgIACQgJACgJAAQgSgBgHgDg");
	this.shape_32.setTransform(180.9,386.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("AgSAyQgLgDgHgIQgIgIgEgJQgCgHgCgPQAAgHAEgOQAEgJAHgIQAIgHAJgEQAKgEAKAAQAMAAAJAEQAKAEAHAHQAHAIAEAJQAEAOAAAIIgBAGIhVAAQABAGADAGQAEAGAFAEQAFAEAGACQAHACAHAAQAJAAAIgCQAIgEAFgGIALAMIgIAIIgKAFIgLADIgNABQgPgBgHgDgAAigHQAAgGgDgFQgDgGgEgEQgFgEgGgCQgGgDgHAAQgFAAgGADQgGABgFAFQgEAEgDAFQgDAGgBAGIBDAAIAAAAg");
	this.shape_33.setTransform(169.9,386.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#333333").s().p("AgSAyQgLgDgHgIQgIgIgEgJQgCgHgCgPQAAgHAEgOQAEgJAHgIQAIgHAJgEQAKgEAKAAQAMAAAJAEQAKAEAHAHQAHAIAEAJQAEAOAAAIIgBAGIhVAAQABAGADAGQAEAGAFAEQAFAEAGACQAHACAHAAQAJAAAIgCQAIgEAFgGIALAMIgIAIIgKAFIgLADIgNABQgPgBgHgDgAAigHQAAgGgDgFQgDgGgEgEQgFgEgGgCQgGgDgHAAQgFAAgGADQgGABgFAFQgEAEgDAFQgDAGgBAGIBDAAIAAAAg");
	this.shape_34.setTransform(152.3,386.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#333333").s().p("AgcA1IAAhpIATAAIAAASQADgFADgDQADgDAFgCIALgFIANgBIAAATIgFAAQgHAAgGADQgHACgEAEQgDAEgDAIQgCAGAAAHIAAA1g");
	this.shape_35.setTransform(142.7,386.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#333333").s().p("Ag2BJIAAiQIATAAIAAARQADgEAEgEQAEgEAFgCQAEgCAGgBIAKgBQAMAAAKAEQAKADAHAIQAHAHAEAKQAEAOAAAIQgCAPgCAGQgEAKgHAHQgHAIgKADQgKAEgMAAIgJgBIgKgDIgJgFQgEgDgDgFIAAA3gAgOg1QgGADgFAFQgEAFgDAGQgDAIAAAIQAAAIADAIQADAFAEAFQAFAFAGADQAHACAHAAQAHAAAHgCQAGgDAGgFQAEgFADgFQACgIABgIQgBgIgCgIQgDgGgEgFQgGgFgGgDQgHgCgHAAQgHAAgHACg");
	this.shape_36.setTransform(131.7,388.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#333333").s().p("ABFA1IAAg5QAAgIgCgGQgBgGgEgEQgDgDgGgDQgFgCgGAAQgHABgHACQgGACgEAEQgDAFgDAGQgCAIAAAIIAAA1IgTAAIAAg5QAAgIgBgGQgCgGgEgEQgDgDgFgDQgFgCgHAAQgHABgGACQgFACgFAEQgEAFgCAGQgCAIgBAIIAAA1IgTAAIAAhpIASAAIAAAQIAHgHQAEgDAFgCQAEgDAGgBIALgBIAMABIAKAFQAFACAEAEQADADACAFIAHgIIAJgGQAGgDAGgBQAGgCAHAAQAJAAAJAEQAIACAFAGQAGAGADAIQADAJAAALIAAA8g");
	this.shape_37.setTransform(113.9,386.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#333333").s().p("AgSAyQgLgDgHgIQgIgIgEgJQgCgHgCgPQAAgHAEgOQAEgJAHgIQAIgHAJgEQAKgEAKAAQAMAAAJAEQAKAEAHAHQAHAIAEAJQAEAOAAAIIgBAGIhVAAQABAGADAGQAEAGAFAEQAFAEAGACQAHACAHAAQAJAAAIgCQAIgEAFgGIALAMIgIAIIgKAFIgLADIgNABQgPgBgHgDgAAigHQAAgGgDgFQgDgGgEgEQgFgEgGgCQgGgDgHAAQgFAAgGADQgGABgFAFQgEAEgDAFQgDAGgBAGIBDAAIAAAAg");
	this.shape_38.setTransform(97.2,386.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#333333").s().p("AgJBMIAAhpIASAAIAABpgAgJg1QgDgEAAgFQAAgFADgEQAEgEAFAAQAFAAAEAEQAEADAAAGQAAAFgEAEQgEADgFAAQgFAAgEgDg");
	this.shape_39.setTransform(88.4,384.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#333333").s().p("AgZAyQgMgDgHgFIAIgPQAHAEAKAEQAKACAJAAIAMAAIAHgDQAGgEAAgHQAAgEgCgDQgDgCgFgCIgWgEQgRgFgGgDQgFgDgDgFQgDgGAAgHQAAgHAEgGQADgGAFgEQAGgFAIgCQAJgCAJAAQAKAAALACQAKADAHAFIgIAPQgHgEgIgDQgHgBgJAAIgKABIgHACQgHAEAAAHQAAAEADADQADADAFACIAWAFIAMADIALADQAFAEADAFQADAFAAAIQAAAHgEAGQgDAGgGAEQgGAEgIACQgJACgJAAQgSgBgHgDg");
	this.shape_40.setTransform(80.5,386.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#333333").s().p("AgWBHQgJgEgIgHQgHgHgEgKQgCgHgCgPQAAgIAEgNQAEgKAHgHQAIgIAJgDQAKgEAMAAIAKABIAKADIAIAFIAIAIIAAg7IATAAIAACUIgSAAIAAgRIgIAIQgEADgFACQgFADgFABIgKABQgMAAgKgEgAgNgNQgGADgFAFQgFAFgDAFQgCAHAAAJQAAAIACAHQADAHAFAFQAFAFAGACQAHADAGAAQAIAAAGgDQAHgCAFgFQAFgFACgHQADgHAAgIQAAgJgDgHQgCgFgFgFQgFgFgHgDQgGgCgIAAQgGAAgHACg");
	this.shape_41.setTransform(183.2,362);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#333333").s().p("AgWA0QgHgCgFgEQgGgFgCgGQgDgFAAgHQAAgGACgGQACgGAFgEQAFgDAJgCQAIgDALAAIAeAAIAAgEQAAgGgCgFQgCgEgDgEQgDgDgGgBQgFgDgHAAQgJAAgJAEQgJADgGAFIgIgOQAIgHAMgDQALgEAMAAQALAAAIADQAJACAFAGQAGAFADAIQADAIAAALIAAA/IgSAAIAAgOQgFAHgJAEQgMAEgIAAQgIAAgIgCgAgNAHIgIAEQgFAEAAAHQAAAEACAEQABACADACQADADAEABQAFABAFABQAFgBAEgBQAGgBADgDQAFgCACgDQAEgEABgEIAAgPIgdAAIgLABg");
	this.shape_42.setTransform(170.6,364.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#333333").s().p("AgWBHQgJgEgIgHQgHgHgEgKQgCgHgCgPQAAgIAEgNQAEgKAHgHQAIgIAJgDQAKgEAMAAIAKABIAKADIAIAFIAIAIIAAg7IATAAIAACUIgSAAIAAgRIgIAIQgEADgFACQgFADgFABIgKABQgMAAgKgEgAgNgNQgGADgFAFQgFAFgDAFQgCAHAAAJQAAAIACAHQADAHAFAFQAFAFAGACQAHADAGAAQAIAAAGgDQAHgCAFgFQAFgFACgHQADgHAAgIQAAgJgDgHQgCgFgFgFQgFgFgHgDQgGgCgIAAQgGAAgHACg");
	this.shape_43.setTransform(157.7,362);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#333333").s().p("AgJBMIAAhpIATAAIAABpgAgIg1QgEgEAAgFQAAgFAEgEQAEgEAEAAQAGAAADAEQAEADAAAGQAAAFgEAEQgDADgGAAQgEAAgEgDg");
	this.shape_44.setTransform(148.6,361.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#333333").s().p("AgJBKIAAiTIATAAIAACTg");
	this.shape_45.setTransform(143,361.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#333333").s().p("AgWA0QgHgCgGgEQgFgFgCgGQgDgFAAgHQAAgGACgGQADgGAEgEQAGgDAIgCQAIgDAMAAIAdAAIAAgEQAAgGgCgFQgCgEgDgEQgEgDgFgBQgFgDgHAAQgJAAgJAEQgJADgGAFIgIgOQAIgHAMgDQALgEAMAAQALAAAIADQAJACAFAGQAGAFADAIQADAIAAALIAAA/IgSAAIAAgOQgFAHgIAEQgNAEgIAAQgJAAgHgCgAgNAHIgIAEQgFAEAAAHQAAAEABAEQACACADACQADADAFABQAEABAGABQAEgBAFgBQAEgBAEgDQAEgCADgDQADgEACgEIAAgPIgdAAIgLABg");
	this.shape_46.setTransform(133.9,364.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#333333").s().p("AgSAyQgLgEgHgHQgIgHgEgKQgCgHgCgPQAAgHAEgOQAEgKAHgHQAIgHAJgEQAKgEAKAAQAMAAAJAEQAKAEAHAHQAHAHAEAKQAEAOAAAIIgBAFIhVAAQABAIADAFQAEAGAFAEQAFAEAGACQAHADAHAAQAJAAAIgEQAIgDAFgHIALANIgIAHIgKAGIgLADIgNABQgPgBgHgDgAAigGQAAgHgDgGQgDgFgEgEQgFgFgGgBQgGgDgHAAQgFAAgGADQgGACgFADQgEAFgDAFQgDAGgBAHIBDAAIAAAAg");
	this.shape_47.setTransform(122.2,364.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#333333").s().p("AgbA2IAAhqIASAAIAAASQADgEAEgEQACgEAFgBIALgFIAMgBIAAATIgDAAQgIAAgHACQgGACgEAFQgEAFgCAGQgCAHAAAHIAAA2g");
	this.shape_48.setTransform(112.6,364);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#333333").s().p("AAfA2IAAg7QAAgHgCgGQgBgFgEgEQgEgFgFgCQgGgBgHAAQgGgBgGADQgHACgEAFQgEAEgDAGQgCAIAAAIIAAA2IgUAAIAAhqIATAAIAAARIAHgIQAEgDAFgCQAFgCAFgCIAMgBQAJABAIACQAIADAGAGQAGAGADAIQAEAJAAALIAAA9g");
	this.shape_49.setTransform(95.8,364);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#333333").s().p("AgyBGIAAiLIBiAAIAAASIhOAAIAAArIBFAAIAAAPIhFAAIAAAtIBRAAIAAASg");
	this.shape_50.setTransform(82.7,362.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF3399").s().p("AhZDwIgDgQIgJhPIgGhHIgIhOIgGhCQgEgzAEgjQAEgkAYgaQAPgRATgFIApgHQAagDASAMQATALAMATQAMATAGAYIAJAwIAWCrIAMBjIAGA4QABAJgKACIgVAEIgNABIgUgCQgLgCgCgGIgRiAIgEgLQgBgGgGgCIgmADIgGABIgEAFIABAMIAIBEIAIBDIABANQgDAGgGABIg5AEIgCABQgJAAgCgJgAgcitQgMABgGAIQgHAHABANIALCEIACANQACADACABIAFACIAngDIAIgEIADgIIAAgIIAAgIIgHhEIgIgwQgFgSgHgIQgHgHgKAAIgEAAg");
	this.shape_51.setTransform(292.1,158.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FF3399").s().p("AhSECIgDgKIgrnUIgBgHIABgLIADgLQACgEAFAAIB3gKQAYgCAQAHQAQAIALAOQAKAOAGAUIAHArQACAWgDAYIgKAuIgPAnIgNAbIAAABIABAAIAAABIAQARIAVAfQALATAJAbQAJAbAEAjIACAVIAEAgIABAaQgBALgGABIg9AFIgEgCIgDgEIgGg9IgEgoIgGgaIgEgNQgFgUgLgIQgLgJgQABIgFABIgEABQgKADAAAJIAAASIAOCEIAAAPQAAAJgHABIg3AEIgBAAQgFAAgBgGgAghi4QgKABgCAGIgCARIALB5IACAJQACAEAGgBIABAAIADgBQAUgWAIgXQAJgWgDghIgDgaIgHgSQgEgIgHgDQgHgBgJAAIgIAAg");
	this.shape_52.setTransform(265,161.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FF3399").s().p("AgSD2QgRgDgOgJQgagPgPgcQgQgcgHgjIgKhEQgGhQABhWQABgWAFgYQAGgXALgVQAMgTATgPQATgOAdgCQAWgCASADQARADAPAHQAcAQAPAdQAQAcAIAlIAKBPIADAoIADAxIgBA2IgFAyQgFAXgHATQgIATgNAKQgSAOgPAHQgPAGgWACIgRABQgKAAgLgCgAgGikQgSABgLAPQgLAOgEAUQgDAVAAAaIACAxIADAdIACAaIAGAtIAJAoQAGASAJAKQAIALAMgBQATgCALgMQAMgLAFgTQAFgSAAgXIgBgxIgGg/IgGg2IgJgpQgGgRgKgIQgIgIgLAAIgFABg");
	this.shape_53.setTransform(236.7,162.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FF3399").s().p("AhaD5IgEgGIgBgKIgCgQIgCgQIgBgLIgFg5IgMiJIgIhhIgIhzQgBgOAHgEIAUgFQAegCAKADQALADACARIAEBBIAEBCIAFAmIAEApQACAGAEABIAKABIAIgCIAOgDIAPgDIAIgDIAGgGIgPjXQAAgGAFgFIAKgEIArgEQAMgBAFAJIAFAWIAnGtIAAADIAAAPQgBAIgIAAIg0AFQgIAAgDgFIgEgNIgMiOIgEgJIgHgGIgWACIgOACIgOAEIgLAGQgDAEAAAHIAFAvIAFAwIACAaIABAZQAAALgGABIg8AFg");
	this.shape_54.setTransform(207.9,165.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FF3399").s().p("AhZDwIgDgQIgJhPIgGhHIgIhOIgGhCQgEgzAEgjQAEgkAYgaQAPgRATgFIApgHQAagDASAMQATALAMATQAMATAGAYIAJAwIAWCrIAMBjIAGA4QABAJgKACIgVAEIgNABIgUgCQgLgCgCgGIgRiAIgEgLQgBgGgGgCIgmADIgGABIgEAFIABAMIAIBEIAIBDIABANQgDAGgGABIg5AEIgCABQgJAAgCgJgAgcitQgMABgGAIQgHAHABANIALCEIACANQACADACABIAFACIAngDIAIgEIADgIIAAgIIAAgIIgHhEIgIgwQgFgSgHgIQgHgHgKAAIgEAAg");
	this.shape_55.setTransform(159.5,169.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FF3399").s().p("AhXD0IgpnaQgBgIAGgEIAMgFIAOgBIA3AAQAZACAUAFQAoANAaAeQANAQAKAUQAKAUAHAZQANAyAGBGQAEAqgFAqQgFApgQAhQgQAhgdAXQgcAXgsAFIgEABIgPABIgWAAIgcACgAgoixQgGABgCADIgBALIANCNIAOCXIADAgQACAEAGAAIALAAQAMgBALgRQALgQAHgaQAHgaACgfQACgfgCgfIgHgsQgFgdgLgbQgLgbgQgUQgPgRgVAAIgEAAg");
	this.shape_56.setTransform(130.8,172.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FF3399").s().p("AgSD2QgRgEgOgHQgagRgPgbQgQgcgHgjIgKhFQgGhOABhXQABgWAFgYQAGgYALgTQAMgVATgOQATgOAdgCQAWgCASADQARADAPAHQAcAQAPAcQAQAdAIAmIAKBNIADApIADAxIgBA1IgFAzQgFAYgHASQgIATgNAKQgSAOgPAGQgPAIgWABIgRABQgKAAgLgCgAgGilQgSACgLAPQgLANgEAWQgDAVAAAZIACAxIADAeIACAaIAGAsIAJAoQAGARAJALQAIALAMgBQATgCALgLQAMgMAFgTQAFgSAAgXIgBgxIgGhAIgGg2IgJgoQgGgRgKgIQgIgIgLAAIgFAAg");
	this.shape_57.setTransform(102.7,173.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FF3399").s().p("AAPD7IgEgHIgnmVQAAgGgGgBIgJgBIgPABIgQABQgPABgEgDQgEgGgBgKIgBgNIgBgHIgBgIIABgQQACgGAGgEIAOgBIAqgDIA0gFIArgDIAegBIAFADIADAEIAFA4QAAAGgFACIgKADIgGABIgKABIgJACIgHAAQgHAEAAAJIAhGCQABAQgFAFQgEADgNACIglADg");
	this.shape_58.setTransform(73.7,175.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FF3399").s().p("AhZDwIgDgQIgJhPIgGhHIgIhOIgGhCQgEgzAEgjQAEgkAYgaQAPgRATgFIApgHQAagDASAMQATALAMATQAMATAGAYIAJAwIAWCrIAMBjIAGA4QABAJgKACIgVAEIgNABIgUgCQgLgCgCgGIgRiAIgEgLQgBgGgGgCIgmADIgGABIgEAFIABAMIAIBEIAIBDIABANQgDAGgGABIg5AEIgCABQgJAAgCgJgAgcitQgMABgGAIQgHAHABANIALCEIACANQACADACABIAFACIAngDIAIgEIADgIIAAgIIAAgIIgHhEIgIgwQgFgSgHgIQgHgHgKAAIgEAAg");
	this.shape_59.setTransform(250.1,108);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FF3399").s().p("AgcD5QgRgFgOgOQgOgOgJgXQgJgXgDgjQgBgMAFgDIAagEIANgBIAMAAIALADQAGAEADAKIAFAWIAIATQAFAHAMgBQAYgCAJgQQAJgPgBgWQgCgPgFgNIgPgbIgTgXIgWgTQgngagXgVQgWgWgMgUQgLgTgEgQIgEgfQgCgYAGgWQAIgWAOgQQAOgRAVgKQAVgKAagCQAagDATAHQATAIANAPQAMAOAHAWQAGAVACAYQAAANgEAEIgIAEIgqAEQgNAAgEgJIgFgUIgEgVQgDgJgMABIgJABQgWABgIANQgIAMABAPIABAIIACAHQAFARAPAOIAhAeIAoAgQAVAQASATQATATANAYQAMAZADAeQACAdgFAaQgGAZgPATQgPAUgXALQgYANggACIgJABQgPAAgNgEg");
	this.shape_60.setTransform(200.8,112.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FF3399").s().p("AhZDwIgDgQIgJhPIgGhHIgIhOIgGhCQgEgzAEgjQAEgkAYgaQAPgRATgFIApgHQAagDASAMQATALAMATQAMATAGAYIAJAwIAWCrIAMBjIAGA4QABAJgKACIgVAEIgNABIgUgCQgLgCgCgGIgRiAIgEgLQgBgGgGgCIgmADIgGABIgEAFIABAMIAIBEIAIBDIABANQgDAGgGABIg5AEIgCABQgJAAgCgJgAgcitQgMABgGAIQgHAHABANIALCEIACANQACADACABIAFACIAngDIAIgEIADgIIAAgIIAAgIIgHhEIgIgwQgFgSgHgIQgHgHgKAAIgEAAg");
	this.shape_61.setTransform(174,114.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FF3399").s().p("Ag2DsIg4nLIACgIIAIgIIAYgHIAogFIASgBIAUgBQAeABAUAIQASAIAMAOQALAPAGAWIAJA2IACAWQACAhgBAbQgDAbgLAUQgLASgXANQgWANgoAGIACASIAJBKIALBlIgFAGIgGADIgxAEIgBAAQgNAAgDgSgAgGi5IgRAFIAQCQIABAGIAJABQAXgCAJgVQAKgXgEgqIgEgbIgJgWQgGgJgJgGQgHgEgIAAIgEAAg");
	this.shape_62.setTransform(146.3,117);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FF3399").s().p("AgTDmIgEgKIgJh7IgGhrIgHhnIgIhnQgBgHAFgEIALgEIArgEQANgBAEAIIAFAVIABAKIAAAJIAEAtIAEBGIAFBTIAFBUIAEBHIADAsIABADIAAAMQgBAHgEAAIg9AFIgBAAQgEAAgCgGg");
	this.shape_63.setTransform(128.2,118.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FF3399").s().p("Ag2DsIg4nLIACgIIAIgIIAYgHIAogFIASgBIAUgBQAeABAUAIQASAIAMAOQALAPAGAWIAJA2IACAWQACAhgBAbQgDAbgLAUQgLASgXANQgWANgoAGIACASIAJBKIALBlIgFAGIgGADIgxAEIgBAAQgNAAgDgSgAgGi5IgRAFIAQCQIABAGIAJABQAXgCAJgVQAKgXgEgqIgEgbIgJgWQgGgJgJgGQgHgEgIAAIgEAAg");
	this.shape_64.setTransform(107.8,120.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#333333").s().p("AgGAIQgEgDAAgFQAAgDAEgEQADgDADAAQAEAAAEADQADAEAAADQAAAFgDADQgEADgEAAQgDAAgDgDg");
	this.shape_65.setTransform(309.5,322);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#333333").s().p("AgUAxQgKgEgHgGQgIgIgDgJQgDgHgCgPQABgHAEgOQADgKAIgHQAHgGAKgFQAKgDAKAAQAMAAAJADQALAFAGAGQAIAHAEAKQADAOAAAHQgBAPgCAHQgEAJgIAIQgGAGgLAEQgJAEgMAAQgKAAgKgEgAgOglQgIACgEAGQgGAGgDAHQgDAIAAAIQAAAJADAHQADAIAGAGQAEAFAIADQAHADAHAAQAJAAAHgDQAHgDAFgFQAFgGADgIQADgHAAgJQAAgIgDgIQgDgHgFgGQgFgGgHgCQgHgDgJAAQgHAAgHADg");
	this.shape_66.setTransform(301.1,317.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#333333").s().p("AgVBHQgJgEgIgHQgGgHgEgKQgDgHgBgPQAAgIAEgNQAEgJAGgHQAIgIAJgDQAKgEALAAQAFAAAGABQAGABAFADQAFADAEAEQAFAEADAFIAAhAIAOAAIAACUIgNAAIAAgVQgDAFgFAEQgEAEgGADIgKAEQgHACgFAAQgLAAgKgEgAgOgQQgHADgGAFQgFAGgDAGQgDAIAAAJQAAAJADAIQADAHAFAGQAGAFAHADQAHADAIAAQAIAAAGgDQAIgDAFgFQAGgGADgHQADgIAAgJQAAgJgDgIQgDgGgGgGQgFgFgIgDQgGgDgIAAQgIAAgHADg");
	this.shape_67.setTransform(287.6,315.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#333333").s().p("AgVAzQgGgCgFgEQgFgEgEgGQgCgGAAgGQAAgHACgEQADgGAEgEQAFgDAHgDQAIgCALAAIAhAAIAAgGQAAgHgCgFQgCgGgEgDQgDgEgGgCQgFgBgIAAQgJAAgJADQgJAEgHAFIgGgLQAIgGALgEQALgDAMAAQAKAAAIACQAHADAGAFQAFAFADAHQADAIAAAKIAABAIgNAAIAAgQIgHAHIgIAGIgKADIgKABQgKAAgHgCgAgPAFQgFACgDACQgDACgCAEQgBAEAAADQAAAFACAEQABADAEADQAEACAFACQAEACAGgBQAGABAFgCIAJgEQAEgDADgEQAEgEACgFIAAgRIggAAQgHgBgGACg");
	this.shape_68.setTransform(275.1,317.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#333333").s().p("AgOAxQgKgEgHgGQgIgIgDgJQgDgHgCgPQAAgHAFgOQADgKAIgHQAHgGAKgFQAKgDALAAQAGAAAGABQAGABAGACQAFAEAEAEQAFADADAGIgLAHQgFgIgIgEQgIgEgJAAQgIAAgHADQgIACgFAGQgFAGgDAHQgDAIAAAIQAAAJADAIQADAHAFAGQAFAFAIADQAHADAIAAQAJAAAIgEQAIgDAFgJIALAHQgDAGgFADQgEAEgFADQgGADgGABQgGABgGAAQgLAAgKgEg");
	this.shape_69.setTransform(264,317.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#333333").s().p("AgUAxQgKgEgHgGQgIgIgDgJQgDgHgCgPQABgHAEgOQADgKAIgHQAHgGAKgFQAKgDAKAAQAMAAAJADQALAFAGAGQAIAHAEAKQADAOAAAHQgBAPgCAHQgEAJgIAIQgGAGgLAEQgJAEgMAAQgKAAgKgEgAgOglQgIACgEAGQgGAGgDAHQgDAIAAAIQAAAJADAHQADAIAGAGQAEAFAIADQAHADAHAAQAJAAAHgDQAHgDAFgFQAFgGADgIQADgHAAgJQAAgIgDgIQgDgHgFgGQgFgGgHgCQgHgDgJAAQgHAAgHADg");
	this.shape_70.setTransform(252.1,317.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#333333").s().p("AgLBJIgLgEQgFgDgEgEQgFgEgDgFIAAAVIgNAAIAAiUIAOAAIAABAIAHgJQAFgEAFgDQAFgDAGgBQAFgBAGAAQALAAAKAEQAJADAHAIQAHAHAEAJQAEANAAAIQgBAPgDAHQgEAKgHAHQgHAHgJAEQgKAEgLAAQgGAAgGgCgAgPgQQgHADgFAFQgGAGgCAGQgDAIAAAJQAAAJADAIQACAHAGAGQAFAFAHADQAHADAIAAQAIAAAHgDQAHgDAGgFQAFgGADgHQADgIAAgJQAAgJgDgIQgDgGgFgGQgGgFgHgDQgHgDgIAAQgIAAgHADg");
	this.shape_71.setTransform(239.6,315.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#333333").s().p("AgVAzQgHgCgFgEQgFgEgDgGQgCgGAAgGQAAgHACgEQADgGAEgEQAFgDAHgDQAJgCAKAAIAhAAIAAgGQAAgHgCgFQgBgGgFgDQgEgEgFgCQgGgBgHAAQgJAAgJADQgJAEgHAFIgGgLQAIgGALgEQALgDALAAQALAAAHACQAJADAFAFQAFAFADAHQADAIAAAKIAABAIgOAAIAAgQIgFAHIgIAGIgKADIgMABQgIAAgIgCgAgPAFQgFACgDACQgDACgBAEQgCAEAAADQAAAFACAEQACADADADQAEACAEACQAGACAFgBQAGABAFgCIAJgEQAFgDADgEQADgEACgFIAAgRIggAAQgIgBgFACg");
	this.shape_72.setTransform(220.8,317.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#333333").s().p("AgVBHQgJgEgIgHQgHgHgEgKQgCgHgBgPQAAgIADgNQAEgJAHgHQAIgIAJgDQAKgEALAAQAFAAAGABQAGABAFADQAFADAEAEQAFAEADAFIAAhAIAPAAIAACUIgPAAIAAgVQgCAFgFAEQgEAEgGADIgKAEQgHACgFAAQgLAAgKgEgAgOgQQgHADgFAFQgGAGgDAGQgDAIAAAJQAAAJADAIQADAHAGAGQAFAFAHADQAHADAIAAQAHAAAHgDQAIgDAFgFQAFgGAEgHQACgIAAgJQAAgJgCgIQgEgGgFgGQgFgFgIgDQgHgDgHAAQgIAAgHADg");
	this.shape_73.setTransform(208,315.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#333333").s().p("AgVAzQgHgCgFgEQgEgEgEgGQgCgGAAgGQAAgHACgEQADgGAEgEQAFgDAHgDQAJgCAKAAIAhAAIAAgGQAAgHgCgFQgBgGgFgDQgEgEgFgCQgGgBgHAAQgJAAgJADQgJAEgHAFIgGgLQAIgGALgEQALgDAMAAQAKAAAIACQAHADAGAFQAFAFADAHQADAIAAAKIAABAIgOAAIAAgQIgGAHIgHAGIgLADIgLABQgJAAgHgCgAgPAFQgFACgDACQgDACgBAEQgCAEAAADQAAAFACAEQABADAEADQAEACAEACQAFACAGgBQAGABAFgCIAJgEQAEgDADgEQAEgEACgFIAAgRIggAAQgIgBgFACg");
	this.shape_74.setTransform(195.5,317.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#333333").s().p("AgOAxQgKgEgHgGQgIgIgDgJQgDgHgCgPQAAgHAFgOQADgKAIgHQAHgGAKgFQAKgDALAAQAGAAAGABQAGABAGACQAFAEAEAEQAFADADAGIgLAHQgFgIgIgEQgIgEgJAAQgIAAgHADQgIACgFAGQgFAGgDAHQgDAIAAAIQAAAJADAIQADAHAFAGQAFAFAIADQAHADAIAAQAJAAAIgEQAIgDAFgJIALAHQgDAGgFADQgEAEgFADQgGADgGABQgGABgGAAQgLAAgKgEg");
	this.shape_75.setTransform(184.4,317.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#333333").s().p("AAiA1IAAg7QAAgIgCgGQgCgGgEgFQgEgEgGgCQgGgCgHAAQgIAAgHADQgHACgEAFQgFAFgDAHQgCAHAAAJIAAA2IgOAAIAAhoIANAAIAAATQADgFAEgEIAJgFQAFgEAGgBQAGgBAGAAQAKAAAIADQAIACAFAGQAGAGADAIQADAJAAALIAAA8g");
	this.shape_76.setTransform(166.9,317.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#333333").s().p("AgUAxQgKgEgHgGQgHgIgEgJQgDgHgCgPQAAgHAFgOQAEgKAHgHQAHgGAKgFQAKgDAKAAQALAAALADQAKAFAHAGQAHAHAEAKQADAOAAAHQgBAPgCAHQgEAJgHAIQgHAGgKAEQgLAEgLAAQgKAAgKgEgAgOglQgHACgGAGQgFAGgDAHQgDAIAAAIQAAAJADAHQADAIAFAGQAGAFAHADQAHADAHAAQAIAAAIgDQAHgDAFgFQAFgGADgIQAEgHAAgJQAAgIgEgIQgDgHgFgGQgFgGgHgCQgIgDgIAAQgHAAgHADg");
	this.shape_77.setTransform(153.8,317.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#333333").s().p("AgOAxQgKgEgHgGQgIgIgDgJQgDgHgCgPQAAgHAFgOQADgKAIgHQAHgGAKgFQAKgDALAAQAGAAAGABQAGABAGACQAFAEAEAEQAFADADAGIgLAHQgFgIgIgEQgIgEgJAAQgIAAgHADQgIACgFAGQgFAGgDAHQgDAIAAAIQAAAJADAIQADAHAFAGQAFAFAIADQAHADAIAAQAJAAAIgEQAIgDAFgJIALAHQgDAGgFADQgEAEgFADQgGADgGABQgGABgGAAQgLAAgKgEg");
	this.shape_78.setTransform(142,317.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#333333").s().p("AgaA1IAAhoIAOAAIAAAUQACgFAEgEQAEgEAEgCQAEgDAHgCQAGgBAIAAIAAAOIgEAAQgJAAgGACQgHADgDAFQgEAEgDAIQgCAHAAAJIAAA1g");
	this.shape_79.setTransform(127.8,317.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#333333").s().p("AgUAxQgKgEgHgGQgHgIgEgJQgDgHgBgPQAAgHAEgOQAEgKAHgHQAHgGAKgFQAKgDALAAQAKAAAKADQALAFAGAGQAIAHADAKQAFAOAAAHQgCAPgDAHQgDAJgIAIQgGAGgLAEQgKAEgKAAQgLAAgKgEgAgOglQgIACgEAGQgGAGgDAHQgDAIAAAIQAAAJADAHQADAIAGAGQAEAFAIADQAHADAIAAQAHAAAIgDQAHgDAFgFQAGgGADgIQACgHAAgJQAAgIgCgIQgDgHgGgGQgFgGgHgCQgIgDgHAAQgIAAgHADg");
	this.shape_80.setTransform(116.9,317.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#333333").s().p("AgLBJIgLgEQgFgDgEgEQgFgEgDgFIAAAVIgNAAIAAiUIAOAAIAABAIAHgJQAFgEAFgDQAFgDAGgBQAFgBAGAAQALAAAKAEQAJADAHAIQAHAHAEAJQAEANAAAIQgBAPgDAHQgEAKgHAHQgHAHgJAEQgKAEgLAAQgGAAgGgCgAgPgQQgHADgFAFQgGAGgCAGQgDAIAAAJQAAAJADAIQACAHAGAGQAFAFAHADQAHADAIAAQAIAAAHgDQAHgDAGgFQAFgGADgHQADgIAAgJQAAgJgDgIQgDgGgFgGQgGgFgHgDQgHgDgIAAQgIAAgHADg");
	this.shape_81.setTransform(104.4,315.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#333333").s().p("AgUAzQgIgCgEgEQgGgEgCgGQgDgGAAgGQAAgHACgEQACgGAFgEQAFgDAIgDQAHgCALAAIAhAAIAAgGQAAgHgCgFQgCgGgDgDQgEgEgGgCQgGgBgHAAQgJAAgJADQgJAEgHAFIgGgLQAIgGALgEQALgDAMAAQAKAAAIACQAHADAGAFQAGAFACAHQADAIAAAKIAABAIgNAAIAAgQIgHAHIgIAGIgKADIgKABQgJAAgHgCgAgPAFQgFACgDACQgDACgCAEQgBAEAAADQAAAFACAEQACADADADQAEACAFACQAFACAFgBQAFABAGgCIAJgEQAEgDADgEQAEgEACgFIAAgRIggAAQgHgBgGACg");
	this.shape_82.setTransform(90.8,317.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#333333").s().p("AgYAyQgLgEgHgGIAGgKQAHAEAKAEQAKADAKAAIANgBIAIgDQAEgDABgDQACgDAAgEQAAgFgDgEIgIgEQgEgCgSgEQgRgDgHgEQgFgDgCgFQgDgFAAgHQAAgHACgFQADgGAFgEQAGgEAIgCQAHgCAJAAQALAAAKACQAKADAHAFIgHALQgGgFgJgCQgHgCgJAAIgLABIgIADQgEADgBADQgCAEAAADQAAAFADAEQACADAGACQAEACASADIANADIALAEQAFAEACAEQADAGAAAGQAAAIgDAFQgDAFgFAFQgGADgIACQgIACgKAAQgQgBgIgCg");
	this.shape_83.setTransform(80.4,317.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#333333").s().p("AgsBGQgHgDgEgEIAGgLQAEAEAFACQAEACAHAAQAGAAAFgEQAFgEAFgJIAFgKIgwhoIAPAAIAnBYIAohYIANAAIg0B0QgDAIgDAFQgDAFgFADQgFAEgEABQgFACgGgBQgHABgHgDg");
	this.shape_84.setTransform(272.9,294.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#333333").s().p("AgVAzQgHgCgFgEQgEgEgEgFQgCgHAAgGQAAgHACgFQADgFAEgEQAFgEAHgCQAJgCAKAAIAhAAIAAgHQAAgGgCgFQgBgGgFgDQgEgDgFgDQgGgBgHAAQgJAAgJAEQgJACgHAHIgGgMQAIgGALgEQALgDAMAAQAKgBAIADQAHADAGAEQAFAGADAHQADAIAAAKIAABBIgOAAIAAgRIgGAIIgHAFIgLAEIgLABQgJgBgHgCgAgPAFQgFABgDADQgDACgBAEQgCADAAAEQAAAFACADQABAEAEADQAEADAEABQAFACAGAAQAGAAAFgCIAJgEQAEgDADgEQAEgEACgFIAAgSIggAAQgIABgFABg");
	this.shape_85.setTransform(256.3,292.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#333333").s().p("AgQBJIAAhoIAOAAIAABogAgWgvIAagZIATAAIgfAZg");
	this.shape_86.setTransform(249.1,290.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#333333").s().p("AgZBEIgMgEQgFgEgEgDIAHgLQAIAGAKAFQALADALAAQAKAAAHgCQAIgDAEgEQAGgFABgHQADgHAAgKIAAgOIgHAJIgLAHQgEACgHACQgFABgGAAQgLAAgKgEQgKgDgGgIQgIgGgEgJQgEgJAAgLQAAgLAEgKQAEgJAIgHQAGgGAKgEQAKgEALAAQAGAAAFACQAHABAFACQAFADAFAEQAEAEADAFIAAgUIAOAAIAABbQAAAOgDAJQgEAKgGAHQgHAGgJADQgLAEgNAAQgSgCgIgDgAgPg5QgHADgFAFQgFAFgDAHQgDAHAAAJQAAAIADAIQADAFAFAFQAFAGAHACQAIADAIAAQAIAAAIgDQAGgCAGgGQAFgFADgFQADgIAAgIQAAgJgDgHQgDgHgFgFQgGgFgGgDQgIgDgIABQgIgBgIADg");
	this.shape_87.setTransform(238,294.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#333333").s().p("AgZA1IAAhoIANAAIAAAVQACgGAEgEQAEgEAEgDQAFgCAGgBQAGgCAIAAIAAAOIgEAAQgIgBgHADQgGADgEAFQgEAEgDAIQgDAHAAAJIAAA1g");
	this.shape_88.setTransform(228.4,292.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#333333").s().p("AgRAxQgKgDgIgIQgHgHgEgKQgDgGgBgPQAAgLAEgKQAEgJAHgHQAHgHAJgFQAJgDAKAAQALAAAKADQAJAFAHAHQAHAGAEAKQADAKAAALIAAAEIhXAAQABAIADAHQADAHAGAFQAFAEAIADQAHADAIAAQAJAAAIgDQAJgEAGgHIAIAKIgIAHQgFADgFACIgLAEIgMABQgPgCgGgDgAAmgGQgBgHgDgGQgDgHgFgFQgFgEgGgCQgHgDgIAAQgGAAgHADQgGACgFAEQgFAFgDAHQgDAGgBAHIBKAAIAAAAg");
	this.shape_89.setTransform(217.7,292.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#333333").s().p("AAiA1IAAg6QAAgJgCgGQgCgGgEgFQgEgEgGgCQgGgCgHAAQgIAAgHACQgHADgEAFQgFAFgDAGQgCAIAAAJIAAA2IgOAAIAAhoIANAAIAAATQADgEAEgEIAJgHQAFgCAGgBQAGgCAGAAQAKAAAIADQAIACAFAGQAGAGADAIQADAJAAALIAAA8g");
	this.shape_90.setTransform(205,292.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#333333").s().p("AgRAxQgKgDgIgIQgHgHgEgKQgDgGgBgPQAAgLAEgKQAEgJAHgHQAHgHAJgFQAJgDAKAAQALAAAKADQAJAFAHAHQAHAGAEAKQADAKAAALIAAAEIhXAAQABAIADAHQADAHAGAFQAFAEAIADQAHADAIAAQAJAAAIgDQAJgEAGgHIAIAKIgIAHQgFADgFACIgLAEIgMABQgPgCgGgDgAAmgGQgBgHgDgGQgDgHgFgFQgFgEgGgCQgHgDgIAAQgGAAgHADQgGACgFAEQgFAFgDAHQgDAGgBAHIBKAAIAAAAg");
	this.shape_91.setTransform(192.1,292.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#333333").s().p("AgRAxQgKgDgIgIQgHgHgEgKQgDgGgBgPQAAgLAEgKQAEgJAHgHQAHgHAJgFQAJgDAKAAQALAAAKADQAJAFAHAHQAHAGAEAKQADAKAAALIAAAEIhXAAQABAIADAHQADAHAGAFQAFAEAIADQAHADAIAAQAJAAAIgDQAJgEAGgHIAIAKIgIAHQgFADgFACIgLAEIgMABQgPgCgGgDgAAmgGQgBgHgDgGQgDgHgFgFQgFgEgGgCQgHgDgIAAQgGAAgHADQgGACgFAEQgFAFgDAHQgDAGgBAHIBKAAIAAAAg");
	this.shape_92.setTransform(174.9,292.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#333333").s().p("AgVBHQgJgEgIgHQgGgHgFgKQgCgHgBgPQAAgIADgNQAFgJAGgHQAIgIAJgDQAKgEALAAQAFAAAGABQAGABAFADQAFADAEAEQAFAEADAFIAAhAIAOAAIAACUIgNAAIAAgVQgDAFgFAEQgEAEgFADIgLAEQgHACgFAAQgLAAgKgEgAgOgQQgHADgGAFQgFAGgDAGQgDAIAAAJQAAAJADAIQADAHAFAGQAGAFAHADQAHADAIAAQAIAAAGgDQAIgDAFgFQAGgGADgHQADgIAAgJQAAgJgDgIQgDgGgGgGQgFgFgIgDQgGgDgIAAQgIAAgHADg");
	this.shape_93.setTransform(161.6,290.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#333333").s().p("AgRAxQgKgDgIgIQgHgHgEgKQgDgGgBgPQAAgLAEgKQAEgJAHgHQAHgHAJgFQAJgDAKAAQALAAAKADQAJAFAHAHQAHAGAEAKQADAKAAALIAAAEIhXAAQABAIADAHQADAHAGAFQAFAEAIADQAHADAIAAQAJAAAIgDQAJgEAGgHIAIAKIgIAHQgFADgFACIgLAEIgMABQgPgCgGgDgAAmgGQgBgHgDgGQgDgHgFgFQgFgEgGgCQgHgDgIAAQgGAAgHADQgGACgFAEQgFAFgDAHQgDAGgBAHIBKAAIAAAAg");
	this.shape_94.setTransform(144.1,292.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#333333").s().p("AABA/QgFgDgEgDQgEgEgCgGQgCgGAAgHIAAg/IgTAAIAAgLIATAAIAAgYIAOAAIAAAYIAfAAIAAALIgfAAIAAA+QAAAJAEAGQAFAEAIAAQAFAAAEgBQAEgBADgDIAFAKQgEAEgGACQgGACgGAAQgIAAgFgCg");
	this.shape_95.setTransform(133.9,291.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#333333").s().p("AgUAzQgHgCgGgEQgEgEgEgFQgCgHAAgGQAAgHACgFQACgFAFgEQAFgEAHgCQAJgCALAAIAgAAIAAgHQAAgGgCgFQgCgGgEgDQgEgDgFgDQgGgBgHAAQgJAAgJAEQgJACgHAHIgGgMQAIgGALgEQALgDALAAQALgBAHADQAJADAFAEQAGAGADAHQACAIAAAKIAABBIgOAAIAAgRIgFAIIgIAFIgKAEIgMABQgIgBgHgCgAgPAFQgFABgDADQgDACgBAEQgCADAAAEQAAAFACADQABAEAEADQADADAFABQAGACAGAAQAFAAAFgCIAJgEQAEgDAEgEQADgEACgFIAAgSIggAAQgHABgGABg");
	this.shape_96.setTransform(123.7,292.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#333333").s().p("AAiA1IAAg6QAAgJgCgGQgCgGgEgFQgEgEgGgCQgGgCgHAAQgIAAgHACQgHADgEAFQgFAFgDAGQgCAIAAAJIAAA2IgOAAIAAhoIANAAIAAATQADgEAEgEIAJgHQAFgCAGgBQAGgCAGAAQAKAAAIADQAIACAFAGQAGAGADAIQADAJAAALIAAA8g");
	this.shape_97.setTransform(111.5,292.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#333333").s().p("AgRAxQgKgDgIgIQgHgHgEgKQgDgGgBgPQAAgLAEgKQAEgJAHgHQAHgHAJgFQAJgDAKAAQALAAAKADQAJAFAHAHQAHAGAEAKQADAKAAALIAAAEIhXAAQABAIADAHQADAHAGAFQAFAEAIADQAHADAIAAQAJAAAIgDQAJgEAGgHIAIAKIgIAHQgFADgFACIgLAEIgMABQgPgCgGgDgAAmgGQgBgHgDgGQgDgHgFgFQgFgEgGgCQgHgDgIAAQgGAAgHADQgGACgFAEQgFAFgDAHQgDAGgBAHIBKAAIAAAAg");
	this.shape_98.setTransform(98.7,292.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#333333").s().p("AgGBKIAAiTIANAAIAACTg");
	this.shape_99.setTransform(90,290.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#333333").s().p("AguBGIAAiLIAPAAIAAB+IBNAAIAAANg");
	this.shape_100.setTransform(82.5,290.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#333333").s().p("AgLAMQgEgFAAgHQAAgGAEgFQAFgFAGAAQAHAAAFAFQAEAFAAAGQAAAHgEAFQgFAFgHAAQgGAAgFgFg");
	this.shape_101.setTransform(289.4,270.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#333333").s().p("AgbAzQgLgDgIgFIAKgTQAHAEAKADQAKADAJAAQALAAAGgDQAFgDAAgGQAAgDgCgDQgDgCgFgBIgWgEQgQgEgGgEQgFgDgDgFQgCgGAAgHQAAgIACgGQAEgGAGgFQAHgEAIgCQAJgDAKAAQALAAAKADQAMACAGAEIgJATQgIgEgHgCQgIgCgIAAQgKAAgFAEQgGADAAAFQAAAEADADQACACAFACIAWAEIAMADIALAEQAFAEACAFQADAFAAAIQAAAHgEAGQgDAGgGAFQgHAEgIACQgKADgKAAQgNAAgNgEg");
	this.shape_102.setTransform(281.7,266.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#333333").s().p("AgZA0QgGgCgGgEQgFgFgDgGQgDgFABgHQAAgHABgGQADgGAFgEQAGgDAIgDQAJgCAMAAIAbAAIAAgCQAAgFgCgFQgCgEgEgDQgCgDgGgBQgFgCgFAAQgKAAgIADQgJADgGAFIgKgTQAGgEAPgFQALgEANAAQALAAAKADQAIADAGAFQAHAGADAJQAEAIAAAMIAAA9IgZAAIAAgNQgEAHgIAEQgJAEgLAAQgJAAgIgDgAgMAJQgEABgDACQgEADAAAHQAAAGAFAEQAGAEAKAAQAIAAAHgEIAGgFQADgDACgEIAAgNIgaAAQgFAAgFACg");
	this.shape_103.setTransform(270.3,266.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#333333").s().p("AgQAzQgLgEgHgIQgIgHgEgKIgEgLIgBgLQAAgHAFgOQAEgKAIgHQAHgIALgEQAHgCAPgCQAIAAAHACQAHABAGAEQAGADAEAEQAFAFADAGIgTALQgFgHgHgEQgHgEgIAAQgGAAgGADQgGACgEAEQgFAFgCAGQgCAGAAAHQAAAHACAHQACAGAFAEQAEAFAGACQAGACAGAAQAIAAAHgDQAHgEAFgIIATAMQgDAGgFAEQgEAFgGADQgGADgHACQgHACgIAAQgPgCgHgCg");
	this.shape_104.setTransform(258.8,266.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#333333").s().p("AgMBNIAAhqIAYAAIAABqgAgKgyQgFgFAAgGQAAgGAFgFQAEgEAGAAQAHAAAEAEQAFAEAAAGQAAAHgFAEQgEAFgHAAQgGAAgEgEg");
	this.shape_105.setTransform(250.1,264.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#333333").s().p("Ag4BJIAAiRIAYAAIAAAPQAGgIAJgEQAJgEAKAAQAMAAAKAEQAKAEAHAIQAIAGADALQAFAOAAAIIgCAMIgDAKQgDAJgIAIQgHAHgKAEQgKAEgMAAQgJAAgJgDQgIgFgHgGIAAAzgAgMgxQgGADgEAEQgEAEgDAHQgCAFAAAIQAAAIACAGQADAFAEAFQAEAEAGACQAGACAGABQAGgBAGgCQAGgCAEgEQAEgFADgFQACgGAAgIQAAgIgCgFQgDgHgEgEQgEgEgGgDQgGgDgGAAQgGAAgGADg");
	this.shape_106.setTransform(240.8,268.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#333333").s().p("AgHBKIgMgDIgKgFIgJgGIgGgIIgFgKIgEgKIgBgMQAAgIAEgNQAFgKAHgHQAIgHAJgEQAHgDAPgBQALAAAKAEQAKAEAHAHQAIAHAEAKQAEAOAAAIIgBAHIhTAAQABAGADAFQADAFAFADQAEADAGACQAGACAGAAQAJAAAHgDQAHgDAGgGIANAQQgDAEgFADIgKAGIgMADIgNABgAAfAMQgBgGgDgFQgCgEgEgDQgEgEgFgBQgFgCgGAAQgFAAgGACQgFABgEAEQgEADgCAEQgDAFgBAGIA8AAIAAAAgAgQgvIAagbIAeAAIgjAbg");
	this.shape_107.setTransform(227.3,264.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#333333").s().p("AgaAzQgMgDgIgFIAKgTQAHAEAKADQAKADAJAAQAMAAAFgDQAGgDgBgGQAAgDgCgDQgDgCgFgBIgVgEQgRgEgHgEQgEgDgDgFQgCgGAAgHQAAgIACgGQAEgGAGgFQAGgEAJgCQAJgDAJAAQALAAALADQALACAIAEIgKATQgIgEgHgCQgIgCgIAAQgKAAgGAEQgFADAAAFQAAAEADADQACACAFACIAWAEIAMADIALAEQAEAEADAFQADAFAAAIQAAAHgDAGQgEAGgGAFQgHAEgIACQgKADgJAAQgNAAgNgEg");
	this.shape_108.setTransform(210.4,266.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#333333").s().p("AgYA0QgIgCgFgEQgFgFgDgGQgCgFgBgHQAAgHACgGQADgGAFgEQAGgDAIgDQAJgCALAAIAbAAIAAgCQAAgFgBgFQgCgEgEgDQgCgDgGgBQgEgCgHAAQgJAAgIADQgJADgFAFIgLgTQAGgEAPgFQALgEANAAQALAAAKADQAIADAGAFQAHAGADAJQADAIABAMIAAA9IgZAAIAAgNQgEAHgIAEQgJAEgLAAQgJAAgHgDgAgMAJQgEABgDACQgEADAAAHQAAAGAFAEQAFAEAKAAQAJAAAHgEIAGgFQADgDABgEIAAgNIgZAAQgFAAgFACg");
	this.shape_109.setTransform(198.9,266.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#333333").s().p("AgXBHQgKgEgHgHQgIgIgEgJIgDgLIgBgMQAAgIAEgNQAEgLAIgGQAHgIAKgEQAKgEALAAQAKABAJADQAJAEAGAHIAAg3IAZAAIAACUIgYAAIAAgPQgGAJgKADQgJAEgKAAQgLAAgKgEgAgLgKQgGADgEAEQgFADgCAHQgCAFAAAIQAAAIACAGQACAGAFAFQAEAEAGACQAGACAFABQAHgBAGgCQAGgCAEgEQAEgFADgGQACgGAAgIQAAgIgCgFQgDgHgEgDQgEgEgGgDQgGgDgHAAQgFAAgGADg");
	this.shape_110.setTransform(185.9,264.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#333333").s().p("AgMBNIAAhqIAYAAIAABqgAgLgyQgEgFAAgGQAAgGAEgFQAFgEAGAAQAHAAAFAEQAEAEAAAGQAAAHgEAEQgFAFgHAAQgGAAgFgEg");
	this.shape_111.setTransform(176.6,264.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#333333").s().p("ABAA2IAAg5QAAgHgBgFQgCgGgDgDQgDgEgFgCQgEgBgGAAQgGAAgFACQgFACgEAEQgEAEgCAGQgCAGAAAHIAAA2IgYAAIAAg5QAAgHgBgFQgCgGgDgDQgDgEgEgCQgFgBgGAAQgGAAgFACQgFACgEAEQgDAEgCAGQgCAGAAAHIAAA2IgZAAIAAhqIAXAAIAAAOQAGgHAJgEQAKgEAKAAIAMABIAKADQAEADAEADQADADACAFIAIgHQAEgEAFgCQAFgDAGAAIAMgCQAKAAAIADQAIADAGAGQAGAFADAJQADAJAAAMIAAA8g");
	this.shape_112.setTransform(163.2,266.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#333333").s().p("AgWAzQgKgEgIgIQgIgHgEgKIgDgLIgBgLQAAgHAEgOQAEgKAIgHQAIgIAKgEQAHgCAPgCQAIAAAPAEQAKAEAIAIQAHAHAFAKQAEAOAAAHIgBALIgDALQgFAKgHAHQgIAIgKAEQgPAEgIAAQgPgCgHgCgAgLgeQgGACgFAFQgEAEgCAGQgDAGAAAHQAAAHADAHQACAGAEAEQAFAFAGACQAFACAGAAQAHAAAFgCQAHgCADgFQAFgEACgGQACgHAAgHQAAgHgCgGQgCgGgFgEQgDgFgHgCQgFgDgHAAQgGAAgFADg");
	this.shape_113.setTransform(146.2,266.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#333333").s().p("AgQAzQgLgEgHgIQgIgHgEgKIgEgLIgBgLQAAgHAFgOQAEgKAIgHQAHgIALgEQAHgCAPgCQAIAAAHACQAHABAGAEQAGADAEAEQAFAFADAGIgTALQgFgHgHgEQgHgEgIAAQgGAAgGADQgGACgEAEQgFAFgCAGQgCAGAAAHQAAAHACAHQACAGAFAEQAEAFAGACQAGACAGAAQAIAAAHgDQAHgEAFgIIATAMQgDAGgFAEQgEAFgGADQgGADgHACQgHACgIAAQgPgCgHgCg");
	this.shape_114.setTransform(134.1,266.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#333333").s().p("AgYA0QgIgCgFgEQgFgFgDgGQgDgFAAgHQAAgHADgGQACgGAFgEQAGgDAIgDQAJgCALAAIAbAAIAAgCQAAgFgCgFQgBgEgDgDQgEgDgEgBQgGgCgGAAQgIAAgJADQgJADgFAFIgKgTQAFgEAPgFQAMgEAMAAQAMAAAIADQAKADAGAFQAGAGADAJQADAIAAAMIAAA9IgYAAIAAgNQgEAHgJAEQgIAEgLAAQgJAAgHgDgAgMAJQgEABgCACQgFADAAAHQAAAGAGAEQAFAEAJAAQAIAAAIgEIAGgFQADgDABgEIAAgNIgZAAQgGAAgEACg");
	this.shape_115.setTransform(116.3,266.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#333333").s().p("AgeA2IAAhqIAYAAIAAAQIAGgHIAIgGIAKgDIANgBIAAAYIgGgBQgHAAgGACQgFACgEAFQgEADgCAHQgCAGAAAHIAAA0g");
	this.shape_116.setTransform(106.9,266.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#333333").s().p("AgZA0QgGgCgGgEQgFgFgDgGQgCgFAAgHQAAgHACgGQACgGAGgEQAFgDAIgDQAJgCALAAIAcAAIAAgCQgBgFgCgFQgBgEgDgDQgDgDgFgBQgFgCgGAAQgJAAgJADQgJADgGAFIgJgTQAFgEAPgFQAMgEAMAAQAMAAAIADQAJADAHAFQAGAGADAJQAEAIgBAMIAAA9IgXAAIAAgNQgFAHgJAEQgIAEgLAAQgJAAgIgDgAgMAJQgEABgCACQgFADAAAHQAAAGAGAEQAEAEALAAQAHAAAIgEIAGgFQADgDACgEIAAgNIgZAAQgHAAgEACg");
	this.shape_117.setTransform(95.8,266.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#333333").s().p("Ag5BGIAAiLIA5AAQAIAAAQADQAKAEAJAGQAHAHAEAJQAEANABAIIgCALIgDAJQgEAIgHAIQgJAGgKADQgQADgIAAIggAAIAAApgAggAIIAfAAQAHgBAGgCQAHgBAFgDQAEgDACgFQADgGAAgGQAAgHgDgFQgCgFgEgEQgFgEgHgBQgGgCgHAAIgfAAg");
	this.shape_118.setTransform(83.3,265.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Modo_de_aislamiento
	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(691.2,455,0.438,0.438,0,0,0,314.7,111.1);
	this.instance.alpha = 0.18;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Capa_2
	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.bf(img.Mapadebits5, null, new cjs.Matrix2D(0.73,0,0,0.73,-76.7,-19.4)).s().p("Ar+DBIAAk3IAxAUQAhAHAlAEQBHAEBJAAICUAAQA7AAA3gFQAzgGAugWQA2gYAPg0INKAAIAAGBg");
	this.shape_119.setTransform(652,394.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_119).wait(1));

	// Capa_10
	this.instance_1 = new lib.Símbolo1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(787.7,607.5,1,1,0,0,0,155.8,41.8);
	this.instance_1.alpha = 0.109;
	this.instance_1.filters = [new cjs.ColorFilter(1, 1, 1, 1, -255, -255, -255, 0), new cjs.BlurFilter(6, 6, 2)];
	this.instance_1.cache(-2,-2,316,88);

	this.instance_2 = new lib.Mapadebits14();
	this.instance_2.parent = this;
	this.instance_2.setTransform(689,416,0.445,0.445);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// Capa_4
	this.instance_3 = new lib.Mapadebits4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(543,348,0.743,0.743);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Capa_7
	this.instance_4 = new lib.mujer();
	this.instance_4.parent = this;
	this.instance_4.setTransform(593.7,415.6,0.494,0.494,0,0,0,176.3,324.7);

	this.instance_5 = new lib.mujer();
	this.instance_5.parent = this;
	this.instance_5.setTransform(568.1,564.2,0.335,0.337,0,-98.1,29.7,177.5,323.9);
	this.instance_5.alpha = 0.141;
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 102, 102, 102, 0)];
	this.instance_5.cache(6,-2,286,653);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(1));

	// Capa_9
	this.instance_6 = new lib.Mapadebits13();
	this.instance_6.parent = this;
	this.instance_6.setTransform(649,325,0.488,0.488);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Capa_8
	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.bf(img.Mapadebits5, null, new cjs.Matrix2D(0.73,0,0,0.73,-34.5,-5.5)).s().p("AhSA3QhIAAhIgEQglgEgggHIgygUIAAhKIKyAAQgPA1g2AXQguAWgzAFQg3AFg6ABIiUAAg");
	this.shape_120.setTransform(609.9,380.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_120).wait(1));

	// Capa_1
	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],47.7,-360.5,139.9,-330.5).s().p("EgO1AxzMAAAhjlIdrAAMAAABjlg");
	this.shape_121.setTransform(234,384.7);

	this.instance_7 = new lib.Mapadebits2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(437,250,0.81,0.81);

	this.instance_8 = new lib.Mapadebits1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(159,66,0.81,0.81);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.shape_121}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(652.8,415.3,1078.5,648.1);
// library properties:
lib.properties = {
	width: 1200,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"http://sd-1271777-h00087.ferozo.net/animaciones/cocina/images/Mapadebits1.png", id:"Mapadebits1"},
		{src:"http://sd-1271777-h00087.ferozo.net/animaciones/cocina/images/Mapadebits11.png", id:"Mapadebits11"},
		{src:"http://sd-1271777-h00087.ferozo.net/animaciones/cocina/images/Mapadebits12.png", id:"Mapadebits12"},
		{src:"http://sd-1271777-h00087.ferozo.net/animaciones/cocina/images/Mapadebits13.png", id:"Mapadebits13"},
		{src:"http://sd-1271777-h00087.ferozo.net/animaciones/cocina/images/Mapadebits14.png", id:"Mapadebits14"},
		{src:"http://sd-1271777-h00087.ferozo.net/animaciones/cocina/images/Mapadebits2.png", id:"Mapadebits2"},
		{src:"http://sd-1271777-h00087.ferozo.net/animaciones/cocina/images/Mapadebits4.png", id:"Mapadebits4"},
		{src:"http://sd-1271777-h00087.ferozo.net/animaciones/cocina/images/Mapadebits5.png", id:"Mapadebits5"},
		{src:"http://sd-1271777-h00087.ferozo.net/animaciones/cocina/images/Mapadebits6.png", id:"Mapadebits6"},
		{src:"http://sd-1271777-h00087.ferozo.net/animaciones/cocina/images/Mapadebits7.png", id:"Mapadebits7"},
		{src:"http://sd-1271777-h00087.ferozo.net/animaciones/cocina/images/Mapadebits9.png", id:"Mapadebits9"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;