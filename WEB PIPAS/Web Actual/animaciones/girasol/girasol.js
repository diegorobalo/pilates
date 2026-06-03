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


(lib.tallo_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#558943").s().p("AAFKmIgIidQgKj/AAkKQAAijADh7IAFh9IAEhtIAPjXIAALfQgBDRgDE3IgBDYg");
	this.shape.setTransform(31.1,118.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#558943").s().p("AgZJhQADgPAAgHIAEg6IAGoRQABiGAFhyIAFhsIAFhfIAHhNIAIg7IAEgVIAEgQIADgMIgEAcIgCAWIgEA6IgCBOIgCBeIgCFkQgBCHgFByIgKDLIgIBNIgIA7IgEAVIgHAcg");
	this.shape_1.setTransform(22.275,80.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#DBD49B","#5CAA41","#5CAA41"],[0.027,0.859,1],0.3,98.8,0.3,-98.7).s().p("AgVPFIgEgSQAIAXAJARQgHgDgGgTgAgeOkQgVhAADgpQADgoAJgnIAIgfIgSAbQgTAegDASQgDAOgwAXQg8AcggAiIgGAIQAJgnAcgVQAQgMAagPQAbgUArg7QATgcgPgfQgHgMgIACQgLACgIAWQgQAlgsASIgoAKIAJgUQAPgcAfgmQAfglAPgcQAIgNABgHQgeANgmAVQgwAZggAaIADgEQAUggANgIQAggUAUgQQAigcABgXQAAgsAIgXQAQgrAMjCIAJi5IAFskIBtjmIgUCqIAEJwQAHJzAMAgQAQAnAQALQATAOBMARQBBAQAlAuQASAXAFAVQgPgOgVgQQgqgfgfgHQgYgEg3gWIgUgHQgDAAAQALQAhAWALAlQAEAPgGADQgGAFgQgNQgjgagEAFQgEAHAhAnQAYAdA5AqIAZASQAFAFgQgFQgHgChUgnQg5gbADAOQADAQA2BTIA2BRQgegpggghQg/hFgGAgQgKAxAGA5QABAMgCgEIgPglQgbhFgIAAQgKgBgHBUQgFA7AGAkIgFgPgAjzOyQgJgHAjgoIgBADQgFAWgJANQgGAJgDAAIgCAAgAkNK5QAOgPATgPQgXAjgcAXQgKAIgCAAQgEAAAigkg");
	this.shape_2.setTransform(30.0848,98.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tallo_1, new cjs.Rectangle(0,0,60.2,197.5), null);


(lib.sol = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.rf(["#FFFFFF","#FFFDEB","rgba(255,252,234,0.886)","rgba(255,255,255,0)"],[0,0.749,0.824,1],0,0,0,0,0,300.8).s().p("EghQAhRQtytxAAzgQAAzfNytxQNxtyTfAAQTgAANxNyQNyNxAATfQAATgtyNxQtxNyzgAAQzfAAtxtyg");
	this.shape.setTransform(301.1,301.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sol, new cjs.Rectangle(0,0,602.2,602.2), null);


(lib.semillas = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#D49026").s().p("AgMAFQgGgMAAgRIACgPIALAJQAMAMAFAOQAKAVgFAXQgTgNgKgWg");
	this.shape.setTransform(100.5112,42.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D49026").s().p("AgJAJQgIgJgEgNIgBgNIAMAEQAMAFAIAJQANAOAAAVQgVgDgLgPg");
	this.shape_1.setTransform(100.475,36.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D49026").s().p("AgKAKQgGgIACgJIADgJIAJACQAJADADAEQAEAEABAKIAAAJQgDABgGAAQgJAAgHgHg");
	this.shape_2.setTransform(91.3,30.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D49026").s().p("AgEANQgMgFgJgLIgHgKIAMgCQAPgBAKAEQATAIAJASQgJADgIAAQgLAAgJgEg");
	this.shape_3.setTransform(75.55,20.6992);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D49026").s().p("AgGAMQgKgGgHgLIgGgLIAMgBQAOAAAKAGQAQAJAHATIgNABQgNAAgKgGg");
	this.shape_4.setTransform(67.125,19.2723);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D49026").s().p("AgSAQIgLgDIAGgKQAIgKALgFQAPgHATAHQgIARgRAIQgHADgJAAIgHAAg");
	this.shape_5.setTransform(56.525,17.4688);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D49026").s().p("AgPAHIgHgHIAHgGQAIgHAHAAQANAAAKANQgKAOgNAAQgHAAgIgHg");
	this.shape_6.setTransform(86.525,108.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D49026").s().p("AgWAJIgKgGIAJgGQALgIALgCQASgBAQAMQgOAOgRACIgDAAQgKAAgLgFg");
	this.shape_7.setTransform(90.2,121.2744);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D49026").s().p("AgUAJQAEgLAIgHQAMgLATABQgBATgNAKQgIAHgMACIgLABIACgLg");
	this.shape_8.setTransform(115.85,110.1208);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D49026").s().p("AgaAJQAFgNAMgIQAMgJAOABQAIAAAFACIgHALQgIAKgKAGQgGAGgPAEIgNACIADgMg");
	this.shape_9.setTransform(116.5,109.9947);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D49026").s().p("AgeAUIAGgMQAHgLALgHQAPgLAWADQgHAUgRAKQgJAHgPABg");
	this.shape_10.setTransform(109.1,114.6429);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D49026").s().p("AgeAHQAIgOAPgHQAOgHAQADQAIABAFADIgKAJQgJAJgNAGQgKAGgQACIgNACg");
	this.shape_11.setTransform(101.225,112.93);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D49026").s().p("AgWAMQAFgNAJgIQANgNAVgBQgCAVgPAMQgJAIgNAEIgMACIADgMg");
	this.shape_12.setTransform(113.625,102.575);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D49026").s().p("AgMgEQACgGAJgFIAIgEQAKANgEAKQgEAMgPAEQgKgOAEgKg");
	this.shape_13.setTransform(116.1118,90.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D49026").s().p("AgMADQgEgKAEgOIAEgMIAIAJQAKAKADALQAFARgJATQgQgLgFgTg");
	this.shape_14.setTransform(121.8268,68.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D49026").s().p("AgMADQgBgDAFgHIAGgFIAGACQAIADABAFQACAGgMAJQgNgCgCgIg");
	this.shape_15.setTransform(103.7816,39.475);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D49026").s().p("AgLAHQgEgGADgIIADgJIAJACQAIACAEAGQAFAIgHAPQgPgBgGgJg");
	this.shape_16.setTransform(97.8643,33.125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D49026").s().p("AgJAKQgBgBAEgGIAEgFIAFgEQAGgEABABQACACgJAKQgIAHgDAAIgBAAg");
	this.shape_17.setTransform(86.5329,25.1329);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D49026").s().p("AgNANIgKgEIAFgJQAGgJAIgDQAMgFAQAJQgGAQgNAFQgEABgEAAIgKgBg");
	this.shape_18.setTransform(50.475,8.3607);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D49026").s().p("AACAXQgLgGgDgMQgDgLAHgMQAEgFAEgDIAFAJQAHAJACAHQABAEgBANIgCALQgFgBgFgDg");
	this.shape_19.setTransform(25.6443,52.125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D49026").s().p("AgMgCQACgJAJgIIAIgHIAEAKQAEAMgCAIQgEAPgPAHQgKgPAEgNg");
	this.shape_20.setTransform(23.4012,40.75);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D49026").s().p("AgMALQgDgKAEgHQAEgHAIgEIAJgCQAIAQgGAKQgFALgQACIgDgJg");
	this.shape_21.setTransform(28.4393,30.75);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D49026").s().p("AgRAPQAAgNAGgIQAGgJALgGIAKgFQAFAUgKANQgJAPgSAFIgBgMg");
	this.shape_22.setTransform(25.0723,27.375);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D49026").s().p("AgKAOIgJgBQgBgEACgGQADgKAJgEQAIgFAKAFQAFADADADIgFAHQgGAIgFACQgDACgFAAIgGAAg");
	this.shape_23.setTransform(26.8188,17.4577);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D49026").s().p("AgPANQgBgMAFgHQAEgIAKgFIAKgDQAGAQgHAMQgHAOgRADIgDgKg");
	this.shape_24.setTransform(18.7544,23.75);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D49026").s().p("AgLARQgFgMAEgJQAEgMAKgGQAGgDAEgBIACAKQACALgDAJQgDAHgJAIIgGAIQgEgEgCgGg");
	this.shape_25.setTransform(18.2011,33.45);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D49026").s().p("AAEAYQgLgHgFgKQgEgKAFgNIAGgKIAGAIQAJAIADAIQACAEAAAOIAAALQgFgBgGgCg");
	this.shape_26.setTransform(16.0934,60.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D49026").s().p("AgLASQgHgNAFgMQAFgNAMgEQAHgDAFABIgBALQgBAMgCAFQgCAGgIAKIgFAJQgEgDgEgGg");
	this.shape_27.setTransform(19.2708,43.4607);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D49026").s().p("AgIAeQgHgPACgRQADgQAKgPQAGgHAFgCIACANQACATgBALQgCALgHASIgFAOQgEgFgEgJg");
	this.shape_28.setTransform(11.6349,38.45);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D49026").s().p("AgDAHIgFgFQgFgFABgCQACgCAHAAIAGABQALAIgCAEQgBACgEAAIgKgBg");
	this.shape_29.setTransform(127.851,91.4892);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D49026").s().p("AgGAHIgDgHQgCgGACgDQACgCAHACIAHADQAGAMgDAEQgBAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgEAAgIgEg");
	this.shape_30.setTransform(114.2738,84.8863);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D49026").s().p("AgEAXQgHgPgBgHQgCgJABgMIAAgMIAEABIAIAEQALAIAEAQQACAOgIANIgFAHIgDACg");
	this.shape_31.setTransform(117.5631,70.125);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D49026").s().p("AgEAeQgGgOgDgPQgCgNACgQIACgOIALAJQALAOADARQACARgHAPQgEAJgEAEg");
	this.shape_32.setTransform(118.0563,66.475);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D49026").s().p("AgEAeQgHgSgCgLQgBgKABgTIABgOIAEACQAEADAEAFQALANADARQACARgIAPQgDAJgFAEg");
	this.shape_33.setTransform(123.8511,73.875);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#D49026").s().p("AgIAgIgFggIABguIADADQAEACAFAGQAMANACAVQACATgMARIgGAJIgDADg");
	this.shape_34.setTransform(124.1898,80.125);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D49026").s().p("AgNAYQgBgQACgIQACgKAGgOIAEgLIAIAKQAIAPgCANQgEARgLAJQgDAEgEACIgEACg");
	this.shape_35.setTransform(121.4631,85.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#D49026").s().p("AgMAUIgDAAIABgKQABgKADgFQADgEAJgGIAJgEIAEAJQADAKgGAKQgGAJgLABIgEAAIgDAAg");
	this.shape_36.setTransform(120.45,93.4875);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#D49026").s().p("AgMASIgLgDIAFgJQAGgKAGgFQAGgFAMgCIALgBIgBALQgDALgJAHQgJAGgKAAIgDAAg");
	this.shape_37.setTransform(111.2,102.5817);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#D49026").s().p("AgPAOIgLgEIAGgJQAHgJAJgDQAOgGARAIQgHARgPAFQgFACgFAAIgKgBg");
	this.shape_38.setTransform(104.825,97.6951);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D49026").s().p("AgUAKIgJgHIAJgGQAKgHAJgDQAHgBANACIALACQgBAFgEAFQgJALgMACIgGABQgJAAgJgEg");
	this.shape_39.setTransform(103.175,105.2046);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D49026").s().p("AgRAHIgJgHIAJgGQAJgHAIAAQAPAAAMANQgMAOgPAAQgIAAgJgHg");
	this.shape_40.setTransform(92.85,109.475);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#D49026").s().p("AgBAOQgMgCgLgJIgIgIIALgFQANgFAKACQATAEAMAPQgNAIgOAAIgHAAg");
	this.shape_41.setTransform(78.175,108.1786);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#D49026").s().p("AgDANQgKgDgHgKIgGgIIAKgEQAMgDAIADQAPAEAIAQQgKAHgLAAQgFAAgEgCg");
	this.shape_42.setTransform(74.85,101.1112);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#D49026").s().p("AgHALQgHgEgDgKIgCgKIAKgBQAKgBAHAFQALAHABAQQgHACgGAAQgHAAgHgEg");
	this.shape_43.setTransform(60.775,96.9388);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#D49026").s().p("AgGAMQgGgDgFgJIgCgJIAJgDQAKgDAGAEQALAFADAQQgJAEgIAAQgEAAgFgCg");
	this.shape_44.setTransform(58.2,88.485);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#D49026").s().p("AgKAIQgEgFAAgKIABgJIAKABQAJABAFAGQAHAIgFAQIgDABQgNAAgHgJg");
	this.shape_45.setTransform(52.863,87.805);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#D49026").s().p("AgJAMQgKgHAAgLIABgKIAJACQAMACACACQAFAEAFAIIAFAIQgDADgGACIgIACQgGAAgGgFg");
	this.shape_46.setTransform(45.475,88.4512);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#D49026").s().p("AAMAgQgSgEgKgOQgLgOACgSIACgKIABgEIAKAKIARAVIAOAVIAIAMIgEABg");
	this.shape_47.setTransform(30.9346,76.775);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#D49026").s().p("AAHAiQgNgMgHgQQgGgNAAgUIACgOIALAKQANAPAFANQAFALACATIABAQQgGgDgHgGg");
	this.shape_48.setTransform(32.375,70.45);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#D49026").s().p("AAMAiQgQgFgMgQQgLgOAAgTIACgQIALALQAOAPAFAIQAHAIAJARIAHAOQgHAAgJgDg");
	this.shape_49.setTransform(39.4,77.125);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#D49026").s().p("AAFApQgNgQgGgUQgFgSAEgVIAFgSIAIAQQAIAQAGATQADALADAaIAAARQgGgEgHgIg");
	this.shape_50.setTransform(38.5283,62.75);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#D49026").s().p("AgLAHQgGgKAAgOIABgMIALAFQALAIAGAKQAJAQgEAUQgTgHgJgQg");
	this.shape_51.setTransform(43.2973,72.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#D49026").s().p("AARAZQgQgCgLgKQgLgJgGgPIgDgNIANADQAOAFAJAJQALAHAIANIAGAMIgEAAIgKAAg");
	this.shape_52.setTransform(46.475,78.1833);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#A6711D").s().p("AAMA8QgUgXgLgdQgMgcABgeIACgaIAMAXQAQAiAGASQAIAWAKAgIAHAYQgIgGgLgLg");
	this.shape_53.setTransform(38.396,61.125);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#A6711D").s().p("AgLAGQgHgMgBgQIABgOIAMAIQAMAJAGANQAKAVgDAWQgUgKgKgVg");
	this.shape_54.setTransform(44.7688,71.85);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#A6711D").s().p("AAHAfQgOgIgGgPQgIgNADgRIAEgNIAJAJQALAOAEAJQAFAIADASIACANQgGgBgHgEg");
	this.shape_55.setTransform(41.6321,72.425);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#3D2908").s().p("AgJAJQgHgHgCgLIgBgKIAKABQAMACAHAHQALAKgBATIgCAAQgRAAgKgLg");
	this.shape_56.setTransform(90.8542,38.8011);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#3D2908").s().p("AgaARIAEgLQAGgLAJgGQAPgJATAEQgFASgPAKQgIAFgNABg");
	this.shape_57.setTransform(91.5,80.4135);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#3D2908").s().p("AgIATQgXgLgMgRIgIgMIgBgEIARAFQAYAIANAGQAPAGAVAMIAQAJQgIADgLABIgLABQgRAAgPgHg");
	this.shape_58.setTransform(71.5,82.111);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#3D2908").s().p("AAVAeQgUgBgOgMQgPgLgGgTIgCgMIAAgEIANAHIAaATQAHAEARARIAKALIgLABIgFAAg");
	this.shape_59.setTransform(64.5,78.5313);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#3D2908").s().p("AAkAoQgKAAgPgEQgHgCgFgDIgOgIIgMgKIgKgKQgJgKgEgKIgFgQIgCgGIBzBNIgGABIgLABIgFAAg");
	this.shape_60.setTransform(63.075,68.8833);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#3D2908").s().p("AgZAWIAWgZQAIgJARgMIANgKIAAAFQABAGgCAGQgEATgPAOQgPAOgSAEIgRABg");
	this.shape_61.setTransform(90.45,76.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#3D2908").s().p("AgMgCQAEgTAKgUIAKgPIADASQADAWgFATQgGAggSAWQgIgdAHgeg");
	this.shape_62.setTransform(87.6563,66.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#3D2908").s().p("AgSAdQAGgVAFgKQAEgKALgSIAJgMIACAEIADALQADATgIAQQgIATgQAJIgKAGIgEABg");
	this.shape_63.setTransform(82.4409,65.15);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#3D2908").s().p("AgLATQgTgMgKgUIgFgLIgBgGIAQAIQAUAJANAJQAMAGASAQIAOALQgHACgLgBQgWgBgSgKg");
	this.shape_64.setTransform(69.525,68.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#3D2908").s().p("AAXAfQgUgCgPgNQgRgNgGgRIgDgMIgBgEIAPAHQASAKAKAJQAMAJANANIALAMIgKABIgHAAg");
	this.shape_65.setTransform(72.2,65.87);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#3D2908").s().p("AASArIgHgCQgHgBgKgHIgIgIIgHgKIgFgMIgCgKQAAgLADgJQAAgDADgDIACgGIADgDIADAJIAYAyIAMATIAHAHIgFABg");
	this.shape_66.setTransform(73.3214,57.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#3D2908").s().p("AAEAZQgMgFgFgNQgFgMAHgMQAEgGAEgDIAFAJQAJAMABAEQACACABAPIABALIgCAAQgEAAgGgCg");
	this.shape_67.setTransform(66.6208,56.1292);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#3D2908").s().p("AAHA1QgFgEgDgHQgFgFgFgNIgDgMIAAgMIABgNIAEgMQAEgJAGgJQAHgHADgDIAEgDIgBASIgCAmIgBA5g");
	this.shape_68.setTransform(55.225,58.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#3D2908").s().p("AAJBCQgGgFgDgJQgHgJgEgNIgDgPIgBgPIACgQQAAgFAEgJQAFgOAFgIQAFgIAFgFIAFgEIgCAVIgCAXIgBAzIACAsg");
	this.shape_69.setTransform(52.35,47.725);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#3D2908").s().p("AgIAdIgFgdQgBgKABgSIABgOIAEACIAIAHQAMANACATQABARgKAQIgJALg");
	this.shape_70.setTransform(106.0594,65.175);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#3D2908").s().p("AABAoQgIgVgEgRQgEgQgBgYIABgSIAMAOQANASAFAVQAEASgEAYQgCALgEAHg");
	this.shape_71.setTransform(101.2941,55.775);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#3D2908").s().p("AgMAFQgGgPAAgTIABgQIALALQAMAOAGAQQAKAZgFAZQgUgPgJgag");
	this.shape_72.setTransform(93.9583,47.425);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#3D2908").s().p("AgMAVQgBgOAAgHIAEgUIABgMIAEACIAGAFQAMALAAAPQgBARgNAKIgIAEIgDABg");
	this.shape_73.setTransform(95.4698,62.225);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#3D2908").s().p("AgRAVQAAgPAFgLQAGgLALgJIALgHQAFAUgJASQgJATgSAIIgCgMg");
	this.shape_74.setTransform(96.6372,78.85);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#3D2908").s().p("AgNATQgBgOACgGQABgGAHgMIAFgKIADADIAFAGQAIAMgEAMQgCAOgMAHIgLAEIgBgKg");
	this.shape_75.setTransform(89.3833,73.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#3D2908").s().p("AggACIgIgHIgCgEIAOgBIAcgDQALAAASABIAOABIgCAEQgCAEgFADQgNANgUABIgBAAQgSAAgOgMg");
	this.shape_76.setTransform(85.125,85.1697);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#3D2908").s().p("AgCAOQgOgDgLgLIgHgGIgCgDIANgDQAOgDALADQALACANAIIALAGQgFADgHADQgKAEgKAAIgHAAg");
	this.shape_77.setTransform(70.525,87.7799);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#3D2908").s().p("AAYAYQgTgBgNgIQgQgKgIgPIgHgOIAPAEQATAFAKAHQANAIAMAMIAKALIgLACIgFgBg");
	this.shape_78.setTransform(64.875,82.5063);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#3D2908").s().p("AAVAgQgVgFgMgNQgOgMgGgSIgDgMIgBgEIAOAHQARAKAKAKQALAJAMAQIAJANIgDAAIgNgBg");
	this.shape_79.setTransform(52.475,76.18);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#3D2908").s().p("AAPAxQgVgOgNgYQgNgWgBgaIAAgWIANASQARAaAHAOQANAWAIATIAJAUQgIgDgLgIg");
	this.shape_80.setTransform(46.775,65.475);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#3D2908").s().p("AAEAlQgOgOgFgRQgEgRAEgUIAHgPIAHAOQAHAPAFAQQAEAMACAUIABAQQgGgDgIgHg");
	this.shape_81.setTransform(46.4,56.125);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#3D2908").s().p("AAEAoQgMgOgGgWQgEgUAEgTIAGgRIAIAPQAKAXACANQAEAMABAZIAAARIgNgNg");
	this.shape_82.setTransform(91.95,50.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#3D2908").s().p("AAOAjQgOgQgIgOQgHgNgHgVIgEgRIAPAJQARAMAJARQAKAQABAVQABALgBAHg");
	this.shape_83.setTransform(84.92,42.775);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#3D2908").s().p("AAKAdQgPgFgJgNQgJgMABgQIACgOIALAIQALALAGAJQAGAHAFAPIAFAMIgCABQgFAAgHgDg");
	this.shape_84.setTransform(87.3452,42.7042);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#3D2908").s().p("AAcAVIgcgQIgdgSIgNgKIAFgBIAMgDQAVgCARALQASALAIATQACAFABAGIABAFg");
	this.shape_85.setTransform(75.175,31.3596);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#3D2908").s().p("AAhAUQgWgDgOgGQgRgHgQgMIgNgKIARgCQAXAAAPAGQATAIAOAOQAHAIAEAFIgRgBg");
	this.shape_86.setTransform(65.875,30.65);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#3D2908").s().p("AgdADIgIgHIgCgDIANgDQASgDAIAAQAJAAASAEIANADQgDAFgHAEQgOALgQAAQgQgBgNgKg");
	this.shape_87.setTransform(58.875,32.8219);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#3D2908").s().p("AAAAfQgKgNgCgPQgDgPAHgPIAIgMIAFAMQAHASACAJQABAKgCARIgCANQgFgDgGgGg");
	this.shape_88.setTransform(66.3492,52.825);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#3D2908").s().p("AgLAfIgCgfIABgeIABgPIAEACQADACAEAGQANAPABAUQAAAUgNAQQgEAGgEACIgDACg");
	this.shape_89.setTransform(104.575,67.575);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#3D2908").s().p("AgNgBQACgSAJgTIAHgPIAGAQQAFAVgCASQgEAdgPAXQgLgaADgdg");
	this.shape_90.setTransform(106.4714,74.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#3D2908").s().p("AgWAdIgEgBIAXgeIARgSIAJgJIACAEIACAKQACAQgMAOQgMAOgRABg");
	this.shape_91.setTransform(102.8893,86.85);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#3D2908").s().p("AgXAEIgHgIIAKgEQAOgFAGAAQAIAAANAEIALADQgCAEgGAFQgJAKgPABQgOAAgJgKg");
	this.shape_92.setTransform(90.1,97.9722);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#3D2908").s().p("AghAcIgOgCIgFgBIAQgKQAVgOAOgGQALgGAZgKIASgGQgDAHgGAKQgNASgVALQgSAJgVAAIgEAAg");
	this.shape_93.setTransform(89.575,90.0295);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#3D2908").s().p("AgOAbQgCgRAEgMQAEgOAIgNIAKgKIAEANQAEAQgFAOQgEAPgKAMIgKAJg");
	this.shape_94.setTransform(103.4328,77.125);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#3D2908").s().p("AABAjQgGgUgDgRIgBgWIAAgOQAAgEgFgDIgFgBIACgBIADgCQAHgEAHAGQAJAFAEAOQAEALACALQACAUgGAVQgDAKgEAGIgHgQg");
	this.shape_95.setTransform(101.5,64.0605);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#3D2908").s().p("AAHAaQgMgHgHgLQgHgKAAgOIADgNIAKAHQAKAHAHAKQAFAIACAOIACANQgGgBgHgDg");
	this.shape_96.setTransform(88.4,40.475);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#3D2908").s().p("AAWAUQgRgDgKgGQgMgHgKgMIgIgMIAOAAQAQABANAHQAOAIAIANQAEAHACAFg");
	this.shape_97.setTransform(77.1,34.775);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#3D2908").s().p("AgZAIIgLgHIALgGQANgHAMgBQAUAAASANQgRANgUABIgBAAQgMAAgNgGg");
	this.shape_98.setTransform(62.6,27.9759);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#3D2908").s().p("AgdAMQAGgPANgKQALgKASgCQAJgBAGABIgIAMQgIAMgMAIQgJAIgQAHIgOAFQABgGADgJg");
	this.shape_99.setTransform(45.325,32.0417);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#3D2908").s().p("AgMAiIgEgJQgGgRAHgQQAGgQAQgIIAJgEIAEAAIgDANIgIAZIgMAYIgGALg");
	this.shape_100.setTransform(41.2865,41.525);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#3D2908").s().p("AgLAmQgDgCgDgIQgIgSAIgSQAHgUARgIQAFgDAGgBIAEAAIgeBSg");
	this.shape_101.setTransform(42.3435,42.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#3D2908").s().p("AgiAsIAAgPQABgWAOgUQAPgUAVgJIANgFIAFgBIgKAQIgWAiIgZAgIgMAPg");
	this.shape_102.setTransform(49.9625,43.025);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#3D2908").s().p("AgaAPQACgQALgLQAKgMARgDQAIgBAGABIgHALQgIAOgHAIQgGAGgOAKIgMAGQgBgFABgIg");
	this.shape_103.setTransform(51.03,32.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#3D2908").s().p("AAAANQgIgBgOgHIgKgFIAJgIQAOgHAMACQANADALAKIAGAKIgMADIgOABIgHgBg");
	this.shape_104.setTransform(68.8,32.7099);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#3D2908").s().p("AgGANQgOgHgIgLIgHgMIAOAAQAPABALAFQAMAGAKAKIAJALIgNACIgHAAQgMAAgKgFg");
	this.shape_105.setTransform(73.25,32.0235);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#3D2908").s().p("AAPATIgTgNQgFgGgKgMIgHgKIANgCQAQAAALAKQAMALABAPQABAIgCAFg");
	this.shape_106.setTransform(80.7417,41.275);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#3D2908").s().p("AgNAjQgBgZABgKQABgNAGgXIAFgQIAIAPQAIASgBAVQgCAUgMASIgLAMg");
	this.shape_107.setTransform(100.2613,69.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#3D2908").s().p("AACAWQgKgKgDgHQgEgGgBgPIABgLIALAEQALAGAGALQAFAKgDANQgBAHgDAEg");
	this.shape_108.setTransform(96.9529,61.575);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#3D2908").s().p("AgJAUQgEgNABgHQAAgIAGgMIAGgJIAHAIQAIAMgBALQgBALgKAKIgIAHg");
	this.shape_109.setTransform(96.3465,71);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#3D2908").s().p("AgBANQgPgCgMgKIgJgJIANgDQAQgDAKABQAKACAPAIIAKAGQgEAEgHADQgKAEgKAAIgHgBg");
	this.shape_110.setTransform(79.65,98.2118);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#3D2908").s().p("AgFAOQgOgEgLgNIgHgNIAOABQAPABAKADQAHACARAJIAMAHQgFADgIADQgIAEgJAAQgHAAgGgDg");
	this.shape_111.setTransform(71.275,93.3636);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#3D2908").s().p("AgaALIgMgHIALgGQANgHANgDQAKgCARABIANABQgCAFgGAGQgLALgQAEIgKABQgKAAgKgEg");
	this.shape_112.setTransform(83.125,87.3446);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#3D2908").s().p("AAfgpIABAFQABAFAAAIQAAAWgOARQgOARgTAGQgIACgFAAIgFABg");
	this.shape_113.setTransform(94.4563,77.875);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#3D2908").s().p("AgPARQABgMADgHQACgEAJgNIAHgIIADACIAEAHQAFAPgFALQgGANgMAFIgMACg");
	this.shape_114.setTransform(94.6625,72.95);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#3D2908").s().p("AgBAOQgNgCgNgIIgKgIIAMgFQAPgFAMABQAUADAQAPQgQAJgQAAIgHAAg");
	this.shape_115.setTransform(76.975,72.23);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#3D2908").s().p("AAWArQgYgGgRgRQgVgTgCgZQABgLABgFIABgFIADAEIAHAMQAHAJAWAUIAqAvQgHgBgNgDg");
	this.shape_116.setTransform(52.25,67.25);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#3D2908").s().p("AAKAbQgPgCgJgNQgJgLACgPIAEgMIAJAHQALALAEAFQACADAIAPIAFALIgIABIgEAAg");
	this.shape_117.setTransform(54.2568,67.7563);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#3D2908").s().p("AAHAvQgPgTgHgWQgHgWADgYQAAgHACgHIACgFIAJARQANAdADAMQAGARADAZIACATQgGgEgIgJg");
	this.shape_118.setTransform(55.63,62.375);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#3D2908").s().p("AAhAQQgUgCgNgEIgfgJIgQgFIAEgCQADgDAHgDQAUgIATAFQAUAEANAPQAFAGACAEIACAEg");
	this.shape_119.setTransform(66.95,35.3288);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#3D2908").s().p("AAAAOQgIgBgOgGIgLgFIAJgHQAMgJAOABQAPACAKAKQAFAFACAEIgLADQgMADgJAAIgCAAg");
	this.shape_120.setTransform(67.375,37.8679);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#3D2908").s().p("AAXAcQgRgOgJgKQgMgKgMgRIgIgPIAQAEQAVAGANAOQARAPADAUQABAJAAAEIgBAFg");
	this.shape_121.setTransform(87.5563,48.625);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#3D2908").s().p("AALAaQgNgJgHgKQgIgKgDgPIgCgOIANAFQAOAHAIAMQAJALAAAQQABAJgBAFg");
	this.shape_122.setTransform(81.2,44.95);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#3D2908").s().p("AgMAEQgEgJADgOIADgLIAKAHQAJAJAEAKQAGARgIASQgRgJgGgSg");
	this.shape_123.setTransform(75.7765,49.625);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#3D2908").s().p("AAAAXQgJgIgDgLQgDgJADgNIADgLIAJAGQAJAJAEALQADAJgEANIgEALIgIgHg");
	this.shape_124.setTransform(70.5643,51.275);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#3D2908").s().p("AgLATIgDgBIABgJIACgLQABgEAHgGIAEgHIADABQADABADAEQAIAJgFALQgFAMgMABg");
	this.shape_125.setTransform(83.983,59.225);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#3D2908").s().p("AABAhIgJgfQgFgOgEgTIgCgRIAOAJQAQAPAGATQAIAVgLATQgDAFgFAGIgDADg");
	this.shape_126.setTransform(92.0434,58.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#3D2908").s().p("AAJAfQgLgMgIgOQgFgMgEgSIgCgPIAOAIQAOAKAHAQQAHANAAATQAAAJgBAGg");
	this.shape_127.setTransform(92.1,62.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#3D2908").s().p("AgIAPQgFgKAAgEQAAgDADgMIADgJIADAAIAGADQALAHAAANQACAMgLAHIgIAFg");
	this.shape_128.setTransform(89.0063,74);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#3D2908").s().p("AgRATIgMgFIAJgJQAMgKAGgDQAFgDAQgFIALgDIgCANQgDANgOAIQgJAFgJAAIgKgBg");
	this.shape_129.setTransform(86.7,80.4946);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#3D2908").s().p("AAEAaIgNgEIgNgGIgLgIQgJgHgGgJQgEgFgDgIIgCgFIB0AqIgGADQgEADgKACQgIADgOAAIgNgBg");
	this.shape_130.setTransform(70.1,81.475);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#3D2908").s().p("AgIAPQgPgHgIgPIgFgNIAOADQAPADALAFQAIAFAPAKIAKAKQgFACgJACIgJABQgMAAgKgGg");
	this.shape_131.setTransform(71.375,79.2179);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#3D2908").s().p("AgmAWIgSgGIASgHIAmgOIAngNIATgGIgDAFIgIAMQgOASgYAJQgOAFgOAAQgJAAgKgDg");
	this.shape_132.setTransform(83.15,78.712);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#3D2908").s().p("AgTAYIgDgBIAGgKIALgQIAOgOIAJgHIACADQACAEAAAEQADAOgKAMQgKAMgPAAQgGAAgDgBg");
	this.shape_133.setTransform(86.6083,75.025);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#3D2908").s().p("AgZASIAEgLQAFgLAJgGQAIgGANgBIALAAQgDASgOAKQgIAHgNABg");
	this.shape_134.setTransform(83.25,73.3875);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#3D2908").s().p("AgRAYIgEAAIAEgLQAGgNAFgFQAEgFAMgIIAKgGIACAMQABANgJALQgJAKgOACIgEABIgEgBg");
	this.shape_135.setTransform(82.63,70.4625);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#3D2908").s().p("AgXAeIAGgKIAMgVIANgTIAIgLIACAEQACACACAIQAFAPgKAPQgKAPgQADIgKAAg");
	this.shape_136.setTransform(82.7583,64.55);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#3D2908").s().p("AAAAkQgHgTgDgPQgEgPgCgUIgBgRIAOALQANAPAGAVQAEATgGATQgEAKgDAGg");
	this.shape_137.setTransform(75.617,57.5);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#3D2908").s().p("AADAfIgLgdIgIgeIgDgPIAEACIAKAFQAPAKAHAUQAGARgGATQgBAFgEAFIgCAEg");
	this.shape_138.setTransform(79.025,55.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#3D2908").s().p("AAOAbQgMgKgJgMQgIgIgHgRIgEgNIAOADQAQAHAKANQAKAMACASQABAIgBAHg");
	this.shape_139.setTransform(81.1,51.95);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#3D2908").s().p("AAhATQgYgEgLgGQgQgGgQgKIgOgKIARgEQAUgCASAIQAUAIAMAOQAHAJADAGIgQgDg");
	this.shape_140.setTransform(71.275,41.3039);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#3D2908").s().p("AgjARQABgFADgEQAIgNAQgJQAMgHASABQAIAAAGACIgJALQgOALgKAFQgKAHgRADIgNACIABgEg");
	this.shape_141.setTransform(59.35,42.9191);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#3D2908").s().p("AAkASQgYgEgNgFQgLgDgZgJIgQgHIAFgDIAMgEQAVgGAWAHQAVAHAPAPQAIAIADAHg");
	this.shape_142.setTransform(68.75,42.8365);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#3D2908").s().p("AAAANQgJgBgOgIIgKgFIAKgHQAOgIANAEQAPACAJAMQAFAGACAFIgNABIgJAAQgJAAgEgBg");
	this.shape_143.setTransform(67.1,45.786);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#3D2908").s().p("AgGAjQgMgGgGgMQgHgNACgMQABgKAGgJIAJgKIAEgCIAAAFIAAALQABANAIAOQAFANAMAKIAJAGIAEADIgEACQgGACgHAAIgDAAQgIAAgIgFg");
	this.shape_144.setTransform(69.9109,56.9821);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#3D2908").s().p("AAAAiIgKgFQgFgDgFgFQgEgFgEgFIgFgLQgDgJABgKIACgIIACgFIACgEIAIAOIAaAeIARAPIAKAHIAEACIgEACIgGABIgHACQgLAAgIgDg");
	this.shape_145.setTransform(66.6375,59.75);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#3D2908").s().p("AAMAnIgEgCIgGgDQgFgEgGgIQgDgGgBgEQgBgDgCgHIABgKQABgEADgGQAEgJAHgFIAEgDIAFgCIADgBIgBAEIAAAJIAAANIACAmIAEANg");
	this.shape_146.setTransform(62.6,53.875);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#3D2908").s().p("AADAbQgDgBgDgDQgMgJACgQQADgQAMgHIAJgCIADAAIgBAbIgFASIgCAKg");
	this.shape_147.setTransform(59.9107,48.775);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#3D2908").s().p("AgXAEIgGgGIgCgDIALgEIAUgEIAUADIAMACQgCAFgFAEQgIAMgQABIgBAAQgNAAgKgKg");
	this.shape_148.setTransform(74,65.9761);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#3D2908").s().p("AgFAPQgPgFgHgNIgDgJIgBgDIAMABQAOABAHACQAFABAOAHIAKAFQgCAEgHAEQgIAGgKAAIgJgBg");
	this.shape_149.setTransform(78.15,68.75);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#3D2908").s().p("AgQAbQgPgGgLgLQgLgKgEgLQgDgKACgIIABgFIAAgBIADAFQADAGAGAGQAJAHAIAEIBYAmQgJADgOACIgLAAQgWAAgUgJg");
	this.shape_150.setTransform(67.8636,67.131);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#3D2908").s().p("AAcAxIgNgFQgVgIgOgVQgNgVABgXIACgPIACgEIA9Big");
	this.shape_151.setTransform(61.1964,61);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#3D2908").s().p("AAHAwIgGgFQgHgHgEgKIgEgMIgCgNQAAgGABgGQABgFADgHQAEgKAHgIIAFgFIAKgGIgDARIgCARIADA2IACAHIABAFIABAFg");
	this.shape_152.setTransform(54.825,51.575);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#3D2908").s().p("AALArQgEgCgFgFQgGgHgEgGIgEgKIgCgLQgBgGACgFIACgKQADgIAGgHQAEgFAEgCIADgDIAGBZg");
	this.shape_153.setTransform(50.43,47.05);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#3D2908").s().p("AghAIQAJgOAQgJQAOgHATABQAIABAGACIgLAKQgNALgLAGQgJAFgTAFIgOADg");
	this.shape_154.setTransform(57.95,36.7191);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#3D2908").s().p("AgkAOQABgFAEgFQAJgOARgEQAQgFAQAJQAGAEACACIADADIgNAEIgYAIIgZAEIgNACg");
	this.shape_155.setTransform(59.275,39.2888);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#3D2908").s().p("AATASQgOgEgIgFQgIgFgLgLIgIgKIANgDQAPgCAMAIQAOAIAFAPQACAHAAAFg");
	this.shape_156.setTransform(76.375,39.206);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#3D2908").s().p("AATASQgQgGgFgFQgIgFgMgKIgJgJIAEgCQAEgCAFAAQARgCAMAIQANAIAGAQQACAIAAAFg");
	this.shape_157.setTransform(78.7792,41.206);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#3D2908").s().p("AAPAVQgPgJgFgGQgHgFgIgOIgGgLIANAAQAOAAAMALQAKALADAOQABAJgBAEIgLgEg");
	this.shape_158.setTransform(80.725,47.8);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#3D2908").s().p("AAIAbQgMgMgFgKQgGgJgDgRIgCgOIANAGQANAHAIAPQAIAOgCAPQAAAJgCAFg");
	this.shape_159.setTransform(84.52,51.875);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#3D2908").s().p("AgSAeIgEAAIAGgLIALgUIANgSIAIgKIACADIAEAJQAEARgJANQgKAPgPACIgHAAIgDAAg");
	this.shape_160.setTransform(87.7865,66.245);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#3D2908").s().p("AgOAZQACgTACgGIANgmIADADIAGAJQAIAQgEAQQgFARgOAKQgGAEgDABIgEABg");
	this.shape_161.setTransform(89.6279,65.625);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#3D2908").s().p("AgOAVIACgVIAIgVIAEgLIADACIAGAIQAJANgEAOQgEAPgMAJIgJADIgDABg");
	this.shape_162.setTransform(92.726,67.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#3D2908").s().p("AgMAPIgBgJQgBgJAEgFQAHgIAPACQAFAPgHAIQgEAFgJABg");
	this.shape_163.setTransform(92.7619,75.805);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#3D2908").s().p("AgBAOQgQgCgMgLIgHgHIgCgDIANgCQAOgDAMABQALABAPAHIAMAFQgEAEgHAEQgLAGgOAAIgEAAg");
	this.shape_164.setTransform(79.525,80.9125);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#3D2908").s().p("AgBANQgJgBgJgIIgHgHIAJgFQALgGAIABQAOACALAOQgMALgMAAIgEgBg");
	this.shape_165.setTransform(82.2,75.3561);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#3D2908").s().p("AgEAOQgTgFgOgMIgKgNIAQAAQAUABANAEQAQAEAQAIIAOAIQgGADgJACQgKADgKAAQgJAAgIgDg");
	this.shape_166.setTransform(73.225,75.15);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#3D2908").s().p("AgLAPQgMgKgCgOIgBgJIABgEIALAFQAOAHAFAEQAHAGAIAKIAHAKQgEACgIABIgDAAQgNAAgKgIg");
	this.shape_167.setTransform(67.7917,75.68);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#3D2908").s().p("AgLATQgSgJgLgTIgEgMIgBgFIAPAHIAfAPIAeAPIAPAIIgEACQgEACgJACQgGACgHAAQgOAAgNgIg");
	this.shape_168.setTransform(59.375,73.2056);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#3D2908").s().p("AALAhQgRgEgKgPQgLgOACgSIADgLIACgEIAJALIAQAVQAGAHAIAPIAHAMIgEABIgLgBg");
	this.shape_169.setTransform(55.034,67.45);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#3D2908").s().p("AANAjQgGgBgEgDQgOgIgDgSQgEgRAKgNQAEgFADgDIACgCIALAjIAEAkg");
	this.shape_170.setTransform(53.3296,59.025);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#3D2908").s().p("AAAAeQgJgLgEgQQgCgNAFgPIAGgNIAHALQAIANACANQADANgDAOIgCANQgFgDgGgGg");
	this.shape_171.setTransform(48.5708,51.525);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#5C3F0F").s().p("AAKASQgLgHgFgEQgFgHgGgKIgEgKIALgCQAOABAJAKQAJAJAAANQAAAIgCAEg");
	this.shape_172.setTransform(88.3,45.05);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#5C3F0F").s().p("AAAAQQgKgIgCgEQgDgHABgJIAAgJIALABQAKADAFAKQAFAKgFAKQgCAGgDADg");
	this.shape_173.setTransform(89.9125,51.125);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#5C3F0F").s().p("AgLAZQgDgPABgKQABgJAGgPIAFgNIAIALQAIAPgBANQgBAOgLANIgJAJIgEgNg");
	this.shape_174.setTransform(97.7238,63.35);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#5C3F0F").s().p("AgLAQQgDgOACgIQABgJAGgKIAOgBQAHAMgCAMQgCANgKAJIgJAHg");
	this.shape_175.setTransform(95.2972,66.225);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#5C3F0F").s().p("AAAAVQgHgCgFgFQgMgLAEgNQABgEADgEIACgCIAIAGIAMAJQADADAGAIIAHAIIgCACQgEADgEABIgIABIgEAAg");
	this.shape_176.setTransform(60.8734,69.5167);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#5C3F0F").s().p("AAMAeIgJgDQgNgGgDgQQgEgQALgLQAEgEACgCIADgBIADALIAHASIABATIABALg");
	this.shape_177.setTransform(49.9328,59.825);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#5C3F0F").s().p("AAPAlQgEAAgHgDQgGgDgGgHIgFgIIgEgJIgBgKQAAgFACgEQACgKAFgFQAEgGAEgCIACgCIACANIAGAYIAFAZIAFAMg");
	this.shape_178.setTransform(44.175,51);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#5C3F0F").s().p("AgNAWQgIgOAEgPQADgKAFgGQAEgFAEgBQADgCAGAAQAIABACAFQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAIgEAAQgDABgCACIAAADIAAAEIgBAKQgDAKgGAMIgFALQgEgDgEgHg");
	this.shape_179.setTransform(39.953,47.425);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#5C3F0F").s().p("AAAAOQgKgBgWgDIgPgDIADgDQAEgEAGgCQAPgLAUAAQATABARAMQAHAFAEAFIgQACIgcACIgEAAg");
	this.shape_180.setTransform(44.5,4.7281);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#5C3F0F").s().p("AhHAaQgBgEACgFQACgGAFgEIAMgHIAMgHQALgFATgHQAMgFARgDQARgEAKAAQAMgBAIAFIAEADIABACIgCgBIgEAAQgHABgIAEIgXAMQgQAHgMAFQgOAFgRADIgOADIgLACQgIABgDAHIAAAGQgDgCgBgFg");
	this.shape_181.setTransform(36.955,7.5475);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#5C3F0F").s().p("AgxAvQgEgCgDgFQgCgHACgHIAGgMIAIgMQAJgLAOgLQAXgSAegGIASgDIAGAAIhmBQQgCACgBADIAAAGQACADADAAIgCABIgFgBg");
	this.shape_182.setTransform(34.7875,11.75);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#5C3F0F").s().p("Ag0AcIgDgEQgBgHAHgKIARgNQAJgHAOgFQAVgJAYAAQAMAAAIABIgQAMQgVANgTAHQgIAEgOAEIgTAFQgHABgCAEIgBAEg");
	this.shape_183.setTransform(39.2375,13.275);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#5C3F0F").s().p("AgmAPIgSgCIAOgLQATgKAVgFQATgEAWAEQALACAHADIgQAIQgUAJgTAEQgMADgOAAIgOgBg");
	this.shape_184.setTransform(43.6,12.4333);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#5C3F0F").s().p("AAjAPQgYgBgLgCQgRgDgSgGIgQgEIAEgCIALgGQAUgIAUADQAVAEAQANQAIAHADAGg");
	this.shape_185.setTransform(56.025,11.9091);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#5C3F0F").s().p("AgDAOQgVgFgVgNIgPgMIAUgBQAaABARAEQAUAFAVAKIARAKQgHACgMACIgQABQgPAAgOgEg");
	this.shape_186.setTransform(55.125,3.8029);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#5C3F0F").s().p("AgBANQgOgDgPgIIgNgGIAOgHQARgGAQAEQASAEAMAMQAHAHADAFIgPABQgSAAgMgDg");
	this.shape_187.setTransform(63.825,7.77);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#5C3F0F").s().p("AAaATQgSgFgKgGQgLgFgQgLIgLgKIAPgDQATgCAPAIQAQAIAKAPQAEAIACAGg");
	this.shape_188.setTransform(75.225,11.805);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#5C3F0F").s().p("AgGANQgPgHgKgNIgJgNIAPABQARACAOAHQAMAGANAMQAHAGADAGIgQABQgRAAgOgIg");
	this.shape_189.setTransform(80.55,15.725);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#5C3F0F").s().p("AgDANQgLgDgLgKIgIgIIALgEQAPgEALAEQAMADALALIAHAKIgMADIgIAAQgLAAgGgCg");
	this.shape_190.setTransform(79.975,20.4143);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#5C3F0F").s().p("AARASQgNgDgIgFQgJgGgIgKIgHgKIAMgDQAPgBALAIQALAHAFANQADAHAAAFg");
	this.shape_191.setTransform(79.1,25.7941);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#5C3F0F").s().p("AAAASQgJgIgDgFQgCgFABgMIACgKIAJADQALAFADAIQAFAIgEAMIgFAJg");
	this.shape_192.setTransform(83.2298,25.625);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#5C3F0F").s().p("AgKAJQgGgIgBgMIAAgKIAKACQALAEAGAHQAKAMgCATQgSgCgKgMg");
	this.shape_193.setTransform(85.875,25);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#5C3F0F").s().p("AARAZIgUgXIgSgYIgIgMIAEgBIAMACQATAEAMAPQAMAOAAAUIgBAMIgBAEg");
	this.shape_194.setTransform(86.525,21.625);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#5C3F0F").s().p("AANAZQgNgLgGgJQgHgJgHgQIgFgMIAPACQAPAFAKAOQAKAMABATQAAAIgCAFIgLgIg");
	this.shape_195.setTransform(97.8,26.9);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#5C3F0F").s().p("AgJAJQgGgGgBgKIABgJIAKAAQAJACAGAGQAIAIgCARIgHAAQgLAAgHgIg");
	this.shape_196.setTransform(98.2034,29.875);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#5C3F0F").s().p("AgKAIQgGgIgBgLIABgLIAKACQALAFAGAIQAKAMgEASQgRgCgKgNg");
	this.shape_197.setTransform(99.0971,37.225);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#5C3F0F").s().p("AAVAeIgXgcQgIgJgNgVIgKgOIAFAAQAFAAAIADQAUAHAOASQAOARABAWQAAAHgBAGIgBAFg");
	this.shape_198.setTransform(98.3083,43.675);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#5C3F0F").s().p("AgLAaQgCgSAAgIQABgIAEgRIAEgNIADACQADADADAFQAKANgBAQQgBASgMALIgGAHIgEACg");
	this.shape_199.setTransform(109.1802,56.3);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#5C3F0F").s().p("AgHATQgFgKgBgJQAAgDACgPIADgLIADABIAGAEQALAIACAPQABANgJALIgIAHg");
	this.shape_200.setTransform(106.0811,60);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#5C3F0F").s().p("AgMATQgCgOACgFQABgIAHgLIAFgKIAIAJQAHALgCANQgDANgLAIIgKAFg");
	this.shape_201.setTransform(105.1491,68);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#5C3F0F").s().p("AgUAhIgEgBIACgDIAkg6IACgDIADADQACADACAGQACAKAAAGIgCAIIgFAJIgGAIIgIAGQgFAEgJACIgFABIgFgBg");
	this.shape_202.setTransform(99.955,70.75);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#5C3F0F").s().p("AgKAPIgKgDIADgJQAEgKAHgEQAKgHARAGQgCARgMAHQgFADgHAAIgFAAg");
	this.shape_203.setTransform(92.725,75.8553);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#5C3F0F").s().p("AgBAOQgKgBgJgKIgEgIIAJgEQANgEADAAQADABANAGIAIAFQgCADgEAEQgIAIgJAAIgDAAg");
	this.shape_204.setTransform(78.5,78.7329);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#5C3F0F").s().p("AgHALQgJgGgFgMIgDgLIALAAQANABAIAHQAOAKADASIgHABQgPAAgKgIg");
	this.shape_205.setTransform(60.225,75.225);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#5C3F0F").s().p("AAEAhQgMgLgFgRQgFgQAGgPIAGgNIAGALQAKASACAJQAEAKABARIAAAOQgGgCgHgFg");
	this.shape_206.setTransform(43.1864,58.575);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#5C3F0F").s().p("AAFAfQgFgCgCgDQgLgKAAgQQABgQAMgKIAHgFIAEgBIABAMQACAQAAAEIgEAVIgCAMg");
	this.shape_207.setTransform(25.4781,40.45);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#5C3F0F").s().p("AAUBCIgFAAQgJgBgGgIQgJgIgGgOQgDgIgBgIIgBgQQABgcARgYQAFgIAGgEIAEgEIgDAWIgEAvIAAAZQABANADAHQADAIAEAFIAEAEg");
	this.shape_208.setTransform(13.35,36.825);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#5C3F0F").s().p("AgCAzIgFgDIgFgHQgHgKgCgLIgCgNIACgNIAEgOIAHgLQAJgMAGgEIAIgDIAGgDIAFgBIgJAQIgLAlIgEAlIABASg");
	this.shape_209.setTransform(23.225,28.25);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#5C3F0F").s().p("AgDApQgFgCgFgGQgGgHgBgLQgCgMAEgKQADgJAJgJQAGgGAHgEQAJgFAGgBIgEAPIgLAcQgHAQAAAKIAAAOIgDgBg");
	this.shape_210.setTransform(17.7167,30.175);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#5C3F0F").s().p("AgdAcQAAgVAMgSQALgRATgLQAKgFAHgBIgHAQQgLAVgHALQgJAPgMAPIgLANQgCgHAAgLg");
	this.shape_211.setTransform(22.35,13.975);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#5C3F0F").s().p("AgHAWIgGgGQgIgMAIgNQAHgOANAAQAGABACABIADABIgDAJQgDALgCADIgKAMIgFAIg");
	this.shape_212.setTransform(18.1435,13.25);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#5C3F0F").s().p("AgSAWQgFgPAIgQQAIgOAOgHQAIgDAGAAIgEANQgEAQgEAHQgEAIgJANIgIAKQgEgFgCgHg");
	this.shape_213.setTransform(12.5288,17.9);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#5C3F0F").s().p("AgGAhQgDgEgDgFQgJgOAGgRQAGgSAPgGQAFgDAEAAIAEAAIgDAMIgGAXIgJAWIgEAMg");
	this.shape_214.setTransform(9.9457,21.175);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#5C3F0F").s().p("AAGAyQgGgBgGgGQgGgHgEgNIgBgNIABgLQACgLAEgLQABgGADgEIAGgIQAFgIAHAAIAGABIgEADQgDADAAAHIAAAQQABAJgCAMIgDATQgCAMABADQAAAHACAEIADADIgCAAIgDAAg");
	this.shape_215.setTransform(3.85,27.6875);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#5C3F0F").s().p("AADAeQgDgCgDgDQgMgKACgRQADgSANgHQAFgDAEAAIADAAIgBALIgBATIgEAUIgCALg");
	this.shape_216.setTransform(2.9857,33.225);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#5C3F0F").s().p("AALAqQgFgCgEgFQgGgFgEgIIgEgKIgCgLIABgKIADgKQAEgJAGgFIAIgHIAEgBIAAADIABBCIACAPg");
	this.shape_217.setTransform(1.875,43.45);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#5C3F0F").s().p("AANAeQgDAAgGgCQgOgGgEgRQgDgQALgLQAEgFADgBIADgBIACALIAGASIAEAeg");
	this.shape_218.setTransform(2.9842,53.475);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#5C3F0F").s().p("AgBAOQgPgCgKgKIgHgKIALgCQAPgDAIABQAIAAAOAGIALAFQgDADgGAFQgLAHgMAAIgDAAg");
	this.shape_219.setTransform(85.375,111.6488);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#5C3F0F").s().p("AAUAXQgQgBgMgJQgNgJgHgNIgFgNIANACQAQAEAKAHQAMAIAJAMIAHALIgIABIgGAAg");
	this.shape_220.setTransform(76.975,113.4083);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#5C3F0F").s().p("AgMALQgHgJACgMIAEgKIAJAFQAJAGADAEQADADAEALIADAJQgEADgGAAQgMAAgIgKg");
	this.shape_221.setTransform(70.1539,120.375);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#5C3F0F").s().p("AgLASQgRgJgDgRQgBgFABgFIAAgDIALAFIAVAKIAcAQIADABIgDADQgDADgFACQgHADgIAAQgIAAgJgEg");
	this.shape_222.setTransform(74.805,121.7831);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#5C3F0F").s().p("AgDAPQgSgEgLgNIgHgMIANAAIAbADQAHABATAGIAOAEQgEAEgIAFQgLAGgOAAIgHAAg");
	this.shape_223.setTransform(79.65,121.6284);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#5C3F0F").s().p("AgnAZQgLgDgEgDIgFgCIAUgGIBjgmIgCAFIgHAOQgHAJgJAIIgLAIQgGAEgIACQgHADgFABIgPABQgJAAgNgDg");
	this.shape_224.setTransform(94.5,118.125);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#5C3F0F").s().p("AgTAWIgKgEIgDgCIALgIIAUgNIAWgLIAMgGIAAAEQAAADgBAHQgEAPgQAKQgKAGgKAAIgLgBg");
	this.shape_225.setTransform(100.1813,120.589);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#5C3F0F").s().p("AgjAOIgLgEIgEgDIAPgGQASgHAQgEQASgEARgBIARgBQgDAGgIAHQgPAOgUAFQgIABgIAAQgMAAgMgDg");
	this.shape_226.setTransform(102.925,125.2964);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#5C3F0F").s().p("AgnAbQgIgBgHgCIgFgBIASgKQAVgLATgHIAqgPIATgGQgDAHgJAKQgQATgXAJQgSAIgVAAIgJAAg");
	this.shape_227.setTransform(110.95,121.3424);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#5C3F0F").s().p("AgtAhIAMgNQAQgQAOgJQAKgIAXgMIAQgHQgBAHgFAKQgKARgSAOQgPAMgYAEIgNABg");
	this.shape_228.setTransform(117.675,115.925);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#5C3F0F").s().p("AgkAvIgFAAIAPgNIAkgnIAegqIACAMIAAAJQAAALgEAMIgGAMIgJAMIgLAKIgLAHQgLAHgKABIgJABIgEABIgDgBg");
	this.shape_229.setTransform(123.825,106.625);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#5C3F0F").s().p("AgXAkQAHgVALgRQAJgSAOgSIAMgPIABAUQgCAYgLATQgMAUgTAOIgMAIIgFACg");
	this.shape_230.setTransform(123.875,99.125);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#5C3F0F").s().p("AAMgwIADAEIAFAMQAHAUgIAVQgIAVgRAMQgHAEgFACIgEABg");
	this.shape_231.setTransform(124.0633,87.925);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#5C3F0F").s().p("AgDAiQgHgVgCgMQgCgMAAgVIABgQIAEADIAIAIQAMAPADAUQADATgIASQgDAJgFAFg");
	this.shape_232.setTransform(122.0909,74.475);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#5C3F0F").s().p("AgQAfIAIgfQADgMAHgTIAGgPIADAEQACADADAHQAHATgGAUQgGAUgPAMIgLAHIgEABg");
	this.shape_233.setTransform(127.1583,78.4);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#5C3F0F").s().p("AgGAhQgFgQgCgRQgBgNADgSIAEgQIAJAMQAKAQACASQABARgIASQgEAJgEAFg");
	this.shape_234.setTransform(125.8681,74.6);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#5C3F0F").s().p("AAIAiQgLgTgFgNQgGgOgEgUIgDgQIAPAJQAPAMAIAUQAHASgDAVQgBAKgDAHg");
	this.shape_235.setTransform(120.2429,61.675);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#5C3F0F").s().p("AAIAaQgJgLgHgLQgGgJgEgQIgDgNIAOAEQAOAHAIAOQAIAOgCAQQgBAJgCAFg");
	this.shape_236.setTransform(117.72,63.325);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#5C3F0F").s().p("AAEAgQgMgKgFgQQgFgOAEgRIAGgNIAIALQAIANAEAMQAEALABARIgBANQgFgCgHgFg");
	this.shape_237.setTransform(113.0309,63.275);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#5C3F0F").s().p("AgJAeQgEgQAAgOQAAgNAFgQIAFgNIAIALQAJAPAAAQQgBARgJAPIgJALg");
	this.shape_238.setTransform(108.8725,69.075);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#5C3F0F").s().p("AgSAZIADgLIAGgRQADgEAJgKIAIgIIAGAKQAEAOgHALQgHANgNACIgJABg");
	this.shape_239.setTransform(110.413,77.775);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#5C3F0F").s().p("AgPARQgBgNAEgJQAFgJAKgIIAKgFQAHASgIAPQgHAQgSAGIgCgLg");
	this.shape_240.setTransform(114.4668,82.85);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#5C3F0F").s().p("AgbAiIAIgMIAQgXIASgVIAKgLIABAEQACAFAAAGQACASgMAPQgMAPgSAEIgLAAg");
	this.shape_241.setTransform(114.0388,95.1);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#5C3F0F").s().p("AgbAbIAGgMQAJgOAHgHQAJgIAMgHIAMgFIgBANQgDAQgLAKQgLAMgPACIgKABg");
	this.shape_242.setTransform(114.075,99.75);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#5C3F0F").s().p("AglAKIgMgGIgDgEIBpgQIgCAEIgJAKQgQAPgWAEIgLAAQgPAAgPgHg");
	this.shape_243.setTransform(99.275,103.1454);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#5C3F0F").s().p("AgnAJIgRgHIARgFQATgHAUgCQASgDAVABIASACQgFAFgJAGQgTAMgVADIgMABQgPAAgPgGg");
	this.shape_244.setTransform(93.875,92.364);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#5C3F0F").s().p("AgZAVIAGgLQAKgMAFgEQAHgHAMgFIALgEIAAAMQgCAOgLAKQgLAJgOAAg");
	this.shape_245.setTransform(99.425,83.5);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#5C3F0F").s().p("AgVASQgBgEABgFQACgKAMgJIAJgEIAIgCIAGgCIADgCIACACQABAEAAAFQgBAIgEADQgEAHgGADQgFADgMADIgHACIgCABg");
	this.shape_246.setTransform(96.0563,80.6);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#5C3F0F").s().p("AgUAQIgMgFIAJgIQALgJAJgEQAKgFANgBIANAAQgBAFgEAGQgIANgMAGQgIADgJAAIgLgBg");
	this.shape_247.setTransform(90.275,81.9696);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#5C3F0F").s().p("AgDAPQgXgCgTgLQgEgCgDgCQgDgEgBgDQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBIAAgBIADADQAAAAAAAAQABAAAAAAQABAAAAAAQABABABAAIAGgBQAVgCAVACQARABAXAHIARAEQgGAFgLADQgRAGgSAAIgIAAgAg3gOIAAAAIAAAAg");
	this.shape_248.setTransform(76.1917,85.195);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#5C3F0F").s().p("AgLAPQgOgKgEgPIgCgKIAAgEIANAFQAOAGAIAHQAKAHAJALIAJAKQgFADgJAAIgDAAQgOAAgMgKg");
	this.shape_249.setTransform(58.325,80.2543);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#5C3F0F").s().p("AALAbQgPgDgJgLQgKgMAAgOIACgOIAKAHQAMAJAGAHQAFAGAHANIAFAMIgGABIgHgBg");
	this.shape_250.setTransform(36.675,65.6);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#5C3F0F").s().p("AAVAyQgEgBgIgFQgSgNgKgVQgJgTAEgYIADgOIACgEIAJAQIAQAjIAUA0g");
	this.shape_251.setTransform(22.151,63.375);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#5C3F0F").s().p("AANA1IgIgEQgIgGgIgKIgGgMIgEgOIgCgNIACgOQADgNAGgIIAKgLIAEgEIgCAMIABAaIAIAoIAGASIAJARg");
	this.shape_252.setTransform(28,55.775);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#5C3F0F").s().p("AgIAUQgFgLAAgJQABgJAHgLQADgFACgEIAHAJQAHALAAAKQgBAKgIALIgHAIIgGgKg");
	this.shape_253.setTransform(20.2246,47.65);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#5C3F0F").s().p("AgEAUQgKgJACgNQACgNALgHQAGgDAFAAIABAKIABAQQAAADgGANIgEAJQgEgBgEgFg");
	this.shape_254.setTransform(16.9896,47.2469);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#5C3F0F").s().p("AgNAAQABgLAHgMIAHgJIAGAKQAGAMAAALQgBASgOAOQgNgPABgSg");
	this.shape_255.setTransform(118.4234,90);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#5C3F0F").s().p("AgWAWQgDgEAAgFQgBgHACgGQADgJAHgGQAHgHAHgBQAGgCAIABIAJAEIADACIgJAIIgOAOIgPANIgJAIg");
	this.shape_256.setTransform(108.8607,87.43);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#5C3F0F").s().p("AgnAQQABgFADgFQADgGAHgHIAIgGIAKgEIAJgCIAKAAQAJABAHADQAGADAEAEIADADIgpANIgaAIIgOAEg");
	this.shape_257.setTransform(90.975,87.25);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#5C3F0F").s().p("AAkAWIhGgkIgFgBIgEgBIADgDIAFgDIAHgDQAIgDAMAAIAKACIAMAEIALAIIAIAIQAHAIACAJIACANIAAAFg");
	this.shape_258.setTransform(80.125,93.2714);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#5C3F0F").s().p("AAJAkIgBgHQAAgFgDgKIgNggIgIgOIgEgFIgHgIIALAAIAIACQAIACAJAIIAIAJQAEAFADAHQADAGAAAGIABAMQgBAKgFAKIgEAHIgEAEIgEADg");
	this.shape_259.setTransform(63.225,88.475);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#5C3F0F").s().p("AAPAKQgDgOgFgJIgGgKIgGgIIgCgCIgCgBIgDgCIgJgDQgIgBgFAEIgDAFQgBgCABgFQABgJANgFQAGgDAIAAIAIABIAHADQAJAEAGAHQAHAHAEAIQADAIACAKQACAIgBAHQAAALgEAPIgIAQIgDAGg");
	this.shape_260.setTransform(44.8063,69.125);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#5C3F0F").s().p("AAHAdQgCgXgEgMQgEgRgKgKQgEgDgGgCIgEgBIgBAAIABgBIADgDQAGgDAJAAQALABAJAIQAMAIAFAQQADANgDANQgDAIgFALIgLAPg");
	this.shape_261.setTransform(33.5375,48.3219);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#5C3F0F").s().p("AABANQgHgEgCgDIgDgKIgFgHIACgCQADgDAEgBQAMgEAIAMQAEAFAAAGQAAAHgDAEQgCADgDACIgDABIgFgGg");
	this.shape_262.setTransform(33.175,56.6342);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#5C3F0F").s().p("AAIAVIgEgGIgHgJIgEgGIgCgCIgEgHIgFgFIgCgCIACgCIADgDIAFgBQAGgCAHACIAHAEQADACADAEIAEAIIABAHQAAAHgDAGIgDAEIgDADIgDABg");
	this.shape_263.setTransform(36.975,72.4929);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#5C3F0F").s().p("AAXAfIgDgGIgHgNIgWgcIgMgKIgFgEIgIgGIAFgCIAFgBIAIAAQAJAAAKAEIALAHIAJAJIAHAMIAEAKQACAKgCALIgCAIIgDAFIgDAEg");
	this.shape_264.setTransform(47.25,82.2917);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#5C3F0F").s().p("AAPAWIghgqIgIgHIgDgDIAJgDIAGAAQAJgBAIAEIAJAFIAIAIQAFAGABAEIADAJQACAKgCAIIgCAHIgDAEIgCADg");
	this.shape_265.setTransform(47.2194,89.6159);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#5C3F0F").s().p("AAvAeQgEgGgMgNIghgcIgMgIQgPgIgIgDIgJgEIgOgEIAGgCIAIgCIAMgCQANgBAQAFIAPAGQAJAFAHAGQAIAHAGAGIAJAOQAJANACAOIABALIgBAPg");
	this.shape_266.setTransform(61.95,96.4159);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#5C3F0F").s().p("AgvAMQABgEAGgGQAIgHAIgEIAKgEIANgCIALAAIALACQAKAEAHAFIAKAJIACAEIgQAAIgQABIgzAEIgLACIgGABg");
	this.shape_267.setTransform(96.45,113.15);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#5C3F0F").s().p("AAAAOQgOgBgUgGIgPgFIANgIQAUgIARABQATABASAMQAIAFAFAFIgQADIgZABIgKAAg");
	this.shape_268.setTransform(82.7,99.6861);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#5C3F0F").s().p("AgzANIAIgLQAIgHAKgFIAMgEIANgCIANACIAMADQALAFAHAGIAGAGIADAFIACAEIgFgBIgFAAIgHgCIgRgBIgUAAIgJAAIgKABIgRACIgHAAIgKADg");
	this.shape_269.setTransform(85.325,106.1);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#5C3F0F").s().p("AAdAUIgfgNQgIgFgVgNIgNgKIAQgDQAVgCARAJQASAKAKARQAFAJABAGg");
	this.shape_270.setTransform(72.35,107.6076);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#5C3F0F").s().p("AAiAWIgegXIghgSIgRgGIAFgDIAFgCIAIgDQAIgCAPABQAFABAGADQAHACAGAEQAHAEAEAFIAJALQAGAMABAIIABAIIgBAHIgBAFg");
	this.shape_271.setTransform(65.35,111.7469);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#5C3F0F").s().p("AAeAXIgegUIgegVIgOgKIAFgBIANgCQAYAAAQAMQATANAIAUIAEANIAAAFg");
	this.shape_272.setTransform(55.025,100.05);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#5C3F0F").s().p("AAJAXQgMgPgDgFQgEgEgHgSIgEgLIANABQAQAGAIANQAIAMgCAQQgBAIgDAGg");
	this.shape_273.setTransform(53.144,105.45);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#5C3F0F").s().p("AAuAZIgQgQIghgWIgMgGQgIgEgNgEIgXgEIAGgEIAHgDIAKgDQAKgCASABQAKACAFADQAIADAIAFIANALQAGAFAFAIQAJAMACAMIACAKQABAFgBADIgBAHg");
	this.shape_274.setTransform(40.325,98.9469);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#5C3F0F").s().p("AAQAcQgNgLgJgMQgIgLgIgRIgGgOIAFABIALAEQAQAHALAOQALANACAUQABAJgBAHg");
	this.shape_275.setTransform(38.27,84.7);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#5C3F0F").s().p("AAJAXIgZgtIgGgIIgCgDIAEgBQAEgBAHABQAGABAIAFIAIAHQAEADACAFIAFAKIABAJQAAAKgDAHQgCAGgDADIgDADg");
	this.shape_276.setTransform(25.525,96.255);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#5C3F0F").s().p("AAUAMIgIgHIgZgVIgPgMIgRgKIAFgBIAHgBIAJgBQAMAAAKAEIAMAGQAFADAHAGIAKALIAHALQAGAMAAAKIABAIIgCAMg");
	this.shape_277.setTransform(28.075,89.6417);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#5C3F0F").s().p("AAPAgIgTgeIgRggIgHgPIAFABIAMAEQATALALASQAKAQgBAYIgCAMIgBAFg");
	this.shape_278.setTransform(19.5043,75.35);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#5C3F0F").s().p("AgFgLIgHgIIgNgQIgOgOIAMABIAJACQAKACAKAHIALAIIALALIAIAMIAFAMQADAMAAALIAAAJIgCAMg");
	this.shape_279.setTransform(24.475,70.25);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#5C3F0F").s().p("AALAWQgMgNgEgGQgEgEgJgRIgFgMIANABQARAEAJANQAKANgCARQgBAIgDAFg");
	this.shape_280.setTransform(26.7174,62.075);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#5C3F0F").s().p("AgOAbIgDgFQgEgFgBgKQgBgFACgDQAAgFADgFQACgGAEgCIAHgHQAFgFAJgBIAGAAIAEABIAEACIgCADQgBAAAAAAQAAAAgBABQAAAAAAABQAAAAgBAAIgDAFIgHAOIgMAZIgDANg");
	this.shape_281.setTransform(20.655,54.85);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#5C3F0F").s().p("AgGAxIgFgEIgGgGQgGgIgDgOIgBgOQAAgFACgJIAGgNQACgFAHgGQAJgKAJgDIAIgDIAHAAIAFAAIgDADIgEAFIgFAGQgDADgGAMIgIAcIgCAKIgBASIAAAHIADALg");
	this.shape_282.setTransform(6.375,42.8625);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#5C3F0F").s().p("AANBHQgFgFgIgKIgGgLIgHgOIgFgRIgDgRQAAgSAGgSIAFgOIAHgNQAFgGAFgBQAGgCAEAEQAFADgBADQAAgCgFgBQgDAAgCACQgCACgBAFIgBALIgBAOIAAAeIACAdIAKAyg");
	this.shape_283.setTransform(13.7002,53.3);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#5C3F0F").s().p("AgFAgQgHgSgBgNQgBgPADgQIADgPIAJAMQALAPACASQABAQgIAQQgDAJgEAFIgFgOg");
	this.shape_284.setTransform(104.5118,52.85);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#5C3F0F").s().p("AgQAbIAKgbIARgnIACADIAGAKQAHASgIASQgHASgRAIQgFACgGABIgEABg");
	this.shape_285.setTransform(113.769,70.4);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#5C3F0F").s().p("AgLAAIgDhAIAFAEIAJAMQAGAJAEALIAEAOIACAOIgCAPIgEAOQgFANgFAIIgKALIgFAEg");
	this.shape_286.setTransform(120.95,76.4);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#5C3F0F").s().p("AAFAJQAAgKgCgIIgCgGIgDgHQgFgFgHgEIgGgCQgDgBgCABIgEABIgBAAIACgEIAFgFQAFgDAEgBQANgCALAGQAIAEAEAGQAGAHACAJQADAOgFAPQgDAIgJALIgKAKIgEADg");
	this.shape_287.setTransform(119.3279,83.2653);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#5C3F0F").s().p("AgGAqIACgLIABgPIgFghIgFgOIgDgGQAAgCgCgCIgDgEIAFAAIAGABQAEABADACQAIAEAGAKQAEAEACAGQADAGABAHIAAAMQAAAHgDAFQgDALgIAGQgCADgEACIgEADIgEABg");
	this.shape_288.setTransform(122.4083,92.025);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#5C3F0F").s().p("AgQAkIADgHIABgFQACgFAAgGIABgYQABgGgBgFIgBgFIgDgIIAFAAIAEACIAFADQAHAEAEAIIAEAKIABAKIgCAKIgFAJQgEAIgHAEIgGACIgFABg");
	this.shape_289.setTransform(119.75,98.875);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#5C3F0F").s().p("AgSAfIgEgBIACgDIAFgHQAEgGAHgOIAKgTIAFgMIADACIAGAJQADAHAAAIIgBAIIgDAKQgCAEgEAEIgHAGQgGAEgIABIgDAAIgHgBg");
	this.shape_290.setTransform(110.725,106.2313);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#5C3F0F").s().p("AgWAYIgLgDIgEgCIAMgIIAYgQIAagNIANgGIAAAEIgDALQgGAQgRALQgMAHgNAAIgJgBg");
	this.shape_291.setTransform(99.375,106.586);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#5C3F0F").s().p("AgWArIgGgCIAFgCIAKgIQAMgLACgSQADgPgHgQQgCgEgFgGIgEgEIAGAAQAHABAGADQAKAFAHAMQAIANgCAQQgDAQgMAKQgJAIgLADIgHAAIgIgBg");
	this.shape_292.setTransform(99.02,93.1321);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#5C3F0F").s().p("AgaAnIAJgMIAeg4IADgKIADAEIADAFIADAGQADAJgBAJQAAAFgBAFIgFALIgHAJQgCADgGAEQgIAGgHACIgHABg");
	this.shape_293.setTransform(110.2786,93.05);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#5C3F0F").s().p("AADAfIgBAAIACgDQACgDAAgFQABgFgDgGIgCgFIgJgMIgUgUIAPgDQAJAAAGADQAMAEAHAJQAEAGACAHQABAGgBAFQgDAMgHAGQgFAFgHAAg");
	this.shape_294.setTransform(104.725,77.475);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#5C3F0F").s().p("AATAWIgDgEIgIgIIgIgIIgEgDIgFgEIgJgHIgIgEIgDgBIACgDIAEgDIAGgDQAIgCAJABQAEABAEACQAGADADADQAFAEACAFIAEAJQADAHgCAJIgCAGIgCAEIgDADg");
	this.shape_295.setTransform(100.815,58.8969);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#5C3F0F").s().p("AglARIAAgFIACgGQACgGAHgIIAJgGIAKgEIAKgCIAKABQAKADAGAFIAFAFIAEAHIgEgBIgKABIgMACIgZAIQgFABgHADIgMAGg");
	this.shape_296.setTransform(57.725,33.0438);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#5C3F0F").s().p("AgYAZIgCgEIgDgGQgBgJACgIIAFgJQACgEAFgEQAGgEAEgBIAJgCQAJgBAIAEIAFAEIADADIACADIgIACIgEACIgJAFIgYAUIgFAIIgBADg");
	this.shape_297.setTransform(17.3719,36.9719);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#5C3F0F").s().p("AggAgQgEgHgBgJQgDgNAFgLQAHgSASgHQAJgDAKACQAJACAHAGQAGAFADAGQACADADAJIgBAJQAAAEgDADIgEAFIAAgGIgBgFIgEgGIgGgEIgIgEIgHgBIgGABQgJAEgEAFQgGAGgEAJIgDAOIgBAFg");
	this.shape_298.setTransform(24.1554,19.1979);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#5C3F0F").s().p("AgeAOQgBgJACgIQAEgNALgIQAHgEAHgBQAJAAAFACQAMAFAEAJQACAEAAAFQAAAEgCABIgCACIAAABIgBgBIgBgDIgDgCIgEgCQgEgBgGABIgFABIgDACIgJAHIgJAMIgJAMQgDgGgBgKg");
	this.shape_299.setTransform(28.0357,44.675);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#5C3F0F").s().p("AAaABIgDgLQgBgCAAgBQgBgBAAAAQAAgBgBAAQAAABAAABIgCAAIgXAFIgWAIIgOAIIgGAEIACgGQAEgJAFgHQAIgKANgJQAHgEAIgDQALgEAHgBQAKAAAGAFQAGAEAEAGQACAEABAGIABAPQgBANgCAKQgDAMgEAIg");
	this.shape_300.setTransform(41.775,36.425);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#5C3F0F").s().p("AAWAZQgKgRgMgNIgDgEIAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAgBgBAAIAAAAIgeARQABgFADgHQADgIAFgHIACgEIACgCIADgDIAOgLIAMAJIAKAJQAJAKAEAPQADAJgBANIgDAPIgDAFg");
	this.shape_301.setTransform(50.0625,41.4);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#5C3F0F").s().p("AASAWIgFgQQgEgIgFgGIgEgEIgGgEQgJgCgFAAIgGABIgFACIgCADIgBAAIgBgBIABgEQAAgDACgDQABgEAFgEQAKgIANAAQAGAAAIADQAHADAHAIQAKAMAAAOQABALgEALQgCAGgFAHIgDAEg");
	this.shape_302.setTransform(93.3528,45.375);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#5C3F0F").s().p("AAcAYIgGgVQgEgJgGgGQgGgGgJgCQgHgBgNABQgIAAgHACIgGABIAEgFQAFgGAHgFQALgIAOgCQAGgCAKADQALADAHAHQAHAGAEAKQACAHABAJQABANgFAMQgCAIgEAHIgDAFg");
	this.shape_303.setTransform(87.3775,33.8469);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#5C3F0F").s().p("AAmAcQgCgHgEgFQgLgPgQgFQgQgFgRAFQgIACgDACIgFADIABgFQAAgFAHgIQAHgJANgFQAPgGAPAFQAPAGAKAOQAGAKAAANQAAAKgDAFIgCAFg");
	this.shape_304.setTransform(80.55,36.456);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#5C3F0F").s().p("AALAIIgKgJIgKgFIgMgCQgGABgDADIgDACIAAABIgBgBIAAgEQAAgHAGgGQAGgIANgCQAGgCAFACQAIABAHAFQAKAHAEANQAEAIAAAJQAAAKgBAHg");
	this.shape_305.setTransform(77.55,27.7125);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#5C3F0F").s().p("AgxAZIAAgGIACgJQADgKAIgJIAKgJQAEgDAJgEIANgEIAOAAQANABAIAGIAHAFIAFAEIADAFIgLgBIgHABQgFAAgMADIgSAFIgSAIIgOAKIgGAEIgHAIg");
	this.shape_306.setTransform(29.4375,36.1);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#5C3F0F").s().p("AgwAVIAAgGIADgIQADgIAJgJQAGgGAFgCQAIgEAFgBIANgCIANABQANAEAHAGIAGAGIAGAJIgRgCIgRAAIgjAJIgOAHIgGAEIgEAEIgEADg");
	this.shape_307.setTransform(33.075,27.475);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#5C3F0F").s().p("AAxAcIgIgMQgPgQgVgEQgVgEgUAJQgHADgGAFIgEAEIABgGQACgIAFgIQAJgMAMgFQARgJARAEQASAEAMAOQAJAJAEAOQACAJgBAJIgCAGg");
	this.shape_308.setTransform(34.12,20.449);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#5C3F0F").s().p("AAmAVIgJgIQgHgFgHgCQgIgDgHAAQgIAAgGACQgGACgIAFIgJAIIgDADIgBgFQgBgHADgHQAEgKAJgIQAMgJAPAAQAPAAAMAKQAJAJADAJQADAIgBAGIgBAFg");
	this.shape_309.setTransform(45.675,25.275);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#5C3F0F").s().p("AAhAUQgCgDgGgFQgEgEgIgCQgHgDgGAAQgFAAgHADQgHACgFAEQgFAEgDAEIgCAFIgCgFQgCgIACgGQABgJAJgKQALgKAPgBQAQABALAKQAIAJADAKQABAIgCAGIgBAFg");
	this.shape_310.setTransform(50.6446,17.5);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#5C3F0F").s().p("AAZAcIABgGIgBgHIgDgHQgCgEgDgDIgHgEQgDgCgEAAIgHAAIgIADQgIADgHAIQgEAFgDAHIgCAFIgCgGIgCgHIABgKQACgMAKgLQAHgHAHgDQAKgEAJABQAKABAJAHQAHAGAEAIQADAHABAHQABAHgCAGQgCAGgDAEIgFAFIgEACIgCABg");
	this.shape_311.setTransform(58.6643,25.8563);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#5C3F0F").s().p("AgDApQACgHAJgLIAJgKQAEgGABgEQAAgDgCgFIgGgKQgDgEgGgDQgFgBgFAAQgLAAgMAIQgGAFgHAIIgFAFIAAgCIABgFQABgKAGgKQAKgQASgGQALgDALACQANAEAJAJQAKALACALQADAMgGAMQgFAKgJAFIgNAHQgMAFgEAEIgDAGQgBgCABgGg");
	this.shape_312.setTransform(65.9279,24.6979);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#5C3F0F").s().p("AgOAQIgMgDIAFgKQAGgKAKgEQANgHASAGQgGARgOAIQgGADgIAAIgGAAg");
	this.shape_313.setTransform(86.05,116.7373);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#5C3F0F").s().p("AgXAOIgBgBQgBgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBgFABgCIAEgDIADgBQAGgHAIgEQAKgFANACQAHABAFACQgCAFgFAFQgJAKgJAEQgHAEgIAAIgFABg");
	this.shape_314.setTransform(78.7875,116.9964);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#5C3F0F").s().p("AAiAXIgHgKQgHgGgFgCQgGgDgIgBQgHAAgHACQgHACgGAFQgFADgDAFIgDAEIgCgFQgBgGACgIQADgKAKgJQAMgKAQAAQAQACALAMQAIAJACALQABAKgDAFIgCAEg");
	this.shape_315.setTransform(29.6726,9.0989);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#5C3F0F").s().p("AhCBTQgEgOAAgPQgFAEgFALQgGAPgCAJIgEAVIAAgFIAAgRIAEgaQACgIAFgNIALgYIACABQABgHADgFQAEgGAEgCIADgCQACgVAIgVIAJgTIARgbIAAgBIABABIACADIABAAIACgJIABgDIADgEIAFgGQAFgFAGgCQAGgDAIAAIADAAIADABIACADQABABAAgCIAJgfIALgUIACgDIAAgBIABABIABABIAQAUIAVAdIgkgiIAAABIgBACIgDAKIgEAYIgBAZIAAAJIgBABIAAABIgBAJIAAAFIgOgXIgCgCIgBgDIgEgDIgCgBIgGACIgFAEIgBACIgBACIgBABQgDALAJAbIAYBBIgyg6IgBgBIAAgBIgBABIgEAKQgIAXgCAVQACAEgBAEQgBAHgFAEIgPANQgCAMABAMIABAKIAAABIAAACIACBZg");
	this.shape_316.setTransform(13.6625,25.975);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#5C3F0F").s().p("AhxAnQABgKACgKQAFgNAKgLQAGgHAHgEQAJgGAKgCQAJgCANABIALADIADACIABAAIACAAIAAAAIAAgBIABgCIADgEQADgDAGgDQAHgDAEAAQAFAAAGABQAGACAGADIAEADIADADIAAAAIABAAIABgCIAJgHQAHgFARgFIABgBIAFAJIAOAjIADALIAaghIgbA/IgbgwIgBgDIgBgCIAAAAIgDgCIgBACIgCABIgCADIAAABIgGAIIgPAlIgMghIgEgHIgBgCIgCgBIgBAAIgBgCIgEgBIgCgBIgCABIgCABIAAABIgBABIgBADIgIAEIgCABIgCABIABAAIAEANIAAgBIgGgLIAAAAIgCAAIgIAEIgIgHIgCgCIgBAAIgBAAIgHgDIgOgBQgNAAgMAJQgPAMgHATIANgGIgTAPg");
	this.shape_317.setTransform(43.75,9.075);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#5C3F0F").s().p("AAhAcIgBgBIgBgBIgCgBIgCAAIAAABIgBgBIgBgBIgSADQgEgLgJgPIgKgLIgDgCIAAAAIgEADIgRAWIgVgNIAEgHIABgBIABgFQgCgBgEABIgBABIgCACQgDACgCADIgMAQIgBhCIAJAfIAGgGQAGgEAIgDIAQgEIABAHIARgPIAWAWQAHAHAEAIQAGAKAEAIIACAAQAGAAAEACQAEACAEAEIACAEIABAEIAAAHIAJgFIAPgEIAJAAIADAAIgLAEIgMAIQgEACgGAHIgMAPg");
	this.shape_318.setTransform(72.225,15.025);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#5C3F0F").s().p("AAEAWIAFgGQADgFgBAAIAAgDIgBgEIgDgCIgBgBIAAgBIgBAAIgFAAIgCAAIgCAAIg8AOIAzgkIABgBIABgCIADgEIABgCIABAAIACgIIAAgDIgBgDIgBgDIgBgBIgBAAIgLAEQgHACgFAAIgLgBIAJgEIALgFIAFgFIAKgKIADAAIADACIAHAGIAFAJIADAFIABAFIAAAKIAAAGIAAACIAAAAIACAAIABAAIAFADIAJAIQAGAJAAAHIAAAEIgCACIAAABIABAAIAAABIAEAAIAVgGIACAWIAAADIAAAbIgMgcIgBgEIgDADIgCABIg0AUIgDABIgxASg");
	this.shape_319.setTransform(90.45,26.55);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#5C3F0F").s().p("AAOAhQgBgLgDgHIgEgHIgGgEIgCgCIgBAAIgBAAIgBAAIgFACIgWAKIAOgrIAFgKIAJgNIACAXIAAADIABADIABABIAAAAIACgBIAAAAIABAAIAFABIAGADQAIAFAFAJQAFAFABAKQAAANgFAMIgIAOIgEAEg");
	this.shape_320.setTransform(102.5271,37.25);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#5C3F0F").s().p("AgeASQgBgEACgGQACgPARgJQAPgIAPAHQAGADACADIADACIgLAGQgMAHgHAEIgTAIIgLAGg");
	this.shape_321.setTransform(107.605,44.0492);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#5C3F0F").s().p("AgSAZQAAgRAGgNQAGgNAMgLIALgJQAFAXgKAVQgJAVgUAMIgBgOg");
	this.shape_322.setTransform(110.6333,47.175);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#5C3F0F").s().p("AAgAUIgEgCIgEgDIgigNIgRgDIgIAAIABgEIADgEIAFgEQAGgGAKgBIAKgBIAKACQAFACAEADIAIAHQAHAHABAHIABAHIgBAIg");
	this.shape_323.setTransform(113.425,54.2417);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#5C3F0F").s().p("AgLAdIgGgCIgEgCIgDgCIAGgEIADgDIAGgIIADgFIADgDIACgEIAIgNIABgEIACgHIADACIAEADIADAEQAFAHAAAJIgCAIIgFAJIgGAIIgIAFQgGACgFAAIgEAAg");
	this.shape_324.setTransform(122.2,63.8225);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#5C3F0F").s().p("AgTAjIgEAAIAlhFIACADIAGAJQACAIAAAIIgBAJIgEAJQgDAFgDAEIgHAGQgGAFgIACIgHABIgEAAg");
	this.shape_325.setTransform(125.5292,71.9167);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#5C3F0F").s().p("AgQA1IADgIQAEgGADgOIAEgYIAAgXIgEgVIgDgIIgFgMIAGACIAGAEIAHAHQAIAIAGAOIAEAPIABAQQgCAOgBADQgCAHgFAHQgHANgJAHQgCACgGAEIgNAEg");
	this.shape_326.setTransform(128.675,83.075);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#5C3F0F").s().p("AgQA/QAGgHADgGQAIgTgDgbQgDgNgLgjIgHgWIASAOQAIAJAIAMQAKAPADAQQADARgHASQgHAPgLAJQgIAGgIACIgFAAIgCABg");
	this.shape_327.setTransform(128.345,91.05);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#5C3F0F").s().p("AgUAzIATgzIAUhBIAFgHIAHAlIgBAVQgDAPgDAIQgLAdgWAVIgPALIgGADg");
	this.shape_328.setTransform(124.35,99.85);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#5C3F0F").s().p("Ag1A6QABgHAEgLQAIgfAVgYQAVgaAcgNQALgGAGgCIAHgCIg1BCIglAsIgSATg");
	this.shape_329.setTransform(116,111.5);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#5C3F0F").s().p("AgnAnQAJgcAOgWQAKgPAHgKIAKgLIAKgJQALgHAIADIAFACIABABQgCAAgEABQgFACgEAIQgDAEgCAGIgFAMQgIASgGAIQgNAXgVAVIgSAQIAGgXg");
	this.shape_330.setTransform(107.725,116.3171);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#5C3F0F").s().p("AgkAeQASgSARgNIAkgeIARgNIgCAGQAAAGgEAJQgKAYgUARQgTASgaAGQgLACgFAAIgGABg");
	this.shape_331.setTransform(96.525,121.125);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#5C3F0F").s().p("AgoAgIgRgDIgFgCIATgJIArgUIA/gdIgCAFQgDAIgFAGQgQAVgZANQgVAKgXAAIgIAAg");
	this.shape_332.setTransform(85.675,123.9648);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#5C3F0F").s().p("AALAfQgEgBgFgDQgMgIgCgPQgDgPAKgMQAEgFACgBIADgCIADALQAGAPABAFIAAAUIAAAMg");
	this.shape_333.setTransform(11.8417,68.775);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#5C3F0F").s().p("AAOA1IgGgDIgGgFQgHgHgGgLIgFgMIgCgOQAAgGACgHIAEgNQAFgLAHgHIAHgFQACgCADgBIAFgCIgEAKIgBAHQgCAFgBAMIAAAdIABAKIADARIAGARg");
	this.shape_334.setTransform(8.825,60.525);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#5C3F0F").s().p("AAAAgQgDgCgEgEQgGgGgCgHIgBgJIAAgJIAEgJIAFgHQAGgHAFgCQAGgCAEAAIADAAIgDAMIgEAUIgFAVIgCAJIAAADg");
	this.shape_335.setTransform(6.4667,50.475);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.rf(["#88520D","#C06513"],[0,1],0,0,0,0,0,65.1).s().p("AAhJNQgZgUAPgTQAPgTApgDQiFhShlhPQg/gxhcAMQgdAEgcAKIgWAJQAWgLgCgmQgCglgagvQhBhziCgxQhgglAejEQAMhQAfhMQAfhMAjgmQA6g/BKgZQAlgNAZAAIAsgNQA0gNApAFQAoAEAYgiQALgRAEgSIA3AoQBDAxA6AoQAwAhAtAGQAxAGAtAbQA6AjAdArIBcCKQBBBZATALQAMAIANgKQAGAAAAAIIgBAZQgBAzAmA+QApBDAUADQAKACACgMIABAzQAAA/gJA/QgJA/AZAzQANAZAOANQgMgCgZAHQgwAOg7AtQg0ApAOAmIAHAUQAAAIgTADQgdAFglAUQgiASgWABIhCABQjCAAg5gug");
	this.shape_336.setTransform(66.6323,63.5083);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f().ls(["#F0EFE5","#EFEEE2","#EDEBD8","#E9E4C8","#E4DCB2","#DDD195","#DBCC8A"],[0,0.251,0.447,0.627,0.792,0.949,1],-0.5,0,0.5,0).p("AAAgCIAAAF");
	this.shape_337.setTransform(25.1,4.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.semillas, new cjs.Rectangle(0,0,133.3,127.2), null);


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
	this.shape.graphics.f("#FFCA2F").s().p("AhWCLIABgfQAGicAAhPIAAgCQAAgRADgEQAEgEAOAAIAJAAQAQAAAAALQgDBBgDCwQAAAHAGACQAEACAMAAIACAAQAJAAAEABQAEADAAAHIAAAXQAAAKgIAAIhEACQgMAAAAgQgAjqCTQgHAAgBgFIgBgKQgBgtAAguIgChWQAAghAFgSQAFgWAOgOQAPgOAfAAQAeAAAOAcQALAVABAiQAHCuAAAXQABAIgUAAIgHAAQgGAAgFgDQgIgCAAgDIgEhNQgBgKgFgDIgYAAQgFAAAAADIAAAHQAAAZACA5IAAAIQgBADgFAAgAjEhhQgFAEAAAIIAABPIABAIIACACIADABIAZAAQAEAAACgFIABgKQgBg2gDgQQgDgWgPAAQgHAAgEAFgAAUBrQgJgZAAg4QAAhuAJgkQAIghAyAAQAeAAANARQALAOAEAfQgVAQgKAAQgIAAgEgPIgBgDQgCgPgOAAQgGAAgGAEQgGAFgBAFQgBAjAAB/IAAAFQAAANACAFQAFAIAMABIAFABQANAAAEgPQADgRAHgBIACAAQAJAAAIAEQALAGAAALIAAADQgCAZgSAQQgSAOgXAAQgpAAgPgogAl7BrQgJgZAAg4QAAhuAJgkQAIghAyAAQAdAAAOARQALAOADAfQgVAQgJAAQgFAAgDgEIgEgLIgBgDQgDgPgNAAQgHAAgGAEQgFAFgBAFQgBAjAAB/IAAAFQAAANADAFQADAIANABIAEABQANAAAEgPQAEgRAGgBIADAAQAJAAAHAEQAMAGAAALIAAADQgCAZgTAQQgSAOgWAAQgqAAgOgogAD5BqQgNgcAAg0QAAgtAGg2QADggAPgVQASgaAfAAQAxAAASAnQANAcAAA8QAACGghAWQgUAOgXAAQguAAgSgngAEhhKQgGAUAAAlIAAAhQAABMAYAAQAWAAAIgYQAHgRAAglIAAglQAAgqgEgQQgFgVgSAAQgVAAgHAcgACjCRQgDAAgBgEIgCgGQAAg4ADhTIABh7QAAgEADgDQADgCAEAAIAbAAQALAAAAASIAAAMIgEDuIAAACQAAALgFAAg");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("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");
	this.shape_1.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.3,-16.9,80.69999999999999,33.9);


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
	this.shape.graphics.f("#000000").s().p("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");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCA2F").s().p("AihCXQgEAAAAgMIAAgFIALjsQACgnAEgCIADAAIAMgBIAGAAQAjAAADAMIAcBjQAThRAGgQQAGgOAMAAIADAAIAdADQAEAAAEAKQADAIAAAFIASD1IAAAMIgDADIgEACIggAAQgGgBgBgKIgLi6QgSA8gLAYQgJAVgIAAQgLAAgDgCQgHgFgFgTQgMgpgQgrQgBAJAABIQAACAgJAAgAqVCXQgKAAAAgEIg1kWIAAgEQAAgEACgCIAHgCIAfAAIAHAAIAEAEQACADABANIAaCzIAci9QAAgIAKAAIAjAAQADAAAEAEIAAAJIg2ENQgBAKgLAAgACVCKIAAkHQAAgXALAAIAlABQAKAAADAJIAxCaIAAg9IgBhNQAAgVALAAIAcABQAGAAABAHIABBSIgCDAQAAAHgJAAIggAAQgHAAgFgIQgCgFgDgKIgxiZIgBClQAAAJgBACQgBACgGABIgPABQgXAAAAgMgAmXCWIgFgCQgCgCAAgCIgEj0QAAgGgIAAIgTAAQgJAAgCgDQgCgCAAgHIgBgRQAAgNAHgCIBCAAQAjAAAIABQAFACAAADIAAAhQAAAGgJAAIgUACQgEABgBAFIABDoQAAAKgDACQgDADgIAAgAJ4CUQgDAAgBgHQgFilAAhTQAAgYACgFQADgGALAAIAcAAQA4AAAAAKIAAAgQAAACgEADIgrgBQgJAAAAAJQAAAcADAkIAPABQATAAAAAHIADAmQAAAGgPAAIgHAAIgKAAQgEACAAALIABAvQABAGACACQACACAGAAIAfAAQALAAAAAIIAAAeQAAALgIAAgAFXCUQgGAAgBgFIgBgKQgCgtAAguIgBhWQAAghAEgTQAGgWAOgNQAPgOAfAAQAeAAAOAbQALAVABAjQAHCtAAAXQAAAIgTAAIgHAAQgGAAgGgCQgHgDAAgDIgEhNQgBgKgFgCIgYAAQgFAAgBADIAAAHQAAAYADA6IAAAHQgCAEgEAAgAF9hhQgEAFAAAHIAABPIABAIIACADIADABIAYAAQAFAAACgGIABgKQgBg2gDgPQgEgWgOAAQgHAAgFAEgAk6CUQgGAAgCgFIgBgKQgBgtAAguIgBhWQAAghAEgTQAGgWAOgNQAOgOAgAAQA0AAAEBTQAHCtAAAXQAAAIgTAAIgIAAQgFAAgGgCQgHgDgBgDIgEhNQgBgKgFgCIgXAAQgFAAgBADIAAAHQAAAYADA6IAAAHQgCAEgEAAgAkUhhQgEAFAAAHIAABXIACADIADABIAZAAQAFAAABgGIABgKQAAg2gDgPQgEgWgPAAQgHAAgEAEgABMCRQgDAAgBgDIgCgHQAAg3AChTIACh8QAAgIAKAAIAaAAQAMAAAAASIAAALIgFDvIAAABQAAALgEAAgAoUCRQgCAAgCgDIgBgHQAAg3AChTIABh8QAAgEAEgCQADgCADAAIAbAAQAMAAAAASIgBALIgEDvIAAABQAAALgEAAg");
	this.shape_1.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.9,-16.6,147.9,33.3);


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
	this.shape.graphics.f("#FFCA2F").s().p("AixCaQgEAAAAgLIAAgGIALjrQACgoAEgCIAEAAIALgBIAGAAQAjAAADANIAcBjQAThSAGgPQAGgOAMAAIADAAIAeACQADABAEAKQADAIAAAFIASD0IAAANIgDADIgEABIgfAAQgHAAgBgLIgLi6QgSA8gLAYQgJAWgIAAQgLAAgDgDQgHgFgFgSQgMgqgQgrQgBAKAABHQAACBgJAAgAqlCbQgKAAAAgFIg1kWIAAgDQAAgFACgCIAHgCIAfAAIAHABIAEAEQACACABAOIAaCzIAci9QAAgIAKAAIAjAAQADAAAEADIAAAJIg2ENQgBALgLAAgACFCOIAAkHQAAgXALAAIAlAAQAKAAADAKIAxCZIAAg8IgBhOQAAgUALAAIAcAAQAGAAABAIIABBSIgCDAQAAAHgJAAIgggBQgHAAgFgIQgCgEgDgLIgxiYIgBClQAAAIgBACQgBACgGABIgPABQgXAAAAgLgAmnCZIgFgBQgCgCAAgDIgEj0QAAgFgIAAIgTgBQgJAAgCgCQgCgDAAgHIgBgRQAAgMAHgCIBCgBQAjAAAIACQAFABAAADIAAAiQAAAGgJAAIgUABQgEABgBAGIABDoQAAAJgDADQgDACgIAAgAJrCXQgFAAgFgFIgCkgQAAgHAJgEIAigBQA2AAAUAbQAMATAAAZQAAAVgKAVQgJAVgRAOQAAACAIAEIAIAGQAZAUAAArQAAAagKAWQgKAXgRAJIgFABQgUABgdAAgAKVAdIgEAEIAABRQAAAGAHAAQARAAAIgQQAGgNAAgTIAAgKQAAgNgGgJQgHgLgNAAgAKLhzQgDAEAAAEIACBOIACAAQAnAAAAhBQAAgWgcAAIgMABgAFHCXQgGAAgBgFIgBgKQgCgtAAguIgBhWQAAghAEgSQAGgWAOgOQAPgOAfAAQAeAAAOAcQALAVABAiQAHCuAAAXQAAAIgTAAIgHAAQgGAAgGgDQgHgCAAgDIgEhNQgBgKgFgDIgYAAQgFAAgBADIAAAHQAAAZADA5IAAAIQgCADgEAAgAFthdQgEAEAAAIIAABPIABAIIACACIADABIAYAAQAFAAACgGIABgJQgBg2gDgQQgEgWgOAAQgHAAgFAFgAlKCXQgGAAgCgFIgBgKQgBgtAAguIgBhWQAAghAEgSQAGgWAOgOQAOgOAgAAQA0AAAEBTQAHCuAAAXQAAAIgTAAIgIAAQgFAAgGgDQgHgCgBgDIgEhNQgBgKgFgDIgXAAQgFAAgBADIAAAHQAAAZADA5IAAAIQgCADgEAAgAkkhdQgEAEAAAIIAABXIACACIADABIAZAAQAFAAABgGIABgJQAAg3gDgPQgEgWgPAAQgHAAgEAFgAA8CVQgDAAgBgEIgCgGQAAg4AChTIACh7QAAgJAKAAIAaAAQAMAAAAASIAAAMIgFDuIAAACQAAALgEAAgAokCVQgCAAgCgEIgBgGQAAg4AChTIABh7QAAgEAEgDQADgCADAAIAbAAQAMAAAAASIgBAMIgEDuIAAACQAAALgEAAg");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("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");
	this.shape_1.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.5,-16.9,151.1,33.9);


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
	this.shape.graphics.f("#FFCA2F").s().p("AmJCwIgCgCIgBgCQAAhAgGgVQgEgXgVAAIgFAAQgFACgCAFIgBALIADBPQAAAPgGAAIghAAQgFAAAAgLIgDkZQAAgUAIAAIBIAAQAxAAAABEQAAAXgMAfQgJAWgKAPIAAACQAiAkAAA9IABAfQAAAXgFAAgAm2hMIAABJQAAAGAGAAIACAAQAOgMAGgMQAGgOAAgTQAAgVgEgGQgEgJgQAAQgJAAgBAOgAH4BkQAAgHADgCQADgBANAAIAIAAQAJAAAEADQAFACACAUQADAQALAAQAbAAAAgfQAAgQgJgSQgKgQgOgLQgngegOgbQgIgRAAgYQAAgdAUgUQAUgTAfAAQAeAAAPAUQANASAAAgQgCAMgHAAIgZAAQgLAAAAgSQgBgSgKAAIgGgBQgYAAAAAXIABAJQADAOAxAtQAsArAAAqQAAAlgTAVQgUAXgnAAQg4AAAAhLgAppCtQgJAAgBgMIgKkVQAAgGAHgDQAKgEAcAAIAYABQAiAFAMASQAKAPABAoIAAAOQAAArgNATQgPAXgsADIAAAKIABAtIACA9QgDAFgFAAgApMhWIADBaQAAABAGAAQAbAAAAgyQAAgrgZAAgACsCbIAAkHQAAgXAMAAIAkABQAKAAADAJQAmB6ALAgIABg9IgChNQAAgVALAAIAcABQAHAAABAHIgBESQgCAHgIAAIggAAQgMAAgFgXIgxiZIgBClQAAAJgBACQgBACgFABIgPABQgYAAAAgMgAiCCnQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAAAgBgBQgCgCAAgCIgEj0QAAgGgIAAIgTAAQgJAAgCgDQgCgCAAgHIgBgRQAAgNAHgCIBCAAQAjAAAIABQAFACAAADIAAAhQAAAGgKAAIgTACQgEABgBAFIABDoQgBAKgDACQgCADgIAAgAFuClQgGAAgBgFIgBgKQgCgtAAguIgBhWQAAghAFgTQAFgWAOgNQAPgOAfAAQA1AAADBTQAHCtAAAXQAAAIgTAAIgHAAQgGAAgGgCQgHgDAAgDIgEhNQgBgKgFgCIgXAAQgGAAgBADIAAAHQAAAYADA6IAAAHQgBAEgEAAgAGQhEIAABOIABAJIACADIADABIAYAAQAFAAACgHIABgKQgBg1gDgPQgEgWgOAAQgQAAAAAQgAgZClQgDAAgBgHQgFilAAhTQAAgYACgFQADgGALAAIAbAAQA4AAAAAKIAAAgQAAACgEADIgrgBQgJAAAAAJQAAAcADAkIAPABQATAAAAAGIADAnQAAAGgPAAIgHAAIgKAAQgEACAAALIABAvQABAGACACQACACAGAAIAfAAQALAAAAAIIAAAeQAAALgIAAgABjCiQgFAAAAgKQAAg3AChUIABh7QAAgEAEgCQADgCADAAIAbAAQALAAAAASIAAALIgFDvIAAABQAAALgEAAgAlFB7QgNgcAAg0QAAgtAGg2QADgfAPgVQASgbAfAAQAxAAASAnQANAcAAA8QAACHghAVQgLAIgJADQgKADgNAAQguAAgSgngAkdg4QgGATAAAlIAAAiQAABLAZAAQAVAAAJgXQAGgSABgkIAAgmQAAgpgFgRQgGgVgRAAQgUAAgIAdgABTiGIAggpIApAJIghAjg");
	this.shape.setTransform(0.025,0.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("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");
	this.shape_1.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.3,-19.1,130.7,38.3);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCA2F").s().p("ABkBQQAAgHACgBQADgCANAAIAJAAQAJAAADADQAFADACATQADARAMAAQAbAAAAgfQAAgRgKgRQgKgRgOgLQgngdgOgcQgIgRAAgXQAAgeAUgTQAUgUAfAAQA6AAAABGQgCAMgGAAIgaAAQgLAAAAgSQgBgSgKAAIgFAAQgYAAgBAXIABAIQADAPAxAuQAsAqABApQgBAlgSAWQgVAWgnAAQg3AAAAhLgAnXCZQgJAAgBgLIgKkVQAAgGAHgDQAKgEAcAAIAYAAQAjAFALASQALAQAAAnIAAAOQAAAtgMARQgQAXgsADIAAALIABAtIACA9QgDAEgEAAgAm5hqIADBbQAAACAFAAQAcAAAAg0QAAgqgaAAgAiDCTQAAAAgBAAQAAAAgBAAQAAAAgBgBQgBAAAAAAQgDgCAAgDIgDj0QAAgFgJAAIgSgBQgJAAgCgCQgCgDAAgHIgBgRQAAgMAGgCIBDgBQAiAAAJACQAEABABADIAAAiQAAAGgJAAIgUABQgEABgBAGIABDoQgBAJgCADQgDACgIAAgAglCRQgHAAgBgFIgBgKQgCgtAAguIgBhWQAAghAFgSQAGgWANgOQAPgOAeAAQA1AAADBTQAICugBAXQAAAIgTAAIgHAAQgGAAgFgDQgIgCAAgDIgEhNQgBgKgFgDIgYAAQgEAAAAADIAAAHQAAAZABA5IAAAIQgBADgEAAgAAAhjQgEAEAAAIIABBXIACACIACABIAZAAQAEAAACgFIABgKQgBg2gDgQQgDgWgPAAQgHAAgEAFgAFgBoQgNgcAAg0QAAgtAFg2QAEggAOgVQATgaAfAAQAxAAASAnQANAcAAA8QAACGggAWQgVAOgXAAQguAAgSgngAGHhMQgFAUAAAlIABAhQAABMAXAAQAWAAAJgYQAGgRABglIAAglQAAgqgFgQQgGgVgRAAQgVAAgIAcgAEKCPQgCAAgCgEIgBgGQAAg4ABhTIACh7QAAgEAEgDQACgCAEAAIAaAAQANAAAAASIgBAMIgFDuIAAACQAAALgDAAgAlFBoQgNgcAAg0QAAgtAGg2QADggAPgVQASgaAfAAQAxAAASAnQANAcAAA8QAACGggAWQgMAIgKADQgJADgNAAQguAAgSgngAkehMQgFAUAAAlIAAAhQAABMAYAAQAWAAAIgYQAHgRAAglIAAglQABgqgFgQQgFgVgSAAQgUAAgJAcg");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.7,-17,101.4,34.1);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCA2F").s().p("AD0BQQAAgHADgBQAEgCAMAAIAIAAQAKAAADADQAFADACATQADARAMAAQAbAAAAgfQAAgRgKgRQgKgRgOgLQgngdgOgcQgIgRAAgXQAAgeAUgTQAUgUAfAAQA6AAAABGQgCAMgGAAIgaAAQgKAAgBgSQgBgSgKAAIgFAAQgZAAAAAXIABAIQADAPAxAuQAsAqABApQgBAlgSAWQgVAWgnAAQg3AAgBhLgAp4CUQgEAAAAgLIAAgGIAKjrQADgoAEgCIADAAIAMgBIAFAAQAkAAAEANIAbBjQAThSAGgPQAFgOAMAAIAEAAIAeACQAEABAEAKQADAIAAAFIASD0IAAANIgDADIgEABIggAAQgIAAgBgLIgKi6QgTA8gKAYQgKAWgHAAQgLAAgDgDQgHgFgFgSQgNgqgPgrQgBAKAABHIgCBXQgBAqgGAAgAjwAPIAAgEQAAhCALgjQATg9A0AAQAuAAAUAvIAAAFQAAAGgDABIglASQgJgdgRAAQgQAAgLAgQgIAdAAAqQAAAqAIAeQAJAgAQAAQAXAAAGgPQAFgLAAgbQAAgOgGAAIgYAAQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAgBgBAAIgBgFIAAgdIABgEQABgBAAAAQABgBAAAAQAAAAABgBQAAAAAAAAIAygBQAHAAAEACQAFABACAFQACARAAAgQAAAhgLAeQgGATgUAKQgQAHgVAAQhQAAAAiFgAg7CIIAAkHQAAgXAMAAIAlAAQAKAAABAKQAmB7ALAeIABg8IgChOQAAgUAMAAIAcAAQAGAAABAIIABBSIgCDAQgBAHgJAAIgfgBQgNAAgEgXIgxiYIgBClQAAAIgBACQgBACgFABIgPABQgXAAgBgLgACFCRQgDAAgCgHQgEiKAAhuQAAgXACgFQACgGALAAIAcAAQA5AAAAAJIAAAhIgFAFIgrgBQgIAAgBAJIAEBAIAIAAIAHAAQASAAABAIIACAmQAAAGgPAAIgHAAIgKgBQgDADAAALIAAAuQACAHABACQADACAFAAIAggBQAKAAAAAJIAAAdQAAALgIAAgAmECRQgHAAgBgFIgBgKQgCgtAAguIgBhWQAAghAFgSQAFgWAOgOQAPgOAfAAQAeAAAOAcQALAVABAiQAHCuAAAXQAAAIgTAAIgHAAQgGAAgFgDQgIgCAAgDIgEhNQgBgKgFgDIgYAAQgFAAAAADIAAAHQAAAZADA5IAAAIQgCADgFAAgAlehjQgFAEAAAIIAABPIABAIIACACIADABIAZAAQAFAAABgFIABgKQgBg2gDgQQgDgWgPAAQgHAAgEAFgAHxBoQgNgcAAg0QAAgtAFg2QAEggAOgVQATgaAfAAQAxAAASAnQANAcAAA8QAAA2gEAfQgHA5gWAOQgUAOgYAAQgtAAgSgngAIYhMQgFAUAAAlIABAhQgBBMAZAAQAVAAAJgYQAGgRABglIAAglQAAgqgFgQQgGgVgRAAQgUAAgJAcgAGbCPQgCAAgCgEIgBgGQAAg4ABhTIACh7QAAgEAEgDQADgCADAAIAaAAQANAAAAASIgBAMIgFDuIAAACQAAALgDAAg");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.2,-17,130.4,34.1);


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
	this.shape.graphics.f("#FFCA2F").s().p("AE/BkQAAgHADgBQADgCANAAIAIAAQAJAAAEADQAEADADATQACARAMAAQAbAAAAgfQAAgRgKgRQgJgRgOgLQgogegNgbQgIgRAAgXQAAgeAUgTQAUgUAfAAQAeAAAOAVQANARAAAgQgBAMgHAAIgaAAQgKAAgBgSQgBgSgKAAIgFAAQgMAAgHAHQgFAGAAAKIABAIQADAPAwAtQAtArAAApQAAAlgTAWQgUAWgnAAQg4AAAAhLgAjtCtQgJAAgBgLIgKkVQAAgGAHgDQALgEAcAAIAXAAQAiAFAMASQAKAQABAnIAAAOQAAAsgMASQgQAXgsADIAAALIABAtIACA9QgDAEgEAAgAjPhWIACBaQAAACAGAAQAcAAAAgzQAAgSgGgLQgHgNgNAAgAnECdIABgfQAFicAAhPIAAgCQABgRADgEQADgEAOAAIAKAAQAQAAAAALQgDBBgECwQAAAHAHACQAEACALAAIACAAQAKAAAEABQAFADAAAHIAAAXQAAAEgDADQgCADgEAAIhFACQgLAAAAgQgAgUCmIgEgEIgBkcQAAgJALAAIAIAAQBGAAAbAmQAZAjAABXQAAA6gVAjQgYAqgyADgAAShOIACCwIAAATQABADAKAAQAQAAAMghQALghAAgnQAAgdgIgdQgIgbgLgJQgJgHgKAAQgGAAAAAIgACcB8QgNgcAAg0QAAgtAFg2QAEggAOgVQATgaAfAAQAxAAASAnQANAcAAA8QAACGghAWQgLAIgKADQgJADgOAAQgtAAgSgngADDg4QgFAUAAAkIAAAiQAABMAYAAQAVAAAJgYQAHgRAAglIAAglQAAgqgEgQQgGgVgRAAQgVAAgIAcgAhjCjQgFAAAAgKQAAg4AChUIACh6QAAgEADgDQADgCAEAAIAaAAQAMAAAAASIgBAMIgEDuIAAACQAAALgEAAgAlLCjQgFAAAAgKQAAg4AChUIACh6QAAgEADgDQADgCAEAAIAaAAQAMAAAAASIgBAMIgEDuIAAACQAAALgEAAgAlaiGIAfgoIAqAJIghAig");
	this.shape.setTransform(0.025,0.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("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");
	this.shape_1.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.7,-19.1,93.5,38.2);


(lib.Interpolación4 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFCA2F").s().p("ADRCcIgCgBIgBgDQAAg5gGgbQgGgYgTAAIgFABQgFABgCAGIgBAKIACBQQAAAOgFAAIghAAQgGAAAAgKIgCkZQAAgUAHAAIBJAAQAwAAAABDQAAAYgLAeQgJAZgLANIABABQAhAmABA7IABAgQgBAWgFAAgAClhqQgBADgBAHIABBJQAAAIAGAAIACgBQAOgMAFgNQAHgNAAgUQgBgUgDgHQgEgJgRAAQgFAAgDAEgAAwCcIgCgBIgBgDQAAhAgGgUQgEgYgVAAIgFABQgFABgCAGIgBAKIADBQQAAAOgEAAIgiAAQgFAAAAgKIgDkZQAAgUAIAAIBHAAQAxAAAABDQAAAYgMAeQgJAYgKAOIAAABQAiAkAAA9IACAgQgBAWgFAAgAADhgIAABJQABAIAFAAIACgBQAOgMAGgNQAGgNAAgUQAAgUgDgHQgFgJgQAAQgJAAgBAOgAk6CTQgJAAABgLIAAhWQAAgHgHgDIgMAAQgbAAAAAMIABA5IAAAQQAAAWgFAAIglAAQgEAAgCgGIgBkUQAAgIAFgCQAEgCAIAAQATAAAFACQAGADABAJIgCBPIACAwQABAFAIAAQAbgCABgCIADgDIADiBQAAgEADgCQADgDADAAIAZAAQAMAAABATIABEEQAAAOgGAAgAihCRQgFAAAAgHQgEiKAAhuQAAgXACgFQACgGAMAAIAcAAQA3AAAAAJIAAAhQAAABgEAEIgqgBQgJAAAAAJQAAAgADAgIAPAAQATAAAAAIIACAmQAAAGgPAAIgGAAIgLgBQgDADAAALIAAAuQABAHACACQACACAGAAIAfgBQALAAAAAJIAAAdQAAALgIAAgAEVBoQgNgcAAg0QAAgyAFgxQAEggAPgVQASgaAeAAQAyAAASAnQANAcAAA8QAACGghAWQgMAIgJADQgJADgNAAQguAAgSgngAE8hMQgGAUAAAlIABAhQAABMAYAAQAWAAAIgYQAHgRAAglIAAglQABgqgFgQQgGgVgRAAQgVAAgIAcgAj0CPQgCAAgCgEIgCgGQAAg4AChTIACh7QAAgJAKAAIAaAAQAMAAABASIgBAMIgFDuIAAACQAAALgDAAg");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("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");
	this.shape_1.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.1,-17.1,86.30000000000001,34.3);


(lib.Interpolación3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFCA2F").s().p("AE9C1IgCgCIgBgCQAAhAgGgVQgEgXgUAAIgGABQgFABgCAGIAAAKIACBQQAAAOgFAAIghAAQgGAAAAgLIgDkYQAAgVAIABIBJAAQAwAAAABDQAAAXgMAfQgJAWgKAPIABACQAhAlAAA8IACAgQgBAWgFAAgAEQhHIAABIQABAHAFAAIADAAQANgLAGgNQAGgOABgTQgBgUgDgHQgFgJgQAAQgJAAgBAOgAjoBpQABgHADgBQACgCANAAIAIAAQAKAAADADQAFADACATQADAQAMAAQAbAAAAgeQAAgRgKgSQgKgQgOgLQgngegOgbQgIgRAAgYQAAgdAUgTQAUgUAfAAQAeAAAPAVQANARAAAgQgCAMgGAAIgaAAQgKAAgBgSQgBgSgKAAIgFAAQgZgBAAAXIABAJQADAOAxAuQAtArAAApQgBAlgSAWQgVAWgmAAQg4AAgBhLgAg0CsQgSAAAAgKIACkaQAAgHAFgBQACgBAJAAIBRACQAHgBABAIIAAAeQAAAJgJAAIgpAAIgGABQgEADAAADIAABtQAAAAAAABQAAAAABABQAAAAAAAAQABABAAAAIADACIAKAAQAOAAAEACQAGADAAAKIABAPQAAARgJABQgOgDgIAAQgEAAgCACIgBAHIgBBDQAAALgPAAgAn7CsQgSAAAAgKIADkaQAAgHAEgBQADgBAIAAIBTACQAHgBAAAIIAAAeQAAAJgJAAIgpAAQgEAAgDABQgDADAAADIAABtQAAAAAAABQAAAAAAABQAAAAABAAQAAABABAAIACACIAKAAQAPAAAEACQAHADgBAKIABAPQAAARgJABQgPgDgHAAQgFAAgBACQgBABAAAGIAABDQgBALgQAAgAGCCAQgOgcAAgzQAAgvAGg1QAEgfAOgVQATgaAeAAQAxAAATAnQANAbgBA9QAACGggAVQgVAOgXABQgtgBgSgngAGpgzQgGATAAAlIAAAiQAABMAZAAQAVgBAJgXQAGgSABgkIAAglQAAgqgEgQQgHgWgRAAQgUABgIAcgAA7CAQgNgcAAgzQAAgvAGg1QADgfAPgVQASgaAfAAQAxAAASAnQANAbAAA9QAACGghAVQgUAOgYABQgtgBgSgngABjgzQgGATAAAlIAAAiQAABMAZAAQAVgBAIgXQAHgSAAgkIAAglQAAgqgEgQQgGgWgRAAQgVABgHAcgAmKCAQgOgcAAgzQAAgvAGg1QADgfAPgVQASgaAgAAQAwAAASAnQANAbAAA9QAACGggAVQgVAOgXABQgugBgRgngAljgzQgGATABAlIAAAiQAABMAYAAQAVgBAJgXQAHgSAAgkIAAglQAAgqgEgQQgGgWgSAAQgUABgIAcgAlxiLIAfgpIAqAJIghAig");
	this.shape.setTransform(0,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("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");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54,-19.7,108.1,39.4);


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
	this.shape.graphics.f("#FFCA2F").s().p("AB2CfIgCgCIgCgDQAAg7gFgZQgGgXgTgBIgGABQgFABgBAGIgBAKIADBQQgBAPgFAAIghAAQgGAAAAgLIgCkZQAAgUAHAAIBJAAQAwAAAABDQAAAYgLAeQgJAZgLANIABACQAhAlAAA8IACAfQgBAWgFABgABKhoQgBADAAAIIAABJQAAAHAFAAIADgBQAOgMAGgMQAFgOABgUQAAgUgEgHQgFgJgQAAQgFAAgDAEgAktCWQgSAAAAgKIADkbQgBgGAFgCQADgBAIAAIBSACQAHAAAAAHIAAAfQAAAJgIgBIgpAAQgEAAgDACQgEACAAADIAABtQAAABAAAAQAAABAAAAQABAAAAABQAAAAABABIADABIAJAAQAPAAAFACQAGADAAALIAAAPQAAARgIAAQgQgDgGAAQgGAAAAACQgBACAAAFIgBBEQAAALgQAAgADGCTQgGAAgBgEIgBgKQgCguAAgtIgBhWQAAghAEgTQAGgWAOgOQAPgOAfABQA1AAADBSQAHCuAAAXQAAAIgTAAIgIAAQgFAAgGgCQgHgDgBgDIgDhNQgBgKgGgCIgWAAQgGgBgBADIAAAHQAAAZADA5IAAAIQgBADgEAAgADshhQgEAEAAAIIAABPIABAIIACADIACABIAZAAQAFAAACgGIABgKQgBg3gDgPQgEgWgPABQgGgBgFAFgAhsCTQgFAAgEgEIgBhgIgCjBQABgGAIgEIAjgCQA2AAATAbQALATABAZQAAAVgJAVQgJAVgRAPQAAABAIAGIAIAEQAXAUAAArQAAAbgJAVQgKAYgRAIIgFABQgTABgeAAgAhCAaIgEADIAABRQAAABABAAQAAABAAAAQAAABABAAQAAABAAABQADABADAAQAQAAAIgQQAGgNAAgSIABgKQAAgOgGgJQgIgLgMAAgAhMh2QgDACABAGIABBNIACAAQAnAAABhBQgBgVgcAAIgMABgAjBCRQgDAAgBgDIgBgHQAAg4AChSIABh8QAAgEADgDQADgBAEAAIAaAAQAMAAAAASIAAALIgEDvIAAABQAAALgFAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AB2CtQgFAAgFgDIgEgDIgDgFQgCgCAAgGQAAg8gFgVIAAAAQgBgGgDgEIgEgBIAAABIADBRQAAAHgCAFQgBAGgDAFQgGAGgJAAIghAAQgIABgGgGQgDgDgBgFQgDgFAAgGIAAgWQgNAWgRAKQgEACgFAAIAAAAIgCAAQgUACgegBIgfAAQgNAAgIgKIgDgEIgBiRIgDCCIAAABIgCAKQgBAGgDACQgEAIgKAAIglAAQgHAAgGgGIgFgHQgCgGAAgGQAAg5ABhRIAChXQgEACgGgBIglAAIAABbIANAAQAIACAEACQAIAEAEAIQADAGAAAJIABAPQAAAMgDAFQgCAHgFADQgHAFgHAAIgOgBIgBAAIAAA8QAAAHgEAGQgDAGgGADQgHAEgLgBIgPAAQgLAAgHgCQgGgDgEgFQgFgFAAgJIABAAIACkbQAAgHACgFQADgGAHgDQAHgDALAAIBSACQAJAAAGAGQAFAFACAHQAGgEAGAAIAaAAQAIABAHADQAEADAFAHIABADIAAgMQgBgKAIgHQAEgFAHgCIACgBIAmgBQA9gBAYAhIABABIABAEQABgHABgFQABgGAEgGQAFgJALAAIBJAAQAjAAAQAbQANAUAAAjQAAAdgNAeQgHATgIAOQAeArAAA4IABAFIgBhEIgBhWQAAgkAFgTQAGgcASgQQALgLARgEQALgCARgBQAUAAAPAKQAOAKAIAQQAMAXACAnIAGCjIABAiQAAAIgGAHQgEAEgHACQgFACgMAAIgIAAQgIAAgIgEIgJgEQgHgFgBgIIAAgBIgFhLIgEAAIABAjIABApIAAANIgCADQgCAFgGADQgEACgGAAIgjAAQgIAAgHgEQgEgEgDgIIgCgLIAAABIgBASQgBAGgCAEQgFAJgLAAgABtBGQAFAZAAA7IACADIACACIAkAAQAFgBABgWIgCgfQAAg8ghglIgBgCQALgNAJgZQALgeAAgYQAAhDgwAAIhJAAQgHAAAAAUIACEZQAAALAGAAIAhAAQAFAAABgPIgDhQIABgKQABgGAFgBIAGgBQATABAGAXgAk4iXQgFACABAGIgDEbQAAAKASAAIAPAAQAQAAAAgLIABhEQAAgFABgCQAAgCAGAAQAGAAAQADQAIAAAAgRIAAgPQAAgLgGgDQgFgCgPAAIgJAAIgDgBQgBgBAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIAAhtQAAgDAEgCQADgCAEAAIApAAQAIABAAgJIAAgfQAAgHgHAAIhSgCQgIAAgDABgADTiEQgOAOgGAWQgEATAAAhIABBWQAAAtACAuIABAKQABAEAGAAIAjAAQAEAAABgDIAAgIQgDg5AAgZIAAgHQABgDAGABIAWAAQAGACABAKIADBNQABADAHADQAGACAFAAIAIAAQATAAAAgIQAAgXgHiuQgDhSg1AAQgfgBgPAOgAhvicQgIAEgBAGIACDBIABBgQAEAEAFAAIAfAAQAeAAATgBIAFgBQARgIAKgYQAJgVAAgbQAAgrgXgUIgIgEQgIgGAAgBQARgPAJgVQAJgVAAgVQgBgZgLgTQgTgbg2AAgAjAiGQgDADAAAEIgBB8QgCBSAAA4IABAHQABADADAAIAlAAQAFAAAAgLIAAgBIAEjvIAAgLQAAgSgMAAIgaAAQgEAAgDABgAANAHIgBgsQgGAOgKANIADACIAAgBQAHAHAHAJgAhEBzQAAgBAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBIAAhRIAEgDIAJgBQAMAAAIALQAGAJAAAOIgBAKQAAASgGANQgIAQgQAAQgDAAgDgBgAg2BjIADgGQAFgJAAgPIAAgHIAAgBIAAgCQAAgJgEgGQgCgDgCAAgADtAGIgCgBIgCgDIgBgIIAAhPQAAgIAEgEQAFgFAGABQAPgBAEAWQADAPABA3IgBAKQgCAGgFAAgAD3gJIAHAAIAAAAIABgBIgBAAQAAgzgCgQQgBgIgDgCIgBAAgABJgUIAAhJQAAgIABgDQADgEAFAAQAQAAAFAJQAEAHAAAUQgBAUgFAOQgGAMgOAMIgDABQgFAAAAgHgABYgvQADgKAAgPIAAgOIgBgFIAAAAIgCgBgAhNghIgBhNQgBgGADgCIAMgBQAcAAABAVQgBBBgnAAgAg+g0QADgDADgGQAFgNAAgYIAAgDIgBgBQgEgDgHAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.5,-17.3,67,34.7);


(lib.hoja_7 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#558943").s().p("AA1ATIg3gLQgfgHgXgBQgVgBgYABIgfADIgLACIAKgFQALgGASgHQAYgIAYgCQAagCAhAHIA3AQQAfAJANADIAfAGIALABIgLADQgHACgHABIgTABIgGAAQgTAAgWgFg");
	this.shape.setTransform(38.2,36.3592);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#558943").s().p("AhZA/IAMgYQAJgRANgQIAQgQIATgQIAUgPIAVgLQASgIATgFIAkgGIgfATIgfAVIh9Bng");
	this.shape_1.setTransform(34.65,19.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#558943").s().p("AhRAoQAJgQAQgRQAIgJAIgIIAVgRIAUgOIAWgLQAUgKATgFIAbgFIAKgBIggATIggAWIgTANIhyBdg");
	this.shape_2.setTransform(27.5,29.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#558943").s().p("AFvAkIglgIIgwgJIg6gKIiOgQIhQgGIhQgCIhLAAIhDADIg8AEIgwAFIglADIggAEIAfgHIAkgJIAxgJQAigHAZgDIBEgHIAlgCIAngCQAaAAA3ACQAuACAkAEIBLALQAyAKARAEQAWAFAkAJQAMADAkAMIBAAXg");
	this.shape_3.setTransform(85.3,19.145);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#558943").s().p("AAQARIgFgIIgJgLIgLgOIgwgsIAJACIAWAIQAUAIALAJQALAIAGAGIALANIABACIAAABIABACIACgCQACAAABgFIAGgSIAGgYIACAGQACAIACALIgBAWIgBAJQgDANgHAOIgOAcg");
	this.shape_4.setTransform(124.875,33.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#558943").s().p("Ao9BxQADgVAKgRQAQgcAcgTQAkgZAsgFQAsgGA8AJQASADAmAJIA6AMQAiAGAYgGQAVgFAjgUQAngYAVgLQAegRAhgOQA+gcBHgSQBRgTA1AQQAQAGAOAIQAPAKAKAKIAVASQALAIAKACQATAEAagPQAOgHAbgSQAagPASgCIAFAAIAMABIAFABQAJADAJAHQANAMAGATQAEAOgBAQQgBANgIAaIgEANIADgOQAFgdAAgJQAAgQgEgMQgGgRgMgJQgIgGgIgBIgEgBIgJgBIgFABQgQADgWAPIgoAcQgLAGgOAGIgPADIgIAAIgIgBQgPgBgPgLIgXgTQgJgIgNgIQgQgIgKgDQgugNhLATQg9ARhDAdQgfAOgfAQQgPAIgrAZQglAVgbAGQgcAHgogIIg7gOIg3gOQg6gNgpAEQgpADgjAVQgeASgPAYQgLARgFATIgCALg");
	this.shape_5.setTransform(72.835,34.1915);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#558943").s().p("AAlAJQgWgGgMAAIgTACQgKAAgNgDQgOgDgWgNQgSgLgKgEQgNgGgNgEQgWgGgSgBIgPgBIAOgDQAUgEAXACQARACAOADQAOAEASAIQAVAKALACQAFACAJAAIAUgCQAQgBAaAJIAjANQAfAMAaAOQAfARASANg");
	this.shape_6.setTransform(85.95,11.6167);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#558943").s().p("ACmAbIgRgGIgVgLQgNgGgMgBQgMAAgRAEIgQAEIgSAGQgIACgGAAQgJgBgHgGIgIgIQgCgCgBgBQgKgEgSAFQgbAJgMAAQgJgBgLgDIgPgFQgLgDgOABQgRAAgVAJIgPAFIAcgSQAOgHAJgDQARgEAPACIAQAEQAIABAFAAQAHgBAYgKQAPgEAHgBQAPgCAKAGQAHADAGAGIAFAGIACABQAAAAABAAQAAAAABAAQAAAAABAAQABAAABAAIAkgIQAUgDAQAEQAPADAOAKIASAOQAIAHAHADQAEADAGABIAEAAIgEABIgEAAIgIgBg");
	this.shape_7.setTransform(48.325,2.82);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#558943").s().p("AiFFsIAAgaQABgQAFgZQAGgbAJgaQALgeAPgfIAghEQATgqAKgjQAHgWADgSQAEgXgBgTQAAgagFgTQgDgMgNggQgLgcgDgRQgEgYAEgXQAEgTALgWQAIgQALgRIAKgPQAGgJAGgFQAEgDAFgBQAGgCAFABIAJAEIADAEIAAACIAAAAIABAAIAkgbQAQgIAOgGIATgGIAHgCIgZALQgOAIgNAJIgQANIgIAHIgLALIgDAAIgEACIgBgBQABAAAAAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQgEgEgDAAIgCAAIgBgBIgCAAIgEAAIgFADQgEAEgNAWIgPAgQgIAVgCAQQgDASAEAUQADANAMAcQALAdAFARQAHAXAAAcQAAAYgEAXQgEAWgHAWQgNAogUAnIgkBCQgTAigLAYQgMAagIAYQgHAZgCAOIgEAjg");
	this.shape_8.setTransform(15.1125,40.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5CAA41").s().p("AqRG2QAKiqAKgtQAIghAihZQAhhWAjhMQAbg7gShMIgRhBQgKgngCgfQgDg/AkgbQATgOASgBQAyggBVgXQBNgVBEgEQA2gDAuAMQAdAHBGAYQATAFA/AkQAsAZBeAJQBZAIBgAmQBuArA3ALQBVAPABBFQABAjgRAfQgFgPgogtQgdghgkgDQgggEgwAUQghAOg9gnQhLgugfgEQgwgHhhA7QgQAKiPBiQggAWgqgBQgcAAg0gNQg5gOgagCQgugEglARQhIAggyBJQgUAdg1BpQgcA4gTC8QgJBdgEBTg");
	this.shape_9.setTransform(65.7779,52.42);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hoja_7, new cjs.Rectangle(0,0,131.6,104.2), null);


(lib.hoja_6 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#558943").s().p("AG9ExQgDgYgHgfIgKghQgIgYgGgNQgRgngZgnQgegrgkgjQgngkgygdIhsg7Qh2g/hcguIhegsQgngSgsgSIhFgcIg1gTIgtgQIAuALIA3AQIBHAXQAoANAuASIBgApQBhAsB0A+QBTAsAZAQQAyAeArAqQAlAmAbAuQAXAlARAuQAFANAHAaIAHAiQAGAhAAAYIAAAwg");
	this.shape.setTransform(81.625,66.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#558943").s().p("AEwBbIhkhrQglgngagRQgggTgzgNQgcgHg9gIIhXgLQhJgKhJgQQgrgJg2gOIgkgKIAlAGQAzAIAvAGQBLAJBIAHIBWAIQA+AGAgAIQA0ANAmAYQAgAVAiApIAyA8IArA2IBUBsQglglg5g+g");
	this.shape_1.setTransform(73.725,48.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#558943").s().p("AIKD0QgRgbgIgRQgNgbgFgbQgBgPAAgPQABgQAEgPIARg9QAKglgDgYQgCgegUgdQgTgYgggWQgNgKgSgKIAKAYIhBgZIgBABIgJAIIgGADIgLAGQgKAFgPACIgMACIgNAAIgXgDQgMgCgNgEQgYgJgVgNQgRgMgWgQQgxglgZgLQgSgIgVgCQgRgDgYAAQgeAAgNgCQgZgCgTgHQgMgFgbgOQgVgLgMgDQgLgCgZAAQgaAAgOgDQgQgEgUgJIgfgPQgdgPgfgGQgXgEgjgDIg1gFQgxgFghgTIgbgOQgMgGgKgBQgFAAgIABQAGgCAHAAQAJAAAOAFIAcANQAhAQAwADIA1ADQAjABAYAEQAiAEAfAPIAfAOQASAHAPADQANADAWgBQAbgBAOADQARADAWAMQAdAOAIACQAVAIA6AAQAdAAAPACQAYADAXAJQAfANAwAlIAmAaQATAMAUAIQANAEAHABIAKACIAKAAIAVgBQAKgBAHgEIAIgEIAHgFIAQgPIACAAIAVAIIAAAAIgPghIAhAQQAmAUAcAUQAjAaAUAcQAXAhADAlQABAdgMAoIgKAeQgGASgCALQgEAMgCAQQgBAPABAMQAFAmAgA5IBmCug");
	this.shape_2.setTransform(63.35,41.6458);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#558943").s().p("ACTCKQghgJgSgHQgsgQgdgUQgUgMgRgSQgNgMgXgaIgPgSQgEgGgCgHQgDgJADgJIABgGQggghgegiIgigmIApAfQAyAoAxArIAqAlIgzgPIAGAGQAnAvAaAUQAYATAqAXIAvAZIASAJg");
	this.shape_3.setTransform(16.675,14.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5CAA41").s().p("AJHFvQgshlgvgrQg2gziZhTQiThQhageQhjgjh1gxQiLg6hagwQhQgsgcgoQgJgNgCgKIAAgIIhkiDIBAAXQBMAWAyAAQAoAAAoASQArAUApADQArACA2AUQA6AXAyAEQBGAIAjARQAZANBFA6QA2ArAugGQAagEAogSIA9gSQApgFAvAhQA0AhgCBKQgCAyggBgQgXBCBPB8QAoA+ArAwIAGBpQgNgogWgyg");
	this.shape_4.setTransform(64,45.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hoja_6, new cjs.Rectangle(0,0,126.7,101.6), null);


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
	this.shape.graphics.f("#8D5734").s().p("Ak0DGQACiVg7hWQg8hXghhvQgLgjgFgcIAIAMQAkAvBzAMQBkAKCXABQCJACAkAGIBsAPQA1AIAkAVQAZANA9ASQAxAPARASQANAMAGAiQAHAkgDAmQgJBmhAAeQg8AclVBOQiqAnieAhQANg5AAhLgAnglJIAGAfQgJgQADgPg");
	this.shape.setTransform(48.1386,33);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_23, new cjs.Rectangle(0,0,96.3,66), null);


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
	this.shape.graphics.f("#381F0E").s().p("ALGHCQi7gYhCgNQiTgehQgxQgtgbgJgKQAUADgOgHQgNgDAHAHIgWgEQgvgLgygUQg8gYhLgVQgtgFgugIQhagQi9g8QgggKgHgGQgCgDACgGQAEgLhRgaIiCgpQgUgIgxggQgVgOgkgqQgwg4guhJQgzhXgPgXQgUgegegSQgegRgoglQgTgTgOgPIAbgIQAKAMAVAMQApAYAzAAICgAAQBpAEAsARIBJAqQAnAWBCAEQA3AEBLAAQBFAAApADQA0AFCdAxQBOAYBFAYIAWAwQAdA8AiA5QBrC1BtBWQCXB2D0A/QB4AfBWAGQiCANhTAAQgwAAgfgFgAPqG6IANgBIBrgLQAdgCglAIQgfAIgqAAIgngCgAPqG6IAAAAg");
	this.shape.setTransform(113.4494,45.4536);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8, new cjs.Rectangle(0,0,226.9,90.9), null);


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
	this.shape.graphics.f("#8D5734").s().p("AiYCmQg6gYACglQgQAPgXgNQgXgMgDgXQgGgkAmgrQgCAEgtgPQAHgFAPgXQANgTALgGQAHgDAKABQANAAAEgBQAPgEAFgFIAPgQQAGgEAMgBIBUgGQgFgLADgKQAjgUAnAIQAWAFAHgBQAIgBANgIIAyggQAegPAZADQANABAZAIQAZAGAZgGQAZgFAUgQIhlBrQgzA2APAkQgQgNgXAIQgWAGgHATIA7BEIhDAHQAJgTgNgVQgMgVgVgFQgUgGgUAIQgUAIgQARQALgFANACQAMADAJAHQgIAGACANQABALAJAIQAHAFAOAEIhjgOQANgHAAgQQgBgQgLgJQgLgIgPAAQgPAAgNAHQgLAUAPAYQAOAVAYAKQAKADAlAJQAdAHAPAKQgTgCgVAGQgUAHgPANQAOAbAbAKQhGgMg+gbg");
	this.shape.setTransform(28.875,20.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7, new cjs.Rectangle(0,0,57.8,41), null);


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
	this.shape.graphics.f("#8D5734").s().p("AhfBhQALgZAWgGQAIgCANABIAUABQAAgLgIgIQgHgIgLgDQgSgEgcALQAYgOANgDQAYgFAQAOQAFAGAKANQAIALAJgCQgNgUgTgNIAMAAQgMgSgSgMQgSgLgVgDQAMgSgFgKIgJgKQgHgJABgMQACgMAIgIQANgOAbgFIAVgDQANgCAJgDIAfgOQAUgIANAAQgXAYgNAeQgMAfgCAhQAFgDAGAFQAFAEABAHIAEALQACAHAFACQAEABAGgBQAVgCAXgHQgMAegcANQgLAFgCAEQgDAEABAJIAAAOQgCARgWAGQgIABgKAAIgRgBQgcAAgbALQgbAKgTAUQAFgiAHgMg");
	this.shape.setTransform(10.8,14.3236);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6, new cjs.Rectangle(0,0.1,21.6,28.5), null);


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
	this.shape.graphics.f("#8D5734").s().p("AhfBoQgLgIgGgLQgFgMAAgNQABgOAHgLIAGgNQABgGgEgGQgEgFgGgCQgIgDgRACQAJgPAQgLQgHgBACgJQACgJAGgDIAPgFQAIgDAEgEQACgDAFgPQADgLAHgBQAGgBAHAGQAJAIADABQAKADANgLQAQgNAGgBQAWgDANAmQAKgRAWgPQAXgQATgCIAQgCQADAAAHAJQADAEgBAXQAAAWAEACQgNgGgOAEQgPAEgIALQgLAQADAfQAEApgCAMQgHgEgCgKIgEgSQgBgKgHgGQgIgHgHAEQgEACgDAGQgKASACAUQABAPgCAFQgIATgjgJQAJgRgBgKQgBgIgIgEQgHgEgGAFQAQgRgGgVQgCgJgIgHQgJgHgKAAQgKAAgIAHQgIAHAAAKIACAJQABAGAAADQgBAGgGAIIgKAMQgKAOAEASQADASAOAKQgNgCgLgIg");
	this.shape.setTransform(14.175,11.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0,0,28.4,22.8), null);


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
	this.shape.graphics.f("#8D5734").s().p("AAICKQgXgHgXAEQAFgDgBgHQgBgGgFgFQgLgOAEgHQABgDAHgDIAigTQhIgVhMADQATgkAZgeIhGgzQASgEAEgVQAFgUgOgMIA1geQAogXgcAxQgDAGACAQIAMBMQACANAGADQAFADAMgCQAqgHAnARQgOAWAEAbQBcgKBSArQgpABglAXQgkAXgSAlQgRgRgXgIg");
	this.shape.setTransform(17.975,16.3326);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0,0.1,36,32.5), null);


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
	this.shape.graphics.f("#8D5734").s().p("AA1GeIgWgYQgPgQgQgKQgwgegXgMQgngWg3gMQg4gMhCgLIg4gIQg2gjg7gwQh3hfgcg/QgXg0gIixQgIiygSgrQAhAmAvApQBeBTBDAQQAxALBQALQBBAJApANQAxARBPAFQAtADBJAAQAoAABWAUQAqAJAjAKIA4gjQgJA3gGBBQgMCBAQAzQAVBHAjA5QApBEAwAaQBGAmCIAvQgigIg0gHQhogMhcAMQhkANgtAEIhmAIIgOABQgqAAgXgVg");
	this.shape.setTransform(66.125,43.4781);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,132.3,87), null);


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
	this.shape.graphics.f("#6C391E").s().p("AMcFTQisg0haAHQhbAIhLgNIhygbQgggIgegSQgVgOgkADQgrACgmAHIg+ALQgZAFgdgPIhFgjQg6gYgcgIQgqgNgZAAQgqADgUgCQgjgGgGglIgQhvQgFAPgQAMQgeAVg0gXQg/gcgUgTQgWgWgSg1QgZhLgOgeIkYjAQAoACAzAHQBlALAwAVQAkAPAiAjQAXAYAfgEQA2gIAyAAQgVABgTAFQgqALAXAcQAZAeA4ACQAlACA7gNQAdgGAmgCQAngCAfgGQAmgIBNAFQAmACAfAEIBhAMIA3ADQBGAFBIANQDnAqCqBmQCqBnA0B1QAcA+ABA/QAMAlAgBFQhDgbhWgag");
	this.shape.setTransform(94.925,39.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,189.9,78.5), null);


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
	this.shape.graphics.f("#6C391E").s().p("ACgFCQiMiZgYh3QgbikgKgzQgQhPglgZQj2ijAzChIBBDOQAfBjATBMQAQBAAQA0Qhjkkg1h7QgqhwgNgaQgSgig0gGQg4gHgfgKQgSgGg8gZQAvgJBBgIQCCgRBeAAQBVAAA8AYQAzAUASgEQAmgIBwARQB1ASBXAdQBLAZBnA0QAzAaAkAVQg+gXhSgbQilg4hrgZQiGgggnANQguAPAVBPQATBFAQCTQAIBJAFA8IAyBSQBABgA+BEQA+BFAaArQAMAVAAAHQhBg0hGhMg");
	this.shape.setTransform(58.5,45.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_0, new cjs.Rectangle(0,0,117,90.1), null);


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
	this.shape.graphics.f("#381F0E").s().p("A3aR7QjHhMidicQidiehJjFQAOgEABAEQCdhzCOhTQDciAB0gIQCcgLBggkQBEgaBzhNQAugfAqgDQAcgDAsALQAzAMAXABQAvACAxgTQAqgRC6gPQEXgWBbgLQIBg+B2isQCuj+B+h1QCrifCtgKQC3gLBhgqQBSgjB2hrQBVhMB+hAQBpg2BVgWQgZChgVBXQgfB8gsBOQiWEMiDB3QhUBNiLA5QigBBhWA/QiiB2i8D8QjCEDjWByQibBRjkAdIi7AUQhtAOhNATQjWA2iqCXQi0CfjfAgQg3AIg3AAQiWAAiXg6g");
	this.shape.setTransform(208.5,120.5242);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,417,241.1), null);


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
	this.shape.graphics.f("#6C391E").s().p("A7iSgQhbk8kqh2QhngoidgcQiQgWhLgPQC8iDCphYQD1iAChgOQA5gFCpgKQBzgHA8gKQCigaB/hrQCNh3BFghQA7geBqgMQBpgLDUglQE6g2EdhEQNkjREdkKQCbiRBqg5QBTgtBGAEQAoABBGATQBDALBEgcQBxgtCqg8QB+gxA4g4QA+g+CygeQhSCegyDcQgYBpgrESQhQAThxA3QiGBDhZBPQh3BshRAjQhhAqi3AKQiuALiqCdQh+B1iuD+Qh2CtoCA+QhbALkWAWQi6APgqARQgyAUgugCQgXgCg0gMQgsgLgcADQgqAEgtAeQh0BNhEAaQhfAlicAKQh0AIjcCAQiOBTidBzQgMgggNgvg");
	this.shape.setTransform(265.7125,126.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(2.7,0,526.0999999999999,252.7), null);


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
	this.shape.graphics.f("#8D5734").s().p("EgsrAVGQidhXgEkSQgDiaApijIADASIgHAgQgKAngHArQDlh6CshFQDihcCTgLQFegaDxgvQErg6CRheQAjgWBVg/QA2goAqgRQBogqFFgLQFLgJHri8QC+hJCehOQCThKAvgpQApgkAdgGQASgDAiAJQAlAKAdgCQAvgDBBgeQBHggByhOQBUg5CIgqQBPgZAfgWQARgMAKgWQAJgUAUgMQAhgRBWgVQCYgjCJiJQAlglBGhOQBAhCAygkQA1gnBlgZQAvgMCUgaQCAgWBFgVQBmghA6gyQgpDEg9ChQhTDdhwCAQhPBbg9B2QixAeg+A+Qg4A5h+AwQirA8hwAuQhEAbhDgLQhHgSgogCQhFgDhUAtQhqA5ibCPQkcEKtlDRQkcBFk7A2QjTAkhqALQhqANg7AdQhFAjiNB3Qh+BriiAaQg9AJhzAHQipALg5AEQihAOj1CBQiqBYi7CDQh1gahBgkg");
	this.shape.setTransform(302.1178,141.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,604.3,282.4), null);


(lib.Group_2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#B6815A").s().p("EgvEARUIAIggQgli8Cqi4QCPiYE1ioQDIhrGZi2QG7jDCjhTQHLjqeNmZQPGjNNrieQgHA/gTBeQg5A2hmAhQhHAXiBAXQiaAagsALQhnAZg2AnQgyAlg/BCQhGBNgmAmQiJCJiYAjQhVAUghATQgVALgJAUQgKAVgRANQgeAWhQAZQiHAqhUA5QhyBNhIAhQhAAfgwACQgcACgmgKQghgJgSADQgeAGgoAjQgwApiTBKQidBOi+BJQnsC8lKALQlGAJhoArQgpARg2AoQhVA/gjAWQkFCosGA5QkAAUoGESQAHgrAJgng");
	this.shape.setTransform(302.925,119);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0,0,605.9,238), null);


(lib.Path_272 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#8D5734").s().p("AhBAyIBihgQAIgEAJAAQAKABAGAHQgCAKgMAIQgHAEgQAGQgfAKgBATIABAKQABAGgCADQgCAFgIADQgUAJgUAAIgMgBg");
	this.shape.setTransform(6.625,5.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_272, new cjs.Rectangle(0,0,13.3,10.1), null);


(lib.Path_113 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#558943").s().p("AgzDbQA0grAtgxIizBBIB9hRQhbAUhXAjICrhmIjYBBQB9hJCHgsQhRgGhQAWQhRAXhBAxQB0hmCWgkQhSgEhQAXQhRAXhDAuQB/hdCTg5QhKgEhWAkQg3AXhdA4QA1hBBPgfQhEAMg8AkQg6AkgoA0QAxhDAehSIh1CEQAVhFA1gwQgvAIgqAZQgpAagdAlIAchMQgbANgVAXQgWAXgLAbIgKhCIgqBSQgMglACgkQgCALgGALQgJARgQALIgBh7IAKAJQgGgoAVghQAkAqA0AUQgNgPAIgVQAHgVATgEQATgFAPARQAQAPgFAUIA+hJQAMAKAHAQQAGAPgBAQIBCh6QARAsgIAsQAOgrAigdQAKASgCAWQgCALgEAJQAJgGAOgBQAbgBAIAVIALgZIBNA7IATgyQAhAbAMAnQABgoAcgcIAdBEQADgdAagQQASAngDAtQAOgpAdgeQALALAGAOQAFAPgCAQQANgmAWggQAQAzgGA2IArhpIAcB4QADgwASgsIAeBmQgDg6AQg5IAfCGQgBg6ASg2QAlA7gEBFIAWh2QAUAbAIAeIAAgKQADgXALgVIAlBxQAEhFAQhBQAaBAgBBCQAJhQAThTQASAkAAApQAAAggKAdQAchAAmg4QAEAngLAnQgJAhgSAcQAxhFBCg2QgcBOg3A8QBMg0BBhGQgfAmgPAtQBDhBAvhQQAGAYgHAZQAHgGAIgFQAOAegSAfQgSAfgeAFIDAgWIsKEBQALgEAHgIQAHgIACgLQg+ASg3ArIAkg6Qg+Ajg1A2IAmg2IhdBFgArvg9QgBgPgGguQgIABgGgBQgKgXAIgYQAWAiAdAbQgDA5gdAwQAHgMgDgugAt4iTQAQArgEAsQgRARgTAQgAtOjHQAXATAUAWIANAQQgLAigaAZQADglASghQgdAzgpApgAsQiBQgDgEgBgHIAOASQgGgCgEgFgAsWiOIADgMQgBAIAAAGIgCgCgAsWiOIAAAAg");
	this.shape.setTransform(91.325,26.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_113, new cjs.Rectangle(0,0,182.7,52.4), null);


(lib.Path_2_2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#B6815A").s().p("Ag7AlIAOACIAFgCQACgCgCgDQgCgDgDgCIAZgUQAGgEAAgDQgFgEgJAEQgLAEgDAAIAFgYQAFgQAIgGQAMgHAMAIQAGAFAMALQAFACAHAAIAZABIAEABQABABAAAEQgBASgFAKQgFAHgHADQgIADgGgEQgBAFgJAEQgSAKgcAFIgLABQgOAAgGgJg");
	this.shape.setTransform(6.025,4.6508);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_2, new cjs.Rectangle(0,0.1,12.1,9.200000000000001), null);


(lib.Path_2_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#B6815A").s().p("AhDAqQAJADAHgBQAEAAACgCQACgCgCgEQgCgDgEgCIAcgWQAHgGAAgDQgEgFgMAFQgMAFgEgBQADgRADgKQAFgSAKgGQAOgJANAKIAVASQAEACAJAAIAcABIAEABQACABAAAFQgBAWgHAKQgEAIgJADQgIADgIgEQgBAGgJAFQgWALgfAFIgKABQgSAAgHgKg");
	this.shape.setTransform(6.775,5.2111);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_1, new cjs.Rectangle(0,0,13.6,10.4), null);


(lib.Path_2_0 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#B6815A").s().p("AhwBGQAPADAMAAQAGAAADgDQAEgEgEgGQgDgFgGgEIAvglQAKgIABgGQgKgKgRAJIgNAFQgHADgGAAQAFgdAFgRQAIgeAQgKQAXgOAWAQQAMAIAYAVQAHAEAPAAIAvACQAEAAACABQAEADgBAHQgBAkgLASQgIANgOAFQgPAGgMgHQgCAKgPAIQgjASg2AJIgTABQgcAAgLgQg");
	this.shape.setTransform(11.2861,8.7071);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_0, new cjs.Rectangle(0,0.1,22.6,17.299999999999997), null);


(lib.Path_2_3 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1.graphics.f("#B6815A").s().p("AhwBGQAPADAMAAQAGAAADgDQAEgEgEgGQgDgFgGgEIAvglQAKgIABgGQgKgKgRAJIgNAFQgHADgGAAQAFgdAFgRQAIgeAQgKQAXgOAWAQQAMAIAYAVQAHAEAPAAIAvACQAEAAACABQAEADgBAHQgBAkgLASQgIANgOAFQgPAGgMgHQgCAKgPAIQgjASg2AJIgTABQgcAAgLgQg");
	this.shape_1.setTransform(11.2861,8.7071);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_3, new cjs.Rectangle(0,0.1,22.6,17.299999999999997), null);


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
	this.shape.graphics.f("#558943").s().p("AmLHwQA+gpAwg9QBJhdAagZQA+g/BEg1QAygoBGgwQAzghg9gQIhFgJIAhAdQAcAdgeAAQgdAAgsAXQg+AlgzAaQg7AfiGAZQj7AuhNASQiOAgimApQhYAUAhgUQANgIAMgXQANgbAVgRQBLg9EMgzQAPgDAUgLIAhgQQgOgegVgYQgKAUgRAPIgYg0QgGAOgMAKQgMAKgPADQgDgYgPgUQgmAmg0AWIAPhLIhmAsIAQhHIi9BRIA7hNIiWAtQAPghAZgbQAagaAggRIiMANQAwgyBBgaIi6gcIC/hPQhQgHhZgCQBtg3B5gEIjEg/QB9gGB5gYQhDgshKgdQAdADBiATQBaANAggVQgMgSgbgQIgugYQArgMAwAPIBQAaQgLgEgHgJQgLgLgBgPICFApQgTgKgEgUQBEAQA4AlQABgxAhgkIBbBWQAIgogDgqIAvBAQAIgiAUgaQALAMADARQAEAQgGAQQApgiAxgdQAIAWgIAYQgHAYgTANIC5ghIh0A2QBxgoB5AGIg/AkIDCgdIhdA5IBlgMQhGArg8A0QA4ADAzgTIg6AyQAngQAfgHQCMgiDigpQDpgqgbAQQhrAshfAqQi7BUg8A7Qg8A9hYAiIhMAXIA8AOQBDANAhAAQAsAABOgjQBUgmAugtQBBhBAUgRQAtgmBEgjQBAgiDQgVQBpgLBbgEQheA9hmA1QgYANgbAMIAhADQAiABAhgOIFRg7IgNBZQgxAYg+AkQh7BHhCA3QhBA1iCBVIh0BKQgCgEgRgDQgjgGhOAIQhJAIiKA4Qh0AuACgEQADgKBHhEIBHhDQgWACgcAGQg5AOgjAaQgeAXhTAwQhwBAhCAqQhpBCiUAzQg7AUgUAAIgBAAQgUAAAlgYgAo8CBIAJgEQgGgOgDgJgAoPBwIAFgCIgGgFgAjyAeQAwgLArgGQAfgFAJAAQAFAAgagKQhKAXhPgCQAVABAWAKg");
	this.shape.setTransform(129.025,52.0255);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath, new cjs.Rectangle(0,0,258.1,104.1), null);


(lib.Path_15 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().ls(["#F0EFE5","#EFEEE2","#EDEBD8","#E9E4C8","#E4DCB2","#DDD195","#DBCC8A"],[0,0.251,0.447,0.627,0.792,0.949,1],-35,0,35.1,0).p("AEtiYQAFAegLAhQgVBDhNATQgFABjKAhQh+AVgqAhQgqAhg5BHQgdAkgeAmQgGAGgCgRQgCgSAEgeQAOhTAzhbQBgimBhhBQAYgQAUAJQAsAUA3AHQBgAMA7gIQBFgKAcgnQAYgiAIgDQAEgCgCAFg");
	this.shape.setTransform(35.0647,26.9514);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#F0EFE5","#EFEEE2","#EDEBD8","#E9E4C8","#E4DCB2","#DDD195","#DBCC8A"],[0,0.251,0.447,0.627,0.792,0.949,1],-34.5,0,34.6,0).s().p("AlYD8QgCgSAEgeQAOhTAzhbQBgimBhhBQAYgQAUAJQAsAUA3AHQBgAMA7gIQBFgKAcgnQAYgiAIgDQAEgCgCAFIgsBsQAFAegLAhQgVBDhNATIjPAiQh+AVgqAhQgqAhg5BHIg7BKIgDACQgEAAgBgNg");
	this.shape_1.setTransform(35.0647,26.9514);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_15, new cjs.Rectangle(-0.5,-0.5,71.2,54.9), null);


(lib.Path_14 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().ls(["#F0EFE5","#EFEEE2","#EDEBD8","#E9E4C8","#E4DCB2","#DDD195","#DBCC8A"],[0,0.251,0.447,0.627,0.792,0.949,1],-54.6,0,54.7,0).p("AIeFGQgoh3gFgsQgBgVAAgKQgBgRgFgLQgOgfhEgnQg9gig8hCQhGhNgHgFQhCg0gmAIQgVAEiAgdQiHgfgpgYQg7gigjgPQgqAGgwAOQhfAdgcAoQgQAXACADQAAACAYACQBMAGBcBEQB9BcB8A1QB4A1BaAEQBLADAsAOQAbAJA+AXQA7ATBHBAQBGBAAXA4g");
	this.shape.setTransform(54.6936,32.7209);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#F0EFE5","#EFEEE2","#EDEBD8","#E9E4C8","#E4DCB2","#DDD195","#DBCC8A"],[0,0.251,0.447,0.627,0.792,0.949,1],-54.1,0,54.2,0).s().p("AHBDMQhHhAg7gSQg+gYgbgJQgsgOhLgDQhagEh4g1Qh8g1h9hcQhchEhMgGQgYgCAAgBQgCgDAQgYQAcgoBfgdQAwgOAqgGQAjAPA7AjQApAXCHAgQCAAcAVgEQAmgIBCA0QAHAGBGBMQA8BCA9AjQBEAmAOAfQAFALABASIABAeQAFAtAoB2QgXg4hGhAg");
	this.shape_1.setTransform(54.6936,32.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_14, new cjs.Rectangle(-2,-0.5,112.9,70.6), null);


(lib.Path_13 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().ls(["#F0EFE5","#EFEEE2","#EDEBD8","#E9E4C8","#E4DCB2","#DDD195","#DBCC8A"],[0,0.251,0.447,0.627,0.792,0.949,1],-43.9,0,43.9,0).p("AGDC/QAGgbgOgoQgbhPhjg9QiehjlUjGQguAXguAZQhdAygDAQQgCAKAUAbQAWAdAhAdQBXBNBSAGQBjAIBrAYQBzAaAYAZQAEAEAwBQQAmA+AsARQAuATAwAdQAZAPAOALQgHgMgIgUQgQgngDglg");
	this.shape.setTransform(43.9497,31.9384);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#F0EFE5","#EFEEE2","#EDEBD8","#E9E4C8","#E4DCB2","#DDD195","#DBCC8A"],[0,0.251,0.447,0.627,0.792,0.949,1],-42.8,0,42.8,0).s().p("AGFEYQgwgdgvgSQgsgSglg+QgwhQgEgDQgZgZhzgbQhqgYhjgHQhSgHhYhNQghgdgVgdQgVgbACgKQADgPBdgzQAvgZAtgXQFUDGCfBjQBjA9AbBPQANAogGAbQADAlAQAoQAIATAIAMQgPgLgYgPg");
	this.shape_1.setTransform(43.2661,31.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_13, new cjs.Rectangle(-0.9,-0.4,88.80000000000001,64.2), null);


(lib.Path_12 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().ls(["#F0EFE5","#EFEEE2","#EDEBD8","#E9E4C8","#E4DCB2","#DDD195","#DBCC8A"],[0,0.251,0.447,0.627,0.792,0.949,1],-46.7,-2.4,46.8,-2.4).p("AGsDMQgThLgzhiQhojEimh0Qioh3itgmQhLgRhhAAQgkAAgBAoQgCAuA7A2QAsAoCWCVQCOCEA6AZQBMAhC3B1QC+B6AKAcQANAoAAAoQADghgCgrQgFhVgdgug");
	this.shape.setTransform(46.8002,46.0778);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#F0EFE5","#EFEEE2","#EDEBD8","#E9E4C8","#E4DCB2","#DDD195","#DBCC8A"],[0,0.251,0.447,0.627,0.792,0.949,1],-46.3,0,46.3,0).s().p("AHAFhQgKgci+h6Qi3h1hMghQg6gZiOiEQiWiUgsgoQg7g3ACgtQACgoAjAAQBhAABLAQQCtAnCoB2QCmB1BoDDQAzBjATBLQAdAuAFBVQACAqgDAhQAAgogNgog");
	this.shape_1.setTransform(46.8002,43.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_12, new cjs.Rectangle(-0.5,-0.5,94.6,92.7), null);


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
	this.shape.graphics.f().ls(["#F0EFE5","#EFEEE2","#EDEBD8","#E9E4C8","#E4DCB2","#DDD195","#DBCC8A"],[0,0.251,0.447,0.627,0.792,0.949,1],-28.2,0,28.3,0).p("AEIGMQAOgvAAhGQAAiMhDh0QhXiogfg4Qgzhag5gZQg6gZhahQQgtgoghgjQgUAfgKA2QgUBqAyBtQAyBsBCBSQAnAvBOBYQBRBnAhA7QA2BggJBMQgIBGA8g9g");
	this.shape.setTransform(28.2643,50.5793);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#F0EFE5","#EFEEE2","#EDEBD8","#E9E4C8","#E4DCB2","#DDD195","#DBCC8A"],[0,0.251,0.447,0.627,0.792,0.949,1],-27.7,0,27.8,0).s().p("ACXHNQAJhLg2hhQghg7hRhmQhOhZgnguQhChTgyhsQgyhsAUhrQAKg1AUggQAhAjAtAoQBaBQA6AZQA5AZAzBaQAfA5BXCnQBDB1AACMQAABGgOAuIg9BMQgcAdgNAAQgPAAAEgmg");
	this.shape_1.setTransform(28.2643,50.7327);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_11, new cjs.Rectangle(-0.5,-0.1,57.6,102), null);


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
	this.shape.graphics.f().ls(["#F0EFE5","#EFEEE2","#EDEBD8","#E9E4C8","#E4DCB2","#DDD195","#DBCC8A"],[0,0.251,0.447,0.627,0.792,0.949,1],-34,0,34.1,0).p("AlGoxQgGAygCBBQgDCCAZBLQAZBLAhBAQARAgALAQIBaAyQBpBCBOBTQBPBTBbCuQAuBWAeBGQAOgLALgcQAYg3gJhPQgMh0gPgyQgZhPhEhSQgegkgzgqQg5gugagYQhchUgQhkQgRhogDg3QgBgcABgGQgrgYg1gXQhpgvguAAg");
	this.shape.setTransform(34.0414,56.6603);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#F0EFE5","#EFEEE2","#EDEBD8","#E9E4C8","#E4DCB2","#DDD195","#DBCC8A"],[0,0.212,0.376,0.525,0.663,0.796,0.839],-33.5,0,33.6,0).s().p("ADZGTQhbithPhTQhOhUhphBIhagyQgLgRgRggQghg/gZhLQgZhLADiCQAChBAGgyQAuAABpAvQA1AXArAXQgBAHABAbQADA4ARBoQAQBkBcBUQAaAXA5AvQAzAqAeAkQBEBRAZBQQAPAxAMB1QAJBPgYA3QgLAcgOALQgehGguhXg");
	this.shape_1.setTransform(34.0414,56.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_10, new cjs.Rectangle(-0.5,-0.5,69.1,114), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F0EFE5","#EFEEE2","#EDEBD8","#E9E4C8","#E4DCB2","#DDD195","#DBCC8A"],[0,0.251,0.447,0.627,0.792,0.949,1],-39.1,0,39.2,0).s().p("AmGB4QAHgXAdg2IAbgwQCCgUBhgiQA/gVA5gOIBWgSQAlgIA8ARQA8AQAhAZQAgAZgBgOQgBgNgegSIhrg8IBKATQBPAbAUAsQAaA2ADANQADAOgWgTQgUgRgIANQgGANALAPQAGAHgWgIQgkgOgZgCQgggCg/ADQg8ADgLADQgLACAzgOIBQgVQAmgJg7ABQg7AAg8ARQg+ATAagbQAagbArgOQArgOhOAGQhMAGgfATQgiATABAYQABAYAcgIQAjgKACAKQACAKhFAUQgtANhEAfQg0AYgpAFIhgANIgEAAQghAAAGgXg");
	this.shape.setTransform(39.215,14.3044);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_9, new cjs.Rectangle(0.1,0,78.30000000000001,28.6), null);


(lib.Path_8_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNBNQhAgOhjg8QgvgbgNgLQAUAOCBAqIB7AoQgGgJgTgPQglgdhDgaQhGgdhIgrQhSgxA9AfQAVALBLARQBGAQAlAWQAxAeAmAIQAmAIgXgWQgegehjg5IAkAJQAsAOArAbQAlAXATAeQAVAfAaASQAjAZA3AZQAbANAUAHQhGgNglgRIhFgnQgogWAGASQAGATAhAfQAQAPAPAMQg2gUhmgYg");
	this.shape_1.setTransform(27.1157,11.5149);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8_1, new cjs.Rectangle(-1.1,-0.5,56.5,24.1), null);


(lib.Path_7_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1.graphics.f("#FFFFFF").s().p("ADaB4QhFgXhUgKQhwgNh8gbIAZgCQAbgCAJAEQANAHBEADQBBACgsgPQgvgRhAgoQhBgoAeAIQAkAKCCBBQgGgHgPgQQgigfg6gpQg6gqhQgeQgogPgdgHQAZgIAlABQBHACA3AtQBGA8A2AkQBAApBRAkQBGAfA0AsQAaAWAMAQQgXgZhEgWg");
	this.shape_1.setTransform(30.85,16.7235);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7_1, new cjs.Rectangle(0,0,61.7,33.5), null);


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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().ls(["#F0EFE5","#EFEEE2","#EDEBD8","#E9E4C8","#E4DCB2","#DDD195","#DBCC8A"],[0,0.251,0.447,0.627,0.792,0.949,1],-20,0,20.1,0).p("AjBkxQgEA+AKAgQAGASAMAVQAFAIAUAcQBXCBAqCXQAoCYgKCaQAngWAugDQAugDArAPQAOh0gQh1QgRh1gthrQAjChgfCiQAHhhgUhhQgVhhgthVQAqC/gJDCQABgggXg+QgjhdgBgEQgjiAgShBQg0i0gGgRQgnhzgxhDQgRATgCAyQgBAcABAxg");
	this.shape_1.setTransform(20.0695,45.952);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#F0EFE5","#EFEEE2","#EDEBD8","#E9E4C8","#E4DCB2","#DDD195","#DBCC8A"],[0,0.251,0.447,0.627,0.792,0.949,1],-19.5,0,19.6,0).s().p("AgPCRQgqiYhXiAIgZgkQgMgVgGgTQgKgfAEg+QgBgyABgbQACgzARgSQAxBDAnBzIA6DEIA1DCIAkBhQAXA+gBAgQAJjCgqi/QAtBVAVBhQAUBggHBhQAfihgjihQAtBrARB0QAQB2gOB0QgrgPguADQguADgnAWQAKiagoiYg");
	this.shape_2.setTransform(20.0695,45.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_1, new cjs.Rectangle(-0.7,-0.2,41.300000000000004,92.2), null);


(lib.Path_5_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1.graphics.f().ls(["#F0EFE5","#EFEEE2","#EDEBD8","#E9E4C8","#E4DCB2","#DDD195","#DBCC8A"],[0,0.251,0.447,0.627,0.792,0.949,1],-29.7,0,29.8,0).p("AA1BeIgzhAQA+gQAJhvQAFBxArBsQAnADAqAYQAaAOAvAiQhBhagegwQgxhOgXhHQgHgUgIgFQgEgCgMgDQgsgEgoAQQgLAEgFACQgKAEgIABQgdAEgggbQgKgHgtgwQgggigVgHQgegJgcAeQgXAZAAAsQAAAYAKAyQAAACAcBPQAVA8gHATQARguAFg1QAcAfAeAdQAFgRAQgFQAIAZAcAPQAZAMAgAAQATABAlgDQAZgBASACQAEAEAFADIgFgGQAFABAEABQgHgEgHgFQgggUgYgdQAYAeAhAZQACABACAAgAgFAqIACADAgFAqQgCgCgCgDQgigngRgwQAUAyAjAqg");
	this.shape_1.setTransform(29.7384,22.1543);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#F0EFE5","#EEEDE1","#EAE8D8","#E2DEC8","#D6D0B1","#C8BF94","#B8AB74"],[0,0.204,0.361,0.506,0.639,0.765,0.878],0,20.8,0,-20.7).s().p("ADTCgQgqgYgngDQgrhsgFhxQgJBvg/AQIA0BAQgggVgZgcQAZAcAgAVIAFAHIgFgHIAOAJIgJgCIAEAGIgIgHIAEABIgEgBQghgZgZgeQAZAeAhAZQgSgDgZACQgmADgSgBQggAAgZgMQgcgPgIgZQgQAFgFARQgegdgcgfQgFA1gRAuQAHgUgVg7IgchRQgKgyAAgYQgBgsAXgZQAcgeAfAJQAVAHAgAiQAtAwAKAHQAgAbAdgEQAIgBAJgEIAQgGQAogQAtAEQAMADADACQAJAFAGAUQAYBHAxBOQAdAwBCBaQgvgigagOgAAAAuIACAFIADADIgDgDQghgqgVgyQARAvAjAog");
	this.shape_2.setTransform(28.85,21.2622);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_1, new cjs.Rectangle(-0.9,-1.1,60.4,45.4), null);


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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().ls(["#F0EFE5","#EFEEE2","#EDEBD8","#E9E4C8","#E4DCB2","#DDD195","#DBCC8A"],[0,0.251,0.447,0.627,0.792,0.949,1],-32.1,0,32.2,0).p("Ah/kCQggAKgPAGQgaALgNAQQgLAOgLAiQgpB8gPBDQgaBsABBZQAlhjA4hXQAdAnAAAzQBvhmBch0QgBAzAsBAQBGBpACAEQATAnAGArQAGAsgIAqQBuivA5jEQguARgaAGQgoAJghgGQgtgIgkgkQghghgSgvQgCgFgKhKQgIg6gRgIQgUgLgsAcQgwAigPAGg");
	this.shape_1.setTransform(32.1515,32.4482);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#F0EFE5","#EFEEE2","#EDEBD8","#E9E4C8","#E4DCB2","#DDD195","#DBCC8A"],[0,0.188,0.333,0.467,0.592,0.71,0.745],0,30.9,0,-30.9).s().p("ACXDfQgGgrgTgnIhJhtQgrhAAAgzQhbB0hwBmQAAgzgdgnQg3BXglBjQgBhZAZhsQAQhDAoh8QALgiAMgOQANgQAagLQAPgGAfgKQAQgGAvgiQAtgcAUALQARAIAIA6QAKBKACAFQASAvAhAhQAkAkAsAIQAhAGApgJQAagGAtgRQg5DEhuCvQAJgqgGgsg");
	this.shape_2.setTransform(32.0231,31.4068);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_1, new cjs.Rectangle(-0.5,-0.5,65.1,65.4), null);


(lib.Path_3_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1.graphics.f().ls(["#F0EFE5","#EFEEE2","#EDEBD8","#E9E4C8","#E4DCB2","#DDD195","#DBCC8A"],[0,0.251,0.447,0.627,0.792,0.949,1],-63.6,0,63.6,0).p("AiXn+QBxggB3ANQB4AMBoA3QhygWiRAXQhYAPinAvQC5gQCwA3QjVgYjXAfQCnAsCtAUQjeADjcgfQC5BjDTAhQDTAhDPgmQBEgNAqAFQA9AGAWApQhyAyh2AlIAjA0Qi/gfimhgQBVBbAqAzQBDBRAqBJQAzBXAXBZQAZBhgLBaQgcg+g0gvQg0gvhBgVQAegogJhAQgGgsgdhCQguhrgjg1Qg2hUhFgnQBFBPAnBiQAoBkACBpQg7hvg3hBQhJhWhYghQgNgFgogMQgigKgTgJQgVgJg9goQgyghgigJQAXA9A2ApQA2AqBAAHQADAbgUAWQgVAXgbABIAQDNQgchthVhMQgQgPgtgiQgogdgVgUQgsgtghhHQgUgtgdhZQBAABBDgUQA5gQBDgiQAggQBNg+QBAg0AxgNg");
	this.shape_1.setTransform(63.5793,53.8609);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#F0EFE5","#EFEEE2","#EDEBD8","#E9E4C8","#E4DCB2","#DDD195","#DBCC8A"],[0,0.188,0.333,0.467,0.592,0.71,0.745],-62.9,0,62.9,0).s().p("AE/GiQg0gvhBgVQAegogJhAQgGgsgdhCQguhrgjg1Qg2hUhFgnQBFBPAnBiQAoBkACBpQg7hvg3hBQhJhWhYghQgNgFgogMQgigKgTgJQgVgJg9goQgyghgigJQAXA9A2ApQA2AqBAAHQADAbgUAWQgVAXgbABIAQDNQgchthVhMQgQgPgtgiQgogdgVgUQgsgtghhHQgUgtgdhZQBAABBDgUQA5gQBDgiQAggQBNg+QBAg0AxgNQBxggB3ANQB4AMBoA3QhygWiRAXQhYAPinAvQC5gQCwA3QjVgYjXAfQCnAsCtAUQjeADjcgfQC5BjDTAhQDTAhDPgmQBEgNAqAFQA9AGAWApQhyAyh2AlIAjA0Qi/gfimhgQBVBbAqAzQBDBRAqBJQAzBXAXBZQAZBhgLBaQgcg+g0gvg");
	this.shape_2.setTransform(63.575,53.1974);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_1, new cjs.Rectangle(-0.3,-0.5,127.8,108.2), null);


(lib.Path_2_4 = function(mode,startPosition,loop,reversed) {
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
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFA625").s().p("AgYKJQgcAzgUAyIgHAaQgdhqAXhsIgVAVIATgZQgngBggATIAhgaQiXhyiyg1IApBhIANgbIAvAfQglgKgaAlQgJANgEAMIgIg1QhEAGhFAYIBcg+Qg6AMg3gYIBKgYIiggzQAsgYAygEQAzgEAvARQgrgbgwgLQgkACgkgIQAlgBAjAHQAmgBAmgLQhSidhygrQghgNhkgNQhUgMgrgaQBWASBWgZIhUhPIBnATQhWhOhog0ICQgVQhcgdhGhCQA3gKAzAKQhZgtgxhVQAfAWBmAYQBVAUA4AGQgLhFhPhOQhKhKhqg2QB/A3BtBYIgiglIAhgOIhRhqQBRA9A5BRQgOgwghgpQAuATAhAkIgVgtQAUAXAeACQg5h8hOh3QBGAoA4A6QA5A7AmBGIgIhtIAyBBQAFgggJghIAbAvQAFg5gVhFQgNgsgjhNQBqB6BECWQAPgWAFgcQAFgcgGgaQARAiAbAZIAIhlQAIAzAeApIAChnQASA5AcA7QAag1AGg6IAaBVIAYgzIASA3QAKg3AXgxQgMBPAQBSQA0gnArgyIgVBVIAoglIAQAqIBAgsQgMAbAAAeIAfgcIgMBaQAcgYARgjQgRAlgCArIBMhQIggBgQBthcA+iBQgxCbhXCJIDOh1QhHBCg8BPQBygCBdg+IilCLQBPgLBXg1QA3giBchLQhfB9iIBOQBYAFBTgXQg4Aeg1AqQAtgDAoAOQgHAKgNADQgNAEgLgGIgmAnQBOgLBCgUQg+AWg6AlQBigdBnAJIhtAeQBZgRBXgCIjJAwQCdAACUAwQhmAAg2AJQhVAOg4AoQBQAcBTgGIhoAlIBrgFIhbAbQCLglCOATQiJASh/A+QB9AdB+AOQiKgMiAA6QCuBAC7gRIk9AkQBnAUBgAqQg1ASg0gSIBgAlQhqgWhwAEIBOA6IhQAJQAVAqApATIg8gDIBBAkQg0gCgoAdIA6A6QgyATg0ABIA5AXQglAIgkgJIAkALQg0gLg3gVQAhA4AwA1QhPg7hcglQAUAxAFA1Qgqgng2gUQADAlAPAeIgwgrQAlBCBBAnQhQgThHguQhGgsg0hBIAOCWQgbg5gtgrQAMBBAeA8QhnhXgyh/gArpnoQgBgJgFgGQgFgGgHgCQAFAOANAJgAmtIYIAHAqQgMgUAFgWg");
	this.shape_2.setTransform(101,86.25);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_4, new cjs.Rectangle(0,0,202,172.5), null);


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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFA625").s().p("AhuCnQgUglgRgzQgziXAih3QAZAHAhAQQBDAhAnAvQAmAwBKgFQAlgDAegMQgMASgLAZQgUAxAIAnQAFAUgRgHIgtgbQhOgxgeAjQgmAqgSAsQgOAhAAAbQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAQgEAAgOgZg");
	this.shape_1.setTransform(17.832,19.218);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_1, new cjs.Rectangle(0,0,35.7,38.5), null);


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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFA625").s().p("AgYC9Qghg7gWg8QgVg+gdAVQgOAKgJASQAAgFgDgIQgKgag0gmQgygkhHAiQgSAIgZAOQgQAIgBgIQABgVAeg0QAgg4AjgeQAegZBOgcQAngOAhgJIAcAAQgBANAKAjQANAuAUAoQA7B1BbAEQA6ADAngTIgbC+QgEgcgPgYQgggwg8ARQg8ARgDA4QgCAcAKAXQgMgQgQgegAFICLQAOg8gbgRQgagRgwgYIgogTQAUgKAOgRQAVgZAEgZICLB1IhaCYQALgaAIgdgADFAAIAEACIgEACgADJACg");
	this.shape_1.setTransform(39.85,23.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_16, new cjs.Rectangle(0,0,79.7,47.1), null);


(lib.Path_11_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#558943").s().p("AC3DbQglgwgHgUQgGgRgDgjQgDgkgGgQQgSg4hVgsQgsgWgVgMQgmgUgVgXQgOgPgPgZIgbgpQgiglgTgSQAcgJAxgFIBOgHQAcgEAOAHQALAFAMARQApA0AOAdQAJAVAJAfIAQA1QAMAmAZA0IApBaQAwBsgEBNQgCgegfgog");
	this.shape_2.setTransform(21.6193,28.9738);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_11_1, new cjs.Rectangle(0,0.1,43.3,57.8), null);


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
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#DBD49B","#5CAA41"],[0.027,1],-7.8,0,7.8,0).s().p("AhNgGQABgrAjgLQAggKAiAdQATARAiAiQgyABgmARQADAEABAFQAAAEgDAEQgCAEgFABQgFACgEgCQgLgGgKAGQgFADgNALQgNgtAAgZg");
	this.shape_2.setTransform(7.7991,6.3468);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_10_1, new cjs.Rectangle(0,0,15.6,12.7), null);


(lib.Path_9_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1.graphics.lf(["#DBD49B","#5CAA41"],[0.027,1],-14.4,0,14.6,0).s().p("AiCgDQgZgKAXgKQAVgJASABQAOAAAQAHIAcANQAqARAuALQA4ANAjgFQgtAHgsAAQheAAhbgjg");
	this.shape_1.setTransform(14.374,3.2211);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_9_1, new cjs.Rectangle(0,0,28.8,6.5), null);


(lib.Path_8_2 = function(mode,startPosition,loop,reversed) {
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
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#558943").s().p("AB+A+QgVgJgpgGQgtgFgQgDQgTgEgHgIQgLgSgQgUQgTgbgigPQgQgHgNgCQCAACBZBCQAeAWANAVQAJAOgGAAIgFgBg");
	this.shape_2.setTransform(13.3467,6.322);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8_2, new cjs.Rectangle(0,0,26.7,12.7), null);


(lib.Path_7_2 = function(mode,startPosition,loop,reversed) {
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
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#558943").s().p("AA0AZQgagLgxgFQgxgGg0gSQgZgKgQgIQAlAGAjAFQBEAIA9gCQBJgCApALQARAEgBAEQAAAFgWADQglAFgYALIgQAJQgDgEgMgFg");
	this.shape_2.setTransform(16.6277,3.425);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7_2, new cjs.Rectangle(0,0,33.3,6.9), null);


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
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#558943").s().p("ABsAiQAOALALAOQAQARAFAOIgug4gAAoBYIgeglQgigvgIgTQgEgKgQgPQgSgQgEAjQgCAQgDAEQgDAEgKgMQgfgpgfgcQA4gLBRAAQAyAAAwAnQAYAUAOATQh9hDAiAcQAZAVA3A/QgWgTgagNQgQgHgugjQgHgFAJAlQAHAZAeA9QAFALgBAAIgBgBg");
	this.shape_3.setTransform(15.45,8.95);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_2, new cjs.Rectangle(0,0,30.9,17.9), null);


(lib.Path_17 = function(mode,startPosition,loop,reversed) {
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
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#558943").s().p("AB9CSQgzhkgjgiQg2g0gZgWQgrgmgggKQgfgIgOgZQgHgNgBgKQAXATAUAOQAoAagQgfQgPgegKgnIgGghQAFAWANAXQAZAtA7AsQBEAzAZAgQAWAcAcBDQAjBYAVBQQgTgsgZgyg");
	this.shape_2.setTransform(16.875,24.05);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_17, new cjs.Rectangle(0,0,33.8,48.1), null);


(lib.Path_11_2 = function(mode,startPosition,loop,reversed) {
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
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#558943").s().p("ADdFUIgGgRQgQg4gPgpIgWg5QAwBuAJAvIACAOIAAAAgAAygWQh9h/gsg2QgHgIgqAGQgWADgUAEIgKgFQAsgaApgSQAqgSBvhKQgUASgTAZQglAzAQAlQALAYA5BMQA2BHAOAqQAHAUArBkQgthjgxgwg");
	this.shape_3.setTransform(22.1125,34.0068);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_11_2, new cjs.Rectangle(0,0,44.2,68), null);


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
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#DBD49B","#5CAA41"],[0.027,1],-10.7,0,10.8,0).s().p("AAQABQgagDgjAEQgTACgrAIICDgmIAqgOQAbgIAPAGQgEALgNANIgWATIgdAVQgVAQgDAHQAHgVgHgXg");
	this.shape_3.setTransform(10.775,4.5292);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_10_2, new cjs.Rectangle(0,0,21.6,9.1), null);


(lib.Path_9_2 = function(mode,startPosition,loop,reversed) {
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
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#DBD49B","#5CAA41"],[0.027,1],-12.4,0.5,12.4,0.5).s().p("AAVAJIgWgBIAUgKIhxAAQgUAAgJACQCFgpBmgFQAGAAADABQADACAAAFQAAAEgCADQgEAEgKAEQg/AYgtAuQASgVADgRg");
	this.shape_2.setTransform(12.4,4.7125);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_9_2, new cjs.Rectangle(0,0,24.8,9.5), null);


(lib.Path_8_3 = function(mode,startPosition,loop,reversed) {
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
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#DBD49B","#5CAA41"],[0.027,1],-24.4,0,24.5,0).s().p("Ah4ApIAKgCIDkhAQhbgPgxADQhDADguAcQA5gkBygeQAjgJBFAKQBFAKAjgKQgpAqhEAYQgzAShMAKQhMAJgqAHIiGAmQAzgXBJgNg");
	this.shape_3.setTransform(24.45,7.7811);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8_3, new cjs.Rectangle(0,0.1,48.9,15.4), null);


(lib.Path_7_3 = function(mode,startPosition,loop,reversed) {
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
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#558943").s().p("AhxgJIhhAlQA2gaAygkQhLgKhEAfQAkghBagGQBlgFAigTQhYAChWgWQA1AKBQgPQB2gVAOAAQAwgEA0gOQAkgKA9gXIi7BLQAtgQAyAJQA4AKAnAlIg4gSQgfgJgagBQgdgCgjAGQgYAEgnAMQg3AOgZAJQgsAPghAUQggATg1AxIh8ByQBMhvByhIg");
	this.shape_3.setTransform(30.35,17.35);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7_3, new cjs.Rectangle(0,0,60.7,34.7), null);


(lib.Path_7_4 = function(mode,startPosition,loop,reversed) {
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
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#558943").s().p("ADBBRQibg2g1gPQhUgXhzAOQhzAPhoAoQgkAOgaANQBhg1BBgwQALgJBKhIQAsgtAzgOQBSgWALgBQAmgCBPAgQA7AYB0AoQBcAnAgA7QAgA8A5A8QAdAdAVASQhpgpjFg6g");
	this.shape_4.setTransform(51.45,18.0441);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7_4, new cjs.Rectangle(1.9,0.1,99.1,36), null);


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
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#558943").s().p("AipCJQAjhHANgwQACgZgIgTQAOARADAYIACAVQACAHAHgGQAagNAIgIQAOgOgMgWQgLgTgZgaIgIgHIAPAKQAnAdAIAEQAWAIAbgPQAagOgGgHQgTgQgRgVQgWgagugEQgXgCgSADQALgEARgCQAhgFAaAIQAHACAxAkQAiAYAcgRQAwgdAwgyQggAvgdAgIglAqQgUAUgdATQgSAKgkAMQgfAJgeAaQgaAVg0A+QgQAUgCABIAAAAQgDAAAMgYgAiQgnQgRgKAAgFQAAgEAMAHQAPAJAHAQQgHgHgKgGg");
	this.shape_4.setTransform(18.0117,16.102);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_3, new cjs.Rectangle(0,0,36,32.2), null);


(lib.Path_18 = function(mode,startPosition,loop,reversed) {
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
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#558943").s().p("AFxB2IARAGQAPAGAEAFgAEqBoQhBgIhFgWQg7gShggoQhjgnhagLQhwgPhwAbQBjgaBvgUQBKgNA0gcQAagNALgMQgGAKgKAMQgWAYgYAMQgaAOAYABQARAAAxgFQAzgGBhAKQhhgEglAMQgcAIAQAFQAMAEA9AGQBLAIB/AcIhDgHQhOgIgcAAQgpACACANQACAPBAAMQBdASBfAeIBPAmQgcgJgrgFg");
	this.shape_3.setTransform(41.8125,13.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_18, new cjs.Rectangle(1.4,0,80.89999999999999,27), null);


(lib.Path_19 = function(mode,startPosition,loop,reversed) {
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
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#558943").s().p("AifFLIATg4QAhhkAMgwQAXhgAAhgQAAgwgEgvIgJgtQgFgeAFgNQALAbANA/IAPAsQAKAbAAAPQAEhGgShEQAQAkASAKQANAIAPgFQAPgEAEgOQACgKgIgSIg7iJQAYAxAkAqQAQgXAEggQAEgdgIgeQgGgbgTgiQAZAlAfAiQAMgYgCgdQgBgMgDgLQANATAZAMQAoAUAmgOQglAdgVAVQgeAegRAfQghA8gPB6QgOB1gmA+QgIAOglBHQgfA6gTAYQgfAlgXAzIgjBnQAOg5AVgug");
	this.shape_4.setTransform(19.475,47.45);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_19, new cjs.Rectangle(0,4.1,39,86.80000000000001), null);


(lib.Path_22 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#DBD49B","#5CAA41"],[0.027,1],-9.1,0,9.1,0).s().p("AAVCtQgHgWgKgUQgJgVgQgMQgXgSgRgUQgagfgCgNQgCgHAHgoIAQhcQAHBGAYAlQAKAQAHgDQAHgDAAgWQAAglgRhCQgNgvADAFQAGAKAMAmQASA5AIAbQANAjAGAwQADAgAFgGQAKgNAEgOQAFgYgEg1QgFhSgKgiQAlBHANAiQARAugMAwQgEAQgSAeQgUAggIAZQgJAZgEAAIgCgCg");
	this.shape.setTransform(9.1464,17.6163);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_22, new cjs.Rectangle(0.1,0.2,18.099999999999998,34.9), null);


(lib.Path_21 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#558943").s().p("Ag2h2IBtjmQgVE+gVB3QgMBLgbBkQgPAygLAjg");
	this.shape.setTransform(5.5,34.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_21, new cjs.Rectangle(0,0,11,69.8), null);


(lib.Path_19_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#558943").s().p("AhEA8QgCgQgcgZQgjgdgwgPQgxgQgVAHIhNAoQhIAlgUAHQgcALAWgWIAzg0QAfggAZgTQAZgTAogDQAUgBAPACQDBARBEgBQAngBBOgMQBpgQAkgEQA+gHAsA5QAWAdAJAdQgFgKgLgNQgWgagbgJQgggMgbgCQgdgDggAHQgpAJgSAHQgVAJAkgCQAlgBATAGQAUAHgcAAQgVAAgXAEIg8ANQgcAGgzAUQgiAOAIgHQAKgIAegSQAXgPgFACQhcAbgcAaQggAcgTAnQAAgdgCgPg");
	this.shape.setTransform(43.7488,10.3867);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_19_1, new cjs.Rectangle(0.1,0,87.4,20.8), null);


(lib.Path_18_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#558943").s().p("ABXHKIgMgnQgLgigEggQgCgUgBguQgBgggFgVQgPg4gQgLQgKgHgHAEQgKAGgbAnQgZAkgFA1QgCAaADATQgEgPgDgUQgFgoAIgaQALggANggQAPggALgPQALgPAAgYQAAgUgJglQgIgegJAFQgUAVgYAVQgaAYglAsQgZAeACgGQADgMAYglQAbgrAagcQAXgYACgPIAHguIANgqQgCgDgtAWQgoATg6A0QgeAagVAWQAeg0AdgZQBehNAZgYQAPgQgBgKQgFgPgCgNQgDgVgMgHQgNgHgqgBQhsgEhsBOIAigiQAYgZBjgVICBgbQAegJAHgWIAAgMIgEgQQgHgcgugGQgggEhXAFQg9AEhSAiQgfANgXAMIA2gcQBPgnAtgJQAogJBKAJQBIAIALgCQAPgEANgkIAPg0QgEAVgIAWIgDAJIgIAgQgGAWAIALQAHAKAOgDIBRgWQBOgVArgHQAsgHA6AMQAdAGAUAHQg7gGg0gEQghgChIAQQg6ANgYAJQhFAdgCAfQgBATAWAJQARAGAjAAQAlAAA5AGQBDAGAgAJQAeAJAvAiQAYARASAPIh9g/QgbgOhWgBQg3AAguADQgVACgNAKQgOAKAAAQIABAgQADAQAOAGQAPAHAxAEQApADBfADQBJADAsAWQAWALAHAKQgMgHgUgIQgpgRgsgCQiPgIg6AGQg3AGALAvQAGAZAOAKQARAMAsAGQAmAGBIAvQAlAYAcAWQh2hGgsgMQgjgJgQAFQgRAFgDAWQgDAWAOAfQAMAaAbApQAUAgAUBXQAKArAFAlIgviGQgTgzgNgFQgNgFAGAVQAJAdAHBpQACAkAGBAIAEAmIgBAAgAluiGQAQgNAQgMQgoAogPALQgLAHgCAAQgDAAAnghg");
	this.shape.setTransform(40.0683,45.8471);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_18_1, new cjs.Rectangle(-0.2,0,80.60000000000001,91.7), null);


(lib.Path_17_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#DBD49B","#5CAA41"],[0.027,1],-19.1,0,19.1,0).s().p("AilAhQAWgVAbgNQANgHAngPQA5gXA5gGQBJgIAoAJQAZAFADASQADARgegCIAUAYQg2ATg1gIIA/gVQhBgkhZARQgWAEhsA0QgmASgGABIgBAAQgHAAAfgYg");
	this.shape.setTransform(19.1195,5.7387);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_17_1, new cjs.Rectangle(0,0,38.3,11.5), null);


(lib.Path_16_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#DBD49B","#5CAA41"],[0.027,1],-7.8,0,7.8,0).s().p("AhFAoIALgdIACgIQgCgKgTAAQAOgQAUgIIAPgFIACAAQALgCALAAQAjgDAiABQANAAAAAIQgpABgfAVIAoAKQgLAPgbAEIgUADQgNACgIAEIgSAKQgHADgGAAIgFgBg");
	this.shape.setTransform(7.8,4.1063);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_16_1, new cjs.Rectangle(0,0,15.6,8.2), null);


(lib.Path_15_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#DBD49B","#5CAA41"],[0.027,1],-7.3,0,7.4,0).s().p("AhIBfQACgTAHggQAHgbALgSQAMgWAfggQAZgcAegSQAPgJAFAAQgUANgaAkQgXAggRAiIgdA8QgPAfgIALQgDAEgCAAQgDAAABgQg");
	this.shape_2.setTransform(7.3568,11.2361);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_15_1, new cjs.Rectangle(0,0.1,14.7,22.299999999999997), null);


(lib.Path_14_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#DBD49B","#5CAA41"],[0.027,1],-7.8,0.4,6.8,0.4).s().p("AhAByQgKgbgCgLQgFgTAJgUQAKgYAJgOQAKgRAdgmQAYgiAigRQA4gegiAXQg5AlgiBEQgRAgARAMQAQAMgLATIgcA0QgFAHgEAAQgEAAgDgLg");
	this.shape_2.setTransform(7.8741,11.6811);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_14_1, new cjs.Rectangle(0,-0.8,15.8,25), null);


(lib.Path_13_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#DBD49B","#5CAA41"],[0.027,1],-3.2,0,3.3,0).s().p("AgVALQASgqALgJQAFgFACAEQAWgNgFATQgFARgUAYQgaAigHAFIgEACQgGAAAPgkg");
	this.shape_2.setTransform(3.283,4.694);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_13_1, new cjs.Rectangle(0,0,6.6,9.4), null);


(lib.Path_12_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#DBD49B","#5CAA41"],[0.027,1],-7.3,0,7.4,0).s().p("Ag1B2QgPgPgCgFQgGgPAKgcQALgdAIgNIAsg+QAfguAegUQAKgHAEABQAEAAgGAGQgeAegZAnQgiA0gHAsQgJA1gDALQgDAIgFAAQgDAAgEgEg");
	this.shape_2.setTransform(7.3459,12.2154);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_12_1, new cjs.Rectangle(0,0,14.7,24.5), null);


(lib.Path_11_3 = function(mode,startPosition,loop,reversed) {
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
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#DBD49B","#5CAA41"],[0.027,1],-3.8,-0.8,3.9,-0.8).s().p("AggCFQgFgSgBgTIAAgsQAAgWAHgPQAPgkAFgQIAPgyQACgHAFgGQAPgRgDgWQALAhAEAYQADAUgOAdIgmBKQgTAngBArIABARg");
	this.shape_4.setTransform(3.909,15.925);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_11_3, new cjs.Rectangle(0.1,1.9,7.7,28.1), null);


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
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#DBD49B","#5CAA41"],[0.027,1],-9.6,0,9.8,0).s().p("AAECKQgHgBgGglQgIgthKidQgSgrA0AKQArAHA7AiQAsAZAHASQACAGgDAkQgBATgQAYQgjA2gGAKQgXAogJAAIgBAAg");
	this.shape_4.setTransform(9.638,13.7935);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_10_3, new cjs.Rectangle(0,0,19.3,27.6), null);


(lib.Path_9_3 = function(mode,startPosition,loop,reversed) {
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
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#DBD49B","#5CAA41"],[0.027,1],-14.9,0,15.1,0).s().p("ABPBJQgfgdgqgYQg5gggUgIQgNgGgJACQgIACgJgJQgTgRgMgIQgVgOAogDQAOgBBWAAIBoAAQAyACANAQQALAOgRASQgbAcgJAiQgHAbgEAGQgDAEgEAAQgDAAgDgCg");
	this.shape_3.setTransform(14.9397,7.6042);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_9_3, new cjs.Rectangle(0,0.1,29.9,15), null);


(lib.Path_8_4 = function(mode,startPosition,loop,reversed) {
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
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#DBD49B","#5CAA41"],[0.027,1],-17.2,0,17.2,0).s().p("AB8AYQgfgMgwABQgmAAhKALQg5AJgQgNQgKgSgHgGQgYgYAQgFQAOgEAkAMQAPAGBdgCQBWgBAtAVQA3AZgIAIQgDADgGAAQgMAAgagLg");
	this.shape_4.setTransform(17.2028,3.4738);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8_4, new cjs.Rectangle(0,0,34.4,7), null);


(lib.Path_7_5 = function(mode,startPosition,loop,reversed) {
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
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#DBD49B","#5CAA41"],[0.027,1],-19.7,0,19.8,0).s().p("ACoBHQgFAAgngfQgegXhBgCIiFAEQhPACgFgBQgIgDAAgfQAAgaAhgNQALgFAHABQAGAAgHAGQgUAPgCAEQgFAJAQAOQAQANBDgGQAzgFA/gPQAggIAggYQAZgSAVADQAgADALAdQALAdgOAoQgNAngJAAIAAAAg");
	this.shape_5.setTransform(19.792,7.0794);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7_5, new cjs.Rectangle(0.1,0,39.5,14.2), null);


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
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#DBD49B","#5CAA41"],[0.027,1],-21.6,0,21.7,0).s().p("AjUA6QgNgOAbgdQAegfgHAVQgRAwAWgDQAHgBAkgMQAngOAfgHQAIgCBdgJQBDgFAagUQAbgVg4gMQg7gIAJgBQAYgDASAAQAiACAgAOQAeAMADAPQAKAnACAEQAIAQgDAEQgCADgOgFQg+gTgmgEQg9gHhFAPQgjAHgXAJQg9AUgJACQgSAEgMAAQgRAAgHgIg");
	this.shape_5.setTransform(21.657,6.5798);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_4, new cjs.Rectangle(0,0,43.4,13.2), null);


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
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#558943").s().p("AgHDRIgMhQIABAFIAKAiQAEATAAAJQAAANAGAhQAJAtADAcQAGApAGAhQgShSgPhigAgXBmQgCgXgQgDIgIAAQAAAAAAgBQAAAAAAAAQABgBAAAAQABgBABAAQAIgGgEguIgHhRIgCgaQgCgfABgMQAAgUAGgnQACgQADg3QABgeAOgeQAOghgDgQQgBgJgEgBQAeAGArgQQgKAFgLAJQgRAOgNASQgNAUgHAhQgJAugJB1QgHBXAYCoQgDgOgBgNg");
	this.shape_2.setTransform(5.3563,39.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_2, new cjs.Rectangle(0.1,0.7,10.6,77.89999999999999), null);


(lib.Path_20 = function(mode,startPosition,loop,reversed) {
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
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#558943").s().p("AAMCyIABAHQgKgKgQACQgKACgSAJQAYgYAGgPQAKgVABgrQABgJgCgGQgEgKgPgEQgHgCgRACQARgKAOgLIAIgIQABgDAAgKIABgSQABgMgCgHQgFgSgQgKQgPgKgTgDQAbgEAOgKQAVgOABgZQABgLgDgUQgEgcgDgBQAHABAHgGQAHgFACgJQgDAPgCAQQgBAOADAGQACAEAFADQAFADAEgBQgOARgFANQgCAJAAAOQABAPADAIQAGANAMACQgSAFgHAUQgEALAAAYQABAWADAIQAIASAQABQgNAFgFAPQgEAKACARIABAWIACATQAEAPANAKQANAKAPABQgUABgUAIgAgFixIAAAAIAAAAg");
	this.shape_5.setTransform(5.95,19.675);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_20, new cjs.Rectangle(0,0,11.9,39.4), null);


(lib.Path_5_2 = function(mode,startPosition,loop,reversed) {
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
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#558943").s().p("AhAFxQAKiGgHkUQgHj7gGgSQgDgJAsg7QAWgdAVgcIBBCvQAAAtgZCCQgPBOAACZIAAB2QgCgKg2CEQgYAygLAAQgNAAAFhDg");
	this.shape_3.setTransform(7.4903,43.5657);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_2, new cjs.Rectangle(0,0,15,87.2), null);


(lib.Path_1_3 = function(mode,startPosition,loop,reversed) {
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
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#DBD49B","#ADC579"],[0.027,1],0,109.2,0,-110.3).s().p("AAiQuQgEh1gGg3QgIhHgPgvQgMgoALg9QAQhhABgUQAEg0gQkzIgUmlQgGitgQpKQAAhmAIgVQAIgVAABvQAABfAQD0IAWFhQAGBUAAEDQAAETAGBwQAHCZACE4QABDkgCAAQgBAAgCgjg");
	this.shape_3.setTransform(3.8173,110.3791);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_3, new cjs.Rectangle(0,-0.1,7.7,221), null);


(lib.btn_access = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AwUD6IAAnzMAgpAAAIAAHzg");
	this.shape.setTransform(104.525,25.025);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,209.1,50.1);


(lib.titulos = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {detiene:30,fibra:34,calcio:35,magnesio:36,fosforo:37,potasio:38,proteinas:39,vitaminae:40,hierro:41,lipidos:42,vitaminab:43};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_30 = function() {
		this.stop();
		this.btn_back.addEventListener("click", fl_ClickToGoToAndStopAtFrame_11.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_11()
		{
			this.gotoAndStop("detiene");
		}
		
		
		
		this.btn_fibra.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame()
		{
			this.gotoAndStop("fibra");
		}
		
		
		this.btn_calcio.addEventListener("click", fl_ClickToGoToAndStopAtFrame_2.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_2()
		{
			this.gotoAndStop("calcio");
		}
		
		
		
		
		this.btn_magnesio.addEventListener("click", fl_ClickToGoToAndStopAtFrame_3.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_3()
		{
			this.gotoAndStop("magnesio");
		}
		
		
		
		
		this.btn_fosforo.addEventListener("click", fl_ClickToGoToAndStopAtFrame_4.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_4()
		{
			this.gotoAndStop("fosforo");
		}
		
		
		
		
		this.btn_potasio.addEventListener("click", fl_ClickToGoToAndStopAtFrame_5.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_5()
		{
			this.gotoAndStop("potasio");
		}
		
		
		
		this.btn_proteinas.addEventListener("click", fl_ClickToGoToAndStopAtFrame_6.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_6()
		{
			this.gotoAndStop("proteinas");
		}
		
		
		
		this.btn_vitaminae.addEventListener("click", fl_ClickToGoToAndStopAtFrame_7.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_7()
		{
			this.gotoAndStop("vitaminae");
		}
		
		
		
		this.btn_hierro.addEventListener("click", fl_ClickToGoToAndStopAtFrame_8.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_8()
		{
			this.gotoAndStop("hierro");
		}
		
		
		
		this.btn_lipido.addEventListener("click", fl_ClickToGoToAndStopAtFrame_9.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_9()
		{
			this.gotoAndStop("lipidos");
		}
		
		this.btn_vitaminab.addEventListener("click", fl_ClickToGoToAndStopAtFrame_10.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_10()
		{
			this.gotoAndStop("vitaminab");
		}
	}
	this.frame_34 = function() {
		this.stop();
	}
	this.frame_35 = function() {
		this.stop();
	}
	this.frame_36 = function() {
		this.stop();
	}
	this.frame_37 = function() {
		this.stop();
	}
	this.frame_38 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.stop();
	}
	this.frame_40 = function() {
		this.stop();
	}
	this.frame_41 = function() {
		this.stop();
	}
	this.frame_42 = function() {
		this.stop();
	}
	this.frame_43 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(30).call(this.frame_30).wait(4).call(this.frame_34).wait(1).call(this.frame_35).wait(1).call(this.frame_36).wait(1).call(this.frame_37).wait(1).call(this.frame_38).wait(1).call(this.frame_39).wait(1).call(this.frame_40).wait(1).call(this.frame_41).wait(1).call(this.frame_42).wait(1).call(this.frame_43).wait(1));

	// Capa_15
	this.btn_vitaminab = new lib.btn_access();
	this.btn_vitaminab.name = "btn_vitaminab";
	this.btn_vitaminab.setTransform(629.8,363.9,1,1,0,0,0,104.5,25);
	new cjs.ButtonHelper(this.btn_vitaminab, 0, 1, 2, false, new lib.btn_access(), 3);

	this.btn_lipido = new lib.btn_access();
	this.btn_lipido.name = "btn_lipido";
	this.btn_lipido.setTransform(770.1,256.85,1,1,0,0,0,104.5,25);
	new cjs.ButtonHelper(this.btn_lipido, 0, 1, 2, false, new lib.btn_access(), 3);

	this.btn_hierro = new lib.btn_access();
	this.btn_hierro.name = "btn_hierro";
	this.btn_hierro.setTransform(635.1,161.2,1,1,0,0,0,104.5,25);
	new cjs.ButtonHelper(this.btn_hierro, 0, 1, 2, false, new lib.btn_access(), 3);

	this.btn_vitaminae = new lib.btn_access();
	this.btn_vitaminae.name = "btn_vitaminae";
	this.btn_vitaminae.setTransform(814.15,60.2,1,1,0,0,0,104.5,25);
	new cjs.ButtonHelper(this.btn_vitaminae, 0, 1, 2, false, new lib.btn_access(), 3);

	this.btn_proteinas = new lib.btn_access();
	this.btn_proteinas.name = "btn_proteinas";
	this.btn_proteinas.setTransform(619.1,-52.8,1,1,0,0,0,104.5,25);
	new cjs.ButtonHelper(this.btn_proteinas, 0, 1, 2, false, new lib.btn_access(), 3);

	this.btn_potasio = new lib.btn_access();
	this.btn_potasio.name = "btn_potasio";
	this.btn_potasio.setTransform(94.95,328.3,1,1,0,0,0,104.5,25);
	new cjs.ButtonHelper(this.btn_potasio, 0, 1, 2, false, new lib.btn_access(), 3);

	this.btn_fosforo = new lib.btn_access();
	this.btn_fosforo.name = "btn_fosforo";
	this.btn_fosforo.setTransform(-67.75,211.25,1,1,0,0,0,104.5,25);
	new cjs.ButtonHelper(this.btn_fosforo, 0, 1, 2, false, new lib.btn_access(), 3);

	this.btn_magnesio = new lib.btn_access();
	this.btn_magnesio.name = "btn_magnesio";
	this.btn_magnesio.setTransform(137.3,140.85,1,1,0,0,0,104.5,25);
	new cjs.ButtonHelper(this.btn_magnesio, 0, 1, 2, false, new lib.btn_access(), 3);

	this.btn_calcio = new lib.btn_access();
	this.btn_calcio.name = "btn_calcio";
	this.btn_calcio.setTransform(9.7,36,1,1,0,0,0,104.5,25);
	new cjs.ButtonHelper(this.btn_calcio, 0, 1, 2, false, new lib.btn_access(), 3);

	this.btn_fibra = new lib.btn_access();
	this.btn_fibra.name = "btn_fibra";
	this.btn_fibra.setTransform(150.95,-39,1,1,0,0,0,104.5,25);
	new cjs.ButtonHelper(this.btn_fibra, 0, 1, 2, false, new lib.btn_access(), 3);

	this.btn_back = new lib.btn_access();
	this.btn_back.name = "btn_back";
	this.btn_back.setTransform(72.7,-17.95,2.0143,3.7533,0,0,0,104.5,24.8);
	new cjs.ButtonHelper(this.btn_back, 0, 1, 2, false, new lib.btn_access(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.btn_fibra},{t:this.btn_calcio,p:{x:9.7,y:36}},{t:this.btn_magnesio,p:{x:137.3,y:140.85}},{t:this.btn_fosforo,p:{x:-67.75,y:211.25}},{t:this.btn_potasio},{t:this.btn_proteinas},{t:this.btn_vitaminae,p:{x:814.15,y:60.2}},{t:this.btn_hierro,p:{y:161.2,x:635.1}},{t:this.btn_lipido,p:{x:770.1,y:256.85}},{t:this.btn_vitaminab}]},30).to({state:[{t:this.btn_calcio,p:{x:-109.35,y:102.5}},{t:this.btn_magnesio,p:{x:137.3,y:140.85}},{t:this.btn_fosforo,p:{x:-67.75,y:211.25}},{t:this.btn_potasio},{t:this.btn_proteinas},{t:this.btn_vitaminae,p:{x:814.15,y:60.2}},{t:this.btn_hierro,p:{y:161.2,x:635.1}},{t:this.btn_lipido,p:{x:770.1,y:256.85}},{t:this.btn_vitaminab},{t:this.btn_back,p:{x:72.7,y:-17.95,regX:104.5,regY:24.8,scaleX:2.0143,scaleY:3.7533}}]},4).to({state:[{t:this.btn_fibra},{t:this.btn_magnesio,p:{x:126.3,y:215.85}},{t:this.btn_fosforo,p:{x:-98.75,y:274.45}},{t:this.btn_potasio},{t:this.btn_proteinas},{t:this.btn_vitaminae,p:{x:814.15,y:60.2}},{t:this.btn_hierro,p:{y:161.2,x:635.1}},{t:this.btn_lipido,p:{x:770.1,y:256.85}},{t:this.btn_vitaminab},{t:this.btn_back,p:{x:63.45,y:79.15,regX:104.5,regY:24.8,scaleX:2.0143,scaleY:3.7533}}]},1).to({state:[{t:this.btn_fibra},{t:this.btn_calcio,p:{x:-71.75,y:-2.75}},{t:this.btn_fosforo,p:{x:-80.75,y:256.85}},{t:this.btn_potasio},{t:this.btn_proteinas},{t:this.btn_vitaminae,p:{x:814.15,y:60.2}},{t:this.btn_hierro,p:{y:161.2,x:635.1}},{t:this.btn_lipido,p:{x:770.1,y:256.85}},{t:this.btn_vitaminab},{t:this.btn_back,p:{x:113.2,y:130.85,regX:104.4,regY:24.9,scaleX:1.7084,scaleY:3.472}}]},1).to({state:[{t:this.btn_fibra},{t:this.btn_calcio,p:{x:-83,y:19.2}},{t:this.btn_magnesio,p:{x:163.3,y:86.05}},{t:this.btn_potasio},{t:this.btn_proteinas},{t:this.btn_vitaminae,p:{x:814.15,y:60.2}},{t:this.btn_hierro,p:{y:161.2,x:635.1}},{t:this.btn_lipido,p:{x:770.1,y:256.85}},{t:this.btn_vitaminab},{t:this.btn_back,p:{x:78.45,y:215.6,regX:104.5,regY:24.8,scaleX:1.5836,scaleY:3.307}}]},1).to({state:[{t:this.btn_fibra},{t:this.btn_calcio,p:{x:-82.7,y:11.65}},{t:this.btn_magnesio,p:{x:150.95,y:52.45}},{t:this.btn_fosforo,p:{x:-92.75,y:133.3}},{t:this.btn_proteinas},{t:this.btn_vitaminae,p:{x:814.15,y:60.2}},{t:this.btn_hierro,p:{y:161.2,x:635.1}},{t:this.btn_lipido,p:{x:770.1,y:256.85}},{t:this.btn_vitaminab},{t:this.btn_back,p:{x:69.65,y:269.05,regX:104.4,regY:24.8,scaleX:1.5692,scaleY:3.7533}}]},1).to({state:[{t:this.btn_fibra},{t:this.btn_calcio,p:{x:-77.3,y:101.8}},{t:this.btn_magnesio,p:{x:137.3,y:140.85}},{t:this.btn_fosforo,p:{x:-67.75,y:211.25}},{t:this.btn_potasio},{t:this.btn_vitaminae,p:{x:871.35,y:151.85}},{t:this.btn_hierro,p:{y:179.2,x:635.1}},{t:this.btn_lipido,p:{x:770.1,y:256.85}},{t:this.btn_vitaminab},{t:this.btn_back,p:{x:761.55,y:22.75,regX:104.5,regY:24.8,scaleX:2.0143,scaleY:3.7533}}]},1).to({state:[{t:this.btn_fibra},{t:this.btn_calcio,p:{x:-100.35,y:101.8}},{t:this.btn_magnesio,p:{x:137.3,y:140.85}},{t:this.btn_fosforo,p:{x:-67.75,y:211.25}},{t:this.btn_potasio},{t:this.btn_proteinas},{t:this.btn_hierro,p:{y:204.6,x:635.1}},{t:this.btn_lipido,p:{x:770.1,y:256.85}},{t:this.btn_vitaminab},{t:this.btn_back,p:{x:755.6,y:84.85,regX:104.5,regY:24.8,scaleX:2.0143,scaleY:3.7533}}]},1).to({state:[{t:this.btn_fibra},{t:this.btn_calcio,p:{x:-99.35,y:106.45}},{t:this.btn_magnesio,p:{x:137.3,y:140.85}},{t:this.btn_fosforo,p:{x:-67.75,y:211.25}},{t:this.btn_potasio},{t:this.btn_proteinas},{t:this.btn_vitaminae,p:{x:865.2,y:42.2}},{t:this.btn_lipido,p:{x:838.85,y:256.85}},{t:this.btn_vitaminab},{t:this.btn_back,p:{x:759.15,y:141,regX:104.5,regY:24.8,scaleX:2.0143,scaleY:2.6959}}]},1).to({state:[{t:this.btn_fibra},{t:this.btn_calcio,p:{x:-77.3,y:96.25}},{t:this.btn_magnesio,p:{x:137.3,y:140.85}},{t:this.btn_fosforo,p:{x:-67.75,y:211.25}},{t:this.btn_potasio},{t:this.btn_proteinas},{t:this.btn_vitaminae,p:{x:816.25,y:35.3}},{t:this.btn_hierro,p:{y:68.55,x:623.1}},{t:this.btn_vitaminab},{t:this.btn_back,p:{x:760.55,y:224.2,regX:104.5,regY:24.8,scaleX:2.0143,scaleY:4.5931}}]},1).to({state:[{t:this.btn_fibra},{t:this.btn_calcio,p:{x:-83,y:106.05}},{t:this.btn_magnesio,p:{x:137.3,y:140.85}},{t:this.btn_fosforo,p:{x:-67.75,y:211.25}},{t:this.btn_potasio},{t:this.btn_proteinas},{t:this.btn_vitaminae,p:{x:814.15,y:36}},{t:this.btn_hierro,p:{y:101.8,x:629.8}},{t:this.btn_lipido,p:{x:838.85,y:151.85}},{t:this.btn_back,p:{x:748.6,y:285.55,regX:104.5,regY:24.8,scaleX:2.0143,scaleY:3.7533}}]},1).wait(1));

	// Capa_2
	this.instance = new lib.Interpolación2("synched",0);
	this.instance.setTransform(147.8,-39.95,0.5224,0.5224,0,0,0,0.1,-0.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0,regY:0,scaleX:1,scaleY:1,x:147.75,y:-39.9,alpha:1},4,cjs.Ease.get(1)).to({startPosition:0},26).to({_off:true},1).wait(3).to({_off:false,x:-94.55,y:-84.9},0).to({x:147.75,y:-39.9},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).wait(1));

	// Capa_13
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#33CC33").ss(3).p("A/aAAMA+1AAA");
	this.shape.setTransform(73,-61);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#33CC33").ss(3).p("A5dAAMAy7AAA");
	this.shape_1.setTransform(111.025,91.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#33CC33").ss(3).p("A24AAMAtxAAA");
	this.shape_2.setTransform(78.925,181.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#33CC33").ss(3).p("A3bAAMAu3AAA");
	this.shape_3.setTransform(71.075,218.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#33CC33").ss(3).p("A/ZAAMA+0AAA");
	this.shape_4.setTransform(759.1,-24.55);
	this.shape_4._off = true;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#33CC33").ss(3).p("A/aAAMA+0AAA");
	this.shape_5.setTransform(767.15,171.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape,p:{y:-61}}]},34).to({state:[{t:this.shape,p:{y:19}}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(39).to({_off:false},0).wait(1).to({y:40.75},0).wait(1).to({x:764.1,y:124},0).to({_off:true},1).wait(1).to({_off:false,x:752.1,y:246.05},0).wait(1));

	// Capa_12
	this.text_fosforo = new cjs.Text("Favorece el movimiento intestinal y disminuye la absorción de algunos nutrientes como la glucosa (beneficioso para los diabéticos) y el colesterol, contribuyendo así a la prevención de enfermedades cardiovasculares. ", "16px 'Montserrat'");
	this.text_fosforo.name = "text_fosforo";
	this.text_fosforo.lineHeight = 22;
	this.text_fosforo.lineWidth = 396;
	this.text_fosforo.parent = this;
	this.text_fosforo.setTransform(-126.05,-52.2);
	this.text_fosforo._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text_fosforo).wait(34).to({_off:false},0).wait(1).to({y:27.85,text:"Por su contenido de calcio las semillas de girasol están indicadas en dietas que necesiten el aporte de este mineral como osteoporosis, problemas de huesos, fibromialgia o artrosis y también en aquellas etapas de la vida que tengan altos requerimientos de calcio, tales como embarazo o lactancia."},0).wait(1).to({x:-50,y:100.85,text:"El magnesio junto con el calcio ayudan al funcionamiento de los músculos, entre ellos, el músculo cardiaco.",lineWidth:319},0).wait(1).to({x:-68,y:189.5,text:"Contribuye a la mineralización de los huesos. Participa en la absorción y utilización del calcio. ",lineWidth:293},0).wait(1).to({x:-77.55,y:228.05,text:"Interviene en el impulso nervioso que genera el movimiento muscular y en la regulación del volumen de los líquidos en el organismo. ",lineWidth:294},0).wait(1).to({x:560.05,y:-15.15,text:"Es uno de los alimentos con mejor calidad de proteína vegetal debido a su alta proporción de aminoácidos esenciales. Es ideal para los deportistas, ya que ayuda a aumentar la masa muscular y regenerar tejidos, y también para niños y jóvenes en etapa de crecimiento. ",lineWidth:396},0).wait(1).to({y:50.6,text:"Tiene alto poder antioxidante, mejora la inmunidad y evita enfermedades infecciosas, además de mejorar la circulación sanguínea y prevenir la formación de coágulos sanguíneos."},0).wait(1).to({x:565.05,y:130.3,text:"Ayuda a combatir la anemia, que es una enfermedad en la cual hay un déficit de glóbulos rojos en sangre."},0).wait(1).to({x:568.1,y:179.45,text:"Poseen un alto contenido de ácidos grasos poliinsaturados, principalmente el Linoléico, que pertenece a la familia Omega 6. Gracias a sus propiedades ayuda en el tratamiento de diabetes, hipertensión y artritis. También disminuye los niveles de colesterol, reduciendo riesgo de aterosclerosis y ataques cardíacos."},0).wait(1).to({x:553.05,y:255.9,text:"Las vitaminas del complejo B juegan un papel importante en las funciones metabólicas y la producción de energía, también son necesarias para la salud del hígado, la piel, el cabello y los ojos.",lineWidth:407},0).wait(1));

	// Capa_3
	this.instance_1 = new lib.Interpolación3("synched",0);
	this.instance_1.setTransform(-63.6,212.15,0.3883,0.3883);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},4,cjs.Ease.get(1)).to({startPosition:0},24).to({_off:true},1).wait(3).to({_off:false},0).to({x:-74,y:269.15},1).to({x:-81,y:254.8},1).to({x:-13.55,y:153.15},1).to({x:-96.65,y:128},1).to({x:-63.6,y:212.15},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).wait(1));

	// Capa_4
	this.instance_2 = new lib.Interpolación4("synched",0);
	this.instance_2.setTransform(631.2,158.8,0.4444,0.4444);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},4,cjs.Ease.get(1)).to({startPosition:0},22).to({_off:true},1).wait(3).to({_off:false},0).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({y:180.9},1).to({x:621.2,y:209.55},1).to({x:610.2,y:98.55},1).to({x:631.2,y:70.2},1).to({y:98.15},1).wait(1));

	// Capa_5
	this.instance_3 = new lib.Interpolación5("synched",0);
	this.instance_3.setTransform(765.45,255.4,0.3717,0.3717);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},4,cjs.Ease.get(1)).to({startPosition:0},20).to({_off:true},1).wait(3).to({_off:false},0).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({x:838.85},1).to({x:612.85,y:144.4},1).to({x:822.45,y:152.4},1).wait(1));

	// Capa_6
	this.instance_4 = new lib.Interpolación6("synched",0);
	this.instance_4.setTransform(136.45,143.85,0.2941,0.2941);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},4,cjs.Ease.get(1)).to({startPosition:0},18).to({_off:true},1).wait(3).to({_off:false},0).to({y:219.25},1).to({x:13.2,y:68.8},1).to({x:136.45,y:85.5},1).to({y:53.7},1).to({y:143.85},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).wait(1));

	// Capa_7
	this.instance_5 = new lib.Interpolación7("synched",0);
	this.instance_5.setTransform(95.55,330.9,0.2941,0.2941);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},4,cjs.Ease.get(1)).to({startPosition:0},16).to({_off:true},1).wait(3).to({_off:false},0).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({x:-28.85,y:192.95},1).to({x:95.55,y:330.9},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).wait(1));

	// Capa_8
	this.instance_6 = new lib.Interpolación8("synched",0);
	this.instance_6.setTransform(623.35,-51.2,0.3212,0.3212);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(12).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},4,cjs.Ease.get(1)).to({startPosition:0},14).to({_off:true},1).wait(3).to({_off:false},0).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).wait(1));

	// Capa_9
	this.instance_7 = new lib.Interpolación9("synched",0);
	this.instance_7.setTransform(626.6,364.9,0.41,0.41);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(14).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},4,cjs.Ease.get(1)).to({startPosition:0},12).to({_off:true},1).wait(3).to({_off:false},0).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({y:221.85},1).wait(1));

	// Capa_10
	this.instance_8 = new lib.Interpolación10("synched",0);
	this.instance_8.setTransform(808.3,60.85,0.5597,0.5597);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(16).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},4,cjs.Ease.get(1)).to({startPosition:0},10).to({_off:true},1).wait(3).to({_off:false},0).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({x:871.35,y:151.95},1).to({x:632,y:16.6},1).to({x:871.35,y:41.95},1).to({x:808.3,y:26.9},1).to({y:31.85},1).wait(1));

	// Capa_11
	this.instance_9 = new lib.Interpolación11("synched",0);
	this.instance_9.setTransform(6.05,37.3,0.528,0.528,0,0,0,0,0.1);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(18).to({_off:false},0).to({regY:0,scaleX:1,scaleY:1,y:37.25,alpha:1},4,cjs.Ease.get(1)).to({startPosition:0},8).to({_off:true},1).wait(3).to({_off:false,x:-83,y:104.3},0).to({y:-5.6},1).to({startPosition:0},1).to({y:20.9},1).to({y:14.15},1).to({y:104.3},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-213.8,-111,1189.7,500);


(lib.tallo_2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#558943").s().p("AgKAAIAAm3IAFAiIAFAoIAFA2QAGA8ADBRQADBUAABXQgDCegOCZIgLBfIgFAig");
	this.shape.setTransform(5.5036,380.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#558943").s().p("AgLErQgCiJAAiiQACigADiKIAEh8IADAhIAGBbQAKCcgBCOQgBCbgLCRQgFBMgFAvIgDh8g");
	this.shape_1.setTransform(13.3254,382.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#558943").s().p("AAaHGIAAABgAAQGlQgMgxgGgvQgJhCgFhPIgHiyQgEicADimIAEiGIAKCGQAKClAECcQACBPAABjQABBTAEA9QADA2AHArIAEAbIABAHg");
	this.shape_2.setTransform(3.4732,301.3625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#558943").s().p("AiAMXIgBhYQgCg7gDg5IgTktIgGhXQgDgsAAgwIACheQAAg2gEgpIgLhgQgFgzAAgsQAAgvAEguQAFguAJgpQAPhNAfhQQAdhIAjg2QAkg2AqggQAogcApgJQAbgHAcACIATADIgTgCQgeAAgYAIQgpALgjAcQgoAhggA2QgeAxgdBNQgcBSgNBIQgHAngEAvQgDAsAAAuQABAtAFAvIAMBhQAEAqgBA3IgCBeQgBAuACAtIAEBXQAJDIABBmQABBHgCAtQgBA4gCAgIgJBKg");
	this.shape_3.setTransform(25.575,231.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#558943").s().p("AgrNFIgIh7IgHiXQgChaAAhRQgBhVADhqQAFh5AGhSQACglAGhDIAJhkIAPi9QAPjFANh7IAejXQAJgsAEgOIAGgUIgFAVQgDALgHAvIgVDXQgHBjgMDeQgHCGgEA4IgIBkIgIBnQgGBUgFB2QgFBjgBBbQgCA8AABvIAFERIAICtg");
	this.shape_4.setTransform(12.0464,113.25);

	this.instance = new lib.Path_5_2();
	this.instance.setTransform(9.3,44.75,1,1,0,0,0,7.5,43.6);
	this.instance.alpha = 0.4688;
	this.instance.compositeOperation = "multiply";

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#558943").s().p("AAdT9QgDgVgFg3IgKh4IgLifQgMjAgJjeQgGiAgDh0QgChWABgsIABhDIADhDIALkFIAmwRIABBnQABB0gBCjQgBDBgGDeQgCBmgFCPIgLFIIgCBCIABCBIAED1IAMGeIATF9g");
	this.shape_5.setTransform(3.22,134.425);

	this.instance_1 = new lib.Path_1_3();
	this.instance_1.setTransform(8.5,256.05,1,1,0,0,0,3.8,110.4);
	this.instance_1.alpha = 0.7813;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5CAA41").s().p("EgAmAhSQAAhQAPh4QAIhGgUoCQgXpBAAgsQAAgpgQpmQgPomAGhUQAKiRAe0tIBAhfIBBCvIgZDzQgaEAgJBCQgJA7gNFIQgOFigDAsQgHBLAVGIIAeIAQAFBjAJNDQAJMlACAGQADAJgxABg");
	this.shape_6.setTransform(9.9643,213.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.instance_1},{t:this.shape_5},{t:this.instance},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tallo_2, new cjs.Rectangle(0,0,43.7,426.1), null);


(lib.piso = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#A4AA41","#ADB14F","#C1C06F","#CFCB87","#D8D295","#DBD49B"],[0,0.098,0.357,0.604,0.824,1],-1,20.6,1.2,-20.6).s().p("ABNCiQgtg3gdgQQhJgrAIg1IAFgtQgBgUgPgXQgVgggJgUQgNgeABgZQABgMACAAQABAAAEAKQARAmARAYQAPAUAUAgQAbApgCAGIgJAuQAAAXAQAUQAKAMAbAaQAWAUALARQAUAfAgA7QgQgYgXgbg");
	this.shape.setTransform(165.9061,62.0289,0.3481,0.3481);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#A4AA41","#ADB14F","#C1C06F","#CFCB87","#D8D295","#DBD49B"],[0,0.098,0.357,0.604,0.824,1],0,9,0,-8.9).s().p("AhiBRQALgSAPgRQAMgOAZgWQAUgRAXgIIArgKQAXgGARggQALgdAAAEQAAAJgKAXQgLAagMAOQgKALgaAKQglAQgWANQgZAOgjAfIgOAKIAAAAQgCAAAEgIg");
	this.shape_1.setTransform(151.6077,70.6551,0.3481,0.3481);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#A4AA41","#ADB14F","#C1C06F","#CFCB87","#D8D295","#DBD49B"],[0,0.098,0.357,0.604,0.824,1],0.3,20.8,0.3,-20.7).s().p("AhkDJQASgJAOgQQAQgUAMgMIAbgdIAlgqQAZgaALg6IAGg1QgCgPAAgUQgBgnAJgYQAKgaATgOQATgPgJAQQgGAJgEAeIgIBBIgMBiQgEAygjAoIghAlQgTAXgNAUQgNAWgsALQgYAGgHAAQgHAAASgJg");
	this.shape_2.setTransform(153.6803,67.8371,0.3481,0.3481);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#A4AA41","#ADB14F","#C1C06F","#CFCB87","#D8D295","#DBD49B"],[0,0.098,0.357,0.604,0.824,1],0,56.4,0,-56.3).s().p("ABAHvQANgRgLgbQgNggACgIQABgHAWgnQASgggCgSQgDgagLgSQgOgWgXgCQgWgCghgWQgcgTgMgOQgHgJAGgZQAKgoAAgHQADgaAFgNQAGgPATgYQAPgSgZgVQgngggIgOQgNgaAKhEIAMg+QAHgNgHgNQgGgMgVgTQgUgSgHgiQgIgjAJgmQAHggAFhIIADhCIAOCtIACAsQABAKAMAeQAKAZAKAJQAOAOAIAOQAOAZgDAKIgaAlQgiAyAiA6QAEAHAcAjQASAXADARQAEARgRAXQgVAdgEAPQgJAkACAQQACAbAaAOQAvAaARAMQAmAbAOAhQAMAdgSApQgVAwAAAOIAAA1QgBAXgIAOQgIANgrASIgpAQQA4gmAYgeg");
	this.shape_3.setTransform(165.0927,72.7073,0.3481,0.3481);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#A4AA41","#ADB14F","#C1C06F","#CFCB87","#D8D295","#DBD49B"],[0,0.098,0.357,0.604,0.824,1],0,56.9,0,-56.6).s().p("AAxINQgMghABgZQgJgdAAgBQAAgEAUgmQARgfgDgWQgIgdgDgZQghgYgSgYQgOgUgBgMQgCgQAPgVQAKgQAEgHQAGgOAMgXQAQgbgQgBQgagCgEgIQgKgTgDgHQgEgLAGgRQAGgTgBgFIgLgXQgIgQgTgWQgQgRgQgOQgMgKAKgKIAigZQAWgPAGgHQAFgGARgiQAPgcgBhZIgFhUQgGgvAKhDQAKhDAHAaQAFARADAWQAEAdAGAcQAIAlgBASQgBANgJAhQgMA8AAAwQAAAigCAHQgFAXgaAZIgnAoQgKAOAOAVQADAFAbAbQAOAPAAAcQAAAkAFAMQAGAOATAJQASAIgDARIgSArQgPAkgDANQgGAYAGAaQAFASAUAkQAVAmAIAcQAJAfgNAUQgdArgDAHQgEALgBANIACAGQAPAtAPAzQgMgTgJgZg");
	this.shape_4.setTransform(158.9544,74.2952,0.3481,0.3481);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#A4AA41","#ADB14F","#C1C06F","#CFCB87","#D8D295","#DBD49B"],[0,0.098,0.357,0.604,0.824,1],0,27.1,0,-26.8).s().p("AiYDsQAagNAagsQAZgxAKgRIAWgqQANgUAcgPQAegRAwg9QApg2Adg1IBCh0QAdgNgFBAQgCAZgKAZIgSAqQgLAYgKANQgNASgXAOQgRALgPAEQgPADgNAJQgNAJgZAgQgaAhgNAJQgVAOggAqQgjAugcA1QgYAvg4AJIgzABQApgMAqgVg");
	this.shape_5.setTransform(150.4826,60.1829,0.3481,0.3481);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E3A672").s().p("AgJAPQgLgIgJgRIgEgMIAKAIIAWASQAMAJALABIAIABIAEgBIgDADQgEADgFABIgKACQgLAAgKgIg");
	this.shape_6.setTransform(176.8115,53.5486,0.348,0.348);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E3A672").s().p("AglARIgEgDQgGgEgEgFIgDgEIAEADIAMAEIADABIACAAIAIgGIAVgJQATgIAWgCIASgBIhQAhIgFACIgCAAIgFgBg");
	this.shape_7.setTransform(185.4341,54.2078,0.348,0.348);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E3A672").s().p("AAAAHQgSgCgTgFIgPgEIAQgCQATgBASABQAdADAXAIQgPADgRAAIgVgBg");
	this.shape_8.setTransform(180.8835,48.082,0.348,0.348);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E3A672").s().p("AAnASQgSgMgTgJQgRgKgUgIIgSgGIAFgBIAOAAQAXABAUALQAWANANAQIAKAQg");
	this.shape_9.setTransform(179.8481,49.2109,0.348,0.348);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E3A672").s().p("AglAJIgQgBIAPgGQATgFATgDQAdgEAZADQgXAJgeAFQgPACgRAAIgGAAg");
	this.shape_10.setTransform(184.0158,43.1311,0.348,0.348);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E3A672").s().p("AgnArIABAAIgBAAQAIgVANgTQAQgUAWgRIAUgMIgPARQgTAVgMATIgZAjg");
	this.shape_11.setTransform(196.9367,41.106,0.348,0.348);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E3A672").s().p("AgeAaQAKgSAOgOQANgPAQgKIAPgJIgKAOQgLAOgOAPQgOAQgNALIgNALg");
	this.shape_12.setTransform(198.4942,44.5081,0.348,0.348);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E3A672").s().p("AgTAtQADgbAHgUQAIgYALgVIALgSIgFAUQgGAagHAUQgIAbgIATIgHATg");
	this.shape_13.setTransform(196.7018,39.8183,0.348,0.348);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E3A672").s().p("AhCAyQAHgDAKgIQAKgJALgKQALgMAKgPQAOgVALgHQAIgFAJgCIAOgCQANgBAGgEIAFgEIgEAGQgGAGgMAEQgWAIgEADQgHAGgOAUQgKAQgOAMQgKAJgQAIIgTAHIgIACg");
	this.shape_14.setTransform(231.0096,43.8816,0.348,0.348);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E3A672").s().p("ABQARIgSgHQgdgKghABQgbADgIgBQgRAAgNgEQgKgFgHgHIgEgHIAGAEQAGAGALACQAKADASgCIAjgEQASgBATAEQAOAFAOAGIAQANIAGAFg");
	this.shape_15.setTransform(204.7763,52.8523,0.348,0.348);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E3A672").s().p("AgmAVQAJgUASgOQAQgPAXgGIANgCIAEgBIgPAKQgQAJgQAPQgRANgOAOIgLAOg");
	this.shape_16.setTransform(208.509,58.8472,0.348,0.348);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E3A672").s().p("AASAdQgNgIgMgOQgMgLgHgRIgEgNIAKAJIAWAYQAOAPAHAKIAIALIgNgGg");
	this.shape_17.setTransform(204.1672,62.6931,0.348,0.348);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E3A672").s().p("AAAAtQABgUgBgZQgCgagFgSIgFgTIADAEIAJAMQALAVACAZQACAYgJAXQgDAJgDAFIgBAEg");
	this.shape_18.setTransform(203.3501,63.4935,0.348,0.348);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E3A672").s().p("AA+AWIgOgIQgVgLgZgGQgLgDgPgCQgSgDgFgCQgKgCgEgFIgFgEIAGACQAEACAKABIAXgBQAPAAAOAEQAaAHAUARIALANIAEAEg");
	this.shape_19.setTransform(201.5047,103.7006,0.348,0.348);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E3A672").s().p("AAAAzQgFgLgDgLQgDgPADgOIAHgbIAEgVQABgIgCgGIgBgGIADAFQAEAGACAJQACAJgDAPIgFAaQgCANABAMIADAVIAFAVQgFgHgGgLg");
	this.shape_20.setTransform(206.1879,103.135,0.348,0.348);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E3A672").s().p("AAxBxQgCgQgGgMQgFgKgHgHIgRgQQgMgJgHgLQgFgHgCgHIgEgMQgCgEgGgEIgLgLQgIgMgEgPQgEgXAKgYQAHgRAJgKIAHgJIgFAKQgIANgEAPQgGAYAGASQADANAHAIIAKAJQAHAHAEAGIAEAOIAFALQAGAIALAKQAMANAFAGQAHALADAJQAFAQgBAPIgBALg");
	this.shape_21.setTransform(210.6104,95.0519,0.348,0.348);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E3A672").s().p("AAcBMQAAgKgDgIQgEgMgJgNIgTgbQgNgRgFgPQgGgOAAgPQAAgLACgJIACgHIAAAHIADATQADANAGANQAGAMAMAQQANAQAGANQAIAPABAOQACAMgDAJIgDAGg");
	this.shape_22.setTransform(217.3057,91.2583,0.348,0.348);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E3A672").s().p("AgeAEIgNgEIANgCIAegDIAfgBIANAAIgMAGQgOAGgRABIgEAAQgMAAgPgDg");
	this.shape_23.setTransform(230.7051,74.8253,0.348,0.348);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E3A672").s().p("AgkAGIgQgCIAPgEQATgEASgCQAdgCAYAFQgXAIgeACIgOAAIgWgBg");
	this.shape_24.setTransform(225.3279,71.7918,0.348,0.348);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E3A672").s().p("AgMAqIAAgtQgBgSACgIQACgNAIgIQAFgHAHgCQADgBACAAIgEADQgGAEgCAGQgEAIAAALQAAAGABATQABANgCAMQgBALgFAKQgEAMgFAGQACgIABgLg");
	this.shape_25.setTransform(227.9208,64.6399,0.348,0.348);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E3A672").s().p("AgvALIAJgIQAPgLAVgEQASgDAUAHIALAEIAEACIgQAAQgRAAgSADQgUADgPAFIgLADIgEABg");
	this.shape_26.setTransform(233.9506,66.4606,0.348,0.348);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E3A672").s().p("AgnAKIgQgEIBvgRIgOAJQgTAKgVADIgRABQgLAAgNgCg");
	this.shape_27.setTransform(232.2017,64.3512,0.348,0.348);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E3A672").s().p("AgUAeQADgUAIgOQAHgQANgNIALgLIgFAOIgmBKg");
	this.shape_28.setTransform(224.7015,60.1263,0.348,0.348);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E3A672").s().p("AgxAUIBjgnIgLALQgRAMgRAIQgUAHgSABg");
	this.shape_29.setTransform(215.0695,60.57,0.348,0.348);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E3A672").s().p("AANAOQgJgBgIgFQgKgHgDgHIgDgIIAIADQAGADAJAFIANALIAFAGIgDABIgFgBg");
	this.shape_30.setTransform(173.218,84.6325,0.348,0.348);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E3A672").s().p("AgSgWIAJACQALADAIAKQAHAHACANQABAGgBAEg");
	this.shape_31.setTransform(175.9095,90.0314,0.348,0.348);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E3A672").s().p("AAAA9QgBgEgDgIIgEgOQgEgRAAgRQgBgXAIgjIAGgYIAAAZIAAA5QAAAgAGAaIAHAXg");
	this.shape_32.setTransform(120.7856,143.8119,0.348,0.348);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E3A672").s().p("AgFAAQACgNAFgNIAEgKIACALQACAPgDAMQgEAVgKAOQgCgSAEgTg");
	this.shape_33.setTransform(126.6922,135.7636,0.348,0.348);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E3A672").s().p("AgqBgQABgNADgNQALgsAbgfQAIgJAJgJQALgKACgGQAHgOgFgTIgIgYIgEgJIAGAIQAJANAEAKQAEAIABAKQABALgEALQgEAKgKAKIgQARQgbAfgPAnQgEAHgFARIgDAJg");
	this.shape_34.setTransform(125.8479,135.7636,0.348,0.348);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E3A672").s().p("AgNA6QgCgMABgQIACgQIAGgQQAIgSABgLQADgMABgNIABgZIAGAYQACAQgBAMQAAAGgDAKIgGAQQgGAPgDANIgDAaIgCAYQgDgIgCgPg");
	this.shape_35.setTransform(127.1038,140.5056,0.348,0.348);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E3A672").s().p("AgWBKQgCgJACgKQABgMAGgPIANgdQARgjABgTQABgJgBgJIgBgFIAAgBIADAGQAEAGABAMQACANgEAPQgCANgJASIgPAdQgIAPgCAJQgEAKgBAHIgBAGg");
	this.shape_36.setTransform(135.7223,139.853,0.348,0.348);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E3A672").s().p("AARAzQgDgZgLgaQgGgRgFgKIgMgWQgFgLACgHIABgEIAAgCIABAGQABAGAGAIIAPAUQAIALAHARQAKAagCAeIgDARIgBAGg");
	this.shape_37.setTransform(137.0822,139.592,0.348,0.348);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E3A672").s().p("AgwAXQAVgUAWgNQAYgOAYgHQANgFAIgBIgSALIgtAbIhAAlIAPgPg");
	this.shape_38.setTransform(131.845,76.223,0.348,0.348);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E3A672").s().p("AgVA6QAVgfAGgXIAHggQACgSAGgLQADgIAHgIIAEgEIACgBIgEAGQgEAHgCALIgDAbQgDAbgBAHQgGASgKAQQgHAJgMAMQgNALgIAGg");
	this.shape_39.setTransform(123.1702,86.29,0.348,0.348);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E3A672").s().p("AglAWIgOgCIgFgCIASgDQATgDATgKQALgEAJgHIARgKQAIgEAHABIAFACIgFAAQgGACgFAFIgOANQgIAIgMAGQgQAJgVAAIgHgBg");
	this.shape_40.setTransform(103.3755,84.8735,0.348,0.348);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E3A672").s().p("AA0AeQgGgBgJgFQgKgGgHgKIgHgMQgDgGgDgCQgCgCgTgEIgrgGIAUgEIAYgCIANABQAJABAGAEQAHAFADAKIAFALQADAIAJAJQAGAGAFADIAFADg");
	this.shape_41.setTransform(96.319,73.7085,0.348,0.348);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#E3A672").s().p("AAyAMIgXgGQgNgFgNABQgPAAgMACIgtACIArgNQAQgEANAAQAJAAAHACQAHABAIAEIAUAJQAIAEAHgBIAFgCIgFAEQgDACgEAAg");
	this.shape_42.setTransform(94.7877,81.9917,0.348,0.348);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#E3A672").s().p("AgkATQAOgRARgKQAQgMAUgHIARgFIgNALIghAXIgiAWIgPAJg");
	this.shape_43.setTransform(88.4708,93.4944,0.348,0.348);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#E3A672").s().p("AgOApIAQgoIAOgoIAGgSIABATQAAAXgIAVQgKAXgOAQQgHAIgGAFg");
	this.shape_44.setTransform(93.5608,97.7231,0.348,0.348);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#E3A672").s().p("AgbAdQAIgTAMgPQAKgOARgPIANgKIgIAOQgKASgMAOQgRAZgSASIAFgQg");
	this.shape_45.setTransform(94.8312,106.1978,0.348,0.348);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#E3A672").s().p("AgeALIAEgHQAHgLAPgEQAOgEANAHQAEACADACIACACIgLAAQgMABgJACQgOADgIAFIgJAFg");
	this.shape_46.setTransform(102.1748,101.152,0.348,0.348);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#E3A672").s().p("AgDgFQAOgKASgIIAPgHIgLAMQgOAOgPAKQgYARgXAIQAQgUAYgQg");
	this.shape_47.setTransform(99.2339,105.9715,0.348,0.348);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#E3A672").s().p("AggA9QAXgfAOgcQAIgOAIgUQAFgWAEgIQAGgOAHgFIAGgCIACgBIgBABQgCABgDADQgFAHgEAMIgEAgQgEASgLATQgRAggbAZQgNANgKAGg");
	this.shape_48.setTransform(99.6428,107.2245,0.348,0.348);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#E3A672").s().p("AhUANIARgLQANgIAPgGQAXgHAQACQAKABAJAEIARAJQALAFAQACIAcACIgIACIgUADIgPAAQgIgBgJgDIgQgHQgJgDgHAAQgPgCgTAFQgMABgRAHIgaAKg");
	this.shape_49.setTransform(91.8294,114.5461,0.348,0.348);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#E3A672").s().p("AgGAAQADgPAFgPIAGgLIABANQABAQgDANQgEAYgJARQgEgUAEgWg");
	this.shape_50.setTransform(97.0316,121.8421,0.348,0.348);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#E3A672").s().p("AAXAuQAAgEgDgJQgCgJgFgHQgGgIgIgHQgOgIgFgHQgDgFgCgHQgCgFABgFQACgJAFgEIAFgBIgDADQgDAEABAHQAAAEADADIAFAHIARANQAMAIAFALQAEAKAAAMQAAAHgCAGIgCAFg");
	this.shape_51.setTransform(98.2785,121.7986,0.348,0.348);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#E3A672").s().p("AgOgGQAJgaAFgJQAHgRAIgKQAHgIAKgFIAFgDIACAAIgCABIgEAEQgFAEgHALQgHANgFAOIgKAjQgRAxgUAmQAHgqARgxg");
	this.shape_52.setTransform(103.3755,127.2367,0.348,0.348);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#E3A672").s().p("AgYASQgJgGgFgGQgGgHgBgJIgBgQIABgMQABgKADgJIAEgGIgBAHQgBAIABAKIAEAZQACAGAEAGIAMAIQAkAdAbAcQgjgSgkgcg");
	this.shape_53.setTransform(114.8956,143.0637,0.348,0.348);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#E3A672").s().p("AAEA7IgQgqIgFgSQgBgGACgGIAGgJIALgMQAIgKADgNQACgJgCgJIgCgHIAEAGQAEAHABAMQAAARgJANIgKANQgEAGAAAFIAIAgIAHAcIAFAaIgMgYg");
	this.shape_54.setTransform(113.1235,143.7597,0.348,0.348);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#E3A672").s().p("AAEBJQAAgDADgPIAAgKQAAgEgEgIIgGgNIgHgQQgJgdAGgeIAFgSIACgGIAAAYQABAcAHAbIALAdQAEAJAAAGQAAAFgEAIIgHAQQAAAEABADQgCgCgBgFg");
	this.shape_55.setTransform(104.4053,143.7858,0.348,0.348);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#E3A672").s().p("ABgAzQgJgaghgXIgYgPQgPgJgVAIQgcAJgbgJQgcgIgRgYQgEgFAGgDQAFgDAEAFQAKANAPAIQAPAJARAAQAIABAXgHQATgFALAEQAUAGAfAZQAaAVAIAZQACAGgGACIgCAAQgFAAgBgFg");
	this.shape_56.setTransform(185.1842,77.566,0.348,0.348);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#E3A672").s().p("AA3BbQgPgJgHgHQgLgLgCgNQgBgNAIgLQADgEAAgEQAAgEgDgFIgHgLQgjg+gsgQQgGgCACgGQABgGAGACQAtAQAjA5IAPAYQAIAOgHAKQgHALAAADQgBAIAFAIQAFAJATAMQAGADgDAFQgDADgCAAIgEgBg");
	this.shape_57.setTransform(175.8411,71.6613,0.348,0.348);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#E3A672").s().p("AAXBNIgngwIgOgSQgGgLAHgIIAQgLQAGgGACgKQACgJgEgJQgDgJgHgFQgFgDADgFQADgGAFAEQAPAJADAUQACAUgLAPQgCADgFADIgIAFQgGADAGAHIAxA8QADAFgEAEQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBgBQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_58.setTransform(195.9468,67.1808,0.348,0.348);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#E3A672").s().p("AgmAxIgdgPQgUgGgHAOQgDAFgFgDQgGgDADgFQAGgMAPgDQAMgCAOAFQAKAEAYAMQAUAHALgQQAFgJgBgXQgBgVALgIQAHgGAZgGIAugMQAGgBABAGQACAGgGABIgsAMIgSAEQgMAEgDAGQgDAGABAKIABASQgBAPgKAJQgMANgPAAQgLAAgNgGg");
	this.shape_59.setTransform(210.3408,62.9169,0.348,0.348);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#E3A672").s().p("AgaBuQgFgdAPgeIAPgcQAHgRAAgNQgGglAAgTQgDgiAWgQQAFgDADAGQADAFgFADQgUANAHAlIAFAbQADAPgCALQgCAOgSAmQgPAfADAXQABAGgGACIgCAAQgEAAgBgFg");
	this.shape_60.setTransform(206.4006,63.811,0.348,0.348);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#E3A672").s().p("ABjAwQgMgEgLgMQgFgGgLgRQgVgegdgDIg7ADQgjABgUgRQgEgEAEgFQAFgEAEAEQARAPAogDIAdgCQAQgBAMACQAbAFARAXIARAYQALAPAMAEQAFADgBAGQgCAEgDAAIgDgBg");
	this.shape_61.setTransform(219.0297,88.7759,0.348,0.348);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#E3A672").s().p("AhaAdQgMgLgJgSQgFgMgGgWQgCgGAGgCQAGgBABAGQAHAXAGALQAIASAOAJQAOAJASgEQAGgBAXgLQAcgNAbAKQApAOAjgFQAFAAACAGQACAGgGAAQgpAFgogOQgYgHgOAGQgUAKgMAEQgLAEgLAAQgTAAgRgOg");
	this.shape_62.setTransform(225.9805,73.6243,0.348,0.348);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#E3A672").s().p("AhMBiQgFgDADgFQAWgpASgSQAIgIATgGQATgHAHgFQAkgYARhLQABgFAGABQAGACgBAGQgQBHgiAcQgKAJgNAFIgPAGQgKADgGADQgJAHgOAWQgKANgKATQgCADgDAAIgEgBg");
	this.shape_63.setTransform(221.4989,64.6996,0.348,0.348);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#E3A672").s().p("AhxBZQgGgBAAgGQAAgGAGAAQAQACAHgVIAFghQAGggAegDIAWgBQAMgCAJgEIAkgWIBQgvQAFgDAEAFQADAFgFAEIhVAxIgUAMQgMAIgIADQgMAEgWAAQgYABgGAWQgCAKgDAVQgDAPgJAKQgJAKgMAAIgDAAg");
	this.shape_64.setTransform(224.7732,48.469,0.348,0.348);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#E3A672").s().p("AjnC7QgFgFAFgEQATgTAOgmQAUg4AEgHQAOgbASgNQAKgIAQgFIAcgFQAQgCAPgLIAZgVQAegaAYgTQAlgdBNg1QAcgUAUgFQAegIATAUQAEAFgFAEQgEAEgEgEQgXgYgrAcIg8AqQhBAtgpAkIgWATQgNAMgJAGQgLAHgPAEIgcAFQgtAJgZBHQgNAmgFALQgMAagQARQgDACgCAAQgCAAgCgCg");
	this.shape_65.setTransform(112.0091,118.8621,0.348,0.348);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#E3A672").s().p("AhiAEQgGgBACgFQABgGAGABQBCAKAkgDQATAAAegJQAbgGARAGQAFABgBAGQgCAGgGgCQgLgDgOABIgZAGQgYAHgWAAIgIAAQgfAAg7gJg");
	this.shape_66.setTransform(97.5167,114.7823,0.348,0.348);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#E3A672").s().p("AhMA7QgGAAAAgGQAAgHAGABQAkABAcgGQARgDAGgEQAKgGADgQIAFgXQAEgNAGgJQAOgSAWgIQAFgCACAGQACAGgGACQgaAJgKAaQgCAFgDASQgCAPgGAIQgGAJgNAFQgIADgPADQgYAEgbAAIgMAAg");
	this.shape_67.setTransform(99.6658,80.3589,0.348,0.348);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#E3A672").s().p("ABQAnQgNgMgDgTQgDgWgZADQgJACgKAFIgRAKQgmAXgbgXIgWgYQgNgQgNgEQgGgBACgGQABgGAGABQAOAEAMANQAIAHANARQAOAPAPAAQAKgBANgGIAUgNQAOgIAPgCQARgCALAKQAGAFACAJIAEAQQAEALAJAHQAJAHAMAAQAGAAAAAGQAAAGgGAAIgBAAQgSAAgNgMg");
	this.shape_68.setTransform(101.3513,75.4002,0.348,0.348);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#E3A672").s().p("ABgA7QgggHgQgKQgZgOgIgXIgGgPQgEgIgFgGQgJgLgPgFQgXgJgxAFQgGABAAgHQAAgGAGAAQAngEAYAEQAiAHAQAaQADAFADALIAGAPQAGAMANAIQAQALAjAIQAGABgCAGQgBAFgFAAIgBAAg");
	this.shape_69.setTransform(107.5053,85.9117,0.348,0.348);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#E3A672").s().p("Ah1AhQgCgHAGgBIBOgUIARgDQALgCAGgDQAEgDABgIQACgKACgDQAIgLANACQALABALAIIBBArQAFAEgEAFQgDAGgFgEIg8gpQgMgHgFgCQgKgDgEAIIgDALQgBAGgEADQgHAIgQAEIgbAGIhGARIgCAAQgEAAgBgEg");
	this.shape_70.setTransform(93.4763,91.3797,0.348,0.348);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#E3A672").s().p("AgOAYQgugGgTghQgDgFAFgDQAFgDADAFQATAeApADQAiADAugXQAGgCADAFQADAFgFACQgtAXgiAAIgNgBg");
	this.shape_71.setTransform(230.3321,66.5677,0.348,0.348);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#E3A672").s().p("Ah8AbQgGgBACgGQABgGAGABQAkAFAcgTIAUgQQAMgMAKAAIAbAFQAWAFAQACQAhADAogFQAGAAAAAGQAAAGgGABQgmAEglgDQgOgCgTgEIgSgFQgMgCgHAEIgLAKIgLAKQgOAKgLADQgRAHgUAAIgSgBg");
	this.shape_72.setTransform(221.4939,52.0413,0.348,0.348);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#E3A672").s().p("AgKBWQgKhXAVhVQACgGAGACQAGACgCAFQgUBSAJBXQABAGgGAAQgGAAgBgGg");
	this.shape_73.setTransform(195.7739,45.138,0.348,0.348);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#E3A672").s().p("AhRAhQgDgFAFgDQAGgDADAFQAGAIANgCQAKgCAIgIQAGgFAJgMQAJgMAFgFQAggiAxAAQAGAAAAAGQAAAGgGABQgcAAgYANQgSAMgSAXQgRAYgSAEIgKACQgPAAgKgNg");
	this.shape_74.setTransform(180.06,44.6065,0.348,0.348);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#E3A672").s().p("AgPAWQgdgVgEggQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAQAGAAABAGQADAaAYARQAWARAbgEQAGgBACAGQABAGgGABIgOABQgZAAgUgQg");
	this.shape_75.setTransform(177.7024,47.0807,0.348,0.348);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#E3A672").s().p("AhGAaQgGgCACgGQACgGAFACQAkAMAkgMQAlgNAVgdQAEgFAFADQAGADgEAFQgXAigpANQgUAHgVAAQgUAAgTgGg");
	this.shape_76.setTransform(137.1188,62.6235,0.348,0.348);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#E3A672").s().p("ABeAcQgfgdgTgJQgagNgdAOQgcAOgPAGQgaALgUgJQgFgDADgFQADgFAFACQAMAFAPgEQAJgCAPgIIAXgMQANgGAKgDQAbgFAcAQQATALAZAZQAFAFgFAEQAAABgBAAQAAAAgBABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_77.setTransform(137.6594,59.7065,0.348,0.348);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#E3A672").s().p("ABMAUQgggZgrgDQgqgDgkAVQgFADgDgFQgDgGAFgCQAngYAuAEQAvADAkAcQAFAEgFAFQgCACgDAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBg");
	this.shape_78.setTransform(134.4078,66.7379,0.348,0.348);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#E3A672").s().p("AiiA5QgDgGAFgEQAZgTAQgJQAZgOAWgEQAYgCAUAHIAWAIQAMAGAJABQAqAIAogWQAngWAPgnQACgGAGACQAGABgCAGQgOAmgjAXQgiAYgpABQgVABgSgGIgZgKQgQgGgMgBQgZgCgdAPQgRAKgeAWIgDACQgDAAgCgDg");
	this.shape_79.setTransform(143.1527,65.8797,0.348,0.348);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#E3A672").s().p("Ai/A9QgFgFAFgEQA1gsAlgQQA4gbAvAOQARAFAjAQQAfANAWgEQAXgFAVgVQAMgMAUgeQADgFAFADQAGAEgEAFQgRAagMANQgSAUgUAJQgVAJgagFQgRgDgcgMQgigQgUgCQgcgDgeALQgrAOg9A0QgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAQgCAAgCgCg");
	this.shape_80.setTransform(145.8032,60.2265,0.348,0.348);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#E3A672").s().p("AhVCpQgEgEAEgEQApghAmgnQAvg0ARgdQALgSgIgeQgNgrAAgHQgBgrAegjQAEgEAEAEQAFAFgEAEQgSAUgFAaQgFAZAIAZIAHAXQAEANABAKQAAASgOAVQg2BOhWBFIgEACQgCAAgDgCg");
	this.shape_81.setTransform(154.5655,49.8832,0.348,0.348);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#E3A672").s().p("AgYBIQgGgCABgGQAOhDAihCQADgFAFADQAFADgCAGQghA9gOBFQgBAFgEAAIgCgBg");
	this.shape_82.setTransform(154.8884,48.209,0.348,0.348);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#E3A672").s().p("AgYBdQgGgDAEgFQATgeAGgNQAMgZAEgVQADgWgFgUQgGgWgPgOQgEgEAEgFQAFgEADAEQARAPAHAXQAHAWgDAXQgDAYgOAcQgIAPgTAgQgCADgCAAIgEgBg");
	this.shape_83.setTransform(161.2201,66.6516,0.348,0.348);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#E3A672").s().p("AgSBlQgMgWgCgZQgCgaAKgXQAJgXARgQIAHgIIAEgTIAIgmQABgGAGACQAGACgBAGIgIAkIgCAOQgBAJgDAEIgKAHIgIAJQgFAJgGAJQgKAWAAAZQABAZAMAUQADAGgFADIgEABQgDAAgCgDg");
	this.shape_84.setTransform(156.4502,75.568,0.348,0.348);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#E3A672").s().p("AikBRQgHgCACgGQAHgdAHgQQALgZAUgJQASgLAeAAIAyAAQAWgCAXgQQAbgVAOgKQAXgOAdAAQAVAAAgAJQAHACgCAGQgCAGgFgCQgngLgWACQgVACgYARIghAaQgUAOgSADQgNADgigCQgegBgQAGQgXAGgMAYQgIAQgHAfQgBAEgEAAIgCAAg");
	this.shape_85.setTransform(133.0196,136.1169,0.348,0.348);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#E3A672").s().p("AhUD4QgQgWAKgdQAIgZAXgSQAIgHAsgYQAfgSAOgTQASgXgJgjIgGgYQgCgNACgKQACgLAKgIQALgJAFgGQAGgHgBgMIgEgUIgEgcQgFg/AVg/QACgFAGABQAGACgCAGQgZBIANBLIAEAYQACAPgHAJIgSAQQgKAKgBAMQAAAJAFAPIAFAaQAEAZgNAVQgMAUgaARQgPAJgfARQgcAQgOAXQgRAcARAZQADAFgFADIgEABQgDAAgCgDg");
	this.shape_86.setTransform(139.2911,129.3792,0.348,0.348);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#E3A672").s().p("AhuBgQgCgTAOgPQAMgMATgHQAIgDAlgFQAagDAOgMQAOgLAHgaIALgrQAIgTAOgLQAQgNASADQAGABgBAGQgCAGgGgBQgTgDgOAUQgKAOgFAXQgGAagEAJQgHAUgOAKQgNAKgUAEIglAGQgVADgOAKQgTANADATQAAAGgGAAQgGAAgBgGg");
	this.shape_87.setTransform(101.1121,117.5511,0.348,0.348);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#E3A672").s().p("ABjAWQghgWgKgEQgXgIgiAFIgxAIQgcAEgVgDQgvgGglgeQgFgEAFgEQAEgFAFAEQAoAgAxADQATABAdgFIAvgJQAqgEAoAbQAdAUALAFQAZALAVgIQAGgCACAGQABAGgFACQgKAEgLAAQgcAAgigYg");
	this.shape_88.setTransform(193.5641,65.1257,0.348,0.348);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#E3A672").s().p("ABbAaQhAgegagGQg4gOgiAgQgFAFgEgFQgEgEAEgEQAiggA3AHQAYAEAfANIA0AYQAFACgDAGQgCADgDAAIgEgBg");
	this.shape_89.setTransform(181.1073,54.0459,0.348,0.348);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#E3A672").s().p("Ai/CMQgBgGAFgCQAdgJAAgpIgIhAQgDgiAOgVQANgRAbgIIAcgHQASgDAKgEQAJgEASgLQARgIAMABQALABAJALIAPATQANANAUgHQAPgFAOgPQAYggAPgOQAagYAdALQAFACgBAGQgCAHgGgDQgfgMgjAxQgOARgHAHQgMANgOAFQgbAJgSgQQgEgDgFgIIgIgLQgLgNgVAKIgaANQgPAHgMADIgcAFQgQAEgKAGQgaAQACAkQABAVAHApQABAZgIASQgJAXgWAHIgCAAQgEAAgBgEg");
	this.shape_90.setTransform(224.1446,69.3413,0.348,0.348);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#E3A672").s().p("Ah4BQQgEgGAGgCQAqgUAfgfQATgVAKgKQAMgMAMADQAHABAIAHIAMALQAQAKAVgLQASgJAKgYQAFgNAFgeQABgGAGABQAGACgBAGQgEAbgFAPQgJAXgPALQgNALgRADQgSADgOgKIgNgLQgMgKgLAMIgPAQIgPAQQghAggoASIgDABQgDAAgCgDg");
	this.shape_91.setTransform(201.6054,70.072,0.348,0.348);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#E3A672").s().p("AgtCHQgHgxgCgsIAAgwIABgRQACgJAEgGQAGgJATgEQATgFALgJQAQgMAJgSQAJgRAAgUQAAgGAHAAQAGAAAAAGQAAAggUAaQgVAageAIQgPAEgDACQgHAGAAARQgBAVABAbQAAArAIAzQABAGgGACIgCAAQgEAAgBgEg");
	this.shape_92.setTransform(207.7129,96.5275,0.348,0.348);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#E3A672").s().p("ABQAHQg4gfgfAGQgPAEgiAPQgeAPgUACQgVACgRgIQgTgIgIgRQgCgGAGgCQAGgBACAFQAIATAZADQAVADAWgIQAPgFAegPQAcgMAUAAQASABAVAJQAMAFAXAOQAaANANAFQAWAIAUgEQAFgCACAGQACAGgGACQgHACgHAAQgeAAgsgag");
	this.shape_93.setTransform(194.0794,102.3969,0.348,0.348);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#E3A672").s().p("AgdClQgTg6AAg9QAAgcAIgNQAJgNAZgDQANgCAIgGQAJgHAEgNQAEgRgFgbQgFgdABgPQABgYAPgQQAEgEAEAEQAEAFgEAEQgOAPACAcIAHAuQADAsgXASQgHAFgNACQgPABgEABQgMAEgEAPQgCAHAAASQgBA8ATA4QACAGgGACIgDAAQgEAAgBgFg");
	this.shape_94.setTransform(211.3105,90.1933,0.348,0.348);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#E3A672").s().p("AB8DhQgRg1gngkQgIgHgMgJIgVgOQgSgOgBgPQgBgKAGgPQAHgSABgGQAFgagPgYQgMgXgcgIQgbgIgZALQgEACgDgCQgDgDABgEQALg4gFgiQgHg0gpgSQgFgCADgGQADgFAFACQAtAUAJA4QAFAjgJA0QASgGATADQAaADASAQQATAQAHAaQAHAYgHAXIgGAQQgFAJAAAHQgBAMAQAMIAWAQQAOAJAHAHQAqAnAQA3QACAGgGABIgDABQgEAAgBgFg");
	this.shape_95.setTransform(212.2407,81.7836,0.348,0.348);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#E3A672").s().p("Ah4A7QgRgJgWgYQgZgcgLgIQgcgVgfAGQgQAEgjASQgaAOgUAGQgaAIgYgEQg0gIgegoQgDgFAFgDQAFgDAEAFQASAZAfALQAeALAfgGQASgEAlgUQAjgTAVgDQAtgHApAuIAlAmQAYATAYgGQALgDAMgKIAUgRQAVgSARgGQAkgPA4AHQAhAEBFAOQA8AJApgOQAFgCBUgrQA2gdApAIQAGABgBAGQgCAGgGgBQgcgFggAMQgSAHgkAWQgfAQgTAJQgdALgaADQgkADhDgPQhGgNgiABQgbAAgVAJQgNAHgdAYQgcAZgbAAQgNAAgNgGg");
	this.shape_96.setTransform(206.9665,73.9496,0.348,0.348);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#E3A672").s().p("AA6A0QgMgLgNgWQgIgPgJgDQgGgBgJAAIgNACQgpAGgkgUQgkgWgPgmQgCgFAGgCQAGgBACAFQARAoAoASQAUAJAVAAQAHAAANgCIATgCQARABAMAQIAUAdQAPAQAUAJQAUAJAWAAQAGAAAAAGQAAAGgGAAIgDAAQgpAAghgcg");
	this.shape_97.setTransform(174.6884,52.8125,0.348,0.348);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#E3A672").s().p("AhlBLQgngCgmgVQgFgDADgGQADgFAFADQA3AeAugMQAZgHANgSIAMgRQAHgJAJgEQAHgEANABIAVACQAPABAFgLIAIgXQANgiAngIQAngIAaAZQAEAEgFAFQgEAEgEgEQgQgQgZABQgYAAgRAPQgMALgHAZQgGAVgSAEQgHACgNgCQgPgCgGAAQgKACgJAMIgPAVQgZAbgqAAIgGAAg");
	this.shape_98.setTransform(171.8042,48.0614,0.348,0.348);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#E3A672").s().p("AgUAeQgQgZgagNQgFgDACgFQADgGAFACQALAFASgHQAYgJAEgBQAQgCANANQAGAHAHgBQAJgBACgHQACgGAGACQAHABgDAGQgDAJgIAFQgIAFgJgBQgGgBgKgJQgJgHgGgBQgHAAgKAEIgQAGIgKADQAQAMAMATQADAFgFADIgEABQgDAAgCgDg");
	this.shape_99.setTransform(213.1567,46.5154,0.348,0.348);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#E3A672").s().p("ACIBqQgdgcg1gQIgqgKQgbgGgOgFQgSgFgQgVIgagiIgfgnQgSgXgHgTQgCgGAGgBQAGgCACAGQAFAMAWAdIAgAqIAPAUQAJAMAHAHQAHAHALAEIAWAEQAzAMAbAKQArAQAbAaQAEAEgEAEQgBABAAAAQgBABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAgBQgBAAAAgBg");
	this.shape_100.setTransform(217.8277,51.4632,0.348,0.348);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#E3A672").s().p("ABqAqIgbggIgLgPQgIgJgGgEQgHgDgJAFIgPAKQgLAFgLAAQgVABgigNQgngQgRgCQgGAAAAgGQAAgHAGABQAVACApAQQATAIAKACQASAEAMgEQAJgDAQgLQAPgHALAJQAGAEAHAJIAMAOIAcAhQAEAFgFAEQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_101.setTransform(199.6755,53.1237,0.348,0.348);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#E3A672").s().p("AgjBjQgEgEAEgFQAOgPgDgiIgDgbQgBgPAAgLQACgaARgRIATgSQAMgLADgMQABgGAGACQAGACgBAGQgCAMgLALQgGAGgOAMQgUASABAfQAAAQAEAkQABAggQARQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAgBgBg");
	this.shape_102.setTransform(196.6086,48.5627,0.348,0.348);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#E3A672").s().p("ACOBwIgVg9QgLglgIgRQgFgNgVADIgfAJQgdAIgRgCQgTgCgRgOQgMgKgQgUQgYghgJgIQgXgWgZAEQgGABgBgGQgCgGAGgBQApgHArA5QAWAeAMAKQAVASAYgDQALgBATgFQAVgHAJgBQAcgEAIAOQADAEADAIIAEAMIAiBiQACAGgGACIgCAAQgFAAgBgEg");
	this.shape_103.setTransform(198.1754,57.865,0.348,0.348);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#E3A672").s().p("AoyCrQgFgDADgFQADgGAFADQA4AfBTgfQAdgLBOgwQBCgoAugJQAYgEAsADQAvACAVgDQAfgEAWgUQAZgWgGgcQAAgEACgCQACgCAEAAQAsAKAsgKQAtgLAigcQASgRAJgGQAPgKARAFQAQAGAJABQANAAAMgGQASgJAWgXQAegdAIgGQAtglArAYQAPAIAfAcQAcAXAXgFQAGgCACAGQACAHgGABQgbAGgfgXQgggdgSgJQgogWgxAuIgoAmQgXAVgUAEQgKABgLgBIgUgHQgMgDgJAGQgGAEgKAJIgPANQgNALgRAJQhBAhhGgNQACAXgSAVQgRAWgfAKQgbAJgvgDQg3gEgUAEQgfAFgkARQgVAKgoAYQhJAtgsAOQgeAJgbAAQgmAAgggRg");
	this.shape_104.setTransform(195.4258,52.0782,0.348,0.348);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#E3A672").s().p("AgeCUQgOguAAgcQgBgrAZgaQAUgTAIgKQAOgQAGgWQAKgjgKgvQgBgGAGgBQAGgCABAGQAJAogGAiQgHAngZAaIgPAOQgKAJgFAHQgLARgCAYQgCAcAQA2QACAGgGABIgDAAQgEAAgBgEg");
	this.shape_105.setTransform(128.0161,127.663,0.348,0.348);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#E3A672").s().p("AhFAuQgEgEAFgEQA7gwBHglQAFgDADAGQAEAFgGADQhCAhg+AyQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgCAAgDgDg");
	this.shape_106.setTransform(118.7367,136.853,0.348,0.348);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#E3A672").s().p("AhnBeQgFgSACgTQADgUAKgPQATgcAsgMIApgHQAZgEAPgHQAtgUgBgjQAAgGAGAAQAGAAABAGQABA9hmASQgdAFgMAEQgYAFgOANQgPAOgFAVQgFAVAGATQACAGgGACIgCAAQgEAAgCgEg");
	this.shape_107.setTransform(107.4865,139.5541,0.348,0.348);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#E3A672").s().p("AiHAaQgCgGAGgDQA9gVBFAPQAjAJAfgMQAXgJAngaQAFgEADAFQADAGgFADQgiAXgWAKQgiAPgegEIghgHQgVgEgOAAQgjAAgmANIgCABQgEAAgBgEg");
	this.shape_108.setTransform(105.4223,113.8597,0.348,0.348);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#E3A672").s().p("ABfATQgPgGgOgLQgKgKgGgEQgEgCgHAAIgMAAIi+AUQgGABAAgGQAAgFAGgBIC5gVIASgBQAKABAHAEQAFADAJAJQAJAIAGADQAjAVApgJQAGgCACAGQABAGgGACQgOADgNAAQgWAAgVgJg");
	this.shape_109.setTransform(122.5663,94.2812,0.348,0.348);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#E3A672").s().p("AAyAkQgVgdgKgKQgTgWgegKQgegKgeAGQgFABgCgGQgCgGAGgBQAcgFAcAGQAcAHAVARQAKAHAKAMIARAVQAWAfAUgEQAFgBACAGQACAGgGABIgIABQgTAAgRgSg");
	this.shape_110.setTransform(106.0728,102.3997,0.348,0.348);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#E3A672").s().p("AhzDKQgFgFAEgEQAbgeALgQQAUgcAGgaQADgLAAgOIgBgZQgBgXAPgMQAKgIAagPQAYgOAMgMQASgRADgUQACgJgBgSQgCgTABgIQACgVARgSQAKgMAXgSQAFgEADAGQADAFgFAEQgRANgJAIQgNAOgFAPQgDALACAWQACAYgDAKQgFAWgUAUQgOANgaAQIgaAPQgPAMAAAOIAAAeQABARgEAMQgHAbgUAdQgMAQgcAgQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_111.setTransform(99.2088,98.6173,0.348,0.348);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#E3A672").s().p("AhUEaQgIgMABgQQABgOAIgOQAOgVAqgNIATgGQAKgEADgHQAEgNgHgXQgDgMgJgRIgPgcQgRgigBgXQAAgXAPghIAPgeQAIgTAEgOQABgHABgaQACgUAGgMQAGgKAQgPQARgQAFgJQAWgdADgoQABgGAGAAQAHAAgBAGQgDAlgTAgQgJAOgNAOQgWAUgEAHQgFAIgBALIgBAVQgBAPgEAMQgEANgHARIgOAdQgSAlAFAcQAEAUAVAmQARAhAFATQAJAkgYAMQgHAEgWAGQgUAGgKAHQgPAKgGAQQgHARAKAPQAEAFgGADIgDABQgDAAgDgDg");
	this.shape_112.setTransform(150.6482,87.3189,0.348,0.348);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#E3A672").s().p("AlpChQgFgDACgFQAUgnAogSQAlgQAzAOQAgAIAVADQAdADAZgGQANgDAIgHQAIgHAFgNIAOgjQAcg3BOghQAWgJCLgeQBlgWAvgvQAFgFAEAFQAFAEgFAEQgeAeguATQgiAOg1ALQh1AYgjAPQhUAigXBFQgIAZgJAJQgKAKgUAFQgtAKgxgNQghgIgMgCQgYgDgVAGQgrAOgUApQgBAEgDAAIgEgCg");
	this.shape_113.setTransform(113.0678,100.0742,0.348,0.348);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#E3A672").s().p("AlGH/QgGgEADgFQAOgigHgmQgHgmgagbQgEgDADgEQAMgVAighIAXgZQANgPAFgPQAJgcgVgpQgagzgCgQQgDgfAVgaQATgXAfgNQAXgKAygHIAqgFQAagGAPgJQALgHgBgNIgHgXQgEgMACgNQAFgaAagYQATgQAkgRQArgTAOgKQAigVAGgcQACgLgEgZQgEgYAEgNQAHgUAegQQAhgSAJgMQAGgJACgYQACgXAIgKQAOgSAggDQAKgBAVACQAUABALgCQArgHABgaQAAgGAGAAQAGAAAAAGQgBAfgiAKQgWAGgmgCQgZAAgNAEQgWAGgFATQgCAGgBAPQgBAOgCAHQgFAMgKAKQgOAMggAQQgPAJgFALQgEAIAAAMQAAAGADAPQAFAlgOAWQgPAWgdAQQgTAMgrASQglASgRAYQgMAPgBAQQAAAIADAJIAFARQAEAQgIALQgHAKgRAHQgWAIg5AIQgzAHgaAOQgmAUgIAfQgFAQAFASQADANALAUIAPAeQAJARACAOQADAbgOAaQgKATgeAdQgaAagMASQAaAcAHAnQAIAqgRAmQgBAEgDAAIgDgBg");
	this.shape_114.setTransform(132.014,124.027,0.348,0.348);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#E3A672").s().p("AAiG4QgFgEAEgFQASgWgWgkQgGgKgMgNIgTgWQgfgnAOgzQADgOANggQALgcADgRQAJgogZg1IgVgoQgMgXgFgSQgJgqAVgnIAagnQAPgYAGgRQAKgZgHgfQgEgQgOglQgVg0AFgjQAGgqAfgOQAFgDADAGQAEAFgGACQgWAKgGAaQgGAVAEAbQAEASAOAlQAOAjADAUQAGAqgdAtIgZAnQgPAXgDAUQgFAjAbAzQAgA+AEAWQAGAigUA0IgRAuQgIAbADAUQAEAVASAXIAhAmQANATACATQACAWgNAQQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAg");
	this.shape_115.setTransform(112.2044,126.627,0.348,0.348);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#E3A672").s().p("AjyELQgDgFAFgEIBohEIAagQQAPgJAJgIQAQgOgKgNQgJgHgDgGQgHgNAKgRQAHgNAOgLQAagTApgEQAOgBAmABQAhABATgDQAUgDAEgIQADgGgBgKIgBgNQgBgJABgFQACgRASgHQAbgKADgDQAcgXgIg5IgGgrQgDgaAFgSQALglAfgMQAFgCACAGQACAGgGACQgXAIgIAbQgGAVADAcIAHAwQACAcgHAVQgLAiggAKQgNAEgFAEQgHAGABAMIABAOIABAPQgDARgTAHQgLAEgXABQgMABgkgBQgfgBgQADQgyAHgSAfQgJAPALALIAKALQAGANgJAOQgHAKgZAQIiFBXIgEABQgCAAgDgDg");
	this.shape_116.setTransform(117.6394,104.4291,0.348,0.348);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#E3A672").s().p("AjECoIgWgTQgOgNgJgFQgcgRgoABQghACgmARQgWAKgrAaQgFAEgEgGQgDgFAFgDQAtgcAZgLQApgSAkAAQAkgBAdAPQALAGARAPQASAQAJAGQAiAVAkgsQATgaAKgLQARgUAQgEQALgDARAEQAVAGAFAAQARABAOgMQAOgMADgQQABgKgFgVQgFgTADgMQAGgUAYgNQAOgIApgIQAkgHAQgOQAKgIAEgSQAFgYADgFQALgWAYgJQAZgKAXAKQAMAFAMAMIAUAXQAWAaAgAPQAgAPAjAAQAGAAAAAHQAAAGgGAAQgjgBghgOQghgOgYgZQgPgTgJgJQgPgQgQgDQgQgCgPAGQgQAHgIAOQgFAIgEATQgDASgHAJQgNARgdAJQglAHgUAGQgjAKgHAYQgDALAFATQAGAVgCAKQgGAagXAOQgWAOgdgJQgPgFgKAAQgMABgLAJQgMAJgPAWQgRAZgJAIQgQAQgUACIgGABQgRAAgRgMg");
	this.shape_117.setTransform(117.8389,72.8841,0.348,0.348);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#E3A672").s().p("Ap3E0QgFgDACgGQAag6AZggQAlgwAugIQAVgEAnAJQAoAKAUgDQAdgEAYgRQAZgSAMgbQADgEAEABIAuAMQABgWAPgTQARgWAagGQAYgGAZANQAPAHAdATQAPAIAMABQAPABALgLIARgUQAKgMAJgGQAWgMAbACQAaABAXANQAYANAXAZQAMAOAVAdIBJg9IAigcQATgRAMgNQALgNATgvQAQgmAWgQQATgNAigKIA3gRQAggOAPgWQAJgNAPglQAMgdAKgNQAQgVAWgEQAGgBACAGQABAGgGABQgZAFgRAfQgJASgOAkQgWAvg1ATQgmALgTAGQghALgRASQgLALgIAUIgNAiQgMAcgaAYQgYAYgnAfIhBA2QgGAEgEgGQgZgkgPgPQgZgbgbgKQgbgKgYAFQgaAFgQAWIgOARQgKAJgKADQgQAFgTgJIgqgaQgagQgUADQgZACgRAUQgRAUACAZQAAADgDACQgCACgDgBIgxgNQgYAug1ARQgaAIgbgDQgKgBgWgHQgVgFgMgBQgzgDgqAyQgbAhgbA+QgBADgDAAIgEgBg");
	this.shape_118.setTransform(116.37,85.9318,0.348,0.348);

	this.instance = new lib.Path_113();
	this.instance.setTransform(227.75,12.8,0.3481,0.3481,0,0,0,91.5,26.7);
	this.instance.alpha = 0.2188;
	this.instance.compositeOperation = "multiply";

	this.instance_1 = new lib.CompoundPath();
	this.instance_1.setTransform(112.7,46.1,0.3481,0.3481,0,0,0,129.6,52.5);
	this.instance_1.alpha = 0.2188;
	this.instance_1.compositeOperation = "multiply";

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#8D5734").s().p("AAAAJQgEgDgTAEQgUAEAAAHQAAgOAWgHQAXgGADgLIADgGIAEgCIAUgCQgKAHAFAFIADACQALAGADALQgDgBgDgDIgFgFQgHgHgNADQgIADgHAJQAGAEAIAAQAEAKgEALQgEgNgIgGg");
	this.shape_119.setTransform(186.0237,34.6811,0.3481,0.3481);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#693E22").s().p("Ag0ApQgNgCgDgLIgBgNIgFgJQgDgFAAgDQAAgEAGgGQAHgHAIgGIAAAKQAAAHABACQADAFAFgBQAHgBADABIgMAGIgIAGQgDACAHAEIALAGQAFAEANgBQAVgDAFgCIARgFQALgDACgGIgEgEQgEgCAAgBQACgCAEABQADABABABQADADABAHIALgKQAGgFACgGQADgJgGgEIAMADQABgLAEgJQAEAEgBAMQgCALADAEIADAEQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBABQgJANgfAIIhBASQgMAEgHAAIgEgBg");
	this.shape_120.setTransform(185.599,35.6244,0.3481,0.3481);

	this.instance_2 = new lib.Path_2_2();
	this.instance_2.setTransform(185.9,34.85,0.3481,0.3481,0,0,0,6.8,5);
	this.instance_2.alpha = 0.4219;

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#8D5734").s().p("AhAAqIgEgLQgIgQAFgLQACgEAPgRIANgQQAIgJAHgEQASgJAXAJIAOAGQAHADAHABIANAAQAHAAAFACQAEACABACIABAFQAAAUgEAKQgGASgPAFIgMADQgGABgKAFIgRAIQgOAFgbABIgEAAQgSAAgFgJg");
	this.shape_121.setTransform(185.6723,35.0525,0.3481,0.3481);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#8D5734").s().p("AAAALQgFgEgWAEQgWAEAAAIQAAgQAZgHIATgGQAIgFADgIQABgGADgBIADgCIAXgDIgGAHQgCAEACADIAEACQAMAHAEAMQgEAAgDgEIgGgGQgIgIgOAEQgKADgIAKQAIAEAIABQAFALgFANQgDgPgKgGg");
	this.shape_122.setTransform(125.1673,55.7846,0.3481,0.3481);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#693E22").s().p("Ag6AvQgRgDgCgNQABgKgCgEIgFgKQgEgGAAgDQAAgEAGgHQALgLAHgEIAAALQgBAJACACQADAFAGgBQAIgCADABQgEACgKAGIgIAGQgDADAHAFIAMAHQAGADAPgBQAUgCAJgDIATgGQANgEADgGQAAgBgFgDQgFgDABgBQACgCADABQAEABACABQADAEABAIIAMgMQAIgIABgFQADgJgGgFIAOADQABgLAEgLQAFAFgCAMQgBANADAFIADAFQAAACgCADQgKAPgkAJIhJAUQgMAEgJAAIgEAAg");
	this.shape_123.setTransform(124.6817,56.8494,0.3481,0.3481);

	this.instance_3 = new lib.Path_2_1();
	this.instance_3.setTransform(125.1,56,0.3481,0.3481,0,0,0,7.4,6);
	this.instance_3.alpha = 0.4219;

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#8D5734").s().p("AhJAwIgEgNQgJgSAFgMQADgGARgTIAPgRQAJgKAIgFQAUgLAaALIAQAHQAIAEAIAAIAOAAQAJAAAFACQAFACABADIAAAFQgBAagDAJQgHAUgQAFIgOAEQgIACgLAFIgTAJQgOAFggACIgDAAQgWAAgGgKg");
	this.shape_124.setTransform(124.7696,56.2037,0.3481,0.3481);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#8D5734").s().p("AABASQgKgHgkAIQglAHAAANQAAgOANgLQAMgJARgFQAVgGAKgFQAPgIAEgNQACgKAEgCIAGgDIAmgFQgHAFgDAHQgEAGAFAFIAGAEQAVALAFAVQgGgBgFgGIgKgKQgOgNgXAGQgQAGgOAQQAMAGAPADQAIATgIAUQgEgXgRgMg");
	this.shape_125.setTransform(132.9124,52.0686,0.3481,0.3481);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#693E22").s().p("AhiBOQgLgCgIgGQgKgIgCgKIAAgMIgBgMQgCgEgHgMQgHgJABgGQAAgJAKgKQAQgQANgJQABADgBAQQgBAOADADQAGAJAJgBQAOgDAFABQgIADgPALIgOAKQgGAFAMAIIAVALQALAGAXgCQAigDAPgGIAggJQAWgHAEgJQABgCgJgGQgIgFABgBQAEgEAGABQAFABAEAEQAEAFADAOIAUgUQAMgNADgIQAFgPgKgJIAWAEQACgTAIgRQAHAIgDAVQgDAWAGAIQAFAGAAABQABADgDAFQgLAQgXALQgOAHgdAIIh7AhQgVAGgOAAIgHAAg");
	this.shape_126.setTransform(132.1212,53.8425,0.3481,0.3481);

	this.instance_4 = new lib.Path_2_0();
	this.instance_4.setTransform(132.65,52.4,0.3481,0.3481,0,0,0,11.9,9.2);
	this.instance_4.alpha = 0.4219;

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#8D5734").s().p("Ah6BQIgEgLIgEgLQgNgdAIgVQAFgKAcgfIAYgdQAQgSANgHQAhgRAtARIAZAMQAOAGANABIAYAAQAOgBAJAEQAHADACAFQACACAAAHQgBAmgHAUQgLAhgbAJQgEACgHABIgMADQgNADgTAJIgfAPQgYAJg1ADIgIAAQgiAAgKgRg");
	this.shape_127.setTransform(132.2549,52.7812,0.3481,0.3481);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#8D5734").s().p("AABASQgKgHgkAIQglAHAAANQAAgOANgLQAMgJARgFQAVgGAKgFQAPgIAEgNQACgKAEgCIAGgDIAmgFQgHAFgDAHQgEAGAFAFIAGAEQAVALAFAVQgGgBgFgGIgKgKQgOgNgXAGQgQAGgOAQQAMAGAPADQAIATgIAUQgEgXgRgMg");
	this.shape_128.setTransform(179.9057,34.8377,0.3481,0.3481);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#693E22").s().p("AhiBOQgLgCgIgGQgKgIgCgKIAAgMIgBgMQgCgEgHgMQgHgJABgGQAAgJAKgKQAQgQANgJQABADgBAQQgBAOADADQAGAJAJgBQAOgDAFABQgIADgPALIgOAKQgGAFAMAIIAVALQALAGAXgCQAigDAPgGIAggJQAWgHAEgJQABgCgJgGQgIgFABgBQAEgEAGABQAFABAEAEQAEAFADAOIAUgUQAMgNADgIQAFgPgKgJIAWAEQACgTAIgRQAHAIgDAVQgDAWAGAIQAFAGAAABQABADgDAFQgLAQgXALQgOAHgdAIIh7AhQgVAGgOAAIgHAAg");
	this.shape_129.setTransform(179.1145,36.6116,0.3481,0.3481);

	this.instance_5 = new lib.Path_2_3();
	this.instance_5.setTransform(179.65,35.2,0.3481,0.3481,0,0,0,11.9,9.3);
	this.instance_5.alpha = 0.4219;

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#8D5734").s().p("Ah6BQIgEgLIgEgLQgNgdAIgVQAFgKAcgfIAYgdQAQgSANgHQAhgRAtARIAZAMQAOAGANABIAYAAQAOgBAJAEQAHADACAFQACACAAAHQgBAmgHAUQgLAhgbAJQgEACgHABIgMADQgNADgTAJIgfAPQgYAJg1ADIgIAAQgiAAgKgRg");
	this.shape_130.setTransform(179.2482,35.5503,0.3481,0.3481);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#E6B184").s().p("ACEBPIhLhTQgNgOgHgFQgKgHgNgEQgOgDgiACQgbACgRgEQgSgEgOgLQgMgJgFgHIgFgHIAHgEQATAcAiAHQANACASgBIAfgBQAQAAAMAEQANADAMAKQAIAHAKALIAOAQIA5BIIABABIgBgBg");
	this.shape_131.setTransform(173.4303,136.2905,0.348,0.348);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#E6B184").s().p("ADGCkQgJgFgOAAIgYACQgRACgIgBQgPgBgJgGQgGgFgJgPIgNgWIgbgoQghgugcgZQgkgfglgJQgIgCgegDQgagCgLgKQgGgFgEgKIgbhbIAHgCIAbBWQAEAOALAGQAJAEAQACIAcACQAYAEAbAOQAkAVAjArQAZAfAWAlIASAfIAIANIAFAFIAGAEQAKAFAQAAIAWgBIASAAIAOABIAHADIADABIABABIgCAAg");
	this.shape_132.setTransform(177.6756,129.0784,0.348,0.348);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#E6B184").s().p("ACfBQIgLgLIgmgcQgMgJgPgIIgbgPIg3gaQgfgPgSgMIgWgNQgLgIgIgDQgMgFgXADQgSADgIgBIgJgBIABgIQAKACAcgEIAUgBQAJABAKAFQAMAGATANIAdARIA2AdQAfAPAQAKIAkAYIAOALIATARIAKAMIABABIgBgBg");
	this.shape_133.setTransform(175.5636,120.2191,0.348,0.348);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#E6B184").s().p("AAqCPQgPg1gigsIgSgVQgOgNgCgKQgDgGAEgIIAHgLQAFgJAFgMQAJgTABgVQACgNgCgTIgDgMQAAgDgDgCIgHgGQACgEAFABQADAAADADIAEAEIACAFIADARQABATgCAPQgDAhgSAaIgHAMQgCAFABAFQADAHAMANQAQASAMATQATAgAJAdQAFAOABAJIAAABIgBgBg");
	this.shape_134.setTransform(176.2284,115.8599,0.348,0.348);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#E6B184").s().p("ACBBvQgMgJgKgQIgPgeIgOgeQgIgRgJgKQgKgLgQgHQgNgFgQgBQgMgCgRACIgcAFQgRACgLgDQgNgDgJgMQgFgGgGgOIgFgSQgDgOgFgLIgEgHIAHgFQAHALAIAdQAHAZAIAJQAMALAUgCQAMAAAXgEQAngFAaANQAMAGAMAMQAKALAFALIAKAXIAIATIAHARQADAHAEAHIANAQIAFAFIABACIgBgBg");
	this.shape_135.setTransform(204.4929,120.2698,0.348,0.348);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#E6B184").s().p("ADeAlQhkgRjIgmQgtgJgOgBQgYAAgVAIQgPAFgMAJIgIAGIgGgFQATgRAZgIQAYgIAYACIAtAIIE0BAQABAAAAAAQABABAAAAQAAAAAAAAQAAAAgBAAIgBAAg");
	this.shape_136.setTransform(206.9568,116.5574,0.348,0.348);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#E6B184").s().p("AipAfQgQgCgNgJIgHgGIgCgCIAGgFQAOAPAZABQAVABAWgJQALgEAbgNQAZgLAOgEQATgHATgEQAagEAKADQAGACAJAGIAOAJQANAIAOAFQAVAJAcAGIAmAHIAfAFQADAAgDAAQgugEgcgFQgrgJgegPIgQgLQgJgGgHgBQgGgCgKACIgRADQgfAIggANIgbANQgPAIgLADQgSAHgQAAIgNgBg");
	this.shape_137.setTransform(196.6302,121.9991,0.348,0.348);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#E6B184").s().p("AkNCKQAkglA2gnQAsggA3ggQAigWAQgHQAfgPAZAFQATAEAgARQAgATAMACQALAEAMAAIAKgCIAKgDQANgGATgUQAYgZASgfQAMgXAIgSIAFgQIAIADQgXBGg0A0QgQAPgMAGQgSAJgQgDQgPgCgRgJIgcgOQgigUgTgCQgWgDgdAOIgtAYIgpAYIhDAsQgeAWgSAOIglAiIgCABIABgCg");
	this.shape_138.setTransform(119.1431,113.9798,0.348,0.348);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#E6B184").s().p("AifB2QAphGBJgoQAMgGAYgJQAYgIAJgGQAOgIAHgSIALghQAHgUALgIIAGgFIAIgDQAHgCAJAAQAMABAOAHIASANIAEAEIAAgCIgBgFIgDgGIgCgDIAHgFQAEAGACAHIACAHIgBALIAAAFQAAABgBAAIgBgBIgCgBIgIgHIgDgDIgDgBIgEgEQgXgRgSABQgUACgKAXQgGAMgIAcQgJAXgSAJIgTAHIgwATIgbAQQgqAbgdAjIgPAUIgFAHIgBABIABgBg");
	this.shape_139.setTransform(136.4672,128.7825,0.348,0.348);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#E6B184").s().p("ABNC6QgBhTgKhHIgGglIgDgRQgCgKgEgHQgIgKgSgKIgdgPQgkgOgQgPQgLgLgFgKQgFgLgBgMQAAgUAKgLIAGgHIADgBIAEAHQgIAGgEAKQgEAKACAMQAEATATAQQANALAYAKIAlASIARALQAKAJAEAHQADAIACALIADASIAIBAQAEA0AAAoIgBAhIgBABIAAgBg");
	this.shape_140.setTransform(145.3271,126.2137,0.348,0.348);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#E6B184").s().p("ADfBaQAAgKgNgHQgGgEgPgDQgagGgSgCQgXgBgXABQgTACgZAGQgPADgJgDQgIgCgEgEQgDgFgBgHQgEgQgCgEQgEgIgHgIIgggZQgVgQgLgGQgOgJgSgGQgQgEgQAAIgeACQgPAAgLgDQgWgFgJgQQgEgEgBgGIgBgDIAIgCQACANANAIQAJAGAOACQASACAkgCQAZABAbANQAQAJAZASIAiAeQAKAKAEAKQACAHABANQACAJALACQAHABALgBIAkgGQA2gGA2ARQASAFAGAKQAEAEAAADIAAADIgBACIAAgCg");
	this.shape_141.setTransform(171.8184,144.5702,0.348,0.348);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#E6B184").s().p("Ag4EYQgEg3AFgwQAEgdAGgXQAFgVAMgdQALgZAPgUIAhgkQALgJAEgIQAGgJgBgLQgBgIgGgMIgKgUQgIgRgCgZIABgmIAFh2IAJAAIgGB+QgBAmAGAUQACAHAJASQAIAQACALQACAPgJANQgEAGgOAMIgSASIgPASIgMATIgKAUIgJATIgHATQgFAQgEAVIgJA9IgBAYIAAAhIAAALIAAACIAAgCg");
	this.shape_142.setTransform(163.0117,151.4039,0.348,0.348);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#E6B184").s().p("AhkEyQAWgXAHgfQAIghgHgcQgGgggTgZIgLgLIgMgLIgDgCIALgNIALgLIAagTQANgLAGgLIAegzQAfg5AeglQANgQAWgVIARgQQAKgJAFgHQAKgNAAgXIAAhnIAIAAIAABOIAAAnQgCASgPARIgbAZIgYAZQgWAYgTAeQgOAWgTAfIgPAaQgIAQgIAJQgHALgNAKIgVAQQgNAKgGAHIgBACIAAAAIgBABIAMALQARAQAJAWQAIATADAUQABANgBAXIgDAPIgEANIgKAVQgDAHgGAIIgHAHIgCADIgCACIABgDg");
	this.shape_143.setTransform(159.83,151.515,0.348,0.348);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#E6B184").s().p("AiJBfQALgdAcgUQAOgKAQgFIAfgHQASgEAJgJIAJgLIAHgMQANgQAPAAQAGABAJAEQAHADAEgBQAHAAAQgGQANgFAIgFQAUgLAEgOQAEgLgEgKIgDgFIgBgBIAFgGQAJAIAAANQABAKgFALQgIAOgWAMIgRAIIgSAGQgKACgKgDQgKgFgFAAQgLgCgMAPIgJAMQgEAIgFAEQgJAIgSAEIgZAEQgXAFgRAMQgOALgJALQgIAJgDAHIgEAHIAAAAIAAgBg");
	this.shape_144.setTransform(151.0458,139.8182,0.348,0.348);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#E6B184").s().p("AAADKQgHhEgOhOQgKgwAAgXQgBglARgcQAJgOALgJQAPgJACgIQADgHgCgOIgEgUQgCgLAAgGIABgIIABgGQADgGACgBIADgDIAFAGQgHAHAAALIAEAVIAEAXQAAAPgGAIQgDAFgFAEIgJAGQgHAGgGAIQgLAOgFAUQgIAbAGAqIAKA9QAHAzADAlIABAfIAAACIAAgBg");
	this.shape_145.setTransform(154.8006,142.8109,0.348,0.348);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#E3A672").s().p("AhEAbQgLgBgLgEIgIgCIAIABQAKACAMABIAQABIASgBIAUgDIATgEIAVgGIAigOIAngZIgGAFIgSAPIgNAIIgiASIgpAKIgnABg");
	this.shape_146.setTransform(136.6799,64.7757,0.348,0.348);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#E3A672").s().p("AiYCRIASgKIAXgQIAagVIAegaQATgTApgtIA9hAIBohgIgOANIgjAiIgyA1Ig9BAQggAkgeAcIgdAaIgbAUIgZAPIgTAJIgQAHg");
	this.shape_147.setTransform(146.2584,59.5123,0.348,0.348);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#E3A672").s().p("AgIANQgNgIgGgNIgDgJIAAgDIABADIAFAHQAGAJAOAIQAMAJAMABIAIACIAEAAIgEABIgJABIgCAAQgNAAgMgIg");
	this.shape_148.setTransform(165.5893,68.3183,0.348,0.348);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#E3A672").s().p("AgUAhQAFgVAIgPQAJgSAMgPIAKgMIgIAOIgRAiIgQAiIgGAPIADgQg");
	this.shape_149.setTransform(164.2495,73.3798,0.348,0.348);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#E3A672").s().p("AA7A4QAEgKgCgKQgEgPgKgKQgJgIgVgMQgbgQgegTIgXgQIAZANQAfAQAcAQQAUAMAKAKQAMAOABAPQABAMgFAIIgDAFg");
	this.shape_150.setTransform(167.7007,73.0666,0.348,0.348);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#E3A672").s().p("AA0BdQAGgYAAgHQAAgNgKgWIgRgjQgKgTgMgPIgWgcQgcgfgLgUQgKgXgBgSIABgQIAAAEQgBAEABAIQACATAMAUQALAUAbAdQATAVAGAIQANAPAIASIASAkQAJAXAAAOQAAAKgGAYIgaBUg");
	this.shape_151.setTransform(167.5381,70.6916,0.348,0.348);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#E3A672").s().p("AAmA6QgRgegVgcQgMgPgMgOQgQgTgDgHQgHgLgBgJIAAgIIABAIQADAKAGAJQAFAHARAQQAPAQAIAOQAWAaAPAiIALAbg");
	this.shape_152.setTransform(169.3128,64.0101,0.348,0.348);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#E3A672").s().p("AAPBFIgVgaQgNgTgIgRQgKgUAAgUQAAgTAIgPQAGgMAIgGIAFgEIACgBIgGAGQgHAHgFALQgGAOABATQABATAJASQAIAQAMAUQAJAPAKAMQALAPAJAJQgKgIgNgOg");
	this.shape_153.setTransform(165.3892,62.0962,0.348,0.348);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#E3A672").s().p("AgQBRQAOgmAKgpQAKgmAHgqIAEgiIgBAjQgDAogKApQgLApgQAlIgQAeg");
	this.shape_154.setTransform(163.0838,76.7118,0.348,0.348);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#E3A672").s().p("AAABuIgLgYQgJgZgBgOQgBgMACgNQADgMAIgLQAKgOAEgGQAFgKAEgLQAEgOABgaIgCgkIACAJIADAbQACAWgFATQgEAOgFAJIgNAUQgOAUACAYQABASAHAVIAIAYIAEAKg");
	this.shape_155.setTransform(161.1755,81.5141,0.348,0.348);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#E3A672").s().p("AAwAjQgdgLgYgOQgZgOgXgUIgSgRIAUAPQAaARAXANIAzAcIAXAKIgYgHg");
	this.shape_156.setTransform(185.6858,83.3411,0.348,0.348);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#E3A672").s().p("AAPB4IgWgeQgMgVABgTQAAgKAEgNIAGgUQADgVgJgTQgHgNgOgWQgPgWgEgKQgFgMgDgUIgCgbQgCgOgCgFIgFgLIgDgEIADAEIAGAKIAFAUIAEAaQADAUAFALQAFALAOAUQASAYAFALQAKAXgDAVIgGAVQgEANAAAIQgCARAMAUQAEAKAQAUIA6BNg");
	this.shape_157.setTransform(169.3128,130.4244,0.348,0.348);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#E3A672").s().p("AgvCCIgHgOIgEgJIgDgKQgCgKgBgPQAAgQACgMQACgOAIgQQAGgOAMgOQAJgKAQgNQAPgLAJgIQASgPAOgYQAIgNAHgTIADgNIgCANQgEARgIAQQgMAXgUAUIgXAUQgRANgHAIQgLANgHANQgHAPgDAOQgDAOAAANQAAAOACAKIAEATIAHAOIAEAJIACADg");
	this.shape_158.setTransform(163.2752,119.0015,0.348,0.348);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#E3A672").s().p("AgXARQgggTgIgHQgIgIgHgJQgFgJgBgJQgCgQAHgLIAFgGIACgCIgCACIgEAGQgGALAEAPQADARARAOQAMAKAdAQQA6AkAuAgQgxgbg7gkg");
	this.shape_159.setTransform(168.6265,115.4868,0.348,0.348);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#E3A672").s().p("AA0CDQgig+gmhAIgqhDQgLgSgEgOQgEgOACgRQACgQAKgbIAHgPIgGAQQgIAagBAQQgBAQAEAOQADAMAMASIArBDQAlA+AgBBQARAiAJAVg");
	this.shape_160.setTransform(168.4573,118.8797,0.348,0.348);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#E3A672").s().p("AAcCaQgEgZgEgPQgIgbgOgcQgKgSgJgLIgKgQQgGgKAAgJQAAgJAEgKIAJgRIASgfIATgZQANgRADgGQAGgLABgKQABgIgDgIQgCgGgDgEQAEADACAGQAEAIgBAKQAAAKgGAMQgFAKgKANIgSAbQgIAMgJARIgJARQgEAJAAAIQABAHAFAJIAKAPQAKANAHASQAPAcAGAcQAFAVABAUIAAAOg");
	this.shape_161.setTransform(175.8127,94.8944,0.348,0.348);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#E3A672").s().p("ABSBQQgHgKgHgOQgLgXgHgOQgGgLgHgIQgIgJgKgIIhqhGIBuBBQAKAIAJALQAHAGAGAOQAHAOAJAXIAMAaIAFAIIgGgIg");
	this.shape_162.setTransform(181.0749,80.6615,0.348,0.348);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#E3A672").s().p("AgDA9QgDgIgEgTIgCgRIAAgRQAAgJACgJIADgQQAFgRADgKIAMgXIgJAYIgFAbIgEAhIABAhIAKA0g");
	this.shape_163.setTransform(155.5454,78.8607,0.348,0.348);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#E3A672").s().p("AhGBBIADgKQABgEAGgHQAJgLARgKQAZgPAJgHQAdgUAYgcIASgZIgEAIIgMATQgVAfgfAVQgJAIgZANQgSAKgJAIQgFAEgCAGIgEAJIAAAIIgBgIg");
	this.shape_164.setTransform(130.0854,108.4922,0.348,0.348);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#E3A672").s().p("AgWB5IgDgHQgEgMAEgRIAGgTIAHgWQAEgMAAgMQABgJgHgOQgIgOgBgNQAAgMADgOQAGgUAPgSQAIgLAMgKIAHgIIgHAIIgSAXQgMATgFASQgDANABALQABANAHAMQAIANgBANQAAALgFAPIgPAoQgGAQADAMIADAKg");
	this.shape_165.setTransform(142.5325,123.8734,0.348,0.348);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#E3A672").s().p("AgZBwQAOgXAMgWIAhhJIAJgfIADgPQACgQAAgMIgBgZIgFgwIADANIAGAjQACAPAAAKIgBAdIgDAPIgOAvIgeA7QgLAVgRAYIgdAng");
	this.shape_166.setTransform(142.3434,110.8498,0.348,0.348);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#E3A672").s().p("AgXBXQgGg3AHgkIAGgaIAJgXIAUgkQAIgNAEgMIACgJIgBAKQgDAMgHAOIgRAkIgIAXIgGAZQgGAeACA7IABAmIgFglg");
	this.shape_167.setTransform(160.2062,64.2102,0.348,0.348);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#E3A672").s().p("ABhBGIgUgTQgegcgqgcIhMgyIgfgUIAhARQArAXAiAZQAoAaAfAgIATAVIAGAIg");
	this.shape_168.setTransform(161.8658,87.082,0.348,0.348);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#E3A672").s().p("AgTBhIgBgGQgCgLABgLQAAgNAHgTIAMglQAJghAJgkIAHgdIgEAeQgFAjgLAiIgMAmQgGAQgDAPQgCAMABAJIABAIg");
	this.shape_169.setTransform(160.3288,107.7527,0.348,0.348);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#E3A672").s().p("AhkBtQAJgNAWgJIAYgHQAPgCANgHQAQgIAEgMQACgEABgLQACgNADgGQAEgHAKgFIAPgIQARgHAIgLQAGgLAFgQIAHgYIAGgVQADgIAEgGIAGgHIADgDIgIALQgEAHgCAHIgKAtQgGATgGAJIgFAHIgGAGQgHAFgHADIgPAIQgJAFgDAGQgDAEgBALQgBAMgDAGQgGAOgSAJQgOAFgPADIgZAGQgWAGgIANIgFAIIAEgJg");
	this.shape_170.setTransform(158.1249,100.6189,0.348,0.348);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#E3A672").s().p("AgjAkIgBgXIAAgaQAAgMAFgOQAEgKAIgLQAJgOASgQIAegXIgcAZQgPARgJAOQgPAXAAAWIAAB+g");
	this.shape_171.setTransform(164.7672,95.2859,0.348,0.348);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#E3A672").s().p("AAAABIg4hSIgZggIAIAIIAUAWQASAXAnA6QAsA/AiA1QgngxgrhAg");
	this.shape_172.setTransform(177.943,114.495,0.348,0.348);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#E3A672").s().p("ABuA2Qg7gZg9gVIgjgLQgagIgGAAIgQADQgHAAgJgEQgLgGgLgLQgNgOgJgTIgGgNIAHANQAKARAOANQAJAJAMAHQAHADAHgBIAQgDQAHAAAKADIARAFIAkAKQA/AWA4AcQARAIASAKIANAHg");
	this.shape_173.setTransform(193.681,124.0126,0.348,0.348);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#E3A672").s().p("AANBlQgKgHgHgKQgNgOgCgUQgBgGACgPIAEgXQAGgngGgmIgGggIACAIIAHAYQAJAngFAnIgEAXQgDAMABAIQABASAKAPQAHAKAJAHIAGADIACABg");
	this.shape_174.setTransform(191.2189,94.4246,0.348,0.348);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#E3A672").s().p("ABXBPQhDgegvgTIghgNQgTgIgJgKQgHgJgIgSIgehIIAiBGQAIAQAHAJQAHAIATAIIAiANQA0AWA8AeIAuAZg");
	this.shape_175.setTransform(194.9859,93.4937,0.348,0.348);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#E3A672").s().p("ABMBlIgVgmIgQgVQgVgZgWgRQgJgIgRgLIgZgRQgLgJgIgLQgFgJgEgOQgEgTAFgPIADgJIACgDIgBADQgCAEgBAFQgDARAFAQQADALAGAKQAJAMAKAHIAZAQQAPAJALAJQAXATAUAZQAIAKAIANIATAnIAHAag");
	this.shape_176.setTransform(194.1633,88.8306,0.348,0.348);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#E3A672").s().p("ABoBDQgIgNgKgMQgOgQgTgOIgXgMQgNgHgNACQgUABgIgBQgLgBgQgGQgWgKgPgRIgLgOIgJgUIgBgDIACADIADAHQACAEAFAHIALANQARAQAUAIQAMAFANABIAcAAIAQABIAOAFIAWAOQAUAPANARQAKAOAGAMIAFALg");
	this.shape_177.setTransform(195.1164,84.6547,0.348,0.348);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#E3A672").s().p("ABMBRQgWgIgYgMQgbgPgVgXQgJgMgJgOQgJgQgIgGIgUgQIgRgQQgNgNgJgNIgHgKIAIAKQAKANAMALIASAOIAWAQQAKAHAJAQQAIANAKALQARAVAcARQAUAMAYAKIAfAMIAMAEg");
	this.shape_178.setTransform(191.2711,67.2203,0.348,0.348);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#E3A672").s().p("AibAsQAPgJAVgFIAZgHQARgEAMgEQATgGAsgVQAqgVAUgHQAdgKAbAAQASAAAUAEIAOADIgOgCQgWgCgPABQgZABgeALQgTAGgrAWQgqAUgVAHQgNAEgRADIgaAFQgTAEgRAIIgMAGg");
	this.shape_179.setTransform(130.0071,71.3519,0.348,0.348);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#E3A672").s().p("AAsBjQgDghgFgSQgIgigQgVQgHgKgNgPIgUgXQgKgMgEgNQgGgMABgMQABgSALgPIAGgHIACgCIgCACIgFAIQgKAOABASQAAANAFAKQAFAKAJAMIAVAXQANAPAIAKQARAZAHAhQAFAVABAfIgBAwg");
	this.shape_180.setTransform(133.1277,111.163,0.348,0.348);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#E3A672").s().p("AAgAFIATgeQAFgJAAgIQABgHgDgIQgKgUgDgKQgEgMACgQQACgPAJgYIAGgOIgFAPQgIAWgBAQQgBANAEAOQAEAJAKATQAEAKAAAJQgBAJgFAJIgTAhQg2BYguBHQAphLA1hZg");
	this.shape_181.setTransform(129.7645,112.1896,0.348,0.348);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#E3A672").s().p("AhlBPIAUgXQAfgiApghQAlgeAsgaIAlgUIgjAXQgmAZgoAhQgnAfgkAiIgdAdg");
	this.shape_182.setTransform(123.1082,97.8088,0.348,0.348);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#E3A672").s().p("Ag+AoQAYgfAcgWQAdgYAggQQANgGAHgDIAIgDIgbAPQgdASgdAYQgfAagVAYIgPASIgFAGg");
	this.shape_183.setTransform(135.0878,98.1046,0.348,0.348);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#E3A672").s().p("AgDAAIARhXIAJglIgGAlQgGAugHAqQgMBFgNA3QAGg5AMhEg");
	this.shape_184.setTransform(153.4792,81.2618,0.348,0.348);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#E3A672").s().p("AgqBcQADg8AKgqQAHgdAMgZQAKgXANgRQALgOALgJIAIgHIgIAIQgLAMgIAMQgOAWgHATQgLAZgGAcQgLApgFA8IgEAqIAAgrg");
	this.shape_185.setTransform(151.2752,85.0897,0.348,0.348);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#E3A672").s().p("AhlCiQABgIAEgHQAGgKAMgHQAKgGAVgHQASgGARgLQAQgKASgTQARgUAMgUQAJgNAJgkIAThnIAGgdIABgCIgBAAIgBABIgBAAIgBACIgGAJIgIARIgOAeIgMAWQgEAHgFAFIgFAEIAEgEQAGgGADgGQAEgIAUgtIANgbIACgCQAAgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAIAJgIIACgBIAAgBIAAABIgCAMIgBAEIgFAdIgIAyQgFAfgFAXQgIAhgLASQgNAVgSATQgTASgQALQgTALgSAFQgXAIgIADQgMAHgGAJQgFAHgBAIIAAAFIAAgFg");
	this.shape_186.setTransform(149.586,76.4856,0.348,0.348);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#E3A672").s().p("AhDBfQAIgGANgMQAggdAbgoIAagpQAKgRAIgUQAJgVAEgFIAFgFIgEAGQgDAEgHAWQgIAVgIARIgaArIggAoQgMAMgSAQQgLAJgMAHIgJAGg");
	this.shape_187.setTransform(152.8006,70.7351,0.348,0.348);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#E3A672").s().p("AhIA+QAmgtAhgXQAJgIAkgWQAYgNAMgMIALgMIAGgMIADgHQAAADgCAFQgCAGgEAGQgBADgJALQgNAOgWAOQgeATgPAKQggAYgoApIgdAdg");
	this.shape_188.setTransform(151.339,64.5321,0.348,0.348);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#E3A672").s().p("AhtBzIALgMIAQgPQATgQAcgTIA6glIAdgUQAQgMAKgJQAJgKAGgPIAJgZIAPgzIgUBNQgGARgJAKQgJALgQALQgMAJgSANIg7AlQgbAPgUAQIgQAOIgWAXg");
	this.shape_189.setTransform(120.4026,86.8732,0.348,0.348);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#E3A672").s().p("AiaBGIAlgPIB7gsIBggoIAYgNIASgNIAOgKIAKgKIgJAKIgNAMIgSAOIgYAPIhfApIhEAXIg5ASIgzASg");
	this.shape_190.setTransform(137.6543,65.4804,0.348,0.348);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#E3A672").s().p("AhwCpQAAg0A+giIA0gbQAfgPAPgOQAngjALg3QAKg2gXgwQgCgFAFgDQAGgDACAFQAWAtgGA0QgGAzgfAnQgQAVgaAQQgRALggAPQglASgTAQQgbAZgBAfQAAAGgGAAQgGAAAAgGg");
	this.shape_191.setTransform(135.2581,101.3225,0.348,0.348);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#E3A672").s().p("ABlAGQgdgRgQgEQgSgFgiAIIgqALQgWACgSgEQgPAdgsADQgQABgqgIQgkgGgWAGQgGACgCgGQgBgGAGgCQAUgGAeAEIAxAIQAXADASgGQAWgIAHgRQADgGAFACQASAHAagFQAPgDAdgIQAqgKAkATIAoAVQAXALAVABQAuABAighQAEgEAEAEQAFAFgEAEQgfAegsAFIgLABQgiAAgngYg");
	this.shape_192.setTransform(142.5189,74.4543,0.348,0.348);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#E3A672").s().p("AgfB1QgTg+ARhAQAShBAugsQAFgEAEAEQAFAEgFAEQgsArgRA9QgQA9ASA7QACAFgHACIgCAAQgEAAgBgEg");
	this.shape_193.setTransform(157.1829,63.9374,0.348,0.348);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#E3A672").s().p("AgpC+QgGgpAeg4QAjhFAEgYQAEgVgEgfQgGgjgCgRQgFg9AYgbQAEgEAEAEQAEAFgEAEQgOAQgBAdQgBAOADAiIAHAvQADAbgEASQgEAYgjBDQgeA3AGAmQABAGgGACIgCABQgEAAgBgFg");
	this.shape_194.setTransform(154.7471,72.3454,0.348,0.348);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#E3A672").s().p("AC2DPQhDglgigaQgsgggZgmQgNgTgOggQgOgjgJgSQgWgugrgtQgcgdg5guQgFgDAEgFQAFgFAEAEQA9AxAgAiQApAtAVAtIAXA0QAMAeAOAUQAaAmAxAiQAbAUA+AiQAGADgDAFQgCAEgDAAIgEgBg");
	this.shape_195.setTransform(171.9302,71.0009,0.348,0.348);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#E3A672").s().p("AD3BYQgCgegWgaQgUgXgdgLQgcgKgiABQgYAAglAIQgfAFgUgKQgHgEgNgLIgVgQQgpgbg9gJQglgGhJAAQgGAAAAgGQAAgGAGAAQApAAAZABQAkACAdAGQA7ALApAgIAaAUQAPAJAQgBQAKgBAYgFQAVgEAMgBQA6gDAtAbQAyAgAFA4QABAGgHAAQgGAAgBgGg");
	this.shape_196.setTransform(181.7211,87.6823,0.348,0.348);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#E3A672").s().p("ACCDLQgfgegQgSQgYgcgOgaQgOgZgFgbQgCgNABgqQAAgTgCgLQgEgRgKgKQgMgMgigEIgugGQgagGgNgQQgZgeAKg+QABgGAGABQAGACgBAGQgGAjAIAZQAKAeAfAIQAKADAiAEQAcACAOAIQAVALAIAXQAFARgBAcQgCAmAFATQAGAZAQAaQAWAkA3A0QAEAEgEAFQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBgBAAAAg");
	this.shape_197.setTransform(171.1075,82.3528,0.348,0.348);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#E3A672").s().p("AgqBqQAAgGAGgBQAbgCANgeQALgXAAgeQgDgpABgVQABglARgWQADgFAGADQAFADgDAFQgSAYABAqIABBGQgEAegOAUQgQAYgcADIgBAAQgFAAAAgGg");
	this.shape_198.setTransform(138.0085,93.2399,0.348,0.348);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#E3A672").s().p("AhPAkQgGgBACgGQACgGAFABQAfAGAxgUQAvgTAWgZQAEgFAFAFQAEAEgEAFQgYAbgzAUQgmAQgdAAQgKAAgJgCg");
	this.shape_199.setTransform(139.0042,87.0912,0.348,0.348);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#E3A672").s().p("AikBoQgBgGAFgDQA8gXAggRQAxgaAfgfQAogzAXgWQApgoAtAKQAFABgBAGQgCAGgGgBQgtgKgtA1IgeAmQgSAVgQANQgeAbgtAXQgcANg4AWIgDABQgDAAgCgEg");
	this.shape_200.setTransform(131.5992,91.9635,0.348,0.348);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#E3A672").s().p("AgfByQgQgIgQgSIgQgRQgKgJgLgDQgKgDgJADQgMADgBAKQgBAGgGAAQgGAAAAgGQADgVAVgFQAUgEASAKQAIAFAJAJIAPARQANAOAIAEQANAGAHgJIAGgQQAKghAAghQgCgjAAgSQgBg4AmgMQAMgEAlADQAfACAQgLQAFgEADAFQADAGgFADQgRANgfgDQgmgCgNAEQgWAIgFAcQgCANADAkQAEBAgWAvQgFAOgNAAQgGAAgHgDg");
	this.shape_201.setTransform(147.0515,85.0299,0.348,0.348);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#E3A672").s().p("ABPDNQgNhAgeg1QgNgWgVgbIglgsQgtg1gHgsQgKg2AbgyQADgFAGADQAFAEgDAFQgOAagDAeQgEAeAKAcQAIAYASAZQALAPAZAbQBPBdAUBmQABAGgGACIgCABQgEAAgBgFg");
	this.shape_202.setTransform(164.0664,117.1863,0.348,0.348);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#E3A672").s().p("AhQC2QgGgCAAgGIAKhJQAGgxAEgRQAGgcASgIQAJgFASgBQAVgBAGgCQAagHARgUQAPgTADgcQAIg/gVgXQgEgFAEgEQAEgEAEAEQAVAXgCA7QgEA4gfAZQgWAQgaAEQgXgBgLAEQgQAEgGAUQgFAOgCAUIgEAiIgLBOQAAAFgEAAIgCAAg");
	this.shape_203.setTransform(158.4681,131.1821,0.348,0.348);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#E3A672").s().p("ABfA9QgNgggcgWQgdgVghgEQglgDgSgEQgggHgLgXQgCgFAFgDQAGgEACAGQAKAWAoAFIAfADQARACAMADQAfAKAZAVQAYAXAMAeQADAGgGABIgDABQgEAAgCgFg");
	this.shape_204.setTransform(172.6353,109.5355,0.348,0.348);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#E3A672").s().p("ABBBMQgFgDACgGQAGgMgNgMQgKgKgOgEIgdgFQgRgEgKgFQgUgMgNgYQgIgQgJgfQgBgGAGgCQAGgBABAFQAKAkAKAQQAQAZAcAGIAeAGQARAEAKAIQALAJAEALQAFANgFAMQgBADgDAAIgEgBg");
	this.shape_205.setTransform(166.0431,104.4944,0.348,0.348);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#E3A672").s().p("AgWBmQgJgWAFgbQAEgSANgdQASgpADgIQAKgegKgWQgCgGAFgDQAGgDACAGQAJAWgFAbQgEASgNAdQgSAngDAKQgJAeAJAWQADAGgGADIgDABQgDAAgCgEg");
	this.shape_206.setTransform(162.8315,102.0195,0.348,0.348);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#E3A672").s().p("AgPA/QgFgDADgFQAZg2gCg6QAAgGAHAAQAGAAAAAGQABA+gbA4QgBADgDAAIgEgBg");
	this.shape_207.setTransform(159.9347,101.1506,0.348,0.348);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#E3A672").s().p("AizCqQADg6AagwQAWgsAngbQAUgPAcgMIAxgUQBCgXAdgSQAygfAPgtQACgGAGACQAGABgCAGQgPAsguAhQgeAVg/AXQhDAZgbAQQgtAagaAxQgYAugDA3QgBAGgGAAQgGAAAAgGg");
	this.shape_208.setTransform(150.4684,100.4132,0.348,0.348);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#E3A672").s().p("AgsFeQgFgFAFgEQA1g4AVgjQAfgygCgxQgBgagIgiIgRg7Qgih6hEhRQgEgGAGgEQAjgagDg0QgCgrgZgoQgDgGAGgCQAFgDADAFQAcAtABAwQAAA0ghAcQApA0AZA3QATArAVBKIAPA8QAIAjgDAbQgEAwgiAyQgVAfgwAyQAAABgBAAQAAAAgBABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_209.setTransform(160.09,101.2126,0.348,0.348);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#E3A672").s().p("ABRHUQgOicgKhAQgRhtgahPQgMgkgUgxIglhUQgqhmAFhKQADgrAPgzQAJgfAXg7QADgFAGABQAGACgDAGQgaBDgKAkQgQA7ACAxQADAqAPAxQALAhAXA1QAvBoASBBQAXBRAOBpQAIA8ALCCQABAGgHAAQgGAAAAgGg");
	this.shape_210.setTransform(160.9698,125.2946,0.348,0.348);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#E3A672").s().p("AjxD4QgEgEAEgFQAZgdAmgdQAWgRAwggQApgcAVgPQAhgZAWgZQAbgeAOgcQANgaAHgpQAGgjALgSQAPgZAegBIAXgBQANgBAIgEQANgFALgNQAPgQASgpQACgGAGADQAFADgCAGQgRApgTAUQgYAagmAAIgVABQgMACgHAHQgKAIgGARQgHATgGApQgNA9g5A4QggAghZA8QhSA3gkAqQgBABAAAAQgBABAAAAQgBAAgBABQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_211.setTransform(151.4939,111.9841,0.348,0.348);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#E3A672").s().p("AAKDgQgBgYANgfQAQgjAHgSQARgwgbgtQgKgQgUgUIgegkQghgpgEgoQgGg1AggrQAEgFAFADQAGADgEAFQgTAZgFAfQgFAgALAdQALAdAnAsQAoAsALAcQAPAmgUAwQgGAQgOAfQgLAbABAWQAAAGgGAAQgHAAAAgGg");
	this.shape_212.setTransform(164.6822,71.406,0.348,0.348);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#E3A672").s().p("AgjGVQgTgyAGg1QAFg2AbgtQAJgQARgVQANgPADgLQAEgOgLgNQgHgIgiggIgsgqIgNgOQgGgJACgIQAEgNATgQQARgOAtgUQAXgJAJgGQASgKAJgMQAPgTgFgcQgCgQgOgfQgTgsAAg3QAAgrgBgLQgCgegMgVQgCgGAFgDQAFgDADAGQAMAWADAgQACAPAAAqQAAAnAFAVQADAMAHARIAMAcQATAxgVAfQgOAVgnASIgiAPQgUAJgNAJQgMAIgHAJQgJALAIAJIArApIAsArQATATABAQQAAAQgRAVQgWAagIAQQgZArgFAyQgEAzARAuQACAGgGACIgDAAQgEAAgBgEg");
	this.shape_213.setTransform(158.281,81.6144,0.348,0.348);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#E3A672").s().p("AkSHTQgFgDADgFIAqg4QAVggAOgcQAQgiAFgiQACgRAAgXIAAgnQgEiOBXgYIAzgMQAbgJAIgXQADgLACgRIADgcQAGgbAKgaQAVgxAlgmQAdgfA9giQAggRARgNQAYgUANgYQANgZACgdQABgdgKgbQgCgFAGgCQAGgCACAGQALAcgCAeQgBAegNAaQgMAbgZAVQgTAQggARQhCAlgdAgQgpArgTA5QgIAagEAeQgCATgCAHQgDAOgGAJQgMARgZAHIgtAKQg2AOgRA8QgHAaAAAmIABBAQgCA7gfA8QgUAogxA/QgCADgDAAIgEgBg");
	this.shape_214.setTransform(148.4477,74.2216,0.348,0.348);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#E3A672").s().p("ADSEJQhRg+gtg2QgVgYgDgfIgEgkQgDgVgEgOQgIgfgSgmQgMgYgWgpQgWgngNgRQgYgcgegJIgigHQgVgDgNgGQgdgMgVgXQgEgEAEgFQAEgEAEAEQAdAeAnAJIAmAIQAWAFANAJQAXAOAUAcQAJANAUAmQAWAoALAYQARAjAIAeQAFASAGA0QACATAJARQAHANAPAQQAzA2A/AxQAEAEgEAEQgCACgDAAIgEgCg");
	this.shape_215.setTransform(181.8797,113.2228,0.348,0.348);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#E3A672").s().p("Ah/FjQgGgBACgGQANgoAhgoQAVgaAtgoQAqgmAUgVIAcgjQARgWAOgLIANgJQAHgGgBgIQgCgGgLgKQgUgOgJgJQgUgSgQgtIgNgmQgJgWgLgOQgIgKgYgTQgXgQgIgPQgQgZgDg3QgEg5gMgYQgDgFAFgDQAGgEACAGQAKATAEAZQACANADAiQACAgAGASQAIAaATAPIATAOQALAIAGAHQAMAMAJASQAHANAJAYIANAmQAKAYANANQAJAJAUAOQAQANACAOQADAQgRAMQgQALgTAXIgfAmQgOAOgxAtQgrAngUAYQggAmgNAnQgBAFgFAAIgCgBg");
	this.shape_216.setTransform(170.3537,101.7057,0.348,0.348);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#E3A672").s().p("AjXGIQgGgCACgFQAphsBZhGQAcgUANgLQAYgTAJgUQAIgSADgbIAEguQAEg1ATgbQAMgQAWgNQALgGAegOQAdgNAQgNQAXgUACgYQABgLgGgPIgLgaQgHgTgCgVQgDgrASgnQASgnAjgYQAFgEADAGQAEAFgFADQgsAfgOA0QgNAyAXA1QAUAugYAhQgNAQgWANQgMAHgdANQgaAMgPAMQgUAPgIAWQgGARgDAaIgEAuQgEA0gTAZQgMAQgYARIgnAdQhQBFglBgQgCAFgEAAIgCgBg");
	this.shape_217.setTransform(168.5288,83.8711,0.348,0.348);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#E3A672").s().p("AIfPIQgggSg1gDQg8gBgdgEQhJgIgggpQgSgWgDghQAAgfgDgQQgDgPgJgVIgeg7QgQgjAAgcQABgcAMgUQAJgQAPgIIgjgRQgzgaghgZQgsgggZgnQgNgUgVg+QgTg2gXgYQgPgQgXgKQgagKgGgOQgHgPANgbIAbgyQAlhDARgnQAbg7AJg1QAVhngrhVQgWgrgigbQghgZgzgJQgdgGgPgGQgXgKgLgSQgKgRgDgXQgBgPABgcQABgggDgRQgFgbgQgQQgPgOgagNQgfgNgPgHQhVgtg2hUQg2hVgEhgQAAgHAGABQAGAAABAGQAAAXAFAaQATBjBGBMQAhAkApAaQAPAJAdANQAeAOAOAIQApAYAHAsQADAQgBAcIAAAsQACAbANARQAOARAeAHIAsALQAaAGARAJQAjATAbAjQAYAhANApQAdBVgbBkQgNAxgaA6QgPAfgnBHIgOAZQgJAQgCALQgDAQANAJIAaAMQAgAPAVAoQAJAQAIAXIAPApQATAzAfAhQAfAhAxAdQAeASA9AbQADACgBAFQAAAEgEABQgdAHgJAiQgIAdAKAeQAFAQAYAtQATAlAEAZQACAIABAcQABAXAEANQAKAbAcARQAnAZBWACQBYADAmAVQAGADgEAGQgCADgCAAIgEgBg");
	this.shape_218.setTransform(180.7326,82.9772,0.348,0.348);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#E3A672").s().p("AF1GhIgHjDQgChDgCgXQgFg0gMglQgLgkgogLIgfgKQgSgGgMgHQg7gdglg3IgTggQgMgTgMgKQgQgPgSgBQgTgCgQANQgOAMgJAEQgMAHgOgDQgagEgSgcQgIgNgLgnQgJghgOgQQgagdg1gcQgxgag2gRQgygRgkgCQgHgBABgGQgBgGAHAAQApADA7AUQBAAWAyAeQAxAdAXAeQAKANAMAtQAJAmAUAPQAUANAQgGQAGgDAJgHIANgLQAZgSAeAMQAbALAYAkIAnA7QAuAyBMAWQAnAMAOARQAJANAHATQADALAEAXQAHAjADAuIADBQIAHC0QgBAGgFAAQgHAAAAgGg");
	this.shape_219.setTransform(178.1692,70.7692,0.348,0.348);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#E3A672").s().p("AndHKQgGgDADgFIBjisIAXgoQANgXALgQQATgdAkgaQAXgQAKgLQAFgGAHgKIALgRQAQgWAYgNQAkgUBBgBQAlAABSADQBIgDAnghQAXgTAVgjIAhg9QAjg+A1gxQAXgVAhgXIAhgUQATgNALgLQAbgZAIglQAIgkgNgiQgCgGAGgCQAGgBACAFQANAigHAlQgHAmgYAbQgLAOgUANIgiAXQglAXgfAeQg0AygmBFQgYAugJANQgVAggYAQQgoAehFADIhzgCQhIAAgkAXQgNAJgNAQIgVAdQgJAMgQANIgdAVQgaAUgZApIiFDnQgCAEgDAAIgDgCg");
	this.shape_220.setTransform(140.5668,67.9779,0.348,0.348);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#E3A672").s().p("AFyEFIhihZIgugrQgbgZgWgNQgYgRgaAAIgXABQgOAAgKgCQgngHgpgWQgpgVgYgbQgkgvgWgVQg1g0hdgsQgtgSgWgNQgogWgEghQgBgGAGgBQAGgCABAGQADAUATAQQAMAKAaAMIBUAnQBNApA1A8IAbAgQAQAUAMAKQAhAdAwASQAYAIARADQAJACAQgBIAYAAQAjACAsAkQAjAeAyAuIBTBMQAEAEgEAFQgCACgDAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBAAAAgBg");
	this.shape_221.setTransform(175.0392,55.9695,0.348,0.348);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#E3A672").s().p("AAOAiQgQgKgKgQQgKgPgDgSIgCgQIALAMQAOAPAGAMQAJAMAIASIAHAOQgGgCgIgGg");
	this.shape_222.setTransform(162.1628,51.9519,0.348,0.348);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#E3A672").s().p("AgCgBIAYgfIAKgNIgIAPQgKARgLAPQgRAZgRATQAMgXARgYg");
	this.shape_223.setTransform(153.7842,52.2651,0.348,0.348);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#E3A672").s().p("AAtBFQgPgDgFgDQgSgGgIgNQgHgJgBgLIgBgTQAAgGgEgGQgCgFgHgHQgPgPgFgHQgIgMAAgIIAAgGIABgCIAAACIACAFQACAFAKAJIAZAQQAIAGAFAIQAHALAAALIAAASQABAIADAFQADAIAOALIAWAQg");
	this.shape_224.setTransform(163.2591,51.3951,0.348,0.348);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#E3A672").s().p("AgaAgQAJgTAMgQQANgTANgNIANgMIhDBfg");
	this.shape_225.setTransform(153.9321,56.2239,0.348,0.348);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#E3A672").s().p("AghAbIAggcIAhgcIAPgKIgKAPQgNASgRAOQgRAPgTAKIgRAIg");
	this.shape_226.setTransform(152.8184,53.1439,0.348,0.348);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#E3A672").s().p("AhSBmQAEgPALgMQAPgQAYgNIAYgNQANgIAKgIQANgJAHgLQAIgKAFgOIARgrIAQgoIgNAqIgPAsQgFANgHAMQgJANgNAJQgKAIgOAIIgZAMQgYAMgOAOQgNAMgEANIgDAJg");
	this.shape_227.setTransform(152.5487,50.7773,0.348,0.348);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#88795A").s().p("AgsBiQAGgoAdgdQARgTAEgGQAEgGAAgEIgBgMQgDgNAAgFQABgIADgJIACgKIABgGIgCgFIAFgYQAMACAGALQAEAIAAAJQABAHgCAIIgEAKQgCAJABAHQADARgBAGQgCALgIALQgFAHgJAHIgXATQgQAPgLATIgIAOIgBAAIgBgBg");
	this.shape_228.setTransform(227.0263,24.1374,0.348,0.348);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#789251").s().p("AgQAIQABgMAHgKQAGgJAGgDIAFgDIABgBIAHAPQgRAJgFATQgCAGAAAHIAAAEIgBABQgIgJAAgOg");
	this.shape_229.setTransform(208.9005,29.2901,0.348,0.348);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#88795A").s().p("AgJBqQAEgpgKghIgFgQQgEgOAAgHQgBgLAJgLIALgOQAEgEABgEIAAgHIgIgUIgDgLQgBgGACgEIADgJIAUAMIAAAEIADAIIAEAKQADAHABAHQACAHgDAJQgBAFgGAIIgOAQQgDAFgBAFQAAADACALQADAOABATQAAAagFAVIgGAPIgBABIgBgBg");
	this.shape_230.setTransform(208.2312,32.0988,0.348,0.348);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#789251").s().p("AgXAdQAKgdATgTIARgPIABABIggBEg");
	this.shape_231.setTransform(218.3933,23.069,0.348,0.348);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#789251").s().p("AgRgWIgCgWIAAgJIACAAIAlBkIgPAHQgRgkgFgog");
	this.shape_232.setTransform(209.9447,23.1821,0.348,0.348);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#789251").s().p("AgWgVIgFgZIgBgJIACAAQAUAsAPAZIAUAhIgOAJQgbglgKgog");
	this.shape_233.setTransform(213.0248,24.5133,0.348,0.348);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#789251").s().p("AgwA2QAAgIAEgMQAFgNANgTQASgZARgTQAQgQAMgKIALgJIAAAAIAAABIglAyIgQAaIgOAVQgMAXAAANIAAAGIACAIIgOAHQgGgMABgMg");
	this.shape_234.setTransform(215.8717,24.5916,0.348,0.348);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#789251").s().p("AgKA5QADgqAHgoIAHggIABAAQAGA1gIA+g");
	this.shape_235.setTransform(214.0164,24.3132,0.348,0.348);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#88795A").s().p("AgKA2IgBgGQABgGACgGIACgEIABgEIABgHIgDgQIgFgQQgCgNAAgEIABgJIACgIIAEgGIAGgGIAPASIgCAFIgBAHIACATQACANgBAHIgBAKIgDAKIgFAHIgFAEIgEAHQAAABgBABQAAAAAAABQAAAAAAABQAAAAAAABIABABQABABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAQgEgBgCgDg");
	this.shape_236.setTransform(214.3215,28.568,0.348,0.348);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#65843A").s().p("AhbAwQAMgcAQgXQgZAWgWAaIgDgCQAlg3A1gpIA1gqIgrA1QgVAagRAdIAAAAQAsgdA2gIIBDgJIg+AbQgaAKgYAUIgSATIgJAMIAEACIADAAIADAAQAKgBAHgCQAMgDAOgKIAHgEIgDAGIgBACQgDAHgGAEQgEADgGADIgGABIAGgDQAHgDAEgGQgJAHgKAEQgHACgLACIgHAAIgPgBIgIgBIAOgXIAEgFIATgXIADgCQgTAIgRALQgSAMgRAQIgmAlg");
	this.shape_237.setTransform(259.8185,7.1375,0.348,0.348);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#65843A").s().p("AhEBuIABgDIAah1IAKgsIgTCEQAlg7Avg4IAFgGQAIgfACggIADgnIALAlQANApAAAoQAAANgCAUQgCASgEAJQgEAVgIARIgFANIAEgNQAGgWACgRIADgbQABgQgBgQQgBgQgDgQIgEAJIgEAXQgLAtgWAoIgSgIIALghQgkAughAzIgUAgg");
	this.shape_238.setTransform(253.6147,4.9971,0.348,0.348);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#65843A").s().p("AhABkIAGgcQAEgQAIgYIAXguIAdgpQAPgRAOgNIAXgSIAIgGIhgCUIgjBHg");
	this.shape_239.setTransform(251.4046,6.1978,0.348,0.348);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#65843A").s().p("AgIgXIAAgCIABgCIABgJIgEAEQgFAEgLAWQgMAVgKAdIgFAUIACgUQAHgfAKgXIAIgRQAGgMAJgMIATgaIAAgBIgCBjIADgGQAYg9AEhDIARAAIAAAMQgBBCgHA5QgDAhgEATIABg0IAAgkQgFASgHATQgMAegNAXIgUAmg");
	this.shape_240.setTransform(248.2897,5.7019,0.348,0.348);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#65843A").s().p("AAVAKIAAgCIgCACIgDAFIgFAMIgCACIgJAnIgVghIgEgFQgJgLgJgEQgLgGgIADQgIABgHAIQgFAGgBAHQgBAGACAEIAEAGQgCgBgDgEQgDgEAAgHQABgIAEgIQAHgKAJgDQAGgDAHABQAFAAAIADQAMAEALAMIAHAHIADADIAAgEIAAgCIABgCIAJgYIAPgUQgIghgSgdIgcgsIAoAfQAgAZAUAhQAJAQAGANQAGANADAMQADAPABAIIABARIAAANIgFgdIgHgVQgDgJgIgOQgHgOgKgNIgPgSQAJAVADAZQACAOgBAQIgDBig");
	this.shape_241.setTransform(243.2637,6.5285,0.348,0.348);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#65843A").s().p("AgNAAIAAAEIAAABIgCABIgHABIgHAAIgGgCIgDgBIgCgBIAAgBIgBgBIAAgBIAAABIgBAAIgwA7IgBAAIAAAAIAAgNIADglIADgKQAGgSAIgMIAGgKIgEAKQgGAPgDAPIgBALIAAALIABACIABgCIAegrIAHACIABABIAAAAIAJAGIACAAIAAAAIABABIACAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAIABAAIADgCIADgDIAIgMIAWglIgGBEIgBAAIAAABIABAAIAAAAIABgBIAAgBIAzg6IABAAIABgBIACAjIABAFIAEAMQADAMAHAMIAOAUIgFgEIgMgNQgJgMgGgMIgGgRIgCgHIgBABIgEAGIAAAAIhBBWg");
	this.shape_242.setTransform(236.1519,7.3116,0.348,0.348);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#65843A").s().p("AgNA8IgGgIIgDgNQgCgGAAgKQgBgFACgNIADgKIgUAKIgXAPQAGgJALgMQAWgXAdgPIACgBIA4gaIgzAxQgGAEgGAJQgCAEgEAKQgEAKgBAEIgBAPIAAALIABAJIACAIg");
	this.shape_243.setTransform(232.1408,6.4763,0.348,0.348);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#65843A").s().p("AgWAhQAAgWAIgRQAIgTAPgOIAOgKIgjBUIgIAPQgCgHAAgKg");
	this.shape_244.setTransform(229.8785,6.8678,0.348,0.348);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#65843A").s().p("AAAA4IgGgMQgKgVACgZQADgaANgRIAJgMIAEgDIgEASIgFAqQgDAaAAAQIABATg");
	this.shape_245.setTransform(228.0455,6.1978,0.348,0.348);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#65843A").s().p("AgnA1QAIgiAQgbQAPgeAXgXIAVgTIgMAZIgeA4IgtBQQABgLADgRg");
	this.shape_246.setTransform(228.0774,5.4757,0.348,0.348);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#65843A").s().p("AAKAtQgKglgdgaIgIgIIgGgEIgBgBIAAABIAQBAIgXg1IgHgUIgFgQIABAAIACABIAVALIARAKIADADQAQANALARQgEgTgIgQQgDgHgGgIIgLgMIgZgaIAiAKQARAFAQANQAOAJAKAQQAIAKAHAQQAFAMABAMIABALQABAGgBAEIgBAPIgEANIAAgDIABgKIAAgPIgBgJIgDgKQgCgJgHgMQgHgOgIgJQgKgLgJgHQALASAEAWIACAMIABAZIgIA5g");
	this.shape_247.setTransform(223.3506,6.6938,0.348,0.348);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#65843A").s().p("AgnAqIAAgWIACgMIABgGIACgCIAAgDIAEgMQgjAbgdAVQAkglA0gyQAGgIAHgHIAMANQgQAQgJAUQgFALgDALIAAAAIAAAAIADgCQALgMAOgJQAXgQAcgKIAegKIgXAVQgaAagNAlIgEAUIgBAHIgBgHIACgVQADgTAHgOIAHgPQgLAHgLAIQgNAKgIAJIgqA6g");
	this.shape_248.setTransform(220.2727,6.3893,0.348,0.348);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#65843A").s().p("AABBiIgCgEIheh/IgCgCIgBgBIgCgDIgIgMIATB7IgoipIB1CSIAAAAQABABAAgBIAAgBIAAgCQAEgwgBgjIgBg8IAzB6IAAABIAAABIABgBIAAAAIAAgBIAzhpIAAACIACARIACAaIAAAZIgEAsIgEAUQAKgPANgNIARgPIgQARQgVAagLAdIgGgDQAFgaADgWQABgNAAgPIAAgUIgBgEIAAgBIgBABIgpBfIgfhHIgDAsIgGAvIAAACIgBABIAAAAg");
	this.shape_249.setTransform(46.5932,83.4042,0.348,0.348);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#65843A").s().p("AAxAgIAAgCIgBAAIAAgBIAAABIgXAjIgXhZIAAgBIgBAAIgdBoIhBh+IgYBMIAWhiIA5BhIACADIAAAAIABACIACADIABgEIAAgDIAiiGIAfB3IAAACIAAAAIAAABIgBABIgBABIAAABIAAgBIAgguIAEA5IAIgSIAbg2IACABIABAAIADADIAGAHQAEAIAAAKQAAAGgCAKIgFANIgJAVQgDALAAAIQAAASAKAGIAGADQgDAAgEgCQgEgDgEgFQgEgIAAgJQgBgLACgJIAHgXIAEgMIABgKIgCgHQgDgGgBAFIgvB7g");
	this.shape_250.setTransform(38.6753,81.4436,0.348,0.348);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#65843A").s().p("AALAkIgIgPQADAbACAYQgXg8gThOIgBgBIAUgGIACAEIAhBlIAPAqQgKgOgOgYg");
	this.shape_251.setTransform(18.4804,75.0049,0.348,0.348);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#65843A").s().p("AgyAhQgGgVgDgNIgDgXQgBgEgBgiIAcALIAIADIASAKIAUANQAQANAPAPQALALAHAKIAGAJIgfgXQgRgKgRgKIgqgWIgBAAIAAAAIAAAHIACA4IAEAhQgGgMgHgTg");
	this.shape_252.setTransform(41.8772,51.3383,0.348,0.348);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#65843A").s().p("AgYgTIAAgDIAAgDIADgdIAHAAIAEAiIABADIACgDIAAAAIAAABIgBABIAYgzIAJA8IAAACIADAyIgQgyIgBAAIAAgBIgBgCIgBAAIAAAAIAAABIgkBPQABgwACgpg");
	this.shape_253.setTransform(50.352,41.6107,0.348,0.348);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#65843A").s().p("AAHBlIgIgHIgMgLQgDgDgHgKIgHgKIgDASQgCAIgBADIgFAMIAAABIgBgCIgBgCQgHgHgEgIQgEgIgCgJIgBgOQAAgGABgGQACgJAFgHQADgGADgDIADgDIgCADQgDAFgCAFQgEAGAAAKIAAALIACAKQACAHAFAEIABAAIABgCIAAgFIAEgoIgBgHQAAgTAIgTIAihSIgVBxIAAAGQABASAHAOIAEAGIAAAAIAAAAIAHh9IALAyIAAACQALAuAXAoIASAgIgGgIIgRgVQgRgWgMgaIABA2IgBAEIAAAEIgCANIAAACIAAABg");
	this.shape_254.setTransform(46.4974,38.2086,0.348,0.348);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#65843A").s().p("AgJAAQAAgeAFggIAEgbIAFAbQAFAgAAAeQAAAygKAoQgJgoAAgyg");
	this.shape_255.setTransform(43.1128,37.1558,0.348,0.348);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#65843A").s().p("AAiBpIgGgnQgCgJgGgSQgEgQgGgOIgGgLIgKBDIgIAsIgTgEQAGggACggQADgxgHgzIgFgnIAVAgIAOAXIACgMIARg/IgIBBIgEAZQAIAQAFARIAJAgIAFAcIAAA2g");
	this.shape_256.setTransform(40.546,35.4417,0.348,0.348);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#65843A").s().p("AgpgJQAKAnACAmIABAcIgOgYQgSgjgIgmQgCgPgBgRIgBgQQgKgYgNgXIgDgEIABAAIgBgBIARgKIANAUIAAgFIAEgLIgCAMIgBAGIBUCHIABADIAAgBIAAgDIAOh3QABgBAIAHIAJAJQAJAKACANQAEAPgBAUIABAdQACAPADAJQAHATANAIIAIADIgJgCQgOgHgJgTQgFgLgCgOIgDgdQgBgTgEgPIgFgKIgCgCIgCgBQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAABABAAIgEAzIgCAlIgBBGgAg8gDQAFARAHARQgEgWgHgVIgGgTg");
	this.shape_257.setTransform(36.4217,35.3982,0.348,0.348);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#65843A").s().p("AATA5IgJgDQgKgGgJgJIgJgMIgHgOIgEgOIgBgPQABgMAEgMIAEgIIAEgGIAEgFIgCANIAAAIQAAAIACANIAIAXIAJAWQAHAMAFAFIAKALIAFAEg");
	this.shape_258.setTransform(29.8264,35.1285,0.348,0.348);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#65843A").s().p("AgkAfIgGgGIgIgNQgEgIAAgFIgBgHIABgIIADgGIAPgXIACAUIAEAjIACABIAIAHQAEADAFAAQADABAGgBQAEgBAEgDQAIgGAEgLQgGgUAAgXIAAgaIAVAeIAFAKIACALIAAALIgCAKIgEALQADAMAEAMIAKAXIAFAIIgGgHIgPgUIgIgRQgEAFgFADQgHAFgJACQgJADgIgCQgGgBgHgEIADAiIgLgng");
	this.shape_259.setTransform(32.1844,35.433,0.348,0.348);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#65843A").s().p("AgPBCIgBgBIgOAFIgnhcQgBAKgCAKQgCASgJATIgMAVIgGAGIAEgHQAGgIAFgOQAGgSADgSQACgYgHgZIAJgEIApBRQACgOAJgNIAbgwIgKA2QgCAOACARIADAMIARgjIAOguIAOAeIAGAQIAfhjIAMADQgLA3AKA7IAHAeIADALIgEgLQgGgNgEgRQgHgegCgeIgbBjIgSgEIAAgBIAAgBQACgRgCgQIgBgDIAAgBIAAABIgRAgIgTAcg");
	this.shape_260.setTransform(25.5282,34.3889,0.348,0.348);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#65843A").s().p("ADVAdIAAACIgKAUIgJANQgGAKgHAHIgKAKIAAgCIAAgCIgFg6IgiA2IgLgcIgBgBIAAAAIgBgCIgCAHIgOAiIgBACIgBgCIgSgiIgJgWIgDAHIgDAHIgSAbIgdg/IgKgaIgCgFIgCAGIgDAKQgCAKgBAOIAAAZIAEAfIg5gWIADAEIgMgHQgbgJgTgFQgugMgwgGIgcgEIAhgSIAJgDQAJgDAKgCIAKAAIgDgDIAAAAQgRgJgMgSIgbgpIAkAiIABABQASAQASAOIAFACIhJhXIACgDIADADIBZBhQAJACALAGIAOALIAGAHIAEAEIAWAHIAhAMIgBgMIABgOIAEgaIAKgdIASgkIAnBrIABABIAAAAIABgBIAAAAIAAAAIAAgBIACgEIADgIQAEgQAAgMIARgBQADAPAGASIAKAaIACAEIABgEIABAAIAQgpIAQApIgBgCIABADIAng5IADBKIABAAIALgMIAJgNQAGgJAKgWIABgBIAPBWgAihAKIAjAGIgHgFIgCAAQgIgCgJAAIgJABg");
	this.shape_261.setTransform(12.4158,32.9358,0.348,0.348);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#65843A").s().p("AAYAVQAFgQgBgTQgBgLgDgJIgBgDIAAAAIAAgBIgCADIgHAUIgBAGIAAABIAAADIgBAIIAEAoIgogtQgGgHgHgNIgHAlIgGgBIgGgCIgKgIIgGgFIgCAdIgCgkIgBgCQgGgPAFgOIAKgaIgDAoQABAGADAFIAEAFIAEAEIACABIADAAIAAgDIAAgFIADg5IASgBIAAABIABAAIAAABQAFAUAIAQIALATIACACIAAgCIACgHIAGgUIACgEIAEgHQAFgHAFgGIAJgLIAMAcIACAIIADAYIAAAIIATgcIABgCIAMA0IAFAPIgUgvIAAAAIgBACIgXAoIAAAAIAAAAIgcAzg");
	this.shape_262.setTransform(203.7361,6.9461,0.348,0.348);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#65843A").s().p("ACeBXIgBgBIgDgKIgEgOIAAgMIAAgGIAAgCIACgGIAAgBIgBABIgDADIgCABIgBAAIgKADIgKABIgLAAQgIAAgBgBIAGgMIAGgMIACgGIABgGIgBgDIAAgBIAAAAIAAABIgCACIAAABIgEADIgGAIQgPAQgQANIgOAMIgHAEIAAABIAAgBIgBgBIgfg+IgBgBIAAAAIgCAGIgFAKQgFALgHAIQgFAJgJAHQgJAIgJAFIgTAIIgMgbIAAAAIAAgCIgBgBIgDAFIgEAGIgGAGIgMALIgOgfIgNgsIAAgBIgBgCIAAgFIhlBbIBahfIASgSIAGAdIAOAnIAFALIABgBIABgBIADgEIADgGIAEgKIAHgYIAHAMIARAlIAAABIABgBQAGgDAIgHQAJgIAEgFIAJgQIAEgMIACgJIABgNIgDg9IA6B1IACAEIAAAAIACgBQAOgMAPgPIAPgQIAXgeIABAEIAEATQABAGAAAHIgBAMIAAAGIgEAMIgCADQAAAAABAAIADAAIAFgBIAEgBIAKgGIAegbIgBAEIgJARIgKAXIgCASIAAADIAAACQAAAGACAEIA1g3IAAA1IgEgrIgOASIgWAaIgRATIgBABIAAgCg");
	this.shape_263.setTransform(191.8641,5.9078,0.348,0.348);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#65843A").s().p("AANAcIgMgVIgFgJIgBgFIgCgEIgBgFIgCACIgCACIAAABIgCACQgEAHgLALQgOAPgPAKIgUANIgIAEIAHgFIASgQQAPgPAIgNQAHgIAFgKIAEgHIAPggIAHAQIAHASIALATIAMASIAGAHIAAAAIAGgMQAEgKAEgLQAFgXgCgUIAPgDIAAAAIACALQAMA4AFAnIgTg2QgDAOgFAKIgGANIgRAYg");
	this.shape_264.setTransform(171.1297,9.0082,0.348,0.348);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#65843A").s().p("AgUAnIgLgsIgIg9IAqAsIAlAwIgWgPIgagUIgCgCIgBAAIAAABIgBAAIAAADIABAMIABAgIgBAdIgJgbg");
	this.shape_265.setTransform(66.4313,12.5843,0.348,0.348);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#65843A").s().p("AgDgGIAAAAIAAAAIgBAAIgBAAIgBADQgHAJgEAKIgFAQIgCAGIgBgGQgCgJAAgJQAAgOAFgLIAMgVIAKgOIAAgBIAAAAIABABIADAHQADAFAIAWIAKAlQADANAAAKg");
	this.shape_266.setTransform(57.7895,13.9243,0.348,0.348);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#65843A").s().p("Ag4AlIAAgDIAAgYIAAAAIgQAIIgqATQgPAIgGALIgDAHIAAADIAAgDIACgIQADgMAQgLQAGgEAigTQASgKAEgFIACgCIAHgXIALggIAEAhQABALgEAJIgCACIgCAUIABAVIAAADIAAACIABAAIAAgBIABgCQAGgHAFgMIADgNIABgLIgBggIAqAzIAAAAIABAAIADgEIAGgLIAEgMIAEghIACgSIAAgCIAAgBIABgEIAKApIABAFIAEALIAIALIAIAHQACACACAAIACgCIASgcIAqAXIgngQIgOAdIgFAIIgBAAIgNgHQgGgDgFgFIgGgFIgBgDIgBAAIAAACIAAAEIAAAAIgBABIgGAPIgGAIIgLAOIgBACIgBAAIgBAAIgUgXIgDgEIAAAAIAAACIgDAIQgFAPgIAKIgHAHIgIAIIgSAMg");
	this.shape_267.setTransform(177.8382,7.7379,0.348,0.348);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#65843A").s().p("AghAZIgFgGIgOgWIgFgKIATANIACABIABAAIABgBIAAgDIgBABIADgFIAIgJIAKgHIAIgDIAIgDIAIgBIAIABQAGAAAJADIALAGQAFAEACADIAFAHIACAGIgFgEIgGgEIgIgDQgEgBgGAAIgLAAIgGABIgMAEQgCABgCACIgHAEIgGAEIgBABIgBABIAAAAIAAABIgBABIgIAXIgFgGg");
	this.shape_268.setTransform(50.3346,16.4214,0.348,0.348);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#65843A").s().p("AhYAtIgEg/IAMA3IABAHIAAABIAFgIIADgFIABgCIAQgeIAUgxIAGAoIAAABIAAgCIAOgSIAVgZIANAiIADAPIAAACIAAAAIABgBIADgDIAwhDIACBSQAIgDAFgHIADgFIgCAGQgEAKgMAEIgCAAIgIg0Ig5BbIgDgtIgCgLIgCgHIgBgDIAAAAIgoBCIgEgiIAAgDIAAAAIgCACIgBACIgIAMIgfAnIgCADIgBAAg");
	this.shape_269.setTransform(44.7486,16.9,0.348,0.348);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#65843A").s().p("AANAlQgQgJgMgRQgLgRgBgUIABgPIA2BTQgHgBgIgEg");
	this.shape_270.setTransform(38.8841,17.4046,0.348,0.348);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#65843A").s().p("AgCAkQgHgSAAgSQgBgQAGgTIAGgPIAEAPQAEASAAARQABAQgDATIgDAQIgHgPg");
	this.shape_271.setTransform(37.858,17.7005,0.348,0.348);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#65843A").s().p("AAAAtQgJgWgBgWQAAgYAKgUIAIgRIADB5QgFgGgGgKg");
	this.shape_272.setTransform(36.4305,17.657,0.348,0.348);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#65843A").s().p("AAIA/QgRgdgHgdQgIggADgfIADgaIApCpQgHgIgIgOg");
	this.shape_273.setTransform(34.676,17.8484,0.348,0.348);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#65843A").s().p("AgJgBQAIgkANglIAMgeIgCAgQgEAngIAjQgMA7gVAsQABgxANg5g");
	this.shape_274.setTransform(33.8289,18.179,0.348,0.348);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#65843A").s().p("AAQA+QAAgLgEgTIgRhEIgYg1IAGAFIAPAPQAJAKAJAQQAFAJADAIIAHATIADATIACATQAAAOgDARIgDAMIgGAQg");
	this.shape_275.setTransform(31.993,18.005,0.348,0.348);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#65843A").s().p("AABBOIgBgkIgBgqIgShuIAGAHIALAWQAGAQAGATIAFAVIAEAuIgBAWQgCASgFASIgHAYIgEAIg");
	this.shape_276.setTransform(31.758,18.3531,0.348,0.348);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#65843A").s().p("AAtBfIABgIQABgNgJgNQgEgHgHgIQgJgJgIgFIgNgLIACARIABAYIAAAJIgJgfQgGgTgIgSIgHgIIgIgOQgCgGgBgIIgKg/IAcA4IAKAYQAGAIAKAJIASARQAKAJAHAKQAHALADAJQAGAQgFAPQgBAEgCADIgCACg");
	this.shape_277.setTransform(29.8469,17.6396,0.348,0.348);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#65843A").s().p("AgbAeQAAgYACgRIAAgCIABgBIABgDQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAgBAAIgDACIgBADIgIAMQgKATgJAYIgEANIgDgNQgEgUAJgRQADgFADgCIACgDIgCADIgEAIQgCAIgBAHQAEgOAGgNIANgZIAng2IgJBMIgBA4IAAAAIAIgIIAVgWQARgSAMgXIABgBIALAFIAAABIgBACIgfBPIAJgqIgFAHQgJAOgMALIgPAOIgYAUg");
	this.shape_278.setTransform(25.0239,20.3195,0.348,0.348);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#65843A").s().p("AgtgoIAUAoIABABIAQAYIAAABIABABIABABIgBgaIAAgCIgCgPIgOg0IAhAiIgKgRIgWggIAfAUQAdASARAeQAHAMAEAMQADALACAMIABASIgDAZIABgLIgBgOQgBgJgDgIQgDgMgEgJQgFgMgIgJIgEgGIALAXIAPAoIg2gzIAAAAIAAAcIgIAwIgbgnIgCgDIgDgEIgLgXIgEgIIgDAHIgaBPg");
	this.shape_279.setTransform(19.6985,20.9981,0.348,0.348);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#65843A").s().p("AgeBiQACgQAEgPIALglQAHgWAIgUQALgaAQgaIgCACIgkAtIgPAZIgOAdQgNAfgFAfIgDAQIAAADIgVgBIACgpIAAgCIABgJQAAgBAAAAQAAAAAAAAQAAAAAAABQAAAAgBABIgJAiIgOgDIAYjYIgGCJIAIglQAFgHAFgCQAEADAGABIgBA2IAAgBQAFgNAJgRIAlg0IAUgWIAWgTIAXgQIAqgdIggAoQgjAugXAuIgSAnIgVBCIgJApg");
	this.shape_280.setTransform(16.7663,20.1019,0.348,0.348);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#65843A").s().p("AAzBdQgLgngSgmQgOgegRgdQAPA5AFA5IgNADIgBgBQgKgkgDghQgMgzgTgzIgVg6IAnAwIARAWIAFgYIAEgOIgDAOIgDAdIAFAIQAaAoASApIAMAdIADh8IAGgBIAIBBIgHgdIAFCMIAAACIACBDg");
	this.shape_281.setTransform(10.1014,23.3822,0.348,0.348);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#65843A").s().p("AgGBBIgFgJIgOgMIgHgEQAFAQACAQQADATgBAMIAAAKIgBgKIgFgeIgGgVIgIgTQgTgKgLgOQgIgIgCgJQgDgKAEgLIAEgLIAIAJQARAVALAXIAJAFIASAKIAKAHIAAgeIATAJIAFACIABAAIADAAIABAAIACgkQADgiALggIALglIADAmQAFA5AMBQQAFAAAEgEQADgCABgFIAAgGIABABQABADgBADQAAAEgDAEQgFAFgHAAIgBAAIAAgBQgOgwgJguIgCAWIgBAwIAAACIAAABQAAABgBAAIgRACIgLgBIAAAaIABADQAGAQgJAOIgSAeg");
	this.shape_282.setTransform(6.0534,26.6015,0.348,0.348);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#65843A").s().p("AAIAdQgEgBgDgDQgLgJAAgQQAAgPAKgJIAHgEIADgBIAAAxIABAKIgDgBg");
	this.shape_283.setTransform(124.1882,55.6018,0.348,0.348);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#65843A").s().p("AAMBAIgJgGIgIgJIgIgNIgGgPQgDgHgBgKIAAgRQABgGADgKIAGgNIAHgLIAGgIIAGgFIAFgDIgJAVQgDAIgBAPIgBAOIABANIACAOIACAOQAEANAFAIIAFAIIAIALg");
	this.shape_284.setTransform(121.9999,55.1928,0.348,0.348);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#65843A").s().p("AASBIIgGgFIgJgHQgJgKgGgMQgFgJgCgHIgEgRQgBgMABgFIADgRQADgPAIgLIAGgIIAKgLIgHAXQgDAOAAALIABAcIAFAdQAEAOAFAJIAMAVg");
	this.shape_285.setTransform(120.5512,54.7752,0.348,0.348);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#65843A").s().p("AANBCQgGgFgFgHQgFgJgFgNIgFgNQgCgIgBgIIAAgPIABgOQACgMAFgMIAHgPIADgEIgBAVIAEA+IAHAjIAEAQIABAFg");
	this.shape_286.setTransform(119.1213,54.8709,0.348,0.348);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#65843A").s().p("AgKA2IgFgIQgGgLgCgMIgBgPIACgPIAFgOIAHgOQAGgJAJgJIAOgIIAGgCIgEAEIgIAOQgFAHgEAMIgGAYIgDAYQgBAMABAJIADAVg");
	this.shape_287.setTransform(119.6267,56.2631,0.348,0.348);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#65843A").s().p("AggA7IgCgGIgBgLQAAgKACgPIAEgPIAGgPIAJgNIAKgNQAHgIAMgHIAIgGIANgEIgOARIgOAUIgHALIgSAlIgOAsg");
	this.shape_288.setTransform(118.7396,55.4104,0.348,0.348);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#65843A").s().p("AgsA6QAAgFADgMQAGgdARgYQARgZAZgPIAPgKIAGgCIhZCBg");
	this.shape_289.setTransform(115.3132,57.168,0.348,0.348);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#65843A").s().p("AgGA1IgFgHQgHgKgCgMQgCgJAAgGIABgOIAEgPQACgGAFgGQAHgMAIgGIAHgFIAMgFIgEAEIgEAGIgEAHQgEAGgEAMIgFAYIgCAXQAAAOACAGIABAIIACALg");
	this.shape_290.setTransform(115.7047,57.3507,0.348,0.348);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#65843A").s().p("AgLAnQgFgWAEgTQADgTAMgUIAMgNIgIA3IgHAlIgFARIgGgQg");
	this.shape_291.setTransform(113.9569,57.8727,0.348,0.348);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#65843A").s().p("AAAA3IgGgMQgKgUADgYQACgYAOgUIAJgKIADgEIgBAFIgLBgIgBASg");
	this.shape_292.setTransform(112.221,58.4209,0.348,0.348);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#65843A").s().p("AAEA4IgIgLQgFgIgEgMIgCgNIgBgNIADgOIAEgMQAFgLAGgIIAFgGIAKgHIgLAlIgDAhIACAeIADATg");
	this.shape_293.setTransform(110.197,59.204,0.348,0.348);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#65843A").s().p("AgGAzQgCgDgEgJQgEgJgBgLIgBgLQAAgHACgFIADgNIAGgKQAGgKAFgGIALgJIAEgCIgGARQgGAPgEAWQgEAWgBAPIgBASg");
	this.shape_294.setTransform(109.2979,59.9871,0.348,0.348);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#65843A").s().p("AAFA0IgIgLQgFgHgDgLIgCgMIgBgMIACgNIAEgLQAEgJAFgIIAKgKIAEgCIgIAiIgBAUIgBAUIADAjg");
	this.shape_295.setTransform(107.5955,61.3183,0.348,0.348);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#65843A").s().p("AAHA6IgGgEIgGgGQgEgFgDgFIgGgLQgDgKAAgFQgCgHABgIQABgIACgHIAGgOIAJgLIAHgIQADgCAFgCIAHgDIAFgCIgEAFIgIAMIgFAIIgEAKIgCALIgBANIAAAXIABALIADAJIADAIIAHALg");
	this.shape_296.setTransform(105.9875,61.5532,0.348,0.348);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#65843A").s().p("AgeAyQACgcAMgcQAMgdASgVIARgSIgIAXIgVA0IgWA0IgKAWQgBgKABgPg");
	this.shape_297.setTransform(105.0217,62.3972,0.348,0.348);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#65843A").s().p("AAGBGIgGgIQgIgKgGgQIgEgSQgCgGABgMQAAgLABgHIAGgRQAFgQAIgKIAHgJIAHgGIAFgDIgGANIgEAJQgDAJgEARIgCAPIgBAQIACAfQACAPAEALIAJAYg");
	this.shape_298.setTransform(103.332,62.6147,0.348,0.348);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#65843A").s().p("AgoAsQAFgeAQgaQARgbAXgQIAQgJIAGgDIgtBCQgSAcgKAUIgMAVg");
	this.shape_299.setTransform(102.6098,62.606,0.348,0.348);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#65843A").s().p("AgJgCQAEgLAIgJIAIgHIACALQABAMgEAJQgGARgNAKQgFgRAFgPg");
	this.shape_300.setTransform(98.1431,65.721,0.348,0.348);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#65843A").s().p("AgEA1QgGgZAAgcQACgcAIgZIAJgVIABAXQABAdgBAWQgBAbgEAaIgDAWQgCgIgEgOg");
	this.shape_301.setTransform(95.9617,65.1728,0.348,0.348);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#65843A").s().p("AgZBiIgFgNIgBgDIgDgBIgDgBIgCgDIgBgBIgLAnIAHgtIABgBIgBgCIAAgDIADgCIACAAIAAABIgEAGIAAAAIACADIACgCIACAAIgBAAIgBAEQADABACgCIABAAQgDgNgBgRIAAgdIALAZQAIAQgBALIAAACIABAEIADALIABABIACACIABgDIAJgkIACgYQgCgZACgaIAOhhIAHBsQACAUgDAUIADAPQADgXgBgXIAAAAIAMgCQAKBGAFAtIgOg5QgCAOgDAOIgGAYIgKgXIgFgKIgEAPIgSAsg");
	this.shape_302.setTransform(90.7678,65.1641,0.348,0.348);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#65843A").s().p("Ag4AzIgJgCIgHgCIAHgBIAUgFQAMgDAPgHIAdgRIAbgVQAMgLAHgKIAQgXIgBAIIgGAUQgEAMgLAPQgHAJgGAFIgQANQgKAHgHADIgRAHQgQAEgQAAg");
	this.shape_303.setTransform(84.9817,69.2014,0.348,0.348);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#65843A").s().p("AgIgEQAIgOAMgMIAMgKIgCAPQgFASgIAMQgMAXgUAMQACgXANgVg");
	this.shape_304.setTransform(83.2676,69.5059,0.348,0.348);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#65843A").s().p("AgIgEQAIgQANgOIALgLIgCAQQgEATgJAPQgNAZgTAPQABgZAOgYg");
	this.shape_305.setTransform(81.1968,70.7414,0.348,0.348);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#65843A").s().p("AgRAeQgCgTAHgQQAFgRANgMIAMgKIgDAPQgEARgFANQgFAOgHARIgHANQgCgGgCgJg");
	this.shape_306.setTransform(78.3429,71.4462,0.348,0.348);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#65843A").s().p("AAdgxIACASQgCAXgMATQgLATgSAMIgNAHIgEABg");
	this.shape_307.setTransform(75.1409,73.0037,0.348,0.348);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#65843A").s().p("AgDA6IAAgBIgMgZIgDgJIgHAUIgFAOIgDgNQgDgMAFgLIAIgsIAAgCIABgCIATADQgBAQADANIAAABIAAABQAAABAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIAHgOIAcg0IgPA6IgKAaIgIAVIgDAJIgBACIgBABg");
	this.shape_308.setTransform(72.1456,73.6562,0.348,0.348);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#65843A").s().p("AABAYQgJgJgBgNQgCgMAHgLIAGgIIADAKIAFATQABALgBAJIAAAKQgEgBgFgFg");
	this.shape_309.setTransform(64.9883,77.5543,0.348,0.348);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#65843A").s().p("AgWBeIgCgJQgDgPAAgRQgBgZAGgYQAGgfAQgbIAYgsIgMBUIgJA0IgDASIgCAIIAEgCIAbgTIgBAiIgBAJIgFgdIgIAIIgBACIgkAggAgTA1IgDAgIAAAHIAJhGQgEAPgCAQg");
	this.shape_310.setTransform(62.7135,74.5263,0.348,0.348);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#65843A").s().p("AgGA4QgFgeACgaQABgdAIgbIAIgXIACAYQACAfgCAZQgBAZgFAeIgEAYQgDgJgDgPg");
	this.shape_311.setTransform(59.6291,78.2416,0.348,0.348);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#65843A").s().p("AAAAsQgIgUgCgXQAAgWAGgVIAGgRIAEASQADAZABAQQABAXgCATIgCASQgEgGgDgKg");
	this.shape_312.setTransform(57.671,78.9464,0.348,0.348);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#65843A").s().p("AhCBXQAHgVADgVQAPhEgKhLIAUgEQADASAFARIANAsIAIASQADAFAGACQAHAAAHgDQAHgDAEgIIAEgHIADgLIAGgbIABABIABAAIALARIAJAUQAEAMAAAMIgBAQIgBAGIAAgGIgBgQQgDgNgFgJIgCgFIgFgGIgCgCIAAAAIgBALQAAADgFALQgGAKgJAGQgMAIgMAAQgGAAgHgEQgHgEgEgGQgCgDgIgSIgDgIQgEAkgMAjQgHAVgJAVIgHANg");
	this.shape_313.setTransform(53.2407,80.7823,0.348,0.348);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#65843A").s().p("AggAlQgGgyAQguIAKgZIAEgJIgDAJIgFAbIgBABIACgEQAKgdAOgbIASAIIgBACIAAABQgKAegBAeQAAAYAFAaIAFATIAFAOIAFALIgHgKQgEgGgDgHIgIgTQgKgXgCgdIAAgCQgMApgEAqIgHBRg");
	this.shape_314.setTransform(33.6866,78.3722,0.348,0.348);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#65843A").s().p("AAJA5IgEgEIgFgHQgGgHgEgMQgDgIgBgFIgBgOIACgOIAEgNQAEgLAGgIIAGgHIAJgHIgEALIgGAbIgBALIABAiQABALACAIIABAIIAEALg");
	this.shape_315.setTransform(31.0707,77.5717,0.348,0.348);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#65843A").s().p("AgMA4IgFgJQgEgJgCgPIAAgOIACgPQABgJAEgGIAGgNQAHgKAJgJIAHgGIALgGIgDAFIgHANIgJAVIgKAxIAAArg");
	this.shape_316.setTransform(30.3833,77.3454,0.348,0.348);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#65843A").s().p("AgmAsQgDg/AWg7IAFgLIADgSIACAGIAFgKIAFgLIgHAeIAtCgIgqheIAAAAIgBgCIgCgCIAAAEIABABIAAABIgdCTg");
	this.shape_317.setTransform(27.7232,76.2491,0.348,0.348);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#65843A").s().p("AglAvIADBKQgRhmgRiOIAAgBIATgCIASBiIAVB3IAAACIACgBIABgBIALgKIAHADIgBABIABACIAFAGIABAAIAAABIACAAIACACIADABIADAAIAEgDQAGgGADgMQAFgOADgGQAFgLAJgDIAHgDIgCAHQgGAYAEAaIACANIABAEIgCgEIgDgNQgGgUACgWIgDAGIgGAUQgDAOgIAJIgGAFQgFACgFAAQgJgBgHgHIAAAAIAAAAIgBAAIAAgBIAAgBIAAgBIgBACIgaAag");
	this.shape_318.setTransform(22.8396,73.2995,0.348,0.348);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#65843A").s().p("AAABIIgJgCIgHgEQgFgGgDgGIgPgqIgDAKQgDAKgDAFIACgQQABgVgFgUIgLgzIAZAwQAEAIALAXIAQAlIAEAFIABACIAAAAIACgBQACAAADgEIAEgGIAFgJIAEghIADACIAnBEIgagdIgEgDIgCgBIgBAAIABACIAAAFIgDAHIgFAJQgDAFgFAEQgHAEgHAAIAAAAg");
	this.shape_319.setTransform(15.7483,73.8659,0.348,0.348);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#65843A").s().p("AALBFQgIgSgEgSIAAABIAABEIgThBQgGgSgBgTQgJAdABAeQAAAQACAMIACAKIgDgJQgEgNgDgPQgDgZADgVQACgdANgcIAQglIgCApIAAACIAThEIABBDIAAADQABAdAGAdQAFggAKghIANgoIgIApQgIA2gBA1IAAAog");
	this.shape_320.setTransform(18.6956,57.8205,0.348,0.348);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#65843A").s().p("AgHB5IgJgcQgFgUgCgXIAAgaQgBgIACgSQACgPADgNIAGgZQAIgZAHgPIAUgjIgTBPIgKBlIAAAqIACAng");
	this.shape_321.setTransform(21.0617,55.2973,0.348,0.348);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#65843A").s().p("AgJACQgGgZgBgcIABgXIAJAVQAKAaAGAaQAJAogDAkQgQgggJgpg");
	this.shape_322.setTransform(5.9989,63.4587,0.348,0.348);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#65843A").s().p("AgFCGIgIgfQgEgagCgVIAAg5IAEgeIAFgcQAHgbAGgSQAGgSAGgLIAFgLIgHArQgDAPgEAeIgDAbIgECug");
	this.shape_323.setTransform(6.273,56.846,0.348,0.348);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#65843A").s().p("AANgaIAAABIgMAQIgDAGIgGAFIgMAMIgUguIgEBcIgEAAQABgGgCgHIgCgFQgDgHgEgEIgHgGIgCgBIACABIAIAFQAFAFADAFIgGiFIARgBQAEAWAGAVIAMAfIACABIAAgBIAAAAIABgBIAJgOQAIgPAEgRIAEgQIAVACIgBBVIAEgGIAghQIgGCHIgEhPIgIAaIAAAAIgiBfg");
	this.shape_324.setTransform(54.5023,15.4817,0.348,0.348);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#65843A").s().p("AAVBMIgGgUIgEgLQgDgMgBgNIgDgXIgMAnIgBAAIAAAAIgVgLIgEgCIgEgFIgJgJIgBADIgEAJIgFAKIgIALIgJAIIgOgeIgKgfIgFgUIgNBUIAKiMIAHAcQADAUAIAYIAOAiIABACIACAEIABgCIACgCIADgGIACgHQADgMgDgMIgBgGIgBgBIAQgFIACAGQAHARANAJIAEAEIAEABIAAgBIAjh2IAUAGIgLAyQgDAZACAYIACAXIAGAiIACAFIAAAAIACgFIAKgaQAJgVALgSQACgFAEgEIAagaIgRAhIgEAJIAAABQAAAFAEADQADADAFgBIACAAIADgBIAIgMIACABIABABIAAAAIABAAIAGAYIADAXQABAOAAAWIgBAXIgCAIIABgIQABgIgBgPQAAgQgEgUIgFgWIgDgIIgBgEIgCAEIgCACIgBAAIAAAAIgGACQgKACgGgGIgEgEIgKAYIgYBQg");
	this.shape_325.setTransform(211.0497,5.8759,0.348,0.348);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#65843A").s().p("AhDA5IgHgOIgGgPIgCgGIgCgIQgFgYAEgZIAJAAIAAABIgBADQgBAWAHAUQAEANAGAMIAIAMIACACIABgBIAAgBIACgFQAEgIADgMQAFgWgDgUIAUgEIAGASQAFAMAIAMIAGAKIABABIAAAAIABgBIACgDIAGgQQAGgPAAgOIAEg8IANA8IAAAAIAMA3IAAABIABAKIAGgGIAHgJIAIgPIAEgMQAAAAAAAAQAAAAABAAQAAAAAAAAQAAABABAAIABAEIAIAaIgIgTIgCgCQAAgBAAAAQAAAAAAABQgBAAAAAAQAAABAAABIgGASQgDAGgGAIQgFAIgKAKIgOgwIgGAPIgQAbIgVgVIgHgJIgEgHIgBAEQgDALgGAMIgSAdIgSgXg");
	this.shape_326.setTransform(62.6634,13.6371,0.348,0.348);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#65843A").s().p("AgugZQgKAHgKAIQgVASgOAXIgJgFQAWgpAkgeIAUgOIAHgFIgGAGIgTAQIgFAFQARgMAUgJIAbgLIg5BLIAEgBIAXgFIAXgEQATgBAKABIALABIAMABIAwALQABAAgBABIgnAQIgFAJIgDAEIgBABIgKAIIgDACIAWgBIAigCIAcgCIhqAOIgBABIAAgBIAAAAIgFgBIAagQIACgCQgpAVgvACIgzADICBgyIABAAIAAAAIABgBIgDAAQgOAAgMABIgVADIgVAFIgUAIQgHADgMAHIgvAcg");
	this.shape_327.setTransform(10.2058,72.064,0.348,0.348);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#65843A").s().p("AhaClIAAgBIAEgFIANgUIARgVIAQgQQAPgNAUgLQAQgJARgGQg3gDg4AJIgjAFIAcgWQAOgLAQgJQAUgJAQgFIAUgFIhmghIgCgBIgBgBIAAAAIAkgOIAigIIAYgDIADAAIg+gfIAtADQAzAEAyAQIgCgCQgKgLgPgMQgWgSgdgSQgWgNgcgMIgYgJIgXgHIgXgHIAYAAQAkAAAjAPIAZAPQAIAGAKAIIADADQAUAMASAOQAPALAMAMQAPAOALAMIAVAYIgdgMQgmgNgngHIBHAjIg+gKQgYgDgUABIgWADIgLACIAAAAIBqAjIgFATIglgBQgQABgTAFQgMADgNAGQBBgEBAAMIgBAPIgCAAQgqAAgoAUQgUALgOALIgUATIgIAKIAAABIABAAIAEgCICthUIiZBTIgqAWIgMAFgAg1iWQAXAIAeAQIAEADIgMgJQgIgFgRgHQgQgHgQgDIAMAEg");
	this.shape_328.setTransform(4.9417,68.3487,0.348,0.348);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#65843A").s().p("ABJB6QgSghgMgTQg1hZhOhKIgxgvIBrBBIAvApIAnApIAAgFIACgpIABgDIA1AxIAAgBIgBgEIAAgBIAAgBIgJgiQgMglgPgeIAKgFIAHAOQANAaAKAcIAKAdIANA+QAAABgBgBIgBAAIgJgJIAAAIIAAAMIgBgMIgCgKIgvgrIgCAAIAAABIABABQABAYAIAVIAQAZIAJAQIgRAMQgRgUgJgYIgVgdIgrgvIgfgdQArA2AhA/QAPAcALAaIAIAUg");
	this.shape_329.setTransform(6.7254,60.6918,0.348,0.348);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#65843A").s().p("AAcBtIgFgcIgDgjQgBgXACgSIADgaIgEAIQgLAZgGAUIgNBEIgyhHIAAgBIgBgCIgKgPIALBTIggiCIBBBTIACADIAEADIAAgCIAGgZQAHgZAKgWQASgmAaggIAvg3IgfBBQgUAtgHArQgDARgBAWQgBAZABAKIACAcIAEAUIADASg");
	this.shape_330.setTransform(14.3649,57.8727,0.348,0.348);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#65843A").s().p("Ag/gYIAGASIAFAGIABABIAAgCIACgJIAEgGIAMgTIALgLIATAcIAHAIIAIAHIACACIABAAIAAAAIACgCIAFgHIAEgEIALgOIAMAKIAQAQIgSgJIgCgBIgCgBIgEgBIgPAbIgFAIIAAAAIgBAAIgBAAIgCgCIgNgIQgGgDgDgEIgRgQIAAgBIgBABIgJAMIgHALIgOAkg");
	this.shape_331.setTransform(152.2139,11.8621,0.348,0.348);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#65843A").s().p("AgDAjIgCgCIgPgUIgLgNIAAAAIgBgBIAAAAIAAABIgCATIgEAOIgFALIgLARIgJgaIgEgWQgBgNACgNQAAgIADgIIABgGIAAAGIAAAQQABAPACAKIABADIABACIABAFIADAFIABgBIACgGIAAgFIAAgDIABgJIgDgQIgYg5IAMAJIAAABIABABIA7A7IARAYIAAACIAAAAIABgBIAAAAIABgHQACgFAAgFIAAgEIAAgNIgBgJIgIgnIADADIAnAzIAbAkIgsgrIgCgBIgBAAIABACIADAJIAAAJIgCARIgBAIQgCAJgEAJIgHATg");
	this.shape_332.setTransform(146.6366,11.5402,0.348,0.348);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#65843A").s().p("AgGAsQgOgRgHgWIgDgJIAAgCIABgEIAAgCIgEADIgBACIAAABIgCACIggA1IA0h8IABAuIAEAUIADAIQAGAQALARIABABIABABIACgGQADgJAHgLQAFgIAIgIIAEgEIARgNIAKAZIACAQQAAAKgDAQQgDAJgEAGIgDAFIACgGIADgPQABgNgCgLQgBgGgDgJIgCgDIgCgCIgCACIgBABIgCACQgEAFgFAKIgHARIgCAGIgDAkg");
	this.shape_333.setTransform(141.8087,11.1139,0.348,0.348);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#65843A").s().p("Ag6AdIgGg2IAKAXIABACIABABIADgLIADgGIAJgNIAPgSIAOAWIACACIADAFIARARIABgBIAAAAIABgBIAVgYIAMAJIACACIAOANIgUgKIgCAAIgEgCIgBAFIgTAeIgBABIAAAAIgBgBIgCgBIgNgIIgKgIIgKgIIgGgIIAAAAIgBAAIAAABIgPAXIgPAkIgDgSg");
	this.shape_334.setTransform(137.5702,12.6539,0.348,0.348);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#65843A").s().p("AgFAhIgPgUIgLgNIAAAAIgBgBIAAABIAAAAIgCATIgEAOIgFALIgLARIgJgaIgDgSIgBgEQgBgQACgKIADgQIABgGIAAAXIADAYIACAFIABAFQACAEACABIAAgBIACgGIABgIIgBgPIgCgJIgFgOIgTgsIAKAJIACABIAAAAIABACIAvAtIAMANIAPAWIACACIAAABIAAABIABgBIAAAAIABgCIADgWIAAgCIgCgRIgIgnIADADIBCBXIgmgkIgGgGIgCgCIgBAAIABACIADAJIgBAUIgIAgIgHATg");
	this.shape_335.setTransform(131.9842,12.3233,0.348,0.348);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#65843A").s().p("AAJA+IgIgJIgDgEIgDgDIgBgCQgOgSgHgVIgCgJIAAgGIAAgCIAAAAIgCACIgCABIgBACIgBABIgBACIggA1IA0h8IABAvQAAAHAEALIACAKQAIASAKAOIABABIAAABIABAAIABgGQAEgLAHgJQAFgIAHgIIAGgEIAFgFIAKgIIAHAOIADALIADAQQAAAOgEAMIgFAPIgEAFIACgGQACgIABgHQABgNgCgMIgEgOIgEgFIgCADIgBAAIgBAAIgBACQgGAIgDAGQgFAKgCAIIgCAHIgBAKIgCAag");
	this.shape_336.setTransform(121.4648,11.5054,0.348,0.348);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#65843A").s().p("AgFAuIgBgBQgOgTgHgVIgDgJIAAgBIABgFIAAgCIgBAAIgBABIgDAEIAAABIgBACIghA1IA0h8IABAuIAEAUIADAJQAHARAKAPIACABIAAABIACgFQADgLAHgKIANgQIACgBIAIgIIALgIIAGAOQADAFABAGQACAHAAAJQAAAOgDAMQgDAIgEAHIgCAFIABgFQADgJAAgHQABgNgCgLQgBgHgDgHIgCgEIgCgCIgCADIgDACQgEAFgFAKIgHARIgDARIgCAZg");
	this.shape_337.setTransform(127.1563,11.897,0.348,0.348);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#65843A").s().p("AgJAoQgGgVAGgTIABgBQADgYAIgZIAJgXIABAZQAAAigCAVIgKBCg");
	this.shape_338.setTransform(77.7881,12.828,0.348,0.348);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#65843A").s().p("AgLBKIgEgRQgHgdAGgfQAGgfAPgZIALgPIAEgFIgFAYIgMA3IgIA4IgDAYg");
	this.shape_339.setTransform(76.8634,15.9255,0.348,0.348);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#65843A").s().p("AgQBGQgDgKgBgHQgCgQAAgLIABgQIACgPIAGgQIAGgOQAHgOAGgIQAHgIAGgFIAFgFIgIAXQgJAYgHAcQgFAXgFAeIgDAWg");
	this.shape_340.setTransform(75.6456,14.69,0.348,0.348);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#65843A").s().p("AgQA3QgCgEgCgKQgFgXAIgYQAHgYARgSIAQgMIgHASQgHAQgIAaQgIAcgDANIgEAUg");
	this.shape_341.setTransform(74.6147,13.1238,0.348,0.348);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#65843A").s().p("AAUA4QgTgWgNgbQgNgYgHggIgEgYIANAVQAOAVAOAeQANAXALAcIAIAYIgRgSg");
	this.shape_342.setTransform(67.9801,12.9672,0.348,0.348);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#65843A").s().p("AATBYQgNgsgJgrQgLgsgIgrIgHglIARAiQASArAKArQALAsACAtIAAAmIgKgkg");
	this.shape_343.setTransform(68.6703,12.2972,0.348,0.348);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#65843A").s().p("AgxhrIAXAbQAaAiASAnQARAkAJArQAFAWABANg");
	this.shape_344.setTransform(69.6681,12.1667,0.348,0.348);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#65843A").s().p("AABARQgCgHAAADIAAAFIgBgGQgBgDgCAHIgKBOIgDhVIADhoQADgIAGAAIABAAQAFAAADAEIAMBxIAEBag");
	this.shape_345.setTransform(72.1217,11.6098,0.348,0.348);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#65843A").s().p("AgdBiQgCgQABgHIAAgNIACgQQAAgIADgKIAEgSQAFgRALgVIAGgNQgVATgTAUQgMALgTAXIgLANIAIgPQAKgRAQgWQAXgdAYgYQAhgfAmgXIALARIAAABIgOAKQgiAagZAqQgKATgGAQIgHAQIgKAtIgCAWIAAATg");
	this.shape_346.setTransform(75.4455,11.1574,0.348,0.348);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#65843A").s().p("AgKAUIABgUIAFgUIADgJIAGAIQAHAMgCALQgCAOgIAIIgJAGg");
	this.shape_347.setTransform(116.2345,12.4712,0.348,0.348);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#65843A").s().p("AgQAeQgCgTAGgPQAGgRAMgNIAMgKIgDAPIgJAfQgGAQgGAOIgHANQgCgGgBgJg");
	this.shape_348.setTransform(115.609,11.9318,0.348,0.348);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#65843A").s().p("AAfBpIABgHIABgKIgBgOQgCgNgJgUQgGgPgOgYIgWgmQgLgTgEgQQgEgMgBgOIAAgJIAEAJIAKAWIAUAeIAZAmQAMATAIAXQAFAWgBARQgBAKgCAEIgDALIgFAIg");
	this.shape_349.setTransform(113.509,10.9398,0.348,0.348);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#65843A").s().p("AABhBIADAGIAGANQAIAZgDAYQgEAagMAUIgJAMIgEAFg");
	this.shape_350.setTransform(111.9254,11.2618,0.348,0.348);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#65843A").s().p("AAMAmQgIgBgIgGIgIgHQgEgDgDgGIgGgLIgCgJQgCgKACgJIAEgLIADgDIAEAOIAFAOIASAcIAKALIAMAKIgKAAg");
	this.shape_351.setTransform(110.3338,12.0971,0.348,0.348);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#65843A").s().p("AgRAwIgDgFIgDgIQgDgIAAgMIABgNIAEgMIAGgMIAIgKQAIgJAIgEQADgCAEgCIAGgCIAFgBIgEAEIgDAEIgEAHQgFAGgFAJIgEAKIgLAdIgDASIgCASg");
	this.shape_352.setTransform(109.2747,12.4103,0.348,0.348);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#65843A").s().p("AAWBFQgNgKgKgMIgNgPIgLgSQgEgHgFgKIgGgTQgEgNgCgTIABgdIAJAbIAmBNIAJAPIASAZIASAXg");
	this.shape_353.setTransform(108.335,11.5663,0.348,0.348);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#65843A").s().p("AgMA6QgDgLgDgRIAAgQIABgQIAIgiQAGgOAGgKIAMgOIAEgGIgMAyIgHA8IgCAyg");
	this.shape_354.setTransform(106.8008,10.7223,0.348,0.348);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#65843A").s().p("AATA5IgJgEQgKgEgJgLIgJgLQgDgEgEgKQgDgJgBgFIgBgPQAAgMAFgMIAEgIIADgGIAEgFIgBAGIAAAPQAAAJACAMIADALIAJAYIAFAKQAHALAFAGIAPAPg");
	this.shape_355.setTransform(105.3593,10.0611,0.348,0.348);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#65843A").s().p("AgJBDIgFgJQgFgMgDgQQgCgIAAgJIABgSIAFgSQACgGAFgKQAHgNAJgKIAIgIIAGgFIAGgEIgHANIgFAJQgEAIgFARIgEAPIgFAuQAAAPABALIACAKIABAIIABAHg");
	this.shape_356.setTransform(104.611,11.1313,0.348,0.348);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#65843A").s().p("AgJACQgFgTgBgXIABgTIAJAQQAKAVAFAVQAIAggDAdQgQgYgIgig");
	this.shape_357.setTransform(102.8886,11.0356,0.348,0.348);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#65843A").s().p("AgJgBQAEgQAIgPIAIgMIACAOQABASgEAOQgGAZgNASQgGgXAGgXg");
	this.shape_358.setTransform(101.6369,11.6011,0.348,0.348);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#65843A").s().p("AALAjQgEgFgCgHQgDgJgBgMIABgLIACgKIAAgBIAAgBIAAAAIgBAAIgEgBIgegJIAfgHIADAAIAdgBIgJAaIgEARIgGAkg");
	this.shape_359.setTransform(99.8951,11.8273,0.348,0.348);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#65843A").s().p("AAMAiQgFgBgEgDQgNgIgDgSQgEgQAKgNIAGgHIACgCIABAMIAEAXIAFAWIAEAMg");
	this.shape_360.setTransform(98.6606,11.8708,0.348,0.348);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#65843A").s().p("AgWAxIgDgJQgCgIAAgOIACgOIAFgNIAGgNIAHgMQAIgKAIgFIAHgFIALgFIgKARIgJASIgRAsIgFAUIgEAUg");
	this.shape_361.setTransform(97.8504,11.7925,0.348,0.348);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#65843A").s().p("AALA+IgHgHQgHgJgGgMIgGgOQgCgEgCgLIgBgPIABgPQACgOAFgKIAHgPIAEgFIgBAWIAAAXIAFAnIADANIAHAWIADAIQABADACADIACAGg");
	this.shape_362.setTransform(96.3625,11.3749,0.348,0.348);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#65843A").s().p("AgVA/QgDgHgBgJQgCgMABgNIAGgeIAOgbQAHgMAIgIQAHgHAGgDIAFgEIggBRIgEANIgKAtg");
	this.shape_363.setTransform(96.169,10.4091,0.348,0.348);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#65843A").s().p("AAhASIgDAEIgIAIQgFADgLAGIgSgSIgXgcIgGgJIgGgNIAAgBIAAAAIgBABIAAAEIgFBBIgIh6IAcAwIAoAvIACABIAGgGQAFgGADgGQADgLgBgJIAUgEIAAABIAAACIAEAZIACgaIAKAAQADAmgJAkIgKAjg");
	this.shape_364.setTransform(91.9637,12.0797,0.348,0.348);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#65843A").s().p("Ah3ADIgBAKQgCAJgHALQgDAGgFAEIgDADIADgDQADgEAEgHQAEgLABgJQADgMgFgPIAHgCIAAAAIAAAAIABABIAfA5IACADIACgFIAAAAIABgCIAmhFIAEAvIAAABIAEgKIAEgVIAKAAIAKAAQAAAFACAEIABAHIAFAKIADAGIAEAHIADADIAAABIABAAIAAgBIABgBIACgDIAHgMQAFgNgDgLIgKg9IAbA3QAHAOACAPIABADIAAADIgBAEIAAABIACgCIACgCIARgQIAIAKIACABIABACIACABIALAFQALACAMgDIAFgCIAFgEIADgDIACgBIAKgTIABABQABANACgKIgGAmIABgdIgBACIgBAEIgFAHQgFAGgKAEQgMAFgOgBQgJgCgGgDIgEgCIgEgEIgCABIgBACIgBABIgCACIgeAhIgDACIADgbIAAgFIgEAHIgHAIIgNALIgRgRIgKgNIAAAAIAAgBIAAABIgCADIgSAdIgNgWIgBgFIgBgBIAAgDIgBABIgBABIgDAGIgZAqg");
	this.shape_365.setTransform(84.3378,12.0362,0.348,0.348);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#65843A").s().p("AAEBBIgPgBIAAAAQgBgfAAgfIAAgCIgBgKIABAEIAFhSIAPA/QAKAqgGAoIgFAXIgCAJg");
	this.shape_366.setTransform(51.9387,44.8561,0.348,0.348);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#65843A").s().p("AgJAAQAAgRAFgVIAEgQIAFAQQAFAVAAARQAAAegKAZQgJgZAAgeg");
	this.shape_367.setTransform(50.4216,46.7268,0.348,0.348);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#65843A").s().p("AgbAhQgFgeALgbIADgGIgBgiIAMAJIAVAUIAFAIQAIAOACANQABAIgBAKIgBAGIgBgGIgFgRQgGgMgIgIIgFgFIgBgBQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAABAAAAIABACIAAAAIgBAPQgCAWgIAUIgNAeg");
	this.shape_368.setTransform(48.0217,48.8412,0.348,0.348);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#65843A").s().p("AAQAwQgDgRgFgQQgCASgGASIgCAKIgHgFQgMgIgDgPQgBgKADgKQACgFAFgFIADgCIgCADQgDAEAAAGQgBAKADAGIAEAHQADgdAAgdIAAg7IASAsQASAogDArIgDAZIgCAJg");
	this.shape_369.setTransform(44.5433,48.9282,0.348,0.348);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#65843A").s().p("AgzAhIAAgSQADgRADgLIAHgRIADgGIgFAYIAAAbIABARIACAGIACgCIABgBIABgBIAAgBIAFgJIACgGIgDgJIgBgHIACgHQABgEADgDIAGgFIANgKIACASQACALgDAMIAEADQADABADgBQAEgCADgDQAFgHACgIQABgLgDgHIgPgsIAbAlQAUAaACAgQABALgBAGIgBAGIgEgWQgEgPgHgNQgCALgHAKQgGAHgHAEQgLAEgIgDIgHgDIgFAJIgEAEIgLAKIgFAEIgKAGg");
	this.shape_370.setTransform(38.0836,52.3737,0.348,0.348);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#65843A").s().p("AAHBaIgBgCIgLghIgRhDIAAgEIABgEIAAgCIgBAAIgBABIgDAFIAAABIgBACIgJAeIgFAXIgBAIIAAgJIAAgXIABgQQABgFABgFIAAgFIACgDIAAgEQAEgPAIgSIAPgjIAIBKIAFAcIAAADIABABIAAAAIABgCIAWhTIARBIIgGgMIgKgTIgBARIAAADIAAABIgEAUIgFAeQgDAPgFATIgDANIAAABg");
	this.shape_371.setTransform(33.0632,54.9753,0.348,0.348);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#65843A").s().p("Ageg2IAVA1IABABQAEAGAAgBIAAgJIADgcIAHgwIAAgBIAAAAIAAgBIATAAIAAACQABAmADAzIACAkQgEgMgFgXIgGgVIgOBeg");
	this.shape_372.setTransform(28.2603,55.7932,0.348,0.348);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#65843A").s().p("AgKBQIgGgTQgDgNgBgRIACgjIAKgiQAGgNAGgNIANgPIAEgGIgRBFIgMBmg");
	this.shape_373.setTransform(27.3032,55.4104,0.348,0.348);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#65843A").s().p("AAVBaIgXgSIgJgIQgLgNgHgOIgHgOIgNA4QACglAGg5IAAgCIAAAAIAAgCIAOACQACAYAMAVQAGALAKALIACADIABAAIAAgFIAQiKIAcCLIgRgwIgEgGIAAARIgEAxIgBAQIgCALIAAABIgBACIAAgBg");
	this.shape_374.setTransform(24.7016,55.9868,0.348,0.348);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#785C2A").s().p("ABUA5IgJgEIAAgEIABgIIAAgDIgggHQgZgGgTgHQgagJgSgJQgTgJgNgPIgKgMIgFgLIgCgJIAGAIIAHAIIALAJQAQAKAQAGQANAFAdAJIAsAPIATAIIAFACIAEACIANAFIgJATIAEAEIAHACIACABIgCAAg");
	this.shape_375.setTransform(127.4336,53.4004,0.348,0.348);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#65843A").s().p("ABIAQQgkgDgkgGQgdgFgrgJIgdgJIAfgCQAkgBAkAHQAkAGAkAMQASAHAKAGg");
	this.shape_376.setTransform(186.6609,34.8303,0.348,0.348);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#65843A").s().p("AAAAKQgNgBgXgGIgPgEIAPgFQAUgFARACQASABATAIIAOAIIgQACIgTABIgRgBg");
	this.shape_377.setTransform(178.3602,35.2229,0.348,0.348);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#65843A").s().p("AhqgNIAggFQApgEAlAGQAnAGAjAQQATAIAKAHg");
	this.shape_378.setTransform(173.2876,35.2311,0.348,0.348);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#785C2A").s().p("Ag4AqIgBgFIAAgIIAEgKQAFgKANgJQAOgJAPgFIAbgHQAMgDAJgEQAGgEAGgFIADgEIABgBIAAABIgBAFQgCAIgHAIQgHAJgOAHQgJAEgTAFQgQAFgJAEQgLAFgIAGIgGAHIgFALg");
	this.shape_379.setTransform(155.8161,36.1378,0.348,0.348);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#785C2A").s().p("AAhAeIgWgBIgLgBQgLgBgFgJQgCgDgEgMQAAgEgCgCQgDgGgJgDQgHgDgagBQgNAAgMgEIgIgFIAJABQAHABAQgDIARgEQAMgBAKACQAQAEAHALQADAEADAKIACAGIADACIBDAMQAVAFAMAEIgiABIgRABIgTgBg");
	this.shape_380.setTransform(131.7928,51.376,0.348,0.348);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#785C2A").s().p("AgVApIgDgDIgBgBIgDgEQgGgFgFgHQgEgIgCgKQgBgOAJgQQAIgMAMgHQAIgFANgDQALgCAUAAIALAAIgLADQgTAFgJAEQgIADgIAHQgIAGgEAKQgGALACAIQABAHALALIADADIACACIAAABIAAAAIABgBIAIgEIADAAIAAgBIgBgBIAAgBIgKgLQgHgIADgLQACgHAHgGQAFgGALgFIAHgCIgFAEIgOANQgDAGAAAFQAAAGADAEIARALQAGAFACAHIADAHIABAGIgRABIgIADIgDABIgEAEIgLANg");
	this.shape_381.setTransform(125.7769,46.9792,0.348,0.348);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#785C2A").s().p("AAGAMIgJgIIgIgJIgFgHIACgBIAGgCQAKgDAIAJQAIAIgCAKIgEAIg");
	this.shape_382.setTransform(131.7388,42.72,0.348,0.348);

	this.instance_6 = new lib.Path_272();
	this.instance_6.setTransform(132.4,43,0.3481,0.3481,0,0,0,6.9,5.6);
	this.instance_6.alpha = 0.5898;

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#785C2A").s().p("AhCASIAMgLQAWgQAbgIQAagIAcAEQALABAFACIAGACIhHARIgxAPIgVAHg");
	this.shape_383.setTransform(140.7548,38.7249,0.348,0.348);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#785C2A").s().p("AgmAAQgIgBgEgGIgBgFIADADQAEABAHgBIASgEQAOgCAJACQAaAEARAPIAAAAIAAAAIACADIADAGg");
	this.shape_384.setTransform(143.1736,47.6665,0.348,0.348);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#785C2A").s().p("AgEAXQgagDgRgFQgTgGgPgJQgMgIgHgIIgFgGIAHAEIAWAJQAaAIAwADQA4AFAVAEIAXAGIAIAEIggABIgjABIgXAAIgUAAg");
	this.shape_385.setTransform(137.2396,48.9717,0.348,0.348);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#785C2A").s().p("AgRBHIgFgDQgJgIgFgLQgHgTAFgQIAFgPIgEgQQgDgFAAgHQAAgGADgIQAEgKALgJQAIgFAKgDIAPgBQAGgBAQADIAIADIgdAEQgPAGgIAIQgGAHgBAFIgBAHIABAGIADAKQACAIAAAFQgCALgGAIQgHANACAOQABAJAFALIAFAGg");
	this.shape_386.setTransform(130.7298,44.5168,0.348,0.348);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#785C2A").s().p("AAUAuQgKgDgKgFQgPgHgJgKQgKgLgEgPQgDgMADgNQACgHAFgHIAEgEIgBAFQgBAGABAIQADATAQARQAJAJAZAVIAQAMQgIAAgNgDg");
	this.shape_387.setTransform(137.7312,42.4895,0.348,0.348);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#785C2A").s().p("Ah7AcQAIgDADgGQALgNAFgEQAPgLAbgHQASgGAegCIAtgDQAZgBARgFQAagHArgQIAcgHIAVgFIAOgBIAFgBIgSAFIguATIgfAOIgmAQQgQAFgcAEIguADQgaADgTADQgXAFgNAJIgHAGIgGAHIgJAIIgKAEIhiAeg");
	this.shape_388.setTransform(140.311,40.3751,0.348,0.348);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#785C2A").s().p("Ai3A8QASgWAOgNQANgMAOgIQATgJATgCIAUAAQALgBAGgCQAHgCAHgIIAPgRQAJgKAMgFQALgEAPACQAMACAGgBIAGgCIAKgFQAGgEAHABIAbADQARACAOgCQAXgBAWgHIARgGIgPAJQgWAKgXAGQgRADgQAAIgTAAQgKgBgEACIgHAFQgFAEgHACQgIABgQgBQgLgBgGACQgHAEgGAHIgPAQQgLAJgLAEQgKAEgNgBIgUAAQgdAAgfAWQgPAKgUATIgNAMg");
	this.shape_389.setTransform(150.8653,37.9824,0.348,0.348);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#785C2A").s().p("AAMAJIgLAAIgNgCIgIgBIABgCIADgFQAHgKAKABQAIAAAEAEQAFAEACAEQABAEgBADIAAACQgEgCgEAAg");
	this.shape_390.setTransform(165.1367,35.6118,0.348,0.348);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#65843A").s().p("AguAOIAMgJQAQgJARgFQAZgHAXADQgSAQgaAHQgPAFgTAAg");
	this.shape_391.setTransform(182.061,35.8887,0.348,0.348);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#65843A").s().p("Ag8AHIgSACIgHACIAGgFIAHgFIAKgDIAcgIQAQgCASABQAhABAdAKQALAFAHAEIAGAEg");
	this.shape_392.setTransform(184.9061,35.8802,0.348,0.348);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#65843A").s().p("AgaALIgNgDIALgHQANgHAOgDQAUgEAVAFQgPANgXAFQgHACgJAAIgMgBg");
	this.shape_393.setTransform(182.6787,36.9551,0.348,0.348);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#785C2A").s().p("Ag2AaQgFgDgEgFIgEgHIgCgHIAFAFQABADAEABIAJADQAKADAMgDQAOgDANgHQASgIAfgSIAWgMIgQATQgXAagYALQgQAJgRAAQgRAAgLgHg");
	this.shape_394.setTransform(178.8505,38.1354,0.348,0.348);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#65843A").s().p("AAKAdIgLgDIgagLIgOgJIAjAAIAJABIACAAIAlgjIgDARQgDAKgEAGIgKANIgLALg");
	this.shape_395.setTransform(176.1011,37.6047,0.348,0.348);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#785C2A").s().p("AgVAeQgFgCgGgEQgFgFgCgFQgDgJAEgLQADgHAFgGQAIgJAKgCIAGgBIACABIgCAAIgFADQgGAEgEAJIgDAMQgBAGACADQADAEAFAAQAFACAIgCIAOgEQAHgEAEgDQAAAAABAAQAAgBABAAQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIgGgKQgFgIgIgDIgHgDIAHAAQALAAAJAGQAHAFAEAHIADAFQABADgBADQgBAEgEAGQgFAJgKAGQgJAEgLADIgIAAQgIAAgGgCg");
	this.shape_396.setTransform(167.0041,36.665,0.348,0.348);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#785C2A").s().p("AgbAyQgGgDgCgKIAAgkQABgPACgLQACgIAGgHQAGgHAIgDQATgHAMAOQAGAIABARIgBASQgBAQAEAIQADAGADACQgEgBgFgFQgHgHgDgTIgCgRQgCgKgFgEQgEgEgGADQgIAEgCAIIgDAXIgEAXIAAAJIABAEQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIAHgCIAZgJIAHgBIADAAIgCABIgHADIgVAPIgKAFIgFABQgEAAgFgDg");
	this.shape_397.setTransform(163.8594,37.2059,0.348,0.348);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#785C2A").s().p("AgVAdIgMgDIgFgCIAPgGQAXgLAIgFQAIgEAFgFIADgFQACgCAAgDQAAgGgEgBIgEAAIAEgDQADgBADABQAFABACAFQADAEAAAHQABAFgDAGQgGAMgLAHQgLAGgLACIgMABIgGAAg");
	this.shape_398.setTransform(169.3594,41.1168,0.348,0.348);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#785C2A").s().p("AgmAjIgDgPQgBgNACgJQADgOAMgLQAIgHAGgCQAIgCAGAAQALAAAMAEIAMAIIAEAEIgTgCQgKAAgIADQgEABgEACIgIAGQgJAIgEAHQgEAJgDAJIgFASg");
	this.shape_399.setTransform(165.6024,38.8576,0.348,0.348);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#785C2A").s().p("AAVATQAAgGgCgEQgCgGgDgDQgDgCgGAAQgGABgGADQgGACgGAFIgIAGIgDADIAAgEQAAgFADgHQACgHAIgGQAJgJALgCQAIgBAHAEQAGADAEAHQAFAJgDAKQgCAGgEAEIgDADg");
	this.shape_400.setTransform(170.7437,36.4464,0.348,0.348);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#785C2A").s().p("Ag9gMIgCgIQAAgIAGgHIAHgJQAGgGAJgIQAQgLASgGQAGgCAKgBIAJgBIAGAAQAAAAABAAQABAAAAABQABAAAAAAQAAAAAAAAIgBAKIABAFQABAFADACQAGAFAIAAQAFAAAEgCIADgCIgDACQgCADgHACQgHABgHgCIgEgDIgBgBIACACIADACIAEACQAGAFADAGQAFAJAAALQAAAOgEAKQgHANgPAJQgJAFgTAIQgFADgGAFIgEAEIgGAHIgLASgAAQhDQgHABgGAEQgOAGgMAMIgOAMQgHAKABABIABADIASA2IgBABIABAAIABAAIACgCQAGgEAKgEIAbgKQANgGAFgJQAGgHABgLQACgSgKgMIgGgGIgDgBIACAAQgEgCgCgFQgDgFABgDIgBgBg");
	this.shape_401.setTransform(168.9754,39.3187,0.348,0.348);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#785C2A").s().p("AglAEIAAgEIgBgCIABgQIAGAJIACAFIADAEQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAIABgBIABgBIAFgFQARgNAUgGQALgDAHAAIgNAMQgQAQgNAKIgdAVg");
	this.shape_402.setTransform(173.1603,38.8924,0.348,0.348);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#65843A").s().p("AgPAsQgKgBgJgKQgKgMABgTQgBgJAEgJQADgJAGgJIAGgFQAEgDAEgBIAIAAIAEABIAQAFQASAHAIALQAFAGABAFIACAIIgBAGIAAABIgDgGQgEgHgHgFQgJgGgOgDIgUgDIgCACIgHAMIgEANQgCAPADAJQAEAJAHAEIAFACIABABg");
	this.shape_403.setTransform(172.7514,37.4394,0.348,0.348);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#65843A").s().p("AieAlIAKgFQAJgFAVgTQANgKALgGQAIgEAIgCQAMgCAJAEQAEACAFAFIAEACQADACAHgDQAMgFASgNIARgKQANgFAKABQAIABAGAFQAEAEACAHIACAHIABABQACACAJgDIAOgFQAPgFANAAQAYgCAQAMIAIAHIADADIgDgCIgKgFQgQgHgVAEQgLACgNAGIgOAGIgJADQgGABgGgBQgIgCgDgGIgHgNIgCgBQgGAAgHAEIgPAIQgVAOgMAEQgOAFgKgEQgGgDgEgFIgEgEQgHgEgQAGQgJADgPAJQgZAPgKAEIgLACIgEABg");
	this.shape_404.setTransform(179.1115,36.5055,0.348,0.348);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#785C2A").s().p("AhnAnQAJgJALgIQASgNASgGQAKgDANgDQAPgBAFgEIASgNIAVgNQAUgJATgCQAQgBALADIAHACIADABIgKAAQgNABgMAEQgQAGgRALIgaATIgMAIQgIAGgSABIgVADQgPAEgVAIQgMAFgLAGIgJAEg");
	this.shape_405.setTransform(179.7728,39.2665,0.348,0.348);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#65843A").s().p("AgWAEQAIgJAJgFQALgEAMACQAGABAEADIgIAGQgKAHgHADQgHAEgMABIgKABQABgFADgFg");
	this.shape_406.setTransform(205.2045,29.5933,0.348,0.348);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#65843A").s().p("AgTAKIgKgDIAIgGQAMgHAIgCQAGgDAOAAIALABIgGAJQgJAHgLAEQgFACgGAAIgMgCg");
	this.shape_407.setTransform(188.047,36.4736,0.348,0.348);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#65843A").s().p("Ag+AUQAEgJAEgGQAIgJAKgHQAPgKAOgDQAMgBAFABIAOADQAPAFAGAAQAKABAFgDIAFgCIgDAFQgFAGgKADQgIADgRAAIgOgBIgLABQgVADgWANIgSAMg");
	this.shape_408.setTransform(185.0714,37.0565,0.348,0.348);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#65843A").s().p("Ai/A9QAQgMAQgIIAygWIAFgBIgGASIACABIAIgDIAYgQQAbgRAigMQAsgRAsgPIBKgXQAbgHAYgEIATgDQgaAHgoARIhHAdQghAOg2AUQgjANgZAOQgQALgKAFQgLAEgJgCQgHgCgDgFIgBgCIAAgDQAAAAAAAAQABAAAAgBQAAAAgBAAQAAAAAAAAIgCABIgIACIgUAIIgiAPIgcAQg");
	this.shape_409.setTransform(254.4149,11.8597,0.348,0.348);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#65843A").s().p("AhsApQgEgBgEgCIgCgCIADABIAHABQALgBAOgJQANgIARgRQAdgYANgHQAOgIANAAQALAAAPACQAWACARgCQAQgBALgDIAKgCIgIAFQgKAGgQAFQgTAHgXAAIgYABQgKABgKAFIgoAaQgUAPgRAGQgLAEgJAAIgJAAg");
	this.shape_410.setTransform(244.4962,15.6783,0.348,0.348);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#65843A").s().p("AgaAJQAGgNANgIQALgIAPABQAIABAEACIgcAVQgJAGgNAFIgLAEIAEgLg");
	this.shape_411.setTransform(194.6072,33.2003,0.348,0.348);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#65843A").s().p("AhHAWQAhgUAigPIAlgPQAVgIANgCQAQgDAIAEQAFADACADIgCgBIgGgBQgIgBgNAGIgdAQIglARQggAPglAMIgfAIIAagSg");
	this.shape_412.setTransform(238.6059,17.6463,0.348,0.348);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#65843A").s().p("AhcAnQAHgEAKgMQAUgVAGgEQAMgJALgCQAGgBATABQAGABALgDIASgHIAhgPQAPgGAJAAIAHAAIACAAIgCABIgGACQgIADgMAJIgdAVQgOAHgHADQgMAFgNgBQgPgCgFAAQgGABgKAFQgLAGgSAOQgKAHgMAEIgJACg");
	this.shape_413.setTransform(231.7325,20.2993,0.348,0.348);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#65843A").s().p("AlaCBIASgPQAQgMAQgIQATgJAdgEIAdgEQAQgDAMgGQAOgGAKgLIALgOQAJgIAIgEQAJgEANABIATACQAQABATgEQAjgIAhgZQAXgQALgEQAJgDALgBIBNgHIACAAIAAgBIAFgRIAAgDIAEgBIBxgYIABAAIACgCIAQgaIAEgEIAHgFQASgJAOABQAOABAIAHQAFAFADAIIABAEIgCgEQgDgHgFgEQgIgGgNAAQgNAAgPAKIgJAIIgQAgIhuAdIgBABIgBADIgEAUIhKAJQgcAEgFACQgIACgVAOQgkAcgoAIQgWAFgTgDQgZgDgHACQgGACgGAGIgMANQgMAMgSAHQgOAGgSACIgcACQgbACgUAHQgSAHgPAKIgTANIgHAFg");
	this.shape_414.setTransform(216.959,25.4898,0.348,0.348);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#65843A").s().p("AhcAqQAGgIAMgKQAOgLASgJQAIgEAOgDIAUgGQAIgFAJgHIASgOQALgIAIgDQAGgDAEAAQAHAAAFADIACAFIACACIADAEIAIACIAGgBIACAAIgBABIgHACQgFACgFgCQgEgBgDgCIgDgCIgBgBIgEAAIgGADQgGAEgIAIIgRAQQgMAKgKAFQgJAEgOACIgTAFQgUAGgOAHIgdAQg");
	this.shape_415.setTransform(201.1326,31.2707,0.348,0.348);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#65843A").s().p("Ah8AlIBCgmIAKgEQAMgGAKAAIAEAAIAEABQAEABAFAEQAEAEABAEIAOgMQAJgGAMgDIAkgHQAQgFAJgKQAHgFACgEQACgEAAgDIABgGIgBgGIAFABIAyALIATADIgTABIgWgBIgOgBIgFAAIgCgBQAAAAAAAAQAAAAAAABQgBAAAAAAQAAAAABAAQABAEgDAHQgFAJgFAFQgOAOgRAHIgkAIQgHADgHAEIgPANQgHAGgEABQgFABgDgBQgGAAgDgGQgCgCAAgFIAAgFIgDgBQgGAAgKADIgQAHIg8AcIg5AXIAzggg");
	this.shape_416.setTransform(192.1188,34.6878,0.348,0.348);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#65843A").s().p("AhnAnQAJgJALgIQASgNASgGQAOgEAJgCQAPgBAFgEIASgNIAVgNQAUgJATgCQAMgBAPADIAHACIADABIgKAAQgNABgMAEQgQAGgRALIgRAMQgPAMgGADQgIAGgSABIgVADQgPAEgVAIQgMAFgLAGIgJAEg");
	this.shape_417.setTransform(52.0485,84.6349,0.348,0.348);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#65843A").s().p("AgWAEQAIgJAKgFQAKgEAMACQAGABADADIgHAGQgKAHgHADQgFADgPACIgKABQACgEADgGg");
	this.shape_418.setTransform(77.4802,74.958,0.348,0.348);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#65843A").s().p("AgTAKIgKgEIAIgGQALgGAJgDQAGgCAPAAIAKABIgGAIQgJAJgLADQgFACgGAAIgMgCg");
	this.shape_419.setTransform(60.3227,81.8383,0.348,0.348);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#65843A").s().p("Ag+AUQADgJAFgGQAHgIALgIQAPgKAPgCQAHgCAJABIAOADQAPAFAGAAQAIABAHgDIAGgCIgFAFQgEAGgKADQgKAEgPgBIgOgBIgLABQgWADgWANIgMAJIgGADg");
	this.shape_420.setTransform(57.3471,82.423,0.348,0.348);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#785C2A").s().p("AgUAJQABgMAJgIQAKgIAMACQAEAAADACIACACIgHAGIgLALQgEAEgKAGIgHAFQgCgEAAgGg");
	this.shape_421.setTransform(153.5475,40.1212,0.348,0.348);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#785C2A").s().p("AgiAKQAPgLAQgHQAZgLAaAAQgSATgaAKQgPAHgTACIgRABIANgKg");
	this.shape_422.setTransform(136.6267,52.2212,0.348,0.348);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#785C2A").s().p("AgqAOQANgUATgLQAUgMAWAAQAJAAAFABIAFABIgQAIIgjATIgyAeg");
	this.shape_423.setTransform(133.0159,54.127,0.348,0.348);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#785C2A").s().p("AgnATIAKgKQAMgKAOgHQAMgGARgDIAOgCQgNATgWAKQgTAKgTAAIgGgBg");
	this.shape_424.setTransform(136.0263,53.6864,0.348,0.348);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#785C2A").s().p("AgYAJQABgIAEgFQAEgIAJgGIAFgCQACgBADAAQAHgBAGAEQAKAHgDALQgBAFgFADIgDACIAAgDQABgEgCgDQgDgDgDABIgBAAIgCABIgCABQgHAEgKAKIgJAIQgCgFABgIg");
	this.shape_425.setTransform(156.9355,37.8908,0.348,0.348);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#785C2A").s().p("AgtAhIgSgGIgGgCIAHgBIASgBQAhgEAUgIQAbgLASgRQAHgGAFgHIAEgGIgBAHQgBAHgFALQgOAcghANQgPAHgSAAQgNAAgPgEg");
	this.shape_426.setTransform(139.8546,51.8823,0.348,0.348);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#785C2A").s().p("AgGAdIgJgDIgDgBQgKgFgGgIQgDgEgDgIIgBgEIADADIALAFQAGADAJABIABABIABgBIAAAAIAFgGQANgMATgLIAPgHIgIAPQgLARgOANIgMALIgBABg");
	this.shape_427.setTransform(142.604,49.8638,0.348,0.348);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#785C2A").s().p("AgVAoIgFgBQgFgBgDgDQgHgEABgKIACgHIACgFIAFgHIAJgLIARgOIAGgEIgDAGQgGAIgFAKIgIATIgBADIABACIABgBIABAAIAHgBIAIgEQAQgJAJgKQAFgGABgFQACgGgCgFQgDgJgKABIgHACIAGgFQAFgCAFAAQAIABAFAHQAFAGAAALQAAAKgGAIQgKATgVALIgKAEQgEACgIAAg");
	this.shape_428.setTransform(151.6591,42.2055,0.348,0.348);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#785C2A").s().p("AgiA3IADgHQAEgJAAgRIgBgTQgBgMADgMQAEgPALgKQAIgGAFgDQAGgCAFAAQAHAAAFAFQAEADADAHIACAIIADAlQABARgHAKQgEAFgFADQgDACgIADIgQABIgMAAIgHACIgCACIACgCIAGgFQAHgDAFgBIAOgEQAHgDAEgHQADgHgDgLIgFgkIgCgFIAAAAIAAAAIgDAAQgFACgDADQgGAGgEAKQgEAHgBALIgDAUQgDAQgIALIgIAIg");
	this.shape_429.setTransform(154.8565,40.589,0.348,0.348);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#785C2A").s().p("AgVAVIgHgDIgHgFQgEgGABgHQAAgCACgFQAEgHAFgDQADgDAFgBIADAAIgCACQgCABgCAFQgBAEAAAFIAAAEIACABIABAAIACABIAHgBIASgDIAggJIgLAMQgFAGgJAGQgMAHgJABIgHABIgHgBg");
	this.shape_430.setTransform(149.326,48.7196,0.348,0.348);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#785C2A").s().p("AAgAKQgFgMgDgDQgCgCgEgBIgHABIgTAIIgiAWQAEgIAGgKQAGgJAIgIQAMgMAMgDQALgCAIADQAJADAEAJQAEAEABAJIgBAKQAAAIgEAHIgBAFg");
	this.shape_431.setTransform(153.0881,42.9503,0.348,0.348);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#785C2A").s().p("AgXAcQgFgFgBgGQgCgJADgIQADgLAJgJQAJgIALgBQAMgBAHAFQAGAFABAGIABAEIgEgDQgCgCgGAAQgLAAgKALQgLAIgGANQgCAFAAAFIABAEg");
	this.shape_432.setTransform(147.9654,44.9975,0.348,0.348);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#785C2A").s().p("AAWA5IgDgCIgGAAIgNADQgXAGgHAAQgLAAgGgGQgFgEgDgLQgBgLAEgNQADgMAHgJIgEACIgHADIgFABIgEAAIAEgBIAEgCIAGgDQAHgGAFgIIAEgLQABgIgCgHIALgHIAJgGQAMgHAIgCQANgDANABQAIABAHACIAIAEQAFAEACAGQABAGgBAFIgcBqgAAKgxIgSAGIgOAHIAAAEQgBAFgBADQgEAIgDADIgEAFIAAABQgIAPgCANQgBALACAJQADAKAKgCQAHAAATgHQAHgDAJgCIALAAIABAAIAAgBIAAAAIAVhOIAAgCIgDgCIgKgDIgKgBIgLABg");
	this.shape_433.setTransform(149.7254,45.8342,0.348,0.348);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#785C2A").s().p("AAOAYIgkgEIgQgDIAPgHQAVgIASABIAEABIABAAIABAAIAQgdIABAMIAAAWIgEARg");
	this.shape_434.setTransform(145.5534,48.1846,0.348,0.348);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#785C2A").s().p("AgsAuIAAgHQAAgJAFgNQAHgQALgNIAOgQIARgPQAKgHAJAHIAHAGIAEAGQAFALgBAMQgBASgLAQQgIALgJAFIgFAEIgCABIACgCIADgFQAGgIAEgLQAFgPgBgOQgBgIgEgGIgBgCIgCgBIgbAYQgPAOgHAJQgHAJgEAJIgCAGIAAACg");
	this.shape_435.setTransform(145.9563,46.8229,0.348,0.348);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#785C2A").s().p("AiaBRQAKgRASgQQAPgMALgGIARgGQAJgDAFgDQAHgDACgGIAGgQQADgMALgIQAJgIANgDQAMgEAKABIASgBQAQgDAIgNIAMgPQAHgHAIgEQAOgHASAAIAYABQALABAHgBIAMgDIADgBIgDACQgDADgIACQgJADgKABIgXACQgQACgKAHQgHAFgDAEIgIAOQgGALgJAGQgHAFgOAEQgKACgMAAIgRADQgSAFgEANIgIASQgHALgLAFQgHADgMACIgPAEQgMAFgMAIQgTALgOAQIgJAMg");
	this.shape_436.setTransform(139.5849,51.3255,0.348,0.348);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#65843A").s().p("Ai/A9QARgMAPgIIAvgVIADAAIAGgCIgHASIABABIAJgDIAYgQQAagRAkgMIBXggQAxgQAagHQAagHAYgEIATgDQgaAHgoARIhIAeQgiAOg0ATQgjANgYAOQgRALgKAFQgMAEgHgCQgHgBgDgGIgCgCIAAgDQAAAAAAAAQABAAAAAAQAAgBgBAAQAAAAAAAAIgCABIgIACIgVAIIgiAPIgcAQg");
	this.shape_437.setTransform(126.6906,57.2244,0.348,0.348);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#65843A").s().p("AhsApIgHgDIgDgBIADAAIAIABQAKgBANgJQAOgIARgRQAcgYAOgHQAOgIANAAQAKAAAPACQAXACASgCQAPgBAMgDIAKgCIgJAFQgKAGgQAFQgSAHgZAAIgXABQgKABgKAFIgoAaQgUAPgRAGQgLAEgJAAIgJAAg");
	this.shape_438.setTransform(116.772,61.0431,0.348,0.348);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#65843A").s().p("AgaAJQAHgNAMgIQALgIAPABQAIABAEACIgJAHIgUAOQgFAEgQAHIgLAEIAEgLg");
	this.shape_439.setTransform(66.883,78.565,0.348,0.348);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#65843A").s().p("AhHAWQAhgUAigPIAlgPQASgHAQgDQAPgDAJAFQAFACACADIgCgBIgGgBQgIgBgNAGIgdAQIglARQggAPglAMIgfAIIAagSg");
	this.shape_440.setTransform(110.8817,63.0122,0.348,0.348);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#65843A").s().p("AhcAnQAIgFAJgLIAMgMQAHgJAHgEQAMgJALgCQAGgBATABQAGABALgDIASgHIAhgPQAPgGAJAAQAFgBACABIACAAIgCABIgGACQgIADgMAJIgdAVQgOAHgHADQgMAFgNgBQgPgCgFAAQgGABgKAFQgLAGgSAOQgNAJgJACIgJACg");
	this.shape_441.setTransform(104.0083,65.664,0.348,0.348);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#65843A").s().p("AlaCBIASgPQAOgLASgJQATgJAdgEIAdgEQAQgDAMgFQAOgIAKgKIALgNQAIgJAJgEQAJgEANABIATACQAQABATgEQAjgIAhgZQAXgQALgEQAJgDALgBIBFgGIAIgBIABAAIABAAIAAgBIAFgRIAAgDIAEgBIBxgYIABAAIACgCIAQgaIAEgEIAHgFQASgJAOABQANABAJAHQAFAFADAIIABAFIgCgFQgFgIgDgDQgIgGgNAAQgPABgNAJIgJAIIgQAgIhuAeIgBAAIgBADIgEAVIhKAIQgcAEgFACQgJADgUANQglAdgnAHQgWAFgTgDQgZgDgHACQgHACgFAGIgMANQgLAMgTAIQgOAFgSACIgcACQgbACgUAHQgSAHgPAKIgTANIgHAFg");
	this.shape_442.setTransform(89.2347,70.8547,0.348,0.348);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#65843A").s().p("AhcAqQAGgHAMgKQAOgMASgJQAMgFAKgCIAUgGQAIgFAJgHIASgOQANgJAGgCIAKgCQAHAAAFACIACAFIACACIADADIAIADIAGgBIACAAIgBABIgHADQgFABgFgBIgHgEIgDgCIgBgBIgEAAIgGADQgGAEgIAIIgRAQQgLAKgLAFQgIAEgPACIgUAFQgTAGgOAHIgdARg");
	this.shape_443.setTransform(73.4084,76.6354,0.348,0.348);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#65843A").s().p("Ah7AlIBBgmIAKgEQAPgGAHAAIAIABQAEABAFAEQAEADABAEIAOgLQAKgGALgDIAkgHQAOgEAMgKIAIgKQACgEAAgDIABgGIgBgGIAFABIAdAHIAnAHIgSABIgkgCIgCAAIgDAAIgCgBIgBABQABAEgCAHQgFAJgFAFQgMAOgTAHIgkAIQgIADgGAEIgPANQgHAGgEABQgFABgDgBQgGAAgDgGQgCgCAAgFIAAgFIgDgBQgGAAgJADIgRAHIg9AcIg4AXIA0ggg");
	this.shape_444.setTransform(64.3946,80.0605,0.348,0.348);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#785C2A").s().p("AAnAPQgRgDgZgJQgYgGgRgCQgTgCgQADQgOADgHAFIgIAFIACgCIAEgFQAKgIAMgFQAQgGAVAAQARAAAbAIIApANQATAGAPACQANABALgCIAJgBIgIADQgMAFgNAAIgIAAQgNAAgQgDg");
	this.shape_445.setTransform(135.9605,53.1982,0.348,0.348);

	this.instance_7 = new lib.Path_8();
	this.instance_7.setTransform(88.85,142.9,0.3481,0.3481,0,0,0,113.9,45.8);
	this.instance_7.alpha = 0.5586;

	this.instance_8 = new lib.Path_1_0();
	this.instance_8.setTransform(63.75,129.15,0.3481,0.3481,0,0,0,59.1,45.2);
	this.instance_8.alpha = 0.5;

	this.instance_9 = new lib.Path_2();
	this.instance_9.setTransform(59.25,121.95,0.3481,0.3481,0,0,0,95.4,39.6);
	this.instance_9.alpha = 0.5;

	this.instance_10 = new lib.Path_3();
	this.instance_10.setTransform(38.2,99.35,0.3481,0.3481,0,0,0,66.7,43.6);
	this.instance_10.alpha = 0.5898;

	this.instance_11 = new lib.Path_1();
	this.instance_11.setTransform(164.4,116.15,0.348,0.348,0,0,0,209.5,121.5);
	this.instance_11.alpha = 0.5586;

	this.instance_12 = new lib.Path_0();
	this.instance_12.setTransform(152.8,91.65,0.3481,0.3481,0,0,0,266.3,127);
	this.instance_12.alpha = 0.5;

	this.instance_13 = new lib.Path();
	this.instance_13.setTransform(153.95,65,0.3481,0.3481,0,0,0,302.8,141.9);
	this.instance_13.alpha = 0.5898;

	this.instance_14 = new lib.Path_4();
	this.instance_14.setTransform(129.7,50.45,0.3481,0.3481,0,0,0,18.2,16.6);
	this.instance_14.alpha = 0.5898;

	this.instance_15 = new lib.Path_5();
	this.instance_15.setTransform(152.85,39.65,0.3481,0.3481,0,0,0,14.7,11.8);
	this.instance_15.alpha = 0.5898;

	this.instance_16 = new lib.Path_6();
	this.instance_16.setTransform(144.2,45.15,0.3481,0.3481,0,0,0,11.1,14.3);
	this.instance_16.alpha = 0.5898;

	this.instance_17 = new lib.Path_7();
	this.instance_17.setTransform(136.8,44.9,0.3481,0.3481,0,0,0,29.3,20.7);
	this.instance_17.alpha = 0.5898;

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.lf(["#A4AA41","#ADB14F","#C1C06F","#CFCB87","#D8D295","#DBD49B"],[0,0.098,0.357,0.604,0.824,1],-0.1,14.9,-0.1,-14.9).s().p("ABlCUQgXgLgOgKQgigYgPgiIgWg6QgJgVgLgJIgmgdIgngcIgXgQQgLgIgJgRQgQgeAFgBQALgCBNBBIAlAnQAnAtAOAWQAQAcAFABQAEABAJgUQACgFAOgOQADgDgRgLQgSgMgNgPIgKgNIAQARQAWAQAbAAQAaAAAMALIARARQAJAFAKAPQAKAQgHgHQgVgTgFgDQgXgOgSARIgYAWQgDADAAAPIAAAiQABASAGAGQAGAFARALIAJAGIgBgBg");
	this.shape_446.setTransform(167.7581,62.5001,0.3481,0.3481);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.lf(["#A4AA41","#ADB14F","#C1C06F","#CFCB87","#D8D295","#DBD49B"],[0,0.098,0.357,0.604,0.824,1],0,22.1,0,-22.2).s().p("Ag0DVQAGgXAJgPIAOgXIABgBQAPgogCgFQgBgFggAHQglAJgGgBQgEgBAjgRQAugWANgXQAQgbAEgJQACgGACgTQACgQAKgnQACgHgEgPQgEgPAGgQQAFgQAKgRQAMgTAEgKQAGgPAFgQIADgMIgRBDQgRBLADAhIgCAPQgCAVACAbQABAcgEAJIgMAcQgFAUgaAVQgYAWgFAGIgLAbQgRAsgDAAQgBAAACgJg");
	this.shape_447.setTransform(155.0143,66.328,0.3481,0.3481);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.lf(["#A4AA41","#ADB14F","#C1C06F","#CFCB87","#D8D295","#DBD49B"],[0,0.098,0.357,0.604,0.824,1],0,19.4,0,-19.1).s().p("AAAC0QgCgaACgPQACgJAJgRIAKgYQAKgagBgKIgPghQgJgVgLgNQgSgPgPgRQgTgVADgkQAHgjAAgFQACgnASgHQAGgDAFADQAEADgDAGQgFAMgCAaQgBAeAGAbQAGAXAMASIAjArQAVAcgBAJQgBAJgTAjQgIAUgPBEQgGAYgDAAQgCAAgCgMg");
	this.shape_448.setTransform(162.7713,64.2128,0.3481,0.3481);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.lf(["#A4AA41","#ADB14F","#C1C06F","#CFCB87","#D8D295","#DBD49B"],[0,0.098,0.357,0.604,0.824,1],0,36.9,0,-36.9).s().p("AhKFlQBDg5gEglQgDgZACgKQADgRAQgUQAOgSgEgJQgHgWAAgMQAAgYgLgJQgUgLgRgNQgVgSAFgHQAPgNANgUQAOgTAPgEQASgEAQgRQAUgWgFgQQgMgYgGgdQgIgkAAgwIAAgpQgDgtAfgsIAfgiIgGAYQgHAbgCAPIgBA1QgBAmgHASQgJAXACAQQACAOAOAaQALAVgDAZQgCAOgGAZQgCAOgPAFQgWAFgPAFQgXAJgGASQgGATARASIAgAfQAPAQAEANQADAMgKAVQgQAggEAOQgEANgIAoQgFAegKAXQgMAagsAZQgQAJgFAAQgGAAAOgMg");
	this.shape_449.setTransform(158.0187,68.791,0.3481,0.3481);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.lf(["#A4AA41","#ADB14F","#C1C06F","#CFCB87","#D8D295","#DBD49B"],[0,0.098,0.357,0.604,0.824,1],0,15.5,0,-15.4).s().p("AheCWIgagIIAaAHQAUACAVgJQAUgJAEgHIAbgkQAWgaAJgkIAFgeQAPgyAmg4IAiguIgIAXQgKAZgGAKQgGALgMAjQgMAiAAAIQAAAHgJAXQgJAYgGALIgiA6QgGAMgNAIIgfAQQgHAEgMAAQgOAAgUgFg");
	this.shape_450.setTransform(155.2747,61.2154,0.3481,0.3481);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.lf(["#A4AA41","#A8AD48","#BABB65","#C9C67C","#D3CE8D","#D9D397","#DBD49B"],[0,0.035,0.208,0.388,0.576,0.773,1],0.1,26.8,0.1,-26.8).s().p("AjGDVQAFgZAHgSIAAAAIAEgyQABgJAKgIQAYgSA3gJQAVgDANgMQAOgNAMgCQANgDANgQQAHgKAPgYQATgfAIgMIASgdQAFgHAHgHIAegbQAfgaANgVIAIgQQATgaAPggIALgbIAHATQAFAWgGALQgKAUgVAhQgZApgKAGQgKAFhSBlIhQBiQgqAAgYAGQgRAEgQAKQgJAGgZAUQgLAIgKAcQgFAxgDAQQgEAXgGAJIgDACQgEAAANg4g");
	this.shape_451.setTransform(151.4928,62.875,0.3481,0.3481);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.lf(["#A4AA41","#A8AD48","#BABB65","#C9C67C","#D3CE8D","#D9D397","#DBD49B"],[0,0.035,0.208,0.388,0.576,0.773,1],-0.1,19.5,-0.1,-19.2).s().p("AkCC0QAsgrASgPQAegaAjgHQAdgHAaAGQAiAIAdgBQAqgCAIgIIAeg5IAjg7QALgTAbgeQAbgcA4gtIAygmIgDA/IgJANQgMAQgPAKQgPAMgPAIIglAUQgWAMgKANQgFAHgOAbQgLAWgKAQQgJAMgWAdQgSAagZADQgSADgrgHQgkgHgZAFQgSADg3ATQgnAPgvAiIgMAKIAOgNg");
	this.shape_452.setTransform(149.3602,58.948,0.3481,0.3481);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#83BA5D").s().p("At8DLQgggDgIgQQgIgSAVgaQAvg5BGgXIAegLQARgHAHgMIATgdQANgRADgJQAFgOgDgoQgCgmgGgOIA0B8QAKgkAUgdQAKgFALAFQALAFACALIAhiDQgHAkAFAkQAFAlARAgQAthHA+g2QgZA7AEA+QAhgwApgwIgiC+QB5hPCSgGQACANALAIIA6g4IgKAxIBWhUIgNBEICGhlIg+B3IA3ghQAMgIAIADQAFABACAHQABAGgFACQAvgCAggjQgJAfAJAeQAtgMAfghQgCADAAAFQABAHAFAEQAHglgRgiQA3AkAsAwQAqg5AUhDQAIBCARA5QAyhFAkhLQAZA9gKA9QBAhBAehYQgUBKAIBLQAphMA6g+QglBagYBjQBIgxBLgkIg2BHQBLgZBUgNQg9AigvA0QARgFAQgKQgYAhgyAPQgVAHhIAMQgvAIhfAaQheAZgxAIQhCALhfADIiiABQhlADiPANIj1AZQipAQiFAAQhnAAhTgKg");
	this.shape_453.setTransform(232.1122,8.3947,0.3481,0.3481);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#83BA5D").s().p("AzkBAIA2hhQgDAIgCAJQgCAPAEANQARgJAIgQIACAsQAogmAugXQgMAegXASQBUgoBHhAIALBgQALgWAZgLQAZgKAYAGIAlgpQgCAKALAFQAKAGAKgFQAMgHAJgbIAJAuQAWgJAKgXQALgXgHgXQANAjAZAZQgBgCACgEQAEgHAHABQAKADAGASIBAg9QgPATgBAZIBPgxIgZAgQAvghAigyQgTA/AXBAIA2hJIAWAyQAVgXAJgfQAKgegCgfQAdAwAPA0IBRgtIABABQACAEADgBIA+gUQgaAegOAoIBeg9IgMAZQAjgMAYgbQgKAOACASQACATAMALIAUglQgFAZAQASIAbgjQgDAJADAJQADAKAIAFQAJgNADgPIACAJQAEAPAKAKIAKg+IASApIAChZQAMA6AbAwQArhBA0gyQgPAXgFAcQgFAcAHAbIBchUQgaAzAKA4IDKhdQgGgHgIgGQgLgIgUgMQAeAGAaAWIgLAFQAGAHAEAHQAJARgDATQgEAQgLAIQApgYAbgpIAxBQIAIhSIAfBPIAWg+QgDANAHAPQAJAVATAFQAUAFASgNQASgNACgUIABAuQA9gdAygtQggAqgOA1QBBglBGgLQgPATABAZIBMhGQgSAmAFAqQAogRAhgbQAGATARAMQASAMATgCQAEhOgZhMQA6BGAfBQQAkhIAxg/IglDVIh8AnIxvBDQxyBDgGACIAAAAQgKAAg3iKg");
	this.shape_454.setTransform(205.7242,10.0826,0.3481,0.3481);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#83BA5D").s().p("AxQCRQAxADAtgWQAugXAagoQAagpADgxQACgzgXgrIBSB6QAEAHAFABQgCgGAEgCQADgBABAEQABAFgEAAIgDAAIADAGQAFAJAEADQAKgQgFgYQgEgQgLgbIA9A8QAJAJAIAAQALgBAFgSIARg8IABA5QAVgmAhgiQgJAJgCANQgBANAFAMQAWg8AzgmQgRAigDAoQgCAnAMAjQABgVAOgTQAOgTAVgHQgEAVAKATIBKg5IgCBgQAZgiAPgmQgHAoAVAgQANgXABgZIAAgRIAEAIQAJAVARAOIgBg7IAuAvQAFgbgEgbQADASAOAMQAPAOATABIgKgeQAWANAOARQACgIAAgIQAHARAPANQAkhYgBhgQASBkAwBUIAJgjQANgBAKALQAKALgCANIA9hBIgWBAQAggNAXgdIgKAiQAjgwASg4QgJA1AWAyQAGgMAQABQAPABAFAMQAJgXASgRQASgSAXgJIgLAnIArgmIgKBCQAfgnATguIgDAvQAOgjgMgiIAxB5IAvhCQgJA9AeA5QAegcAGgpIAPAtQAOgXAEgcIAdA5IAPgpQAMAEANgGQANgHADgMIABAiQBKgjAzg9IAFBJQACgKANgBQANgBAHAJQAJAMgCAcQAdg6APhBQAdBGAvA3QAOgygHgzQAFAZAOAXQAOAXAWAOIgLhYQAVAsAnAeIgFgnIAwAvQgDgcATgWIAuAfIAigpIAKAlIApg7QASBLgPBHQjmAmh1APQjBAZicAGQh1AEkdgHQj/gGiRAKQjuAZh2AFIhAABQikAAh4gog");
	this.shape_455.setTransform(119.0146,12.2646,0.3481,0.3481);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#83BA5D").s().p("AwND6IgGgFIABAAIh/iSIC/BoIh+ivQAYAfArAqQBBA/AVgNQAcgQgkhYQgchEgbglQB4BiBACLQgGgiAGgjQAGgjARgeQgFAgAJAiIA2h7IADABQAPADAOgYQA7hiBbhGQhKB8gVCOQBJhOBeg1QgfApgMAvQA4gXAtggIgmBDQA3gNApgmIAVArQAAgPASADQASADALAMQgEg6gVg2IBrBkIgkhLQAjA1A3AhQADgfAYgYQAYgYAggDIgSBKQBGhEBXgyQgiAfgUAlQAggiAqgUIgLAlQA0gXAmgkIgJAxIAigrQAMgPAKADIABAAQAEgfgFgfQATA4AnAtIAPhSIAbBlQAMgyAhgsIAMBXQAfgvAugiIgaA+QBGhZBogyIhMBrIB4gsQgRAxgoAeQAngOATgLQAfgQARgXQASgYgCgfQAVAcAbAYQAGgjgTgcIBdBWQADgtgHgtQANAlAcAdQgDgWAIgVQAJgVASgNQANAJAFARQAFAQgGAPQBFhiBpg7QgsAlggAxQgfAygPA3QAQgVAYgNQAZgNAagBIgZA3QBHhJBThGIhkDnQgKAWgHAMQgKAQgNAKQgMAKgSAGIggAIQqiCRqpBOQhZAKgxAEQhNAFg+gDQhygJg5ABQhhACg8AoQgOgpgfgfgAxVDOQAlAMAdAbgArtgMQgFgDACgKQAEgMAHAHIgIASIAAAAgAKMj5QAbANAEAkIABAFQgTgZgNgdg");
	this.shape_456.setTransform(41.5189,18.6277,0.3481,0.3481);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#83BA5D").s().p("AC3EtQAfgxAHg3IAdBQQgGhSAOhNQA1AtAXBAQAGhVgrhJQAuAuA0AsQAlgwgEg9QgUAjACAnIgNiVIgnBpQgMhYgohQIgtB7QgNhBABhDQgDA+gjAzQgChBgRhBQgNAsgbAkIgSg8QgJAwgiAfIgdhKQAAAYgQAUQgHgpgWgkQgGAFgDAJQgDAIACAIQgYgagIgiIgMAkQgSgHgFgSQgiAhgwgBIAmgsQgqAagyAEQANgXAWgOQhZAThXAmQAigXAUgiQgggDgfANQgeANgUAaIAShLQg8AQgwAhIAKgxIgvArQAEgmgMggQgEAKgOAKQgQAMgEAEQgGgRgcgPIgzgaQg6gjAkg+QAPgZAigKQAYgHApgBQHkgKHxAbIA3AEQAeAEAXAHQBVAcAuBcQArBXgOBgQgMBbhCBxQgdAzgcAYQggAbg2AOQgPAEhTAOQiHAWh/A7QAvgdAegxg");
	this.shape_457.setTransform(33.42,41.9948,0.3481,0.3481);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#83BA5D").s().p("AJbHPQghANgQAeQALg3gKg6IhBBdIgRhMQgyAqgTA9QAEhSgfhNQg1BFgMBWQgYhuAHhyQgpBOgMBYIgZiaIgpBSQAGg6gUg3QgiA5ADBDQgdhJgFhMIgVBjQgchagHhdQgBAvgaAmIgVhHIgpA6IghgaQAJAIgwA9IgOgjIgPgiQgSAZACAjIgYhGQABANgBAPQgEArgdAfQAEgvgWgnIAGBLQglhDADhNQgqANg1ACQg7AAgfABQhyAGhwBIQBVhKBfg8Qg2ATg8gEICLhZQhvgNhngiICggUQhRgQg7g6QA0gHAzAJQA0AJAuAYQhBhqgyg3QhEhJg6ABQA7gKBEAfQAuAVBFAyIglhoICWCIQgPhjgzhZQBLBTAwBhQAEh2gyhsQA5A/AaBRIg1i9QBKBKAzBYQANg6AoguQAVApgBAuIAoirQAjBHgEBQQAXgnAigfQgKAygYAqQBIhxBeheQgaAfgJAqQgIAoALAnQiiBEiFB0QAUAAANAUQANAUgJASQBmApA2ATQBYAeBJAMIA+AJQAkAFAZAHQBEASBFA1QAsAhBKBIQAOgUAIgJQANgQAPgHQAQgJAUAEQAUADAIAPQAFAJABATIAmFhIgigvQgiAggYAlgAByl4IAbgLIgaAMIgBgBgAByl4IAAAAg");
	this.shape_458.setTransform(24.644,69.9223,0.3481,0.3481);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#83BA5D").s().p("EgoYAQEQiOhXlAhAQlDg2hBgPQhcgVgogsQgigkgYhZQgUhKAogpQAVgVB3hAQCghWF8hyQEAhMBZgpQDLhdA0iBQAchGhegpQhPgjixgTQhwgMjugLQj5gMhjgKQkhgbgchJQgWg3CLhpQBkhLF3hLQC8glCngXIIShNQI1hQCvgNQDBgOJUAOQIjANDpARQCoANEwgrQChgWDjgmQBQgKEbgoQEWgmCfgMQCpgNGUASQDHAJGiAaQDIANEJAAQCFAABcgDIhGAcQhLAegZAMQgPAIknBpQknBpgtAWQgvAYilA9IjkBVQksB4hGAUQi4A6iaAtQktBXhHAAQhwAAj/geIjpgeQg5AShbAZQi3AyipAlQj6A4hcArQiJA/AoBXQAjBLCUAwQAiALA0APQAhAMgNAJQgYASkZBgQkhBggZAKImJCPQmECMh3AvQkKBrgqAQQi3BEiVAnQiPAmhsAyIhPAqIANAJQgEAAizhtg");
	this.shape_459.setTransform(132.6398,46.7194,0.3481,0.3481);

	this.instance_18 = new lib.Group_2();
	this.instance_18.setTransform(154.8,51.55,0.3481,0.3481,0,0,0,303.4,119.4);
	this.instance_18.alpha = 0.5703;

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#9D6843").s().p("EgTmAgSQjOhZiaitQicixg4jTQg0jFiJh0Qhuhdi1g0QhDgTj2guQizgihOgrQioheAHkzQAChhAUhqIAThWQgli8Cri3QCPiZE0inQDIhsGZi1QG7jECjhTQHMjreMmZQPHjNNrieIgPBjQgVB6ggB1QhkF3iiC7QiCCVhNDVQg5CegpDrQgXCCgmDwQglDBg5BlQiXEMiCB4QhUBNiLA5QigBAhXBAQihB2i8D8QjCEEjXBxQiaBSjlAdIi7AUQhuAOhMATQjVA2irCXQi8CnjrAbQgtAGgtAAQipAAirhLg");
	this.shape_460.setTransform(154.4763,83.5815,0.3481,0.3481);

	this.instance_19 = new lib.Path_23();
	this.instance_19.setTransform(23.3,54.2,0.3481,0.3481,0,0,0,48.7,33.3);
	this.instance_19.alpha = 0.5898;

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#B6815A").s().p("ARTfRQjygohFguQg4glh/gfQihgkhhgbQhtgfiRg/QishMhFgYQhvgnhDhZQgUgbgUglIgWgoIgng0QgYgggPgZQgbgugKgOQgZghgfgPQgXgLgigFQgfgDgUgMQgZgPgLgdIgShIIgEgQQgLAXg6AEQhIAGguhKQgagrgnh9QgMgphCgrQgggVhwg7Qhog3g3goQhTg9gnhDQgnhEgOhLQgJgvgEhaQgEhegJgxQgOhVgnhQQhJiWhih2IhUhYIDYg+QAChCgLhbQgXi2hEh+QhEh+gdj3QgKhNgEhQIgChBIFMhCQGWhOF0g8QSli+GIBEQDaAlDfJKQC8HtChMVQCMKtA/JlQA+JXg4BNQhcB+hsASQgeAFg+AAQg+AAghAGQgfAFgrAAQhjAAingcg");
	this.shape_461.setTransform(69.7174,88.1798,0.3481,0.3481);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_461},{t:this.instance_19},{t:this.shape_460},{t:this.instance_18},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.instance_6},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.instance_5},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.instance_4},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.instance_3},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.instance_2},{t:this.shape_120},{t:this.shape_119},{t:this.instance_1},{t:this.instance},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.piso, new cjs.Rectangle(0,0,264.7,162.3), null);


(lib.hoja_5 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Path_17();
	this.instance.setTransform(129.45,55.15,1,1,0,0,0,16.9,24.1);
	this.instance.alpha = 0.5117;
	this.instance.compositeOperation = "multiply";

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#558943").s().p("AinAzQAOgPASgOQAZgUAbgPQAfgSAngOQAngNAlgCQAlgDAbAJQAJACAOAGQAIAEAIAGIAJAHIADACIgOgGIgRgFIgWgDQgbgCghAGQgZAEgtAOQg9AUg+AhIgxAcg");
	this.shape.setTransform(74.65,18.1966);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#558943").s().p("AlPFWIgBgfQAAgiABgOIADgfIAPhGQAEgPAJgYIAag+IAMgUIAagpIAPgVIAQgUQAhgnAtgjQAjgcA5geQAegQA5gbQAegPAwgbIBEgmQAhgSAZgKIAtgRIAegIIAKgCIgKADIhIAgQgVALgiAVIhAAqQgqAbgjAUIhWAtQg2AeghAaQgtAkgeAiIgQATIgPATIgaAmIgMAUIgdA6QgJAUgFARIgGASIgTBPQgDAQgDAfQgBAOAAARIgBAKg");
	this.shape_1.setTransform(35.225,54.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#558943").s().p("ACLCRIgUgnIgXgrQgRgcgNgOQgRgTgagPQgOgKgjgSIgZgLQgRgIgJgKQgFgFgLgRIhWh/IBmByIARASQAIAHALAFIAaAKQAgAPAVAOQAbARAUAWQATAVAMAcQAKAUAKAbIAPAoQATAyAKAfQgRgcgYgvg");
	this.shape_2.setTransform(123.975,50.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#558943").s().p("AFCBEQgFgIgIgIQgKgKgOgJQgSgMgTgFQgXgHgagCQgcAAgdAEIhAAKQglAHgiABQgfACgogEQgZgBgpgKQgngJgTgHQgXgHgZgNQgRgHgVgMIgcgRIgWgRIA2AaIAnAPQAhALAQAEQAZAGAfAGQApAFAXABQAlADAfgDQAdgBAngEQAsgGAWgBQAigDAbAEQAbADAYAKQAVAJARANQANALAKAOIAKASIACAGg");
	this.shape_3.setTransform(98.425,24.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#558943").s().p("AJUA/IgfhGIgRgmQgKgWgJgOQgYglgqgNQgSgFgagDIgwgEQgigCgRgDQgcgEgXgKQgngPg2gpIgrghQgZgTgSgMQgSgMgegMQgWgJgcgFQgYgEgfgDIgcgBQgOgBgLABQgdADgQALQgRAMAHAWIAKAWQAIAQACAMQAGAdgQAeQgMAWgXAVQgRAQgYAPQgPAJgdAOIgqAWIhQAqQhSAqg4AoQg2AogsAyQghAlgYAtQgNAZgLAhIgHAWIAFgWQAJggAOgcQAUgtAigpQApg0A3gqQA7guBOgrIBPgsIAqgWQAfgRAKgHQAyggARgiQALgXgEgTQgBgIgHgNIgMgaQgDgKAAgHQgBgHADgKQAEgRAQgMQAWgQAkgEQAQgBAOAAIAcACQAfACAaAFQAeAFAaAKQAdAMAXAPQAUANAaAUIAqAhQA1AoAhAOQAUAJAaAFIAxAFQBDAFAeAKQAXAIAUAQQAUAPALAUQAKARAKAXIAQAnIAdBHQBKC4AtBzQgzhwhRi2g");
	this.shape_4.setTransform(73.125,35.6688);

	this.instance_1 = new lib.Path_6_2();
	this.instance_1.setTransform(118.25,33.7,1,1,0,0,0,15.5,9);
	this.instance_1.alpha = 0.5117;
	this.instance_1.compositeOperation = "multiply";

	this.instance_2 = new lib.Path_7_2();
	this.instance_2.setTransform(101.65,21.35,1,1,0,0,0,16.6,3.4);
	this.instance_2.alpha = 0.2188;
	this.instance_2.compositeOperation = "multiply";

	this.instance_3 = new lib.Path_8_2();
	this.instance_3.setTransform(81,8.9,1,1,0,0,0,13.3,6.3);
	this.instance_3.alpha = 0.2188;
	this.instance_3.compositeOperation = "multiply";

	this.instance_4 = new lib.Path_9_1();
	this.instance_4.setTransform(86.45,20.6,1,1,0,0,0,14.3,3.2);
	this.instance_4.alpha = 0.4492;

	this.instance_5 = new lib.Path_10_1();
	this.instance_5.setTransform(68,10.45,1,1,0,0,0,7.8,6.4);
	this.instance_5.alpha = 0.4492;

	this.instance_6 = new lib.Path_11_1();
	this.instance_6.setTransform(125.1,53.8,1,1,0,0,0,21.6,28.9);
	this.instance_6.alpha = 0.5117;
	this.instance_6.compositeOperation = "multiply";

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5CAA41").s().p("AraDKIAng9QAxhHAvgvQAwgvBuhBICxhhQBEgmAHggQADgNgNhmQgKhIA2ABQAbABAdAPQBmAABDAcQAoARA3AtQAbAWAhAdQAgATBYAKQBWAJAgAQQAVAKApAeQAmAWAqBtQAZBAA3CkQA8ClgZAZQgEgWgTgpQgSgkgnhHQgqhMgpguQgyg5g+geQgdgPgVgfQgHgLgXguQgQgigQgNQgWgTgkAEQhCAGiGggIh3giIgvATQg7Aag7AjIiqBXQhzA+hQBGQhRBIgrCmQgVBTgFBFg");
	this.shape_5.setTransform(73.0926,44.8735);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hoja_5, new cjs.Rectangle(0,0,146.8,90.1), null);


(lib.hoja_4 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#558943").s().p("ACjD+IgOg/IgThHQgMgpgOgiQgMgigXgsIgUgnIhEhmIgYgdIhDhJQgVgVgQgRQgMgOgMgTIgNgWIgDgJIAEAIIAPAVQAHAIAUAUQAPAPAZAUIBKBFIAaAdIAyBBIAXAlIAWAoQAUAnAPAqQAPArAIAlIAQBJIAJBAIALB/g");
	this.shape.setTransform(102.425,57.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#558943").s().p("ABWCoIgUg3IgYg7QgLgZgSgjIgQgfIgSgcQgNgWgYgfQgWgdgMgSQgQgYgIgYQgPgoAIgjQACgLAEgJIADgGIgCAHIgDATQgDAhASAlQALAUAQAWIAlAsQAYAcAQAYIATAeIASAeQAQAdAOAjIALAgIAKAeQAJAbAHAeIAKAzQAFAZAFAwIADAcg");
	this.shape_1.setTransform(104.3222,44.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#558943").s().p("Ag9AcQAaggAcgUIAGgEIADgEIACAAIAJgCIACgBQADgCgKgFIgKgEIADAAIBOgHIgEADIhEAxIg7AnIgaARg");
	this.shape_2.setTransform(103.75,5.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#558943").s().p("AirBhIAfgbIgGAHQBFg2BRguIAugZIgFAUQBTg2BEgjQhDA7hhBFIgcAVIAGgbIiwBiIgdAPg");
	this.shape_3.setTransform(79.575,20.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#558943").s().p("AlCB3QAPgkAfggQAmgpA9gfQBGglBKgJQAbgFAygBIBGgGQAvgHBEgWQAZgIAzgUIAcgKIgaAOQgjATgmASQg9Acg4ALQgZAFgvAEQg1ADgVAEQhJAJhAAeQg+AbgmAjQgiAdgSAfIgKAUIgEAHg");
	this.shape_4.setTransform(33.575,41);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#558943").s().p("AkgBcIApiJIAOgoQAJgYAMgSQAQgWAXgLQAVgKAcgDQAQgCAfgBIAtgCIBTgFQBGgFBJgKQA7gIAlgHIAjgGIgiAKQgpAMg2AMQhGAQhIAJQgtAGgnACIguADQgeABgPACQgXADgRAIQgRAIgMAQQgLANgJAWIgPAmIgyCGQgeBNgTAvQANgyAXhOg");
	this.shape_5.setTransform(32.525,35.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#558943").s().p("AjrBDQB0gyBwgoQBDgaA8gTQA2gSA1gLIAqgHIA1gEIAHAAIhiAYQguAPg5AXIh+AvQhwAqh4AlIhiAdg");
	this.shape_6.setTransform(71.325,11.675);

	this.instance = new lib.Path_7_3();
	this.instance.setTransform(34.25,29.3,1,1,0,0,0,30.4,17.4);
	this.instance.alpha = 0.2188;
	this.instance.compositeOperation = "multiply";

	this.instance_1 = new lib.Path_8_3();
	this.instance_1.setTransform(40.05,28.7,1,1,0,0,0,24.4,7.8);
	this.instance_1.alpha = 0.4492;

	this.instance_2 = new lib.Path_9_2();
	this.instance_2.setTransform(71.35,17.2,1,1,0,0,0,12.4,4.7);
	this.instance_2.alpha = 0.4492;

	this.instance_3 = new lib.Path_10_2();
	this.instance_3.setTransform(87.9,9,1,1,0,0,0,10.8,4.5);
	this.instance_3.alpha = 0.4492;

	this.instance_4 = new lib.Path_11_2();
	this.instance_4.setTransform(97.3,42.35,1,1,0,0,0,22.1,34);
	this.instance_4.alpha = 0.5117;
	this.instance_4.compositeOperation = "multiply";

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5CAA41").s().p("AIIDgQhciyhMhUQhLhUglgnIgXgWQgSAPglAUQhKAmhaAWQggAIjhAnQiiAbgpAZQgrAcgyA5IgqAyQAPg8AWhDQAqiGAggmQAdgkAlgBIA2gBQAtgBAxgGQB4gPCEggQCCgfA1gbQBHgkBZgaQBxghAkAUQgoAhgnAmQhOBMAHAYQAIAgAEAlQAGAZAcAUQAfAXAqBbIA+CHQAiBBA8ClQgfhIguhag");
	this.shape_7.setTransform(60.65,38.6226);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hoja_4, new cjs.Rectangle(0,0,121.3,95.7), null);


(lib.hoja_3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Path_18();
	this.instance.setTransform(97.4,22.75,1,1,0,0,0,41.8,13.5);
	this.instance.alpha = 0.5117;
	this.instance.compositeOperation = "multiply";

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#558943").s().p("AGZBZQgTgIgVgGQgYgFgegEIhDgGQgigDgsgKQgpgKgqgOIhXgfIhUghQgsgQglgLQgqgMgggFQgjgGgggCQgzgCgtAFIglAEIAjgJQAwgKAygBQAkgBAhADQAgADAuALQAlAJAuAPIBWAgQA+AZAXAIQAjANAuANQAoAKAiAGIBDAMQAdAFAaAJQAVAIARAKIANAJIAQANg");
	this.shape.setTransform(103.25,28.7639);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#558943").s().p("AHcDCQgOAAgUgEQhAgKg0gpQgWgSgKgMQgOgPgPgVIgagpQgQgYgOgOQgiglgzgbQglgUhFgaQhPgegfgIQg6gRgvACQgYABgYAGQgSAFgYANQgeAQgnAhIiCBwIAgggIAmgnIAygzQAnglAfgSQAWgOAYgIQAYgIAcgDQAxgEBAARQApALBHAbQBEAZAqAYQA2AfAjAoQAQASAPAZIAYApQAXAmAeAcQAZAWAhARQAZAMAZAHQATAFAPACIALABg");
	this.shape_1.setTransform(100.05,19.4619);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#558943").s().p("AigEXQABgKADgKQAEgPAJgPQAJgRAQgSQAOgQAYgUIAugkQAbgXAQgVQAUgaASgeQAOgYAQgkIAcg6IAbg0QAPgdABgRQABgRgHgWQgFgPgHgOIgOgXIARAVQALAQAGAMQALAXAAAUQAAAWgMAeIgwByQgQAmgPAYQgRAggYAcQgVAYgcAVIgwAhQgaASgOANQgfAcgNAcQgFAKgCAJIgBAHg");
	this.shape_2.setTransform(16.15,43.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#558943").s().p("AjBAmIAKgIIAQgLIAXgMQANgGARgDQAQgFAUgDQAkgGAtADQAdABAzAFQAlACAagHQAWgFARgMIAJgIIADgDIgCAEIgHAKQgPARgWAJQgdAOgnABQgQABgYgBIgpgCQgygCgcABIgiADIgeAFQgLADgNAEIgRAHIgLAFIgEACg");
	this.shape_3.setTransform(45.925,9.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#558943").s().p("AlBEFIAOgfIALgUIAPgWIASgXQAQgTAegdIA2g1QAjgiAUgbQAQgSAlg1QAigvAVgZQAeghAkgYQA3gkBNgVQAmgKA4gKIAjgFIgiAJQg/ATgcAKQhLAdgwAiQghAZgaAfQgVAagfAsQgfAsgYAcQgXAbglAiQhOBBgcAdIgUAUIgQAUIgWAiIgPAfg");
	this.shape_4.setTransform(34.275,46.325);

	this.instance_1 = new lib.Path_6_3();
	this.instance_1.setTransform(47.7,22.5,1,1,0,0,0,18,16.1);
	this.instance_1.alpha = 0.2188;
	this.instance_1.compositeOperation = "multiply";

	this.instance_2 = new lib.Path_7_4();
	this.instance_2.setTransform(89.5,19.55,1,1,0,0,0,51.5,18.1);
	this.instance_2.alpha = 0.4688;
	this.instance_2.compositeOperation = "multiply";

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5CAA41").s().p("ArTEGIAhgoQAqgtAogZQAtgbA4hbQAxhOAZhJQATg0gPgkQgYgngKgcQgMgiA8gGQAegDAgADQA0AKBtgUQBWgQAhgOQBqgqBjgCQDXgECQCtQBvCFBHAzQjlg9hnghQh7gnhrgYQingog+ANQhVAShLAsQheA1gpBLQgmBFg3A9QhIBIgtAvQg4A8geBEQgPAjgEAWgALEgVQgQgIgTgOIAXAGQAbAHAFALQACAFgEAAQgEAAgOgHg");
	this.shape_5.setTransform(73.0917,41.6715);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.instance_2},{t:this.instance_1},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hoja_3, new cjs.Rectangle(0,0,148.8,81.4), null);


(lib.hoja_2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Path_19();
	this.instance.setTransform(26.2,61.5,1,1,0,0,0,19.4,47.5);
	this.instance.alpha = 0.5117;
	this.instance.compositeOperation = "multiply";

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#558943").s().p("AAIDcIgKgVQgLgUgCgIIgHgQIgGgTIgKgpIgGgwQgCgRABghQADgeAEgWIALguQALgfAFgKIAIgSIAHgPQAEgIAMgSQAFgJAJgKIAMgQIgSAmIgLAcIgMAjIgJAoIgIAsIgFAxIgBAvIABAYIACAWIAGApIAHAkIAHAcIANApg");
	this.shape.setTransform(8.655,111.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#558943").s().p("AAKJEQgKgSgHgNQgLgUgPgfQgSgsgJgaQgLgjgLg2QgJgxgDg4QgDg7AIg6IAFgeIAGgfQAGgcAKghIAjh2QAUhDAGgrQAEghAHhGQAGg8AGgfQAIgpAMggQADgKAJgSIAMgXQAQgXAGgGIAIgJIgHAKQgHAIgMAWIgKAXIgKAdQgKAigEAnQgFAigCA3QgFBPgDAaQgFAwgRBCQgLAngYBPIgQA8IgGAdIgFAeQgJA4ABA4QAAA1AHAyQAIA0AKAkQAIAhAOAmQALAgAKAUQAFAOAJASIAGALg");
	this.shape_1.setTransform(9.5702,77.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#558943").s().p("AigHFIAgheIAehsQAIggAEgbIAHg9QADgrgCgVIgDggIgEghIgOhKQgGgoACgjQAChAAWhMQAQg0AZhEQAFgNAKgPQAMgPAMgFQAIgDAJABQAIACAIAGQAKAJAEARIANAtQAHAVAKARQARAeAWAZQAQASAQALIAMAJIgNgIQgRgMgRgPQgYgYgTgdQgJgOgLgZIgQgtQgFgNgGgGQgIgGgJAEQgIAEgIAMQgHAKgEANQgaBRgKAnQgTBKgBA8QgCAnAGAgQADAYALAyQAGAkACAgQABAbgDAoIgJA/QgGAigHAbQgIAbgHAXIATggIApg8IgJAQIgbAuQgZAugVAxQgTAqgPAsg");
	this.shape_2.setTransform(26.7,45.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#558943").s().p("AnjFIQAGgTAKgTQALgUAZgjQAfgqALgfQAPgmAIg+QAHhNAJgrQAOhJAqg0QArg2BHgnQBJglBAgOQA+gPBHAAIAgACQASAAANACIAeAEIAdAGIAbAHIAaAHIAwASQApARAlAWIBAAuIAfAdIhFgyIgegRQgmgUgpgPIgvgOIgagGIgbgGIg5gHQgMgBgSAAIgfgBQhEADg7AOQg/APhDAjQhCAlgpAwQglAtgRBFQgJApgLBMQgKA/gSAoIgLAWIgMATIgZAhQgbAggMATQgOAUgEARIgDAKIgBAEg");
	this.shape_3.setTransform(65.625,45.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5CAA41").s().p("ApgIgQgVhNADgcIAChxQADhbAPguQASg4AZh/QAYh+AIhQQALh1AshYIAohVQAjhGAZgjQAYghAKAcIAaBQQAdA6ANAPQAXAaAegOQBEgeBlgWQChgkCaANQCWANB6BIQA+AlAfAhIh4AZQgXgbg1gfQhqg9iZgQQihgQhyAjQhAAThQA0QgtAdgdB8QgHAfgdC1QgLBFg9BOQhUBsgdA7QgvBegEB2QgCA6AIAoQgLgggLgmg");
	this.shape_4.setTransform(64.6313,62.0876);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hoja_2, new cjs.Rectangle(0,0,127.4,136.6), null);


(lib.hoja_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Path_20();
	this.instance.setTransform(46.35,34.1,1,1,0,0,0,6,19.7);
	this.instance.alpha = 0.5117;
	this.instance.compositeOperation = "multiply";

	this.instance_1 = new lib.Path_1_2();
	this.instance_1.setTransform(50.9,43.9,1,1,0,0,0,5.4,39.6);
	this.instance_1.alpha = 0.5117;
	this.instance_1.compositeOperation = "multiply";

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#558943").s().p("AiDEMICIkJQAqhOALgaIBNiqIgnCBIgQAyQgPApgjBDQgdA0gfAzIg1BRQgRAcgUAbQgGAKgFAEIgDADg");
	this.shape.setTransform(82.025,53.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#558943").s().p("AgEC/IgLgSQgMgQgPgJQgcgRgHgHQgMgLgOgUIgmg7QgYgigMgOQgYgggegkIgVgYIAXAVQAnAlAXAaIAnAuIAqA4QAOASALAIIAfAUQAVAMANASIAIAKIACAFIACACIABAAIAAgBIAGgNQB4jeBuivQhVC8h4DeIgkBDg");
	this.shape_1.setTransform(52.6,87.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#558943").s().p("AgWE+QgfgwgXgwQgBAJABAIIAJAzIhzjtIgBgBIgBABIAAAAIgRALIgGgOQgOgegJghQgGgSgDgSIgHglQgCgWAFgPQAFgPANgQIB0iFIAkgoQAMgLALgGQANgHAOgCQAMgBAjABIAsACQBvAFBEAEQhEADhvABIgsABQgeAAgOADQgVADgRATIgiAoIhwCHQgKAMgDALQgEAJADAQIAGAjIAIAiIAIAaIABgnIANAcIAAAAIBeDXIAEgJIAGgNIAFANQATAxAjBCIAVAnIgYglg");
	this.shape_2.setTransform(24.7192,39.18);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#558943").s().p("AClCrIALgTQAUgfAKgqQAFgXABgeQAAgcgJgfQgKgigSgZQgWgfgcgRQgOgJgPAAIgiAGQgsAIgaADQg6AHg9ABQgvAAgigCIgNgBQgFgCgDgEQgDgEADgCQgCACADADQADADAFABIAMAAIBQgIQA+gHA3gKIBDgOIATgEQALgCAJgBQALAAAMADQAMAEAJAFQAiAVAYAkQAUAeAJAmQAIAigDAgQgCAcgKAcQgOAngZAhIgUAWg");
	this.shape_3.setTransform(73.4717,17.6714);

	this.instance_2 = new lib.Path_6_4();
	this.instance_2.setTransform(69.55,10.85,1,1,0,0,0,21.7,6.5);
	this.instance_2.alpha = 0.4492;

	this.instance_3 = new lib.Path_7_5();
	this.instance_3.setTransform(71.65,25,1,1,0,0,0,19.8,7);
	this.instance_3.alpha = 0.4492;

	this.instance_4 = new lib.Path_8_4();
	this.instance_4.setTransform(68.15,36.7,1,1,0,0,0,17.2,3.5);
	this.instance_4.alpha = 0.4492;

	this.instance_5 = new lib.Path_9_3();
	this.instance_5.setTransform(67.1,51.6,1,1,0,0,0,14.9,7.6);
	this.instance_5.alpha = 0.4492;

	this.instance_6 = new lib.Path_10_3();
	this.instance_6.setTransform(64.3,69.45,1,1,0,0,0,9.7,13.8);
	this.instance_6.alpha = 0.4492;

	this.instance_7 = new lib.Path_11_3();
	this.instance_7.setTransform(41.75,70.3,1,1,0,0,0,3.9,15.9);
	this.instance_7.alpha = 0.5195;

	this.instance_8 = new lib.Path_12_1();
	this.instance_8.setTransform(36.5,66,1,1,0,0,0,7.4,12.2);
	this.instance_8.alpha = 0.5195;

	this.instance_9 = new lib.Path_13_1();
	this.instance_9.setTransform(37.9,52,1,1,0,0,0,3.2,4.7);
	this.instance_9.alpha = 0.5195;

	this.instance_10 = new lib.Path_14_1();
	this.instance_10.setTransform(33.15,55.7,1,1,0,0,0,7.9,11.7);
	this.instance_10.alpha = 0.5195;

	this.instance_11 = new lib.Path_15_1();
	this.instance_11.setTransform(26.4,50.75,1,1,0,0,0,7.4,11.2);
	this.instance_11.alpha = 0.5195;

	this.instance_12 = new lib.Path_16_1();
	this.instance_12.setTransform(31.2,34.5,1,1,0,0,0,7.8,4.1);
	this.instance_12.alpha = 0.5195;

	this.instance_13 = new lib.Path_17_1();
	this.instance_13.setTransform(24,22.95,1,1,0,0,0,19.1,5.7);
	this.instance_13.alpha = 0.5195;

	this.instance_14 = new lib.Path_18_1();
	this.instance_14.setTransform(47.25,52.05,1,1,0,0,0,40.1,45.9);
	this.instance_14.alpha = 0.2188;
	this.instance_14.compositeOperation = "multiply";

	this.instance_15 = new lib.Path_19_1();
	this.instance_15.setTransform(51.85,11.8,1,1,0,0,0,43.8,10.3);
	this.instance_15.alpha = 0.2188;
	this.instance_15.compositeOperation = "multiply";

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5CAA41").s().p("AAwISQgGgDgXgTQgVgShGhXQhEhWgygnQg4grghhYIgVhPIgUAyQgyhpgehFIgohGQgTghgGhDQgGhBArgvQANgOAhgfQAegeAWghQAshCByADQA/ABBxARQA7ADCXgVQBMgKBAgMIAtAqQAvA4ANBIQANBMgIAfQgFAWgeA9QghBPghBHQgqBXgRARQgPAPhDB+QhOCVgeA3QgoBXgKALQgEAGgGAAIgGgCg");
	this.shape_4.setTransform(49.0258,53.8279);

	this.instance_16 = new lib.Path_21();
	this.instance_16.setTransform(70.25,59.2,1,1,0,0,0,5.5,34.9);
	this.instance_16.alpha = 0.5117;
	this.instance_16.compositeOperation = "multiply";

	this.instance_17 = new lib.Path_22();
	this.instance_17.setTransform(54.05,43.1,1,1,0,0,0,9.1,17.6);
	this.instance_17.alpha = 0.4492;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.shape_4},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hoja_1, new cjs.Rectangle(0,0,96.7,111.2), null);


(lib.flor_petalos = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Path_16();
	this.instance.setTransform(123.55,221.1,1,1,0,0,0,39.9,23.6);
	this.instance.alpha = 0.5117;
	this.instance.compositeOperation = "multiply";

	this.instance_1 = new lib.Path_1_1();
	this.instance_1.setTransform(131.6,198.7,1,1,0,0,0,17.8,19.2);
	this.instance_1.compositeOperation = "multiply";

	this.instance_2 = new lib.Path_2_4();
	this.instance_2.setTransform(155.2,134.1,1,1,0,0,0,101,86.2);
	this.instance_2.alpha = 0.5391;
	this.instance_2.compositeOperation = "multiply";

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFB92A").s().p("AiOE4QgdiPAAh0QACg9AGg0QAIgyANgvQALgoAQglQAQgkALgTQAKgSAKgPIAIgLIgYAuQgKAUgNAkQgNAkgJApQgJAtgGAzQgEA1ABA6QACBTARBkIAJgkQAQg5Adg5QAYguAigvQAaglAhglQAggmA9g+IAkgjIghAmQg8BIgaAhQggAqgWAiQggAygUArQgcA4gNA3QgRA9ABA9IAAACIgbADg");
	this.shape.setTransform(98.3496,240.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFB92A").s().p("AgxAuQAKggAVgbQAUgcAdgSQAPgKAKgEIgPAYIgmA0IgoAyIgSAVQABgLAFgRg");
	this.shape_1.setTransform(92.025,207.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFB92A").s().p("AgWCjIgHgdIgVhpQgLgwgOgzIgahdIAMAYQAMAZAPAnQAUAxAOAxIAQA8IAEAQIABACIACgFIALgdIATg5QAKgeAKgWQAJgVAPgXIATgiQAIgPABgNIABgSIgBgHIACAGQADAMAAAIQAAAOgGAQQgEAPgLAXQgNAagGASIgPAzQgIAkgIAYQgEAOgIARIgbAyIgJANIgCAEg");
	this.shape_2.setTransform(152.525,237.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFB92A").s().p("AgJAKQgBgBAEgGIAEgEIAFgFQAGgEABABQABACgJAKQgIAHgCAAIgBAAg");
	this.shape_3.setTransform(148.3257,235.0263);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFB92A").s().p("AgQBUIAHgmIADgWIAIiOIAOAiQAFAVACATIACAXQAAANgCAMQgBANgDAMQgCAJgFAOQgGATgJASIgVAeg");
	this.shape_4.setTransform(150.325,202.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFB92A").s().p("AA5BJQgJgRgLgUIgOgVIgrg9QgRgWgKgKIgbgdIAkATQARAKASAQIARATIASAWIAaAvQAHAVAFAVIADARIACAXg");
	this.shape_5.setTransform(141.9,205.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFB92A").s().p("AAADlQgrgDgegTQgOgKgPgUQgJgOgKgWQgRglgLgiQgLgigHgjQgGgZgEgmQgDgpAAgPIABguQABgXACgMIAEgdIACBAQABAYACAVIAJA2QAFAeAIAfQAJAgAMAhQAOAoAOAcQATArAUANQAWAQAkAFQAdADAegIQAbgHAWgNQANgHAXgTQANgOAJgMIAOgaIgFAQIgGAMQgIAQgLANQgRAVgRAMQgZARgaAJQgeAKgdAAIgHAAg");
	this.shape_6.setTransform(131.7688,202.634);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFB92A").s().p("AhDATQATgVAVgWQAUgVASgQIAlgeQATgOANgIIAagOIARgGIAGgDIgFAEIgQAKIgXARQgMAJgQAQIghAgIgiAoIglAsIgSAWIgBACIAAAAIAAAAIABAAIAEgBQAegMAVgHQApgOAugKQAfgIAdgEIAWgCIgVAHQgYAGghANQgmANgtATQgRAHggAQIhrA2g");
	this.shape_7.setTransform(51.325,186.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFB92A").s().p("Ag+BPIAIgFIATgLIAMgKIANgLIAMgNIAYgfIAKgQIAIgPIAGgPIAIgeIADAJIABAKIABAOIgBARQgBAGgEANIgIATQgEAJgJALQgKAMgGAFQgGAGgLAHIgQAKIgQAFIgOACIgKACg");
	this.shape_8.setTransform(107.375,193.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFB92A").s().p("Ak1CyIALgkIASgvQAfhGAmgqQAeghAfgTIAlgUIAogQQAqgNAngGIBNgMQArgFAZgFIBUgUIAVgIIATgJIAqgZIgnAfIgSALIguAVIgcAJIgfAJQgZAGgsAIIhLAPQgfAFguAOIgmAPIgiARQgeASgcAcQgnAmgjBAIgWAsIgcBAIAJgfg");
	this.shape_9.setTransform(78.175,216.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFB92A").s().p("AiZD6QABglADgkQAFg5AJgxQAGgfAJgfQALgkAOgcQASgiASgZQAYghARgRIAVgVIAVgSIAVgRIAUgNIAkgUIA2gWIgXANIgaAQIgQALIgRAOIgSAPIgTAQIgTAUQgNANgFAIQgOARgWAgQgPAWgSAkQgLAVgOAmQgJAbgIAgQgKAjgOBFIgSBgg");
	this.shape_10.setTransform(62.425,209.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFB92A").s().p("AgFBjQgHgKgEgMQgHgQgBgUQgCgWAGgWQAIgfAWgqIAPgdIAAAJIgCAYQgDASgOA4QgKArABAdQAAANACAKIABAJIgFgHg");
	this.shape_11.setTransform(113.16,210.075);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFB92A").s().p("Ag8AMQAXgYAcgLQARgHARgBQAPAAAOAEQAKADAIAFIAFAEIgHAAQgIAAgJACQgWADgfALIhMAfg");
	this.shape_12.setTransform(31.375,88.0722);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFB92A").s().p("ABHAzIgPgQQgEgFgFgCQgEgDgJgCIgRgHIgRgIQgggPgZgZIgOgQIgFgGIAbAKIA8AdIAhARQAJAFAGAGQAFAGAEAJIAHAUIACAHIgGgEg");
	this.shape_13.setTransform(54.525,12.575);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFB92A").s().p("AhbAuIAFgyIAPhXIAgAhIADACIABACIAAAAIA3AsQAeAVAQASIAPASIAJAQIAEAKIACADIgDgDIgHgIIgMgLIgRgPQgKgIgngXQgqgZgTgRIgBAAIAAAAIgBgBIAAgBIgBAAIAAABIgBACIgXBRQgIAcgHAQg");
	this.shape_14.setTransform(70.65,11.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFB92A").s().p("Ag3GWIAIg7QANhXAChFQADhPgKhBQgJg+gbg+IgYg3QgNgggHgUQgdhRgHhUQgCgbAAgTIAAgQIABAQIAFAtQANBVAfBMQAIATAPAfIAbA2QAeBBALA/QANBHgCBOIgDAzIAhhwQAhhsAnhtIAfhSIANgiQAHgRADgLQAGgWgBgTIgCgOIABAEIACAKQACAVgEAVQgDANgQAyIgbBUQgbBYgkCDIhKETg");
	this.shape_15.setTransform(128.1058,248.875);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFB92A").s().p("ABDA3QgvgXgdgQQgXgNgRgOIgQgPQgIgIgFgGQgEgEgFgJQgEgFgCgEIgEgJIAQAMIAMAJQAGAEAJAFIA6AiQAuAZAZAaIALALIAMASg");
	this.shape_16.setTransform(104.475,202.95);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFB92A").s().p("AErCMIiigiQhrgZhXgaQhegcg+gYQg5gWgqgcQgPgKgJgIIgIgGIAJAFQAHAFATAKQAqAXA7ATQA3AQBnAaQBEARB9AdICWAjIAUAEIAGgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAgBQADgEgCgLQgBgJgEgKIgUglQgYgqgPgVQgdgsgkgtIgagfIAdAcQAsAuAdAmQAYAfAUAfIAXAlQAGANACAKQADASgEAMQgEAJgIAFQgIAFgJAAIgDAAIgMgCg");
	this.shape_17.setTransform(253.285,213.805);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFB92A").s().p("ADEFBIgJgTIgGgKQgOgUgQgSQgRgRgOgMIhSg8IA6AhIAeAVQAPAKASARQAVAUANARIAIALIAIAQIAAgBIACggQABgIgDgeQgDgbgDgNQgDgNgIgbIghhTIgVgpQgTgkgog/Qghg0gbgnQgigvgbgdQgcgfgigaQgVgRgmgVIgxgVQgNgDgFgHQgCgEAAgEQABgEADgBQAEgEAFACIABACIgBgCQgDgCgFAEQgDADAAACQAAADACAEQAEAFANACIA0ARQAkAPAbATQAlAaAfAeQAgAhAhAqQAbAjAlA3QAlA5AYAsIAWArIAhBWQAIAeACANQACAKAEAhQABAbgBANQAAAKgCAKIgOBJIgBACIgBACg");
	this.shape_18.setTransform(235.0458,240.1167);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFB92A").s().p("ADiFWQgIgDgGgGIgHgKQgHgKgGgHQgMgQgPgPQgngogSgVQgbgegXgkQgPgagWgrIghhBQgTgigQgXQgkg1gygeQgTgLgdgNIgsgVQgogVgYgYQgTgTgJgVIgFgMIAGALQAKAUAUASQAZAWAoASIAsASQAeAMAUALQA4AeAnA2QASAYAUAiIAjBBQAcAyAKAPQAZAmAXAYIA6A8IAdAhQAIAJAFAJIAEAFIABACIAEADQAFACAFgCIAEgDIABgCIABgEIAQgoQATg0AGgZQAHgkgFgoQgGgigRgkQgUgtg0hKIhJhkQglgwgdgeQgagcgegaQgQgOgVgPIgPgKIAPAJQATALAVAQQAcAUAfAeQAhAgAlAsQAdAhAxBBQA3BKAXAuQASAkAIAoQAIAqgIArQgGAegUAzIgPAoIgCAHIgFAHQgEAGgJAEQgIAFgJAAQgHAAgIgEg");
	this.shape_19.setTransform(209.8439,233.1633);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFB92A").s().p("AAnC3QhXAAhagSQhJgOhPgXQhEgUg1gUQgggLg7gWIhMgfIBOAaIBcAeQA6ASBAARQBTAVBEALQBcAOBSgBQBfgBBggZQAdgIBGgWQBBgUAmgKIA2gLIAbgDIADAAIAAgBIgBAAIgxgoQhFg0higrQhMghhbgXQhMgShKgKQhfgMiAgFIhSgDIBSgCQB7gBBlAKQBQAHBJAQQBaATBSAhQBkAqBKA3IAVAOIAnAiIAlAjIhYAJQgZADgbAHQgjAJhDAUQhDAVghAIQhfAYhfAAIgIAAg");
	this.shape_20.setTransform(239.775,189.8472);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFB92A").s().p("ABYDNIgDgDIAAgDIAEgDQAAgBABAAQAAAAAAABQABAAAAAAQAAAAABAAIgCAAQgBAAgBAAQAAAAgBABQAAAAAAABQgBAAAAABQgDADAFACQAFACANgFIAZgJQBOgfBKgnQAwgZA0ggQAogZANgKQAegXAGgYQAIgdgUgdQgSgagigUQgbgQgpgOQgtgOgfgFQhAgLhaAEQhAADhQAMQiSAWhiAXQhaAVhHAZQgYAIgTAHIgPAGIA5gZQBFgeBagZQBwgfCDgYQBXgPA7gDQBdgGBEAMQAlAGArAOQAtARAcARQAmAXAUAfQANASADAUQAFAUgHAUQgEARgPARQgIAKgSAOQgMAJgsAZQgvAbg5AbQhOAkhPAZIgZAHQgJADgFAAIgFgBg");
	this.shape_21.setTransform(250.392,155.3948);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFB92A").s().p("AF/AkIgYgNIgbgOQghgPgfgMQgmgNgngJQgrgJgtgEQglgDg5ADQguACgwAGQg4AIggAHQgwALgfAIQghAJgiALIg3AUIgpAQIgiAQIAIgFIAYgOQAQgKAXgLQAZgNAdgLQAlgQAegKQAfgMAwgLQAngLAygIQAqgGA2gEQA5gCAqAEQArAEAvANQAmAKAoARQAeAMAjAUIAaAQIAXAQIAjAcIAbAag");
	this.shape_22.setTransform(232.275,127.5304);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFB92A").s().p("AAXBEQANgOAKgQQAOgYAHgYIADgPIACgQQABgGgDgBQgCgCgDAAQgIAAgWAIIiEAzIALgJQAMgKATgMQAXgQAbgOIAvgVQANgFAKAAQAFABAIACQAHADAHAHQAEAFACAIIABANIgFATIgFAQQgMAdgUAVQgNANgSANIgNAHg");
	this.shape_23.setTransform(254.95,114.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFB92A").s().p("AA6BuIAOgNQAZgXASgbQALgPAOgXIALgWQAFgLADgNQADgNgBgLQgCgNgHgFQgHgGgOgBIgeABQg+ADg4AOQgyAMgsASQgVAIgNAIQgOAHgKAIQgIAHgEAFIgEAFIADgFQAEgIAGgHQAIgKAOgKQANgJAVgLQAsgZAxgPQA8gTA+gDIAigBQAYACANAMQAPAOABAWQABAPgFARQgFAQgHAMQgIAMgGAJQgMASgSAUQgZAbgbASIgPAKIgGADg");
	this.shape_24.setTransform(240.1911,103.6417);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFB92A").s().p("Ah/BBIALgTQAGgMAJgKQAGgJANgPIAMgKIANgMQAIgIAUgOIAfgSIAQgHIAPgGIAdgJQANgDANgCIAWgCIAeAAIgNAEQgJACgGADIgUAHIgYAJIgnAUIgPAHIgbASIgcAUIgNAJIgMAJIhABBIgJAKg");
	this.shape_25.setTransform(199.775,72.375);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFB92A").s().p("AAEEpQA3gyBAhNIBNheQA0hCAcgsQArhFALhEQAHgpgFgkQgDgUgGgSQgEgIgEgFQgEgFgHgDIgSgDIgogCIgUACQgkACgoAMQg/AUhKAqQhwBAhjBTQhAA2g/BBIggAjIgLAMIAogyQA3hBBCg+QBjhaBthCQBNguBAgUQAogOAqgEIBBABIAYAEQAOAEAJAMQAHAJAFANQAIAYACATQAGAngIAvQgNBIgvBJQgeAtg4BAIhQBbQhFBLg6AvQgQAOgVAPIgOAJg");
	this.shape_26.setTransform(204.7163,93);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFB92A").s().p("AgLBsQABgVAAgbIgCjVIAMAtQAPA4ABA0IAAAgIgDAeQgEAcgIAVIgRArg");
	this.shape_27.setTransform(196.05,55.975);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFB92A").s().p("AgdAiQALgYALgOQAJgPAUgUIAPgNIgDAUQgGAZgNARQgOAUgTANIgSAKIAHgTg");
	this.shape_28.setTransform(157.775,80.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFB92A").s().p("AhhCcQA7hMAthKQAhgzATgjQAcgzAOgVQAQgcAQgTIANgQIgJASQgJARgPAiIgiBMQgVAxgbApQgyBRhEBAQgPAPgbAXIgQANg");
	this.shape_29.setTransform(169.725,72.375);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFB92A").s().p("Ah8HfQANgRASgbIAng8QAOgWAdg1IAphYQAOgeAahIIAghvIAMg5IAJg5IAHhsQABgWgCgdIgDgvIgFgtQgEgZgEgPIgHglQgFgUgFgLQgNgfgWgEQgSgFgNAKIgGAGIgCACIABgCIAGgHQANgLAUADQANACAKAJQALAIAIAQQAGANAGATIALAlQAFAQAFAZIAIAsQAIBIAAAdIgEBvIgIA6IgbB1IgTA4QgYA/gUAnIgvBZQgmA9gJAMIgrA5QgVAagOAPIgfAig");
	this.shape_30.setTransform(180.175,52.3929);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFB92A").s().p("AjmF7QAFg8AGgwQADgYAIgyQAKg1AIggQANg0ANgoQATg0ATgrQAZgzAZgnQAWgjAkgrQAcgiAfgcIAegaIAegVQAcgUAZgNIAXgLIA5gWIg2AcIgVANQggAUgSAQIgbAXIgcAaQggAhgWAfQgiArgUAiQgZAqgWAuQgVAtgRAvQgNAhgQA4QgGASgPBBIgsDag");
	this.shape_31.setTransform(161.3,42.475);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFB92A").s().p("ACEBjQgCgsgCgRQgGgwgSgiQgNgXgSgPQgKgIgJgDQgFgBgEABQgEAAgDADIgqAlQgcAYgMALIghAhQgNAPgNASQgKAPgIAOIgHAMIgNAgIABgGIADgQIAIgaQAHgUAHgNQALgUAMgQQAMgPAUgXQALgNAbgaIAfgdIANgKQAJgHAKgBQAJgCALADQAPAEAOANQAWAUAMAcQASAnAAA0QgBAWgFAoIgEAXg");
	this.shape_32.setTransform(137.75,24.81);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFB92A").s().p("AC+ErQgIgvgPhBQgIgngKgmQgOg3gKggQgRg1gSgmQgWgtgigrQg/hShZgxIgpgUIgIgDIgDgCIgBAAIgBADIAAABIgBABQgGAlgEApQgEA4ADA6IADAqIgHgqQgJgzABhAQAAgnAFgoIAEgbIAAgCIAAgBIABAAIBPAfQBhAxBCBWQAjAtAXAxQASAoAQA3QAJAhALA5IANBOQAIA4AFA6IADAqg");
	this.shape_33.setTransform(109.3236,34.275);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFB92A").s().p("AD1FEIgDgdQgDgSgDgOIgHgjIgKgmQgDgNgXhEIgRgrIgrhXIg9hiIg0hDIgegjQgugvgPgNIg5gwQgOgLgkgYIhLgtIA5AZIAWAMQApAXANAJIAeAVIAgAYQARANAvAtIAhAiIAvA6IAtBBIA7BxIAJAXIAQAtQATBDADASIAIAnIAEAkQACALADAzIgCBXg");
	this.shape_34.setTransform(87.575,46.475);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFB92A").s().p("ABXEEQgagWgYgWQgogogaghQgSgZgOgaQgPgdgKgdQgKgigFgcQgEghAAgaQAAgZACgdQADgZADgUQADgSAEgUIAOgzIgICHIACA0QACAXAFAgQAFAcAKAeQAKAdAMAaQAMAZAQAYQAWAjAjArIA7BFg");
	this.shape_35.setTransform(70.8208,32.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFB92A").s().p("AgqDBIgVgqIgVg2QgIgYgMgoQgIgegHgpQgIgugBghQgDgpABgmIACgdIABgHIADgIQAGgIAIgBIAIgBIAYACQAgAHAhAQQAXAMAaASIBgA9IgIgCQgGgCgPgHIhKgnQgdgPgVgJQghgOgcgCIgIgBIgIAAIgEAAIgBAAIAAABIAAABIAAAbQgBAfADAvQAAASAIA6QAFAoAHAdQAHAhAIAfQAGAWALAgQAFAVAKAYIAZA9g");
	this.shape_36.setTransform(45.85,28.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFB92A").s().p("ABlEBIACgRIAAgQQgBgagHgYQgOgxglg1QgOgTg1hDQhUhpgggqQgtg8gXgwQgKgUgEgMIgEgLIAFALIARAeQAZAsAyA5IB7CNQA1A/ARAXQAqA5APA0QAIAdABAdIgBATIAAAAIAAABIAAAAIADgCIAFgEQAUgTAMgPQAfgnAEgnQADgfgPguIgahBIgyiBIA9B8IAeBAQATAygCAjQgCAugiAsQgMARgWAVIgHAHIg9Ayg");
	this.shape_37.setTransform(178.3093,230.525);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFB92A").s().p("AB6DoIAEgXIABgXIAAgMIgCgMIgEgZIgHgZIgJgZIgMgZIgOgZQgWglgegiQgTgVgngnIhohkIglgpQgOgRgLgRIgUgeIAGAHIARAVIAdAdIAoAmQAeAbBQBCQAkAgAZAcQAhAjAYAnIAPAaIAMAcIAKAbIAGAcIAEAcIABANIgBAIIAqhJQAHgLAIgTQAFgOABgMQABgLgDgJQgCgHgDgFIgCgDIADADQAFAHABAEQAEAIABANQAAALgEARQgEAQgIARIhaC7g");
	this.shape_38.setTransform(156.6778,226.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFB92A").s().p("AAYBtQgXgKgagZIgpgmQgVgUgRgOQglgcgpgcIhig5IBiABIA0gBIAYgCQAJgCAKABIABAAIABAAQARACASAMIATAOQANAKAIAFQARALAkANQAjAOAgAPQAiARAkAWIAmAbQAbAWAkAfIhIgIIgsgCQgTABgRAEIgmAOQgUAGgNAAQgQAAgSgHgAhzhtIgPACIg0AGIgrAEIA1AbQAuAcAjAbQAZASARAPIApAlQAYAVASAIQAMAEAMAAQAJAAAQgEIAngOQATgFAYgBIAgABIABABIADAAIgCgCIgggYQgdgVglgVQgdgQgigPQgmgRgPgNIgVgRIgSgPQgQgMgQgEIgJgBIgUADg");
	this.shape_39.setTransform(133.9,182.7412);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFB92A").s().p("ABGBdQggAAgkgLQgWgGgtgSIg5gXIgbgKIgbgHIgZgFIgNgBIgXABQgGABgDABIgFADIgEAKIgMAbIgEgfQgBgIAGgIQACgDAEgDQAhg6AXglIgNAhIgXA2IAHgBIAhgBQATABAKACIAdAGIAdAJIA7AWQAsASAUAHQAfAKAfADQA4AGAzgOQAWgFASgIQAVgJAIgFIAYgOIgVASQgVAOgHAEQgUALgUAHQgxATg0AAIgMgBg");
	this.shape_40.setTransform(87.5929,177.3636);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFB92A").s().p("AhTBpIAIgWIANgkIAJgWIAKgWQASggAVgYQAHgKANgLIAKgIIALgHQAIgFALgFIAPgFIAOgDIgMAHIgMAJIgQANIgQASIgQAWQgOAVgRAgIgTAnIgDADIgDAEIAAABIAHgBIACAAIAEgBQANgDAPAAIAQACIAFABIgVAEQgJACgPAHIgWALIgjAYg");
	this.shape_41.setTransform(31.8,145.725);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFB92A").s().p("ADhDCQABgGgBgNQgBgMgFgPQgHgSgLgPQgNgSgSgPQgTgSgYgMIg0gdQgmgVgTgMQgbgUgVgbQgXgigMgOQgbgfgzgaQgXgMgngQIgYgJIAZAFQAkAIAfALQA3AUAiAjQAJAJALAOIATAYQARAWAaASQASANAkAUQAmAWAOAJQAYAQATAVQARARAMAXQALAUAEARQADAQgBAOQgBANgCAGIgCAGg");
	this.shape_42.setTransform(84.0111,136.25);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFB92A").s().p("AlJDJQgsgBglgNQgNgEgIgHQgLgKAAgOQAAgJAEgNIAHgRQAYhAAlg5QA2hTBLhBQAXgTATgOIAPgLIgPAMQgSAPgVAUQhIBFgwBTQglBAgSA4QgJAaAAAGQABAGAEAEQAFAEAJACQAhALAqAAQBFAABcgjIBUgjQA0gVAjgMQBYgdBiADQBWACBVAdIAmAPIALAEIAAAAIADACIABABIABAAIAAgBIgBgEIAAgBIgKgxQgIgjgPgdQgQgfgTgTQgTgTgbgPQgSgKgdgNQg9gagQgJQgWgLgWgSIgOgMIAOALQAVAPAZALQALAGBDAZQAbAKAWALQAeAQAUASQAXAUASAhQAOAaAMAoIAUBcIABAEIg0gXIglgNQhSgahTgBQhagBhXAbQgfALg2AWIhUAhQhcAihIAAIgIAAg");
	this.shape_43.setTransform(67.625,158.0803);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFB92A").s().p("AFgDQIgzgGIhCgNQgvgLghgLQglgLg0gVIgvgUIgugXQgxgYgygcIh/hMQgmgYgTgHQgNgFgPgDIgDAAIgWABIggAFIACgDIABgCIAkgpIARgPQAWgSAXgOQAUgMAXgKQAUgIASgFIARgEIAOgDIAYgEIAUgBIhJASQgUAJgQAHQgUAKgTAOQgYAQgRARIgOAPIgFAGIgBABIABAAIAFAAIAGAAQAOABATAGQAZAJAlAWIB/BKQAtAaA0AbIAuAYIAuAVQAoASAuASQAnAPAlALIAiAJIAfAIIAyAKIArAHg");
	this.shape_44.setTransform(39.6,124.975);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFB92A").s().p("ADUCiQhggKg+gJQhygShLgeQgwgUgrgdQgqgdggggQgQgQgOgRIgbgkIApgiQAQgLAPgIQAvgaA3gKIAdgDIAKgBIgKACQgMACgQAFQgzAOgtAdIgcAUIgVASIgEAFIABACIADADIANAPQANAOARARQAhAfAnAYQAoAZAvAUQBFAcByAXICcAdQBZARA3AMQg4gFhagLg");
	this.shape_45.setTransform(51.775,103.925);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFB92A").s().p("AE5E+Qh0g/hRguQhag1gqgbQhRg0hCgyIglgeIgkgjIgggnIgfgoQgZgfgngzIgog1QgGgIgCgHQgHgQACgSQADgRALgOQALgOAQgGQAPgFATACIAaAFQAyAJA0ANQBoAZBVAlQAsAUAmAWIAlAYIASANIAQANQA2ArA7BBQAmArAqA5QAhAwAVAgQAcAtANAbQgPgagegrQgYgjghgrQgrg1gogqQiAiGiJg3QhXgihjgYQg3gMgugIIgagFQgKgBgJADQgJADgGAIQgHAJgBAJQgCALAEAIIAFAJICFCwIAfAmIAhAiQAPAOAVAPQBAAzBPA2QAsAeBVA2QBMAwBzBFIBGArg");
	this.shape_46.setTransform(47.7671,78.9359);

	this.instance_3 = new lib.Path_3_1();
	this.instance_3.setTransform(216.25,222.75,1,1,0,0,0,63.6,53.8);
	this.instance_3.compositeOperation = "multiply";

	this.instance_4 = new lib.Path_4_1();
	this.instance_4.setTransform(113,229.7,1,1,0,0,0,32.1,32.5);
	this.instance_4.compositeOperation = "multiply";

	this.instance_5 = new lib.Path_5_1();
	this.instance_5.setTransform(141.9,201.4,1,1,0,0,0,29.2,21.6);
	this.instance_5.compositeOperation = "multiply";

	this.instance_6 = new lib.Path_6_1();
	this.instance_6.setTransform(110.4,50,1,1,0,0,0,19.7,46);
	this.instance_6.compositeOperation = "multiply";

	this.instance_7 = new lib.Path_7_1();
	this.instance_7.setTransform(64,106.25,1,1,0,0,0,30.9,16.7);
	this.instance_7.compositeOperation = "multiply";

	this.instance_8 = new lib.Path_8_1();
	this.instance_8.setTransform(68.5,131.9,1,1,0,0,0,27.1,11.5);
	this.instance_8.compositeOperation = "multiply";

	this.instance_9 = new lib.Path_9();
	this.instance_9.setTransform(66.85,159.6,1,1,0,0,0,39.2,14.3);
	this.instance_9.compositeOperation = "multiply";

	this.instance_10 = new lib.Path_10();
	this.instance_10.setTransform(67.85,60.4,1,1,0,0,0,34.1,56.6);
	this.instance_10.compositeOperation = "multiply";

	this.instance_11 = new lib.Path_11();
	this.instance_11.setTransform(85.85,53.15,1,1,0,0,0,28.1,51);
	this.instance_11.compositeOperation = "multiply";

	this.instance_12 = new lib.Path_12();
	this.instance_12.setTransform(52.9,91.25,1,1,0,0,0,46.7,46.1);
	this.instance_12.compositeOperation = "multiply";

	this.instance_13 = new lib.Path_13();
	this.instance_13.setTransform(60.75,116.05,1,1,0,0,0,43.5,31.9);
	this.instance_13.compositeOperation = "multiply";

	this.instance_14 = new lib.Path_14();
	this.instance_14.setTransform(55.3,139.55,1,1,0,0,0,54.4,35.1);
	this.instance_14.compositeOperation = "multiply";

	this.instance_15 = new lib.Path_15();
	this.instance_15.setTransform(81.95,202.25,1,1,0,0,0,34.9,26.9);
	this.instance_15.compositeOperation = "multiply";

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.rf(["#FFB228","#FFFE3C","#FFE049"],[0,0.694,1],0,0,0,0,0,145).s().p("Aj2TVQAEhwhEilQgWgzgagzIgWgoQgaAgiGCAQhTBOgYCHQgLBEAFA0QgPgogNhAQgZh+ANh1QAMh1A+iIIA7hyQgmAIg6ARQhzAfhhAmQhhAlgyBtQgQAhgKAmQgEASgCALQgDgKABgZQABgxAVhMQAVhLBPh/QAnhAAjgwIkVBeID8kVQhLAlh/AoQhPAZg3glQgRgLgNgRIgJgNIBkjJIhrAOICFjBIiMhCQghgbgsgeQhXg9gygRQBwhyBsAZIAMADIgFgEQhPg4AAghQABghBqgrQA1gWA1gPQgmggg1gvQhohfhHhNQhZhiAagaQAdgdC7AsQCNAgB7BMIh8hzQgWhtgThsQgmjbANgCQANgBCAA+IB9A/IABiIIEtEBIgjkgIAzAUQA9AcA2AuQA3AuA9BzQAfA5AUAwIBFhfQBPhmAugdQAtgdAjBpQASA0AHA6IBKhvQBQh1AhgZQA3gpAsgMQBAgRAfAsQAbAmAGCdQAIDDAFAeQAHAmgLCCQgEAqAFANQAHARAXgNQAqgaA1gGQAbgEASACICGg8IAXgBQAbABAYAHQBLAZAEBZQAEBVhMB6QgkA8gZAgQAVgND8hKQBYgYhPB4QgYAlgmAwIgiAoIAmgJQA0gQBGgcQAmgQgGASQgFALggAnQhJBYAgAAQApAABKBCQAkAhAdAiICTAvQBjAeACA2QACAmgyA5QgcAfi9BZQiUBGAzgKQBIgOCOB0QA1ArAeAjQAeAkgUgDQghgDheASIhWATIAgAsQAqA3AuA2QA3BBgLATQgLAThQgeQhDgZjsguIjggqIBcBnQBnB9A7BwQA+B4gHBkQgDAkgLABQgMAAgJgrQgRhLhGg8IhDgtIguCnQgxgvg3hBQhwiCgmhcQglhcg7gqQgTgNgSgGIgPgFIASBUQATBjAEBLQAFBLgtAoQgOANgSAHIgOAFQgCAHgBgEQgCgJAFg2QAEg2g7hYIg7hOIhXDPQgDATgCABQgDADAIhUQAJhSgshDQgNgVgRgRIgPgNIiED4IgokRIi7Jkg");
	this.shape_47.setTransform(151.1288,141.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.flor_petalos, new cjs.Rectangle(-1.1,0,301.3,290.1), null);


(lib.girasol_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_199 = function() {
		this.stop();
		this.parent.gotoAndStop("textos");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(199).call(this.frame_199).wait(1));

	// semillas
	this.instance = new lib.semillas();
	this.instance.setTransform(107.55,73.95,0.6423,0.6423,-2.4632,0,0,67.3,64);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(134).to({_off:false,regX:68.1,regY:65.1,scaleX:0.0499,scaleY:0.0499,rotation:0,x:97.3,y:121.9},0).to({regX:67.7,regY:64.2,scaleX:0.1634,scaleY:0.1634,x:97.05,y:106.5},3).to({regX:68.3,regY:65,scaleX:0.2858,scaleY:0.3074,skewX:-10.3784,skewY:-9.4115,x:98.8,y:97.05},15).to({regX:67.2,regY:64,scaleX:0.5901,scaleY:0.5901,rotation:-4.4414,skewX:0,skewY:0,x:106.35,y:77.6},29).to({regX:67.3,rotation:-3.5119,x:109.05,y:76.15},8).to({scaleX:0.6423,scaleY:0.6423,rotation:-2.4632,x:107.55,y:73.95},9).wait(1));

	// flor_petalos
	this.instance_1 = new lib.flor_petalos();
	this.instance_1.setTransform(108.1,80.65,0.5221,0.5219,0,1.4491,0.134,149.9,145.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(137).to({_off:false,regX:150.3,regY:145.3,scaleX:0.0795,scaleY:0.0795,skewX:0,skewY:0,x:97.2,y:107.85},0).to({regX:154.1,regY:149.6,scaleX:0.1702,scaleY:0.1695,skewX:5.9015,skewY:6.5268,x:98.95,y:99.55},15).to({regX:149.8,regY:145.3,scaleX:0.404,scaleY:0.404,rotation:-0.251,skewX:0,skewY:0,x:108,y:85.5},29).to({regX:149.9,regY:145.1,scaleX:0.5221,scaleY:0.5219,rotation:0,skewX:1.4491,skewY:0.134,x:108.1,y:80.65},17).wait(1));

	// Capa_20 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AAjJNQlSicjzkTQjykTgGjuQgHjuDmhWQDohSFwC+QFvDAClDwQAkA1AfA3IAJAPQBmC4AsDHQA8EMjrA4Qg8AOhDAAQjCAAj8h0g");
	var mask_graphics_121 = new cjs.Graphics().p("AguA9QgUgaAAgjQAAgjAUgZQATgZAbABQAcgBATAZQAUAZAAAjQAAAjgUAaQgTAZgcAAQgbAAgTgZg");
	var mask_graphics_122 = new cjs.Graphics().p("Ag0BTQgVgiAAgxQAAgwAVgjQAWgiAeAAQAfAAAVAiQAWAjAAAwQAAAxgWAiQgVAjgfAAQgeAAgWgjg");
	var mask_graphics_123 = new cjs.Graphics().p("Ag5BqQgXgsAAg+QAAg+AXgsQAYgsAhAAQAhAAAYAsQAYAsAAA+QAAA+gYAsQgYAtghAAQghAAgYgtg");
	var mask_graphics_124 = new cjs.Graphics().p("Ag+CBQgZg1AAhMQAAhLAZg2QAag1AkAAQAlAAAZA1QAaA2AABLQAABMgaA1QgZA2glAAQgkAAgag2g");
	var mask_graphics_125 = new cjs.Graphics().p("AhDCZQgcg/AAhaQAAhZAcg+QAchAAnAAQAoAAAbBAQAcA+AABZQAABagcA/QgbA/goAAQgnAAgcg/g");
	var mask_graphics_126 = new cjs.Graphics().p("AhICwQgehIAAhoQAAhmAehIQAehKAqABQArgBAeBKQAeBIAABmQAABogeBIQgeBJgrgBQgqABgehJg");
	var mask_graphics_127 = new cjs.Graphics().p("AhNDHQgghSAAh1QAAh0AghSQAghSAtAAQAtAAAgBSQAhBSAAB0QAAB1ghBSQggBSgtAAQgtAAgghSg");
	var mask_graphics_128 = new cjs.Graphics().p("AEuPqQgihbAAiDQAAiCAihcQAihbAwAAQAyAAAiBbQAiBcAACCQAACDgiBbQgiBcgyAAQgwAAgihcg");
	var mask_graphics_129 = new cjs.Graphics().p("AhgDjQgohdAAiGQAAiEAoheQAoheA4AAQA5AAAnBeQApBeAACEQAACGgpBdQgnBeg5AAQg4AAgoheg");
	var mask_graphics_130 = new cjs.Graphics().p("AhuDpQgthgAAiJQAAiIAthgQAuhgBAAAQBBAAAtBgQAuBgAACIQAACJguBgQgtBghBAAQhAAAguhgg");
	var mask_graphics_131 = new cjs.Graphics().p("Ah8DuQgzhiAAiMQAAiLAzhhQAzhkBJABQBJgBAzBkQA0BhAACLQAACMg0BiQgzBihJABQhJgBgzhig");
	var mask_graphics_132 = new cjs.Graphics().p("AiKD0Qg5hlAAiPQAAiOA5hkQA5hlBRAAQBRAAA5BlQA6BkAACOQAACPg6BlQg5BkhRAAQhRAAg5hkg");
	var mask_graphics_133 = new cjs.Graphics().p("AiYD5Qg/hnAAiSQAAiRA/hmQA+hoBaAAQBZAAA/BoQA/BmAACRQAACSg/BnQg/BnhZAAQhaAAg+hng");
	var mask_graphics_134 = new cjs.Graphics().p("AgTF7QhugVhQhzIgUgdQhRh9gBiTIAAAAQgBhzA6hLQAegsAqgeQBBg7BTAAQAcgBAcAFQBzAXBKBxQANATALAUQAQAcAMAeQAoBiAHBpQAJB3g4BFQghAtgtAfQg4AxhGAHQgSADgTAAQgVAAgUgDg");
	var mask_graphics_135 = new cjs.Graphics().p("AA3GnQgugCgvgOQiCgphiiAIgagiQhxibgCilQgCiLBchOQAtgqA9gVQBTgqBsAVQAgAEAhAKQCLAvBXB7QAQAWAOAXQATAhAQAjQA2B3APB7QATCVhcBCQgxAqhBAUQg5AahDAAQgTAAgUgCg");
	var mask_graphics_136 = new cjs.Graphics().p("AAyHRQg1gKg2gVQiWg+h0iLIgggnQiRi6gEi2IAAgBQgDikB/hPQA8gqBPgKQBngbCCAqQAmALAlAPQCkBGBkCFQATAZAQAaQAYAmAUAoQBECKAWCPQAbCzh9A/QhDAnhUAIQglAIgpAAQg6AAhBgQg");
	var mask_graphics_137 = new cjs.Graphics().p("AAtH7Qg9gTg8gcQirhRiGiYIgmgsQixjWgEjKIAAgBQgFi9ChhRQBLgoBhgBQB7gKCZA+QAsARAqAUQC8BdBwCQQAWAcATAdQAcArAYAtQBSCfAeChQAkDRigA9QhUAihngDIgUAAQhlAAh2gog");
	var mask_graphics_138 = new cjs.Graphics().p("AE9JsQh+gLiWg9QhFgchDgjQi/hmiXikIgsgxQjSj0gGjcIAAAAQgFjWDDhUQBbgmBzAIQCNAHCxBTQAyAWAuAZQDUB1B9CaQAZAfAWAgQAgAwAbAzQBhCyAlC0QAtDvjDA6QhFAVhQAAQgkAAgmgEg");
	var mask_graphics_139 = new cjs.Graphics().p("AAjPKQlSicjzkTQjykUgGjuQgHjtDmhWQDohSFwC+QFvC+ClDwQAkA2AfA3IAJAPQBmC5AsDHQA8ELjrA4Qg8AOhEAAQjCAAj7hzg");
	var mask_graphics_140 = new cjs.Graphics().p("AAjJNQlSicjzkTQjykTgGjuQgHjuDmhWQDohSFwC+QFvDAClDwQAkA1AfA3QBvDHAsDHQA8EMjrA4Qg8AOhDAAQjCAAj8h0g");
	var mask_graphics_141 = new cjs.Graphics().p("AAjJNQlSicjzkTQjykTgGjuQgHjuDmhWQDohSFwC+QFvDAClDwQAkA1AfA3QBvDHAsDHQA8EMjrA4Qg8AOhDAAQjCAAj8h0g");
	var mask_graphics_142 = new cjs.Graphics().p("AAjJNQlSicjzkTQjykTgGjuQgHjuDmhWQDohSFwC+QFvDAClDwQAkA1AfA3QBvDHAsDHQA8EMjrA4Qg8AOhDAAQjCAAj8h0g");
	var mask_graphics_143 = new cjs.Graphics().p("AAjJNQlSicjzkTQjykTgGjuQgHjuDmhWQDohSFwC+QFvDAClDwQAkA1AfA3QBvDHAsDHQA8EMjrA4Qg8AOhDAAQjCAAj8h0g");
	var mask_graphics_144 = new cjs.Graphics().p("AAjJNQlSicjzkTQjykTgGjuQgHjuDmhWQDohSFwC+QFvDAClDwQAkA1AfA3QBvDHAsDHQA8EMjrA4Qg8AOhDAAQjCAAj8h0g");
	var mask_graphics_145 = new cjs.Graphics().p("AAjJNQlSicjzkTQjykTgGjuQgHjuDmhWQDohSFwC+QFvDAClDwQAkA1AfA3QBvDHAsDHQA8EMjrA4Qg8AOhDAAQjCAAj8h0g");
	var mask_graphics_146 = new cjs.Graphics().p("AAjJNQlSicjzkTQjykTgGjuQgHjuDmhWQDohSFwC+QFvDAClDwQAkA1AfA3IAJAPQBmC4AsDHQA8EMjrA4Qg8AOhDAAQjCAAj8h0g");
	var mask_graphics_147 = new cjs.Graphics().p("AAjJNQlSicjzkTQjykTgGjuQgHjuDmhWQDohSFwC+QFvDAClDwQAkA1AfA3IAJAPQBmC4AsDHQA8EMjrA4Qg8AOhDAAQjCAAj8h0g");
	var mask_graphics_148 = new cjs.Graphics().p("AAjJNQlSicjzkTQjykTgGjuQgHjuDmhWQDohSFwC+QFvDAClDwQAkA1AfA3IAJAPQBmC4AsDHQA8EMjrA4Qg8AOhDAAQjCAAj8h0g");
	var mask_graphics_149 = new cjs.Graphics().p("AAjJNQlSicjzkTQjykTgGjuQgHjuDmhWQDohSFwC+QFvDAClDwQAkA1AfA3IAJAPQBmC4AsDHQA8EMjrA4Qg8AOhDAAQjCAAj8h0g");
	var mask_graphics_150 = new cjs.Graphics().p("AAjJNQlSicjzkTQjykTgGjuQgHjuDmhWQDohSFwC+QFvDAClDwQAkA1AfA3IAJAPQBmC4AsDHQA8EMjrA4Qg8AOhDAAQjCAAj8h0g");
	var mask_graphics_151 = new cjs.Graphics().p("AAjJNQlSicjzkTQjykTgGjuQgHjuDmhWQDohSFwC+QFvDAClDwQAkA1AfA3IAJAPQBmC4AsDHQA8EMjrA4Qg8AOhDAAQjCAAj8h0g");
	var mask_graphics_152 = new cjs.Graphics().p("AAjJNQlSicjzkTQjykTgGjuQgHjuDmhWQDohSFwC+QFvDAClDwQAkA1AfA3IAJAPQBmC4AsDHQA8EMjrA4Qg8AOhDAAQjCAAj8h0g");
	var mask_graphics_153 = new cjs.Graphics().p("AAjJNQlSicjzkTQjykTgGjuQgHjuDmhWQDohSFwC+QFvDAClDwQAkA1AfA3IAJAPQBmC4AsDHQA8EMjrA4Qg8AOhDAAQjCAAj8h0g");
	var mask_graphics_154 = new cjs.Graphics().p("AAjJNQlSicjzkTQjykTgGjuQgHjuDmhWQDohSFwC+QFvDAClDwQAkA1AfA3IAJAPQBmC4AsDHQA8EMjrA4Qg8AOhDAAQjCAAj8h0g");
	var mask_graphics_155 = new cjs.Graphics().p("AAjJNQlSicjzkTQjykTgGjuQgHjuDmhWQDohSFwC+QFvDAClDwQAkA1AfA3IAJAPQBmC4AsDHQA8EMjrA4Qg8AOhDAAQjCAAj8h0g");
	var mask_graphics_156 = new cjs.Graphics().p("AAjJNQlSicjzkTQjykTgGjuQgHjuDmhWQDohSFwC+QFvDAClDwQAkA1AfA3IAJAPQBmC4AsDHQA8EMjrA4Qg8AOhDAAQjCAAj8h0g");
	var mask_graphics_157 = new cjs.Graphics().p("AAjJNQlSicjzkTQjykTgGjuQgHjuDmhWQDohSFwC+QFvDAClDwQAkA1AfA3IAJAPQBmC4AsDHQA8EMjrA4Qg8AOhDAAQjCAAj8h0g");
	var mask_graphics_158 = new cjs.Graphics().p("AAjJNQlSicjzkTQjykTgGjuQgHjuDmhWQDohSFwC+QFvDAClDwQAkA1AfA3IAJAPQBmC4AsDHQA8EMjrA4Qg8AOhDAAQjCAAj8h0g");
	var mask_graphics_159 = new cjs.Graphics().p("AAjJNQlSicjzkTQjykTgGjuQgHjuDmhWQDohSFwC+QFvDAClDwQAkA1AfA3IAJAPQBmC4AsDHQA8EMjrA4Qg8AOhDAAQjCAAj8h0g");
	var mask_graphics_160 = new cjs.Graphics().p("AAjJNQlSicjzkTQjykTgGjuQgHjuDmhWQDohSFwC+QFvDAClDwQAkA1AfA3IAJAPQBmC4AsDHQA8EMjrA4Qg8AOhDAAQjCAAj8h0g");
	var mask_graphics_161 = new cjs.Graphics().p("AAjJNQlSicjzkTQjykTgGjuQgHjuDmhWQDohSFwC+QFvDAClDwQAkA1AfA3IAJAPQBmC4AsDHQA8EMjrA4Qg8AOhDAAQjCAAj8h0g");
	var mask_graphics_162 = new cjs.Graphics().p("AAjJNQlSicjzkTQjykTgGjuQgHjuDmhWQDohSFwC+QFvDAClDwQAkA1AfA3IAJAPQBmC4AsDHQA8EMjrA4Qg8AOhDAAQjCAAj8h0g");
	var mask_graphics_163 = new cjs.Graphics().p("AAjJNQlSicjzkTQjykTgGjuQgHjuDmhWQDohSFwC+QFvDAClDwQAkA1AfA3IAJAPQBmC4AsDHQA8EMjrA4Qg8AOhDAAQjCAAj8h0g");
	var mask_graphics_164 = new cjs.Graphics().p("AAjJNQlSicjzkTQjykTgGjuQgHjuDmhWQDohSFwC+QFvDAClDwQAkA1AfA3IAJAPQBmC4AsDHQA8EMjrA4Qg8AOhDAAQjCAAj8h0g");
	var mask_graphics_165 = new cjs.Graphics().p("AAjJNQlSicjzkTQjykTgGjuQgHjuDmhWQDohSFwC+QFvDAClDwQAkA1AfA3IAJAPQBmC4AsDHQA8EMjrA4Qg8AOhDAAQjCAAj8h0g");
	var mask_graphics_166 = new cjs.Graphics().p("AAjJNQlSicjzkTQjykTgGjuQgHjuDmhWQDohSFwC+QFvDAClDwQAkA1AfA3IAJAPQBmC4AsDHQA8EMjrA4Qg8AOhDAAQjCAAj8h0g");
	var mask_graphics_167 = new cjs.Graphics().p("AAjJNQlSicjzkTQjykTgGjuQgHjuDmhWQDohSFwC+QFvDAClDwQAkA1AfA3IAJAPQBmC4AsDHQA8EMjrA4Qg8AOhDAAQjCAAj8h0g");
	var mask_graphics_168 = new cjs.Graphics().p("AAjJNQlSicjzkTQjykTgGjuQgHjuDmhWQDohSFwC+QFvDAClDwQAkA1AfA3IAJAPQBmC4AsDHQA8EMjrA4Qg8AOhDAAQjCAAj8h0g");
	var mask_graphics_169 = new cjs.Graphics().p("AAjJNQlSicjzkTQjykTgGjuQgHjuDmhWQDohSFwC+QFvDAClDwQAkA1AfA3IAJAPQBmC4AsDHQA8EMjrA4Qg8AOhDAAQjCAAj8h0g");
	var mask_graphics_170 = new cjs.Graphics().p("AAjJNQlSicjzkTQjykTgGjuQgHjuDmhWQDohSFwC+QFvDAClDwQAkA1AfA3IAJAPQBmC4AsDHQA8EMjrA4Qg8AOhDAAQjCAAj8h0g");
	var mask_graphics_171 = new cjs.Graphics().p("AAjJNQlSicjzkTQjykTgGjuQgHjuDmhWQDohSFwC+QFvDAClDwQAkA1AfA3IAJAPQBmC4AsDHQA8EMjrA4Qg8AOhDAAQjCAAj8h0g");
	var mask_graphics_172 = new cjs.Graphics().p("AAjJNQlSicjzkTQjykTgGjuQgHjuDmhWQDohSFwC+QFvDAClDwQAkA1AfA3IAJAPQBmC4AsDHQA8EMjrA4Qg8AOhDAAQjCAAj8h0g");
	var mask_graphics_173 = new cjs.Graphics().p("AAjJNQlSicjzkTQjykTgGjuQgHjuDmhWQDohSFwC+QFvDAClDwQAkA1AfA3IAJAPQBmC4AsDHQA8EMjrA4Qg8AOhDAAQjCAAj8h0g");
	var mask_graphics_174 = new cjs.Graphics().p("AAjJNQlSicjzkTQjykTgGjuQgHjuDmhWQDohSFwC+QFvDAClDwQAkA1AfA3IAJAPQBmC4AsDHQA8EMjrA4Qg8AOhDAAQjCAAj8h0g");
	var mask_graphics_175 = new cjs.Graphics().p("AAjJNQlSicjzkTQjykTgGjuQgHjuDmhWQDohSFwC+QFvDAClDwQAkA1AfA3IAJAPQBmC4AsDHQA8EMjrA4Qg8AOhDAAQjCAAj8h0g");
	var mask_graphics_176 = new cjs.Graphics().p("AAjJNQlSicjzkTQjykTgGjuQgHjuDmhWQDohSFwC+QFvDAClDwQAkA1AfA3IAJAPQBmC4AsDHQA8EMjrA4Qg8AOhDAAQjCAAj8h0g");
	var mask_graphics_177 = new cjs.Graphics().p("AAjJNQlSicjzkTQjykTgGjuQgHjuDmhWQDohSFwC+QFvDAClDwQAkA1AfA3IAJAPQBmC4AsDHQA8EMjrA4Qg8AOhDAAQjCAAj8h0g");
	var mask_graphics_178 = new cjs.Graphics().p("AAjJNQlSicjzkTQjykTgGjuQgHjuDmhWQDohSFwC+QFvDAClDwQAkA1AfA3IAJAPQBmC4AsDHQA8EMjrA4Qg8AOhDAAQjCAAj8h0g");
	var mask_graphics_179 = new cjs.Graphics().p("AAjJNQlSicjzkTQjykTgGjuQgHjuDmhWQDohSFwC+QFvDAClDwQAkA1AfA3IAJAPQBmC4AsDHQA8EMjrA4Qg8AOhDAAQjCAAj8h0g");
	var mask_graphics_180 = new cjs.Graphics().p("AAjJNQlSicjzkTQjykTgGjuQgHjuDmhWQDohSFwC+QFvDAClDwQAkA1AfA3IAJAPQBmC4AsDHQA8EMjrA4Qg8AOhDAAQjCAAj8h0g");
	var mask_graphics_181 = new cjs.Graphics().p("AAjJNQlSicjzkTQjykTgGjuQgHjuDmhWQDohSFwC+QFvDAClDwQAkA1AfA3IAJAPQBmC4AsDHQA8EMjrA4Qg8AOhDAAQjCAAj8h0g");
	var mask_graphics_182 = new cjs.Graphics().p("AAjJNQlSicjzkTQjykTgGjuQgHjuDmhWQDohSFwC+QFvDAClDwQAkA1AfA3IAJAPQBmC4AsDHQA8EMjrA4Qg8AOhDAAQjCAAj8h0g");
	var mask_graphics_183 = new cjs.Graphics().p("AAjJNQlSicjzkTQjykTgGjuQgHjuDmhWQDohSFwC+QFvDAClDwQAkA1AfA3IAJAPQBmC4AsDHQA8EMjrA4Qg8AOhDAAQjCAAj8h0g");
	var mask_graphics_184 = new cjs.Graphics().p("AAjJNQlSicjzkTQjykTgGjuQgHjuDmhWQDohSFwC+QFvDAClDwQAkA1AfA3IAJAPQBmC4AsDHQA8EMjrA4Qg8AOhDAAQjCAAj8h0g");
	var mask_graphics_185 = new cjs.Graphics().p("AAjJNQlSicjzkTQjykTgGjuQgHjuDmhWQDohSFwC+QFvDAClDwQAkA1AfA3IAJAPQBmC4AsDHQA8EMjrA4Qg8AOhDAAQjCAAj8h0g");
	var mask_graphics_186 = new cjs.Graphics().p("AAjJNQlSicjzkTQjykTgGjuQgHjuDmhWQDohSFwC+QFvDAClDwQAkA1AfA3IAJAPQBmC4AsDHQA8EMjrA4Qg8AOhDAAQjCAAj8h0g");
	var mask_graphics_187 = new cjs.Graphics().p("AAjJNQlSicjzkTQjykTgGjuQgHjuDmhWQDohSFwC+QFvDAClDwQAkA1AfA3IAJAPQBmC4AsDHQA8EMjrA4Qg8AOhDAAQjCAAj8h0g");
	var mask_graphics_188 = new cjs.Graphics().p("AAjJNQlSicjzkTQjykTgGjuQgHjuDmhWQDohSFwC+QFvDAClDwQAkA1AfA3IAJAPQBmC4AsDHQA8EMjrA4Qg8AOhDAAQjCAAj8h0g");
	var mask_graphics_189 = new cjs.Graphics().p("AAjJNQlSicjzkTQjykTgGjuQgHjuDmhWQDohSFwC+QFvDAClDwQAkA1AfA3IAJAPQBmC4AsDHQA8EMjrA4Qg8AOhDAAQjCAAj8h0g");
	var mask_graphics_190 = new cjs.Graphics().p("AAjJNQlSicjzkTQjykTgGjuQgHjuDmhWQDohSFwC+QFvDAClDwQAkA1AfA3IAJAPQBmC4AsDHQA8EMjrA4Qg8AOhDAAQjCAAj8h0g");
	var mask_graphics_191 = new cjs.Graphics().p("AAjJNQlSicjzkTQjykTgGjuQgHjuDmhWQDohSFwC+QFvDAClDwQAkA1AfA3IAJAPQBmC4AsDHQA8EMjrA4Qg8AOhDAAQjCAAj8h0g");
	var mask_graphics_192 = new cjs.Graphics().p("AAjJNQlSicjzkTQjykTgGjuQgHjuDmhWQDohSFwC+QFvDAClDwQAkA1AfA3IAJAPQBmC4AsDHQA8EMjrA4Qg8AOhDAAQjCAAj8h0g");
	var mask_graphics_193 = new cjs.Graphics().p("AAjJNQlSicjzkTQjykTgGjuQgHjuDmhWQDohSFwC+QFvDAClDwQAkA1AfA3IAJAPQBmC4AsDHQA8EMjrA4Qg8AOhDAAQjCAAj8h0g");
	var mask_graphics_194 = new cjs.Graphics().p("AAjJNQlSicjzkTQjykTgGjuQgHjuDmhWQDohSFwC+QFvDAClDwQAkA1AfA3IAJAPQBmC4AsDHQA8EMjrA4Qg8AOhDAAQjCAAj8h0g");
	var mask_graphics_195 = new cjs.Graphics().p("AAjJNQlSicjzkTQjykTgGjuQgHjuDmhWQDohSFwC+QFvDAClDwQAkA1AfA3IAJAPQBmC4AsDHQA8EMjrA4Qg8AOhDAAQjCAAj8h0g");
	var mask_graphics_196 = new cjs.Graphics().p("AAjJNQlSicjzkTQjykTgGjuQgHjuDmhWQDohSFwC+QFvDAClDwQAkA1AfA3IAJAPQBmC4AsDHQA8EMjrA4Qg8AOhDAAQjCAAj8h0g");
	var mask_graphics_197 = new cjs.Graphics().p("AAjJNQlSicjzkTQjykTgGjuQgHjuDmhWQDohSFwC+QFvDAClDwQAkA1AfA3IAJAPQBmC4AsDHQA8EMjrA4Qg8AOhDAAQjCAAj8h0g");
	var mask_graphics_198 = new cjs.Graphics().p("AAjJNQlSicjzkTQjykTgGjuQgHjuDmhWQDohSFwC+QFvDAClDwQAkA1AfA3IAJAPQBmC4AsDHQA8EMjrA4Qg8AOhDAAQjCAAj8h0g");
	var mask_graphics_199 = new cjs.Graphics().p("AAjJNQlSicjzkTQjykTgGjuQgHjuDmhWQDohSFwC+QFvDAClDwQAkA1AfA3IAJAPQBmC4AsDHQA8EMjrA4Qg8AOhDAAQjCAAj8h0g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:17.3181,y:146.6204}).wait(1).to({graphics:null,x:0,y:0}).wait(120).to({graphics:mask_graphics_121,x:94.075,y:211.55}).wait(1).to({graphics:mask_graphics_122,x:93.3,y:208.1}).wait(1).to({graphics:mask_graphics_123,x:92.55,y:204.675}).wait(1).to({graphics:mask_graphics_124,x:91.775,y:201.225}).wait(1).to({graphics:mask_graphics_125,x:91,y:197.75}).wait(1).to({graphics:mask_graphics_126,x:90.225,y:194.3}).wait(1).to({graphics:mask_graphics_127,x:89.475,y:190.875}).wait(1).to({graphics:mask_graphics_128,x:50.1877,y:109.3937}).wait(1).to({graphics:mask_graphics_129,x:86.675,y:186.65}).wait(1).to({graphics:mask_graphics_130,x:84.65,y:185.9}).wait(1).to({graphics:mask_graphics_131,x:82.6,y:185.1}).wait(1).to({graphics:mask_graphics_132,x:80.575,y:184.35}).wait(1).to({graphics:mask_graphics_133,x:78.55,y:183.575}).wait(1).to({graphics:mask_graphics_134,x:68.31,y:177.3892}).wait(1).to({graphics:mask_graphics_135,x:58.0785,y:171.0577}).wait(1).to({graphics:mask_graphics_136,x:47.8855,y:164.8548}).wait(1).to({graphics:mask_graphics_137,x:37.6745,y:158.6951}).wait(1).to({graphics:mask_graphics_138,x:27.4492,y:152.6659}).wait(1).to({graphics:mask_graphics_139,x:17.3181,y:108.5486}).wait(1).to({graphics:mask_graphics_140,x:17.3181,y:146.6204}).wait(1).to({graphics:mask_graphics_141,x:17.3181,y:146.6204}).wait(1).to({graphics:mask_graphics_142,x:17.3181,y:146.6204}).wait(1).to({graphics:mask_graphics_143,x:17.3181,y:146.6204}).wait(1).to({graphics:mask_graphics_144,x:17.3181,y:146.6204}).wait(1).to({graphics:mask_graphics_145,x:17.3181,y:146.6204}).wait(1).to({graphics:mask_graphics_146,x:17.3181,y:146.6204}).wait(1).to({graphics:mask_graphics_147,x:17.3181,y:146.6204}).wait(1).to({graphics:mask_graphics_148,x:17.3181,y:146.6204}).wait(1).to({graphics:mask_graphics_149,x:17.3181,y:146.6204}).wait(1).to({graphics:mask_graphics_150,x:17.3181,y:146.6204}).wait(1).to({graphics:mask_graphics_151,x:17.3181,y:146.6204}).wait(1).to({graphics:mask_graphics_152,x:17.3181,y:146.6204}).wait(1).to({graphics:mask_graphics_153,x:17.3181,y:146.6204}).wait(1).to({graphics:mask_graphics_154,x:17.3181,y:146.6204}).wait(1).to({graphics:mask_graphics_155,x:17.3181,y:146.6204}).wait(1).to({graphics:mask_graphics_156,x:17.3181,y:146.6204}).wait(1).to({graphics:mask_graphics_157,x:17.3181,y:146.6204}).wait(1).to({graphics:mask_graphics_158,x:17.3181,y:146.6204}).wait(1).to({graphics:mask_graphics_159,x:17.3181,y:146.6204}).wait(1).to({graphics:mask_graphics_160,x:17.3181,y:146.6204}).wait(1).to({graphics:mask_graphics_161,x:17.3181,y:146.6204}).wait(1).to({graphics:mask_graphics_162,x:17.3181,y:146.6204}).wait(1).to({graphics:mask_graphics_163,x:17.3181,y:146.6204}).wait(1).to({graphics:mask_graphics_164,x:17.3181,y:146.6204}).wait(1).to({graphics:mask_graphics_165,x:17.3181,y:146.6204}).wait(1).to({graphics:mask_graphics_166,x:17.3181,y:146.6204}).wait(1).to({graphics:mask_graphics_167,x:17.3181,y:146.6204}).wait(1).to({graphics:mask_graphics_168,x:17.3181,y:146.6204}).wait(1).to({graphics:mask_graphics_169,x:17.3181,y:146.6204}).wait(1).to({graphics:mask_graphics_170,x:17.3181,y:146.6204}).wait(1).to({graphics:mask_graphics_171,x:17.3181,y:146.6204}).wait(1).to({graphics:mask_graphics_172,x:17.3181,y:146.6204}).wait(1).to({graphics:mask_graphics_173,x:17.3181,y:146.6204}).wait(1).to({graphics:mask_graphics_174,x:17.3181,y:146.6204}).wait(1).to({graphics:mask_graphics_175,x:17.3181,y:146.6204}).wait(1).to({graphics:mask_graphics_176,x:17.3181,y:146.6204}).wait(1).to({graphics:mask_graphics_177,x:17.3181,y:146.6204}).wait(1).to({graphics:mask_graphics_178,x:17.3181,y:146.6204}).wait(1).to({graphics:mask_graphics_179,x:17.3181,y:146.6204}).wait(1).to({graphics:mask_graphics_180,x:17.3181,y:146.6204}).wait(1).to({graphics:mask_graphics_181,x:17.3181,y:146.6204}).wait(1).to({graphics:mask_graphics_182,x:17.3181,y:146.6204}).wait(1).to({graphics:mask_graphics_183,x:17.3181,y:146.6204}).wait(1).to({graphics:mask_graphics_184,x:17.3181,y:146.6204}).wait(1).to({graphics:mask_graphics_185,x:17.3181,y:146.6204}).wait(1).to({graphics:mask_graphics_186,x:17.3181,y:146.6204}).wait(1).to({graphics:mask_graphics_187,x:17.3181,y:146.6204}).wait(1).to({graphics:mask_graphics_188,x:17.3181,y:146.6204}).wait(1).to({graphics:mask_graphics_189,x:17.3181,y:146.6204}).wait(1).to({graphics:mask_graphics_190,x:17.3181,y:146.6204}).wait(1).to({graphics:mask_graphics_191,x:17.3181,y:146.6204}).wait(1).to({graphics:mask_graphics_192,x:17.3181,y:146.6204}).wait(1).to({graphics:mask_graphics_193,x:17.3181,y:146.6204}).wait(1).to({graphics:mask_graphics_194,x:17.3181,y:146.6204}).wait(1).to({graphics:mask_graphics_195,x:17.3181,y:146.6204}).wait(1).to({graphics:mask_graphics_196,x:17.3181,y:146.6204}).wait(1).to({graphics:mask_graphics_197,x:17.3181,y:146.6204}).wait(1).to({graphics:mask_graphics_198,x:17.3181,y:146.6204}).wait(1).to({graphics:mask_graphics_199,x:17.3181,y:146.6204}).wait(1));

	// hoja_6
	this.instance_2 = new lib.hoja_6();
	this.instance_2.setTransform(44.9,173.4,0.7536,0.751,0,-0.6916,-0.1868,63,51.2);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(120).to({_off:false,regX:64.5,regY:51.4,scaleX:0.155,scaleY:0.0584,skewX:53.151,skewY:57.2363,x:89.25,y:192.1},0).to({regX:64.6,regY:51.5,scaleX:0.4536,scaleY:0.4053,skewX:13.6355,skewY:15.6801,x:68.8,y:175.75},7).to({regX:65.2,regY:51.8,scaleX:0.4805,scaleY:0.446,skewX:3.5795,skewY:16.9813,x:63.95,y:172.85},6).to({regX:63.5,regY:50.9,scaleX:0.7523,scaleY:0.7523,skewX:0,skewY:0,x:45.65,y:173.1},6).to({regX:63.4,regY:51,scaleX:0.7531,scaleY:0.7517,skewX:-4.5731,skewY:-2.7778,x:42.6,y:175.55},45).to({regX:63,regY:51.2,scaleX:0.7536,scaleY:0.751,skewX:-0.6916,skewY:-0.1868,x:44.9,y:173.4},14).wait(1));

	// Capa_19 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_86 = new cjs.Graphics().p("Ag8A9QgZgZAAgkQAAgiAZgaQAagZAiAAQAkAAAZAZQAYAaAAAiQAAAkgYAZQgZAZgkgBQgiABgagZg");
	var mask_1_graphics_87 = new cjs.Graphics().p("AhMBQQggggAAguQAAgtAfgkQAggjAtAEQAtAEAgAgQAgAgAAAsQAAAuggAgQggAggtAAQgsAAggggg");
	var mask_1_graphics_88 = new cjs.Graphics().p("AhdBjQgngnAAg4QAAg3AmgvQAnguA3AIQA3AJAnAnQAnAnAAA2QAAA3gnAnQgnAng3AAQg2AAgngng");
	var mask_1_graphics_89 = new cjs.Graphics().p("AhuB2QguguAAhCQAAhBAtg5QAtg6BCANQBCAMAtAuQAuAuAABAQAABBguAuQguAuhBAAQhAAAgugug");
	var mask_1_graphics_90 = new cjs.Graphics().p("Ah/CKQg1g1AAhMQAAhMA0hEQAzhEBNARQBLAQA1A1QA1A1AABKQAABLg1A1Qg1A1hLAAQhKAAg1g1g");
	var mask_1_graphics_91 = new cjs.Graphics().p("AiPCdQg8g7gBhXQAAhWA7hPQA6hOBXAUQBVAVA8A8QA8A8AABUQAABVg8A7Qg8A8hVAAQhUAAg7g8g");
	var mask_1_graphics_92 = new cjs.Graphics().p("AihCxQhChDAAhhQgBhhBBhZQBChZBgAZQBgAZBDBDQBDBDAABdQAABfhDBDQhDBChfAAQheAAhDhCg");
	var mask_1_graphics_93 = new cjs.Graphics().p("AixDEQhKhKAAhrQgBhrBIhkQBIhkBrAeQBqAdBKBJQBJBKAABoQAABohJBKQhKBKhpAAQhoAAhJhKg");
	var mask_1_graphics_94 = new cjs.Graphics().p("AjCDYQhQhRgBh2QAAh1BOhuQBPhvB1AiQBzAhBSBQQBQBRAAByQAAByhQBRQhRBQhzAAQhxAAhRhQg");
	var mask_1_graphics_95 = new cjs.Graphics().p("AjTDrQhYhXAAiAQAAiABVh5QBVh5B/AlQB/AlBXBYQBYBYAAB7QAAB9hYBXQhXBYh9AAQh7AAhYhYg");
	var mask_1_graphics_96 = new cjs.Graphics().p("AjkD/QhehfgBiKQAAiKBciDQBciFCJAqQCJAqBeBeQBfBfAACFQAACGhfBfQheBeiGAAQiGAAhfheg");
	var mask_1_graphics_97 = new cjs.Graphics().p("Aj1ESQhlhlAAiVQgBiUBjiPQBiiOCUAtQCTAuBlBmQBmBmgBCPQABCQhmBlQhlBmiQAAQiQAAhmhmg");
	var mask_1_graphics_98 = new cjs.Graphics().p("AkGEiQhvhvgBigQAAigBtiOQBtiNCmAfQCnAeBcBwQBbBvAOCfQANCghvBvQhvBuieAAQieAAhvhug");
	var mask_1_graphics_99 = new cjs.Graphics().p("AkZEyQh5h4AAitQAAirB3iNQB4iMC5AQQC7AQBRB5QBRB5AbCvQAbCwh5B4Qh5B4irAAQisAAh5h4g");
	var mask_1_graphics_100 = new cjs.Graphics().p("AksFDQiDiBAAi4QAAi4CCiLQCCiLDNABQDNABBICDQBHCCApC/QAoDAiDCBQiCCBi6AAQi5AAiDiBg");
	var mask_1_graphics_101 = new cjs.Graphics().p("AlAFWQiMiKAAjFQAAjDCMiKQCNiKDggOQDhgOA9CNQA9CMA3DQQA2DPiNCKQiMCKjIAAQjHAAiNiKg");
	var mask_1_graphics_102 = new cjs.Graphics().p("AltGCQifidAAjfQAAjdCfidQCficD2gMQD4gMBZCeQBZCfAwDoQAvDoifCdQieCcjhAAQjhAAificg");
	var mask_1_graphics_103 = new cjs.Graphics().p("AmbGtQixivAAj5QAAj4CxivQCxivEOgKQEOgKB1CwQB1CxApEBQAoEBiwCvQixCvj7AAQj7AAixivg");
	var mask_1_graphics_104 = new cjs.Graphics().p("AnJHZQjDjCAAkTQAAkSDDjBQDDjCEkgIQElgJCRDDQCRDDAiEaQAiEZjDDCQjDDBkUAAQkVAAjDjBg");
	var mask_1_graphics_105 = new cjs.Graphics().p("AnvH9QjSjRAAkoQAAkoDSjRQDSjRE3gHQE3gHCpDSQCpDSAcEuQAcEujSDRQjSDRkqAAQkqAAjSjRg");
	var mask_1_graphics_106 = new cjs.Graphics().p("AoWIiQjhjgAAk/QAAk+DhjgQDhjgFKgGQFKgFDADgQDADiAXFDQAXFDjiDgQjhDgk/AAQlAAAjhjgg");
	var mask_1_graphics_107 = new cjs.Graphics().p("Ao9JGQjwjwAAlUQAAlTDwjwQDwjwFdgEQFdgEDYDwQDXDwARFYQARFXjwDwQjxDwlVAAQlVAAjwjwg");
	var mask_1_graphics_108 = new cjs.Graphics().p("ApkJrQj/j/AAlqQAAlpD/kAQEAj+FvgDQFwgDDvD/QDvEAALFsQALFsj/D/QkAD/lqAAQlqAAkAj/g");
	var mask_1_graphics_109 = new cjs.Graphics().p("AqMKPQkOkOAAmAQAAl/EOkPQEPkOGCgBQGDgCEHEOQEGEPAFGBQAGGBkOEOQkPEOmAAAQmAAAkPkOg");
	var mask_1_graphics_110 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_111 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_112 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_113 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_114 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_115 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_116 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_117 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_118 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_119 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_120 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_121 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_122 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_123 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_124 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_125 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_126 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_127 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_128 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_129 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_130 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_131 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_132 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_133 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_134 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_135 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_136 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_137 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_138 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_139 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_140 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_141 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_142 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_143 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_144 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_145 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_146 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_147 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_148 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_149 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_150 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_151 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_152 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_153 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_154 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_155 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_156 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_157 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_158 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_159 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_160 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_161 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_162 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_163 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_164 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_165 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_166 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_167 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_168 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_169 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_170 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_171 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_172 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_173 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_174 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_175 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_176 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_177 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_178 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_179 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_180 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_181 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_182 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_183 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_184 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_185 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_186 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_187 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_188 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_189 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_190 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_191 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_192 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_193 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_194 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_195 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_196 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_197 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_198 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_1_graphics_199 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:139.375,y:273.225}).wait(1).to({graphics:null,x:0,y:0}).wait(85).to({graphics:mask_1_graphics_86,x:91.65,y:254.65}).wait(1).to({graphics:mask_1_graphics_87,x:94.125,y:254.9797}).wait(1).to({graphics:mask_1_graphics_88,x:96.575,y:255.2593}).wait(1).to({graphics:mask_1_graphics_89,x:99.05,y:255.5634}).wait(1).to({graphics:mask_1_graphics_90,x:101.525,y:255.8389}).wait(1).to({graphics:mask_1_graphics_91,x:103.9998,y:256.1378}).wait(1).to({graphics:mask_1_graphics_92,x:106.45,y:256.4173}).wait(1).to({graphics:mask_1_graphics_93,x:108.9248,y:256.714}).wait(1).to({graphics:mask_1_graphics_94,x:111.3998,y:256.9853}).wait(1).to({graphics:mask_1_graphics_95,x:113.8749,y:257.2828}).wait(1).to({graphics:mask_1_graphics_96,x:116.3249,y:257.5446}).wait(1).to({graphics:mask_1_graphics_97,x:118.7999,y:257.8339}).wait(1).to({graphics:mask_1_graphics_98,x:124.1978,y:253.6464}).wait(1).to({graphics:mask_1_graphics_99,x:129.6713,y:249.3883}).wait(1).to({graphics:mask_1_graphics_100,x:135.2282,y:244.9746}).wait(1).to({graphics:mask_1_graphics_101,x:140.7996,y:240.4366}).wait(1).to({graphics:mask_1_graphics_102,x:144.9213,y:245.7328}).wait(1).to({graphics:mask_1_graphics_103,x:149.0529,y:251.0705}).wait(1).to({graphics:mask_1_graphics_104,x:153.2524,y:256.3572}).wait(1).to({graphics:mask_1_graphics_105,x:150.8897,y:259.1637}).wait(1).to({graphics:mask_1_graphics_106,x:148.5564,y:261.9934}).wait(1).to({graphics:mask_1_graphics_107,x:146.2562,y:264.8209}).wait(1).to({graphics:mask_1_graphics_108,x:143.9477,y:267.5983}).wait(1).to({graphics:mask_1_graphics_109,x:141.6565,y:270.4246}).wait(1).to({graphics:mask_1_graphics_110,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_111,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_112,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_113,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_114,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_115,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_116,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_117,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_118,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_119,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_120,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_121,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_122,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_123,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_124,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_125,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_126,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_127,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_128,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_129,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_130,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_131,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_132,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_133,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_134,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_135,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_136,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_137,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_138,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_139,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_140,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_141,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_142,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_143,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_144,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_145,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_146,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_147,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_148,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_149,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_150,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_151,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_152,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_153,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_154,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_155,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_156,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_157,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_158,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_159,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_160,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_161,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_162,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_163,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_164,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_165,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_166,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_167,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_168,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_169,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_170,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_171,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_172,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_173,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_174,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_175,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_176,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_177,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_178,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_179,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_180,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_181,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_182,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_183,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_184,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_185,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_186,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_187,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_188,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_189,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_190,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_191,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_192,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_193,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_194,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_195,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_196,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_197,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_198,x:139.375,y:273.225}).wait(1).to({graphics:mask_1_graphics_199,x:139.375,y:273.225}).wait(1));

	// hoja_7
	this.instance_3 = new lib.hoja_7();
	this.instance_3.setTransform(144.5,222.05,0.7525,0.7519,0,-0.8825,-0.6739,66.3,52.3);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(85).to({_off:false,regX:66.8,regY:53.2,scaleX:0.2449,scaleY:0.2314,skewX:-14.8334,skewY:-35.6746,x:106.55,y:235.9},0).to({regX:66.5,regY:53,scaleX:0.4106,scaleY:0.4007,skewX:-27.4453,skewY:-41.4023,x:109.35,y:226.3},5).to({regX:66.4,regY:52.6,scaleX:0.4545,scaleY:0.3982,skewX:-17.078,skewY:-38.8713,x:113.1,y:218.3},5).to({regX:66.7,regY:52.9,scaleX:0.5137,scaleY:0.499,skewX:-3.5767,skewY:-16.3882,x:127.15,y:219.95},8).to({regX:66.8,regY:53.1,scaleX:0.5679,scaleY:0.569,skewX:0.4149,skewY:-4.6711,x:133.55,y:222.75},6).to({regX:65.9,regY:52.2,scaleX:0.7524,scaleY:0.7521,skewX:0.6312,skewY:1.0888,x:145.25,y:223.55},4).wait(13).to({regX:66,regY:52.4,scaleX:0.7525,scaleY:0.752,skewX:0.0256,skewY:-0.0651,x:144.95,y:222.7},27).to({regX:66.3,regY:52.3,scaleY:0.7519,skewX:-0.8825,skewY:-0.6739,x:144.5,y:222.05},45).wait(1));

	// Capa_18 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_70 = new cjs.Graphics().p("Ag7A8QgagYAAgkQAAgjAagYQAYgaAjAAQAkAAAYAaQAZAYABAjQgBAkgZAYQgYAZgkAAQgjAAgYgZg");
	var mask_2_graphics_71 = new cjs.Graphics().p("AhVBWQgkgkAAgyQAAgyAkgjQAkgkAxAAQAyAAAkAkQAkAjAAAyQAAAygkAkQgkAjgyAAQgxAAgkgjg");
	var mask_2_graphics_72 = new cjs.Graphics().p("AhvBwQgtgvgBhBQABhAAtguQAvgvBAAAQBBAAAvAvQAtAuABBAQgBBBgtAvQgvAuhBAAQhAAAgvgug");
	var mask_2_graphics_73 = new cjs.Graphics().p("AiICJQg5g5AAhQQAAhQA5g4QA5g4BPgBQBQABA5A4QA5A4AABQQAABQg5A5Qg5A5hQgBQhPABg5g5g");
	var mask_2_graphics_74 = new cjs.Graphics().p("AiiCjQhDhDAAhgQAAhfBDhCQBDhEBfAAQBgAABDBEQBDBCgBBfQABBghDBDQhDBChgAAQhfAAhDhCg");
	var mask_2_graphics_75 = new cjs.Graphics().p("Ai7C8QhOhOAAhuQAAhtBOhOQBOhOBtAAQBuAABOBOQBOBOAABtQAABuhOBOQhOBOhuAAQhtAAhOhOg");
	var mask_2_graphics_76 = new cjs.Graphics().p("AjUDWQhZhZABh9QgBh8BZhYQBXhZB9AAQB+AABXBZQBZBYgBB8QABB9hZBZQhXBYh+AAQh9AAhXhYg");
	var mask_2_graphics_77 = new cjs.Graphics().p("AjuDvQhjhjAAiMQAAiLBjhjQBjhjCLAAQCMAABjBjQBjBjAACLQAACMhjBjQhjBjiMAAQiLAAhjhjg");
	var mask_2_graphics_78 = new cjs.Graphics().p("AkIEJQhthuAAibQAAiaBthuQBthtCbAAQCcAABtBtQBtBuAACaQAACbhtBuQhtBticAAQibAAhthtg");
	var mask_2_graphics_79 = new cjs.Graphics().p("AkhEiQh4h4AAiqQAAipB4h4QB4h4CpAAQCqAAB4B4QB4B4AACpQAACqh4B4Qh4B4iqAAQipAAh4h4g");
	var mask_2_graphics_80 = new cjs.Graphics().p("Ak7E7QiBiCgBi5QABi4CBiDQCCiCC5AAQC6AACCCCQCBCDAAC4QAAC5iBCCQiCCDi6AAQi5AAiCiDg");
	var mask_2_graphics_81 = new cjs.Graphics().p("AlUFVQiNiNAAjIQAAjHCNiNQCNiNDHAAQDIAACNCNQCNCNAADHQAADIiNCNQiNCNjIAAQjHAAiNiNg");
	var mask_2_graphics_82 = new cjs.Graphics().p("AllFmQiTiUAAjSQAAjRCTiUQCUiUDRABQDSgBCUCUQCTCUAADRQAADSiTCUQiUCTjSAAQjRAAiUiTg");
	var mask_2_graphics_83 = new cjs.Graphics().p("Al2F2QiaibAAjbQAAjbCaibQCbiaDbAAQDbAACcCaQCaCbAADbQAADbiaCbQicCbjbAAQjbAAibibg");
	var mask_2_graphics_84 = new cjs.Graphics().p("AmHGHQihiiAAjlQAAjkChiiQCiiiDlAAQDmAAChCiQCiCigBDkQABDliiCiQihCijmAAQjlAAiiiig");
	var mask_2_graphics_85 = new cjs.Graphics().p("AmXGYQioipAAjvQAAjuCoipQCpioDvAAQDvAACoCoQCoCpAADuQAADvioCpQioCojvAAQjvAAipiog");
	var mask_2_graphics_86 = new cjs.Graphics().p("AmnGpQiwiwAAj5QAAj4CwivQCviwD5AAQD5AACvCwQCvCvAAD4QAAD5ivCwQivCvj5AAQj5AAivivg");
	var mask_2_graphics_87 = new cjs.Graphics().p("Am4G5Qi3i3ABkCQgBkCC3i2QC2i3ECABQEDgBC2C3QC2C2AAECQAAECi2C3Qi2C3kDgBQkCABi2i3g");
	var mask_2_graphics_88 = new cjs.Graphics().p("AnJHKQi9i9AAkNQAAkLC9i+QC+i9ELAAQENAAC9C9QC9C+AAELQAAENi9C9Qi9C9kNAAQkLAAi+i9g");
	var mask_2_graphics_89 = new cjs.Graphics().p("An0GZQjPiqAAjvQAAjvDPioQDPipElAAQEmAADQCpQDOCoAADvQAADvjOCqQjQCokmAAQklAAjPiog");
	var mask_2_graphics_90 = new cjs.Graphics().p("AogFnQjgiVAAjSQAAjSDgiUQDiiUE/AAQE/AADgCUQDhCUAADSQAADSjhCVQjgCVk/AAQk/AAjiiVg");
	var mask_2_graphics_91 = new cjs.Graphics().p("ApLE2QjyiBAAi1QAAi1Dyh/QD0iBFYABQFYgBDzCBQDyB/AAC1QAAC1jyCBQjzB/lYABQlYgBj0h/g");
	var mask_2_graphics_92 = new cjs.Graphics().p("ApSFcQj2iQAAjMQAAjLD2iQQD2iPFdgBQFdABD1CPQD2CQAADLQAADMj2CQQj1CQldAAQldAAj2iQg");
	var mask_2_graphics_93 = new cjs.Graphics().p("ApZGCQj5igAAjiQAAjhD5igQD5igFhAAQFhAAD5CgQD4CgAADhQAADij4CgQj5CglhgBQlhABj5igg");
	var mask_2_graphics_94 = new cjs.Graphics().p("AphGoQj7ivAAj5QAAj4D7ivQD9ivFlAAQFlAAD8CvQD7CvAAD4QAAD5j7CvQj8CvllABQllgBj9ivg");
	var mask_2_graphics_95 = new cjs.Graphics().p("ApoHOQj/i+AAkQQAAkOD/i/QD/jAFqAAQFpAAD/DAQD/C/AAEOQAAEQj/C+Qj/C/lpABQlqgBj/i/g");
	var mask_2_graphics_96 = new cjs.Graphics().p("ApvH1QkCjQAAklQAAklECjPQEDjOFtAAQFuAAECDOQEBDPAAElQAAElkBDQQkCDOluABQltgBkDjOg");
	var mask_2_graphics_97 = new cjs.Graphics().p("Ap2IbQkFjfAAk8QAAk7EFjfQEFjeFygBQFyABEEDeQEGDfgBE7QABE8kGDfQkEDelyAAQlyAAkFjeg");
	var mask_2_graphics_98 = new cjs.Graphics().p("Ap+JBQkIjvAAlSQAAlREIjvQEIjvF3ABQF2gBEIDvQEIDvAAFRQAAFSkIDvQkIDvl2gBQl3ABkIjvg");
	var mask_2_graphics_99 = new cjs.Graphics().p("AqFJnQkLj/AAloQAAlnELj/QELj+F7AAQF6AAELD+QELD/AAFnQAAFokLD/QkLD/l6AAQl7AAkLj/g");
	var mask_2_graphics_100 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_101 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_102 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_103 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_104 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_105 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_106 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_107 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_108 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_109 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_110 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_111 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_112 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_113 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_114 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_115 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_116 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_117 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_118 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_119 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_120 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_121 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_122 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_123 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_124 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_125 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_126 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_127 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_128 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_129 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_130 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_131 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_132 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_133 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_134 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_135 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_136 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_137 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_138 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_139 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_140 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_141 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_142 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_143 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_144 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_145 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_146 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_147 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_148 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_149 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_150 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_151 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_152 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_153 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_154 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_155 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_156 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_157 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_158 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_159 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_160 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_161 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_162 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_163 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_164 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_165 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_166 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_167 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_168 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_169 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_170 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_171 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_172 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_173 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_174 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_175 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_176 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_177 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_178 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_179 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_180 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_181 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_182 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_183 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_184 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_185 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_186 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_187 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_188 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_189 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_190 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_191 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_192 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_193 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_194 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_195 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_196 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_197 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_198 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");
	var mask_2_graphics_199 = new cjs.Graphics().p("AqMKNQkOkOAAl/QAAl+EOkPQEOkOF/AAQF/AAENEOQEOEPAAF+QAAF/kOEOQkNEOl/AAQl/AAkOkOg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:124.1,y:333.3}).wait(1).to({graphics:null,x:0,y:0}).wait(69).to({graphics:mask_2_graphics_70,x:95.85,y:329.85}).wait(1).to({graphics:mask_2_graphics_71,x:97.425,y:329.15}).wait(1).to({graphics:mask_2_graphics_72,x:99,y:328.475}).wait(1).to({graphics:mask_2_graphics_73,x:100.575,y:327.8}).wait(1).to({graphics:mask_2_graphics_74,x:102.15,y:327.1}).wait(1).to({graphics:mask_2_graphics_75,x:103.725,y:326.425}).wait(1).to({graphics:mask_2_graphics_76,x:105.3,y:325.725}).wait(1).to({graphics:mask_2_graphics_77,x:106.875,y:325.05}).wait(1).to({graphics:mask_2_graphics_78,x:108.45,y:324.35}).wait(1).to({graphics:mask_2_graphics_79,x:110.025,y:323.675}).wait(1).to({graphics:mask_2_graphics_80,x:111.6,y:323}).wait(1).to({graphics:mask_2_graphics_81,x:113.175,y:322.3}).wait(1).to({graphics:mask_2_graphics_82,x:108.175,y:317.3}).wait(1).to({graphics:mask_2_graphics_83,x:103.2,y:312.325}).wait(1).to({graphics:mask_2_graphics_84,x:98.2,y:307.325}).wait(1).to({graphics:mask_2_graphics_85,x:93.175,y:302.325}).wait(1).to({graphics:mask_2_graphics_86,x:88.175,y:297.325}).wait(1).to({graphics:mask_2_graphics_87,x:83.2,y:292.35}).wait(1).to({graphics:mask_2_graphics_88,x:78.2,y:287.35}).wait(1).to({graphics:mask_2_graphics_89,x:81.95,y:288.7}).wait(1).to({graphics:mask_2_graphics_90,x:85.725,y:290.05}).wait(1).to({graphics:mask_2_graphics_91,x:89.475,y:291.4}).wait(1).to({graphics:mask_2_graphics_92,x:93.325,y:296.05}).wait(1).to({graphics:mask_2_graphics_93,x:97.15,y:300.7}).wait(1).to({graphics:mask_2_graphics_94,x:101.025,y:305.35}).wait(1).to({graphics:mask_2_graphics_95,x:104.875,y:310}).wait(1).to({graphics:mask_2_graphics_96,x:108.7,y:314.7}).wait(1).to({graphics:mask_2_graphics_97,x:112.55,y:319.35}).wait(1).to({graphics:mask_2_graphics_98,x:116.425,y:324}).wait(1).to({graphics:mask_2_graphics_99,x:120.25,y:328.65}).wait(1).to({graphics:mask_2_graphics_100,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_101,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_102,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_103,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_104,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_105,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_106,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_107,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_108,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_109,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_110,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_111,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_112,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_113,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_114,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_115,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_116,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_117,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_118,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_119,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_120,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_121,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_122,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_123,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_124,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_125,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_126,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_127,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_128,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_129,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_130,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_131,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_132,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_133,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_134,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_135,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_136,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_137,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_138,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_139,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_140,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_141,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_142,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_143,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_144,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_145,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_146,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_147,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_148,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_149,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_150,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_151,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_152,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_153,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_154,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_155,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_156,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_157,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_158,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_159,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_160,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_161,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_162,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_163,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_164,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_165,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_166,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_167,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_168,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_169,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_170,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_171,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_172,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_173,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_174,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_175,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_176,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_177,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_178,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_179,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_180,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_181,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_182,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_183,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_184,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_185,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_186,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_187,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_188,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_189,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_190,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_191,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_192,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_193,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_194,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_195,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_196,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_197,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_198,x:124.1,y:333.3}).wait(1).to({graphics:mask_2_graphics_199,x:124.1,y:333.3}).wait(1));

	// hoja_5
	this.instance_4 = new lib.hoja_5();
	this.instance_4.setTransform(152.5,291.7,0.7529,0.7516,0,0.3443,0,73.8,45.2);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},1).wait(69).to({_off:false,regX:73.2,regY:45.9,scaleX:0.1523,scaleY:0.1485,skewX:-54.6608,skewY:-65.4325,x:99.45,y:320},0).to({regX:73.5,regY:45.2,scaleX:0.2366,scaleY:0.2425,skewX:-45.0178,skewY:-49.9285,x:104.9,y:305.4},3).to({regY:45.6,scaleX:0.5173,scaleY:0.4969,skewX:-24.9455,skewY:-42.0711,x:118.85,y:289.65},5).to({regY:45.1,scaleX:0.7523,scaleY:0.7523,skewX:0,skewY:0,x:152.9,y:291.7},5).to({regX:73.7,regY:45.2,skewX:2.0969,skewY:0.8785,x:153.45,y:292.6},30).to({scaleX:0.753,scaleY:0.7516,skewX:0.3443,skewY:-0.5446,x:152.45,y:291.15},48).to({regX:73.8,scaleX:0.7529,skewX:0.3443,skewY:0,x:152.5,y:291.7},38).wait(1));

	// Capa_17 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_0 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_65 = new cjs.Graphics().p("Ag7A9QgagZAAgkQAAgiAagaQAYgZAjAAQAkAAAYAZQAZAaABAiQgBAkgZAZQgYAZgkgBQgjABgYgZg");
	var mask_3_graphics_66 = new cjs.Graphics().p("AhaBcQgmgmAAg2QAAg1AmgmQAmgmA0AAQA2AAAmAmQAmAmgBA1QABA2gmAmQgmAmg2AAQg0AAgmgmg");
	var mask_3_graphics_67 = new cjs.Graphics().p("Ah6B7QgzgzABhIQgBhHAzgzQAzgyBHgBQBIABAzAyQAyAzAABHQAABIgyAzQgzAyhIABQhHgBgzgyg");
	var mask_3_graphics_68 = new cjs.Graphics().p("AiZCaQhAhAABhaQgBhZBAhAQBAhABZAAQBbAAA/BAQBABAAABZQAABahABAQg/BAhbAAQhZAAhAhAg");
	var mask_3_graphics_69 = new cjs.Graphics().p("Ai4C5QhNhMAAhtQAAhrBNhNQBMhNBsAAQBtAABMBNQBNBNAABrQAABthNBMQhMBNhtAAQhsAAhMhNg");
	var mask_3_graphics_70 = new cjs.Graphics().p("AjYDYQhYhZgBh/QABh+BYhZQBahaB+AAQB/AABZBaQBZBZAAB+QAAB/hZBZQhZBah/AAQh+AAhahag");
	var mask_3_graphics_71 = new cjs.Graphics().p("Aj3D4QhmhnAAiRQAAiQBmhmQBnhnCQAAQCRAABnBnQBmBmAACQQAACRhmBnQhnBmiRAAQiQAAhnhmg");
	var mask_3_graphics_72 = new cjs.Graphics().p("AkWEXQhzh0AAijQAAijBzhyQBzh0CjAAQCkAABzB0QBzByAACjQAACjhzB0QhzBzikAAQijAAhzhzg");
	var mask_3_graphics_73 = new cjs.Graphics().p("Ak1E2QiAiAAAi2QAAi1CAiAQCAiAC1AAQC2AACACAQCACAAAC1QAAC2iACAQiACAi2AAQi1AAiAiAg");
	var mask_3_graphics_74 = new cjs.Graphics().p("AlUFVQiNiNAAjIQAAjHCNiNQCNiNDHAAQDIAACNCNQCNCNAADHQAADIiNCNQiNCNjIAAQjHAAiNiNg");
	var mask_3_graphics_75 = new cjs.Graphics().p("AlyFyQiYiZAAjZQAAjYCYiZQCaiZDYAAQDZAACaCZQCYCZAADYQAADZiYCZQiaCZjZAAQjYAAiaiZg");
	var mask_3_graphics_76 = new cjs.Graphics().p("AmOGQQimimAAjqQAAjpCmilQClilDpAAQDqAAClClQCmClAADpQAADqimCmQilCljqgBQjpABililg");
	var mask_3_graphics_77 = new cjs.Graphics().p("AmsGtQixiyAAj7QAAj6CxiyQCxixD8AAQD7AACxCxQCwCyAAD6QAAD7iwCyQixCxj7AAQj8AAixixg");
	var mask_3_graphics_78 = new cjs.Graphics().p("AnJeHQi9i9AAkNQAAkMC9i+QC+i9ELAAQENAAC9C9QC9C+AAEMQAAENi9C9Qi9C9kNAAQkLAAi+i9g");
	var mask_3_graphics_79 = new cjs.Graphics().p("AnmHnQjJjJAAkeQAAkdDJjJQDJjJEdAAQEeAADJDJQDJDJAAEdQAAEejJDJQjJDJkeAAQkdAAjJjJg");
	var mask_3_graphics_80 = new cjs.Graphics().p("AoDIEQjWjVAAkvQAAkuDWjVQDVjWEuAAQEvAADVDWQDVDVAAEuQAAEvjVDVQjVDWkvAAQkuAAjVjWg");
	var mask_3_graphics_81 = new cjs.Graphics().p("AohIiQjhjiAAlAQAAk/DhjiQDijhFAAAQFAAADgDhQDiDiAAE/QAAFAjiDiQjgDhlAAAQlAAAjijhg");
	var mask_3_graphics_82 = new cjs.Graphics().p("Ao+I/QjtjuAAlRQAAlQDtjuQDujtFQAAQFRAADuDtQDtDuAAFQQAAFRjtDuQjuDtlRAAQlQAAjujtg");
	var mask_3_graphics_83 = new cjs.Graphics().p("ApbJcQj5j5AAljQAAlhD5j6QD6j5FhgBQFjABD5D5QD5D6AAFhQAAFjj5D5Qj5D5ljABQlhgBj6j5g");
	var mask_3_graphics_84 = new cjs.Graphics().p("Ap5J5QkFkGAAlzQAAlzEFkFQEGkGF0AAQFyAAEGEGQEGEFgBFzQABFzkGEGQkGEGlyAAQl0AAkGkGg");
	var mask_3_graphics_85 = new cjs.Graphics().p("AqVKXQkSkSAAmFQAAmDESkTQESkRGDAAQGFAAERERQESETAAGDQAAGFkSESQkRERmFAAQmDAAkSkRg");
	var mask_3_graphics_86 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_87 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_88 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_89 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_90 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_91 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_92 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_93 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_94 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_95 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_96 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_97 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_98 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_99 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_100 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_101 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_102 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_103 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_104 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_105 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_106 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_107 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_108 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_109 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_110 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_111 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_112 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_113 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_114 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_115 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_116 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_117 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_118 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_119 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_120 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_121 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_122 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_123 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_124 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_125 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_126 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_127 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_128 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_129 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_130 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_131 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_132 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_133 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_134 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_135 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_136 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_137 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_138 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_139 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_140 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_141 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_142 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_143 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_144 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_145 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_146 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_147 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_148 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_149 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_150 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_151 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_152 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_153 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_154 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_155 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_156 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_157 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_158 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_159 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_160 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_161 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_162 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_163 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_164 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_165 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_166 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_167 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_168 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_169 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_170 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_171 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_172 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_173 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_174 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_175 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_176 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_177 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_178 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_179 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_180 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_181 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_182 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_183 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_184 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_185 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_186 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_187 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_188 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_189 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_190 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_191 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_192 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_193 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_194 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_195 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_196 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_197 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_198 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_3_graphics_199 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:mask_3_graphics_0,x:4.025,y:322.625}).wait(1).to({graphics:null,x:0,y:0}).wait(64).to({graphics:mask_3_graphics_65,x:95.85,y:351.4}).wait(1).to({graphics:mask_3_graphics_66,x:94.1,y:351.875}).wait(1).to({graphics:mask_3_graphics_67,x:92.4,y:352.35}).wait(1).to({graphics:mask_3_graphics_68,x:90.65,y:352.825}).wait(1).to({graphics:mask_3_graphics_69,x:88.925,y:353.275}).wait(1).to({graphics:mask_3_graphics_70,x:87.2,y:353.775}).wait(1).to({graphics:mask_3_graphics_71,x:85.475,y:354.225}).wait(1).to({graphics:mask_3_graphics_72,x:83.725,y:354.7}).wait(1).to({graphics:mask_3_graphics_73,x:82.025,y:355.175}).wait(1).to({graphics:mask_3_graphics_74,x:80.275,y:355.65}).wait(1).to({graphics:mask_3_graphics_75,x:76.4,y:356.375}).wait(1).to({graphics:mask_3_graphics_76,x:72.5,y:357.1}).wait(1).to({graphics:mask_3_graphics_77,x:68.6,y:357.825}).wait(1).to({graphics:mask_3_graphics_78,x:64.7,y:211.625}).wait(1).to({graphics:mask_3_graphics_79,x:57.125,y:354.075}).wait(1).to({graphics:mask_3_graphics_80,x:49.55,y:349.575}).wait(1).to({graphics:mask_3_graphics_81,x:41.95,y:345.075}).wait(1).to({graphics:mask_3_graphics_82,x:34.375,y:340.6}).wait(1).to({graphics:mask_3_graphics_83,x:26.775,y:336.1}).wait(1).to({graphics:mask_3_graphics_84,x:19.2,y:331.625}).wait(1).to({graphics:mask_3_graphics_85,x:11.6,y:327.1}).wait(1).to({graphics:mask_3_graphics_86,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_87,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_88,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_89,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_90,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_91,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_92,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_93,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_94,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_95,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_96,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_97,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_98,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_99,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_100,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_101,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_102,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_103,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_104,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_105,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_106,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_107,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_108,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_109,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_110,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_111,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_112,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_113,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_114,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_115,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_116,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_117,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_118,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_119,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_120,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_121,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_122,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_123,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_124,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_125,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_126,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_127,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_128,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_129,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_130,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_131,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_132,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_133,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_134,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_135,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_136,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_137,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_138,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_139,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_140,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_141,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_142,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_143,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_144,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_145,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_146,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_147,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_148,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_149,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_150,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_151,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_152,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_153,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_154,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_155,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_156,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_157,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_158,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_159,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_160,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_161,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_162,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_163,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_164,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_165,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_166,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_167,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_168,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_169,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_170,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_171,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_172,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_173,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_174,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_175,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_176,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_177,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_178,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_179,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_180,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_181,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_182,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_183,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_184,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_185,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_186,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_187,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_188,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_189,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_190,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_191,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_192,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_193,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_194,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_195,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_196,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_197,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_198,x:4.025,y:322.625}).wait(1).to({graphics:mask_3_graphics_199,x:4.025,y:322.625}).wait(1));

	// hoja_4
	this.instance_5 = new lib.hoja_4();
	this.instance_5.setTransform(49.8,318.15,0.7528,0.7517,0,0.0547,-0.029,60.4,48.2);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},1).wait(64).to({_off:false,regX:61.2,scaleX:0.2712,scaleY:0.2867,skewX:20.4447,skewY:19.1189,x:80.15,y:329.2},0).to({regX:61.4,regY:48.3,scaleX:0.5804,scaleY:0.5913,skewX:0.5929,skewY:4.4014,x:58.25,y:320.2},9).to({regX:60.8,regY:47.9,scaleX:0.7523,scaleY:0.7527,skewX:-1.9436,skewY:0,x:48.8,y:317.9},6).to({regX:60.7,regY:48.1,scaleX:0.7518,skewX:-4.6291,skewY:-4.7185,x:47.3,y:321.85},30).to({regX:60.5,regY:48,scaleX:0.7525,scaleY:0.7522,skewX:-3.5821,skewY:-2.1173,x:47.7,y:319.7},25).to({regX:60.4,regY:48.2,scaleX:0.7528,scaleY:0.7517,skewX:0.0547,skewY:-0.029,x:49.8,y:318.15},64).wait(1));

	// Capa_16 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_0 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_53 = new cjs.Graphics().p("Ag8A8QgZgYAAgkQAAgjAZgYQAagaAiAAQAkAAAYAaQAZAYAAAjQAAAkgZAYQgYAZgkAAQgiAAgagZg");
	var mask_4_graphics_54 = new cjs.Graphics().p("AheBgQgogoAAg4QAAg3AognQAngoA3AAQA4AAAoAoQAnAnAAA3QAAA4gnAoQgoAng4AAQg3AAgngng");
	var mask_4_graphics_55 = new cjs.Graphics().p("AiCCCQg2g2AAhMQAAhLA2g3QA2g2BMAAQBNAAA2A2QA2A3AABLQAABMg2A2Qg2A2hNAAQhMAAg2g2g");
	var mask_4_graphics_56 = new cjs.Graphics().p("AilCmQhEhFAAhhQAAhgBEhFQBFhEBgAAQBhAABFBEQBEBFAABgQAABhhEBFQhFBEhhAAQhgAAhFhEg");
	var mask_4_graphics_57 = new cjs.Graphics().p("AjIDJQhShTAAh2QAAh1BShTQBThTB1AAQB2AABTBTQBTBTAAB1QAAB2hTBTQhTBTh2AAQh1AAhThTg");
	var mask_4_graphics_58 = new cjs.Graphics().p("AjrDsQhhhiAAiKQAAiJBhhiQBihhCJAAQCKAABiBhQBhBiAACJQAACKhhBiQhiBhiKAAQiJAAhihhg");
	var mask_4_graphics_59 = new cjs.Graphics().p("AkOEPQhwhwAAifQAAieBwhwQBwhwCeAAQCfAABwBwQBwBwAACeQAACfhwBwQhwBwifAAQieAAhwhwg");
	var mask_4_graphics_60 = new cjs.Graphics().p("AkxEyQh+h/AAizQAAizB+h+QB+h+CzAAQC0AAB+B+QB+B+AACzQAACzh+B/Qh+B+i0ABQizgBh+h+g");
	var mask_4_graphics_61 = new cjs.Graphics().p("AlUFVQiNiNAAjIQAAjHCNiNQCNiNDHAAQDIAACNCNQCNCNAADHQAADIiNCNQiNCNjIAAQjHAAiNiNg");
	var mask_4_graphics_62 = new cjs.Graphics().p("Al7F8QididAAjfQAAjeCdidQCdidDeAAQDfAACdCdQCdCdAADeQAADfidCdQidCdjfAAQjeAAididg");
	var mask_4_graphics_63 = new cjs.Graphics().p("AmiGjQititAAj2QAAj1CtitQCtitD1AAQD2AACtCtQCtCtAAD1QAAD2itCtQitCtj2AAQj1AAititg");
	var mask_4_graphics_64 = new cjs.Graphics().p("AnJHKQi9i9AAkNQAAkMC9i9QC9i9EMAAQENAAC9C9QC9C9AAEMQAAENi9C9Qi9C9kNAAQkMAAi9i9g");
	var mask_4_graphics_65 = new cjs.Graphics().p("AnwHxQjNjNAAkkQAAkiDNjOQDNjNEjAAQEkAADNDNQDNDOAAEiQAAEkjNDNQjNDNkkAAQkjAAjNjNg");
	var mask_4_graphics_66 = new cjs.Graphics().p("AoXIYQjdjeAAk6QAAk5DdjeQDejdE5AAQE6AADeDdQDdDeAAE5QAAE6jdDeQjeDdk6AAQk5AAjejdg");
	var mask_4_graphics_67 = new cjs.Graphics().p("Ao+I/QjtjuAAlRQAAlQDtjuQDujtFQAAQFRAADuDtQDtDuAAFQQAAFRjtDuQjuDtlRAAQlQAAjujtg");
	var mask_4_graphics_68 = new cjs.Graphics().p("AplJmQj9j+AAloQAAlnD9j+QD+j9FnAAQFoAAD+D9QD9D+AAFnQAAFoj9D+Qj+D9loAAQlnAAj+j9g");
	var mask_4_graphics_69 = new cjs.Graphics().p("AqMKNQkNkOAAl/QAAl+ENkOQEOkNF+AAQF/AAEOENQENEOAAF+QAAF/kNEOQkOENl/AAQl+AAkOkNg");
	var mask_4_graphics_70 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_71 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_72 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_73 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_74 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_75 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_76 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_77 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_78 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_79 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_80 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_81 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_82 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_83 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_84 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_85 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_86 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_87 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_88 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_89 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_90 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_91 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_92 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_93 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_94 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_95 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_96 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_97 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_98 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_99 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_100 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_101 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_102 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_103 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_104 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_105 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_106 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_107 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_108 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_109 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_110 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_111 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_112 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_113 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_114 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_115 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_116 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_117 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_118 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_119 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_120 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_121 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_122 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_123 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_124 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_125 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_126 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_127 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_128 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_129 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_130 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_131 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_132 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_133 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_134 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_135 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_136 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_137 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_138 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_139 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_140 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_141 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_142 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_143 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_144 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_145 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_146 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_147 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_148 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_149 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_150 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_151 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_152 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_153 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_154 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_155 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_156 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_157 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_158 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_159 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_160 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_161 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_162 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_163 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_164 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_165 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_166 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_167 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_168 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_169 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_170 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_171 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_172 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_173 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_174 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_175 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_176 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_177 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_178 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_179 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_180 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_181 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_182 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_183 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_184 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_185 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_186 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_187 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_188 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_189 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_190 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_191 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_192 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_193 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_194 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_195 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_196 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_197 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_198 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_4_graphics_199 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:mask_4_graphics_0,x:139.375,y:316.475}).wait(1).to({graphics:null,x:0,y:0}).wait(52).to({graphics:mask_4_graphics_53,x:94.25,y:390.6}).wait(1).to({graphics:mask_4_graphics_54,x:92.85,y:386.7}).wait(1).to({graphics:mask_4_graphics_55,x:91.475,y:382.8}).wait(1).to({graphics:mask_4_graphics_56,x:90.075,y:378.875}).wait(1).to({graphics:mask_4_graphics_57,x:88.7,y:374.975}).wait(1).to({graphics:mask_4_graphics_58,x:87.3,y:371.075}).wait(1).to({graphics:mask_4_graphics_59,x:85.925,y:367.175}).wait(1).to({graphics:mask_4_graphics_60,x:84.525,y:363.25}).wait(1).to({graphics:mask_4_graphics_61,x:83.125,y:359.35}).wait(1).to({graphics:mask_4_graphics_62,x:89.375,y:354.6}).wait(1).to({graphics:mask_4_graphics_63,x:95.625,y:349.825}).wait(1).to({graphics:mask_4_graphics_64,x:101.875,y:345.05}).wait(1).to({graphics:mask_4_graphics_65,x:108.125,y:340.3}).wait(1).to({graphics:mask_4_graphics_66,x:114.375,y:335.525}).wait(1).to({graphics:mask_4_graphics_67,x:120.625,y:330.775}).wait(1).to({graphics:mask_4_graphics_68,x:126.875,y:326}).wait(1).to({graphics:mask_4_graphics_69,x:133.125,y:321.225}).wait(1).to({graphics:mask_4_graphics_70,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_71,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_72,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_73,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_74,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_75,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_76,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_77,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_78,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_79,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_80,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_81,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_82,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_83,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_84,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_85,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_86,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_87,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_88,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_89,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_90,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_91,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_92,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_93,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_94,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_95,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_96,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_97,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_98,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_99,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_100,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_101,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_102,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_103,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_104,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_105,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_106,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_107,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_108,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_109,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_110,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_111,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_112,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_113,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_114,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_115,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_116,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_117,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_118,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_119,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_120,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_121,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_122,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_123,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_124,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_125,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_126,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_127,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_128,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_129,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_130,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_131,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_132,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_133,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_134,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_135,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_136,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_137,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_138,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_139,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_140,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_141,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_142,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_143,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_144,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_145,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_146,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_147,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_148,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_149,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_150,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_151,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_152,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_153,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_154,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_155,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_156,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_157,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_158,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_159,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_160,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_161,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_162,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_163,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_164,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_165,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_166,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_167,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_168,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_169,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_170,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_171,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_172,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_173,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_174,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_175,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_176,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_177,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_178,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_179,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_180,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_181,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_182,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_183,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_184,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_185,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_186,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_187,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_188,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_189,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_190,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_191,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_192,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_193,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_194,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_195,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_196,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_197,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_198,x:139.375,y:316.475}).wait(1).to({graphics:mask_4_graphics_199,x:139.375,y:316.475}).wait(1));

	// hoja_3
	this.instance_6 = new lib.hoja_3();
	this.instance_6.setTransform(148.95,363.55,0.7534,0.7511,0,0.078,-0.0905,75,41.1);

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},1).wait(52).to({_off:false,regX:74.7,regY:40.9,scaleX:0.4847,scaleY:0.4447,skewX:-21.077,skewY:-23.4776,x:125.45,y:366.1},0).to({regX:74.9,regY:41,scaleX:0.6176,scaleY:0.5996,skewX:-8.0715,skewY:-10.0944,x:139.7,y:365.95},5).to({regX:74.5,regY:40.8,scaleX:0.7523,scaleY:0.7533,skewX:-3.0235,skewY:0,x:149.7,y:363.5},5).to({regX:74.7,regY:40.9,scaleX:0.7535,scaleY:0.7514,skewX:-0.3479,skewY:1.4794,x:148.5,y:365},13).to({regY:41,scaleX:0.7532,skewX:-0.3479,skewY:0.0383,y:363.65},14).to({regX:74.9,regY:41.1,scaleX:0.7534,scaleY:0.7512,skewX:-1.0883,skewY:-1.8245,x:148.25,y:361.85},46).to({regX:75,scaleY:0.7511,skewX:0.078,skewY:-0.0905,x:148.95,y:363.55},63).wait(1));

	// Capa_15 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_0 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_45 = new cjs.Graphics().p("Ag7A8QgZgYAAgkQAAgiAZgZQAYgZAjAAQAjAAAZAZQAaAZAAAiQAAAkgaAYQgZAagjAAQgjAAgYgag");
	var mask_5_graphics_46 = new cjs.Graphics().p("AhkBlQgpgqAAg7QAAg6ApgqQAqgpA6AAQA7AAAqApQApAqAAA6QAAA7gpAqQgqApg7AAQg6AAgqgpg");
	var mask_5_graphics_47 = new cjs.Graphics().p("AiMCMQg6g6AAhSQAAhSA6g6QA7g6BRAAQBTAAA6A6QA6A6AABSQAABSg6A6Qg6A7hTAAQhRAAg7g7g");
	var mask_5_graphics_48 = new cjs.Graphics().p("Ai0C1QhLhLAAhqQAAhpBLhLQBLhLBpAAQBqAABLBLQBLBLAABpQAABqhLBLQhLBKhqABQhpgBhLhKg");
	var mask_5_graphics_49 = new cjs.Graphics().p("AjcDdQhbhcAAiBQAAiBBbhaQBbhcCBAAQCCAABbBcQBbBaAACBQAACBhbBcQhbBbiCAAQiBAAhbhbg");
	var mask_5_graphics_50 = new cjs.Graphics().p("AkEEFQhshsABiZQgBiYBshsQBrhsCZAAQCZAABsBsQBrBsABCYQgBCZhrBsQhsBsiZAAQiZAAhrhsg");
	var mask_5_graphics_51 = new cjs.Graphics().p("AksEtQh8h9AAiwQAAiwB8h8QB9h8CwAAQCwAAB8B8QB8B8AACwQAACwh8B9Qh8B8iwAAQiwAAh9h8g");
	var mask_5_graphics_52 = new cjs.Graphics().p("AlUFVQiNiNAAjIQAAjHCNiNQCNiNDHAAQDIAACNCNQCNCNAADHQAADIiNCNQiNCNjIAAQjHAAiNiNg");
	var mask_5_graphics_53 = new cjs.Graphics().p("AmaGbQiqiqAAjxQAAjwCqiqQCqiqDwAAQDxAACqCqQCqCqAADwQAADxiqCqQiqCqjxAAQjwAAiqiqg");
	var mask_5_graphics_54 = new cjs.Graphics().p("AngHhQjHjHAAkaQAAkZDHjHQDHjHEZAAQEbAADHDHQDGDHAAEZQAAEajGDHQjHDHkbAAQkZAAjHjHg");
	var mask_5_graphics_55 = new cjs.Graphics().p("AomIoQjkjkAAlEQAAlCDkjkQDjjkFEAAQFCAADkDkQDkDkAAFCQAAFEjkDkQjkDjlCAAQlEAAjjjjg");
	var mask_5_graphics_56 = new cjs.Graphics().p("AptJuQkAkBAAltQAAlsEAkBQEBkAFsAAQFtAAEBEAQEAEBAAFsQAAFtkAEBQkBEAltAAQlsAAkBkAg");
	var mask_5_graphics_57 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_58 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_59 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_60 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_61 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_62 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_63 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_64 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_65 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_66 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_67 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_68 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_69 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_70 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_71 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_72 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_73 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_74 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_75 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_76 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_77 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_78 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_79 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_80 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_81 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_82 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_83 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_84 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_85 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_86 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_87 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_88 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_89 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_90 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_91 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_92 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_93 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_94 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_95 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_96 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_97 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_98 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_99 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_100 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_101 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_102 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_103 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_104 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_105 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_106 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_107 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_108 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_109 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_110 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_111 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_112 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_113 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_114 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_115 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_116 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_117 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_118 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_119 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_120 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_121 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_122 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_123 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_124 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_125 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_126 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_127 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_128 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_129 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_130 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_131 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_132 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_133 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_134 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_135 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_136 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_137 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_138 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_139 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_140 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_141 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_142 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_143 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_144 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_145 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_146 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_147 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_148 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_149 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_150 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_151 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_152 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_153 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_154 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_155 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_156 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_157 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_158 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_159 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_160 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_161 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_162 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_163 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_164 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_165 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_166 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_167 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_168 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_169 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_170 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_171 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_172 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_173 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_174 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_175 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_176 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_177 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_178 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_179 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_180 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_181 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_182 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_183 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_184 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_185 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_186 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_187 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_188 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_189 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_190 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_191 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_192 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_193 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_194 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_195 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_196 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_197 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_198 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");
	var mask_5_graphics_199 = new cjs.Graphics().p("AqzK0QkdkeAAmWQAAmVEdkeQEekdGVAAQGWAAEeEdQEdEeAAGVQAAGWkdEeQkeEdmWAAQmVAAkekdg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:mask_5_graphics_0,x:62.525,y:417.375}).wait(1).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_5_graphics_45,x:95.2,y:409.4}).wait(1).to({graphics:mask_5_graphics_46,x:96.925,y:407.325}).wait(1).to({graphics:mask_5_graphics_47,x:98.625,y:405.275}).wait(1).to({graphics:mask_5_graphics_48,x:100.35,y:403.2}).wait(1).to({graphics:mask_5_graphics_49,x:102.075,y:401.1}).wait(1).to({graphics:mask_5_graphics_50,x:103.8,y:399.025}).wait(1).to({graphics:mask_5_graphics_51,x:105.5,y:396.975}).wait(1).to({graphics:mask_5_graphics_52,x:107.225,y:394.9}).wait(1).to({graphics:mask_5_graphics_53,x:98.275,y:399.4}).wait(1).to({graphics:mask_5_graphics_54,x:89.35,y:403.9}).wait(1).to({graphics:mask_5_graphics_55,x:80.4,y:408.375}).wait(1).to({graphics:mask_5_graphics_56,x:71.475,y:412.875}).wait(1).to({graphics:mask_5_graphics_57,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_58,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_59,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_60,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_61,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_62,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_63,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_64,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_65,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_66,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_67,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_68,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_69,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_70,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_71,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_72,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_73,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_74,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_75,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_76,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_77,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_78,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_79,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_80,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_81,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_82,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_83,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_84,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_85,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_86,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_87,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_88,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_89,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_90,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_91,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_92,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_93,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_94,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_95,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_96,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_97,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_98,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_99,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_100,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_101,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_102,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_103,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_104,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_105,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_106,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_107,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_108,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_109,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_110,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_111,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_112,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_113,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_114,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_115,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_116,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_117,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_118,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_119,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_120,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_121,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_122,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_123,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_124,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_125,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_126,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_127,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_128,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_129,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_130,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_131,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_132,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_133,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_134,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_135,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_136,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_137,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_138,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_139,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_140,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_141,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_142,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_143,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_144,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_145,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_146,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_147,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_148,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_149,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_150,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_151,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_152,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_153,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_154,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_155,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_156,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_157,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_158,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_159,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_160,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_161,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_162,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_163,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_164,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_165,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_166,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_167,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_168,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_169,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_170,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_171,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_172,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_173,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_174,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_175,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_176,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_177,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_178,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_179,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_180,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_181,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_182,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_183,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_184,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_185,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_186,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_187,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_188,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_189,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_190,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_191,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_192,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_193,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_194,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_195,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_196,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_197,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_198,x:62.525,y:417.375}).wait(1).to({graphics:mask_5_graphics_199,x:62.525,y:417.375}).wait(1));

	// hoja_2
	this.instance_7 = new lib.hoja_2();
	this.instance_7.setTransform(53.4,444.75,0.7527,0.7518,0,1.8259,1.279,64,68.9);

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},1).wait(44).to({_off:false,regX:64.2,regY:68.7,scaleX:0.3036,scaleY:0.2898,skewX:42.1298,skewY:41.7522,x:73.55,y:412.9},0).to({regX:64.3,regY:68.8,scaleX:0.5603,scaleY:0.5558,skewX:14.2312,skewY:19.1643,x:64.2,y:431.7},4).to({regX:63.9,regY:68.4,scaleX:0.7528,scaleY:0.7517,skewX:2.5398,skewY:2.2245,x:51.15,y:443.6},3).to({regX:63.8,regY:68.5,scaleX:0.7523,scaleY:0.7528,skewX:-3.0537,skewY:-0.9995,x:54.1,y:446.35},4).to({regX:63.7,regY:68.4,scaleY:0.7524,skewX:-1.1318,skewY:0,x:52.25,y:445.5},6).to({regX:63.8,regY:68.5,scaleX:0.7526,scaleY:0.752,skewX:0.2314,skewY:0.9886,x:53.55,y:444.75},19).to({regX:64,scaleX:0.7525,skewX:0.2314,skewY:0.0441,x:53.65,y:445.55},25).to({regY:68.9,scaleX:0.7527,scaleY:0.7518,skewX:1.8259,skewY:1.279,x:53.4,y:444.75},45).wait(49));

	// hoja_1
	this.instance_8 = new lib.hoja_1();
	this.instance_8.setTransform(90.55,452.5,0.7521,0.7524,0,-0.2138,-0.5975,49,56);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},1).wait(35).to({_off:false,regX:48,regY:54,scaleX:0.0484,scaleY:0.141,skewX:163.9141,skewY:142.5879,x:94.85,y:441.55},0).to({regX:50.7,regY:55,scaleX:0.1896,scaleY:0.3285,skewX:136.5883,skewY:114.1821,x:84.15,y:431.15},3).to({regX:50.8,regY:55.1,scaleX:0.2937,scaleY:0.3533,skewX:87.7772,skewY:79.2266,x:77.05,y:416.4},3).to({regX:51.4,regY:55.3,scaleX:0.3976,scaleY:0.4645,skewX:42.4264,skewY:33.0162,x:74,y:432.35},3).to({regX:50.1,regY:56.4,scaleX:0.5065,scaleY:0.5597,skewX:19.0865,skewY:14.1547,x:82.15,y:442.5},3).to({regX:50.3,scaleX:0.6118,scaleY:0.6414,skewX:8.3844,skewY:8.0881,x:89.95,y:450.85},3).to({regX:48.5,regY:55.7,scaleX:0.7523,scaleY:0.7523,rotation:-3.2117,skewX:0,skewY:0,x:90.85,y:454.15},4).to({regX:48.6,regY:55.8,scaleY:0.7524,rotation:0,skewX:0.1859,skewY:-0.9728,x:90.05,y:454.25},22).to({regX:48.8,regY:55.9,scaleX:0.7522,scaleY:0.7523,skewX:-1.039,skewY:-1.2206,x:91.05,y:452.85},36).to({regX:49,regY:56,scaleX:0.7521,scaleY:0.7524,skewX:-0.2138,skewY:-0.5975,x:90.55,y:452.5},48).wait(39));

	// Capa_14 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_0 = new cjs.Graphics().p("EgIcAocMAAAhQbIHGAAIB3AAIH8AAMAAABQbgEgBWgn/QAcgcAfAAIAAAAQAfAAAdAcIAAAAg");
	var mask_6_graphics_62 = new cjs.Graphics().p("AocNeIAA6yIHGAAIB3AAIH8AAIAAaygAhWtUQAcgJAfAAIAAAAQAfAAAdAJIAAAAg");
	var mask_6_graphics_63 = new cjs.Graphics().p("AocOJIAA8HIHGAAIB3AAIH8AAIAAcHgAhWt+QAcgKAfAAIAAAAQAfAAAdAKIAAAAg");
	var mask_6_graphics_64 = new cjs.Graphics().p("AocOzIAA9aIHGAAIB3AAIH8AAIAAdagAhWunQAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_6_graphics_65 = new cjs.Graphics().p("AocPbIAA+qIHGAAIB3AAIH8AAIAAeqgAhWvPQAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_6_graphics_66 = new cjs.Graphics().p("AocQCIAA/3IHGAAIB3AAIH8AAIAAf3gAhWv1QAcgMAfAAIAAAAQAfAAAdAMIAAAAg");
	var mask_6_graphics_67 = new cjs.Graphics().p("AocQoMAAAghDIHGAAIB3AAIH8AAMAAAAhDgAhWwbQAcgMAfAAIAAAAQAfAAAdAMIAAAAg");
	var mask_6_graphics_68 = new cjs.Graphics().p("AocRMMAAAgiLIHGAAIB3AAIH8AAMAAAAiLgAhWw/QAcgMAfAAIAAAAQAfAAAdAMIAAAAg");
	var mask_6_graphics_69 = new cjs.Graphics().p("AocRvMAAAgjRIHGAAIB3AAIH8AAMAAAAjRgAhWxiQAcgMAfAAIAAAAQAfAAAdAMIAAAAg");
	var mask_6_graphics_70 = new cjs.Graphics().p("AocSRMAAAgkUIHGAAIB3AAIH8AAMAAAAkUgAhWyDQAcgNAfAAIAAAAQAfAAAdANIAAAAg");
	var mask_6_graphics_71 = new cjs.Graphics().p("AocSxMAAAglUIHGAAIB3AAIH8AAMAAAAlUgAhWyjQAcgNAfAAIAAAAQAfAAAdANIAAAAg");
	var mask_6_graphics_72 = new cjs.Graphics().p("AocTRMAAAgmSIHGAAIB3AAIH8AAMAAAAmSgAhWzBQAcgOAfgBIAAAAQAfABAdAOIAAAAg");
	var mask_6_graphics_73 = new cjs.Graphics().p("AocTuMAAAgnNIHGAAIB3AAIH8AAMAAAAnNgAhWzfQAcgOAfAAIAAAAQAfAAAdAOIAAAAg");
	var mask_6_graphics_74 = new cjs.Graphics().p("AocULMAAAgoHIHGAAIB3AAIH8AAMAAAAoHgAhWz8QAcgOAfAAIAAAAQAfAAAdAOIAAAAg");
	var mask_6_graphics_75 = new cjs.Graphics().p("AocUmMAAAgo8IHGAAIB3AAIH8AAMAAAAo8gAhW0WQAcgPAfAAIAAAAQAfAAAdAPIAAAAg");
	var mask_6_graphics_76 = new cjs.Graphics().p("AocVAMAAAgpwIHGAAIB3AAIH8AAMAAAApwgAhW0wQAcgPAfAAIAAAAQAfAAAdAPIAAAAg");
	var mask_6_graphics_77 = new cjs.Graphics().p("AocVYMAAAgqgIHGAAIB3AAIH8AAMAAAAqggAhW1IQAcgPAfAAIAAAAQAfAAAdAPIAAAAg");
	var mask_6_graphics_78 = new cjs.Graphics().p("AocVvMAAAgrOIHGAAIB3AAIH8AAMAAAArOgAhW1fQAcgPAfAAIAAAAQAfAAAdAPIAAAAg");
	var mask_6_graphics_79 = new cjs.Graphics().p("AocWFMAAAgr6IHGAAIB3AAIH8AAMAAAAr6gAhW11QAcgPAfAAIAAAAQAfAAAdAPIAAAAg");
	var mask_6_graphics_80 = new cjs.Graphics().p("AocWaMAAAgsjIHGAAIB3AAIH8AAMAAAAsjgAhW2JQAcgPAfgBIAAAAQAfABAdAPIAAAAg");
	var mask_6_graphics_81 = new cjs.Graphics().p("AocWsMAAAgtIIHGAAIB3AAIH8AAMAAAAtIgAhW2cQAcgPAfAAIAAAAQAfAAAdAPIAAAAg");
	var mask_6_graphics_82 = new cjs.Graphics().p("AocW+MAAAgtrIHGAAIB3AAIH8AAMAAAAtrgAhW2tQAcgQAfAAIAAAAQAfAAAdAQIAAAAg");
	var mask_6_graphics_83 = new cjs.Graphics().p("AocXPMAAAguNIHGAAIB3AAIH8AAMAAAAuNgAhW2+QAcgQAfAAIAAAAQAfAAAdAQIAAAAg");
	var mask_6_graphics_84 = new cjs.Graphics().p("AocXeMAAAgurIHGAAIB3AAIH8AAMAAAAurgAhW3NQAcgQAfAAIAAAAQAfAAAdAQIAAAAg");
	var mask_6_graphics_85 = new cjs.Graphics().p("AocXsMAAAgvGIHGAAIB3AAIH8AAMAAAAvGgAhW3aQAcgRAfAAIAAAAQAfAAAdARIAAAAg");
	var mask_6_graphics_86 = new cjs.Graphics().p("AocX5MAAAgvgIHGAAIB3AAIH8AAMAAAAvggAhW3nQAcgRAfAAIAAAAQAfAAAdARIAAAAg");
	var mask_6_graphics_87 = new cjs.Graphics().p("AocYEMAAAgv2IHGAAIB3AAIH8AAMAAAAv2gAhW3yQAcgRAfAAIAAAAQAfAAAdARIAAAAg");
	var mask_6_graphics_88 = new cjs.Graphics().p("AocYOMAAAgwKIHGAAIB3AAIH8AAMAAAAwKgAhW38QAcgRAfAAIAAAAQAfAAAdARIAAAAg");
	var mask_6_graphics_89 = new cjs.Graphics().p("AocYWMAAAgwaIHGAAIB3AAIH8AAMAAAAwagAhW4EQAcgRAfAAIAAAAQAfAAAdARIAAAAg");
	var mask_6_graphics_90 = new cjs.Graphics().p("AocYeMAAAgwpIHGAAIB3AAIH8AAMAAAAwpgAhW4LQAcgSAfAAIAAAAQAfAAAdASIAAAAg");
	var mask_6_graphics_91 = new cjs.Graphics().p("AocYkMAAAgw1IHGAAIB3AAIH8AAMAAAAw1gAhW4RQAcgSAfAAIAAAAQAfAAAdASIAAAAg");
	var mask_6_graphics_92 = new cjs.Graphics().p("AocYoMAAAgw+IHGAAIB3AAIH8AAMAAAAw+gAhW4WQAcgRAfAAIAAAAQAfAAAdARIAAAAg");
	var mask_6_graphics_93 = new cjs.Graphics().p("AocYrMAAAgxEIHGAAIB3AAIH8AAMAAAAxEgAhW4ZQAcgRAfAAIAAAAQAfAAAdARIAAAAg");
	var mask_6_graphics_94 = new cjs.Graphics().p("AocYuMAAAgxJIHGAAIB3AAIH8AAMAAAAxJgAhW4bQAcgRAfgBIAAAAQAfABAdARIAAAAg");
	var mask_6_graphics_95 = new cjs.Graphics().p("AocYuMAAAgxKIHGAAIB3AAIH8AAMAAAAxKgAhW4cQAcgRAfAAIAAAAQAfAAAdARIAAAAg");
	var mask_6_graphics_96 = new cjs.Graphics().p("AocYvMAAAgxLIHGAAIB3AAIH8AAMAAAAxLgAhW4cQAcgSAfAAIAAAAQAfAAAdASIAAAAg");
	var mask_6_graphics_97 = new cjs.Graphics().p("AocYvMAAAgxMIHGAAIB3AAIH8AAMAAAAxMgAhW4dQAcgRAfAAIAAAAQAfAAAdARIAAAAg");
	var mask_6_graphics_98 = new cjs.Graphics().p("AocYwMAAAgxOIHGAAIB3AAIH8AAMAAAAxOgAhW4eQAcgRAfAAIAAAAQAfAAAdARIAAAAg");
	var mask_6_graphics_99 = new cjs.Graphics().p("AocYyMAAAgxSIHGAAIB3AAIH8AAMAAAAxSgAhW4gQAcgRAfAAIAAAAQAfAAAdARIAAAAg");
	var mask_6_graphics_100 = new cjs.Graphics().p("AocY0MAAAgxVIHGAAIB3AAIH8AAMAAAAxVgAhW4hQAcgSAfAAIAAAAQAfAAAdASIAAAAg");
	var mask_6_graphics_101 = new cjs.Graphics().p("AocY3MAAAgxbIHGAAIB3AAIH8AAMAAAAxbgAhW4kQAcgSAfAAIAAAAQAfAAAdASIAAAAg");
	var mask_6_graphics_102 = new cjs.Graphics().p("AocY6MAAAgxiIHGAAIB3AAIH8AAMAAAAxigAhW4oQAcgRAfAAIAAAAQAfAAAdARIAAAAg");
	var mask_6_graphics_103 = new cjs.Graphics().p("AocY+MAAAgxqIHGAAIB3AAIH8AAMAAAAxqgAhW4sQAcgRAfAAIAAAAQAfAAAdARIAAAAg");
	var mask_6_graphics_104 = new cjs.Graphics().p("AocZCMAAAgxxIHGAAIB3AAIH8AAMAAAAxxgAhW4vQAcgSAfAAIAAAAQAfAAAdASIAAAAg");
	var mask_6_graphics_105 = new cjs.Graphics().p("AocZHMAAAgx7IHGAAIB3AAIH8AAMAAAAx7gAhW40QAcgSAfAAIAAAAQAfAAAdASIAAAAg");
	var mask_6_graphics_106 = new cjs.Graphics().p("AocZMMAAAgyGIHGAAIB3AAIH8AAMAAAAyGgAhW46QAcgRAfAAIAAAAQAfAAAdARIAAAAg");
	var mask_6_graphics_107 = new cjs.Graphics().p("AocZSMAAAgyRIHGAAIB3AAIH8AAMAAAAyRgAhW4/QAcgSAfAAIAAAAQAfAAAdASIAAAAg");
	var mask_6_graphics_108 = new cjs.Graphics().p("AocZYMAAAgydIHGAAIB3AAIH8AAMAAAAydgAhW5FQAcgSAfAAIAAAAQAfAAAdASIAAAAg");
	var mask_6_graphics_109 = new cjs.Graphics().p("AocZeMAAAgypIHGAAIB3AAIH8AAMAAAAypgAhW5LQAcgTAfABIAAAAQAfgBAdATIAAAAg");
	var mask_6_graphics_110 = new cjs.Graphics().p("AocZmMAAAgy5IHGAAIB3AAIH8AAMAAAAy5gAhW5TQAcgRAfgBIAAAAQAfABAdARIAAAAg");
	var mask_6_graphics_111 = new cjs.Graphics().p("AocZtMAAAgzHIHGAAIB3AAIH8AAMAAAAzHgAhW5aQAcgSAfAAIAAAAQAfAAAdASIAAAAg");
	var mask_6_graphics_112 = new cjs.Graphics().p("AocZ1MAAAgzXIHGAAIB3AAIH8AAMAAAAzXgAhW5iQAcgSAfAAIAAAAQAfAAAdASIAAAAg");
	var mask_6_graphics_113 = new cjs.Graphics().p("AocZ+MAAAgzoIHGAAIB3AAIH8AAMAAAAzogAhW5qQAcgTAfAAIAAAAQAfAAAdATIAAAAg");
	var mask_6_graphics_114 = new cjs.Graphics().p("AocaHMAAAgz7IHGAAIB3AAIH8AAMAAAAz7gAhW50QAcgSAfAAIAAAAQAfAAAdASIAAAAg");
	var mask_6_graphics_115 = new cjs.Graphics().p("AocaQMAAAg0NIHGAAIB3AAIH8AAMAAAA0NgAhW59QAcgSAfAAIAAAAQAfAAAdASIAAAAg");
	var mask_6_graphics_116 = new cjs.Graphics().p("AocaaMAAAg0hIHGAAIB3AAIH8AAMAAAA0hgAhW6HQAcgSAfAAIAAAAQAfAAAdASIAAAAg");
	var mask_6_graphics_117 = new cjs.Graphics().p("AocalMAAAg02IHGAAIB3AAIH8AAMAAAA02gAhW6RQAcgTAfAAIAAAAQAfAAAdATIAAAAg");
	var mask_6_graphics_118 = new cjs.Graphics().p("AocawMAAAg1MIHGAAIB3AAIH8AAMAAAA1MgAhW6cQAcgTAfAAIAAAAQAfAAAdATIAAAAg");
	var mask_6_graphics_119 = new cjs.Graphics().p("Aoca8MAAAg1kIHGAAIB3AAIH8AAMAAAA1kgAhW6oQAcgTAfAAIAAAAQAfAAAdATIAAAAg");
	var mask_6_graphics_120 = new cjs.Graphics().p("AocbIMAAAg18IHGAAIB3AAIH8AAMAAAA18gAhW60QAcgTAfAAIAAAAQAfAAAdATIAAAAg");
	var mask_6_graphics_121 = new cjs.Graphics().p("AocbUMAAAg2UIHGAAIB3AAIH8AAMAAAA2UgAhW7AQAcgTAfAAIAAAAQAfAAAdATIAAAAg");
	var mask_6_graphics_122 = new cjs.Graphics().p("AocbhMAAAg2uIHGAAIB3AAIH8AAMAAAA2ugAhW7NQAcgUAfABIAAAAQAfgBAdAUIAAAAg");
	var mask_6_graphics_123 = new cjs.Graphics().p("AocbvMAAAg3JIHGAAIB3AAIH8AAMAAAA3JgAhW7aQAcgUAfAAIAAAAQAfAAAdAUIAAAAg");
	var mask_6_graphics_124 = new cjs.Graphics().p("Aocb9MAAAg3lIHGAAIB3AAIH8AAMAAAA3lgAhW7oQAcgUAfAAIAAAAQAfAAAdAUIAAAAg");
	var mask_6_graphics_125 = new cjs.Graphics().p("AoccLMAAAg4CIHGAAIB3AAIH8AAMAAAA4CgAhW73QAcgTAfAAIAAAAQAfAAAdATIAAAAg");
	var mask_6_graphics_126 = new cjs.Graphics().p("AoccaMAAAg4fIHGAAIB3AAIH8AAMAAAA4fgAhW8FQAcgUAfAAIAAAAQAfAAAdAUIAAAAg");
	var mask_6_graphics_127 = new cjs.Graphics().p("AoccqMAAAg4/IHGAAIB3AAIH8AAMAAAA4/gAhW8VQAcgUAfAAIAAAAQAfAAAdAUIAAAAg");
	var mask_6_graphics_128 = new cjs.Graphics().p("AocdQMAAAg6KIHGAAIB3AAIH8AAMAAAA6KgAhW86QAcgVAfAAIAAAAQAfAAAdAVIAAAAg");
	var mask_6_graphics_129 = new cjs.Graphics().p("Aocd1MAAAg7UIHGAAIB3AAIH8AAMAAAA7UgAhW9fQAcgVAfAAIAAAAQAfAAAdAVIAAAAg");
	var mask_6_graphics_130 = new cjs.Graphics().p("AoceZMAAAg8cIHGAAIB3AAIH8AAMAAAA8cgAhW+DQAcgWAfABIAAAAQAfgBAdAWIAAAAg");
	var mask_6_graphics_131 = new cjs.Graphics().p("Aoce8MAAAg9iIHGAAIB3AAIH8AAMAAAA9igAhW+mQAcgVAfAAIAAAAQAfAAAdAVIAAAAg");
	var mask_6_graphics_132 = new cjs.Graphics().p("AocffMAAAg+nIHGAAIB3AAIH8AAMAAAA+ngAhW/IQAcgWAfAAIAAAAQAfAAAdAWIAAAAg");
	var mask_6_graphics_133 = new cjs.Graphics().p("EgIcAgAMAAAg/pIHGAAIB3AAIH8AAMAAAA/pgAhW/pQAcgWAfAAIAAAAQAfAAAdAWIAAAAg");
	var mask_6_graphics_134 = new cjs.Graphics().p("EgIcAggMAAAhAoIHGAAIB3AAIH8AAMAAABAogEgBWggIQAcgXAfAAIAAAAQAfAAAdAXIAAAAg");
	var mask_6_graphics_135 = new cjs.Graphics().p("EgIcAg/MAAAhBnIHGAAIB3AAIH8AAMAAABBngEgBWggoQAcgWAfAAIAAAAQAfAAAdAWIAAAAg");
	var mask_6_graphics_136 = new cjs.Graphics().p("EgIcAheMAAAhCkIHGAAIB3AAIH8AAMAAABCkgEgBWghGQAcgXAfAAIAAAAQAfAAAdAXIAAAAg");
	var mask_6_graphics_137 = new cjs.Graphics().p("EgIcAh7MAAAhDdIHGAAIB3AAIH8AAMAAABDdgEgBWghiQAcgYAfAAIAAAAQAfAAAdAYIAAAAg");
	var mask_6_graphics_138 = new cjs.Graphics().p("EgIcAiXMAAAhEVIHGAAIB3AAIH8AAMAAABEVgEgBWgh+QAcgYAfAAIAAAAQAfAAAdAYIAAAAg");
	var mask_6_graphics_139 = new cjs.Graphics().p("EgIcAizMAAAhFMIHGAAIB3AAIH8AAMAAABFMgEgBWgiZQAcgZAfAAIAAAAQAfAAAdAZIAAAAg");
	var mask_6_graphics_140 = new cjs.Graphics().p("EgIcAjNMAAAhGBIHGAAIB3AAIH8AAMAAABGBgEgBWgi0QAcgYAfAAIAAAAQAfAAAdAYIAAAAg");
	var mask_6_graphics_141 = new cjs.Graphics().p("EgIcAjmMAAAhGyIHGAAIB3AAIH8AAMAAABGygEgBWgjMQAcgZAfAAIAAAAQAfAAAdAZIAAAAg");
	var mask_6_graphics_142 = new cjs.Graphics().p("EgIcAj/MAAAhHjIHGAAIB3AAIH8AAMAAABHjgEgBWgjkQAcgZAfgBIAAAAQAfABAdAZIAAAAg");
	var mask_6_graphics_143 = new cjs.Graphics().p("EgIcAkWMAAAhIRIHGAAIB3AAIH8AAMAAABIRgEgBWgj7QAcgaAfAAIAAAAQAfAAAdAaIAAAAg");
	var mask_6_graphics_144 = new cjs.Graphics().p("EgIcAksMAAAhI+IHGAAIB3AAIH8AAMAAABI+gEgBWgkSQAcgZAfAAIAAAAQAfAAAdAZIAAAAg");
	var mask_6_graphics_145 = new cjs.Graphics().p("EgIcAlBMAAAhJnIHGAAIB3AAIH8AAMAAABJngEgBWgkmQAcgaAfAAIAAAAQAfAAAdAaIAAAAg");
	var mask_6_graphics_146 = new cjs.Graphics().p("EgIcAlWMAAAhKRIHGAAIB3AAIH8AAMAAABKRgEgBWgk7QAcgaAfAAIAAAAQAfAAAdAaIAAAAg");
	var mask_6_graphics_147 = new cjs.Graphics().p("EgIcAlpMAAAhK3IHGAAIB3AAIH8AAMAAABK3gEgBWglOQAcgaAfAAIAAAAQAfAAAdAaIAAAAg");
	var mask_6_graphics_148 = new cjs.Graphics().p("EgIcAl7MAAAhLbIHGAAIB3AAIH8AAMAAABLbgEgBWglgQAcgbAfABIAAAAQAfgBAdAbIAAAAg");
	var mask_6_graphics_149 = new cjs.Graphics().p("EgIcAmNMAAAhL+IHGAAIB3AAIH8AAMAAABL+gEgBWglxQAcgbAfAAIAAAAQAfAAAdAbIAAAAg");
	var mask_6_graphics_150 = new cjs.Graphics().p("EgIcAmdMAAAhMeIHGAAIB3AAIH8AAMAAABMegEgBWgmBQAcgbAfAAIAAAAQAfAAAdAbIAAAAg");
	var mask_6_graphics_151 = new cjs.Graphics().p("EgIcAmsMAAAhM8IHGAAIB3AAIH8AAMAAABM8gEgBWgmQQAcgbAfAAIAAAAQAfAAAdAbIAAAAg");
	var mask_6_graphics_152 = new cjs.Graphics().p("EgIcAm7MAAAhNZIHGAAIB3AAIH8AAMAAABNZgEgBWgmeQAcgcAfAAIAAAAQAfAAAdAcIAAAAg");
	var mask_6_graphics_153 = new cjs.Graphics().p("EgIcAnJMAAAhN1IHGAAIB3AAIH8AAMAAABN1gEgBWgmsQAcgbAfgBIAAAAQAfABAdAbIAAAAg");
	var mask_6_graphics_154 = new cjs.Graphics().p("EgIcAnVMAAAhONIHGAAIB3AAIH8AAMAAABONgEgBWgm4QAcgcAfAAIAAAAQAfAAAdAcIAAAAg");
	var mask_6_graphics_155 = new cjs.Graphics().p("EgIcAngMAAAhOkIHGAAIB3AAIH8AAMAAABOkgEgBWgnEQAcgbAfAAIAAAAQAfAAAdAbIAAAAg");
	var mask_6_graphics_156 = new cjs.Graphics().p("EgIcAnrMAAAhO5IHGAAIB3AAIH8AAMAAABO5gEgBWgnOQAcgcAfAAIAAAAQAfAAAdAcIAAAAg");
	var mask_6_graphics_157 = new cjs.Graphics().p("EgIcAn0MAAAhPLIHGAAIB3AAIH8AAMAAABPLgEgBWgnXQAcgcAfAAIAAAAQAfAAAdAcIAAAAg");
	var mask_6_graphics_158 = new cjs.Graphics().p("EgIcAn8MAAAhPbIHGAAIB3AAIH8AAMAAABPbgEgBWgnfQAcgcAfAAIAAAAQAfAAAdAcIAAAAg");
	var mask_6_graphics_159 = new cjs.Graphics().p("EgIcAoEMAAAhPrIHGAAIB3AAIH8AAMAAABPrgEgBWgnnQAcgcAfAAIAAAAQAfAAAdAcIAAAAg");
	var mask_6_graphics_160 = new cjs.Graphics().p("EgIcAoKMAAAhP3IHGAAIB3AAIH8AAMAAABP3gEgBWgntQAcgcAfAAIAAAAQAfAAAdAcIAAAAg");
	var mask_6_graphics_161 = new cjs.Graphics().p("EgIcAoQMAAAhQDIHGAAIB3AAIH8AAMAAABQDgEgBWgnzQAcgcAfAAIAAAAQAfAAAdAcIAAAAg");
	var mask_6_graphics_162 = new cjs.Graphics().p("EgIcAoUMAAAhQLIHGAAIB3AAIH8AAMAAABQLgEgBWgn3QAcgcAfAAIAAAAQAfAAAdAcIAAAAg");
	var mask_6_graphics_163 = new cjs.Graphics().p("EgIcAoYMAAAhQSIHGAAIB3AAIH8AAMAAABQSgEgBWgn6QAcgdAfAAIAAAAQAfAAAdAdIAAAAg");
	var mask_6_graphics_164 = new cjs.Graphics().p("EgIcAoaMAAAhQXIHGAAIB3AAIH8AAMAAABQXgEgBWgn9QAcgcAfAAIAAAAQAfAAAdAcIAAAAg");
	var mask_6_graphics_165 = new cjs.Graphics().p("EgIcAocMAAAhQaIHGAAIB3AAIH8AAMAAABQagEgBWgn+QAcgdAfAAIAAAAQAfAAAdAdIAAAAg");
	var mask_6_graphics_166 = new cjs.Graphics().p("EgIcAocMAAAhQbIHGAAIB3AAIH8AAMAAABQbgEgBWgn/QAcgcAfAAIAAAAQAfAAAdAcIAAAAg");
	var mask_6_graphics_167 = new cjs.Graphics().p("EgIcAocMAAAhQbIHGAAIB3AAIH8AAMAAABQbgEgBWgn/QAcgcAfAAIAAAAQAfAAAdAcIAAAAg");
	var mask_6_graphics_168 = new cjs.Graphics().p("EgIcAocMAAAhQbIHGAAIB3AAIH8AAMAAABQbgEgBWgn/QAcgcAfAAIAAAAQAfAAAdAcIAAAAg");
	var mask_6_graphics_169 = new cjs.Graphics().p("EgIcAocMAAAhQbIHGAAIB3AAIH8AAMAAABQbgEgBWgn/QAcgcAfAAIAAAAQAfAAAdAcIAAAAg");
	var mask_6_graphics_170 = new cjs.Graphics().p("EgIcAocMAAAhQbIHGAAIB3AAIH8AAMAAABQbgEgBWgn/QAcgcAfAAIAAAAQAfAAAdAcIAAAAg");
	var mask_6_graphics_171 = new cjs.Graphics().p("EgIcAocMAAAhQbIHGAAIB3AAIH8AAMAAABQbgEgBWgn/QAcgcAfAAIAAAAQAfAAAdAcIAAAAg");
	var mask_6_graphics_172 = new cjs.Graphics().p("EgIcAocMAAAhQbIHGAAIB3AAIH8AAMAAABQbgEgBWgn/QAcgcAfAAIAAAAQAfAAAdAcIAAAAg");
	var mask_6_graphics_173 = new cjs.Graphics().p("EgIcAocMAAAhQbIHGAAIB3AAIH8AAMAAABQbgEgBWgn/QAcgcAfAAIAAAAQAfAAAdAcIAAAAg");
	var mask_6_graphics_174 = new cjs.Graphics().p("EgIcAocMAAAhQbIHGAAIB3AAIH8AAMAAABQbgEgBWgn/QAcgcAfAAIAAAAQAfAAAdAcIAAAAg");
	var mask_6_graphics_175 = new cjs.Graphics().p("EgIcAocMAAAhQbIHGAAIB3AAIH8AAMAAABQbgEgBWgn/QAcgcAfAAIAAAAQAfAAAdAcIAAAAg");
	var mask_6_graphics_176 = new cjs.Graphics().p("EgIcAocMAAAhQbIHGAAIB3AAIH8AAMAAABQbgEgBWgn/QAcgcAfAAIAAAAQAfAAAdAcIAAAAg");
	var mask_6_graphics_177 = new cjs.Graphics().p("EgIcAocMAAAhQbIHGAAIB3AAIH8AAMAAABQbgEgBWgn/QAcgcAfAAIAAAAQAfAAAdAcIAAAAg");
	var mask_6_graphics_178 = new cjs.Graphics().p("EgIcAocMAAAhQbIHGAAIB3AAIH8AAMAAABQbgEgBWgn/QAcgcAfAAIAAAAQAfAAAdAcIAAAAg");
	var mask_6_graphics_179 = new cjs.Graphics().p("EgIcAocMAAAhQbIHGAAIB3AAIH8AAMAAABQbgEgBWgn/QAcgcAfAAIAAAAQAfAAAdAcIAAAAg");
	var mask_6_graphics_180 = new cjs.Graphics().p("EgIcAocMAAAhQbIHGAAIB3AAIH8AAMAAABQbgEgBWgn/QAcgcAfAAIAAAAQAfAAAdAcIAAAAg");
	var mask_6_graphics_181 = new cjs.Graphics().p("EgIcAocMAAAhQbIHGAAIB3AAIH8AAMAAABQbgEgBWgn/QAcgcAfAAIAAAAQAfAAAdAcIAAAAg");
	var mask_6_graphics_182 = new cjs.Graphics().p("EgIcAocMAAAhQbIHGAAIB3AAIH8AAMAAABQbgEgBWgn/QAcgcAfAAIAAAAQAfAAAdAcIAAAAg");
	var mask_6_graphics_183 = new cjs.Graphics().p("EgIcAocMAAAhQbIHGAAIB3AAIH8AAMAAABQbgEgBWgn/QAcgcAfAAIAAAAQAfAAAdAcIAAAAg");
	var mask_6_graphics_184 = new cjs.Graphics().p("EgIcAocMAAAhQbIHGAAIB3AAIH8AAMAAABQbgEgBWgn/QAcgcAfAAIAAAAQAfAAAdAcIAAAAg");
	var mask_6_graphics_185 = new cjs.Graphics().p("EgIcAocMAAAhQbIHGAAIB3AAIH8AAMAAABQbgEgBWgn/QAcgcAfAAIAAAAQAfAAAdAcIAAAAg");
	var mask_6_graphics_186 = new cjs.Graphics().p("EgIcAocMAAAhQbIHGAAIB3AAIH8AAMAAABQbgEgBWgn/QAcgcAfAAIAAAAQAfAAAdAcIAAAAg");
	var mask_6_graphics_187 = new cjs.Graphics().p("EgIcAocMAAAhQbIHGAAIB3AAIH8AAMAAABQbgEgBWgn/QAcgcAfAAIAAAAQAfAAAdAcIAAAAg");
	var mask_6_graphics_188 = new cjs.Graphics().p("EgIcAocMAAAhQbIHGAAIB3AAIH8AAMAAABQbgEgBWgn/QAcgcAfAAIAAAAQAfAAAdAcIAAAAg");
	var mask_6_graphics_189 = new cjs.Graphics().p("EgIcAocMAAAhQbIHGAAIB3AAIH8AAMAAABQbgEgBWgn/QAcgcAfAAIAAAAQAfAAAdAcIAAAAg");
	var mask_6_graphics_190 = new cjs.Graphics().p("EgIcAocMAAAhQbIHGAAIB3AAIH8AAMAAABQbgEgBWgn/QAcgcAfAAIAAAAQAfAAAdAcIAAAAg");
	var mask_6_graphics_191 = new cjs.Graphics().p("EgIcAocMAAAhQbIHGAAIB3AAIH8AAMAAABQbgEgBWgn/QAcgcAfAAIAAAAQAfAAAdAcIAAAAg");
	var mask_6_graphics_192 = new cjs.Graphics().p("EgIcAocMAAAhQbIHGAAIB3AAIH8AAMAAABQbgEgBWgn/QAcgcAfAAIAAAAQAfAAAdAcIAAAAg");
	var mask_6_graphics_193 = new cjs.Graphics().p("EgIcAocMAAAhQbIHGAAIB3AAIH8AAMAAABQbgEgBWgn/QAcgcAfAAIAAAAQAfAAAdAcIAAAAg");
	var mask_6_graphics_194 = new cjs.Graphics().p("EgIcAocMAAAhQbIHGAAIB3AAIH8AAMAAABQbgEgBWgn/QAcgcAfAAIAAAAQAfAAAdAcIAAAAg");
	var mask_6_graphics_195 = new cjs.Graphics().p("EgIcAocMAAAhQbIHGAAIB3AAIH8AAMAAABQbgEgBWgn/QAcgcAfAAIAAAAQAfAAAdAcIAAAAg");
	var mask_6_graphics_196 = new cjs.Graphics().p("EgIcAocMAAAhQbIHGAAIB3AAIH8AAMAAABQbgEgBWgn/QAcgcAfAAIAAAAQAfAAAdAcIAAAAg");
	var mask_6_graphics_197 = new cjs.Graphics().p("EgIcAocMAAAhQbIHGAAIB3AAIH8AAMAAABQbgEgBWgn/QAcgcAfAAIAAAAQAfAAAdAcIAAAAg");
	var mask_6_graphics_198 = new cjs.Graphics().p("EgIcAocMAAAhQbIHGAAIB3AAIH8AAMAAABQbgEgBWgn/QAcgcAfAAIAAAAQAfAAAdAcIAAAAg");
	var mask_6_graphics_199 = new cjs.Graphics().p("EgIcAocMAAAhQbIHGAAIB3AAIH8AAMAAABQbgEgBWgn/QAcgcAfAAIAAAAQAfAAAdAcIAAAAg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:mask_6_graphics_0,x:101.5002,y:284.175}).wait(1).to({graphics:null,x:0,y:0}).wait(61).to({graphics:mask_6_graphics_62,x:101.5002,y:457.6999}).wait(1).to({graphics:mask_6_graphics_63,x:101.5002,y:453.3997}).wait(1).to({graphics:mask_6_graphics_64,x:101.5002,y:449.1751}).wait(1).to({graphics:mask_6_graphics_65,x:101.5002,y:445.1499}).wait(1).to({graphics:mask_6_graphics_66,x:101.5002,y:441.1998}).wait(1).to({graphics:mask_6_graphics_67,x:101.5002,y:437.4247}).wait(1).to({graphics:mask_6_graphics_68,x:101.5002,y:433.75}).wait(1).to({graphics:mask_6_graphics_69,x:101.5002,y:430.2252}).wait(1).to({graphics:mask_6_graphics_70,x:101.5002,y:426.8502}).wait(1).to({graphics:mask_6_graphics_71,x:101.5002,y:423.5751}).wait(1).to({graphics:mask_6_graphics_72,x:101.5002,y:420.4498}).wait(1).to({graphics:mask_6_graphics_73,x:101.5002,y:417.4749}).wait(1).to({graphics:mask_6_graphics_74,x:101.5002,y:414.6003}).wait(1).to({graphics:mask_6_graphics_75,x:101.5002,y:411.8751}).wait(1).to({graphics:mask_6_graphics_76,x:101.5002,y:409.3002}).wait(1).to({graphics:mask_6_graphics_77,x:101.5002,y:406.8252}).wait(1).to({graphics:mask_6_graphics_78,x:101.5002,y:404.5}).wait(1).to({graphics:mask_6_graphics_79,x:101.5002,y:402.3}).wait(1).to({graphics:mask_6_graphics_80,x:101.5002,y:400.2498}).wait(1).to({graphics:mask_6_graphics_81,x:101.5002,y:398.2999}).wait(1).to({graphics:mask_6_graphics_82,x:101.5002,y:396.4999}).wait(1).to({graphics:mask_6_graphics_83,x:101.5002,y:394.8498}).wait(1).to({graphics:mask_6_graphics_84,x:101.5002,y:393.3247}).wait(1).to({graphics:mask_6_graphics_85,x:101.5002,y:391.9248}).wait(1).to({graphics:mask_6_graphics_86,x:101.5002,y:390.6747}).wait(1).to({graphics:mask_6_graphics_87,x:101.5002,y:389.5249}).wait(1).to({graphics:mask_6_graphics_88,x:101.5002,y:388.525}).wait(1).to({graphics:mask_6_graphics_89,x:101.5002,y:387.675}).wait(1).to({graphics:mask_6_graphics_90,x:101.5002,y:386.9248}).wait(1).to({graphics:mask_6_graphics_91,x:101.5002,y:386.325}).wait(1).to({graphics:mask_6_graphics_92,x:101.5002,y:385.875}).wait(1).to({graphics:mask_6_graphics_93,x:101.5002,y:385.5501}).wait(1).to({graphics:mask_6_graphics_94,x:101.5002,y:385.3498}).wait(1).to({graphics:mask_6_graphics_95,x:101.5002,y:385.2751}).wait(1).to({graphics:mask_6_graphics_96,x:101.5002,y:385.2499}).wait(1).to({graphics:mask_6_graphics_97,x:101.5002,y:385.1752}).wait(1).to({graphics:mask_6_graphics_98,x:101.5002,y:385.0501}).wait(1).to({graphics:mask_6_graphics_99,x:101.5002,y:384.8751}).wait(1).to({graphics:mask_6_graphics_100,x:101.5002,y:384.6501}).wait(1).to({graphics:mask_6_graphics_101,x:101.5002,y:384.3999}).wait(1).to({graphics:mask_6_graphics_102,x:101.5002,y:384.075}).wait(1).to({graphics:mask_6_graphics_103,x:101.5002,y:383.7001}).wait(1).to({graphics:mask_6_graphics_104,x:101.5002,y:383.2749}).wait(1).to({graphics:mask_6_graphics_105,x:101.5002,y:382.8249}).wait(1).to({graphics:mask_6_graphics_106,x:101.5002,y:382.3002}).wait(1).to({graphics:mask_6_graphics_107,x:101.5002,y:381.7251}).wait(1).to({graphics:mask_6_graphics_108,x:101.5002,y:381.1252}).wait(1).to({graphics:mask_6_graphics_109,x:101.5002,y:380.4502}).wait(1).to({graphics:mask_6_graphics_110,x:101.5002,y:379.75}).wait(1).to({graphics:mask_6_graphics_111,x:101.5002,y:378.9751}).wait(1).to({graphics:mask_6_graphics_112,x:101.5002,y:378.1498}).wait(1).to({graphics:mask_6_graphics_113,x:101.5002,y:377.2751}).wait(1).to({graphics:mask_6_graphics_114,x:101.5002,y:376.3751}).wait(1).to({graphics:mask_6_graphics_115,x:101.5002,y:375.3999}).wait(1).to({graphics:mask_6_graphics_116,x:101.5002,y:374.4}).wait(1).to({graphics:mask_6_graphics_117,x:101.5002,y:373.3497}).wait(1).to({graphics:mask_6_graphics_118,x:101.5002,y:372.2247}).wait(1).to({graphics:mask_6_graphics_119,x:101.5002,y:371.075}).wait(1).to({graphics:mask_6_graphics_120,x:101.5002,y:369.8748}).wait(1).to({graphics:mask_6_graphics_121,x:101.5002,y:368.6247}).wait(1).to({graphics:mask_6_graphics_122,x:101.5002,y:367.2999}).wait(1).to({graphics:mask_6_graphics_123,x:101.5002,y:365.9252}).wait(1).to({graphics:mask_6_graphics_124,x:101.5002,y:364.5252}).wait(1).to({graphics:mask_6_graphics_125,x:101.5002,y:363.0753}).wait(1).to({graphics:mask_6_graphics_126,x:101.5002,y:361.575}).wait(1).to({graphics:mask_6_graphics_127,x:101.5002,y:360.0252}).wait(1).to({graphics:mask_6_graphics_128,x:101.5002,y:356.2002}).wait(1).to({graphics:mask_6_graphics_129,x:101.5002,y:352.4499}).wait(1).to({graphics:mask_6_graphics_130,x:101.5002,y:348.7999}).wait(1).to({graphics:mask_6_graphics_131,x:101.5002,y:345.2503}).wait(1).to({graphics:mask_6_graphics_132,x:101.5002,y:341.8249}).wait(1).to({graphics:mask_6_graphics_133,x:101.5002,y:338.5003}).wait(1).to({graphics:mask_6_graphics_134,x:101.5002,y:335.2248}).wait(1).to({graphics:mask_6_graphics_135,x:101.5002,y:332.1}).wait(1).to({graphics:mask_6_graphics_136,x:101.5002,y:329.0751}).wait(1).to({graphics:mask_6_graphics_137,x:101.5002,y:326.1001}).wait(1).to({graphics:mask_6_graphics_138,x:101.5002,y:323.275}).wait(1).to({graphics:mask_6_graphics_139,x:101.5002,y:320.5251}).wait(1).to({graphics:mask_6_graphics_140,x:101.5002,y:317.9002}).wait(1).to({graphics:mask_6_graphics_141,x:101.5002,y:315.3249}).wait(1).to({graphics:mask_6_graphics_142,x:101.5002,y:312.8998}).wait(1).to({graphics:mask_6_graphics_143,x:101.5002,y:310.5499}).wait(1).to({graphics:mask_6_graphics_144,x:101.5002,y:308.3251}).wait(1).to({graphics:mask_6_graphics_145,x:101.5002,y:306.1499}).wait(1).to({graphics:mask_6_graphics_146,x:101.5002,y:304.1249}).wait(1).to({graphics:mask_6_graphics_147,x:101.5002,y:302.175}).wait(1).to({graphics:mask_6_graphics_148,x:101.5002,y:300.3498}).wait(1).to({graphics:mask_6_graphics_149,x:101.5002,y:298.5998}).wait(1).to({graphics:mask_6_graphics_150,x:101.5002,y:296.9249}).wait(1).to({graphics:mask_6_graphics_151,x:101.5002,y:295.4003}).wait(1).to({graphics:mask_6_graphics_152,x:101.5002,y:293.9499}).wait(1).to({graphics:mask_6_graphics_153,x:101.5002,y:292.5999}).wait(1).to({graphics:mask_6_graphics_154,x:101.5002,y:291.375}).wait(1).to({graphics:mask_6_graphics_155,x:101.5002,y:290.2253}).wait(1).to({graphics:mask_6_graphics_156,x:101.5002,y:289.175}).wait(1).to({graphics:mask_6_graphics_157,x:101.5002,y:288.1998}).wait(1).to({graphics:mask_6_graphics_158,x:101.5002,y:287.3497}).wait(1).to({graphics:mask_6_graphics_159,x:101.5002,y:286.6}).wait(1).to({graphics:mask_6_graphics_160,x:101.5002,y:285.975}).wait(1).to({graphics:mask_6_graphics_161,x:101.5002,y:285.4246}).wait(1).to({graphics:mask_6_graphics_162,x:101.5002,y:284.9746}).wait(1).to({graphics:mask_6_graphics_163,x:101.5002,y:284.625}).wait(1).to({graphics:mask_6_graphics_164,x:101.5002,y:284.3748}).wait(1).to({graphics:mask_6_graphics_165,x:101.5002,y:284.2249}).wait(1).to({graphics:mask_6_graphics_166,x:101.5002,y:284.175}).wait(1).to({graphics:mask_6_graphics_167,x:101.5002,y:284.175}).wait(1).to({graphics:mask_6_graphics_168,x:101.5002,y:284.175}).wait(1).to({graphics:mask_6_graphics_169,x:101.5002,y:284.175}).wait(1).to({graphics:mask_6_graphics_170,x:101.5002,y:284.175}).wait(1).to({graphics:mask_6_graphics_171,x:101.5002,y:284.175}).wait(1).to({graphics:mask_6_graphics_172,x:101.5002,y:284.175}).wait(1).to({graphics:mask_6_graphics_173,x:101.5002,y:284.175}).wait(1).to({graphics:mask_6_graphics_174,x:101.5002,y:284.175}).wait(1).to({graphics:mask_6_graphics_175,x:101.5002,y:284.175}).wait(1).to({graphics:mask_6_graphics_176,x:101.5002,y:284.175}).wait(1).to({graphics:mask_6_graphics_177,x:101.5002,y:284.175}).wait(1).to({graphics:mask_6_graphics_178,x:101.5002,y:284.175}).wait(1).to({graphics:mask_6_graphics_179,x:101.5002,y:284.175}).wait(1).to({graphics:mask_6_graphics_180,x:101.5002,y:284.175}).wait(1).to({graphics:mask_6_graphics_181,x:101.5002,y:284.175}).wait(1).to({graphics:mask_6_graphics_182,x:101.5002,y:284.175}).wait(1).to({graphics:mask_6_graphics_183,x:101.5002,y:284.175}).wait(1).to({graphics:mask_6_graphics_184,x:101.5002,y:284.175}).wait(1).to({graphics:mask_6_graphics_185,x:101.5002,y:284.175}).wait(1).to({graphics:mask_6_graphics_186,x:101.5002,y:284.175}).wait(1).to({graphics:mask_6_graphics_187,x:101.5002,y:284.175}).wait(1).to({graphics:mask_6_graphics_188,x:101.5002,y:284.175}).wait(1).to({graphics:mask_6_graphics_189,x:101.5002,y:284.175}).wait(1).to({graphics:mask_6_graphics_190,x:101.5002,y:284.175}).wait(1).to({graphics:mask_6_graphics_191,x:101.5002,y:284.175}).wait(1).to({graphics:mask_6_graphics_192,x:101.5002,y:284.175}).wait(1).to({graphics:mask_6_graphics_193,x:101.5002,y:284.175}).wait(1).to({graphics:mask_6_graphics_194,x:101.5002,y:284.175}).wait(1).to({graphics:mask_6_graphics_195,x:101.5002,y:284.175}).wait(1).to({graphics:mask_6_graphics_196,x:101.5002,y:284.175}).wait(1).to({graphics:mask_6_graphics_197,x:101.5002,y:284.175}).wait(1).to({graphics:mask_6_graphics_198,x:101.5002,y:284.175}).wait(1).to({graphics:mask_6_graphics_199,x:101.5002,y:284.175}).wait(1));

	// tallo_2
	this.instance_9 = new lib.tallo_2();
	this.instance_9.setTransform(105.7,260.15,0.7523,0.7523,0,0,0,21.9,213.1);

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},1).wait(61).to({_off:false},0).wait(138));

	// Capa_13 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_0 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_1 = new cjs.Graphics().p("Ag6A7QgYgZAAgiQAAgiAYgYQAZgYAhAAQAjAAAYAYQAYAYAAAiQAAAigYAZQgYAYgjAAQghAAgZgYg");
	var mask_7_graphics_2 = new cjs.Graphics().p("Ag/BBQgbgbAAgmQAAglAbgaQAagbAlAAQAmAAAaAbQAbAaAAAlQAAAmgbAbQgaAagmAAQglAAgagag");
	var mask_7_graphics_3 = new cjs.Graphics().p("AhFBGQgdgdAAgpQAAgpAdgcQAdgeAoABQApgBAdAeQAdAcAAApQAAApgdAdQgdAdgpABQgogBgdgdg");
	var mask_7_graphics_4 = new cjs.Graphics().p("AhLBMQgfgfAAgtQAAgsAfgfQAgggAsABQAsgBAfAgQAgAfAAAsQAAAtggAfQgfAggsAAQgsAAggggg");
	var mask_7_graphics_5 = new cjs.Graphics().p("AhRBSQgigiAAgwQAAgvAigiQAigiAvAAQAwAAAiAiQAiAiAAAvQAAAwgiAiQgiAigwAAQgvAAgigig");
	var mask_7_graphics_6 = new cjs.Graphics().p("AhXBYQgkglAAgzQAAgyAkgkQAlglAyAAQAzAAAkAlQAlAkAAAyQAAAzglAlQgkAkgzAAQgyAAglgkg");
	var mask_7_graphics_7 = new cjs.Graphics().p("AhcBdQgngmAAg3QAAg2AngmQAmgnA2AAQA3AAAmAnQAnAmAAA2QAAA3gnAmQgmAng3AAQg2AAgmgng");
	var mask_7_graphics_8 = new cjs.Graphics().p("AhiBjQgpgpAAg6QAAg5ApgpQApgpA5AAQA6AAApApQApApAAA5QAAA6gpApQgpApg6AAQg5AAgpgpg");
	var mask_7_graphics_9 = new cjs.Graphics().p("AhnBpQgsgsAAg9QAAg8AsgsQArgrA8AAQA9AAAsArQArAsAAA8QAAA9grAsQgsArg9AAQg8AAgrgrg");
	var mask_7_graphics_10 = new cjs.Graphics().p("AhtBuQgugtAAhBQAAhAAuguQAtgtBAAAQBBAAAuAtQAtAuAABAQAABBgtAtQguAuhBAAQhAAAgtgug");
	var mask_7_graphics_11 = new cjs.Graphics().p("AhzB0QgwgwAAhEQAAhDAwgwQAwgwBDAAQBEAAAwAwQAwAwAABDQAABEgwAwQgwAwhEAAQhDAAgwgwg");
	var mask_7_graphics_12 = new cjs.Graphics().p("Ah5B6QgygzAAhHQAAhHAygyQAygyBHAAQBHAAAzAyQAyAyAABHQAABHgyAzQgzAyhHAAQhHAAgygyg");
	var mask_7_graphics_13 = new cjs.Graphics().p("Ah+CAQg1g1AAhLQAAhKA1g1QA0g0BKAAQBLAAA1A0QA1A1AABKQAABLg1A1Qg1A0hLAAQhKAAg0g0g");
	var mask_7_graphics_14 = new cjs.Graphics().p("AiFCFQg2g3AAhOQAAhOA2g3QA4g3BNAAQBOAAA4A3QA3A3AABOQAABOg3A3Qg4A4hOgBQhNABg4g4g");
	var mask_7_graphics_15 = new cjs.Graphics().p("AiKCLQg5g5gBhSQABhRA5g5QA5g5BRgBQBRABA6A5QA5A5ABBRQgBBSg5A5Qg6A5hRABQhRgBg5g5g");
	var mask_7_graphics_16 = new cjs.Graphics().p("AiTCUQg8g+gBhWQABhWA8g9QA+g9BVAAQBXAAA8A9QA+A9AABWQAABWg+A+Qg8A8hXABQhVgBg+g8g");
	var mask_7_graphics_17 = new cjs.Graphics().p("AibCcQhAhAAAhcQAAhaBAhBQBAhBBbAAQBcAABABBQBBBBAABaQAABchBBAQhABBhcAAQhbAAhAhBg");
	var mask_7_graphics_18 = new cjs.Graphics().p("AikCkQhEhEAAhgQAAhgBEhEQBFhEBfAAQBhAABEBEQBEBEAABgQAABghEBEQhEBFhhAAQhfAAhFhFg");
	var mask_7_graphics_19 = new cjs.Graphics().p("AisCtQhIhIAAhlQAAhlBIhHQBIhIBkAAQBmAABHBIQBIBHAABlQAABlhIBIQhHBIhmAAQhkAAhIhIg");
	var mask_7_graphics_20 = new cjs.Graphics().p("Ai1C1QhLhLAAhqQAAhqBLhLQBMhLBpAAQBrAABLBLQBLBLAABqQAABqhLBLQhLBMhrAAQhpAAhMhMg");
	var mask_7_graphics_21 = new cjs.Graphics().p("Ai9C+QhPhOAAhwQAAhuBPhPQBOhPBvAAQBvAABPBPQBPBPAABuQAABwhPBOQhPBPhvAAQhvAAhOhPg");
	var mask_7_graphics_22 = new cjs.Graphics().p("AjGDHQhShSAAh1QAAhzBShTQBShSB0AAQB0AABSBSQBTBTAABzQAAB1hTBSQhSBSh0AAQh0AAhShSg");
	var mask_7_graphics_23 = new cjs.Graphics().p("AjODPQhWhVAAh6QAAh4BWhWQBVhWB5AAQB5AABWBWQBWBWAAB4QAAB6hWBVQhWBWh5AAQh5AAhVhWg");
	var mask_7_graphics_24 = new cjs.Graphics().p("AjXDXQhZhZAAh+QAAh+BZhZQBahZB9AAQB/AABYBZQBaBZAAB+QAAB+haBZQhYBah/AAQh9AAhahag");
	var mask_7_graphics_25 = new cjs.Graphics().p("AjgDgQhchcAAiEQAAiDBchdQBehcCCAAQCEAABcBcQBdBdAACDQAACEhdBcQhcBdiEAAQiCAAhehdg");
	var mask_7_graphics_26 = new cjs.Graphics().p("AjoDpQhghhAAiIQAAiIBghgQBghgCIAAQCIAABhBgQBgBgAACIQAACIhgBhQhhBgiIAAQiIAAhghgg");
	var mask_7_graphics_27 = new cjs.Graphics().p("AocGtIAAtUIHFAAIB4AAIH8AAIAANUgAhXmnQAdgFAfAAIAAAAQAfAAAdAFIAAAAg");
	var mask_7_graphics_28 = new cjs.Graphics().p("AocHCIAAt9IHGAAIB3AAIH8AAIAAN9gAhWm7QAcgGAfAAIAAAAQAfAAAdAGIAAAAg");
	var mask_7_graphics_29 = new cjs.Graphics().p("AocHWIAAulIHGAAIB3AAIH8AAIAAOlgAhWnPQAcgGAfAAIAAAAQAfAAAdAGIAAAAg");
	var mask_7_graphics_30 = new cjs.Graphics().p("AocHqIAAvNIHGAAIB3AAIH8AAIAAPNgAhWnjQAcgGAfAAIAAAAQAfAAAdAGIAAAAg");
	var mask_7_graphics_31 = new cjs.Graphics().p("AocH9IAAvzIHGAAIB3AAIH8AAIAAPzgAhWn2QAcgGAfAAIAAAAQAfAAAdAGIAAAAg");
	var mask_7_graphics_32 = new cjs.Graphics().p("AocIQIAAwZIHGAAIB3AAIH8AAIAAQZgAhWoJQAcgHAfABIAAAAQAfgBAdAHIAAAAg");
	var mask_7_graphics_33 = new cjs.Graphics().p("AocIjIAAw/IHGAAIB3AAIH8AAIAAQ/gAhWocQAcgGAfAAIAAAAQAfAAAdAGIAAAAg");
	var mask_7_graphics_34 = new cjs.Graphics().p("AocI2IAAxkIHGAAIB3AAIH8AAIAARkgAhWouQAcgGAfgBIAAAAQAfABAdAGIAAAAg");
	var mask_7_graphics_35 = new cjs.Graphics().p("AocJIIAAyHIHGAAIB3AAIH8AAIAASHgAhWo/QAcgIAfAAIAAAAQAfAAAdAIIAAAAg");
	var mask_7_graphics_36 = new cjs.Graphics().p("AocJZIAAyqIHGAAIB3AAIH8AAIAASqgAhWpRQAcgHAfAAIAAAAQAfAAAdAHIAAAAg");
	var mask_7_graphics_37 = new cjs.Graphics().p("AocJqIAAzMIHGAAIB3AAIH8AAIAATMgAhWpiQAcgHAfAAIAAAAQAfAAAdAHIAAAAg");
	var mask_7_graphics_38 = new cjs.Graphics().p("AocJ6IAAzsIHGAAIB3AAIH8AAIAATsgAhWpyQAcgHAfAAIAAAAQAfAAAdAHIAAAAg");
	var mask_7_graphics_39 = new cjs.Graphics().p("AocKLIAA0NIHGAAIB3AAIH8AAIAAUNgAhWqCQAcgIAfAAIAAAAQAfAAAdAIIAAAAg");
	var mask_7_graphics_40 = new cjs.Graphics().p("AocKaIAA0sIHGAAIB3AAIH8AAIAAUsgAhWqSQAcgIAfABIAAAAQAfgBAdAIIAAAAg");
	var mask_7_graphics_41 = new cjs.Graphics().p("AocKqIAA1LIHGAAIB3AAIH8AAIAAVLgAhWqhQAcgIAfAAIAAAAQAfAAAdAIIAAAAg");
	var mask_7_graphics_42 = new cjs.Graphics().p("AocK5IAA1pIHGAAIB3AAIH8AAIAAVpgAhWqwQAcgIAfAAIAAAAQAfAAAdAIIAAAAg");
	var mask_7_graphics_43 = new cjs.Graphics().p("AocLHIAA2FIHGAAIB3AAIH8AAIAAWFgAhWq+QAcgJAfABIAAAAQAfgBAdAJIAAAAg");
	var mask_7_graphics_44 = new cjs.Graphics().p("AocLWIAA2iIHGAAIB3AAIH8AAIAAWigAhWrMQAcgJAfAAIAAAAQAfAAAdAJIAAAAg");
	var mask_7_graphics_45 = new cjs.Graphics().p("AocLjIAA29IHGAAIB3AAIH8AAIAAW9gAhWraQAcgIAfAAIAAAAQAfAAAdAIIAAAAg");
	var mask_7_graphics_46 = new cjs.Graphics().p("AocLxIAA3YIHGAAIB3AAIH8AAIAAXYgAhWrnQAcgJAfAAIAAAAQAfAAAdAJIAAAAg");
	var mask_7_graphics_47 = new cjs.Graphics().p("AocL9IAA3wIHGAAIB3AAIH8AAIAAXwgAhWrzQAcgKAfABIAAAAQAfgBAdAKIAAAAg");
	var mask_7_graphics_48 = new cjs.Graphics().p("AocMKIAA4KIHGAAIB3AAIH8AAIAAYKgAhWsAQAcgJAfAAIAAAAQAfAAAdAJIAAAAg");
	var mask_7_graphics_49 = new cjs.Graphics().p("AocMWIAA4iIHGAAIB3AAIH8AAIAAYigAhWsMQAcgJAfAAIAAAAQAfAAAdAJIAAAAg");
	var mask_7_graphics_50 = new cjs.Graphics().p("AocMiIAA46IHGAAIB3AAIH8AAIAAY6gAhWsYQAcgJAfAAIAAAAQAfAAAdAJIAAAAg");
	var mask_7_graphics_51 = new cjs.Graphics().p("AocMtIAA5QIHGAAIB3AAIH8AAIAAZQgAhWsjQAcgJAfAAIAAAAQAfAAAdAJIAAAAg");
	var mask_7_graphics_52 = new cjs.Graphics().p("AocM4IAA5lIHGAAIB3AAIH8AAIAAZlgAhWstQAcgKAfAAIAAAAQAfAAAdAKIAAAAg");
	var mask_7_graphics_53 = new cjs.Graphics().p("AocNCIAA55IHGAAIB3AAIH8AAIAAZ5gAhWs3QAcgLAfABIAAAAQAfgBAdALIAAAAg");
	var mask_7_graphics_54 = new cjs.Graphics().p("AocNMIAA6OIHGAAIB3AAIH8AAIAAaOgAhWtCQAcgJAfAAIAAAAQAfAAAdAJIAAAAg");
	var mask_7_graphics_55 = new cjs.Graphics().p("AocNWIAA6hIHGAAIB3AAIH8AAIAAahgAhWtLQAcgKAfAAIAAAAQAfAAAdAKIAAAAg");
	var mask_7_graphics_56 = new cjs.Graphics().p("AocNfIAA6zIHGAAIB3AAIH8AAIAAazgAhWtUQAcgKAfAAIAAAAQAfAAAdAKIAAAAg");
	var mask_7_graphics_57 = new cjs.Graphics().p("AocNoIAA7FIHGAAIB3AAIH8AAIAAbFgAhWtdQAcgKAfAAIAAAAQAfAAAdAKIAAAAg");
	var mask_7_graphics_58 = new cjs.Graphics().p("AocNzIAA7bIHGAAIB3AAIH8AAIAAbbgAhWtoQAcgKAfAAIAAAAQAfAAAdAKIAAAAg");
	var mask_7_graphics_59 = new cjs.Graphics().p("AocN9IAA7uIHGAAIB3AAIH8AAIAAbugAhWtxQAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_60 = new cjs.Graphics().p("AocOGIAA8BIHGAAIB3AAIH8AAIAAcBgAhWt7QAcgKAfAAIAAAAQAfAAAdAKIAAAAg");
	var mask_7_graphics_61 = new cjs.Graphics().p("AocOPIAA8SIHGAAIB3AAIH8AAIAAcSgAhWuDQAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_62 = new cjs.Graphics().p("AocOXIAA8iIHGAAIB3AAIH8AAIAAcigAhWuLQAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_63 = new cjs.Graphics().p("AocOeIAA8xIHGAAIB3AAIH8AAIAAcxgAhWuTQAcgKAfAAIAAAAQAfAAAdAKIAAAAg");
	var mask_7_graphics_64 = new cjs.Graphics().p("AocOlIAA8+IHGAAIB3AAIH8AAIAAc+gAhWuZQAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_65 = new cjs.Graphics().p("AocOrIAA9KIHGAAIB3AAIH8AAIAAdKgAhWufQAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_66 = new cjs.Graphics().p("AocOwIAA9UIHGAAIB3AAIH8AAIAAdUgAhWukQAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_67 = new cjs.Graphics().p("AocO1IAA9eIHGAAIB3AAIH8AAIAAdegAhWupQAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_68 = new cjs.Graphics().p("AocO4IAA9kIHGAAIB3AAIH8AAIAAdkgAhWusQAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_69 = new cjs.Graphics().p("AocO8IAA9rIHGAAIB3AAIH8AAIAAdrgAhWuvQAcgMAfAAIAAAAQAfAAAdAMIAAAAg");
	var mask_7_graphics_70 = new cjs.Graphics().p("AocO+IAA9wIHGAAIB3AAIH8AAIAAdwgAhWuyQAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_71 = new cjs.Graphics().p("AocO/IAA9zIHGAAIB3AAIH8AAIAAdzgAhWu0QAcgLAfABIAAAAQAfgBAdALIAAAAg");
	var mask_7_graphics_72 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_73 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_74 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_75 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_76 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_77 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_78 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_79 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_80 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_81 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_82 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_83 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_84 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_85 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_86 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_87 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_88 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_89 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_90 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_91 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_92 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_93 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_94 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_95 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_96 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_97 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_98 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_99 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_100 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_101 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_102 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_103 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_104 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_105 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_106 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_107 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_108 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_109 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_110 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_111 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_112 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_113 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_114 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_115 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_116 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_117 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_118 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_119 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_120 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_121 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_122 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_123 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_124 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_125 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_126 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_127 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_128 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_129 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_130 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_131 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_132 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_133 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_134 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_135 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_136 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_137 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_138 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_139 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_140 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_141 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_142 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_143 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_144 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_145 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_146 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_147 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_148 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_149 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_150 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_151 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_152 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_153 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_154 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_155 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_156 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_157 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_158 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_159 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_160 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_161 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_162 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_163 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_164 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_165 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_166 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_167 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_168 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_169 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_170 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_171 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_172 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_173 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_174 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_175 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_176 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_177 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_178 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_179 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_180 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_181 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_182 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_183 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_184 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_185 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_186 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_187 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_188 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_189 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_190 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_191 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_192 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_193 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_194 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_195 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_196 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_197 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_198 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");
	var mask_7_graphics_199 = new cjs.Graphics().p("AocPBIAA92IHGAAIB3AAIH8AAIAAd2gAhWu1QAcgLAfAAIAAAAQAfAAAdALIAAAAg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:mask_7_graphics_0,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_1,x:95.775,y:483.625}).wait(1).to({graphics:mask_7_graphics_2,x:95.875,y:483.875}).wait(1).to({graphics:mask_7_graphics_3,x:95.975,y:484.15}).wait(1).to({graphics:mask_7_graphics_4,x:96.05,y:484.4}).wait(1).to({graphics:mask_7_graphics_5,x:96.175,y:484.675}).wait(1).to({graphics:mask_7_graphics_6,x:96.275,y:484.925}).wait(1).to({graphics:mask_7_graphics_7,x:96.375,y:485.2}).wait(1).to({graphics:mask_7_graphics_8,x:96.475,y:485.475}).wait(1).to({graphics:mask_7_graphics_9,x:96.55,y:485.725}).wait(1).to({graphics:mask_7_graphics_10,x:96.65,y:486}).wait(1).to({graphics:mask_7_graphics_11,x:96.75,y:486.25}).wait(1).to({graphics:mask_7_graphics_12,x:96.875,y:486.525}).wait(1).to({graphics:mask_7_graphics_13,x:96.95,y:486.775}).wait(1).to({graphics:mask_7_graphics_14,x:97.05,y:487.05}).wait(1).to({graphics:mask_7_graphics_15,x:97.15,y:487.3}).wait(1).to({graphics:mask_7_graphics_16,x:97.3,y:487.7}).wait(1).to({graphics:mask_7_graphics_17,x:97.45,y:488.075}).wait(1).to({graphics:mask_7_graphics_18,x:97.575,y:488.475}).wait(1).to({graphics:mask_7_graphics_19,x:97.725,y:488.875}).wait(1).to({graphics:mask_7_graphics_20,x:97.875,y:489.275}).wait(1).to({graphics:mask_7_graphics_21,x:98.025,y:489.625}).wait(1).to({graphics:mask_7_graphics_22,x:98.175,y:490.025}).wait(1).to({graphics:mask_7_graphics_23,x:98.325,y:490.425}).wait(1).to({graphics:mask_7_graphics_24,x:98.45,y:490.825}).wait(1).to({graphics:mask_7_graphics_25,x:98.6,y:491.2}).wait(1).to({graphics:mask_7_graphics_26,x:98.75,y:491.6}).wait(1).to({graphics:mask_7_graphics_27,x:101.5002,y:501.5749}).wait(1).to({graphics:mask_7_graphics_28,x:101.5002,y:499.4748}).wait(1).to({graphics:mask_7_graphics_29,x:101.5002,y:497.425}).wait(1).to({graphics:mask_7_graphics_30,x:101.5002,y:495.4}).wait(1).to({graphics:mask_7_graphics_31,x:101.5002,y:493.425}).wait(1).to({graphics:mask_7_graphics_32,x:101.5002,y:491.4999}).wait(1).to({graphics:mask_7_graphics_33,x:101.5002,y:489.6}).wait(1).to({graphics:mask_7_graphics_34,x:101.5002,y:487.75}).wait(1).to({graphics:mask_7_graphics_35,x:101.5002,y:485.95}).wait(1).to({graphics:mask_7_graphics_36,x:101.5002,y:484.1748}).wait(1).to({graphics:mask_7_graphics_37,x:101.5002,y:482.4747}).wait(1).to({graphics:mask_7_graphics_38,x:101.5002,y:480.775}).wait(1).to({graphics:mask_7_graphics_39,x:101.5002,y:479.1253}).wait(1).to({graphics:mask_7_graphics_40,x:101.5002,y:477.5503}).wait(1).to({graphics:mask_7_graphics_41,x:101.5002,y:475.9749}).wait(1).to({graphics:mask_7_graphics_42,x:101.5002,y:474.4751}).wait(1).to({graphics:mask_7_graphics_43,x:101.5002,y:473}).wait(1).to({graphics:mask_7_graphics_44,x:101.5002,y:471.55}).wait(1).to({graphics:mask_7_graphics_45,x:101.5002,y:470.1753}).wait(1).to({graphics:mask_7_graphics_46,x:101.5002,y:468.8253}).wait(1).to({graphics:mask_7_graphics_47,x:101.5002,y:467.5}).wait(1).to({graphics:mask_7_graphics_48,x:101.5002,y:466.2499}).wait(1).to({graphics:mask_7_graphics_49,x:101.5002,y:465.025}).wait(1).to({graphics:mask_7_graphics_50,x:101.5002,y:463.8501}).wait(1).to({graphics:mask_7_graphics_51,x:101.5002,y:462.6999}).wait(1).to({graphics:mask_7_graphics_52,x:101.5002,y:461.5996}).wait(1).to({graphics:mask_7_graphics_53,x:101.5002,y:460.5498}).wait(1).to({graphics:mask_7_graphics_54,x:101.5002,y:459.5499}).wait(1).to({graphics:mask_7_graphics_55,x:101.5002,y:458.55}).wait(1).to({graphics:mask_7_graphics_56,x:101.5002,y:457.6252}).wait(1).to({graphics:mask_7_graphics_57,x:101.5002,y:456.75}).wait(1).to({graphics:mask_7_graphics_58,x:101.5002,y:455.6749}).wait(1).to({graphics:mask_7_graphics_59,x:101.5002,y:454.6498}).wait(1).to({graphics:mask_7_graphics_60,x:101.5002,y:453.6747}).wait(1).to({graphics:mask_7_graphics_61,x:101.5002,y:452.7999}).wait(1).to({graphics:mask_7_graphics_62,x:101.5002,y:451.9998}).wait(1).to({graphics:mask_7_graphics_63,x:101.5002,y:451.2748}).wait(1).to({graphics:mask_7_graphics_64,x:101.5002,y:450.5998}).wait(1).to({graphics:mask_7_graphics_65,x:101.5002,y:450.0247}).wait(1).to({graphics:mask_7_graphics_66,x:101.5002,y:449.4753}).wait(1).to({graphics:mask_7_graphics_67,x:101.5002,y:449.0001}).wait(1).to({graphics:mask_7_graphics_68,x:101.5002,y:448.6252}).wait(1).to({graphics:mask_7_graphics_69,x:101.5002,y:448.2999}).wait(1).to({graphics:mask_7_graphics_70,x:101.5002,y:448.0749}).wait(1).to({graphics:mask_7_graphics_71,x:101.5002,y:447.9003}).wait(1).to({graphics:mask_7_graphics_72,x:101.5002,y:447.7752}).wait(1).to({graphics:mask_7_graphics_73,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_74,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_75,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_76,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_77,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_78,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_79,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_80,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_81,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_82,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_83,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_84,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_85,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_86,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_87,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_88,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_89,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_90,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_91,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_92,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_93,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_94,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_95,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_96,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_97,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_98,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_99,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_100,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_101,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_102,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_103,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_104,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_105,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_106,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_107,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_108,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_109,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_110,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_111,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_112,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_113,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_114,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_115,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_116,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_117,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_118,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_119,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_120,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_121,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_122,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_123,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_124,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_125,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_126,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_127,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_128,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_129,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_130,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_131,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_132,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_133,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_134,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_135,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_136,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_137,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_138,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_139,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_140,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_141,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_142,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_143,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_144,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_145,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_146,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_147,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_148,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_149,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_150,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_151,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_152,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_153,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_154,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_155,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_156,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_157,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_158,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_159,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_160,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_161,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_162,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_163,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_164,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_165,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_166,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_167,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_168,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_169,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_170,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_171,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_172,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_173,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_174,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_175,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_176,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_177,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_178,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_179,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_180,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_181,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_182,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_183,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_184,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_185,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_186,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_187,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_188,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_189,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_190,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_191,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_192,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_193,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_194,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_195,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_196,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_197,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_198,x:101.5002,y:447.75}).wait(1).to({graphics:mask_7_graphics_199,x:101.5002,y:447.75}).wait(1));

	// tallo_1
	this.instance_10 = new lib.tallo_1();
	this.instance_10.setTransform(98.8,440.95,0.7523,0.7523,0,0,0,30.2,98.9);

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(200));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.1,4.8,217.4,510.3);


// stage content:
(lib.girasol = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {textos:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Capa_1
	this.instance = new lib.titulos();
	this.instance.setTransform(714.2,327.05,1,1,0,0,0,398.4,159);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer_3
	this.instance_1 = new lib.girasol_1();
	this.instance_1.setTransform(703.3,341.8,1,1,0,0,0,103.6,257.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

	// Layer_4
	this.instance_2 = new lib.piso();
	this.instance_2.setTransform(682.55,581.5,0.8516,0.8516,0,0,0,132.3,81.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

	// Capa_1
	this.instance_3 = new lib.sol();
	this.instance_3.setTransform(1102.85,-54.05,1,1,0,0,0,284.1,284.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(684.5296,603.7636,0.7062,0.7062);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_3}]}).wait(2));

	// Capa_17
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFF6CA","#C2EBFF"],[0,1],-0.9,-346.1,-0.9,300.2).s().p("EAB4Au5MhsxgMMMgAUhN1QWanJb7IRIAAAAIAAAcIAoAAIgogcUAhFAHyA0PgNEUAXPACQA3jgCeMgAUBTsUg3mAClgxcAIwgEg44gqAIAAAAg");
	this.shape_1.setTransform(684.225,350.075);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(681.1,-13.1,739.9,667.3000000000001);
// library properties:
lib.properties = {
	id: 'A2A7DC1E956A4357982AE80FE9B06550',
	width: 1366,
	height: 650,
	fps: 40,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
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
an.compositions['A2A7DC1E956A4357982AE80FE9B06550'] = {
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