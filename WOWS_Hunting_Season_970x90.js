(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.back_I_980x120 = function() {
	this.initialize(img.back_I_980x120);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,120);


(lib.back_II_980x120 = function() {
	this.initialize(img.back_II_980x120);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,140);


(lib.bullet_I_XL = function() {
	this.initialize(img.bullet_I_XL);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,39,63);


(lib.bullet_II_XL = function() {
	this.initialize(img.bullet_II_XL);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,61);


(lib.button_336x280 = function() {
	this.initialize(img.button_336x280);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,142,36);


(lib.duck_336_body = function() {
	this.initialize(img.duck_336_body);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,93,38);


(lib.duck_336_head = function() {
	this.initialize(img.duck_336_head);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,35,20);


(lib.duck_336_neck = function() {
	this.initialize(img.duck_336_neck);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,54);


(lib.duck_body = function() {
	this.initialize(img.duck_body);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,14);


(lib.duck_wing = function() {
	this.initialize(img.duck_wing);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,13,30);


(lib.explosion_small = function() {
	this.initialize(img.explosion_small);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,28);


(lib.grass_336 = function() {
	this.initialize(img.grass_336);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,187,215);


(lib.iceland_336 = function() {
	this.initialize(img.iceland_336);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,238,63);


(lib.logo_hor_336 = function() {
	this.initialize(img.logo_hor_336);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,227,34);


(lib.ship_336 = function() {
	this.initialize(img.ship_336);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,348,201);


(lib.smoke = function() {
	this.initialize(img.smoke);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,40);


(lib.sparks = function() {
	this.initialize(img.sparks);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,177,149);


(lib.water_circle = function() {
	this.initialize(img.water_circle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,209,53);


(lib.wave = function() {
	this.initialize(img.wave);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,219,56);


(lib.wave_2 = function() {
	this.initialize(img.wave_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,141,37);


(lib.wave_cut = function() {
	this.initialize(img.wave_cut);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,45);// helper functions:

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


(lib.helpLines = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AwKBGQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAMAgVAAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAgAwUg7QAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAMAgpAAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.helpLines, new cjs.Rectangle(-105,-7,210,14), null);


(lib.waveStatic1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wave();
	this.instance.parent = this;
	this.instance.setTransform(-45.1,-9.4,0.661,0.554,-1.7);

	this.instance_1 = new lib.wave_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(42.7,-9.3,0.597,0.597,-1.3);

	this.instance_2 = new lib.wave();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-125.6,-15.4,0.661,0.554,2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.waveStatic1, new cjs.Rectangle(-126.8,-15.4,254.3,37), null);


(lib.wave2_inner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wave_2();
	this.instance.parent = this;
	this.instance.setTransform(-47.5,-12.5,0.674,0.674);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.wave2_inner, new cjs.Rectangle(-47.5,-12.5,95,25), null);


(lib.wave1_inner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wave_cut();
	this.instance.parent = this;
	this.instance.setTransform(-39,-22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.wave1_inner, new cjs.Rectangle(-39,-22.5,78,45), null);


(lib.waterCirc_inner_inner_inner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.water_circle();
	this.instance.parent = this;
	this.instance.setTransform(-189,-42,1.8,1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.waterCirc_inner_inner_inner, new cjs.Rectangle(-189,-42,376.2,95.4), null);


(lib.tryAgainButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A7A6A6").s().p("A/PCWIAAkrMA+fAAAIAAErg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.explosion_small();
	this.instance.parent = this;
	this.instance.setTransform(-48,-45,3.2,3.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(-62,-64,126,126), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#C8D2DC","#5C6268"],[0.478,0.486,1],-66.4,-11,-66.4,11.1).s().p("AgZBpQgMgFgGgJQgIgJgEgNQgDgNAAgOIAYAAIACARQABAJADAGQAEAHAHAEQAHAEAKAAQASAAAIgLQAJgLAAgRQAAgOgDgJQgCgJgHgFQgFgEgLgCQgIgCgNAAIAAgUQAKAAAHgCQAIgCAGgEQAGgEADgHQADgHAAgLQAAgQgGgKQgIgKgPAAQgJAAgFAEQgHADgDAGQgEAGgBAIQgBAHgBAJIgXAAQAAgOAEgMQAEgLAGgJQAIgIAKgFQAKgFANAAQALAAAKAEQAKADAHAHQAHAIADAJQAEAKAAAMQABASgIAOQgIANgRAFQATAEAJANQAKAPAAAVQAAAOgDALQgEAMgHAIQgIAJgLAEQgKAFgQAAQgPAAgKgFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-5.9,-11,11.8,22.1), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#C8D2DC","#5C6268"],[0.478,0.486,1],-29.4,-10.8,-29.4,11.3).s().p("Ag5BsQAAgPACgKQACgMAFgLQAHgLAKgLQAKgMASgOIAMgLQAGgGAGgIQAEgHAEgJQACgIAAgLQAAgHgBgIQgBgHgFgFQgDgFgGgDQgHgCgIAAQgKAAgGADQgHAFgDAHQgDAGgCAKIAAAVIgYAAIAAgKQAAgOAEgLQACgMAIgIQAGgJAMgFQAKgFAOAAQAbAAAOAQQAOARABAbQAAAMgEALQgDAJgFAJQgFAHgIAHIgPAPIgYAXIgOAPQgGAHgCAFIgCANIBZAAIAAAWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-5.8,-10.8,11.6,21.6), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#C8D2DC","#5C6268"],[0.478,0.486,1],66.2,-13.5,66.2,8.5).s().p("AAmBQIglhCIgmBCIgXAAIAxhRIgvhOIAYAAIAkA9IAig9IAYAAIguBOIAvBRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-6.1,-8,12.3,16.1), null);


(lib.sparks_inner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sparks();
	this.instance.parent = this;
	this.instance.setTransform(-36,-30,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sparks_inner, new cjs.Rectangle(-36,-30,70.8,59.6), null);


(lib.smokeArea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0C141F").ss(1,1,1).p("Aw/lWMAh/AAAIAAKtMgh/AAAg");
	this.shape.setTransform(0,145);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Aw+FXIAAqsMAh9AAAIAAKsg");
	this.shape_1.setTransform(0,145);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.smokeArea, new cjs.Rectangle(-109.7,109.8,219.5,70.5), null);


(lib.ship_interactive = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("A3UJ3IBBivIBGgPIARhTIAOgEIgBg5IAGgdIASgIIgLgZIAHgiIBWgsIDUhIIAKhLIAMghIBpgjIAKibIg5AEIAHhTICWhNIgBhhIlaAAIAAgZIFFAAIARk3IAMAAIAAEtIAuAAIAHghIAygeIA0AAIArgjIAAg0IgtgEIAAifICeAAIAACiIDADBIAAAhIgTAgIgVAAIAAAVIAoAJIBnAyIAAA+IgjANIAACTICCAQIBWBdIA/AcICFB4IMHhBIEVgPIAUgbICAgDIAEAKIgqBDQA4AIA4AyQAIAVhBAYQAWAsgKArIhDAKIAKBGIiFgvQhZCDgmB8QglBqATBjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ship_interactive, new cjs.Rectangle(-149.2,-81.5,298.6,163), null);


(lib.plate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00809D").s().p("AuXXcMAAAgu3IcvAAMAAAAu3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.plate, new cjs.Rectangle(-92,-150,184,300), null);


(lib.marker2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D7FF00").s().p("Ah0B0QgwgvAAhFQAAhDAwgxQAxgwBDAAQBFAAAvAwQAxAxAABDQAABFgxAvQgvAxhFAAQhDAAgxgxg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.marker2, new cjs.Rectangle(-16.5,-16.5,33,33), null);


(lib.marker = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00DBFF").s().p("AjTAAIDTjTIDUDTIjUDUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.marker, new cjs.Rectangle(-21.2,-21.2,42.5,42.5), null);


(lib.logo_shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#12283F").s().p("AxoBdIgCAAIAAjZIAtgmICJAAIA7AlIgBDSIhuBOgAP2BXIgjhbIgyAAIAABXI7iAAIgPjZIIcAPIAACXIAtAAIAAiVIBzADIAeBGICfAAIAAhQIQpAAIAZAmIgWAtIATAbIAABMIgYAZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_shadow, new cjs.Rectangle(-113.1,-16.2,226.3,32.5), null);


(lib.island_interactive = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.098)").s().p("ArPD6Im5gsIAEhqID8iJIAEAAIAphdICGgpID0gmIAGAAIENguIADADIGTAiIAFAAICTgTIABADIAYA5IFuBIIgPByIGsB3IAFBPIsoAxg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.island_interactive, new cjs.Rectangle(-116.1,-25.6,232.2,51.3), null);


(lib.island_inner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.iceland_336();
	this.instance.parent = this;
	this.instance.setTransform(-119,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.island_inner, new cjs.Rectangle(-119,-32,238,63), null);


(lib.grass_inner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.grass_336();
	this.instance.parent = this;
	this.instance.setTransform(-94,-108);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.grass_inner, new cjs.Rectangle(-94,-108,187,215), null);


(lib.tracer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFEFA6").s().p("Ag9A9QgagZABgkQgBgjAagaQAagaAjABQAkgBAZAaQAaAaAAAjQAAAkgaAZQgZAagkAAQgjAAgagag");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.tracer, new cjs.Rectangle(-8.7,-8.7,17.5,17.5), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#4F4F4F").ss(1,1,1).p("AAAgfIAZAZAAAAgIAAg/IgYAZ");
	this.shape.setTransform(0,-2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F300FF").s().p("AgQAeIgGgDIgCgCQgKgKAAgPQAAgHADgGQACgGAFgFQALgKANAAQAOAAAKAKQAGAFACAGQADAGAAAHQAAAPgLAKIgBACIgGADQgIAFgJAAQgIAAgIgFg");
	this.shape_1.setTransform(0,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(-3.5,-6.3,7,11.6), null);


(lib.smokeInner2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//TweenMax.to(this.state1, 1.2, {delay:0.0,  x:"+=50",  y:"-=20", scaleX:1.5, repeat:-1,  yoyo:true, scaleY:1.8,  alpha:.7,  ease:Sine.easeInOut } ); 
		//TweenMax.to(this.state2, 1.2, {delay:0.05,  x:"+=50", y:"-=30",  scaleX:.8, repeat:-1,  yoyo:true, scaleY:.8, alpha:.7,  ease:Sine.easeInOut } ); 
		//TweenMax.to(this.state3, 1.2, {delay:0.1,  x:"+=50", y:"-=10",  scaleX:.8, repeat:-1,  yoyo:true, scaleY:.8, alpha:.7,  ease:Sine.easeInOut } );
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.instance = new lib.smoke();
	this.instance.parent = this;
	this.instance.setTransform(-60,-60,3,3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.smokeInner2, new cjs.Rectangle(-60,-60,120,120), null);


(lib.Marker_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF00B3").s().p("AjFGZIC3i3IAAlxIgVAlQgDAGgGACQgGABgFgDQgGgDgCgGQgBgGADgFIAwhWQACgEADgDIAFgCIABAAIAAAAIACAAIAEAAIAAAAIABABIAAAAIADABIABABIACABIADAFIAwBWQADAFgBAGQgCAGgGADQgFADgGgBQgGgCgDgGIgVglIAAFxIC3C3IjGDFgAkro/QgGgBgFgEQgEgEAAgGQAAgHAEgEQAFgEAGgBIJXAAQAGABAEAEQAFAEAAAHQAAAGgFAEQgEAEgGABg");
	this.shape.setTransform(0,-40.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Marker_mc, new cjs.Rectangle(-31.5,-101.5,63,121.3), null);


(lib.duck_neck = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.duck_336_neck();
	this.instance.parent = this;
	this.instance.setTransform(-11.5,-20.8,0.77,0.77);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.duck_neck, new cjs.Rectangle(-11.5,-20.8,23.1,41.6), null);


(lib.duck_head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.duck_336_head();
	this.instance.parent = this;
	this.instance.setTransform(-13.4,-7.7,0.77,0.77);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.duck_head, new cjs.Rectangle(-13.4,-7.7,27,15.4), null);


(lib.duck_body_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.duck_336_body();
	this.instance.parent = this;
	this.instance.setTransform(-35.8,-14.6,0.77,0.77);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.duck_body_1, new cjs.Rectangle(-35.8,-14.6,71.6,29.3), null);


(lib.d_flying_wing_front = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.duck_wing();
	this.instance.parent = this;
	this.instance.setTransform(-6.5,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.d_flying_wing_front, new cjs.Rectangle(-6.5,-15,13,30), null);


(lib.d_flying_wing_back = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#19120C").s().p("AgHBOQgHgfgLg+QgMhBgVg6QApAAAlAgQAlAfABAwQABAvgEAxQgEAwgaAWQgZgfgHgeg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.d_flying_wing_back, new cjs.Rectangle(-5.8,-13.8,11.7,27.7), null);


(lib.d_flying_body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.duck_body();
	this.instance.parent = this;
	this.instance.setTransform(-21,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.d_flying_body, new cjs.Rectangle(-21,-7,42,14), null);


(lib.curs2_inner_greenPoints_inner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00E93B").s().p("AA1BuIAJgEQANgIAMgLIADgEQANgOAIgQIAnAAQgLAhgbAaIgCADQgOANgOAJQgOAIgPAFgAhNCKQgPgIgNgNIgGgFQgbgagLghIAoAAQAIASAPAPIABABQANAMAOAIIAGADIAAAoQgNgFgMgHgABug0QgIgSgPgPQgQgPgSgJIAAgoQAhALAaAbQAbAaALAhgAiVg0QAMghAagaQAagbAhgLIAAAoQgSAJgPAPQgPAPgJASg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.curs2_inner_greenPoints_inner, new cjs.Rectangle(-15,-14.9,30.1,30), null);


(lib.circTrees = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#95ACD8","#48566F","rgba(72,86,111,0)"],[0,0.678,1],0,0,0,0,0,85).s().p("ApNJOQj1j0AAlaQAAlZD1j0QD0j1FZAAQFaAAD0D1QD1D0AAFZQAAFaj1D0Qj0D1laAAQlZAAj0j1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.circTrees, new cjs.Rectangle(-83.5,-83.5,167,167), null);


(lib.circ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,154.1).s().p("AwvQvQm7m7AAp0QAApyG7m9QG9m7JyAAQJ0AAG7G7QG8G9AAJyQAAJ0m8G7Qm7G8p0AAQpyAAm9m8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.circ, new cjs.Rectangle(-151.5,-151.5,303,303), null);


(lib.ButtonGlow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if (canReplay == false){ this.stop(); }
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(214));

	// Glow
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(255,255,255,0)"],[0.443,0.533,0.616],-105,0,105,0).s().p("AwZCgIAAk/MAgzAAAIAAE/g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(255,255,255,0)"],[0.408,0.502,0.592],-105,0,105,0).s().p("AwZCgIAAk/MAgzAAAIAAE/g");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.075)","rgba(255,255,255,0)"],[0.4,0.502,0.596],-104.6,-4.4,104.6,4.5).s().p("AwZCgIAAk/MAgzAAAIAAE/g");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.153)","rgba(255,255,255,0)"],[0.392,0.502,0.6],-104.2,-8.9,104.2,9).s().p("AwZCgIAAk/MAgzAAAIAAE/g");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.227)","rgba(255,255,255,0)"],[0.38,0.502,0.604],-103.8,-13.4,103.8,13.4).s().p("AwZCgIAAk/MAgzAAAIAAE/g");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)","rgba(255,255,255,0)"],[0.373,0.502,0.608],-103.4,-17.8,103.4,17.9).s().p("AwZCgIAAk/MAgzAAAIAAE/g");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.361)","rgba(255,255,255,0)"],[0.357,0.502,0.624],-93.7,-20.8,93.8,20.8).s().p("AwZCgIAAk/MAgzAAAIAAE/g");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.424)","rgba(255,255,255,0)"],[0.341,0.502,0.643],-84.1,-23.7,84.2,23.8).s().p("AwZCgIAAk/MAgzAAAIAAE/g");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.482)","rgba(255,255,255,0)"],[0.325,0.502,0.659],-74.5,-26.6,74.5,26.7).s().p("AwZCgIAAk/MAgzAAAIAAE/g");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.541)","rgba(255,255,255,0)"],[0.31,0.502,0.675],-64.9,-29.5,64.9,29.6).s().p("AwZCgIAAk/MAgzAAAIAAE/g");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.604)","rgba(255,255,255,0)"],[0.294,0.502,0.694],-55.2,-32.5,55.3,32.5).s().p("AwZCgIAAk/MAgzAAAIAAE/g");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.663)","rgba(255,255,255,0)"],[0.278,0.502,0.71],-45.6,-35.4,45.7,35.4).s().p("AwZCgIAAk/MAgzAAAIAAE/g");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.722)","rgba(255,255,255,0)"],[0.263,0.502,0.725],-36,-38.3,36,38.4).s().p("AwZCgIAAk/MAgzAAAIAAE/g");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.78)","rgba(255,255,255,0)"],[0.247,0.502,0.741],-26.4,-41.2,26.4,41.3).s().p("AwZCgIAAk/MAgzAAAIAAE/g");

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.843)","rgba(255,255,255,0)"],[0.231,0.502,0.761],-16.7,-44.1,16.8,44.2).s().p("AwZCgIAAk/MAgzAAAIAAE/g");

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.902)","rgba(255,255,255,0)"],[0.216,0.502,0.776],-7.1,-47.1,7.2,47.1).s().p("AwZCgIAAk/MAgzAAAIAAE/g");

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.851)","rgba(255,255,255,0)"],[0.224,0.502,0.773],10.5,-49.3,-10.4,49.4).s().p("AwZCgIAAk/MAgzAAAIAAE/g");

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.804)","rgba(255,255,255,0)"],[0.227,0.502,0.765],28.1,-51.5,-28,51.6).s().p("AwZCgIAAk/MAgzAAAIAAE/g");

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.753)","rgba(255,255,255,0)"],[0.235,0.502,0.761],45.7,-53.7,-45.6,53.8).s().p("AwZCgIAAk/MAgzAAAIAAE/g");

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.702)","rgba(255,255,255,0)"],[0.243,0.502,0.753],63.3,-55.9,-63.2,56).s().p("AwZCgIAAk/MAgzAAAIAAE/g");

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.651)","rgba(255,255,255,0)"],[0.247,0.502,0.749],80.9,-58.1,-80.8,58.2).s().p("AwZCgIAAk/MAgzAAAIAAE/g");

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.604)","rgba(255,255,255,0)"],[0.255,0.502,0.741],98.5,-60.4,-98.4,60.4).s().p("AwZCgIAAk/MAgzAAAIAAE/g");

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.553)","rgba(255,255,255,0)"],[0.259,0.502,0.737],116.1,-62.6,-116,62.6).s().p("AwZCgIAAk/MAgzAAAIAAE/g");

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.502)","rgba(255,255,255,0)"],[0.267,0.502,0.729],133.7,-64.8,-133.6,64.8).s().p("AwZCgIAAk/MAgzAAAIAAE/g");

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.471)","rgba(255,255,255,0)"],[0.275,0.502,0.722],139.9,-61.6,-139.8,61.7).s().p("AwZCgIAAk/MAgzAAAIAAE/g");

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.439)","rgba(255,255,255,0)"],[0.282,0.502,0.714],146.1,-58.5,-146,58.5).s().p("AwZCgIAAk/MAgzAAAIAAE/g");

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.408)","rgba(255,255,255,0)"],[0.286,0.502,0.71],152.2,-55.3,-152.2,55.4).s().p("AwZCgIAAk/MAgzAAAIAAE/g");

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.376)","rgba(255,255,255,0)"],[0.294,0.502,0.702],158.4,-52.2,-158.4,52.2).s().p("AwZCgIAAk/MAgzAAAIAAE/g");

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.345)","rgba(255,255,255,0)"],[0.302,0.502,0.694],164.6,-49,-164.6,49.1).s().p("AwZCgIAAk/MAgzAAAIAAE/g");

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.314)","rgba(255,255,255,0)"],[0.31,0.506,0.69],170.8,-45.9,-170.8,45.9).s().p("AwZCgIAAk/MAgzAAAIAAE/g");

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.278)","rgba(255,255,255,0)"],[0.314,0.506,0.682],177,-42.7,-177,42.8).s().p("AwZCgIAAk/MAgzAAAIAAE/g");

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.247)","rgba(255,255,255,0)"],[0.322,0.506,0.675],183.2,-39.5,-183.1,39.6).s().p("AwZCgIAAk/MAgzAAAIAAE/g");

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.216)","rgba(255,255,255,0)"],[0.329,0.506,0.667],189.4,-36.4,-189.3,36.4).s().p("AwZCgIAAk/MAgzAAAIAAE/g");

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.184)","rgba(255,255,255,0)"],[0.333,0.506,0.663],195.6,-33.2,-195.5,33.3).s().p("AwZCgIAAk/MAgzAAAIAAE/g");

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.153)","rgba(255,255,255,0)"],[0.341,0.506,0.655],201.8,-30.1,-201.7,30.1).s().p("AwZCgIAAk/MAgzAAAIAAE/g");

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.122)","rgba(255,255,255,0)"],[0.349,0.506,0.647],208,-26.9,-207.9,27).s().p("AwZCgIAAk/MAgzAAAIAAE/g");

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.09)","rgba(255,255,255,0)"],[0.337,0.506,0.659],214.7,-19.8,-214.7,19.9).s().p("AwZCgIAAk/MAgzAAAIAAE/g");

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.063)","rgba(255,255,255,0)"],[0.329,0.506,0.671],220.4,-13.8,-220.4,13.9).s().p("AwZCgIAAk/MAgzAAAIAAE/g");

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.039)","rgba(255,255,255,0)"],[0.322,0.502,0.678],225.1,-8.9,-225,9).s().p("AwZCgIAAk/MAgzAAAIAAE/g");

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.024)","rgba(255,255,255,0)"],[0.318,0.502,0.686],228.7,-5.1,-228.7,5.2).s().p("AwZCgIAAk/MAgzAAAIAAE/g");

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.012)","rgba(255,255,255,0)"],[0.314,0.502,0.69],231.3,-2.4,-231.2,2.4).s().p("AwZCgIAAk/MAgzAAAIAAE/g");

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.004)","rgba(255,255,255,0)"],[0.31,0.502,0.694],232.9,-0.7,-232.8,0.8).s().p("AwZCgIAAk/MAgzAAAIAAE/g");

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0)","rgba(255,255,255,0)"],[0.31,0.502,0.694],233.4,-0.2,-233.3,0.2).s().p("AwZCgIAAk/MAgzAAAIAAE/g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},172).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105,-16,210,32);


(lib.Button_area = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ArGC6IAAlzIWNAAIAAFzg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Button_134x36_Body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Button_142x36_LL.png
	this.instance = new lib.button_336x280();
	this.instance.parent = this;
	this.instance.setTransform(-71,-18);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Button_134x36_Body, new cjs.Rectangle(-71,-18,142,36), null);


(lib.Button_Main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A6PV4MAAAgrvMA0fAAAMAAAArvg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.bullet2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.shadow = new createjs.Shadow("#000000", 1, 1, 15);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.instance = new lib.bullet_II_XL();
	this.instance.parent = this;
	this.instance.setTransform(-15,-31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bullet2, new cjs.Rectangle(-15,-31,29,61), null);


(lib.bullet1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.shadow = new createjs.Shadow("#000000", 1, 1, 15);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.instance = new lib.bullet_I_XL();
	this.instance.parent = this;
	this.instance.setTransform(-20,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bullet1, new cjs.Rectangle(-20,-32,39,63), null);


(lib.black_rectcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0)","#000000"],[0,1],0,0,0,0,0,218.7).s().p("A6PV4MAAAgrvMA0fAAAMAAAArvg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("A6PV4MAAAgrvMA0fAAAMAAAArvg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.black_rectcopy, new cjs.Rectangle(-168,-140,336,280), null);


(lib.backUndermask = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.back_II_980x120();
	this.instance.parent = this;
	this.instance.setTransform(-500,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.backUndermask, new cjs.Rectangle(-500,-70,1000,140), null);


(lib.b_glow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],1,-26.8,0,1,-26.8,118.6).s().p("AwZCgIAAk/MAgzAAAIAAE/g");
	this.shape.setTransform(0,0,0.676,1.094);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.b_glow, new cjs.Rectangle(-71,-17.5,142,35), null);


(lib.aim_1_inner_inner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.shadow = new createjs.Shadow("#000000", 0, 1, 3);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRPpIAAk+QkPgGjCjCQjCjBgGkQIk+AAIAAgjIE+AAQAGkPDCjCQDCjCEPgGIAAk+IAjAAIAAE+QEQAGDBDCQDCDCAGEPIE+AAIAAAjIk+AAQgGEQjCDBQjBDCkQAGIAAE+gAASG/IAADIQEBgGC3i3QC3i3AGkBIjIAAIAAgjIDIAAQgGkAi3i3Qi3i4kBgGIAADIIgjAAIAAjIQkAAGi3C4Qi4C3gGEAIDIAAIAAAjIjIAAQAGEBC4C3QC3C3EAAGIAAjIgAguAvQgUgTAAgcQAAgbAUgTQAUgUAaAAQAcAAATAUQAUATAAAbQAAAcgUATQgTAUgcAAQgaAAgUgUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.aim_1_inner_inner, new cjs.Rectangle(-100.1,-100.1,200.3,200.3), null);


(lib.activeAreaSea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00DBFF").s().p("A6PV4MAAAgrvMA0fAAAMAAAArvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168,-140,336,280);


(lib.activeAreaAir = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00DBFF").s().p("A6PV4MAAAgrvMA0fAAAMAAAArvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168,-140,336,280);


(lib.activeArea_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00DBFF").s().p("A6PV4MAAAgrvMA0fAAAMAAAArvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168,-140,336,280);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.back_I_980x120();
	this.instance.parent = this;
	this.instance.setTransform(-490,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-490,-60,980,120), null);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.hLines.alpha = helpLinesAlpha;
		
		var text = new cjs.Text(t3_t, t3_f+ " webFont", "#FFFFFF");
		text.textBaseline = "alphabetic";
		text.textAlign = "center";
			
		text.lineHeight = t3_lineH;
		text.lineWidth = t3_lineW;
		
		text.regX = -t3_offX;
		text.regY = text.getMeasuredHeight()/2 - t3_offY;
		
		this.addChild( text);
		
		this.cache(-400, -100, 800, 200, 1.5 );
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 4
	this.hLines = new lib.helpLines();
	this.hLines.parent = this;
	this.hLines.setTransform(0,7,0.1,1);

	this.timeline.addTween(cjs.Tween.get(this.hLines).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(-88.5,-7.8,177.1,27.8), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.hLines.alpha = helpLinesAlpha;
		
		var text = new cjs.Text(t2_t, t2_f+ " webFont", "#FFFFFF");
		text.textBaseline = "alphabetic";
		text.textAlign = "center";
			
		text.lineHeight = t2_lineH;
		text.lineWidth = t2_lineW;
		
		text.regX = -t2_offX;
		text.regY = text.getMeasuredHeight()/2 - t2_offY;
		
		this.addChild(text);
		
		this.cache(-400, -100, 800, 200, 1.5 );
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 4
	this.hLines = new lib.helpLines();
	this.hLines.parent = this;
	this.hLines.setTransform(0,7,0.1,1);

	this.timeline.addTween(cjs.Tween.get(this.hLines).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-66.5,-7.8,133,27.8), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.hLines.alpha = helpLinesAlpha;
		
		var text = new cjs.Text(t1_t, t1_f+ " webFont", "#FFFFFF");
		text.textBaseline = "alphabetic";
		text.textAlign = "center";
			
		text.lineHeight = t1_lineH;
		text.lineWidth = t1_lineW;
		
		text.regX = -t1_offX;
		text.regY = text.getMeasuredHeight()/2 - t1_offY;
		
		
		this.addChild(text);
		
		this.cache(-400, -100, 800, 200, 1.5 );
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 4
	this.hLines = new lib.helpLines();
	this.hLines.parent = this;
	this.hLines.setTransform(0,7,0.25,1);

	this.timeline.addTween(cjs.Tween.get(this.hLines).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-57.9,-7.8,115.9,27.8), null);


(lib.t_replay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.hLines.alpha = helpLinesAlpha;
		
		var text = new cjs.Text(rep_t, rep_f+ " webFont", "#FFFFFF");
		text.textBaseline = "alphabetic";
		text.textAlign = "center";
			
		text.lineHeight = rep_lineH;
		text.lineWidth = rep_lineW;
		
		text.regX = -rep_offX;
		text.regY = text.getMeasuredHeight()/2 - rep_offY;
		
		
		this.addChild(text);
		
		this.cache(-400, -100, 800, 200, 1.5 );
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 4
	this.hLines = new lib.helpLines();
	this.hLines.parent = this;
	this.hLines.setTransform(0,7,0.1,1);

	this.timeline.addTween(cjs.Tween.get(this.hLines).wait(1));

}).prototype = getMCSymbolPrototype(lib.t_replay, new cjs.Rectangle(-30.5,-4.5,61.1,21.1), null);


(lib.t_button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.hLines.alpha = helpLinesAlpha;
		
		var text = new cjs.Text(btn_t, btn_f+ " webFont",  "#FFFFFF");
		text.textBaseline = "alphabetic";
		text.textAlign = "center";
			
		text.lineHeight = btn_lineH;
		text.lineWidth = btn_lineW;
		
		text.regX = -btn_offX;
		text.regY = text.getMeasuredHeight()/2 - btn_offY;
		
		this.addChild(text);
		
		text.shadow = new createjs.Shadow("#881402", 1, 1, 1.5);
		text.cache(-100, -100, 200, 200, 1.5 );
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 4
	this.hLines = new lib.helpLines();
	this.hLines.parent = this;
	this.hLines.setTransform(0,0,0.6,1);

	this.timeline.addTween(cjs.Tween.get(this.hLines).wait(1));

}).prototype = getMCSymbolPrototype(lib.t_button, new cjs.Rectangle(-67.2,-14.1,134.5,27.8), null);


(lib.weapon_UI = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{phase2:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(-8.2,3.7,1.35,1.35,0,0,0,-0.1,0.1);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// Layer 5
	this.bullet2 = new lib.bullet2();
	this.bullet2.parent = this;
	this.bullet2.setTransform(-34,0);

	this.timeline.addTween(cjs.Tween.get(this.bullet2).wait(2));

	// Layer 4
	this.bullet1 = new lib.bullet1();
	this.bullet1.parent = this;
	this.bullet1.setTransform(-33,0);

	this.timeline.addTween(cjs.Tween.get(this.bullet1).wait(2));

	// Layer 2
	this.instance_1 = new lib.Symbol5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(11.9,0.5,1.35,1.35);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,3);

	this.instance_2 = new lib.Symbol4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(11.9,0,1.35,1.35);
	this.instance_2.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01809C").s().p("A6/DPQgCgIAHgHQAHgHACgEQAKgQgSgFIgJgCIgIAAIgZAAQgPgBgHgMQgKABgSgFQgTgFgJABIggAAQgEAAgEgEQgCgEADgDQAHgFAHgJIAMgOQAKgLAMAAQAIABAJAHQARARAQABQARAAASgPQANgKAUAKIAFACQACAAADgDQADgDAHABQAIAAAAgDQAAgFgGgDIgLgFIgQgGIhVgbQgMgEgCgDQgBgDAEgKQAEgJAAgDIAAgGQAAgEAGACQAAAAAAAAQAAABAAAAQABABAAAAQAAABAAABIABAFQAEAFAIgEQANgJAGgCQAMgEAKAKQAOgDAWAFQAZAFAKAAIAKgBQAFgBAEgEQAKgNgRgIQgEgDgagGQgbgFgHAAQgiABgpgOIgKgBIgcAAQgDAAgIgFQgGgEgFABQgMAEgDgIQgBgHAFgCQAHgBADgBQAKgHAQABIAbABQAFAIAGgCQADAAAIgGIANgFIALgGIAIgEIAEgCQgEgCgBgIQgCgIgFgBQgFgBgRgIQgNgGgJACQgPADADgRIAAgLIAAgGQgCgEgEAAQgEgBgDADIgEAEQgEADgCAFIgEAKQgHAKgGADQgHADgMgEQgHgDgJAEIgOAHQgQAFgFAAQgGgBgJgJQgPgOgBgHQABgHARgKQAPgJADgEQAKgKALAAIAKABQAGAAAFgDQAEgFAGABQAEAAAHADQAMAGAEAAQAJAAAEgNQABgFAIABIAOABIAMgBQAGgCABgJQAAgDAEAAQAEABADACQAKAHAKADQAAAAABAAQAAAAAAAAQABAAAAgBQABAAABgBIADgEIADgEQACgCADACIAEADQABABAAAAQAAAAABAAQAAAAAAAAQAAgBABAAQABgNAKAAIAPABMA5VAAAQAAFLANBDQgBAJhGADQgwACjhAAgA6MCgQgGADgBAGQgBADAHAAIAMAAIARAAQAGgBAAgGQgBgGgFgBQgFgBgIABIgFgBQgFAAgFADgA6Uh6QAIABAHAEQANAGAFgFQAGgFgFgMQgGgPgVggQgEgFgIAAQgKABABAEQABALgGAEQgDACgMAAQgLAAgCADQgCACAAANQgCAIAEAFQADADAIAFQAIAHADABQAHADAHgHQADgCAEAAIAEAAg");
	this.shape.setTransform(-7.5,57.1,0.46,1.609,90);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53,-33.3,81,180.9);


(lib.waves_MC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.tweenSea1 = new TweenMax.to(this.bMasked , 0.9, {delay:0.0,     y:"-=8.5",  repeat:-1,   ease:Linear.easeNone } ).timeScale(1);
		this.tweenSea2 = new TweenMax.to(this , 0.9, {delay:0.0,     y:"+=8.5",  repeat:-1,   ease:Linear.easeNone } ).timeScale(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// maskMC (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("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");
	mask.setTransform(0.2,53.1);

	// bMasked
	this.bMasked = new lib.backUndermask();
	this.bMasked.parent = this;
	this.bMasked.setTransform(0.2,-25.3);

	var maskedShapeInstanceList = [this.bMasked];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.bMasked).wait(1));

}).prototype = getMCSymbolPrototype(lib.waves_MC, new cjs.Rectangle(-494.8,-91.7,990.1,136.4), null);


(lib.wave2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.pic.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(91));

	// Layer 2
	this.pic = new lib.wave2_inner();
	this.pic.parent = this;
	this.pic.setTransform(0,-20,1.358,1);

	this.timeline.addTween(cjs.Tween.get(this.pic).to({_off:true},1).wait(90));

	// Layer 1
	this.instance = new lib.wave2_inner();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.36,y:-20,alpha:1},44,cjs.Ease.get(1)).to({scaleX:1,x:0.3,y:-12.6,alpha:0},46,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.5,-32.5,129,45);


(lib.wave1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.pic.visible = false;
		/*
		this.wave.alpha = 1;
		this.wave.x = this.wave.y = 0;
		
		TweenMax.to(this.wave , 0.45, {delay:0,  rotation: "+=1",   y:"-=10.5",    ease:Sine.easeInOut } ); 	
		TweenMax.to(this.wave , 0.45, {delay:0.45,  rotation: "+=1",   y:"+=10.5", scaleX:1.3, scaleY:1.3,   ease:Sine.easeInOut } ); 	
		TweenMax.from(this.wave , 0.45, {delay:0, alpha: 0,     ease:Linear.easeNone } ); 
		TweenMax.to(this.wave , 0.45, {delay:0.45, alpha: 0,     ease:Linear.easeNone } ); 
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(110));

	// Layer 3
	this.pic = new lib.wave1_inner();
	this.pic.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.pic).to({_off:true},1).wait(109));

	// Layer 1
	this.wave = new lib.wave1_inner();
	this.wave.parent = this;
	this.wave.setTransform(0,10.5,0.448,0.215);
	this.wave.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.wave).to({scaleX:1,scaleY:1,y:0,alpha:1},76,cjs.Ease.get(-1)).to({scaleX:1.31,scaleY:1.31,y:-2.7,alpha:0},33,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39,-22.5,78,45);


(lib.wave1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.pic.visible = false;
		/*
		this.wave.alpha = 1;
		this.wave.x = this.wave.y = 0;
		
		TweenMax.to(this.wave , 0.45, {delay:0,  rotation: "+=1",   y:"-=10.5",    ease:Sine.easeInOut } ); 	
		TweenMax.to(this.wave , 0.45, {delay:0.45,  rotation: "+=1",   y:"+=10.5", scaleX:1.3, scaleY:1.3,   ease:Sine.easeInOut } ); 	
		TweenMax.from(this.wave , 0.45, {delay:0, alpha: 0,     ease:Linear.easeNone } ); 
		TweenMax.to(this.wave , 0.45, {delay:0.45, alpha: 0,     ease:Linear.easeNone } ); 
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(175));

	// Layer 3
	this.pic = new lib.wave1_inner();
	this.pic.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.pic).to({_off:true},1).wait(174));

	// Layer 1
	this.wave = new lib.wave1_inner();
	this.wave.parent = this;
	this.wave.setTransform(0,15.5,0.448,0.215);
	this.wave.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.wave).to({scaleX:1,scaleY:1,y:0,alpha:1},76,cjs.Ease.get(-1)).to({scaleX:1.31,scaleY:1.31,y:-2.7,alpha:0},33,cjs.Ease.get(1)).to({_off:true},1).wait(65));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39,-22.5,78,45);


(lib.waterCirc_inner_inner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.waterCirc_inner_inner_inner();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.waterCirc_inner_inner, new cjs.Rectangle(-189,-42,376.2,95.4), null);


(lib.waterCirc_inner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_231 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(231).call(this.frame_231).wait(1));

	// Layer 1 copy 2
	this.instance = new lib.waterCirc_inner_inner();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.3,scaleY:1.3,alpha:0},165).to({_off:true},1).wait(66));

	// Layer 1 copy 3
	this.instance_1 = new lib.waterCirc_inner_inner();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.1,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21).to({_off:false},0).to({scaleX:1.3,scaleY:1.3,alpha:0},165).to({_off:true},1).wait(45));

	// Layer 1 copy
	this.instance_2 = new lib.waterCirc_inner_inner();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,0.1,0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(43).to({_off:false},0).to({scaleX:1.3,scaleY:1.3,alpha:0},165).to({_off:true},1).wait(23));

	// Layer 1
	this.instance_3 = new lib.waterCirc_inner_inner();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,0.1,0.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(65).to({_off:false},0).to({scaleX:1.3,scaleY:1.3,alpha:0},165).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.9,-4.2,37.6,9.6);


(lib.w2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wave2();
	this.instance.parent = this;
	this.instance.setTransform(51.3,0.8,0.432,0.432,0,0,0,0.1,0.1);

	this.instance_1 = new lib.wave2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-71.4,6.3,1.064,0.432,0.2,0,0,0.1,0.3);

	this.instance_2 = new lib.wave2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.8,5.1,0.651,0.46,0,2.2,-0.9,-0.1,0);

	this.instance_3 = new lib.wave2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-136.2,2.1,0.636,0.432,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.w2, new cjs.Rectangle(-175,-22,254.1,37.1), null);


(lib.w0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.w1 = new lib.wave1copy();
	this.w1.parent = this;
	this.w1.setTransform(-153.8,-6.9,0.69,0.69,4.7,0,0,-0.1,-0.1);

	this.w1_1 = new lib.wave1copy();
	this.w1_1.parent = this;
	this.w1_1.setTransform(54.8,-3.6,0.69,0.69);

	this.w1_2 = new lib.wave1copy();
	this.w1_2.parent = this;
	this.w1_2.setTransform(-130.1,-0.9,1.138,0.69,8,0,0,-0.1,-0.1);

	this.w1_3 = new lib.wave1copy();
	this.w1_3.parent = this;
	this.w1_3.setTransform(5.9,3.4,0.983,0.69,-4.7,0,0,0.1,0);

	this.w1_4 = new lib.wave1copy();
	this.w1_4.parent = this;
	this.w1_4.setTransform(-56.1,4.5,1.229,0.69,0,0,0,-0.1,0.1);

	this.w1_5 = new lib.wave1copy();
	this.w1_5.parent = this;
	this.w1_5.setTransform(-21.1,3.4,0.69,0.69);

	this.w1_6 = new lib.wave1copy();
	this.w1_6.parent = this;
	this.w1_6.setTransform(61.8,-1.5,0.491,0.491,-22.8,0,0,0.1,0.1);

	this.w1_7 = new lib.wave1copy();
	this.w1_7.parent = this;
	this.w1_7.setTransform(-102.3,3.6,0.491,0.491,7.2,0,0,0.1,0.1);

	this.w1_8 = new lib.wave1copy();
	this.w1_8.parent = this;
	this.w1_8.setTransform(37,1.2,0.491,0.491,-15.7,0,0,0.1,0.1);

	this.w1_9 = new lib.wave1copy();
	this.w1_9.parent = this;
	this.w1_9.setTransform(-87,3.9,0.491,0.491,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.w1_9},{t:this.w1_8},{t:this.w1_7},{t:this.w1_6},{t:this.w1_5},{t:this.w1_4},{t:this.w1_3},{t:this.w1_2},{t:this.w1_1},{t:this.w1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.w0, new cjs.Rectangle(-181.9,-24.5,265.6,46.5), null);


(lib.tryAgainPlate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{phase1:0,"phase2":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 2
	this.button = new lib.tryAgainButton();
	this.button.parent = this;
	this.button.setTransform(0,0.9);
	new cjs.ButtonHelper(this.button, 0, 1, 2, false, new lib.tryAgainButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button).wait(2));

	// Layer 4
	this.instance = new lib.t_replay();
	this.instance.parent = this;
	this.instance.setTransform(0,-13.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer 3
	this.instance_1 = new lib.t_replay();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-13.3);
	this.instance_1.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(167,166,166,0)","rgba(167,166,166,0.498)","rgba(167,166,166,0.498)","rgba(167,166,166,0)"],[0,0.408,0.627,1],-200,0,200,0).s().p("A/PCWIAAkrMA+fAAAIAAErg");
	this.shape.setTransform(0,0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(167,166,166,0)","#A7A6A6","#A7A6A6","rgba(167,166,166,0)"],[0,0.408,0.627,1],-200,0,200,0).s().p("A/PCWIAAkrMA+fAAAIAAErg");
	this.shape_1.setTransform(0,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200,-14.1,400,30);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.logo_shad.shadow = new createjs.Shadow("#0A1520", 3, 3, 15);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.instance = new lib.logo_hor_336();
	this.instance.parent = this;
	this.instance.setTransform(-114,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.logo_shad = new lib.logo_shadow();
	this.logo_shad.parent = this;
	this.logo_shad.setTransform(0.7,1.6);
	this.logo_shad.alpha = 0.691;
	this.logo_shad.filters = [new cjs.BlurFilter(8, 8, 2)];
	this.logo_shad.cache(-115,-18,230,37);

	this.timeline.addTween(cjs.Tween.get(this.logo_shad).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-121.4,-23.7,247,53), null);


(lib.splashMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_35 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(35).call(this.frame_35).wait(1));

	// wave1_inner
	this.instance = new lib.wave1_inner();
	this.instance.parent = this;
	this.instance.setTransform(-0.3,-0.1,0.032,0.113,-1.5,0,0,3.1,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:2.9,regY:0.4,scaleX:0.07,scaleY:0.78,rotation:-1.3,x:-0.4,y:-7},25,cjs.Ease.get(0.8)).to({regX:2,regY:0.1,scaleX:0.07,scaleY:0.88,rotation:-1.5,y:-8,alpha:0},9).to({_off:true},1).wait(1));

	// wave1_inner
	this.instance_1 = new lib.wave1_inner();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.7,0,0.032,0.113,54.2,0,0,0.9,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:1.9,regY:-0.7,scaleX:0.07,scaleY:0.46,rotation:27.8,x:3.3,y:-1.8},25,cjs.Ease.get(0.8)).to({regX:1.1,regY:-0.4,scaleX:0.07,scaleY:0.52,rotation:23.7,x:3.6,y:-2,alpha:0},9).to({_off:true},1).wait(1));

	// wave1_inner
	this.instance_2 = new lib.wave1_inner();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-1.2,0.3,0.025,0.113,-32.2,0,0,-1.1,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:-1.5,regY:0.2,scaleX:0.05,scaleY:0.58,rotation:-32.1,x:-3.6,y:-2.1},25,cjs.Ease.get(0.8)).to({regX:-0.2,regY:0.1,scaleX:0.06,scaleY:0.65,rotation:-32.2,x:-3.9,y:-2.5,alpha:0},9).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.4,-2.8,6.8,5.8);


(lib.ship_MC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3UJ3IBBivIBGgPIARhTIAOgEIgBg5IAGgdIASgIIgLgaIAHghIBWgsIDUhIIAKhMIAMggIBpgjIAKibIg5AEIAHhSICWhOIgBhiIlaAAIAAgZIFFAAIARk2IAMAAIAAEtIAuAAIAHghIAygfIA0AAIArgiIAAgzIgtgGIAAieICeAAIAACjIDADAIAAAiIgTAfIgVAAIAAAVIAoAJIBnAyIAAA+IgjANIAACUICCAPIBWBdIA/AcICFB4IMHhBIEVgPIAUgbICAgEIAEALIgqBEQA4AHA4AyQAIAVhBAYQAWAsgKArIhDAKIAKBHIiFgwQhZCDgmB8QglBqATBjg");
	mask.setTransform(-3.7,7.8);

	// Layer 5
	this.smokeArea = new lib.smokeArea();
	this.smokeArea.parent = this;

	var maskedShapeInstanceList = [this.smokeArea];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.smokeArea).wait(1));

	// Layer 2
	this.shipInt = new lib.ship_interactive();
	this.shipInt.parent = this;
	this.shipInt.setTransform(-3.2,7.3);
	this.shipInt.alpha = 0.578;

	this.timeline.addTween(cjs.Tween.get(this.shipInt).wait(1));

	// Layer 1
	this.instance = new lib.ship_336();
	this.instance.parent = this;
	this.instance.setTransform(-153.5,-88.6,0.882,0.882);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ship_MC, new cjs.Rectangle(-153.5,-88.6,307,177.5), null);


(lib.island = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_39 = function() {
		this.stop();
		this.wStatic1.alpha = 0;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(1));

	// Layer 14
	this.islandInt = new lib.island_interactive();
	this.islandInt.parent = this;
	this.islandInt.setTransform(0.6,1.2);

	this.timeline.addTween(cjs.Tween.get(this.islandInt).wait(40));

	// Layer 4
	this.wStatic1 = new lib.waveStatic1();
	this.wStatic1.parent = this;
	this.wStatic1.setTransform(1.8,23.5);
	this.wStatic1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.wStatic1).wait(39).to({_off:false},0).wait(1));

	// w1
	this.w0 = new lib.w0();
	this.w0.parent = this;
	this.w0.setTransform(52.3,24.2);
	this.w0._off = true;

	this.timeline.addTween(cjs.Tween.get(this.w0).wait(39).to({_off:false},0).wait(1));

	// Layer 12
	this.w2 = new lib.w2();
	this.w2.parent = this;
	this.w2.setTransform(47.8,30.4);
	this.w2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.w2).wait(39).to({_off:false},0).wait(1));

	// Layer 1
	this.instance = new lib.island_inner();
	this.instance.parent = this;

	this.instance_1 = new lib.island_inner();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.4,32.2,1,0.754,0,-178.8,1.2);
	this.instance_1.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(40));

	// Layer 13
	this.w1 = new lib.wave1_1();
	this.w1.parent = this;
	this.w1.setTransform(95.4,5.6,1,2.069,0,0,0,0.6,0.8);
	this.w1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.w1).wait(19).to({_off:false},0).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142.9,-32,331,114.2);


(lib.grass_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{start:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		//TweenMax.to(this.grass, 7.45, {delay:Math.random(),   rotation:"+=5", scaleX:.95,   scaleY:.95,  ease:Sine.easeInOut } ); 
		
		
		var number = Math.floor(Math.random() * (200 - 10) + 10) ;
		
		
			this.gotoAndPlay(number);
	}
	this.frame_393 = function() {
		this.gotoAndPlay('start');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(393).call(this.frame_393).wait(1));

	// Layer 1
	this.grass = new lib.grass_inner();
	this.grass.parent = this;
	this.grass.setTransform(0,107.5,1,1,0,0,0,0,107.5);

	this.timeline.addTween(cjs.Tween.get(this.grass).wait(2).to({regX:-0.5,regY:-0.5,x:-0.5,y:-0.5},0).wait(11).to({x:-0.4},0).wait(8).to({x:-0.3},0).wait(3).to({rotation:0.1},0).wait(2).to({x:-0.2},0).wait(5).to({x:-0.1},0).wait(4).to({x:0},0).wait(3).to({x:0.1},0).wait(2).to({rotation:0.2},0).wait(1).to({x:0.2},0).wait(3).to({x:0.3},0).wait(3).to({x:0.4},0).wait(3).to({x:0.5},0).wait(2).to({rotation:0.3,x:0.6},0).wait(2).to({x:0.7},0).wait(3).to({x:0.8},0).wait(2).to({x:0.9},0).wait(2).to({rotation:0.4,x:1},0).wait(2).to({x:1.1},0).wait(2).to({x:1.2},0).wait(2).to({x:1.3},0).wait(2).to({rotation:0.5,x:1.4},0).wait(1).to({x:1.5},0).wait(2).to({x:1.6},0).wait(2).to({x:1.7},0).wait(2).to({rotation:0.6,x:1.8},0).wait(2).to({x:1.9},0).wait(1).to({x:2},0).wait(2).to({x:2.1},0).wait(2).to({rotation:0.7,x:2.2},0).wait(1).to({x:2.3},0).wait(2).to({x:2.4},0).wait(2).to({x:2.5},0).wait(1).to({x:2.6},0).wait(1).to({rotation:0.8},0).wait(1).to({x:2.7},0).wait(2).to({x:2.8},0).wait(1).to({x:2.9},0).wait(2).to({x:3},0).wait(1).to({rotation:0.9,x:3.1},0).wait(2).to({x:3.2},0).wait(2).to({x:3.3},0).wait(1).to({x:3.4},0).wait(2).to({rotation:1,x:3.5},0).wait(2).to({x:3.6},0).wait(1).to({x:3.7},0).wait(2).to({x:3.8},0).wait(2).to({rotation:1.1,x:3.9},0).wait(2).to({x:4},0).wait(1).to({x:4.1},0).wait(2).to({x:4.2},0).wait(2).to({rotation:1.2,x:4.3},0).wait(2).to({x:4.4},0).wait(2).to({x:4.5},0).wait(2).to({x:4.6},0).wait(2).to({rotation:1.3,x:4.7},0).wait(2).to({x:4.8},0).wait(2).to({x:4.9},0).wait(2).to({x:5},0).wait(2).to({x:5.1},0).wait(1).to({rotation:1.4},0).wait(1).to({x:5.2},0).wait(2).to({x:5.3},0).wait(3).to({x:5.4},0).wait(2).to({x:5.5},0).wait(2).to({rotation:1.5},0).wait(1).to({x:5.6},0).wait(3).to({x:5.7},0).wait(3).to({x:5.8},0).wait(3).to({x:5.9},0).wait(2).to({rotation:1.6},0).wait(1).to({x:6},0).wait(4).to({x:6.1},0).wait(4).to({x:6.2},0).wait(4).to({x:6.3},0).wait(4).to({rotation:1.7},0).wait(2).to({x:6.4},0).wait(7).to({x:6.5},0).wait(18).to({regX:0,regY:107.5,x:3.9,y:107.5},0).wait(1).to({regX:-0.5,regY:-0.5,x:6.5,y:-0.5},0).wait(15).to({x:6.4},0).wait(6).to({x:6.3},0).wait(1).to({rotation:1.6},0).wait(4).to({x:6.2},0).wait(4).to({x:6.1},0).wait(3).to({x:6},0).wait(3).to({x:5.9},0).wait(1).to({rotation:1.5},0).wait(2).to({x:5.8},0).wait(3).to({x:5.7},0).wait(2).to({x:5.6},0).wait(3).to({x:5.5},0).wait(1).to({rotation:1.4},0).wait(1).to({x:5.4},0).wait(2).to({x:5.3},0).wait(2).to({x:5.2},0).wait(2).to({x:5.1},0).wait(2).to({rotation:1.3,x:5},0).wait(2).to({x:4.9},0).wait(2).to({x:4.8},0).wait(2).to({x:4.7},0).wait(1).to({rotation:1.2},0).wait(1).to({x:4.6},0).wait(2).to({x:4.5},0).wait(1).to({x:4.4},0).wait(2).to({x:4.3},0).wait(2).to({rotation:1.1,x:4.2},0).wait(1).to({x:4.1},0).wait(2).to({x:4},0).wait(2).to({x:3.9},0).wait(1).to({rotation:1,x:3.8},0).wait(2).to({x:3.7},0).wait(1).to({x:3.6},0).wait(2).to({x:3.5},0).wait(2).to({rotation:0.9,x:3.4},0).wait(1).to({x:3.3},0).wait(2).to({x:3.2},0).wait(1).to({x:3.1},0).wait(2).to({rotation:0.8,x:3},0).wait(1).to({x:2.9},0).wait(2).to({x:2.8},0).wait(2).to({x:2.7},0).wait(1).to({x:2.6},0).wait(1).to({rotation:0.7},0).wait(1).to({x:2.5},0).wait(1).to({x:2.4},0).wait(2).to({x:2.3},0).wait(2).to({x:2.2},0).wait(1).to({rotation:0.6,x:2.1},0).wait(2).to({x:2},0).wait(2).to({x:1.9},0).wait(1).to({x:1.8},0).wait(2).to({rotation:0.5,x:1.7},0).wait(2).to({x:1.6},0).wait(2).to({x:1.5},0).wait(2).to({x:1.4},0).wait(1).to({rotation:0.4},0).wait(1).to({x:1.3},0).wait(1).to({x:1.2},0).wait(2).to({x:1.1},0).wait(2).to({x:1},0).wait(3).to({rotation:0.3,x:0.9},0).wait(2).to({x:0.8},0).wait(2).to({x:0.7},0).wait(2).to({x:0.6},0).wait(3).to({rotation:0.2,x:0.5},0).wait(2).to({x:0.4},0).wait(3).to({x:0.3},0).wait(3).to({x:0.2},0).wait(3).to({x:0.1},0).wait(1).to({rotation:0.1},0).wait(2).to({x:0},0).wait(4).to({x:-0.1},0).wait(4).to({x:-0.2},0).wait(5).to({x:-0.3},0).wait(3).to({rotation:0},0).wait(3).to({x:-0.4},0).wait(9).to({x:-0.5},0).wait(12).to({regX:0,regY:107.5,x:0,y:107.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94,-108,187,215);


(lib.tankSmoke = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.pic.alpha = 0;
		var rand =	Math.floor(Math.random() * (10 - 20 + 1)) + 10;
		var scl_rnd =  (Math.random() * 1) + 0.5;
		
		for (var i = 0; i < 20; i++) {
		 var radius =  120;
			var pt_angle = Math.random() * Math.PI * 2;
			var pt_radius_sq = Math.random() * radius * radius;
			var shape = new lib.smokeInner2();
			var scl_rnd =  (Math.random() * 1) + 0.2;
			var coord_rdm = Math.floor(Math.random() * (30 + 0 + 1)) - 0;
			var coord_rdm2 = Math.floor(Math.random() * (30 + 30 + 1)) - 30;
			var coord_rdm3 = Math.floor(Math.random() * (30 + 30 + 1)) - 30;
			this.addChild(shape);
			shape.x = 0;
			shape.y = 0;
			shape.scaleX = scl_rnd*0.1;
			shape.alpha = .63;
			shape.scaleY = scl_rnd*0.1;
			shape.rotation =  shape.rotation + (Math.floor((Math.random() * 10) + 1))/10;
			
			TweenMax.to(shape, 2.7, {
				delay:0.0, 
				
				x:(Math.sqrt(pt_radius_sq) * Math.cos(pt_angle))*1, 
				y:Math.sqrt(pt_radius_sq) * Math.sin(pt_angle)*1,    
				scaleX: scl_rnd*1.6,   
				scaleY:scl_rnd*1.6, 
				rotation:coord_rdm3*5,
				ease:Expo.easeOut  } ); 
				
			
		//	TweenMax.to(shape.state1, 0.3, {delay: 0.4+(Math.random()/2), alpha:0,  ease:Linear.easeNone  } ); 
		//	TweenMax.to(shape.state1, 0.9, {rotation: coord_rdm*10,  ease:Linear.easeNone  } ); 
			TweenMax.to(shape, 1.2, {	delay:1.0,  alpha:0,  ease:Linear.easeNone  } ); 
		
		}	
				/*TweenMax.to(stage, 0.3, {delay: 0.5,  onComplete: remove.bind(this)   } );  
		function remove(){	
				this.removeChild(shape);
			};*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.pic = new lib.Marker_mc();
	this.pic.parent = this;
	this.pic.setTransform(0,0,0.5,0.5,0,0,0,-0.1,0);
	this.pic.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.pic.cache(-33,-103,67,125);

	this.timeline.addTween(cjs.Tween.get(this.pic).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.7,-50.7,31.5,60.7);


(lib.tankSmoke_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		checker = 40;
		this.pic.visible = false;
	}
	this.frame_1 = function() {
		//this.stop();
		
		
		var rand =	Math.floor(Math.random() * (10 - 20 + 1)) + 10;
		var scl_rnd =  (Math.random() * 1) + 0.5;
		
		//for (var i = 0; i < 10; i++) {
		
		if (checker > 0)
		{
			var shape = new lib.smokeInner2();
			var scl_rnd =  (Math.random() * 1) + 0.5;
			var coord_rdm = Math.floor(Math.random() * (-30 - 30 + 1)) + 30;
			var coord_rdm2 = Math.floor(Math.random() * (-30 - 30 + 1)) + 30;
		this.addChild(shape);
		shape.x = 0;
		shape.y = 0;
		shape.scaleX = 0.05;
		shape.scaleY = 0.05;
		shape.alpha = checker/120;
		shape.rotation =  shape.rotation + (Math.floor((Math.random() * 10) + 1))/10;
			
			TweenMax.from(shape, 0.02, {delay: 0.0,  alpha:0,   ease:Linear.easeNone  } ); 
			TweenMax.to(shape, 3.0, {delay:0.0, y:coord_rdm + shape.y - 100, x:coord_rdm2/3,    scaleX: checker/20,   scaleY:checker/20,   ease:Expo.easeOut  } ); 
				
			TweenMax.to(shape, 0.9, {delay: 0.0,   x:"+=25", alpha: 0,  ease:Linear.easeNone  } ); 
		
			
			TweenMax.to(shape, 0.6, {delay: 0.8,  alpha: 0,  ease:Linear.easeNone  } ); 
		
				TweenMax.to(stage, 0.3, {delay: 3.0,  onComplete: remove.bind(this)   } );  
				
		function remove(){	this.removeChild(shape);	} 
		}
	}
	this.frame_3 = function() {
		checker --;
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(2).call(this.frame_3).wait(1));

	// Layer 1
	this.pic = new lib.Marker_mc();
	this.pic.parent = this;
	this.pic.setTransform(0,0,0.5,0.5,0,0,0,-0.1,0);
	this.pic.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.pic.cache(-33,-103,67,125);

	this.timeline.addTween(cjs.Tween.get(this.pic).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.7,-50.7,31.5,60.7);


(lib.Shot_mc_inner_state1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Symbol17();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-22.5,48,44.8);


(lib.fireInner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.state1 = new lib.Shot_mc_inner_state1();
	this.state1.parent = this;
	this.state1.setTransform(0,-1);

	this.timeline.addTween(cjs.Tween.get(this.state1).wait(1));

}).prototype = getMCSymbolPrototype(lib.fireInner, new cjs.Rectangle(-24,-23.5,48,44.8), null);


(lib.tankShot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{reload:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.pic.alpha = 0;
		var scl_rnd =  (Math.random() * 1) + 0.5;
		
		for (var i = 0; i < 100; i++) {
			var rand =	Math.floor(Math.random() * (300 + 300 + 1)) - 300;
		
		 var radius =  100;
			var pt_angle = Math.random() * Math.PI * 2;
			var pt_radius_sq = Math.random() * radius * radius;
			var shape = new lib.fireInner();
			var scl_rnd =  (Math.random() * 1) + 0.2;
			var coord_rdm = Math.floor(Math.random() * (30 + 0 + 1)) - 0;
			var coord_rdm2 = Math.floor(Math.random() * (30 + 30 + 1)) - 30;
			var coord_rdm3 = Math.floor(Math.random() * (30 + 30 + 1)) - 30;
			this.addChild(shape);
			shape.x = 0;
			shape.y = 0;
			shape.scaleX = scl_rnd*0.1;
			shape.scaleY = scl_rnd*0.1;
			shape.rotation =  shape.rotation + (Math.floor((Math.random() * 10) + 1))/10;
			
			TweenMax.to(shape, 0.7, {
				delay:0.0, 
				
				x:(Math.sqrt(pt_radius_sq) * Math.cos(pt_angle))*1, 
				y:Math.sqrt(pt_radius_sq) * Math.sin(pt_angle)*1,    
				scaleX: scl_rnd*1.6,   
				scaleY:scl_rnd*1.6,   
				ease:Expo.easeOut  } ); 
				
			
			TweenMax.to(shape.state1, 0.3, {delay: 0.8+(Math.random()/2), alpha:0,  ease:Linear.easeNone  } ); 
			TweenMax.to(shape.state1, 0.9, {rotation: rand, y:"-=20",  ease:Linear.easeNone  } ); 
		
		}	
				/*TweenMax.to(stage, 0.3, {delay: 0.5,  onComplete: remove.bind(this)   } );  
		function remove(){	
				this.removeChild(shape);
			};*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.pic = new lib.Marker_mc();
	this.pic.parent = this;
	this.pic.setTransform(0,0,0.3,0.3,0,0,0,-0.1,0);
	this.pic.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 153, 0, 0)];
	this.pic.cache(-33,-103,67,125);

	this.timeline.addTween(cjs.Tween.get(this.pic).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.4,-30.4,18.9,36.4);


(lib.fireMorph = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.fire = new lib.fireInner();
	this.fire.parent = this;
	this.fire.setTransform(0,0,1,1,0,0,0,0,-1.1);

	this.smoke = new lib.smokeInner2();
	this.smoke.parent = this;
	this.smoke.setTransform(0.1,0,0.5,0.5,0,0,0,0.1,-1);
	this.smoke.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.smoke},{t:this.fire}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fireMorph, new cjs.Rectangle(-30,-29.5,60,60), null);


(lib.explPartsContainer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.pic.alpha = 0;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.pic = new lib.marker();
	this.pic.parent = this;
	this.pic.setTransform(0,0,0.1,0.1,0,0,0,-0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.pic).wait(1));

}).prototype = getMCSymbolPrototype(lib.explPartsContainer, new cjs.Rectangle(-2.1,-2.1,4.2,4.2), null);


(lib.explosionPart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"start":1});

	// timeline functions:
	this.frame_0 = function() {
		//for (var i = 0; i < 100; i++) {
		this.count = 0;
		this.pic.visible = false;
		/*
		this. posXoffset = 
		this. posYoffset = */
		 //var radius =  100;
			/*var pt_angle = Math.random() * Math.PI * 2;
			var pt_radius_sq = Math.random() * radius * radius;
			var shape = new lib.fireInner();
			var scl_rnd =  (Math.random() * 1) + 0.2;
			var coord_rdm = Math.floor(Math.random() * (30 + 0 + 1)) - 0;
			var coord_rdm2 = Math.floor(Math.random() * (30 + 30 + 1)) - 30;
			var coord_rdm3 = Math.floor(Math.random() * (30 + 30 + 1)) - 30;
			this.addChild(shape);
			shape.x = 0;
			shape.y = 0;
			shape.scaleX = scl_rnd*0.1;
			shape.scaleY = scl_rnd*0.1;
			shape.rotation =  shape.rotation + (Math.floor((Math.random() * 10) + 1))/10;
			
			TweenMax.to(shape, 0.7, {
				delay:0.0, 
				
				x:(Math.sqrt(pt_radius_sq) * Math.cos(pt_angle))*1, 
				y:Math.sqrt(pt_radius_sq) * Math.sin(pt_angle)*1,    
				scaleX: scl_rnd*1.6,   
				scaleY:scl_rnd*1.6,   
				ease:Expo.easeOut  } ); */
				
			
			//TweenMax.to(shape.state1, 0.3, {delay: 0.4+(Math.random()/2), alpha:0,  ease:Linear.easeNone  } ); 
			this.startFire = function(){
		var durationTime = .3;
				var delayRand =  Math.random()/10;
		
		TweenMax.to(this, durationTime*3, {delay: delayRand, x:this.rand*1.3,  ease:Sine.easeOut  } ); 
		//TweenMax.to(this, durationTime, {delay: 0.0, y: - Math.abs(this.rand),  yoyo:true, repeat:1,  ease:Cubic.easeOut  } ); 
		
		//TweenMax.to(this, durationTime, {delay: delayRand, y:-  Math.abs(this.rand)/2, ease:Cubic.easeOut  } ); 
		TweenMax.to(this, durationTime, {delay: delayRand, y:-  Math.abs(this.rand)/2, ease:Cubic.easeOut  } ); 
		TweenMax.to(this, durationTime*2, {delay: delayRand + durationTime, y:  Math.abs(this.rand), ease:Sine.easeIn  } ); 
		
		
		}
		
		
		this.startFire();
	}
	this.frame_1 = function() {
		if(this.count < 10){
				
			/*	
			var smoke = new lib.smokeInner();
				
				var scaleTo = Math.abs ( this.rand )/300;
				
				smoke.scaleX = smoke.scaleY = .05; 
				smoke.alpha = 0;
				this.parent.addChild(smoke);
				smoke.x = this.x + this.rand / 10;
				smoke.y = this.y + this.rand / 5;
				
				TweenMax.to(smoke, .6, {delay:.0, scaleX:scaleTo,  scaleY:scaleTo,   ease:Linear.easeNone  } ); 
				TweenMax.to(smoke, .3, {delay:.0, alpha:.25, yoyo:true, repeat:1,   ease:Linear.easeNone  } ); 
		
				
				
				
				
			var shape = new lib.fireInner();
				
				shape.scaleX = shape.scaleY = Math.abs ( this.rand )/300; 
				
				this.parent.addChild(shape);
				shape.x = this.x + this.rand / 10;
				shape.y = this.y + this.rand / 5;
				
				TweenMax.to(shape, .3, {delay:0, scaleX:0,  scaleY:0,  ease:Linear.easeNone  } ); 
		*/
			
				
			var shape = new lib.fireMorph();
				
				shape.scaleX = shape.scaleY = Math.abs ( this.rand )/500; 
				
				this.parent.addChild(shape);
				
				shape.rotation = Math.random() * 360;
				shape.x = this.x + this.rand / 10;
				shape.y = this.y + this.rand / 5;
				
				TweenMax.to(shape.fire, .4, {delay:.05, alpha:0,  ease:Linear.easeNone  } ); 
				//TweenMax.from(shape.smoke, .3, {delay:.1, alpha:0,  ease:Linear.easeNone  } ); 
				TweenMax.to(shape, .7, {delay:.4, alpha:0, ease:Linear.easeNone  } ); 
				TweenMax.to(shape, .7, {delay:0, scaleX:this.rand * .01,  scaleY:this.rand * .01,  ease:Cubic.easeOut  } ); 
		
				
				
				
				
				
				
			this.count++;
				}
	}
	this.frame_3 = function() {
		this.gotoAndPlay("start");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(2).call(this.frame_3).wait(1));

	// Layer 1
	this.pic = new lib.marker2();
	this.pic.parent = this;
	this.pic.setTransform(0,0,0.1,0.1,0,0,0,-0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.pic).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.6,-1.6,3.3,3.3);


(lib.duck = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if (this.topDuck){
			var wCirc = new lib.wCirc();
			this.parent.back.addChild(wCirc);
			var duckLocalPos = this.localToLocal(0,0,stageNX.sDucks.back);
		
			wCirc.x = duckLocalPos.x ;
			wCirc.y = duckLocalPos.y +25;
			}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(90));

	// duck_head
	this.instance = new lib.duck_head();
	this.instance.parent = this;
	this.instance.setTransform(20.9,-17.8,1,1,0,0,0,-7.4,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0,x:28.2,y:-20.2},0).wait(3).to({rotation:0.1},0).wait(1).to({x:28.1},0).wait(1).to({rotation:0.2},0).wait(1).to({x:28},0).wait(1).to({rotation:0.3,x:27.9},0).wait(2).to({rotation:0.4,x:27.8},0).wait(1).to({rotation:0.5,x:27.7},0).wait(1).to({rotation:0.6,x:27.6},0).wait(1).to({rotation:0.7,x:27.4},0).wait(1).to({rotation:0.8,x:27.3,y:-20.1},0).wait(1).to({rotation:0.9,x:27.2},0).wait(1).to({rotation:1.1,x:27},0).wait(1).to({rotation:1.2,x:26.9},0).wait(1).to({rotation:1.3,x:26.8},0).wait(1).to({rotation:1.5,x:26.6},0).wait(1).to({rotation:1.6,x:26.5,y:-20},0).wait(1).to({rotation:1.7,x:26.3},0).wait(1).to({rotation:1.9,x:26.2},0).wait(1).to({rotation:2,x:26},0).wait(1).to({rotation:2.1,x:25.9},0).wait(1).to({rotation:2.2,x:25.7},0).wait(1).to({rotation:2.4,x:25.6,y:-19.9},0).wait(1).to({rotation:2.5,x:25.4},0).wait(1).to({rotation:2.6,x:25.3},0).wait(1).to({rotation:2.7,x:25.2},0).wait(1).to({rotation:2.8,x:25.1},0).wait(1).to({rotation:2.9,x:25},0).wait(1).to({rotation:3,x:24.9},0).wait(1).to({rotation:3.1,x:24.8,y:-19.8},0).wait(1).to({x:24.7},0).wait(1).to({rotation:3.2,x:24.6},0).wait(2).to({rotation:3.3,x:24.5},0).wait(2).to({rotation:3.4,x:24.4},0).wait(5).to({regX:-7.4,regY:2.4,rotation:3.5,x:16.8,y:-17.8},0).wait(1).to({regX:0,regY:0,rotation:3.4,x:24.3,y:-19.8},0).wait(3).to({x:24.4},0).wait(2).to({rotation:3.3,x:24.5},0).wait(2).to({rotation:3.2,x:24.6},0).wait(1).to({rotation:3.1,x:24.7},0).wait(1).to({rotation:3,x:24.8,y:-19.9},0).wait(1).to({x:24.9},0).wait(1).to({rotation:2.9,x:25},0).wait(1).to({rotation:2.8,x:25.1},0).wait(1).to({rotation:2.7,x:25.2},0).wait(1).to({rotation:2.5,x:25.3},0).wait(1).to({rotation:2.4,x:25.5},0).wait(1).to({rotation:2.3,x:25.6,y:-20},0).wait(1).to({rotation:2.2,x:25.7},0).wait(1).to({rotation:2,x:25.9},0).wait(1).to({rotation:1.9,x:26},0).wait(1).to({rotation:1.8,x:26.2},0).wait(1).to({rotation:1.7,x:26.3},0).wait(1).to({rotation:1.5,x:26.5,y:-20.1},0).wait(1).to({rotation:1.4,x:26.6},0).wait(1).to({rotation:1.3,x:26.8},0).wait(1).to({rotation:1.2,x:26.9},0).wait(1).to({rotation:1,x:27},0).wait(1).to({rotation:0.9,x:27.2},0).wait(1).to({rotation:0.8,x:27.3},0).wait(1).to({rotation:0.7,x:27.4,y:-20.2},0).wait(1).to({rotation:0.6,x:27.5},0).wait(1).to({rotation:0.5,x:27.6},0).wait(1).to({x:27.7},0).wait(1).to({rotation:0.4,x:27.8},0).wait(1).to({rotation:0.3},0).wait(1).to({x:27.9},0).wait(1).to({rotation:0.2,x:28},0).wait(2).to({rotation:0.1,x:28.1},0).wait(2).to({rotation:0},0).wait(1).to({x:28.2},0).wait(3).to({regX:-7.4,regY:2.4,x:20.9,y:-17.8},0).wait(1));

	// duck_body
	this.instance_1 = new lib.duck_body_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(19.3,13.9,1,1,0,0,0,25,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:0,regY:0,x:-5.7,y:12.8},0).wait(5).to({rotation:0.1},0).wait(4).to({rotation:0.2},0).wait(2).to({rotation:0.3,y:12.7},0).wait(2).to({rotation:0.4},0).wait(2).to({rotation:0.5},0).wait(1).to({y:12.6},0).wait(1).to({rotation:0.6},0).wait(2).to({rotation:0.7},0).wait(1).to({y:12.5},0).wait(1).to({rotation:0.8,x:-5.6},0).wait(1).to({rotation:0.9},0).wait(2).to({rotation:1},0).wait(1).to({y:12.4},0).wait(1).to({rotation:1.1},0).wait(2).to({rotation:1.2},0).wait(2).to({y:12.3},0).wait(1).to({rotation:1.3},0).wait(3).to({rotation:1.4},0).wait(5).to({rotation:1.5},0).wait(4).to({regX:25,regY:1.1,x:19.4,y:14},0).wait(1).to({regX:0,regY:0,x:-5.6,y:12.2},0).wait(4).to({rotation:1.4},0).wait(4).to({rotation:1.3,y:12.3},0).wait(3).to({rotation:1.2},0).wait(2).to({rotation:1.1},0).wait(1).to({y:12.4},0).wait(1).to({rotation:1},0).wait(2).to({rotation:0.9},0).wait(2).to({rotation:0.8,y:12.5},0).wait(1).to({x:-5.7},0).wait(1).to({rotation:0.7},0).wait(2).to({rotation:0.6,y:12.6},0).wait(1).to({rotation:0.5},0).wait(2).to({rotation:0.4},0).wait(2).to({y:12.7},0).wait(1).to({rotation:0.3},0).wait(2).to({rotation:0.2},0).wait(3).to({rotation:0.1},0).wait(1).to({y:12.8},0).wait(3).to({rotation:0},0).wait(6).to({regX:25,regY:1,x:19.3,y:13.9},0).wait(1));

	// duck_neck
	this.instance_2 = new lib.duck_neck();
	this.instance_2.parent = this;
	this.instance_2.setTransform(24.8,6.9,1,1,0,0,0,1.5,7.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:0,regY:0,x:23.3,y:-0.4},0).wait(2).to({rotation:-0.1},0).wait(2).to({rotation:-0.2,x:23.2},0).wait(1).to({rotation:-0.3},0).wait(2).to({rotation:-0.5,x:23.1},0).wait(1).to({rotation:-0.6},0).wait(1).to({rotation:-0.7},0).wait(1).to({rotation:-0.9,x:23},0).wait(1).to({rotation:-1},0).wait(1).to({rotation:-1.2,x:22.9},0).wait(1).to({rotation:-1.4,x:22.8},0).wait(1).to({rotation:-1.6,y:-0.3},0).wait(1).to({rotation:-1.8,x:22.7},0).wait(1).to({rotation:-2,x:22.6},0).wait(1).to({rotation:-2.2,x:22.5},0).wait(1).to({rotation:-2.4},0).wait(1).to({rotation:-2.6,x:22.4},0).wait(1).to({rotation:-2.9,x:22.3,y:-0.2},0).wait(1).to({rotation:-3.1,x:22.2},0).wait(1).to({rotation:-3.3},0).wait(1).to({rotation:-3.5,x:22.1},0).wait(1).to({rotation:-3.7,x:22},0).wait(1).to({rotation:-3.9},0).wait(1).to({rotation:-4.1,x:21.9,y:-0.1},0).wait(1).to({rotation:-4.3,x:21.8},0).wait(1).to({rotation:-4.5},0).wait(1).to({rotation:-4.6,x:21.7},0).wait(1).to({rotation:-4.8},0).wait(1).to({rotation:-4.9,x:21.6},0).wait(1).to({rotation:-5.1},0).wait(1).to({rotation:-5.2,x:21.5},0).wait(1).to({rotation:-5.3,y:0},0).wait(1).to({rotation:-5.4},0).wait(1).to({rotation:-5.5,x:21.4},0).wait(2).to({rotation:-5.6},0).wait(2).to({rotation:-5.7},0).wait(3).to({regX:1.6,regY:7.3,x:23.6,y:7.1},0).wait(1).to({regX:0,regY:0,x:21.3,y:0},0).wait(3).to({rotation:-5.6},0).wait(1).to({rotation:-5.5},0).wait(2).to({rotation:-5.4,x:21.4},0).wait(1).to({rotation:-5.3},0).wait(1).to({rotation:-5.2},0).wait(1).to({rotation:-5,x:21.5,y:-0.1},0).wait(1).to({rotation:-4.9},0).wait(1).to({rotation:-4.7,x:21.6},0).wait(1).to({rotation:-4.6},0).wait(1).to({rotation:-4.4,x:21.7},0).wait(1).to({rotation:-4.2,x:21.8},0).wait(1).to({rotation:-4},0).wait(1).to({rotation:-3.8,x:21.9,y:-0.2},0).wait(1).to({rotation:-3.6,x:22},0).wait(1).to({rotation:-3.4},0).wait(1).to({rotation:-3.2,x:22.1},0).wait(1).to({rotation:-3,x:22.2},0).wait(1).to({rotation:-2.7,x:22.3},0).wait(1).to({rotation:-2.5,y:-0.3},0).wait(1).to({rotation:-2.3,x:22.4},0).wait(1).to({rotation:-2.1,x:22.5},0).wait(1).to({rotation:-1.9},0).wait(1).to({rotation:-1.7,x:22.6},0).wait(1).to({rotation:-1.5,x:22.7},0).wait(1).to({rotation:-1.4},0).wait(1).to({rotation:-1.2,x:22.8,y:-0.4},0).wait(1).to({rotation:-1},0).wait(1).to({rotation:-0.9,x:22.9},0).wait(1).to({rotation:-0.8},0).wait(1).to({rotation:-0.6,x:23},0).wait(1).to({rotation:-0.5},0).wait(1).to({rotation:-0.4,x:23.1},0).wait(1).to({rotation:-0.3},0).wait(1).to({rotation:-0.2},0).wait(2).to({rotation:-0.1,x:23.2},0).wait(2).to({rotation:0},0).wait(3).to({regX:1.5,regY:7.3,x:24.8,y:6.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.7,-27.9,83.5,55.9);


(lib.d_flying_inner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"start":1});

	// timeline functions:
	this.frame_0 = function() {
		var number = Math.floor(Math.random() * (15 - 3) + 3) ;
		
		
			this.gotoAndPlay(number);
	}
	this.frame_29 = function() {
		this.gotoAndPlay('start');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(1));

	// d_flying_wing_front
	this.instance = new lib.d_flying_wing_front();
	this.instance.parent = this;
	this.instance.setTransform(4.1,-11.9,1,1,0,0,0,-1.4,-12.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-1.2,regY:-12.8,scaleX:1.13,scaleY:0.59,skewX:-163.5,skewY:26.2,x:6.5,y:-5.7},17,cjs.Ease.get(1)).wait(1).to({regX:0,regY:0,scaleX:1.13,scaleY:0.6,skewX:-160.6,skewY:25.7,x:10.2,y:-12.5},0).wait(1).to({scaleX:1.12,scaleY:0.62,skewX:-151.7,skewY:24.3,x:11.3,y:-12.6},0).wait(1).to({scaleX:1.11,scaleY:0.66,skewX:-136.5,skewY:21.9,x:13.1,y:-12.4},0).wait(1).to({scaleX:1.1,scaleY:0.71,skewX:-115.7,skewY:18.5,x:15.2,y:-11.1},0).wait(1).to({scaleX:1.08,scaleY:0.77,skewX:-91.2,skewY:14.6,x:16.5,y:-8.3},0).wait(1).to({scaleX:1.05,scaleY:0.84,skewX:-65.7,skewY:10.5,x:16.1,y:-4.8},0).wait(1).to({scaleX:1.03,scaleY:0.89,skewX:-42.4,skewY:6.8,x:13.7,y:-1.7},0).wait(1).to({scaleX:1.02,scaleY:0.94,skewX:-23.6,skewY:3.8,x:10.5,y:0.1},0).wait(1).to({scaleX:1.01,scaleY:0.97,skewX:-10.2,skewY:1.6,x:7.7,y:0.8},0).wait(1).to({scaleX:1,scaleY:0.99,skewX:-2.5,skewY:0.4,x:5.9,y:1},0).wait(1).to({regX:-1.4,regY:-12.9,scaleX:1,scaleY:1,skewX:0,skewY:0,x:4.1,y:-11.9},0).wait(1));

	// d_flying_body
	this.instance_1 = new lib.d_flying_body();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:1,y:-6},17,cjs.Ease.get(1)).wait(1).to({y:-6.1},0).wait(1).to({x:0.9,y:-6.2},0).wait(1).to({x:0.8,y:-6.5},0).wait(1).to({x:0.7,y:-6.9},0).wait(1).to({x:0.6,y:-7.3},0).wait(1).to({x:0.4,y:-7.8},0).wait(1).to({x:0.3,y:-8.2},0).wait(1).to({x:0.1,y:-8.6},0).wait(1).to({y:-8.8},0).wait(1).to({x:0,y:-9},0).wait(2));

	// Layer 1
	this.instance_2 = new lib.d_flying_wing_back();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-1.5,-12.2,0.926,0.926,8,0,0,-3,-12.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:-2.9,regY:-13,scaleY:0.47,rotation:0,skewX:160.8,skewY:8,x:-1.4,y:-7},17,cjs.Ease.get(1)).wait(1).to({regX:0,regY:0,scaleY:0.48,skewX:158.1,x:-1.1,y:-12.5},0).wait(1).to({scaleY:0.5,skewX:149.8,x:-2.1,y:-12.6},0).wait(1).to({scaleY:0.54,skewX:135.6,x:-3.8,y:-12.5},0).wait(1).to({scaleY:0.6,skewX:116.2,x:-5.8,y:-11.6},0).wait(1).to({scaleY:0.67,skewX:93.2,x:-7.5,y:-9.4},0).wait(1).to({scaleY:0.74,skewX:69.4,x:-7.9,y:-6.3},0).wait(1).to({scaleY:0.81,skewX:47.6,x:-6.6,y:-3.3},0).wait(1).to({scaleY:0.86,skewX:30,x:-4.4,y:-1.3},0).wait(1).to({scaleY:0.9,skewX:17.5,x:-2.3,y:-0.3},0).wait(1).to({scaleY:0.92,skewX:10.3,x:-1,y:0.1},0).wait(1).to({regX:-3,regY:-12.9,scaleY:0.93,rotation:8,skewX:0,skewY:0,x:-1.5,y:-12.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-16,42,32);


(lib.curs2_inner_greenPoints = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		TweenMax.from(this.green_inner, 8.45, {delay:0.0, rotation:360,   repeat:-1,   ease:Linear.easeNone } ); 
		TweenMax.from(this.green_inner, 1.65, {delay:0.0, scaleX:1.95, scaleY:1.95,  yoyo:true, repeat:-1,   ease:Cubic.easeInOut } );
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.green_inner = new lib.curs2_inner_greenPoints_inner();
	this.green_inner.parent = this;
	this.green_inner.setTransform(0,0,1.3,1.3);

	this.timeline.addTween(cjs.Tween.get(this.green_inner).wait(1));

}).prototype = getMCSymbolPrototype(lib.curs2_inner_greenPoints, new cjs.Rectangle(-19.5,-19.4,39.1,39), null);


(lib.coordinator = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var positionToFall = 70;
		var waterSplash = false;
		var stageOffsetX = canvas.width/2;
		var stageOffsetY = canvas.height/2;
		//var ball = new lib.ballMC();
		//var shadow = new lib.shadowMC();
		//var gates = new lib.gatesMC();
		var canMoveNext = true;
		var finalPosX;
		var finalPosY;
		var gotoNext = true;
		var cursLocalPos;
		
		this.marker.visible = false;
		
			stageNX.sSea.ship.shipInt.visible = false;
			stageNX.sSea.island.islandInt.visible = false;
		
		
		this.objsMove = function() {
			
		
		
		if(moveCursor){
			
				TweenMax.to(stageNX.curs1, 1.6, {delay:0.0, x: (stage.mouseX) - stageOffsetX, y:  (stage.mouseY) - stageOffsetY -0,  overwrite:"all",   ease:Back.easeOut } ); 
		
		//	stageNX.curs1.x = (stage.mouseX) - stageOffsetX ;
		//	stageNX.curs1.y = (stage.mouseY) - stageOffsetY -10;
		//	stageNX.barrel.x = (stage.mouseX - stageOffsetX) / 10;
		//	stageNX.barrel.rotation = (stage.mouseX - stageOffsetX) / 40;
			}		
		}
		this.addEventListener("tick", this.objsMove);
		
		this.removeInteraction = function(){
			/*moveCursor = false;
			TweenMax.to(stageNX, 0.4, {delay:0.0,    scaleX:1,   scaleY:1,  alpha: 1,    ease:Expo.easeOut } ); 
			canvasNX.removeEventListener("mousemove", this.parent.scaleIn);
			canvasNX.removeEventListener("mouseout", this.parent.scaleOut);
			TweenMax.to(stageNX.curs, 0.7, {delay:0.0,    scaleX:1.5,   scaleY:1.5,  alpha: 0,    ease:Expo.easeOut } ); 
		*/
			}
		
		this.gotoNextFunc = function(){
			
				
		
			/*
			if(canMoveNext == true){
		    stageNX.gotoAndStop('next');	
			TweenMax.to(stageNX.barrel, 1.6, {delay:0.0,  y:"+=200",  scaleX:2,   scaleY:2,      ease:Cubic.easeIn } ); 
			TweenMax.to(stageNX.tank, 1.6, {delay:0.0,  y:"+=200",  scaleX:2,   scaleY:2,      ease:Cubic.easeIn } );
			canMoveNext = false;
			}
			*/
			} 
		
		
		
		
		function showCursor() {
			document.getElementById('docBody').style.cursor = "default";
		stageNX.gotoAndStop('final');	
				TweenMax.to(stageNX.curs1.curs.curs2, 0.7, {delay:0,    scaleX:2.5,   scaleY:2.5,  alpha: 0,    ease:Expo.easeIn } ); 
		
			}
		
		this.checkSplash = function() {
		if (waterSplash){
		
			var splash = new lib.splashMC();
			stageNX.addChild(splash);
			splash.x = cursLocalPos.x;
			splash.y = cursLocalPos.y;
			splash.scaleX = splash.scaleY =  3.4;
		
			console.log(cursLocalPos.x, cursLocalPos.y)
		
			
			}	
			}
			
			
		this.fireAir = function() {
			stageNX.coordinator.fireUser(0);
			} 	
			
		this.fireSea = function() {
			stageNX.coordinator.fireUser(1);
			} 
			
		this.fireUser = function(paremeter) {
			canvasNX.removeEventListener("mousemove", canvasNX.scaleIn);
			canvasNX.removeEventListener("mouseout", canvasNX.scaleOut);
			canvasNX.removeEventListener("mouseout", stageNX.placeCursor);
			
			
			stageNX.aAreaAir.removeEventListener("click", stageNX.coordinator.fireAir);
			stageNX.aAreaSea.removeEventListener("click", stageNX.coordinator.fireSea);
		
		/*
		stageNX.aAreaAir.x = -1500;	
		stageNX.aAreaAir.y = -1500;	
		stageNX.aAreaSea.x = -1500;	
		stageNX.aAreaSea.y = -1500;	
		*/	
		
		//var cursLocalPos = stageNX.curs1.curs.localToLocal(0,0,shot);
			
			// Instantiate Tracer
			var tracer = new lib.tracer();
			stageNX.addChild(tracer);
			cursLocalPos = stageNX.curs1.curs.localToLocal(0,0,stageNX);
		
			tracer.x = cursLocalPos.x - 30;
			tracer.y = cursLocalPos.y + 20;
			TweenMax.to(tracer, .5, {  x:cursLocalPos.x , y:cursLocalPos.y, scaleX:0.05, scaleY:0.05,  ease:Expo.easeOut, onComplete: this.checkSplash });
			TweenMax.to(tracer, .1, {  delay: .5,     alpha: 0  });
		
			// Instantiate Shot
			
			var shipInteractive = stageNX.sSea.ship.shipInt;
			var islandInteractive = stageNX.sSea.island.islandInt;
			var cursLocalPos2 = stageNX.curs1.curs.localToLocal(0,0,shipInteractive);
			var cursLocalPos3 = stageNX.curs1.curs.localToLocal(0,0,islandInteractive);
		
			if( shipInteractive.hitTest(cursLocalPos2.x, cursLocalPos2.y) || islandInteractive.hitTest(cursLocalPos3.x, cursLocalPos3.y)){
				
		
				// console.log('hit');
			
			var shot = new lib.shot();
			stageNX.sSea.addChild(shot);
			
			shot.x = cursLocalPos.x;
			shot.y = cursLocalPos.y;
				
				// Instantiate Smoke
				var smokeArea = stageNX.sSea.ship.smokeArea;
				var smoke = new lib.smokeInner2();
					smokeArea.addChild(smoke);
				smoke.x = cursLocalPos2.x - 5;
				smoke.y = cursLocalPos2.y + 5;
				smoke.alpha = .6;
				smoke.scaleX = .25;
				smoke.scaleY =  .3;
				TweenMax.from(smoke, .5, {   delay: .5,     alpha: 0   });
				TweenMax.to(smoke, 8, {   delay: 5,     alpha: 0,   ease:Linear.easeNone   });	
					
			
				
				
			} else if (paremeter == 1){
				
		console.log('sea!');
				waterSplash = true;
				}
			
			
			
			stageNX.weapon.gotoAndStop('phase2');
		
			
		//	stageNX.aArea2.y = -800;
		//	stageNX.aArea2.x = -800;
			
			moveCursor = false;
			stageNX.parent.gotoAndPlay('shakeBig');		
			
		
			
			TweenMax.to(stageNX.weapon, 0.7, {delay:0.3,    y:"+=70",      ease:Expo.easeIn } ); 
		
			
			
			TweenMax.to(stageNX.t3, 0.45, {delay:0.5,    scaleX:0,   scaleY:0,     ease:Expo.easeIn } ); 
			TweenMax.to(stageNX.plate, 0.75, {delay:0.7,   scaleX:0,     ease:Expo.easeIn, onComplete: showCursor.bind(this) } ); 
		
			
			
		}
		
		stageNX.aAreaAir.addEventListener("click", stageNX.coordinator.fireAir);
		stageNX.aAreaSea.addEventListener("click", stageNX.coordinator.fireSea);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// marker
	this.marker = new lib.marker();
	this.marker.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.marker).wait(1));

}).prototype = getMCSymbolPrototype(lib.coordinator, new cjs.Rectangle(-21.2,-21.2,42.5,42.5), null);


(lib.Text_300x250_Button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//this.text.shadow = new createjs.Shadow("#881402", 1, 1, 1.5);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.text = new lib.t_button();
	this.text.parent = this;
	this.text.setTransform(0,-1);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Text_300x250_Button, new cjs.Rectangle(-63,-8,126,14), null);


(lib.Button_134x36_Main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"phase1":0,"phase2":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 2
	this.button = new lib.Button_area();
	this.button.parent = this;
	this.button.setTransform(0.2,0.2);
	new cjs.ButtonHelper(this.button, 0, 1, 2, false, new lib.Button_area(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button).wait(2));

	// Glow
	this.glow_mc = new lib.ButtonGlow();
	this.glow_mc.parent = this;
	this.glow_mc.setTransform(0,0,0.676,1.094);
	this.glow_mc.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.glow_mc).wait(2));

	// Body
	this.instance = new lib.b_glow();
	this.instance.parent = this;
	this.instance.alpha = 0.25;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Text
	this.instance_1 = new lib.Text_300x250_Button();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-0.1,1,1,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

	// Body
	this.btnPic = new lib.Button_134x36_Body();
	this.btnPic.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.btnPic).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71,-18.4,142.3,37.3);


(lib.backInner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sky (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhTeAbIMAAAg2PMCm9AAAMAAAA2Pg");
	mask.setTransform(0.5,-144.6);

	// Layer 3
	this.bMasked = new lib.backUndermask();
	this.bMasked.parent = this;

	var maskedShapeInstanceList = [this.bMasked];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.bMasked).wait(1));

	// Layer 2 copy
	this.sea = new lib.waves_MC();
	this.sea.parent = this;
	this.sea.setTransform(-0.1,24.4);

	this.timeline.addTween(cjs.Tween.get(this.sea).wait(1));

	// Layer 1
	this.bMasked_1 = new lib.backUndermask();
	this.bMasked_1.parent = this;

	this.bMasked_2 = new lib.backUndermask();
	this.bMasked_2.parent = this;
	this.bMasked_2.setTransform(0,0,1.109,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bMasked_2},{t:this.bMasked_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.backInner, new cjs.Rectangle(-554.6,-71,1109.2,294.5), null);


(lib.autoplay2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_90 = function() {
		TweenMax.to(stageNX.curs1, 2.7, {delay:0.3,  x:"-=60", y:"+=15",    ease:Cubic.easeInOut } );
	}
	this.frame_216 = function() {
		TweenMax.to(stageNX.curs1, 2.7, {delay:0.3,  x:"+=130", y:"-=45",    ease:Cubic.easeInOut } );
	}
	this.frame_397 = function() {
		this.stop();
		stageNX.coordinator.fireUser(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(90).call(this.frame_90).wait(126).call(this.frame_216).wait(181).call(this.frame_397).wait(1));

	// Layer 1
	this.instance = new lib.marker2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(397));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.5,-16.5,33,33);


(lib.autoplay1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_397 = function() {
		this.stop();
		stageNX.goNext1();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(397).call(this.frame_397).wait(1));

	// Layer 1
	this.instance = new lib.marker2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(397));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.5,-16.5,33,33);


(lib.aim_2_inner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.shadow = new createjs.Shadow("#000000", 0, 1, 3);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.green = new lib.curs2_inner_greenPoints();
	this.green.parent = this;
	this.green.setTransform(0,7.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhWC0IAAgBIBYiQIBYCNIgEAEQgLALgNAIIg8hiIg8BjQgPgIgNgMgAcUA5IAAAAIoqAAIAAAAIgiAAIAAAAIoqAAIAAAAIgiAAIAAAAIkmAAIAAiGIAiAAIAABvIEEAAIAAjpIAiAAIAADpIEEAAIAAhvIAiAAIAABvIEEAAIAAjpIAiAAIAADpIEEAAIAAhvIAiAAIAABvIEEAAIAAjpIAiAAIAAEAgAqdA5IAAAAIoqAAIAAAAIgiAAIAAAAIoqAAIAAAAIgiAAIAAkAIAiAAIAADpIEEAAIAAhvIAiAAIAABvIEEAAIAAjpIAiAAIAADpIEEAAIAAhvIAiAAIAABvIEEAAIAAjpIAiAAIAADpIEEAAIAAhvIAiAAIAACGIkmAAIAAAAg");
	this.shape.setTransform(0,-2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.green}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.aim_2_inner, new cjs.Rectangle(-184.6,-22.1,369.2,48.8), null);


(lib.aim_1_inner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.curs1 = new lib.aim_1_inner_inner();
	this.curs1.parent = this;

	this.curs2 = new lib.aim_2_inner();
	this.curs2.parent = this;
	this.curs2.setTransform(-0.7,-0.3,3.5,3.5,0,0,0,-0.1,6.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.curs2},{t:this.curs1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.aim_1_inner, new cjs.Rectangle(-646.5,-100.2,1292.1,200.4), null);


(lib.aim_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.curs = new lib.aim_1_inner();
	this.curs.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.curs).wait(1));

}).prototype = getMCSymbolPrototype(lib.aim_1, new cjs.Rectangle(-646.5,-100.2,1292.1,200.4), null);


(lib.wShip4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wave2();
	this.instance.parent = this;
	this.instance.setTransform(-55,0,0.432,0.432,5,0,0,0.1,0.2);

	this.instance_1 = new lib.wave2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(5.1,2.5,0.696,0.432,4,0,0,0.3,0.2);

	this.instance_2 = new lib.wave2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(43,4.9,0.599,0.432,9.7,0,0,0.2,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.wShip4, new cjs.Rectangle(-82.5,-16.5,165.9,31.4), null);


(lib.wShip3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wave2();
	this.instance.parent = this;
	this.instance.setTransform(0.3,4.6,1.528,0.432,5,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.wShip3, new cjs.Rectangle(-98.2,-18.1,197.2,34.1), null);


(lib.wShip2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.w1 = new lib.wave1copy();
	this.w1.parent = this;
	this.w1.setTransform(-17.9,0.3,1,1,4.5,0,0,0.5,0.4);

	this.w1_1 = new lib.wave1copy();
	this.w1_1.parent = this;
	this.w1_1.setTransform(19.7,2,1,1,2.6,0,0,0.6,0.4);

	this.w1_2 = new lib.wave1copy();
	this.w1_2.parent = this;
	this.w1_2.setTransform(23.2,6.4,0.289,0.667,-32.4,0,0,0.3,0.4);

	this.w1_3 = new lib.wave1copy();
	this.w1_3.parent = this;
	this.w1_3.setTransform(38.2,7.8,0.29,0.667,-10,0,0,0.6,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.w1_3},{t:this.w1_2},{t:this.w1_1},{t:this.w1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.wShip2, new cjs.Rectangle(-59,-25.7,118.1,51.4), null);


(lib.wShip1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.w1 = new lib.wave1_1();
	this.w1.parent = this;
	this.w1.setTransform(64.4,9.2,0.771,1,2.3,0,0,0.8,0.8);

	this.w1_1 = new lib.wave1copy();
	this.w1_1.parent = this;
	this.w1_1.setTransform(-43.7,-5.3,0.726,1.543,0,43.4,178.5,0.5,0.7);

	this.w1_2 = new lib.wave1copy();
	this.w1_2.parent = this;
	this.w1_2.setTransform(34.1,6.7,0.731,1,5.6,0,0,0.5,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.w1_2},{t:this.w1_1},{t:this.w1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.wShip1, new cjs.Rectangle(-94.7,-32,189.6,64.1), null);


(lib.wCirc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.waterCirc_inner();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.wCirc, new cjs.Rectangle(-18.9,-4.2,37.6,9.6), null);


(lib.tryAgainPlate_outer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		
		
		this.tryAgain.button.addEventListener("rollover", over_func.bind(this));
		function over_func()    {
			
			this.tryAgain.gotoAndStop('phase2');	
			TweenMax.to(this.tryAgain, 0.3, {delay: 0.0, y:-5,  ease:Bounce.easeOut  } );
		
			
			
		
			}
		
		this.tryAgain.button.addEventListener("rollout", out_func.bind(this));
		function out_func()    {
			
			this.tryAgain.gotoAndStop('phase1');	
			TweenMax.to(this.tryAgain, 0.3, {delay: 0.0, y:0,  ease:Bounce.easeOut  } );
			
			}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.tryAgain = new lib.tryAgainPlate();
	this.tryAgain.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.tryAgain).wait(1));

}).prototype = getMCSymbolPrototype(lib.tryAgainPlate_outer, new cjs.Rectangle(-200,-14.1,400,30), null);


(lib.scene_sea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.tweenShip = new TweenMax.to(this.ship , 1.9, {delay:0.0,  rotation: "+=.5",   y:"+=0.75",  repeat:-1, yoyo:true,   ease:Sine.easeInOut }).timeScale(1);
		this.tweenShipRefl = new TweenMax.to(this.shipReflection , 1.9, {delay:0.0,  rotation: "+=.5",   y:"-=0.75",  repeat:-1, yoyo:true,   ease:Sine.easeInOut } ).timeScale(1);
	}
	this.frame_37 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(37).call(this.frame_37).wait(2));

	// isl
	this.island = new lib.island();
	this.island.parent = this;
	this.island.setTransform(-96.7,30.9,0.834,0.834);

	this.timeline.addTween(cjs.Tween.get(this.island).wait(39));

	// Layer 8
	this.wShip1 = new lib.wShip1();
	this.wShip1.parent = this;
	this.wShip1.setTransform(46.8,44.8,0.826,0.826);
	this.wShip1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.wShip1).wait(37).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer 6
	this.wShip2 = new lib.wShip2();
	this.wShip2.parent = this;
	this.wShip2.setTransform(72,44.5,0.661,0.661,0,0,0,0.1,0.3);

	this.timeline.addTween(cjs.Tween.get(this.wShip2).wait(39));

	// Layer 9
	this.wShip3 = new lib.wShip3();
	this.wShip3.parent = this;
	this.wShip3.setTransform(44.3,51.1,0.826,0.826,0,0,0,0.1,0);
	this.wShip3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.wShip3).wait(24).to({_off:false},0).wait(15));

	// Layer 7
	this.wShip4 = new lib.wShip4();
	this.wShip4.parent = this;
	this.wShip4.setTransform(53.6,51,0.661,0.661,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.wShip4).wait(39));

	// Ship Waves
	this.instance = new lib.wave_cut();
	this.instance.parent = this;
	this.instance.setTransform(-21.2,23.5,0.661,0.661,2.7);

	this.instance_1 = new lib.wave_cut();
	this.instance_1.parent = this;
	this.instance_1.setTransform(3,25.9,0.661,0.661,2.7);

	this.instance_2 = new lib.wave_cut();
	this.instance_2.parent = this;
	this.instance_2.setTransform(30.6,28.5,0.661,0.661,2.7);

	this.instance_3 = new lib.wave_cut();
	this.instance_3.parent = this;
	this.instance_3.setTransform(62.2,30.4,0.661,0.661,2.7);

	this.instance_4 = new lib.wave();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1,38,0.491,0.374);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(39));

	// Ship Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Az1JjIAA1qMAnrAAAIAAYPg");
	mask.setTransform(40.8,-23.4);

	// Ship
	this.ship = new lib.ship_MC();
	this.ship.parent = this;
	this.ship.setTransform(-54.9,36.1,0.661,0.661,0,0,0,-132,67.3);

	var maskedShapeInstanceList = [this.ship];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.ship).wait(39));

	// Ship Reflection
	this.shipReflection = new lib.ship_MC();
	this.shipReflection.parent = this;
	this.shipReflection.setTransform(-56.9,38.3,0.661,0.413,0,172.6,6.2,-132.1,67.3);
	this.shipReflection.alpha = 0.281;

	this.timeline.addTween(cjs.Tween.get(this.shipReflection).wait(39));

	// Sea
	this.sea = new lib.backInner();
	this.sea.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.sea).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-554.6,-318.2,1109.2,541.7);


(lib.scene_ducks = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.duck.topDuck = true;
		this.duck_refl.topDuck = false;
		
		this.duck2.topDuck = true;
		this.duck2_refl.topDuck = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// grass
	this.instance = new lib.grass_mc();
	this.instance.parent = this;
	this.instance.setTransform(-345.2,2,1.25,1.25);

	this.grass = new lib.grass_inner();
	this.grass.parent = this;
	this.grass.setTransform(502.7,116.4,1.35,1.35,0,0,0,0.1,107.5);

	this.grass_1 = new lib.grass_inner();
	this.grass_1.parent = this;
	this.grass_1.setTransform(-468.2,102.5,1.3,1.3,0,0,0,0,107.6);

	this.p2 = new lib.grass_mc();
	this.p2.parent = this;
	this.p2.setTransform(-150.9,16.1,1.25,1.25);

	this.p3 = new lib.grass_mc();
	this.p3.parent = this;
	this.p3.setTransform(102.8,22,1.25,1.25);

	this.instance_1 = new lib.grass_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(329.3,-11.6,1.25,1.25);

	this.p4 = new lib.grass_mc();
	this.p4.parent = this;
	this.p4.setTransform(189.8,-5.2);

	this.p1 = new lib.grass_mc();
	this.p1.parent = this;
	this.p1.setTransform(-235.2,15.1);

	this.grass_2 = new lib.grass_inner();
	this.grass_2.parent = this;
	this.grass_2.setTransform(535.5,14.4,1.35,1.35,0,0,180,0.1,107.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.grass_2},{t:this.p1},{t:this.p4},{t:this.instance_1},{t:this.p3},{t:this.p2},{t:this.grass_1},{t:this.grass},{t:this.instance}]}).wait(1));

	// duck
	this.duck2 = new lib.duck();
	this.duck2.parent = this;
	this.duck2.setTransform(-48,4.8,1.069,1.069,0,0,180,0.2,0.1);

	this.duck2_refl = new lib.duck();
	this.duck2_refl.parent = this;
	this.duck2_refl.setTransform(-48,54.1,1.069,1.069,180,0,0,0.2,-0.3);
	this.duck2_refl.alpha = 0.379;

	this.duck = new lib.duck();
	this.duck.parent = this;
	this.duck.setTransform(37.4,-8.4,0.864,0.864,0,0,0,0.1,0);

	this.duck_refl = new lib.duck();
	this.duck_refl.parent = this;
	this.duck_refl.setTransform(37.4,33.7,0.864,0.864,0,180,0,0.1,-0.1);
	this.duck_refl.alpha = 0.379;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.duck_refl},{t:this.duck},{t:this.duck2_refl},{t:this.duck2}]}).wait(1));

	// back
	this.back = new lib.Symbol1();
	this.back.parent = this;

	this.instance_2 = new lib.circTrees();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1,-46.9,6.704,1.153,0,0,0,0.1,-0.1);

	this.grass_3 = new lib.grass_inner();
	this.grass_3.parent = this;
	this.grass_3.setTransform(-346.5,-0.2,1.25,1.25,0,-66.3,113.7,0,107.5);

	this.grass_4 = new lib.grass_inner();
	this.grass_4.parent = this;
	this.grass_4.setTransform(349.4,15.4,1.25,1.25,65.5,0,0,0,107.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.grass_4},{t:this.grass_3},{t:this.instance_2},{t:this.back}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.scene_ducks, new cjs.Rectangle(-639.9,-276.5,1302.5,432.3), null);


(lib.shot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{shot:1,phaseShot:30});

	// timeline functions:
	this.frame_0 = function() {
		this.pic.visible = false;
	}
	this.frame_30 = function() {
		stage.getChildAt(0).main_mc.gotoAndPlay('shakeBIG');
		TweenMax.from(stageNX, 1.2, {  x:"-=3" , y:"+=5", scaleX:1.05, scaleY:1.05,  ease:Elastic.easeOut });
		
		this.rand = [-30, 45, -15, 30, -45]
		
		TweenMax.to(this.fire, 1.0, {delay: 0.0,scaleX: (this.fire.scaleX * 1.7), scaleY: (this.fire.scaleY * 1.7), alpha:0, ease:Linear.easeNone  } ); 
		
		TweenMax.to(this.sparks, 0.4, {delay: 0.0, scaleX: 2.5, scaleY: 2.5,  ease:Sine.easeOut  } ); 
		TweenMax.to(this.sparks, 0.4, {delay: 0.0,  alpha:0, ease:Linear.easeNone  } ); 
		
		TweenMax.to(this.circ, 0.4, {delay: 0.0,  alpha:0, ease:Linear.easeNone  } ); 
		
		for(var i = 0; i < 3; i++){
		
		
		var explP = new lib.explP();
			
		var max = 45;
		var min = 15;
			
			var randNum = Math.floor(Math.random() * (max - min + 1)) + min;
			if (Math.random() < .5){
			randNum = -randNum}
			
				explP.explP.rand =	randNum;
			
		//explP.explP.rand = this.rand[i];
			//explP.startFire();
			/*var shape = new lib.fireInner();
			var scl_rnd =  (Math.random() * 1) + 0.2;
			var coord_rdm = Math.floor(Math.random() * (30 + 0 + 1)) - 0;
			var coord_rdm2 = Math.floor(Math.random() * (30 + 30 + 1)) - 30;
			var coord_rdm3 = Math.floor(Math.random() * (30 + 30 + 1)) - 30;*/
		//	explP.rotation = i * 60;
			//explP.scaleX = explP.scaleY = i * .2 +   .1;
		//	console.log(this.explpc.rotation);
			this.explpc.addChild(explP);
		
		}
		/*
		TweenMax.to(this.parent.overlay, 0.05, {delay:0, alpha:1,  ease:Linear.easeNone  });
		TweenMax.to(this.parent.overlay, 0.9, {delay:0.05, alpha:0,  ease:Linear.easeNone  });
		
		TweenMax.to(this.parent.overlay2, 0.05, {delay:0, alpha:1,  ease:Linear.easeNone  });
		TweenMax.to(this.parent.overlay2, 0.9, {delay:0.05, alpha:0,  ease:Linear.easeNone  });
		*/
		
		/*
		this.parent.gotoAndPlay('phaseBend');
		*/
	}
	this.frame_31 = function() {
		//this.parent.ovShot.visible = false;
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(30).call(this.frame_30).wait(1).call(this.frame_31).wait(1));

	// Layer 4
	this.sparks = new lib.sparks_inner();
	this.sparks.parent = this;
	this.sparks.setTransform(0.5,-0.9,1,0.3,0,0,0,-3.1,19.9);
	this.sparks.compositeOperation = "lighter";
	this.sparks._off = true;

	this.timeline.addTween(cjs.Tween.get(this.sparks).wait(30).to({_off:false},0).wait(2));

	// Fire
	this.fire = new lib.tankShot();
	this.fire.parent = this;
	this.fire.setTransform(0,-8.9,0.2,0.2,0,0,0,0,-41);
	this.fire._off = true;

	this.timeline.addTween(cjs.Tween.get(this.fire).wait(30).to({_off:false},0).wait(2));

	// Smoke circular
	this.smokeTop = new lib.tankSmoke();
	this.smokeTop.parent = this;
	this.smokeTop.setTransform(0,-4,0.2,0.2,0,0,0,-0.3,-20.8);
	this.smokeTop._off = true;

	this.timeline.addTween(cjs.Tween.get(this.smokeTop).wait(30).to({_off:false},0).wait(2));

	// Layer 3
	this.explpc = new lib.explPartsContainer();
	this.explpc.parent = this;
	this.explpc.setTransform(-0.2,0.2);
	this.explpc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.explpc).wait(30).to({_off:false},0).wait(2));

	// Layer 5
	this.circ = new lib.circ();
	this.circ.parent = this;
	this.circ.setTransform(-0.2,0.2,0.4,0.4,0,0,0,-0.1,0.1);
	this.circ.alpha = 0.391;
	this.circ.compositeOperation = "lighter";
	this.circ._off = true;

	this.timeline.addTween(cjs.Tween.get(this.circ).wait(30).to({_off:false},0).wait(2));

	// Pic
	this.pic = new lib.Symbol16();
	this.pic.parent = this;
	this.pic.setTransform(-0.1,-3.3,1,1,0,0,0,0,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.pic).to({_off:true},1).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.6,-8.7,7,11.1);


(lib.explP = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.explP = new lib.explosionPart();
	this.explP.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.explP).wait(1));

}).prototype = getMCSymbolPrototype(lib.explP, new cjs.Rectangle(-1.6,-1.6,3.3,3.3), null);


(lib.d_flying_outer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		TweenMax.to(this.d1, 10.45, {delay:0.0,   x:"+=20", y:"+=27",  ease:Linear.easeNone } ); 
		TweenMax.to(this.d2, 10.45, {delay:0.0,   x:"+=15", y:"+=10",  ease:Linear.easeNone } ); 
		TweenMax.to(this.d3, 10.45, {delay:0.0,   x:"+=10", y:"+=5",  ease:Linear.easeNone } ); 
		TweenMax.to(this.d4, 10.45, {delay:0.0,   x:"-=5", y:"-=5",  ease:Linear.easeNone } );
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.d4 = new lib.d_flying_inner();
	this.d4.parent = this;
	this.d4.setTransform(19.3,59.5,1,1,15.3,0,0,0.1,0.1);

	this.d3 = new lib.d_flying_inner();
	this.d3.parent = this;
	this.d3.setTransform(42.2,-27.5,1,1,15.3);

	this.d1 = new lib.d_flying_inner();
	this.d1.parent = this;
	this.d1.setTransform(-43.4,-29.6,1,1,15.3);

	this.d2 = new lib.d_flying_inner();
	this.d2.parent = this;
	this.d2.setTransform(-6.9,5.9,1,1,15.3,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.d2},{t:this.d1},{t:this.d3},{t:this.d4}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.d_flying_outer, new cjs.Rectangle(-63.1,-50.6,129.8,128.5), null);


(lib.Button_main_NX = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.play_free1.btnPic.shadow = new createjs.Shadow("#000000", 1, 1, 4.5);
		this.play_free1.btnPic.cache(-100, -100, 200, 200, 1.5 );
		
		
		this.play_free1.button.addEventListener("rollover", over_func.bind(this));
		function over_func()    {
			
			this.play_free1.gotoAndStop('phase2');	
			TweenMax.to(this.play_free1, 0.7, {delay: 0.0,  scaleX:1.12, scaleY:1.12, ease:Elastic.easeOut  } );
		
			
			
		
			}
		
		this.play_free1.button.addEventListener("rollout", out_func.bind(this));
		function out_func()    {
			
			this.play_free1.gotoAndStop('phase1');	
			TweenMax.to(this.play_free1, 0.45, {delay: 0.0,  scaleX:1, scaleY:1, ease:Expo.easeOut  } );
			
			}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.play_free1 = new lib.Button_134x36_Main();
	this.play_free1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.play_free1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Button_main_NX, new cjs.Rectangle(-71,-18,142,36), null);


(lib.Cam_MC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{next1:1,"final":2});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		
		this.aArea1.alpha = 0.01;
		
		document.getElementById('docBody').style.cursor = "default";
		canvasNX = document.getElementById('canvas');
		
		this.curs1.curs.curs2.alpha = 0;
		stageNX = stage.getChildAt(0).main_mc.cam_mc;
		stageNX.weapon.bullet2.alpha = 0;
		
		moveCursor = false;
		autoplay = true;
		stageNX.curs1.x = 0;
		stageNX.curs1.y = -5;
		
		//replayCounter++;
		
		TweenMax.to(this.curs1.curs, 5, {bezier:{type:'quadratic', values:[/*p1*/{x:0, y:0},{x:15, y:0},{x:15, y:15},  /*p2*/{x:15, y:30},{x:0, y:30},  /*p3*/{x:-15, y:30},{x:-15, y:15},  /*p4*/{x:-15, y:0},{x:0, y:0}]}/*bezier end*/, repeat:-1, ease:Linear.easeNone});
		
		TweenMax.from(stageNX.logo, 1.75, {delay:0.5,   x:"-=50",  alpha:0,   ease:Expo.easeOut } ); 
		
		
		TweenMax.from(stageNX.sDucks.duck, 12.45, {delay:0.0,   x:"-=200",     ease:Sine.easeOut } ); 
		TweenMax.from(stageNX.sDucks.duck_refl, 12.45, {delay:0.0,   x:"-=200",     ease:Sine.easeOut } ); 
		TweenMax.from(stageNX.sDucks.duck2, 10.45, {delay:.0,   x:"+=200",     ease:Sine.easeOut } ); 
		TweenMax.from(stageNX.sDucks.duck2_refl, 10.45, {delay:.0,   x:"+=200",     ease:Sine.easeOut } ); 
		
		
		this.grass_l.alpha  = 0;
		
		
		stageNX.myPlay = function(){ stageNX.gotoAndStop('next1'); };
		//появление	
		TweenMax.from(stageNX.sDucks, 2.25, {delay:0.0,    scaleX:1.5,   scaleY:1.5,     ease:Expo.easeOut } );
		
		TweenMax.to(stageNX.black, 0.45, {delay:0, alpha:0,  ease:Linear.easeNone } );
			
		TweenMax.from(stageNX.plate, 0.45, {delay:0.3,   scaleX:0,     ease:Expo.easeOut } ); 
		
		TweenMax.from(stageNX.t1, 0.45, {delay:0.5,    scaleX:5,   scaleY:5, alpha:0,   ease:Expo.easeOut } );
		TweenMax.to(stageNX.t1, 0.45, {delay:1.5,    scaleX:0,   scaleY:0,     ease:Expo.easeIn } );
		
		TweenMax.from(stageNX.curs1, 0.7, {delay:2.1,    scaleX:2,   scaleY:2,  alpha: 0,    ease:Expo.easeOut } ); 
		TweenMax.from(stageNX.weapon, 0.7, {delay:2.1,    y:"+=70",      ease:Expo.easeOut } ); 
		
		TweenMax.from(stageNX.t2, 0.45, {delay:2.0,    scaleX:5,   scaleY:5, alpha:0,    ease:Expo.easeOut } );
		TweenMax.from(stageNX.aArea1, 0.01, {delay:2.8,  y:2000 } );
		
		////////////// functions //////////////////
		
			
		stageNX.goNext1 = function(){
			stageNX.aArea1.y = -2000;
			stageNX.aArea1.x = -2000;
			
				TweenMax.to(stageNX.t2, 0.45, {delay:0.0,    scaleX:0,   scaleY:0,     ease:Expo.easeIn } );
				
				stageNX.weapon.bullet2.alpha = 1;
				TweenMax.to(stageNX.weapon.bullet1, 0.45, {delay:0.5,   x:"+=10", y:"-=30",  alpha:0,    ease:Expo.easeOut } );
				TweenMax.from(stageNX.weapon.bullet2, 0.45, {delay:0.6,   x:"-=10", y:"+=30",  alpha:0,    ease:Expo.easeOut } );
		
				TweenMax.to(stageNX.sDucks.duck, 1.45, {delay:0.0,   x:"+=300",   overwrite:"all",   ease:Sine.easeIn } ); 
				TweenMax.to(stageNX.sDucks.duck_refl, 1.45, {delay:0.0,   x:"+=300",  overwrite:"all",    ease:Sine.easeIn } ); 
			
				TweenMax.to(stageNX.sDucks.duck2, 1.45, {delay:0.1,   x:"-=250",   overwrite:"all",   ease:Sine.easeIn } ); 
				TweenMax.to(stageNX.sDucks.duck2_refl, 1.45, {delay:0.1,   x:"-=250",  overwrite:"all",    ease:Sine.easeIn } ); 
		
		
			
		document.getElementById('docBody').style.cursor = "none";
		/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
		TweenMax.to(stageNX.sDucks, 1.2, {delay:0.0,   x:-121, y: 18,    rotation:"+=0",   scaleX:.1,   scaleY:.1,   ease:Expo.easeInOut } ); 
		TweenMax.to(stageNX.sDucks, 0.3, {delay:0.5,    alpha:0,   ease:Linear.easeNone } ); 
		TweenMax.from(stageNX.sSea, 1.2, {delay:0.05,   x:"+=2000", y: "-=300",      rotation:"+=0",   scaleX:15,   scaleY:15,   ease:Expo.easeInOut, onComplete: stageNX.myPlay } ); 
		/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
		
		var grassDelay = .0;
		
		TweenMax.from(stageNX.grass_l, 1.2, {delay: grassDelay + 0.0,   x:"+=700", y: "+=300",     rotation:"+=0",   scaleX:10,   scaleY:10,   ease:Expo.easeInOut } ); 
		TweenMax.to(stageNX.grass_l, 0.15, {delay: grassDelay + 0.3,   alpha:1,   ease:Linear.easeNone } ); 
		TweenMax.to(stageNX.grass_l, 0.15, {delay: grassDelay + 0.55,   alpha:0,   ease:Linear.easeNone } ); 
		TweenMax.to(stageNX.curs1.curs.curs1, 0.35, {delay:0,  alpha:0, scaleX:.5,   scaleY:.5,  ease:Expo.easeIn } ); 
		TweenMax.to(stageNX.curs1.curs.curs2, 0.55, {delay:0.2,  alpha:1, scaleX:1.25,   scaleY:1.25,  ease:Expo.easeOut } ); 
		TweenMax.from(stageNX.curs1.curs.curs2.green, 0.75, {delay:0.35,  rotation:360, scaleX:2,   scaleY:2,  ease:Expo.easeOut } ); 
			
		
			} 
		
		stageNX.userInteraction1 = function(){
				stageNX.autoplay1.stop();
				stageNX.aArea1.removeEventListener("mouseover", stageNX.userInteraction1);
				moveCursor = true;
				stageNX.goNext1();
			}
			
		stageNX.placeCursor = function (){ 
					moveCursor = false;
		
				TweenMax.to(stageNX.curs1, 1.7, {delay:0.3,  x:0, y:-5,    ease:Cubic.easeInOut } ); 
		}	
		
		stageNX.aArea1.addEventListener("mouseover", stageNX.userInteraction1);
		canvasNX.addEventListener("mouseout", stageNX.placeCursor);
	}
	this.frame_1 = function() {
		this.stop();
		this.aAreaAir.alpha = 0.01;
		this.aAreaSea.alpha = 0.01;
		
		TweenMax.from(stageNX.ducks, 1.45, {delay:0.0,    alpha:0,  ease:Linear.easeNone } ); 
		
		TweenMax.to(stageNX.ducks, 15.45, {delay:0.0,   x:"+=400", y:"-=150", scaleX:.15,   scaleY:.15,   ease:Linear.easeNone } ); 
		TweenMax.to(stageNX.ducks, 7.45, {delay:2.0,    alpha:.5,  ease:Linear.easeNone } ); 
		
		TweenMax.from(stageNX.t3, 0.45, {delay:0.0,    scaleX:5,   scaleY:5, alpha:0,   ease:Expo.easeOut } );
		
		
		stageNX.scaleIn = function (){ 
					stageNX.autoplay2.stop();
		
				TweenMax.to(stageNX.sSea, 1.2, {delay:0.0,    scaleX:1.05,   scaleY:1.05,  alpha: 1,    ease:Expo.easeOut } );		
				moveCursor = true;
		}
		
		stageNX.scaleOut = function (){ 
				stageNX.autoplay2.gotoAndPlay(0);
				TweenMax.to(stageNX.sSea, 0.7, {delay:0.0,    scaleX:1,   scaleY:1,  alpha: 1,    ease:Expo.easeOut } );
		}
		
				
		canvasNX.addEventListener("mousemove", stageNX.scaleIn); 
		canvasNX.addEventListener("mouseout", stageNX.scaleOut);
	}
	this.frame_2 = function() {
		this.stop();
		
		
		
		stageNX.myPlayFinal = function(){ stageNX.play(); };
		
				canvasNX.removeEventListener("mousemove", this.scaleIn);
				canvasNX.removeEventListener("mouseout", this.scaleOut);
		TweenMax.to(stageNX.sSea, 1.7, {delay:0,   scaleX:1, scaleY:1,  ease:Cubic.easeInOut });
		
		TweenMax.from(stageNX.button_mc, 0.4, {delay:0.9 ,  alpha:1,    scaleX:0,   scaleY:0,   ease:Back.easeOut } ); 
		TweenMax.from(stageNX.tryAgain, 0.45, {delay:1.1, y: "+=20", alpha:1, ease:Expo.easeOut } );
		
		stageNX.restartFunc = function(){
			stageNX.tryAgain.tryAgain.button.removeEventListener("click", stageNX.restartFunc); 
			TweenMax.killTweensOf(stageNX);
			
			TweenMax.to(stageNX.logo, 0.75, {delay:0.0,   x:"-=50", alpha:0,     ease:Expo.easeIn } ); 
		
		
			TweenMax.to(stageNX.black, 0.95,		{delay:  0.0,    alpha:1, ease:Linear.easeNone } );
			TweenMax.to(stageNX, 0.0, 					{delay:  1.2,    onComplete: stageNX.myPlayFinal } ); 
			
			}	
		
		
		if (replayCounter < 1){ 
			
			TweenMax.to(stageNX, 0.0,  {delay:  9.2,    onComplete: stageNX.restartFunc } ); 
		
			} else {
						canReplay = false;
				
			var nxTime = 3.7;
			var nxEasing = Cubic;
				var stopDelay = 8.5;
			tsParam = 0;
		
		  TweenMax.to(stageNX.sSea.tweenShip, nxTime, {delay:  stopDelay, timeScale:tsParam, ease:nxEasing.easeOut })
		  TweenMax.to(stageNX.sSea.tweenShipRefl,nxTime,{delay:  stopDelay, timeScale:tsParam, ease:nxEasing.easeOut })
		 // TweenMax.to(stageNX.sSea.sea.sea.tweenSea1,nxTime,{delay:  stopDelay, timeScale:tsParam, ease:nxEasing.easeOut })
		 // TweenMax.to(stageNX.sSea.sea.sea.tweenSea2,nxTime,{delay:  stopDelay, timeScale:tsParam, ease:nxEasing.easeOut })
		  TweenMax.to(stageNX.sSea.sea.sea, 1.5 ,{delay:  stopDelay, alpha:0, ease:Linear.easeNone })
		  
			TweenMax.to(stageNX.sSea.island.w0, 1.5,  {delay:  stopDelay + 0.3, alpha:0,  ease:Linear.easeNone  } ); 
			TweenMax.to(stageNX.sSea.island.w1, 1.5,  {delay:  stopDelay + 0.3, alpha:0,  ease:Linear.easeNone  } ); 
			TweenMax.to(stageNX.sSea.island.w2, 1.5,  {delay:  stopDelay + 0.3, alpha:0,  ease:Linear.easeNone  } ); 
			TweenMax.to(stageNX.sSea.island.wStatic1, 1.0,  {delay:  stopDelay, alpha:1,  ease:Linear.easeNone  } ); 
			
				TweenMax.to(stageNX.sSea.wShip1, 1.5,  {delay:  stopDelay, alpha:0,  ease:Linear.easeNone  } ); 
				TweenMax.to(stageNX.sSea.wShip2, 1.5,  {delay:  stopDelay, alpha:0,  ease:Linear.easeNone  } ); 
				TweenMax.to(stageNX.sSea.wShip3, 1.5,  {delay:  stopDelay, alpha:0,  ease:Linear.easeNone  } ); 
				TweenMax.to(stageNX.sSea.wShip4, 1.5,  {delay:  stopDelay, alpha:0,  ease:Linear.easeNone  } ); 
		
		  
		
				}
				
		stageNX.clickFunc = function () {ExitApi.exit();}
		
		stageNX.button_mc.play_free1.button.addEventListener("click", stageNX.clickFunc);
		stageNX.clickArea.addEventListener("click", stageNX.clickFunc);
		
				
			
			
		stageNX.tryAgain.tryAgain.button.addEventListener("click", stageNX.restartFunc);
	}
	this.frame_3 = function() {
		stage.removeChildAt(0);
		stage.addChild(new lib.WOWS_Hunting_Season_970x90());
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Autoplays
	this.autoplay1 = new lib.autoplay1();
	this.autoplay1.parent = this;
	this.autoplay1.setTransform(-594.9,-185);

	this.autoplay2 = new lib.autoplay2();
	this.autoplay2.parent = this;
	this.autoplay2.setTransform(-624.9,-185);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.autoplay1}]}).to({state:[{t:this.autoplay2}]},1).to({state:[]},1).wait(2));

	// Black
	this.black = new lib.black_rectcopy();
	this.black.parent = this;
	this.black.setTransform(0,0,2.887,0.321,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.black).to({_off:true},3).wait(1));

	// Coordinator
	this.coordinator = new lib.coordinator();
	this.coordinator.parent = this;
	this.coordinator.setTransform(-620,0);

	this.timeline.addTween(cjs.Tween.get(this.coordinator).to({_off:true},3).wait(1));

	// aArea
	this.aArea1 = new lib.activeArea_1();
	this.aArea1.parent = this;
	this.aArea1.setTransform(0,0,2.946,1);

	this.aAreaSea = new lib.activeAreaSea();
	this.aAreaSea.parent = this;
	this.aAreaSea.setTransform(0.4,165.7,3.118,1.054,0,0,0,0.1,0);

	this.aAreaAir = new lib.activeAreaAir();
	this.aAreaAir.parent = this;
	this.aAreaAir.setTransform(0.4,-148,3.478,1.189,0,0,0,0.1,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.aArea1}]}).to({state:[{t:this.aAreaAir},{t:this.aAreaSea}]},1).to({state:[]},1).to({state:[]},1).wait(1));

	// Logo
	this.logo = new lib.Symbol7();
	this.logo.parent = this;
	this.logo.setTransform(-340,0);

	this.timeline.addTween(cjs.Tween.get(this.logo).to({_off:true},3).wait(1));

	// Cursor
	this.curs1 = new lib.aim_1();
	this.curs1.parent = this;
	this.curs1.setTransform(0.2,-4.8,0.5,0.5,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.curs1).to({_off:true},3).wait(1));

	// TXT
	this.t2 = new lib.t2();
	this.t2.parent = this;
	this.t2.setTransform(376,1,1,1,0,0,0,0,7);

	this.t1 = new lib.t1();
	this.t1.parent = this;
	this.t1.setTransform(376,1,1,1,0,0,0,0,7);

	this.t3 = new lib.t3();
	this.t3.parent = this;
	this.t3.setTransform(376,1,1,1,0,0,0,0,7);

	this.button_mc = new lib.Button_main_NX();
	this.button_mc.parent = this;
	this.button_mc.setTransform(380.1,0.1,0.998,0.992,0,0,0,0.1,0.1);

	this.tryAgain = new lib.tryAgainPlate_outer();
	this.tryAgain.parent = this;
	this.tryAgain.setTransform(380,42,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2}]}).to({state:[{t:this.t3}]},1).to({state:[{t:this.tryAgain},{t:this.button_mc}]},1).to({state:[]},1).wait(1));

	// UI
	this.weapon = new lib.weapon_UI();
	this.weapon.parent = this;
	this.weapon.setTransform(232,18.1,0.8,0.8,0,0,0,0,0.2);

	this.plate = new lib.plate();
	this.plate.parent = this;
	this.plate.setTransform(376,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.plate},{t:this.weapon}]}).to({state:[]},2).to({state:[]},1).wait(1));

	// GFX
	this.grass_l = new lib.grass_mc();
	this.grass_l.parent = this;
	this.grass_l.setTransform(-155.2,44.5,0.1,0.1,0,0,0,0,-0.5);

	this.ducks = new lib.d_flying_outer();
	this.ducks.parent = this;
	this.ducks.setTransform(-122.7,13.4,0.251,0.251,0,0,180);
	this.ducks.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.grass_l}]}).to({state:[{t:this.ducks}]},1).to({state:[]},2).wait(1));

	// Grass / island up
	this.sDucks = new lib.scene_ducks();
	this.sDucks.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.sDucks).to({_off:true},1).wait(3));

	// Button
	this.clickArea = new lib.Button_Main();
	this.clickArea.parent = this;
	this.clickArea.setTransform(0,0,2.917,0.429);
	this.clickArea._off = true;
	new cjs.ButtonHelper(this.clickArea, 0, 1, 2, false, new lib.Button_Main(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickArea).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// BKG
	this.sSea = new lib.scene_sea();
	this.sSea.parent = this;
	this.sSea.setTransform(0,-10);

	this.timeline.addTween(cjs.Tween.get(this.sSea).to({_off:true},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-641.2,-328.2,1303.8,541.7);


(lib.Main_MC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{shakeBig:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8));

	// Layer 1
	this.cam_mc = new lib.Cam_MC();
	this.cam_mc.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.cam_mc).wait(1).to({x:1,y:1},0).wait(1).to({x:-1,y:-2},0).wait(1).to({y:2},0).wait(1).to({x:3,y:-2},0).wait(1).to({x:-3,y:2},0).wait(1).to({x:2,y:-3},0).wait(1).to({x:1,y:4},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-641.2,-328.2,1303.8,541.7);


// stage content:
(lib.WOWS_Hunting_Season_970x90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//РАМКА	
		var shape = new createjs.Shape(new createjs.Graphics().beginStroke("#272727").drawRect(0.5,0.5,canvas.width-1,canvas.height-1));
		this.addChild(shape);
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Main_MC
	this.main_mc = new lib.Main_MC();
	this.main_mc.parent = this;
	this.main_mc.setTransform(485,45);
	this.main_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.main_mc).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	width: 970,
	height: 90,
	fps: 60,
	color: "#333333",
	opacity: 0.54,
	webfonts: {},
	manifest: [
		{src:"img_970x90/back_I_980x120.jpg", id:"back_I_980x120"},
		{src:"img_970x90/back_II_980x120.jpg", id:"back_II_980x120"},
		{src:"img_970x90/bullet_I_XL.png", id:"bullet_I_XL"},
		{src:"img_970x90/bullet_II_XL.png", id:"bullet_II_XL"},
		{src:"img_970x90/button_336x280.png", id:"button_336x280"},
		{src:"img_970x90/duck_336_body.png", id:"duck_336_body"},
		{src:"img_970x90/duck_336_head.png", id:"duck_336_head"},
		{src:"img_970x90/duck_336_neck.png", id:"duck_336_neck"},
		{src:"img_970x90/duck_body.png", id:"duck_body"},
		{src:"img_970x90/duck_wing.png", id:"duck_wing"},
		{src:"img_970x90/explosion_small.png", id:"explosion_small"},
		{src:"img_970x90/grass_336.png", id:"grass_336"},
		{src:"img_970x90/iceland_336.png", id:"iceland_336"},
		{src:"img_970x90/logo_hor_336.png", id:"logo_hor_336"},
		{src:"img_970x90/ship_336.png", id:"ship_336"},
		{src:"img_970x90/smoke.png", id:"smoke"},
		{src:"img_970x90/sparks.jpg", id:"sparks"},
		{src:"img_970x90/water_circle.png", id:"water_circle"},
		{src:"img_970x90/wave.png", id:"wave"},
		{src:"img_970x90/wave_2.png", id:"wave_2"},
		{src:"img_970x90/wave_cut.png", id:"wave_cut"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;